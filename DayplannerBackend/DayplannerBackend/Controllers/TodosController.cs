using AutoMapper;
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
            try
            {
                var todos = await _todoService.GetTodosByUserId(userId);
                var vms = Mapper.Map<IEnumerable<TodoViewModel>>(todos);

                return vms;
            }
            catch(Exception e)
            {
                throw;
            }

        }
    }
}