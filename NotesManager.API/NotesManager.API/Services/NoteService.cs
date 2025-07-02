using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NotesManager.API.DTOs;
using NotesManager.API.Infrastructure;
using NotesManager.API.Interfaces;
using NotesManager.API.Models;

namespace NotesManager.API.Services;

public class NoteService : INoteService
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IMapper _mapper;

    public NoteService(ApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }
    
    public async Task<List<NoteListDto>?> GetAllNotes()
    {
        var notes = await _dbContext.Notes.ToListAsync();
        
        return _mapper.Map<List<NoteListDto>>(notes);
    }

    public async Task<NoteReadDto?> GetNoteById(Guid id)
    {
        var note = await _dbContext.Notes.FindAsync(id);
        
        return _mapper.Map<NoteReadDto>(note);
    }

    public async Task<NoteReadDto?> CreateNote(NoteCreateDto note)
    {
        Note noteEntity = _mapper.Map<Note>(note);
        
        _dbContext.Notes.Add(noteEntity);
        await _dbContext.SaveChangesAsync();
        
        return _mapper.Map<NoteReadDto>(noteEntity);
    }

    public async Task<NoteReadDto?> UpdateNote(NoteUpdateDto note, Guid id)
    {
        Note? noteEntityToUpdate = await _dbContext.Notes.FindAsync(id);
        
        if (noteEntityToUpdate == null)
            throw new NullReferenceException($"Note with id: {id} not found");
        
        noteEntityToUpdate.Title = note.Title;
        noteEntityToUpdate.Content = note.Content;
        
        _dbContext.Notes.Update(noteEntityToUpdate);
        await _dbContext.SaveChangesAsync();
        
        return _mapper.Map<NoteReadDto>(noteEntityToUpdate);
    }

    public async Task<bool> DeleteNote(Guid id)
    {
        var noteToDelete = await _dbContext.Notes.FindAsync(id);
        
        if(noteToDelete == null)
            return false;
        
        _dbContext.Notes.Remove(noteToDelete);
        await _dbContext.SaveChangesAsync();
        
        return true;
    }
}