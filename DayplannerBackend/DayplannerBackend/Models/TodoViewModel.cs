﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DayplannerBackend.Models
{
    public class TodoViewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}