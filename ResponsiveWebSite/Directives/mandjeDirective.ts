module qnh.Directives {
    
    export class ViewMandje implements angular.IDirective {
        replace = true;
        scope = {
            mandje: '=',
            totaal: '=',
            verhoog: '&',
            verlaag: '&',
            afbeelding: '@'
        };
        restrict = 'E';
        template = `<table width="100%">
        <thead>
        <tr>
        <th class="{{afbeelding ? '' :'verborgen'}}">Foto</th>
        <th>Instrument</th>
        <th>Prijs per stuk</th>
        <th>Aantal</th>
        <th>Totaal</th>
        <th>Actie</th>
        </thead>
        <tr data-ng-repeat="item in mandje">
            <td class="{{afbeelding ? '' :'verborgen'}}"><img src="Images/{{item.afbeelding}}" height="100px"/></td>
            <td>{{item.naam}}</td>
            <td>€ {{item.prijs | formatPrice}}</td> <!-- je kan ook met currency werken. is ingebouwd: {{item.prijs | currency : "€" : 2}}-->
            <td>{{item.aantal}}</td>
            <td>€ {{item.aantal * item.prijs | formatPrice}}</td>
            <td width="120px"><a href="" class="bestellen" ng-click="verhoog({productnaam: item.naam})">+</a><a href="" class="bestellen" ng-click="verlaag({productnaam: item.naam})">-</a></td>
        </tr>
        <tr class="topborder">
            <td colspan="{{afbeelding ? '4' :'3'}}">&nbsp;</td>
            <th>Totaal:</th>
            <th>€ {{totaal | formatPrice}}</th>
        </tr>
    </table>

`;
        static factory(): angular.IDirective {
            var vt: angular.IDirective = new ViewMandje();
            return vt;
        }
    }
}