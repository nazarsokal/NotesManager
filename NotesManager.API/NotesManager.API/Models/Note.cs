using System.ComponentModel.DataAnnotations;

namespace NotesManager.API.Models;

public class Note
{
    [Key]
    public Guid NoteId { get; set; }
    
    public required string Title { get; set; }
    
    public required string Content { get; set; }
    
    public required DateTime Created { get; set; }
}