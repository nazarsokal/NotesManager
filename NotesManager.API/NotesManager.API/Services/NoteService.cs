using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NotesManager.API.DTOs;
using NotesManager.API.Infrastructure;
using NotesManager.API.Interfaces;

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
    
    public Task<List<NoteListDto>> GetAllNotes()
    {
        throw new NotImplementedException();
    }

    public Task<NoteReadDto> GetNoteById(int id)
    {
        throw new NotImplementedException();
    }

    public Task CreateNote(NoteCreateDto note)
    {
        throw new NotImplementedException();
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