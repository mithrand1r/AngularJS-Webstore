window.qnh = window.qnh || {};
window.qnh.controllers = window.qnh.controllers || {};
window.qnh.controllers.bestelformulierController=function ($scope)
 {
    $scope.HelloWorld = "Bestelformulier";
    $scope.Producten = [
        { id: 1, naam: "Gretsch G6120 Eddie Cochran", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 3555, afbeelding: "gretsch_g6120_eddie_cochran2.jpg" },
        { id: 2, naam: "ESP Viper Black", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 1522, afbeelding: "esp_viper_black2.jpg" },
        { id: 3, naam: "PRS SE Custom 22 VSB", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 985, afbeelding: "prs_se_custom_22_vsb2.jpg" },
        { id: 4, naam: "Guild S-100 Polara WH", hoofdmenu: "Gitaren", submenu: "Electrisch", prijs: 1522, afbeelding: "guild_s-100_polara_wh2.jpg" },
        { id: 5, naam: "Cordoba F7 Flamenco", hoofdmenu: "Gitaren", submenu: "Acoustisch", prijs: 499, afbeelding: "cordoba_f7_flamenco.jpg" },
        { id: 6, naam: "Yamaha b2 PE", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "yamaha_b2_pe.jpg" },
        { id: 7, naam: "Kawai K-200 ATX 2 PH/W Piano", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "kawai_k-200_atx_2_whp_piano.jpg" },
        { id: 8, naam: "Yamaha b2 SNC", hoofdmenu: "Keyboards", submenu: "Piano's", prijs: 4390, afbeelding: "yamaha_b2_snc.jpg" },
        { id: 9, naam: "Viscount Unico 500 Konkav", hoofdmenu: "Keyboards", submenu: "Orgels", prijs: 30111, afbeelding: "viscount_unico_500_konkav.jpg" }
    ];
    $scope.hoofdmenu = [];
    $scope.GeselecteerdHoofdmenu;
    $scope.GeselecteerdSubmenu;
    $scope.GeselecteerdProduct;
    $scope.Mandje = [];
    $scope.selecteerHoofdmenu = function (menu) {
        $scope.GeselecteerdHoofdmenu = menu;
        $scope.GeselecteerdSubmenu = '';
    }
    $scope.selecteerSubmenu = function (menu) {
        $scope.GeselecteerdSubmenu = menu;
    }
    $scope.verwijder = function (productnaam) {
        for (var i = 0; i < $scope.Mandje.length; i++) {
            if ($scope.Mandje[i].naam == productnaam) {
                if ($scope.Mandje[i].aantal==1) {
                    $scope.Mandje.splice(i,1);
                } else {
                    $scope.Mandje[i].aantal -= 1;
                }
            }
        }
    }
    $scope.voegToe = function () {
        if ($scope.GeselecteerdProduct.naam.length > 0) {
            for (var i=0;i<$scope.Mandje.length;i++) {
                if ($scope.Mandje[i].naam == $scope.GeselecteerdProduct.naam) {
                    $scope.Mandje[i].aantal += 1;
                    return;
                }
            }
            //we komen hier alleen als het geselecteerde product nog niet in het mandje zit
            $scope.Mandje.push({ id: $scope.GeselecteerdProduct.id, naam: $scope.GeselecteerdProduct.naam, prijs: $scope.GeselecteerdProduct.prijs, aantal: 1 });
        }
    }
    $scope.verhoog = function (productNaam) {
        for (var i = 0; i < $scope.Mandje.length; i++) {
            if ($scope.Mandje[i].naam == productNaam) {
                $scope.Mandje[i].aantal += 1;
                return;
            }
        }
        for (var j = 0; j < $scope.Producten.length; j++)
        {
            if ($scope.Producten[j].naam == productNaam)
            {
                $scope.Mandje.push({ id: $scope.Producten[j].id, naam: $scope.Producten[j].naam, prijs: $scope.Producten[j].prijs, aantal: 1 });
                $scope.$apply();
                return;
            }
        }
    }
}