/**
* @author kfzx-majt
*/
function IEPAClientAnalysisInjectUtil() {
}

/*
* recordInjectHitcount方法，在门户进行注入交易操作时调用此方法，记录注入交易的记录。
* injectUrl为交易种类+“/”+产品名称+操作类型，如“贵金属/人民币帐户黄金挂单交易”
*/
IEPAClientAnalysisInjectUtil.recordInjectHitcount = function (injectUrl) {
    var url = encodeURI("/_注入inject/" + injectUrl + ".htm");
    IEPAClientAnalysisInjectUtil.recordHitcount(url);
};
/*
*recordHitcount方法，记录页面点击率特别方法
*因为原客行脚本，在页面加载时执行，无法单独调用，可操作性低，故封装此方法，逻辑与客行点击率记录相同
*将原recordInjectHitcount方法逻辑下移，原recordInjectHitcount方法记录点击率，只对URL参数处理，然后调用本方法记录点击率
*/
IEPAClientAnalysisInjectUtil.recordHitcount = function (referrerUrl, optional) {
    try {
        //特殊需求站点额外信息
        var optionalUrlParaArray = [];
        var optionalUrlPara = "";
        var optionalNodeJSParaArray = [];
        var optionalNodeJSPara = "";
        if (optional != undefined) {
            for (var p in optional) {
                if (optional.hasOwnProperty(p)) {
                    optionalUrlParaArray.push(p + "=" + optional[p]);
                    optionalNodeJSParaArray.push('"' + p + '":"' + optional[p] + '"')
                }
            }

            optionalUrlPara = "&" + optionalUrlParaArray.join("&");
            optionalNodeJSPara = "," + optionalNodeJSParaArray.join(",");
        }

        var pathobj = document.getElementById('ImgaddressForClient');
        var path = null;
        if (pathobj != null && pathobj != undefined && document.getElementById('ImgaddressForClient').type == 'hidden') {
            path = document.getElementById('ImgaddressForClient').value;
        } else {
            try {
                path = document.getElementById('ImgaddressForClient').content;
            } catch (exp) {
                path = "http://hit.icbc.com.cn/image/hitcount.gif";
            }
        }
        ;
        //参照ClientAnalysis.js中的方法，获取userAnalysisId
        var isMobileLifeobj = document.getElementById("isMobileLife");
        var isMobileLife = null;
        if (isMobileLifeobj != null && isMobileLifeobj != undefined) {
            isMobileLife = document.getElementById('isMobileLife').value;
        }
        var userAnalysisId = null;
        if (isMobileLife == 'true' && typeof (localStorage) != "undefined" && localStorage != null) {//如果是移动生活页面，则通过LocalStorage来进行参数的存储和获取
            userAnalysisId = localStorage.getItem('icbcUserAnalysisId');
        } else {//非移动生活页面，使用Cookie来进行参数的存储和获取
            userAnalysisId = IEPAClientAnalysisInjectUtil.GetCookie('icbcUserAnalysisId')
        }
        if (path == null || path == "" || path == undefined) {
            path = "http://hit.icbc.com.cn/image/hitcount.gif";
        }

        //工行学苑部分
        var collegeCurrentCataType = document.getElementById('currentCataType') == null ? "" : document.getElementById('currentCataType').content;
        var collegeReferrerCataType = document.getElementById('referrerCataType') == null ? "" : document.getElementById('referrerCataType').content;

        var collegeUrlQuery = "";
        var collegeNodeQuery = "";
        if ((collegeCurrentCataType != undefined && collegeCurrentCataType != "") || (collegeReferrerCataType != undefined && collegeReferrerCataType != "")) {
            collegeUrlQuery = "&currentCataType=" + collegeCurrentCataType + "&RefferCataType=" + collegeReferrerCataType;
            collegeNodeQuery = ',"currentCataType":"' + collegeCurrentCataType + '","RefferCataType":"' + collegeReferrerCataType + '"';
        }

        var url = encodeURI(referrerUrl);
        var currentUrl = encodeURI(window.location.href);
        var d, s;
        d = new Date();
        s = d.valueOf();
        if (userAnalysisId == null || userAnalysisId == "" || userAnalysisId == undefined) {
            //document.createElement("img").setAttribute("src", path + "?rid=" + s + "&ReferrerPage=" + url + "&PopeyeIsLogin=" + IEPAClientAnalysisInjectUtil.isLogin() + collegeUrlQuery + optionalUrlPara);
        } else {
            //document.createElement("img").setAttribute("src",
            //    path + "?rid=" + s + "&ReferrerPage=" + url + '&UserAnalysisId=' + userAnalysisId + "&PopeyeIsLogin=" + IEPAClientAnalysisInjectUtil.isLogin() + collegeUrlQuery + optionalUrlPara);
        }

        //新增使用nodejs ajas部分
        try {
            var nodeJSPath = "";

            //WAP
            
            if (path.indexOf(".wbmp") > 0) {
                
                	nodeJSPath = "//act.icbc.com.cn/image/hitcount.wbmp";
                
            } else {
                nodeJSPath = "http://act.icbc.com.cn/image/hitcount.gif";
            }


            //组织参数
            var nodeJSParas = "";
            if (userAnalysisId == null || userAnalysisId == "" || userAnalysisId == undefined) {
                nodeJSParas = '{"rid": "' + s + '","pageUrl":"' + encodeURIComponent(currentUrl) + '","ReferrerPage": "' + encodeURIComponent(url) + '","PopeyeIsLogin":"' + IEPAClientAnalysisInjectUtil.isLogin() + '"'
                    + collegeNodeQuery + optionalNodeJSPara + '}';
            } else {
                nodeJSParas = '{"rid": "' + s + '","pageUrl":"' + encodeURIComponent(currentUrl) + '","ReferrerPage": "' + encodeURIComponent(url) + '","PopeyeIsLogin":"' + IEPAClientAnalysisInjectUtil.isLogin()
                    + '","UserAnalysisId":"' + userAnalysisId + '"'
                    + collegeNodeQuery + optionalNodeJSPara + '}';
            }

            if (typeof ($) != "undefined") {
                $.support.cors = true;
                $.ajax({
                    url: nodeJSPath,
                    cache: false,
                    async: true,
                    timeout: 3000,
                    crossDomain: true,
                    type: "POST",
                    data: nodeJSParas,
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        IEPAClientAnalysisInjectUtil.insertAGetScript((nodeJSPath + "?p=" + nodeJSParas), document.getElementsByTagName("body")[0]);

                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        // 调用本次AJAX请求时传递的options参数
                        if (typeof (console) != "undefined") {
                            console.error(XMLHttpRequest);
                            console.error(textStatus);
                            console.error(errorThrown);
                        }
                    }
                });
            } else {
                IEPAClientAnalysisInjectUtil.insertAGetScript((nodeJSPath + "?p=" + nodeJSParas), document.getElementsByTagName("body")[0]);
            }
        }
        catch (ex) {
            if (typeof (console) != "undefined")
                console.error(ex);
        }

    } catch (exp) {

    }
}
/*
*recordHitcount方法，记录页面点击率特别方法
*因为原客行脚本，在页面加载时执行，无法单独调用，可操作性低，故封装此方法，逻辑与客行点击率记录相同
*将原recordInjectHitcount方法逻辑下移，原recordInjectHitcount方法记录点击率，只对URL参数处理，然后调用本方法记录点击率
*/
IEPAClientAnalysisInjectUtil.recordCurrentHitcount = function (currUrl,type,optional) {
    try {
        //特殊需求站点额外信息
        var optionalUrlParaArray = [];
        var optionalUrlPara = "";
        var optionalNodeJSParaArray = [];
        var optionalNodeJSPara = "";
        if (optional != undefined) {
            for (var p in optional) {
                if (optional.hasOwnProperty(p)) {
                    optionalUrlParaArray.push(p + "=" + optional[p]);
                    optionalNodeJSParaArray.push('"' + p + '":"' + optional[p] + '"')
                }
            }

            optionalUrlPara = "&" + optionalUrlParaArray.join("&");
            optionalNodeJSPara = "," + optionalNodeJSParaArray.join(",");
        }

        var pathobj = document.getElementById('ImgaddressForClient');
        var path = null;
        if (pathobj != null && pathobj != undefined && document.getElementById('ImgaddressForClient').type == 'hidden') {
            path = document.getElementById('ImgaddressForClient').value;
        } else {
            try {
                path = document.getElementById('ImgaddressForClient').content;
            } catch (exp) {
                path = "http://hit.icbc.com.cn/image/hitcount.gif";
            }
        }
        ;
        //参照ClientAnalysis.js中的方法，获取userAnalysisId
        var isMobileLifeobj = document.getElementById("isMobileLife");
        var isMobileLife = null;
        if (isMobileLifeobj != null && isMobileLifeobj != undefined) {
            isMobileLife = document.getElementById('isMobileLife').value;
        }
        var userAnalysisId = null;
        if (isMobileLife == 'true' && typeof (localStorage) != "undefined" && localStorage != null) {//如果是移动生活页面，则通过LocalStorage来进行参数的存储和获取
            userAnalysisId = localStorage.getItem('icbcUserAnalysisId');
        } else {//非移动生活页面，使用Cookie来进行参数的存储和获取
            userAnalysisId = IEPAClientAnalysisInjectUtil.GetCookie('icbcUserAnalysisId')
        }
        if (path == null || path == "" || path == undefined) {
            path = "http://hit.icbc.com.cn/image/hitcount.gif";
        }

        //工行学苑部分
        var collegeCurrentCataType = document.getElementById('currentCataType') == null ? "" : document.getElementById('currentCataType').content;
        var collegeReferrerCataType = document.getElementById('referrerCataType') == null ? "" : document.getElementById('referrerCataType').content;

        var collegeUrlQuery = "";
        var collegeNodeQuery = "";
        if ((collegeCurrentCataType != undefined && collegeCurrentCataType != "") || (collegeReferrerCataType != undefined && collegeReferrerCataType != "")) {
            collegeUrlQuery = "&currentCataType=" + collegeCurrentCataType + "&RefferCataType=" + collegeReferrerCataType;
            collegeNodeQuery = ',"currentCataType":"' + collegeCurrentCataType + '","RefferCataType":"' + collegeReferrerCataType + '"';
        }

        var url = encodeURI(window.location.href);
        if(type=='1')
        {
            try {
                if (window.opener == null || window.opener.location == null || window.opener.location.href == null || window.opener.location.href == undefined) {
                    url = document.referrer;
                }
                else {
                    url = window.opener.location;
                }
                url = encodeURI(url);
            } catch (e) {
                url = document.referrer;
                url = encodeURI(url);
            }
        }
        var currentUrl = encodeURI(currUrl);
        var d, s;
        d = new Date();
        s = d.valueOf();
        if (userAnalysisId == null || userAnalysisId == "" || userAnalysisId == undefined) {
            //document.createElement("img").setAttribute("src", path + "?rid=" + s + "&ReferrerPage=" + url + "&PopeyeIsLogin=" + IEPAClientAnalysisInjectUtil.isLogin() + collegeUrlQuery + optionalUrlPara);
        } else {
            //document.createElement("img").setAttribute("src",
            //    path + "?rid=" + s + "&ReferrerPage=" + url + '&UserAnalysisId=' + userAnalysisId + "&PopeyeIsLogin=" + IEPAClientAnalysisInjectUtil.isLogin() + collegeUrlQuery + optionalUrlPara);
        }

        //新增使用nodejs ajas部分
        try {
            var nodeJSPath = "";

            //WAP
            if (path.indexOf(".wbmp") > 0) {
                
                	nodeJSPath = "//act.icbc.com.cn/image/hitcount.wbmp";
                
            } else {
                nodeJSPath = "http://act.icbc.com.cn/image/hitcount.gif";
            }


            //组织参数
            var nodeJSParas = "";
            if (userAnalysisId == null || userAnalysisId == "" || userAnalysisId == undefined) {
                nodeJSParas = '{"rid": "' + s + '","pageUrl":"' + encodeURIComponent(currentUrl) + '","ReferrerPage": "' + encodeURIComponent(url) + '","PopeyeIsLogin":"' + IEPAClientAnalysisInjectUtil.isLogin() + '"'
                    + collegeNodeQuery + optionalNodeJSPara + '}';
            } else {
                nodeJSParas = '{"rid": "' + s + '","pageUrl":"' + encodeURIComponent(currentUrl) + '","ReferrerPage": "' + encodeURIComponent(url) + '","PopeyeIsLogin":"' + IEPAClientAnalysisInjectUtil.isLogin()
                    + '","UserAnalysisId":"' + userAnalysisId + '"'
                    + collegeNodeQuery + optionalNodeJSPara + '}';
            }

            if (typeof ($) != "undefined") {
                $.support.cors = true;
                $.ajax({
                    url: nodeJSPath,
                    cache: false,
                    async: true,
                    timeout: 3000,
                    crossDomain: true,
                    type: "POST",
                    data: nodeJSParas,
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        IEPAClientAnalysisInjectUtil.insertAGetScript((nodeJSPath + "?p=" + nodeJSParas), document.getElementsByTagName("body")[0]);

                        // 通常 textStatus 和 errorThrown 之中
                        // 只有一个会包含信息
                        // 调用本次AJAX请求时传递的options参数
                        if (typeof (console) != "undefined") {
                            console.error(XMLHttpRequest);
                            console.error(textStatus);
                            console.error(errorThrown);
                        }
                    }
                });
            } else {
                IEPAClientAnalysisInjectUtil.insertAGetScript((nodeJSPath + "?p=" + nodeJSParas), document.getElementsByTagName("body")[0]);
            }
        }
        catch (ex) {
            if (typeof (console) != "undefined")
                console.error(ex);
        }

    } catch (exp) {

    }
}
IEPAClientAnalysisInjectUtil.GetCookie = function GetAnalysisCookie(cookieName) {
    var strCookie = document.cookie;
    //将多cookie切割为多个名/值对
    if (strCookie != null) {
        var arrCookie = strCookie.split(";");
        var userAnalysisId;
        if (arrCookie != null) {
            //遍历cookie数组，处理每个cookie对
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                //找到名称为userId的cookie，并返回它的值
                if (cookieName == arr[0]) {
                    //userAnalysisId=arr[1];
                    return arr[1];
                    break;
                }
            }
        }
    }
    return '';
};
IEPAClientAnalysisInjectUtil.isLogin = function () {
    var lasttimeaccess = IEPAClientAnalysisInjectUtil.GetCookie('lasttimeaccess');
    if (lasttimeaccess != null || lasttimeaccess != '' || lasttimeaccess != undefined) {
        var dateori, datenow, curtime;
        datenow = new Date();
        dateori = new Date("january 01,1970 00:00:00");
        //与后台程序保持一致
        curtime = datenow.getTime() - dateori.getTime();
        var cookietime = IEPAClientAnalysisInjectUtil.GetCookie('lasttimeaccess');
        if (cookietime != "" || curtime - cookietime < 900000) {
            return true;
        } else {
            return false;
        }
    }
};


IEPAClientAnalysisInjectUtil.insertAGetScript = function (src, parent) {
    var sc = document.createElement("script");
    sc.setAttribute("src", src);

    if (sc != undefined) {
        if (parent != undefined) {
            parent.appendChild(sc);
        }
        else {
            window.onload = function () {
                var sc = document.createElement("script");
                sc.setAttribute("src", src);

                if (sc != undefined) {
                    if (parent != undefined) {
                        parent.appendChild(sc);
                    }
                    else {
                        console.error("body element is undefined");
                    }
                }
            }
        }
    }
}