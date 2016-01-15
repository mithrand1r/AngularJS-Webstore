module qnh.Controllers {
    export class NavigationController {
        private static pos: number = 0;
        public pages: string[] = ['/step01', '/step02'];
        private position:number;
        constructor(private $location: angular.ILocationService) {
            this.position = NavigationController.pos;
        }

        btnNextClick() {
            NavigationController.pos++;
            this.relocate();
        }

        btnPrevClick() {
            NavigationController.pos--;
            this.relocate();
        }

        private relocate() {
            this.position = NavigationController.pos;
            this.$location.path(this.pages[this.position]);
        }

        btnNextDisabled() {
            return this.position > this.pages.length - 2;
        }
        btnPrevDisabled() {
            return this.position < 1;
        }
    }
}