using AutoMapper;
using Dayplanner.Service.Interface;
using DayplannerBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace DayplannerBackend.Controllers
{
    public class TodosController : ApiController
    {
        private ITodoDbService _todoService;

        public TodosController(ITodoDbService todoDbService)
        {
            this._todoService = todoDbService;
        }

        [HttpGet]
        public async Task<IEnumerable<TodoViewModel>> GetByUserId(int userId)
        {
            var todos = await _todoService.GetTodosByUserId(userId);
            var vms = Mapper.Map<IEnumerable<TodoViewModel>>(todos);

            return vms;
        }
    }
}