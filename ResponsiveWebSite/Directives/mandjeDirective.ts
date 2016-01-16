module qnh.Directives {
    
    export class ViewMandje implements angular.IDirective {
        replace = true;
        scope = {
            mandje: '=',
            verhoog: '&',
            verlaag: '&'
        };
        restrict = 'E';
        template = `<table>
        <thead>
        <tr>
        <td>Instrument</td>
        <td>Prijs per stuk</td>
        <td>Aantal</td>
        <td>Totaal</td>
        <td>Actie</td>
        </thead>
        <tr data-ng-repeat="item in mandje">
            <td>{{item.naam}}</td>
            <td>{{item.prijs | formatPrice}}</td> <!-- je kan ook met currency werken. is ingebouwd: {{item.prijs | currency : "€" : 2}}-->
            <td>{{item.aantal}}</td>
            <td>{{item.aantal * item.prijs | formatPrice}}</td>
            <td><input type="button" value=" + " data-ng-click="verhoog({productnaam: item.naam})"/><input type="button" value=" - " data-ng-click="verlaag({productnaam: item.naam})"/></td>
        </tr>
    </table>

`;
        static factory(): angular.IDirective {
            var vt: angular.IDirective = new ViewMandje();
            return vt;
        }
    }
}