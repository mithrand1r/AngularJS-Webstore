module qnh.Services {
    export class ProductenService {
        constructor(private $http: angular.IHttpService) {}
        getProducts() {
            return this.$http({
                /*url: "http://localhost:64445/api/product",*/
                url: "http://productenservicet01.azurewebsites.net/api/product",
                method:"GET"
            }).then((response) =>  (response.data));
        }
    }
    interface IProduct {
        id: number;
        naam: string;
        hoofdmenu: string;
        submenu: string;
        prijs: number;
        afbeelding: string;
    }
}