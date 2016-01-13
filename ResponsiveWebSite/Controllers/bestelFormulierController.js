var qnh;
(function (qnh) {
    var controllers;
    (function (controllers) {
        var bestelformulierController = (function () {
            function bestelformulierController() {
                //velden
                this.HelloWorld = "Bestelformulier";
                this.Producten = [
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
                this.Mandje = [];
            }
            bestelformulierController.prototype.selecteerHoofdmenu = function (menu) {
                this.GeselecteerdHoofdmenu = menu;
                this.GeselecteerdSubmenu = '';
            };
            bestelformulierController.prototype.selecteerSubmenu = function (menu) {
                this.GeselecteerdSubmenu = menu;
            };
            bestelformulierController.prototype.verwijder = function (productnaam) {
                for (var i = 0; i < this.Mandje.length; i++) {
                    if (this.Mandje[i].naam == productnaam) {
                        if (this.Mandje[i].aantal == 1) {
                            this.Mandje.splice(i, 1);
                        }
                        else {
                            this.Mandje[i].aantal -= 1;
                        }
                    }
                }
            };
            bestelformulierController.prototype.voegToe = function () {
                if (this.GeselecteerdProduct.naam.length > 0) {
                    for (var i = 0; i < this.Mandje.length; i++) {
                        if (this.Mandje[i].naam == this.GeselecteerdProduct.naam) {
                            this.Mandje[i].aantal += 1;
                            return;
                        }
                    }
                    //we komen hier alleen als het geselecteerde product nog niet in het mandje zit
                    this.Mandje.push({ id: this.GeselecteerdProduct.id, naam: this.GeselecteerdProduct.naam, prijs: this.GeselecteerdProduct.prijs, aantal: 1 });
                }
            };
            bestelformulierController.prototype.verhoog = function (productNaam) {
                for (var i = 0; i < this.Mandje.length; i++) {
                    if (this.Mandje[i].naam == productNaam) {
                        this.Mandje[i].aantal += 1;
                        return;
                    }
                }
                for (var j = 0; j < this.Producten.length; j++) {
                    if (this.Producten[j].naam == productNaam) {
                        this.Mandje.push({ id: this.Producten[j].id, naam: this.Producten[j].naam, prijs: this.Producten[j].prijs, aantal: 1 });
                        //$apply();
                        return;
                    }
                }
            };
            return bestelformulierController;
        })();
        controllers.bestelformulierController = bestelformulierController;
    })(controllers = qnh.controllers || (qnh.controllers = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=bestelFormulierController.js.map