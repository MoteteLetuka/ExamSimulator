using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class QuestionsAnswerOptions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Answer",
                table: "Questions",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<string>(
                name: "RanAns1",
                table: "Questions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RanAns2",
                table: "Questions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RanAns3",
                table: "Questions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "subjId",
                table: "Questions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RanAns1",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RanAns2",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "RanAns3",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "subjId",
                table: "Questions");

            migrationBuilder.AlterColumn<int>(
                name: "Answer",
                table: "Questions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);
        }
    }
}
