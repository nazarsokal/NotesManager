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
    
    public async Task<List<NoteListDto>> GetAllNotes()
    {
        var notes = await _dbContext.Notes.ToListAsync();
        
        return _mapper.Map<List<NoteListDto>>(notes);
    }

    public async Task<NoteReadDto> GetNoteById(Guid id)
    {
        var note = await _dbContext.Notes.FindAsync(id);
        
        return _mapper.Map<NoteReadDto>(note);
    }

    public async Task<NoteReadDto> CreateNote(NoteCreateDto note)
    {
        Note noteEntity = _mapper.Map<Note>(note);
        
        _dbContext.Notes.Add(noteEntity);
        await _dbContext.SaveChangesAsync();
        
        return _mapper.Map<NoteReadDto>(noteEntity);
    }

    public Task UpdateNote(NoteUpdateDto note)
    {
        throw new NotImplementedException();
    }

    public Task DeleteNote(Guid id)
    {
        throw new NotImplementedException();
    }
}