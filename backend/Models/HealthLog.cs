public class HealthLog
{
    public int Id {get; set;}
    public int UserId {get; set;}
    public DateTime Date {get; set;}
    public string Event {get; set;} = null!;
    public string Note {get; set;} = null!;
    public string? ImagePath {get; set;}
}

public class HealthLogDto
{
    public int UserId {get; set;}
    public DateTime Date {get; set;}
    public string Event {get; set;} = null!;
    public string Note{get; set;} = null!;
    public IFormFile? Image {get; set;}
}