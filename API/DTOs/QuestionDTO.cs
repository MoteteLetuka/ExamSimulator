using System.ComponentModel.DataAnnotations;
namespace API.DTOs
{
    public class QuestionDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int subjId {get; set;}
        [Required]
        public string _text { get; set; }
        [Required]
        public string Answer { get; set; }  
        public string RanAns1 { get; set; }  
        public string RanAns2 { get; set; }
        public string RanAns3 { get; set; }  
    }
}