namespace NotesManager.API.DTOs;

public class NoteUpdateDto
{
    public required string Title { get; set; }
    public required string Content { get; set; }
}