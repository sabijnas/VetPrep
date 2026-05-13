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
    }
}