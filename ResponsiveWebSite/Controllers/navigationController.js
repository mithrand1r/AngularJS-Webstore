var qnh;
(function (qnh) {
    var Controllers;
    (function (Controllers) {
        var NavigationController = (function () {
            function NavigationController($location) {
                this.$location = $location;
                this.pages = ['/step01', '/step02'];
                this.position = NavigationController.pos;
            }
            NavigationController.prototype.btnNextClick = function () {
                NavigationController.pos++;
                this.relocate();
            };
            NavigationController.prototype.btnPrevClick = function () {
                NavigationController.pos--;
                this.relocate();
            };
            NavigationController.prototype.relocate = function () {
                this.position = NavigationController.pos;
                this.$location.path(this.pages[this.position]);
            };
            NavigationController.prototype.btnNextDisabled = function () {
                return this.position > this.pages.length - 2;
            };
            NavigationController.prototype.btnPrevDisabled = function () {
                return this.position < 1;
            };
            NavigationController.pos = 0;
            return NavigationController;
        })();
        Controllers.NavigationController = NavigationController;
    })(Controllers = qnh.Controllers || (qnh.Controllers = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=navigationController.js.map