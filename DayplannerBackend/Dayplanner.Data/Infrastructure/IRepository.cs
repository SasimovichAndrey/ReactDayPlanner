using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dayplanner.Data.Infrastructure
{
    public interface IRepository<TModel>
    {
        Task<TModel> GetById(int id);
    }
}
