using AutoMapper;
using Dayplanner.Model;
using DayplannerBackend.Models;

namespace DayplannerBackend
{
    public static class AutoMapperConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<TodoViewModel, Todo>();
            });
        }
    }
}