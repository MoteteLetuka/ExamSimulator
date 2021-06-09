using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class PaperDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int Duration { get; set; }
        [Required]
        public int PassScore { get; set; }        
    }
}