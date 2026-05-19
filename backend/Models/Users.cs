public class User
{
    public int UserId {get; set;}
    public string UserName {get; set;} = null!;
    public string Email {get; set;} = null!;
    public string Password {get; set;} = null!;
    public string PetName {get; set;} = null!;
}

public class RegisterDto
{
    public string UserName {get; set;} = null!; 
    public string PetName {get; set;} = null!;
    public string Email {get; set;} = null!;
    public string Password {get; set;} = null!;
}

public class LoginDto
{
    public string Email {get; set;} = null!;
    public string Password {get; set;} = null!;
}