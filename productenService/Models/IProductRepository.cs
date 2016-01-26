using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace productenService.Models
{
    public interface IProductRepository
    { 
        void Add(Product product);
        IEnumerable<Product> GetAll();
        Product Find(int id);
        Product Remove(int id);
        void Update(Product product);
    }
}
