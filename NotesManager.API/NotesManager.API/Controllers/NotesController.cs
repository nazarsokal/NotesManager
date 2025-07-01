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
        List<NoteListDto> noteList = await _noteService.GetAllNotes();
        
        return Ok(noteList);
    }

    [HttpGet("{id}")]
    public IActionResult Notes(Guid id)
    {
        return Ok($"Your id: {id}");
    }
}