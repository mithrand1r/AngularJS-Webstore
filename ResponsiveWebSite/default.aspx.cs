using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ResponsiveWebSite
{

    public partial class _default : System.Web.UI.Page
    {
        public Tuple<string, int, string,bool?,string,long?> hoi;
        protected void Page_Load(object sender, EventArgs e)
        {
            hoi = new Tuple<string, int, string,bool?,string,long?>("hee", 1, "nee",null,null,null);
        }
    }
}