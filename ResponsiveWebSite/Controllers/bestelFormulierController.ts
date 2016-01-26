module qnh.Controllers {
    export class BestelformulierController {
        constructor(private _productenService: qnh.Services.ProductenService, public mandjeService: qnh.Services.MandjeService, public $location) {
            this._productenService.getProducts().then(
                (data:any) => { this.producten = data; }
            );
        }
        //velden
        titel: string = "Bestelformulier";
        producten:any;
        hoofdmenu:any[] = [];
        geselecteerdHoofdmenu:string;
        geselecteerdSubmenu:string;

        selecteerHoofdmenu(menu) {
            this.geselecteerdHoofdmenu = menu;
            this.geselecteerdSubmenu = "";
        }

        selecteerSubmenu(menu) {
            this.geselecteerdSubmenu = menu;
        }

        verlaag(productnaam:string) {
            for (var i = 0; i < this.mandjeService.mandje.length; i++) {
                if (this.mandjeService.mandje[i].naam === productnaam) {
                    if (this.mandjeService.mandje[i].aantal === 1) {
                        this.mandjeService.mandje.splice(i, 1);
                    } else {
                        this.mandjeService.mandje[i].aantal -= 1;
                    }
                }
            }
            this.mandjeService.updateTotaal();
        }

        verhoog(productnaam: string) {
            var exists: boolean = false;
            for (var i = 0; i < this.mandjeService.mandje.length; i++) {
                if (this.mandjeService.mandje[i].naam === productnaam) {
                    this.mandjeService.mandje[i].aantal += 1;
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                for (var j = 0; j < this.producten.length; j++) {
                    if (this.producten[j].naam === productnaam) {
                        this.mandjeService.mandje.push({ id: this.producten[j].id, naam: this.producten[j].naam, prijs: this.producten[j].prijs, afbeelding: this.producten[j].afbeelding, aantal: 1 });
                        break;
                    }
                }
            }

            this.mandjeService.updateTotaal();
        }
    }
}