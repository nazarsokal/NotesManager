using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotesManager.API.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ColumnTypesChanged : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: new Guid("921aeba5-83ff-493c-87fc-232f8a1ad6f4"));

            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Notes",
                newName: "DateCreated");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Notes",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "NoteId", "Content", "DateCreated", "Title" },
                values: new object[] { new Guid("ac799f75-e175-48bb-8767-dfe5dd7ef00e"), "Hello World!", new DateTime(2025, 7, 1, 23, 14, 20, 62, DateTimeKind.Local).AddTicks(5450), "Welcome Note" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: new Guid("ac799f75-e175-48bb-8767-dfe5dd7ef00e"));

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Notes",
                newName: "Created");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Notes",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "NoteId", "Content", "Created", "Title" },
                values: new object[] { new Guid("921aeba5-83ff-493c-87fc-232f8a1ad6f4"), "Hello World!", new DateTime(2025, 7, 1, 22, 44, 47, 418, DateTimeKind.Local).AddTicks(4260), "Welcome Note" });
        }
    }
}
