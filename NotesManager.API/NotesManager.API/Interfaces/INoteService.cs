using NotesManager.API.DTOs;
using NotesManager.API.Models;

namespace NotesManager.API.Interfaces;

public interface INoteService
{
    public Task<List<NoteListDto>> GetAllNotes();
    
    public Task<NoteReadDto> GetNoteById(Guid id);
    
    public Task<NoteReadDto> CreateNote(NoteCreateDto note);
    
    public Task UpdateNote(NoteUpdateDto note);
    
    public Task DeleteNote(Guid id);
}