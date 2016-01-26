using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using productenService.Models;


namespace productenService.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [FromServices]
        public IProductRepository Producten { get; set; }

        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return Producten.GetAll();
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public IActionResult GetById(int id)
        {
            var item = Producten.Find(id);
            if (item == null)
            {
                return HttpNotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Product item)
        {
            if (item == null)
            {
                return HttpBadRequest();
            }
           Producten.Add(item);
           return CreatedAtRoute( "GetProduct", new {controller = "Product", id = item.id}, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Product item)
        {
            if (item == null || id == 0)
            {
                return HttpBadRequest();
            }
            Producten.Update(item);
            return CreatedAtRoute("GetProduct", new {controller = "Product", id = id}, item);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Producten.Remove(id);
        }
    }
}
