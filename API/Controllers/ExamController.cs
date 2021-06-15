using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers
{
    public class ExamController : BaseApiController
    {
        public DataContext Context { get; }       
        public ExamController(DataContext context)
        {
            this.Context = context;
        } 
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exam>>>GetExams(){
            return await this.Context.Exams.ToListAsync();            
        }  
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Exam>>GetExam(int id){
            return await this.Context.Exams.FindAsync(id);           
        }           
        private async Task<bool> ExamExists(int id)
        {
            return await  this.Context.Exams.AnyAsync(x => x.Id == id );
        }   
        [HttpPost("register")]
        public async Task<ActionResult<ExamDTO>>Register(ExamDTO examDTO)
        {
            var E = new Exam{
                Id = examDTO.Id, 
                Student = examDTO.Student, 
                Mark = examDTO.Mark, 
                QuestionPaper = examDTO.QuestionPaper,
                evaluated = examDTO.evaluated
            };
            this.Context.Exams.Add(E);
            await this.Context.SaveChangesAsync();
            return new ExamDTO{
                Id = E.Id,
                Student = E.Student,
                Mark = E.Mark,
                QuestionPaper = E.QuestionPaper,
                evaluated = E.evaluated
            };

        }                   
                     
        
    }
}