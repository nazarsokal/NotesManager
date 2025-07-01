namespace NotesManager.API.DTOs;

public class NoteListDto
{
    public Guid NoteId { get; set; }
    public required string Title { get; set; }
    public DateTime DateCreated { get; set; }
}