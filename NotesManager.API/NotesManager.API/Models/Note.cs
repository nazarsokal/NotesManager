using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace NotesManager.API.Models;

public class Note
{
    [Key]
    [JsonPropertyName("id")]
    public Guid NoteId { get; set; }
    
    [Column(TypeName = "nvarchar(100)")]
    public required string Title { get; set; }
    
    [Column(TypeName = "nvarchar(max)")]
    public required string Content { get; set; }
    
    public required DateTime DateCreated { get; set; }
}