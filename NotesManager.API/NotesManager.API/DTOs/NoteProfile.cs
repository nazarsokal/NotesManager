using AutoMapper;
using NotesManager.API.Models;

namespace NotesManager.API.DTOs;

public class NoteProfile : Profile
{
    public NoteProfile()
    {
        CreateMap<NoteCreateDto, Note>();
        CreateMap<NoteListDto, Note>();
        CreateMap<NoteReadDto, Note>();
        CreateMap<NoteUpdateDto, Note>();
        
        //Reversed
        CreateMap<Note, NoteCreateDto>();
        CreateMap<Note, NoteListDto>();
        CreateMap<Note, NoteReadDto>();
        CreateMap<Note, NoteUpdateDto>();
    }
}