using System.ComponentModel.DataAnnotations.Schema;
namespace API.Entities
{
    public class Paper
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public int PassScore { get; set; } 
        public int eval { get; set; }   
        public int SubjId { get; set; }        
    }
}