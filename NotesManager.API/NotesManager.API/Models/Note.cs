using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotesManager.API.Models;

public class Note
{
    [Key]
    public Guid NoteId { get; set; }
    
    [Column(TypeName = "nvarchar(100)")]
    public required string Title { get; set; }
    
    [Column(TypeName = "nvarchar(max)")]
    public required string Content { get; set; }
    
    public required DateTime DateCreated { get; set; }
}