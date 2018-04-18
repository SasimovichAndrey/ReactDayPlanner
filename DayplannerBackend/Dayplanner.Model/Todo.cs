using System;

namespace Dayplanner.Model
{
    public class Todo : BaseEntity
    {
        public int UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}
