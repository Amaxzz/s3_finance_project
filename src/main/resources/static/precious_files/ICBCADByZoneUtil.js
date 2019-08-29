(function (name, def) {
    if (typeof define === "function") {
        define(function () { return def; });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = def;
    } else {
        this[name] = def;
    }
})("ICBCADByZoneUtil", (function () {
    var clientZoneNoDateCookieName = "ICBC_AD_ClientZONENO_DATE",
        clientZoneNoDataCookieName = "ICBC_AD_ClientZONENO_DATA";
    var namespace = {
        ip: null,
        /**
         * ip地址获取状态, { 0: "未获取", 1: "获取中", 2: "已获取" }
         * @type {Number}
         */
        ipStatus: 0,
        CurrentSite: "",
        SetCurrentSite: function (currentSite) {
            this.CurrentSite = currentSite;
        },
        /**
         * 根据广告脚本基本名称和客户所属区域代码，返回可以显示的广告脚本名称后缀
         * @param {[type]} basename     [description]
         * @param {[type]} clientZoneNo [description]
         */
        GetADFileNameSuffix: function (basename, clientZoneNo) {
            var result = "0",
                i, len;
            if (clientZoneNo != "0" && typeof ICBCADActiveMaintainZoneList !== "undefined") {
                try {
                    for (i = 0, len = ICBCADActiveMaintainZoneList.length; i < len; i++) {
                        if (basename == ICBCADActiveMaintainZoneList[i][0] && clientZoneNo == ICBCADActiveMaintainZoneList[i][1]) {
                            result = clientZoneNo;
                            break;
                        }
                    }
                } catch (e) {
                }
            }
            return result;
        },
        /**
         * 获取完整的广告脚本名称
         * @param {[type]} basename [description]
         * @param {[type]} suffix   [description]
         */
        GetADFileName: function (basename, suffix) {
            var result = basename;
            if (suffix && suffix != "0") {
                result = basename + "_" + suffix;
            }
            return result;
        },
        /**
         * 根据地理位置获取所属区域
         */
        GetClientZoneNo: function () {
            //从cookie中读取
            var saved_data = this.GetICBCZoneNoFromCookie();
            if (saved_data) return saved_data;
            //重新获取
            try {
                this.GetClientIP(this.UpdateZoneNoToCookie);
            } catch (e) {
            } finally {
                return "0";
            }
        },
        /**
         * 保存当前地区代码到cookie
         * @param {[type]} clientIP [description]
         */
        UpdateZoneNoToCookie: function (clientIP) {
            var available_zoneno, curr_date;
            if (typeof console !== "undefined") {
                console.info("clientIP=" + clientIP);
            }
            if (clientIP) {
                available_zoneno = this.GetICBCZoneNoByIP(clientIP);
                curr_date = this.GetCurrentDate();
                this.SaveToCookie(clientZoneNoDateCookieName, curr_date);
                this.SaveToCookie(clientZoneNoDataCookieName, available_zoneno);
            }
        },
        /**
         * 根据IP获取工行区域代码
         * @param {[type]} ipstr [description]
         */
        GetICBCZoneNoByIP: function (ipstr) {
            var convert_ip,
                i, len;
            if (typeof ICBC_IEPA_ZONES === "undefined") return "0";
            if (ipstr) {
                try {
                    convert_ip = this.ConvertClientIP(ipstr);
                    for (i = 0, len = ICBC_IEPA_ZONES.length; i < len; i++) {
                        if (parseInt(ICBC_IEPA_ZONES[i][0]) < convert_ip && convert_ip < parseInt(ICBC_IEPA_ZONES[i][1])) {
                            return ICBC_IEPA_ZONES[i][2];
                        }
                    }
                } catch (e) {
                } finally {
                    return "0";
                }
            }
        },
        /**
         * 根据IP获取所属区域
         * @param {string} ipStr [description]
         */
        ConvertClientIP: function (ipStr) {
            var ipArr,
                total = 0;
            if (!ipStr) return "0";
            ipArr = ipStr.split(".");
            if (!ipArr || ipArr.length !== 4) return "0";
            if (ipArr[0] && ipArr[0].length > 0) {
                total = parseInt(ipArr[0]) * 256 * 256 * 256;
            } else {
                return 0;
            }
            if (ipArr[1] && ipArr[1].length > 0) {
                total += parseInt(ipArr[1]) * 256 * 256;
            } else {
                return 0;
            }
            if (ipArr[2] && ipArr[2].length > 0) {
                total += parseInt(ipArr[2]) * 256;
            } else {
                return 0;
            }
            if (ipArr[3] && ipArr[3].length > 0) {
                total += parseInt(ipArr[3]);
            } else {
                return 0;
            }
            return total;
        },
        /**
         * 获取客户端ip
         * @param {Function} UpdateZoneNoToCookie 将地区号更新到cookie的函数
         */
        GetClientIP: function (UpdateZoneNoToCookie) {
            var currSite = "http://www.icbc.com.cn",
                rHttp = /^http:/i,
                sHttps = "https:",
                self = this;
            if (self.CurrentSite) currSite = self.CurrentSite;
            if (self.ipStatus) return;
            self.ipStatus = 1;
            if (location.protocol === sHttps) currSite=currSite.replace(rHttp, sHttps);
            try {
                $.ajax({
                    type: "GET",
                    url: currSite + "/ICBCDynamicSite/E_Investment/GetClientAnalysisData.asmx/GetClientIP?jsoncallback=?",
                    dataType: "jsonp",
                    success: function (data) {
                        if (data) {
                            var clientIP = data.ip;
                            if (clientIP) {
                                self.ip = clientIP;
                                self.ipStatus = 2;
                                UpdateZoneNoToCookie.call(self, clientIP);
                                return;
                            }
                        }
                        UpdateZoneNoToCookie.call(self, null);
                    },
                    fail: function (data) {
                        self.ipStatus = 0;
                        UpdateZoneNoToCookie.call(self, null);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        // 调用本次AJAX请求时传递的options参数
                        self.ipStatus = 0;
                        if (typeof console !== "undefined") {
                            console.error(XMLHttpRequest.status);
                            console.error(textStatus);
                            console.error(errorThrown);
                        }
                    }
                });
            }
            catch (e) {
                self.ipStatus = 0;
                if (typeof console !== "undefined") {
                    console.error(e);
                }
                UpdateZoneNoToCookie.call(self, null);
            }
        },
        /**
         * 从cookie中获取客户端所属区域代码
         */
        GetICBCZoneNoFromCookie: function () {
            //得到上一次保存区域代码的时间
            var saved_date = this.GetFromCookie(clientZoneNoDateCookieName),
                curr_date;
            if (saved_date) {
                curr_date = this.GetCurrentDate();
                if (this.GetDateDiff(curr_date, saved_date) < 7) {
                    saved_data = this.GetFromCookie(clientZoneNoDataCookieName);
                    if (saved_data) return saved_data;
                }
            }
            return null;
        },
        /**
         * 清空客户端所属区域代码数据
         */
        ClearICBCZoneNoFromCookie: function () {
            this.SaveToCookie(clientZoneNoDateCookieName, "");
            this.SaveToCookie(clientZoneNoDataCookieName, "");
        },
        GetCurrentDate: function () {
            var currDate = new Date();
            return currDate.getFullYear() + "-" + (currDate.getMonth() + 1) + "-" + currDate.getDate();
        },
        /**
         * 计算两个日期的间隔天数
         * @param {[type]} sDate1 [description]
         * @param {[type]} sDate2 [description]
         */
        GetDateDiff: function (sDate1, sDate2) {
            try {
                var tmpDate, oDate1, oDate2, iDays;
                tmpDate = sDate1.split('-');
                oDate1 = new Date(tmpDate[1] + "-" + tmpDate[2] + "-" + tmpDate[0]);
                tmpDate = sDate2.split('-');
                oDate2 = new Date(tmpDate[1] + "-" + tmpDate[2] + "-" + tmpDate[0]);
                iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
                return iDays;
            }
            catch (e) {
                return 9999;
            }
        },
        /**
         * 保存到cookie
         * @param {[type]} cookieName  [description]
         * @param {[type]} cookieValue [description]
         */
        SaveToCookie: function (cookieName, cookieValue) {
            document.cookie = cookieName + '=' + cookieValue;
        },
        /**
         * 从cookie中获取
         * @param {[type]} cookieName [description]
         */
        GetFromCookie: function (cookieName) {
            try {
                var strCookie = document.cookie,
                    arrCookie,
                    i, len, arr;
                if (strCookie) {
                    arrCookie = strCookie.split(";");
                    if (arrCookie) {
                        for (i = 0, len = arrCookie.length; i < len; i++) {
                            arr = arrCookie[i].split("=");
                            while (arr[0].charAt(0) === " ")
                                arr[0] = arr[0].substring(1, arr[0].length);
                            //找到名称为userId的cookie，并返回它的值
                            if (cookieName === arr[0]) {
                                return arr[1];
                            }
                        }
                    }
                }
                return "";
            } catch (e) {
            }
        }
    };
    return namespace;
})());
