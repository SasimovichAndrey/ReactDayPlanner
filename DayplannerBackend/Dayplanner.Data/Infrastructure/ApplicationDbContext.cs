using Dayplanner.Model;
using System.Data.Entity;

namespace Dayplanner.Data.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("DefaultConnection")
        {

        }

        public DbSet<Todo> Todos { get; set; }
    }
}
