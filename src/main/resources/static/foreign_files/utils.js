(function (name, def) {
    if (typeof define === "function") {
        define(function () { return def; });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = def;
    } else {
        this[name] = def;
    }
})("utils", (function (window) {
    var document = window.document,
        jsHash = {},
        cssHash = {},
        head = document.head || document.getElementsByTagName("head")[0];
    return {
        execFn: function (fn, data) {
            return typeof fn === "function" ? fn.call(window, data) : window[fn].call(window, data);
        },
        loadJs: function (src, fn, data, hashKey) {
            var execFn = this.execFn;
            hashKey = hashKey || src;
            if (jsHash[hashKey]) {
                window.components.push(execFn(fn, data));
                return;
            }
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
            document.body.appendChild(script);
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if(this.readyState == "complete" || this.readyState == "loaded") {
                        this.onreadystatechange = null;
                        jsHash[hashKey] = true;
                        window.components.push(execFn(fn, data));
                    }
                }
            } else {
                script.onload = function () {
                    this.onload = null;
                    jsHash[hashKey] = true;
                    window.components.push(execFn(fn, data));
                }
            }
        },
        loadCss: function (src, hashKey) {
            hashKey = hashKey || src;
            if (cssHash[hashKey]) return;
            var link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", src);
            head.appendChild(link);
            cssHash[hashKey] = true;
        },
        parseTemplate: function (str, data) {
            var fn = new Function('obj',
                'var p=[],print=function(){p.push.apply(p,arguments);};' +
                'with(obj){p.push(\'' + str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'") +
                "');}return p.join('');");
            return data ? fn(data) : fn;
        },
        getCookie: function (name) {
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
                arr = document.cookie.match(reg);
            if (arr) return unescape(arr[2]);
            else return null;
        },
        removeCookie: function (name, path) {
            var expires = new Date(),
                cookieValue = this.getCookie(name);
            expires.setTime(expires.getTime() - 1);
            path = path ? "path=" + path : "";
            if (cookieValue) document.cookie = name + "=" + cookieValue + ";" + path + ";expires=" + expires.toGMTString();
        },
        setCookie: function (name, value, time, path) {
            var expires = new Date(),
                second =  time * 1000;
            expires.setTime(expires.getTime() + second);
            path = path ? "path=" + path : "";
            var strCookie = name + "=" + escape (value) + ";" + path + ";expires=" + expires.toGMTString();
            document.cookie = strCookie;
        }
    };
})(window));
