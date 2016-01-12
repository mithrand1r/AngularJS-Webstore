<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="ResponsiveWebSite._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="default.css" rel="stylesheet" type="text/css" />
<title></title>
</head>
<body>
    <form id="form1" runat="server">
    <header>
        <img src="nslogo.png" />
    </header>
    <nav>
        <a class="menuItem gt480">Gitaren</a>
        <a class="menuItem gt480">Slagwerk</a>
        <a class="menuItem gt480">Keyboards</a>
        <a class="menuItem lt480">Git</a>
        <a class="menuItem lt480">SW</a>
        <a class="menuItem lt480">KB</a>
    </nav>
<section class="table">
    <aside>
        <h2>Acoustisch</h2>
        <a class="vMenuItem">Spaanse gitaren</a>
        <a class="vMenuItem">Folk gitaren</a>
        <h2>Electrisch</h2>
        <a class="vMenuItem"></a>
        <a class="vMenuItem">B</a>
        <a class="vMenuItem">C</a>
        <h2>Basgitaren</h2>
        <a class="vMenuItem">Acoustisch</a>
        <a class="vMenuItem">Fretless</a>
        <a class="vMenuItem">4 string</a>
        <a class="vMenuItem">5 string</a>
    </aside>
    <main><h2>Products</h2>
        <div class="float">Product A</div>
        <div class="float">Product B</div>
        <div class="float">Product C</div>
        <div class="float">Product D</div>
    </main>
</section>
    </form>
</body>
</html>
