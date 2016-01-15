var app = angular.module('customFilterModule', []);
app.filter('unique', function () {
    return function (items, filterOn) {
        if (filterOn === false) {
            return items;
        }
        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});
app.filter("displayPrice", function() {
    return function(input, comma) {
        if (isNaN(parseFloat(input))) return "";
        comma = (typeof comma === 'undefined') ? "." : ",";
        input = Math.round(parseFloat(input) * 100) / 100;
        var d = input.toString().split(".");
        if (d.length === 1) return input + comma + "-";
        if (d[1].length < 2) return input + "0";
        return input;
    }
});
app.filter("formatPrice", function () {
      return function (price, digits, thoSeperator, decSeperator, bdisplayprice) {
          var i;
          digits = (typeof digits === "undefined") ? 2 : digits;
          bdisplayprice = (typeof bdisplayprice === "undefined") ? true : bdisplayprice;
          thoSeperator = (typeof thoSeperator === "undefined") ? "." : thoSeperator;
          decSeperator = (typeof decSeperator === "undefined") ? "," : decSeperator;
          price = price.toString();
          var _temp = price.split(".");
          var dig = (typeof _temp[1] === "undefined") ? "00" : _temp[1];
          if (bdisplayprice && parseInt(dig, 10) === 0) {
              dig = "-";
          } else {
              dig = dig.toString();
              if (dig.length > digits) {
                  dig = (Math.round(parseFloat("0." + dig) * Math.pow(10, digits))).toString();
              }
              for (i = dig.length; i < digits; i++) {
                  dig += "0";
              }
          }
          var num = _temp[0];
          var s = "",
            ii = 0;
          for (i = num.length - 1; i > -1; i--) {
              s = ((ii++ % 3 === 2) ? ((i > 0) ? thoSeperator : "") : "") + num.substr(i, 1) + s;
          }
          return s + decSeperator + dig;
      }
  });