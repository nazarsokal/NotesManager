using AutoMapper;
using NotesManager.API.Models;

namespace NotesManager.API.DTOs;

public class NoteProfile : Profile
{
    public NoteProfile()
    {
        CreateMap<NoteCreateDto, Note>()
            .ForMember(dest => dest.DateCreated, 
                opt => opt.MapFrom(src => DateTime.Now));
        
        CreateMap<NoteListDto, Note>();
        CreateMap<NoteReadDto, Note>();
        CreateMap<NoteUpdateDto, Note>();
        CreateMap<NoteReadDto, NoteUpdateDto>();
        
        //Reversed
        CreateMap<Note, NoteCreateDto>();
        CreateMap<Note, NoteListDto>();
        CreateMap<Note, NoteReadDto>();
        CreateMap<Note, NoteUpdateDto>();
    }
}