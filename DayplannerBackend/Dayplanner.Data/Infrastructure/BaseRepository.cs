using Dayplanner.Model;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Dayplanner.Data.Infrastructure
{
    public abstract class BaseRepository<TModel> : IRepository<TModel> where TModel: BaseEntity
    {
        protected ApplicationDbContext _context;

        public BaseRepository(ApplicationDbContext dbContext)
        {
            this._context = dbContext;
        }

        public async Task<TModel> GetById(int id)
        {
            var set = _context.Set<TModel>();
            var entity = await set.SingleOrDefaultAsync(e => e.Id == id);

            return entity;
        }
    }
}
