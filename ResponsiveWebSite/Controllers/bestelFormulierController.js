var qnh;
(function (qnh) {
    var Controllers;
    (function (Controllers) {
        var BestelformulierController = (function () {
            function BestelformulierController() {
                //velden
                this.titel = "Bestelformulier";
                this.producten = [
                    { id: 1, naam: "Gretsch G6120 Eddie Cochran", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 3555, afbeelding: "gretsch_g6120_eddie_cochran2.jpg" },
                    { id: 2, naam: "ESP Viper Black", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 1522, afbeelding: "esp_viper_black2.jpg" },
                    { id: 3, naam: "PRS SE Custom 22 VSB", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 985, afbeelding: "prs_se_custom_22_vsb2.jpg" },
                    { id: 4, naam: "Guild S-100 Polara WH", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 1522, afbeelding: "guild_s-100_polara_wh2.jpg" },
                    { id: 5, naam: "Cordoba F7 Flamenco", hoofdmenu: "Gitaren", submenu: "Acoustisch", prijs: 499, afbeelding: "cordoba_f7_flamenco.jpg" },
                    { id: 10, naam: "Music man Bongo 6 Stealth black", hoofdmenu: "Bassen", submenu: "5 en 6-snarig", prijs: 3149, afbeelding: "musicman_bongo_6_stealth_black.jpg" },
                    { id: 6, naam: "Yamaha b2 PE", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "yamaha_b2_pe.jpg" },
                    { id: 7, naam: "Kawai K-200 ATX 2 PH/W Piano", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "kawai_k-200_atx_2_whp_piano.jpg" },
                    { id: 8, naam: "Yamaha b2 SNC", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "yamaha_b2_snc.jpg" },
                    { id: 9, naam: "Viscount Unico 500 Konkav", hoofdmenu: "Keyboards", submenu: "Orgels", prijs: 30111, afbeelding: "viscount_unico_500_konkav.jpg" }
                ];
                this.hoofdmenu = [];
                this.mandje = [];
            }
            BestelformulierController.prototype.selecteerHoofdmenu = function (menu) {
                this.geselecteerdHoofdmenu = menu;
                this.geselecteerdSubmenu = "";
            };
            BestelformulierController.prototype.selecteerSubmenu = function (menu) {
                this.geselecteerdSubmenu = menu;
            };
            BestelformulierController.prototype.verwijder = function (productnaam) {
                for (var i = 0; i < this.mandje.length; i++) {
                    if (this.mandje[i].naam === productnaam) {
                        if (this.mandje[i].aantal === 1) {
                            this.mandje.splice(i, 1);
                        }
                        else {
                            this.mandje[i].aantal -= 1;
                        }
                    }
                }
            };
            BestelformulierController.prototype.voegToe = function () {
                if (this.geselecteerdProduct.naam.length > 0) {
                    for (var i = 0; i < this.mandje.length; i++) {
                        if (this.mandje[i].naam === this.geselecteerdProduct.naam) {
                            this.mandje[i].aantal += 1;
                            return;
                        }
                    }
                    //we komen hier alleen als het geselecteerde product nog niet in het mandje zit
                    this.mandje.push({ id: this.geselecteerdProduct.id, naam: this.geselecteerdProduct.naam, prijs: this.geselecteerdProduct.prijs, aantal: 1 });
                }
            };
            BestelformulierController.prototype.verhoog = function (productNaam) {
                for (var i = 0; i < this.mandje.length; i++) {
                    if (this.mandje[i].naam === productNaam) {
                        this.mandje[i].aantal += 1;
                        return;
                    }
                }
                for (var j = 0; j < this.producten.length; j++) {
                    if (this.producten[j].naam === productNaam) {
                        this.mandje.push({ id: this.producten[j].id, naam: this.producten[j].naam, prijs: this.producten[j].prijs, aantal: 1 });
                        //$apply();
                        return;
                    }
                }
            };
            return BestelformulierController;
        })();
        Controllers.BestelformulierController = BestelformulierController;
    })(Controllers = qnh.Controllers || (qnh.Controllers = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=bestelFormulierController.js.map