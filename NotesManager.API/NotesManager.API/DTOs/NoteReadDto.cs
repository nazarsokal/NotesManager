namespace NotesManager.API.DTOs;

public class NoteReadDto
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public DateTime DateCreated { get; set; }
}