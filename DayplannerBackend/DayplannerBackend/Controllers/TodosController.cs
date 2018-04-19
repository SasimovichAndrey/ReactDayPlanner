using AutoMapper;
using Dayplanner.Model;
using Dayplanner.Service.Interface;
using DayplannerBackend.Models;
using System;
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

        [HttpPost]
        public async Task<TodoViewModel> AddTodo(TodoViewModel todo)
        {
            var newTodo = Mapper.Map<Todo>(todo);

            newTodo = await _todoService.CreateNewTodo(newTodo);

            var newTodoVm = Mapper.Map<TodoViewModel>(newTodo);

            return newTodoVm;
        }
    }
}