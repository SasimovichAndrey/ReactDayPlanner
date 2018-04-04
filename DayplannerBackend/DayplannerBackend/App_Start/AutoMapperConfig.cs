using AutoMapper;
using Dayplanner.Model;
using DayplannerBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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