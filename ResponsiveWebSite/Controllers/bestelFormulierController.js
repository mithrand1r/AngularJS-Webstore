var qnh;
(function (qnh) {
    var Controllers;
    (function (Controllers) {
        var BestelformulierController = (function () {
            function BestelformulierController(_productenService, mandjeService, $location) {
                var _this = this;
                this._productenService = _productenService;
                this.mandjeService = mandjeService;
                this.$location = $location;
                //velden
                this.titel = "Bestelformulier";
                this.hoofdmenu = [];
                this._productenService.getProducts().then(function (data) { _this.producten = data; });
            }
            BestelformulierController.prototype.selecteerHoofdmenu = function (menu) {
                this.geselecteerdHoofdmenu = menu;
                this.geselecteerdSubmenu = "";
            };
            BestelformulierController.prototype.selecteerSubmenu = function (menu) {
                this.geselecteerdSubmenu = menu;
            };
            BestelformulierController.prototype.verlaag = function (productnaam) {
                for (var i = 0; i < this.mandjeService.mandje.length; i++) {
                    if (this.mandjeService.mandje[i].naam === productnaam) {
                        if (this.mandjeService.mandje[i].aantal === 1) {
                            this.mandjeService.mandje.splice(i, 1);
                        }
                        else {
                            this.mandjeService.mandje[i].aantal -= 1;
                        }
                    }
                }
                this.mandjeService.updateTotaal();
            };
            BestelformulierController.prototype.verhoog = function (productnaam) {
                var exists = false;
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
            };
            return BestelformulierController;
        })();
        Controllers.BestelformulierController = BestelformulierController;
    })(Controllers = qnh.Controllers || (qnh.Controllers = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=bestelFormulierController.js.map