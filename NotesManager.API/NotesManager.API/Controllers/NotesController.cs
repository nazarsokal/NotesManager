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
        var noteListDtos = await _noteService.GetAllNotes();
        
        if (noteListDtos == null || !noteListDtos.Any())
            return NoContent();
        
        return Ok(noteListDtos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Notes(Guid id)
    {
        if (id == Guid.Empty)
            return BadRequest("Invalid note ID.");
        
        var noteReadDto = await _noteService.GetNoteById(id);
        
        if (noteReadDto == null)
            return NotFound($"Note with ID {id} not found.");
        
        return Ok(noteReadDto);
    }

    [HttpPost]
    public async Task<IActionResult> Notes([FromBody] NoteCreateDto? noteCreateDto)
    {
        if (noteCreateDto == null)
            return BadRequest("Note data is required.");
        
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        
        var noteCreated = await _noteService.CreateNote(noteCreateDto);
        
        if (noteCreated == null)
            return StatusCode(500, "An error occurred while creating the note.");
        
        return Ok(noteCreated);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Notes(Guid id, [FromBody] NoteUpdateDto? noteUpdateDto)
    {
        if (id == Guid.Empty)
            return BadRequest("Invalid note ID.");

        if (noteUpdateDto == null)
            return BadRequest("Update data is required.");

        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        
        var noteUpdated = await _noteService.UpdateNote(noteUpdateDto, id);
        
        return Ok(noteUpdated);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> NotesToDelete(Guid id)
    {
        if (id == Guid.Empty)
            return BadRequest("Invalid note ID.");
        
        var wasDeleted = await _noteService.DeleteNote(id);
        
        if (!wasDeleted)
            return NotFound($"Note with ID {id} not found or already deleted.");
        
        return Ok();
    }
}