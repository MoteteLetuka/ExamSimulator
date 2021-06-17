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
    public class PaperController : BaseApiController
    {
        public DataContext Context { get; }       
        public PaperController(DataContext context)
        {
            this.Context = context;
        }  
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paper>>>GetPapers(){
            return await this.Context.Papers.ToListAsync();            
        }    

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Paper>>GetPaper(int id){
            return await this.Context.Papers.FindAsync(id);           
        }  
        //gets papers by subjects
        [HttpGet("getpbys/{id:int}")]
        public async Task<ActionResult<IEnumerable<Paper>>>getpbys(int id){
            return await this.Context.Papers.Where(o => o.SubjId == id).ToListAsync();            
        } 
        [HttpPost("register")]
        public async Task<ActionResult<PaperDTO>>Register(PaperDTO paperDTO)
        {
            var p = new Paper{
                Id = paperDTO.Id, 
                Name = paperDTO.Name, 
                Duration = paperDTO.Duration, 
                PassScore = paperDTO.PassScore,
                eval = paperDTO.eval,
                SubjId = paperDTO.SubjId
            };
            this.Context.Papers.Add(p);
            await this.Context.SaveChangesAsync();
            return new PaperDTO{
                Id = p.Id,
                Name = p.Name,
                Duration = p.Duration,
                PassScore = p.PassScore,
                eval = p.eval,
                SubjId = p.SubjId
            };
        }  
        [HttpPut("UpdatePaper")]
        public async Task<ActionResult<PaperDTO>>UpdatePaper()
        {

            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");
            else{

                var paper = this.Context.Papers.FirstOrDefault();
                if(paper != null){
                    paper.eval = 1;
                    await this.Context.SaveChangesAsync();
                    return Content("ok done");
                    
                }
                else
                {
                    return BadRequest("Update failed");
                }
                
                }

        }                        
        private async Task<bool>PaperExists(int id)
        {
            return await  this.Context.Papers.AnyAsync(x => x.Id == id );
        }              
        
    }
}