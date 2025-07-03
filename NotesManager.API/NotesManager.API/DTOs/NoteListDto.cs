namespace NotesManager.API.DTOs;

public class NoteListDto
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public DateTime DateCreated { get; set; }
}