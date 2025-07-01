using Microsoft.EntityFrameworkCore;

namespace NotesManager.API.Infrastructure;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public ApplicationDbContext()
    {
    }
}