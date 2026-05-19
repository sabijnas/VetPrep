using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/users")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null)
            return BadRequest("Invalid emial or password");

            bool validPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.Password);
            if (!validPassword)
            return BadRequest("Invalid email or password");

            return Ok(new
            {
                user.UserId,
                user.UserName,
                user.PetName,
                user.Email
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            var exists = await _context.Users.AnyAsync(u => u.Email == dto.Email);
            if (exists)
            return BadRequest("Something went wrong");

            var user = new User
            {
                UserName = dto.UserName,
                PetName = dto.PetName,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                user.UserId,
                user.UserName,
                user.PetName,
                user.Email
            });
        }
    }
}