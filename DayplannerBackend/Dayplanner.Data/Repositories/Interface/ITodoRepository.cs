using Dayplanner.Data.Infrastructure;
using Dayplanner.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dayplanner.Data.Repositories.Interface
{
    public interface ITodoRepository : IRepository<Todo>
    {
        Task<List<Todo>> GetAllByUserId(string userId);
    }
}
