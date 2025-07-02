using NotesManager.API.DTOs;
using NotesManager.API.Models;

namespace NotesManager.API.Interfaces;

public interface INoteService
{
    public Task<List<NoteListDto>?> GetAllNotes();
    
    public Task<NoteReadDto?> GetNoteById(Guid id);
    
    public Task<NoteReadDto?> CreateNote(NoteCreateDto note);
    
    public Task<NoteReadDto?> UpdateNote(NoteUpdateDto note, Guid id);
    
    public Task<bool> DeleteNote(Guid id);
}