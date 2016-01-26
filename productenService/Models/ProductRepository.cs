using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;

namespace productenService.Models
{
    public class ProductRepository : IProductRepository
    {
        static readonly ConcurrentDictionary<int, Product> _products = new ConcurrentDictionary<int, Product>();

        public ProductRepository()
        {
            Add(new Product()
            {
                id = 1,
                naam = "Gretsj G6120 Eddie Cochran",
                hoofdmenu = "Gitaren",
                submenu = "Electrisch",
                prijs = 3555,
                afbeelding = "gretsch_g6120_eddie_cochran2.jpg"
            });
            Add(new Product()
            {
                id = 2,
                naam = "ESP Viper Black",
                hoofdmenu = "Gitaren",
                submenu = "Electrisch",
                prijs = 1522,
                afbeelding = "esp_viper_black2.jpg"
            });
            Add(new Product()
            {
                id = 3,
                naam = "PRS SE Custom 22 VSB",
                hoofdmenu = "Gitaren",
                submenu = "Electrisch",
                prijs = 985,
                afbeelding = "prs_se_custom_22_vsb2.jpg"
            });
            Add(new Product()
            {
                id = 4,
                naam = "Guild S-100 Polara WH",
                hoofdmenu = "Gitaren",
                submenu = "Electrisch",
                prijs = 1522,
                afbeelding = "guild_s-100_polara_wh2.jpg"
            });
            Add(new Product()
            {
                id = 5,
                naam = "Cordoba F7 Flamenco",
                hoofdmenu = "Gitaren",
                submenu = "Acoustisch",
                prijs = 499,
                afbeelding = "cordoba_f7_flamenco.jpg"
            });
            Add(new Product()
            {
                id = 10,
                naam = "Music man Bongo 6 Stealth black",
                hoofdmenu = "Bassen",
                submenu = "5 en 6-snarig",
                prijs = 3149,
                afbeelding = "musicman_bongo_6_stealth_black.jpg"
            });
            Add(new Product()
            {
                id = 6,
                naam = "Yamaha b2 PE",
                hoofdmenu = "Keyboards",
                submenu = "Piano's",
                prijs = 4390,
                afbeelding = "yamaha_b2_pe.jpg"
            });
            Add(new Product()
            {
                id = 7,
                naam = "Kawai K-200 ATX 2 PH/W Piano",
                hoofdmenu = "Keyboards",
                submenu = "Piano's",
                prijs = 4390,
                afbeelding = "kawai_k-200_atx_2_whp_piano.jpg"
            });
            Add(new Product()
            {
                id = 8,
                naam = "Yamaha b2 SNC",
                hoofdmenu = "Keyboards",
                submenu = "Piano's",
                prijs = 4390,
                afbeelding = "yamaha_b2_snc.jpg"
            });
            Add(new Product()
            {
                id = 9,
                naam = "Viscount Unico 500 Konkav",
                hoofdmenu = "Keyboards",
                submenu = "Orgels",
                prijs = 30111,
                afbeelding = "viscount_unico_500_konkav.jpg"
            });

        }

        public static ConcurrentDictionary<int, Product> Products
        {
            get
            {
                return _products;
            }
        }

        public void Add(Product product)
        {
            _products[product.id]=product;
        }

        public Product Find(int id)
        {
            Product product;
            _products.TryGetValue(id,out product);
            return product;
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.Values;
        }

        
        public Product Remove(int id)
        {
            Product result;
            _products.TryRemove(id,out result);
            return result;
        }

        public void Update(Product product)
        {
            _products[product.id] = product;
        }
    }
}
