using Microsoft.AspNetCore.Mvc;
using NotesManager.API.DTOs;
using NotesManager.API.Interfaces;

namespace NotesManager.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    private readonly INoteService _noteService;

    public NotesController(INoteService noteService)
    {
        _noteService = noteService;
    }
    
    [HttpGet]
    public async Task<IActionResult> Notes()
    {
        List<NoteListDto> noteListDtos = await _noteService.GetAllNotes();
        
        return Ok(noteListDtos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Notes(Guid id)
    {
        var noteReadDto = await _noteService.GetNoteById(id);
        
        return Ok(noteReadDto);
    }

    [HttpPost]
    public async Task<IActionResult> Notes([FromBody] NoteCreateDto noteCreateDto)
    {
        var noteCreated = await _noteService.CreateNote(noteCreateDto);
        
        return Ok(noteCreated);
    }
}