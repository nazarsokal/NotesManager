using Microsoft.EntityFrameworkCore;
using NotesManager.API.DTOs;
using NotesManager.API.Infrastructure;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default"));
});

builder.Services.AddAutoMapper(typeof(NoteProfile));

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.UseHsts();

app.Run();
