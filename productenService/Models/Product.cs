using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace productenService.Models
{
    public class Product
    {
        public int id { get; set; }
        public string naam { get; set; }
        public string hoofdmenu { get; set; }
        public string submenu { get; set; }
        public decimal prijs { get; set; }
        public string afbeelding { get; set; }
    }
}
