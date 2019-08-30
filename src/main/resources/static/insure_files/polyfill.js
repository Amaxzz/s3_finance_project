(function (window, undefined) {
    if (!Object.keys) {
        Object.keys = function (obj) {
            var array = [], k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) array.push(k);
            }
            return array;
        }
    }
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, arg) {
            var i = 0, len = this.length;
            while (i < len) {
                callback.call(arg, this[i], i, this);
                i++;
            }
        }
    }
})(window);