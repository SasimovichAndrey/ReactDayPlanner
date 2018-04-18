using Dayplanner.Data.Repositories.Interface;
using Dayplanner.Model;
using Dayplanner.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dayplanner.Service.Implementation
{
    public class TodoService : ITodoDbService
    {
        private readonly ITodoRepository _todoRepo;

        public TodoService(ITodoRepository todoRepo)
        {
            _todoRepo = todoRepo;
        }

        public async Task<List<Todo>> GetTodosByUserId(int userId)
        {
            var todos = await _todoRepo.GetAllByUserId(userId);

            return todos;
        }
    }
}
