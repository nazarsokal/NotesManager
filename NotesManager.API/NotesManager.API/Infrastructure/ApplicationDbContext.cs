using Microsoft.EntityFrameworkCore;
using NotesManager.API.Models;

namespace NotesManager.API.Infrastructure;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public ApplicationDbContext()
    {
    }
    
    public virtual DbSet<Note> Notes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Note>().HasData(new Note() {NoteId = Guid.NewGuid(), Title = "Welcome Note", Content = "Hello World!", Created = DateTime.Now});
    }
}