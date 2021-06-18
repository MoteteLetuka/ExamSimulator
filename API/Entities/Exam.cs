using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;namespace API.Entities
{
    public class Exam
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Student { get; set; }
        public int Mark { get; set; } //
        public int QuestionPaper { get; set; }   
        public int evaluated { get; set; }    
    }
}