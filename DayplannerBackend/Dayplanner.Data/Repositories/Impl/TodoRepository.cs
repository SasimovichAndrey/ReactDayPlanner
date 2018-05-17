using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dayplanner.Data.Infrastructure;
using Dayplanner.Data.Repositories.Interface;
using Dayplanner.Model;

namespace Dayplanner.Data.Repositories.Imp
{
    public class TodoRepository : BaseRepository<Todo>, ITodoRepository
    {
        public TodoRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<List<Todo>> GetAllByUserId(string userId)
        {
            var todos = await _context.Set<Todo>()
                .Where(t => t.UserId == userId)
                .ToListAsync();

            return todos;
        }
    }
}
