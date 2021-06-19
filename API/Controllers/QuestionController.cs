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
    public class QuestionController : BaseApiController
    {
        public DataContext Context { get; }       
        public QuestionController(DataContext context)
        {
            this.Context = context;
        } 
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>>GetQuestions(){
            return await this.Context.Questions.ToListAsync();   
        } 

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Question>>GetQuestion(int id){
            return await this.Context.Questions.FindAsync(id);          
        }  
        [HttpPost("register")]        
        public async Task<ActionResult<QuestionDTO>>Register(QuestionDTO questionDTO)
        {
            //if (await QustionExists(questionDTO.Id)) return BadRequest("question alredy exists");            
            var q = new Question{
                //Id = questionDTO.Id,
                subjId = questionDTO.subjId,
                _text = questionDTO._text,
                Answer = questionDTO.Answer,
                RanAns1 = questionDTO.RanAns1,
                RanAns2 = questionDTO.RanAns2,
                RanAns3 = questionDTO.RanAns3
            };
            this.Context.Questions.Add(q);
            await this.Context.SaveChangesAsync();
            return new QuestionDTO {
                Id = q.Id,
                _text = q._text,
                Answer = q.Answer
            };

        }                            
        private async Task<bool>QuestionExists(int id)
        {
            return await  this.Context.Questions.AnyAsync(x => x.Id == id );
        } 
        //list questions by subjects
        [HttpGet("getqbys/{id:int}")]
        public async Task<ActionResult<IEnumerable<Question>>>getqbys(int id){
            return await this.Context.Questions.Where(o => o.subjId == id).ToListAsync();            
        }                    
    }
}