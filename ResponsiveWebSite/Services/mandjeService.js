var qnh;
(function (qnh) {
    var Services;
    (function (Services) {
        //domme service, die alleen gebruikt wordt omdat services 'singletons' zijn. Op deze manier is 'mandje' overal beschikbaar.
        var MandjeService = (function () {
            function MandjeService() {
                this.mandje = [];
                this.totaalBedrag = 0;
            }
            MandjeService.prototype.updateTotaal = function () {
                var tempTotaalBedrag = 0;
                for (var i = 0; i < this.mandje.length; i++) {
                    tempTotaalBedrag += this.mandje[i].prijs * this.mandje[i].aantal;
                }
                this.totaalBedrag = tempTotaalBedrag;
            };
            return MandjeService;
        })();
        Services.MandjeService = MandjeService;
    })(Services = qnh.Services || (qnh.Services = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=mandjeService.js.map