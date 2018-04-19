using Dayplanner.Model;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Dayplanner.Data.Infrastructure
{
    public abstract class BaseRepository<TModel> : IRepository<TModel> where TModel: BaseEntity
    {
        protected ApplicationDbContext _context;
        protected DbSet<TModel> _dbSet;

        public BaseRepository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
            _dbSet = _context.Set<TModel>();
        }

        public async Task<TModel> Create(TModel entity)
        {
            _dbSet.Add(entity);

            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task<TModel> GetById(int id)
        {
            var entity = await _dbSet.SingleOrDefaultAsync(e => e.Id == id);

            return entity;
        }
    }
}
