var qnh;
(function (qnh) {
    var Services;
    (function (Services) {
        var ProductenService = (function () {
            function ProductenService($http) {
                this.$http = $http;
            }
            ProductenService.prototype.getProducts = function () {
                return this.$http({
                    /*url: "http://localhost:64445/api/product",*/
                    url: "http://productenservicet01.azurewebsites.net/api/product",
                    method: "GET"
                }).then(function (response) { return (response.data); });
            };
            return ProductenService;
        })();
        Services.ProductenService = ProductenService;
    })(Services = qnh.Services || (qnh.Services = {}));
})(qnh || (qnh = {}));
//# sourceMappingURL=productenService.js.map