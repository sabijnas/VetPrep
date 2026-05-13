using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/healthlogs")]
    [ApiController]
    public class HealthLogController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HealthLogController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetLogs(int userId)
        {
            var logs = await _context.HealthLogs
            .Where(l => l.UserId == userId)
            .OrderByDescending(l => l.Date)
            .ToListAsync();

            return Ok(logs);
        }

        [HttpPost]
        public async Task<IActionResult> AddHealthLog([FromForm] HealthLogDto dto)
        {
            var log = new HealthLog
            {
                UserId = dto.UserId,
                Date = dto.Date,
                Event = dto.Event,
                Note = dto.Note
            };

            _context.HealthLogs.Add(log);
            await _context.SaveChangesAsync();

            return Ok(log);
        }
    }
}