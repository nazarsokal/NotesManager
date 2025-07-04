using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotesManager.API.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "NoteId", "Content", "DateCreated", "Title" },
                values: new object[] { new Guid("2bfab67a-aba0-47b2-983e-5207debb4733"), "Hello World!", new DateTime(2025, 7, 4, 13, 0, 32, 893, DateTimeKind.Local).AddTicks(8380), "Welcome Note" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "Id", "Content", "DateCreated", "Title" },
                values: new object[] { new Guid("54eab85c-0cb6-4a2b-9292-badd412eadcc"), "Hello World!", new DateTime(2025, 7, 4, 12, 56, 55, 840, DateTimeKind.Local).AddTicks(620), "Welcome Note" });
        }
    }
}
