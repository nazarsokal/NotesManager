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
            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    NoteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.NoteId);
                });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "NoteId", "Content", "Created", "Title" },
                values: new object[] { new Guid("921aeba5-83ff-493c-87fc-232f8a1ad6f4"), "Hello World!", new DateTime(2025, 7, 1, 22, 44, 47, 418, DateTimeKind.Local).AddTicks(4260), "Welcome Note" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notes");
        }
    }
}
