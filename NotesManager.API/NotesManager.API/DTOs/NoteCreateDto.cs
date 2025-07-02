namespace NotesManager.API.DTOs;

public class NoteCreateDto
{
    public required string Title { get; set; }
    public required string Content { get; set; }
}