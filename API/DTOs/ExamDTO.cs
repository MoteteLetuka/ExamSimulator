using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ExamDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int Student { get; set; }
        [Required]
        public int Mark { get; set; }
        [Required]
        public int QuestionPaper { get; set; }         
    }
}