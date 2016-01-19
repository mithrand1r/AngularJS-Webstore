module qnh.Controllers {
    export class NavigationController {
        public pages: string[] = ['/step01', '/step02'];
        constructor(public navigationService: qnh.Services.NavigationService, private $location: angular.ILocationService) {
        }

        btnNextClick() {
            this.navigationService.position++;
            this.relocate();
        }

        btnPrevClick() {
            this.navigationService.position--;
            this.relocate();
        }

        private relocate() {
            this.$location.path(this.pages[this.navigationService.position]);
        }

        btnNextDisabled() {
            return this.navigationService.position > this.pages.length - 2;
        }
        btnPrevDisabled() {
            return this.navigationService.position < 1;
        }
    }
}