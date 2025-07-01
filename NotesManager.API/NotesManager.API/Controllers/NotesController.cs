using Microsoft.AspNetCore.Mvc;

namespace NotesManager.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    [HttpGet]
    public IActionResult Notes()
    {
        return Ok("Hello World!");
    }

    [HttpGet("{id}")]
    public IActionResult Notes(Guid id)
    {
        return Ok($"Your id: {id}");
    }
}