using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers
{
    public class SubjectController : BaseApiController
    {
        public DataContext Context { get; }       
        public SubjectController(DataContext context)
        {
            this.Context = context;
        } 
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subject>>>GetSubjects(){
            return await this.Context.Subjects.ToListAsync();
            
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Subject>>GetSubject(int id){
            return await this.Context.Subjects.FindAsync(id);
            
        } 
        [HttpPost("register")]
        public async Task<ActionResult<Subject>>Register(int id, string name)
        {
            var subj = new Subject{
                Id = id,
                Name = name
            };
            this.Context.Subjects.Add(subj);
            await this.Context.SaveChangesAsync();
            return subj;//BadRequest("Username alredy exists");

        }        
        private async Task<bool> SubjectExists(int id)
        {
            return await  this.Context.Subjects.AnyAsync(x => x.Id == id );
        }                    
    }
}