using Dayplanner.Model;
using Dayplanner.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dayplanner.Service.Implementation
{
    public class InMemoryTodoService : ITodoDbService
    {
        private static List<Todo> TODOS = new List<Todo>();

        static InMemoryTodoService()
        {
            TODOS.Add(new Todo
            {
                Id = 0,
                UserId = 0,
                Description = "Test"
            });
        }

        public Task<List<Todo>> GetTodosByUserId(int userId)
        {
            return Task.FromResult(TODOS.Where(t => t.UserId == userId).ToList());
        }
    }
}
