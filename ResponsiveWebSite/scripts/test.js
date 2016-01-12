var Klas = (function () {
    function Klas() {
    }
    Object.defineProperty(Klas.prototype, "leraar", {
        get: function () {
            return this._leraar;
        },
        set: function (value) {
            this._leraar = value;
        },
        enumerable: true,
        configurable: true
    });
    return Klas;
})();
//# sourceMappingURL=test.js.map