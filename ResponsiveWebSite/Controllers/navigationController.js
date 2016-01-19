var qnh;
(function (qnh) {
    var Controllers;
    (function (Controllers) {
        var NavigationController = (function () {
            function NavigationController(navigationService, $location) {
                this.navigationService = navigationService;
                this.$location = $location;
                this.pages = ['/step01', '/step02'];
            }
            NavigationController.prototype.btnNextClick = function () {
                this.navigationService.position++;
                this.relocate();
            };
            NavigationController.prototype.btnPrevClick = function () {
                this.navigationService.position--;
                this.relocate();
            };
            NavigationController.prototype.relocate = function () {
                this.$location.path(this.pages[this.navigationService.position]);
            };
            NavigationController.prototype.btnNextDisabled = function () {
                return this.navigationService.position > this.pages.length - 2;
            };
            NavigationController.prototype.btnPrevDisabled = function () {
                return this.navigationService.position < 1;
            };
            return NavigationController;
        })();
        Controllers.NavigationController = NavigationController;
    })(Controllers = qnh.Controllers || (qnh.Controllers = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=navigationController.js.map