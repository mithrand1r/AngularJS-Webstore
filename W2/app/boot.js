System.register(['angular2/platform/browser', './bestelformulier.component'], function(exports_1) {
    var browser_1, bestelformulier_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (bestelformulier_component_1_1) {
                bestelformulier_component_1 = bestelformulier_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(bestelformulier_component_1.BestelformulierComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map