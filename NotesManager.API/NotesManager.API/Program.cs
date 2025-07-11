using Microsoft.EntityFrameworkCore;
using NotesManager.API.DTOs;
using NotesManager.API.Infrastructure;
using NotesManager.API.Interfaces;
using NotesManager.API.Services;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default"));
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin() 
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


builder.Services.AddAutoMapper(typeof(NoteProfile));
builder.Services.AddScoped<INoteService, NoteService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.UseHsts();
app.UseCors();

app.Run();
