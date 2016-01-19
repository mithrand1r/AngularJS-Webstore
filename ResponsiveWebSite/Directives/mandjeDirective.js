var qnh;
(function (qnh) {
    var Directives;
    (function (Directives) {
        var ViewMandje = (function () {
            function ViewMandje() {
                this.replace = true;
                this.scope = {
                    mandje: '=',
                    totaal: '=',
                    verhoog: '&',
                    verlaag: '&',
                    afbeelding: '@'
                };
                this.restrict = 'E';
                this.template = "<table width=\"100%\">\n        <thead>\n        <tr>\n        <th class=\"{{afbeelding ? '' :'verborgen'}}\">Foto</th>\n        <th>Instrument</th>\n        <th>Prijs per stuk</th>\n        <th>Aantal</th>\n        <th>Totaal</th>\n        <th>Actie</th>\n        </thead>\n        <tr data-ng-repeat=\"item in mandje\">\n            <td class=\"{{afbeelding ? '' :'verborgen'}}\"><img src=\"Images/{{item.afbeelding}}\" height=\"100px\"/></td>\n            <td>{{item.naam}}</td>\n            <td>\u20AC {{item.prijs | formatPrice}}</td> <!-- je kan ook met currency werken. is ingebouwd: {{item.prijs | currency : \"\u20AC\" : 2}}-->\n            <td>{{item.aantal}}</td>\n            <td>\u20AC {{item.aantal * item.prijs | formatPrice}}</td>\n            <td width=\"120px\"><a href=\"\" class=\"bestellen\" ng-click=\"verhoog({productnaam: item.naam})\">+</a><a href=\"\" class=\"bestellen\" ng-click=\"verlaag({productnaam: item.naam})\">-</a></td>\n        </tr>\n        <tr class=\"topborder\">\n            <td colspan=\"{{afbeelding ? '4' :'3'}}\">&nbsp;</td>\n            <th>Totaal:</th>\n            <th>\u20AC {{totaal | formatPrice}}</th>\n        </tr>\n    </table>\n\n";
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