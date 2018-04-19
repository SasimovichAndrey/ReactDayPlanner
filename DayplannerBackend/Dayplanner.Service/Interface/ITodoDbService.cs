using Dayplanner.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dayplanner.Service.Interface
{
    public interface ITodoDbService
    {
        Task<List<Todo>> GetTodosByUserId(int userId);
        Task<Todo> CreateNewTodo(Todo newTodo);
    }
}
