namespace NotesManager.API.DTOs;

public class NoteReadDto
{
    public Guid NoteId { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public DateTime DateCreated { get; set; }
}