using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class QuestionDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string _text { get; set; }
        [Required]
        public int Answer { get; set; }
    }
}