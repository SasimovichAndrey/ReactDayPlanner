using Dayplanner.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dayplanner.Service.Interface
{
    public interface ITodoDbService
    {
        Task<List<Todo>> GetTodosByUserId(string userId);
        Task<Todo> CreateNewTodo(Todo newTodo);
    }
}
