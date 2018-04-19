using Dayplanner.Model;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace Dayplanner.Data.Infrastructure
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DayPlanner", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
