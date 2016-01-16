var qnh;
(function (qnh) {
    var Directives;
    (function (Directives) {
        var ViewMandje = (function () {
            function ViewMandje() {
                this.replace = true;
                this.scope = {
                    mandje: '=',
                    verhoog: '&',
                    verlaag: '&'
                };
                this.restrict = 'E';
                this.template = "<table>\n        <thead>\n        <tr>\n        <td>Instrument</td>\n        <td>Prijs per stuk</td>\n        <td>Aantal</td>\n        <td>Totaal</td>\n        <td>Actie</td>\n        </thead>\n        <tr data-ng-repeat=\"item in mandje\">\n            <td>{{item.naam}}</td>\n            <td>{{item.prijs | formatPrice}}</td> <!-- je kan ook met currency werken. is ingebouwd: {{item.prijs | currency : \"\u20AC\" : 2}}-->\n            <td>{{item.aantal}}</td>\n            <td>{{item.aantal * item.prijs | formatPrice}}</td>\n            <td><input type=\"button\" value=\" + \" data-ng-click=\"verhoog({productnaam: item.naam})\"/><input type=\"button\" value=\" - \" data-ng-click=\"verlaag({productnaam: item.naam})\"/></td>\n        </tr>\n    </table>\n\n";
            }
            ViewMandje.factory = function () {
                var vt = new ViewMandje();
                return vt;
            };
            return ViewMandje;
        })();
        Directives.ViewMandje = ViewMandje;
    })(Directives = qnh.Directives || (qnh.Directives = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=mandjeDirective.js.map