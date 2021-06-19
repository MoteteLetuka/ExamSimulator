using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Question
    {
        //public virtual ICollection<Subject> Subjects { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int subjId {get; set;}
        public string _text { get; set; }
        public string Answer { get; set; }  
        public string RanAns1 { get; set; }  
        public string RanAns2 { get; set; }
        public string RanAns3 { get; set; }         
        
    }
}