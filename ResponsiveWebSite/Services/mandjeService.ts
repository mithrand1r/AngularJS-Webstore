module qnh.Services {
    //domme service, die alleen gebruikt wordt omdat services 'singletons' zijn. Op deze manier is 'mandje' overal beschikbaar.
    export class MandjeService {
        mandje: any[] = [];
        totaalBedrag: number = 0;

        updateTotaal() {
            var tempTotaalBedrag: number = 0;
            for (var i=0;i<this.mandje.length;i++) {
                tempTotaalBedrag += this.mandje[i].prijs * this.mandje[i].aantal;
            }
            this.totaalBedrag = tempTotaalBedrag;
        }

    }    
}