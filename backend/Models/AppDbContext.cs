using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<User> Users{get; set;}
    public DbSet<HealthLog> HealthLogs{get; set;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword("test");

        modelBuilder.Entity<User>().HasData(
            new User
            {
                UserId = 1,
                UserName = "Sabina",
                Password = hashedPassword,
                Email = "sabina@mail.com",
                PetName = "Xanthos"
            }
        );

        modelBuilder.Entity<HealthLog>().HasData(
            new HealthLog
            {
                Id = 1,
                UserId = 1,
                Date = DateTime.UtcNow.AddDays(-17),
                Event = "Hälta",
                Note = "Haltade på höger bakben i cirka 10 minuter vid lunchpromenaden. Blev bättre när vi kom in, ingen mer hälta under dagen."
            },
            new HealthLog
            {
                Id = 2,
                UserId = 1,
                Date = DateTime.UtcNow.AddDays(-12),
                Event = "Magont",
                Note = "Hade ont i magen, ingen aptit under dagen. Släppte under kvällen och mådde bättre dagen efter."
            },
            new HealthLog
            {
                Id = 3,
                UserId = 1,
                Date = DateTime.UtcNow.AddDays(-41),
                Event = "Hälta",
                Note = "Haltade på höger bakben under dagen, bra allmäntillstånd i övrigt. Blev bättre under kvällen."
            }
        );
    }
}