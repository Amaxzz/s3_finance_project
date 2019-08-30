//ipad新增
function is_iPad() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/iPad/i) == "ipad") {
        return true;
    } else {
        return false;
    }
}
var GetParameter = function () {
    var map = new Array();
    var tgs = document.getElementsByTagName('script');
    if (tgs.length <= 0) { return null; }
    var src = tgs.item(tgs.length - 1).src;
    var pos = src.indexOf('?');
    if (-1 == pos) { return null; }
    var paras = src.substring(pos + 1);
    paras = paras.split('&');
    for (var n = 0; n < paras.length; n++) {
        _ParseParameter(map, paras[n]);
    }
    return map;
};

var _ParseParameter = function (map, para) {
    var pos = para.indexOf('=');
    var key = para.substring(0, pos);
    var value = para.substring(pos + 1);
    map[key] = value;
};

//--- 移动div 
var ie = document.all;
var nn6 = document.getElementById && !document.all;
var isdrag = false;
var y, x;
var oDragObj;

function moveMouse(e) {
    if (isdrag) {
        oDragObj.style.top = (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y) + "px";
        oDragObj.style.left = (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x) + "px";
        return false;
    }
}

function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && oDragHandle.className != "dragAble") {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.className == "dragAble") {
        isdrag = true;
        oDragObj = oDragHandle;
        nTY = parseInt(oDragObj.style.top + 0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left + 0);
        x = nn6 ? e.clientX : event.clientX;
        document.onmousemove = moveMouse;
        return false;
    }
}
document.onmousedown = initDrag;
document.onmouseup = new Function("isdrag=false");

function LoadCssFile(filepath) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filepath);
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}
function closeMe(floatDiv) {

    document.getElementById(floatDiv).parentNode.removeChild(document.getElementById(floatDiv));
}
function tanChuNew() {
    var Ad_Top;
    var Ad_Left;
    var Ad_Guid;
    var isFlag = true;
    var Ad_ChooseMode;
    var Ad_Source;
    var Ad_IsClose;
    var ad_AreaId;
    var Ad_AreaName;
    var Ad_RealAreaName;
    var Ad_ZoneNo;
    var IsFlash;
    this.getPara = function getPara() {
        try {
            var paras = GetParameter();
            Ad_Top = paras['Ad_Top'];
            Ad_Source = paras['Ad_Source'];
            Ad_Guid = paras['Ad_Guid'];
            Ad_Left = paras['Ad_Left'];
            Ad_ChooseMode = paras['Ad_ChooseMode'];
            Ad_AreaId = paras['Ad_AreaId'];
            Ad_IsClose = paras['Ad_IsClose'];
            Ad_RealAreaName = paras['Ad_RealAreaName'];
            Ad_AreaName = paras['Ad_AreaName'];
            Ad_ZoneNo = paras['Ad_ZoneNo'];
            IsFlash = paras['isFlash'];
        }
        catch (e) {
            ;
        }
    }
    this.getPara_Review = function getPara_ReView() {
        try {
            var paras = [];
            Ad_Top = paras['Ad_Top'];
            Ad_Source = paras['Ad_Source'];
            Ad_Guid = paras['Ad_Guid'];
            Ad_Left = paras['Ad_Left'];
            Ad_ChooseMode = paras['Ad_ChooseMode'];
            Ad_AreaId = paras['Ad_AreaId'];
            Ad_IsClose = paras['Ad_IsClose'];
            Ad_RealAreaName = paras['Ad_RealAreaName'];
            Ad_AreaName = paras['Ad_AreaName'];
            Ad_ZoneNo = paras['Ad_ZoneNo'];
            IsFlash = paras['isFlash'];

        }
        catch (e) {
            ;
        }

    }
    if (isFlag) {
        this.getPara();
    }
    else {
        this.getPara_Review();
    }

    this.topPix = Ad_Top;
    this.leftPix = Ad_Left;
    this.resourcesSrc =['//v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/%e5%a2%83%e5%86%85%e5%88%86%e8%a1%8c/zyhw1128_190531_190930_mgjzkh_190531_190930.jpg'];
    this.resourcesLink = ['http://www.icbc.com.cn/ICBC/site/click/adverRedi.aspx?para=%2ficbc%2f%25e4%25b8%25aa%25e4%25ba%25ba%25e9%2587%2591%25e8%259e%258d%2f%25e8%25b7%25a8%25e5%25a2%2583%25e9%2587%2591%25e8%259e%258d%2f%25e5%25bc%2580%25e6%2588%25b7%25e8%25a7%2581%25e8%25af%2581%2f%25e5%25b7%25a5%25e9%2593%25b6%25e7%25be%258e%25e5%259b%25bd%25e5%25bc%2580%25e6%2588%25b7%25e8%25a7%2581%25e8%25af%2581.htm?1=1&'];
    this.resourceWidth =['300'];
    this.resourceHeight = ['300'];

    this.resourceId = ['2651AF29-6CB3-488A-A1B9-F3C7A4115F90'];
    this.clientId = ['-'];
    this.clientName = ['-'];
    this.adProId = 'Advertisement;f0d493b9-95b3-4f22-a78b-2b58f404d7df';
    this.adHolderId = 'F30F6F8D-928E-4462-8142-D8265475E6CA';
    this.price = '-1';
    this.isPreview = 'false';

    this.createObject = function createObject(resourceWidth, resourceHeight, resourcesSrc, resourcesLink, topPix, leftPix, thisAdData) {
        LoadCssFile("/Portal_Resources/Common/default.css");
        this.divObj = document.createElement('div');
        this.divObj.setAttribute('id', 'floatDiv');
        this.divObj.style.cssText = 'background-color:#d3d3d3;z-index: 99; width:0; top:' + topPix + 'px;left:' + leftPix + 'px;';
        this.divObj.setAttribute('class', 'ke-dialog');
        document.getElementById(Ad_AreaName).appendChild(this.divObj);

        this.tableObj = document.createElement('table');
        this.tableObj.setAttribute('class', 'dragAble');
        this.tableObj.setAttribute('cellpadding', '0');
        this.tableObj.setAttribute('cellspacing', '0');
        this.tableObj.setAttribute('border', '0');
        this.divObj.appendChild(this.tableObj);

        //create new tr top
        this.rowObj = document.createElement('tr');
        this.tableObj.appendChild(this.rowObj);
        //create new td
        this.columnTopObj_tl = document.createElement('td');
        this.columnTopObj_tl.setAttribute('class', 'ke-tl');
        this.rowObj.appendChild(this.columnTopObj_tl);

        //<span class="ke-dialog-empty">
        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnTopObj_tl.appendChild(this.emptyspan);

        this.columnTopObj_tc = document.createElement('td');
        this.columnTopObj_tc.setAttribute('class', 'ke-tc');
        this.rowObj.appendChild(this.columnTopObj_tc);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnTopObj_tc.appendChild(this.emptyspan);

        this.columnTopObj_tr = document.createElement('td');
        this.columnTopObj_tr.setAttribute('class', 'ke-tr');
        this.rowObj.appendChild(this.columnTopObj_tr);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnTopObj_tr.appendChild(this.emptyspan);

        //------create new tr middle
        this.rowMiddleObj = document.createElement('tr');
        this.tableObj.appendChild(this.rowMiddleObj);
        //create new td
        this.columnLeftObj = document.createElement('td');
        this.columnLeftObj.setAttribute('class', 'ke-ml');
        this.rowMiddleObj.appendChild(this.columnLeftObj);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnLeftObj.appendChild(this.emptyspan);

        this.columnCenterObj = document.createElement('td');
        this.columnCenterObj.setAttribute('class', 'ke-mc');
        this.rowMiddleObj.appendChild(this.columnCenterObj);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnCenterObj.appendChild(this.emptyspan);

        this.movableDivObj = document.createElement('div');
        this.movableDivObj.setAttribute('class', 'ke-dialog-title');
        this.columnCenterObj.appendChild(this.movableDivObj);
        //close button
        this.closeButtonObj = document.createElement('img');
        this.closeButtonObj.setAttribute('onclick', 'javascript:closeMe(\'floatDiv\');');
        this.closeButtonObj.setAttribute('src', '/Portal_Resources/Common/windowClose.gif');
        this.closeButtonObj.setAttribute('class', 'ke-dialog-close ke-dialog-close-shadow');
        this.closeButtonObj.setAttribute('title', '关闭');

        this.movableDivObj.appendChild(this.closeButtonObj);

        this.contentDivObj = document.createElement('div');
        this.contentDivObj.setAttribute('class', 'ke-dialog-title');
        this.contentDivObj.style.cssText = 'width: ' + resourceWidth + 'px; height: ' + resourceHeight + 'px;';
        this.columnCenterObj.appendChild(this.contentDivObj);

        this.columnRightObj = document.createElement('td');
        this.columnRightObj.setAttribute('class', 'ke-mr');
        this.rowMiddleObj.appendChild(this.columnRightObj);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnRightObj.appendChild(this.emptyspan);

        //create new tr bottom
        this.rowBottomObj = document.createElement('tr');
        this.tableObj.appendChild(this.rowBottomObj);
        //create new td
        this.columnObj_bl = document.createElement('td');
        this.columnObj_bl.setAttribute('class', 'ke-bl');
        this.rowBottomObj.appendChild(this.columnObj_bl);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnObj_bl.appendChild(this.emptyspan);

        this.columnObj_bc = document.createElement('td');
        this.columnObj_bc.setAttribute('class', 'ke-bc');
        this.rowBottomObj.appendChild(this.columnObj_bc);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnObj_bc.appendChild(this.emptyspan);

        this.columnObj_br = document.createElement('td');
        this.columnObj_br.setAttribute('class', 'ke-br');
        this.rowBottomObj.appendChild(this.columnObj_br);

        this.emptyspan = document.createElement('span');
        this.emptyspan.setAttribute('class', 'ke-dialog-empty');
        this.columnObj_br.appendChild(this.emptyspan);

        if (resourcesSrc.indexOf('.swf') == -1) {
            this.linkObj = document.createElement('a');
            if (resourcesLink != '#') { //修改为新客行记录点击方法
                //this.linkObj.setAttribute('href', resourcesLink);
                this.linkObj.setAttribute('onclick', 'DoADClick(\'' + resourcesLink + '\', \'' + thisAdData + '\', \'' + this.isPreview + '\');');
                this.linkObj.target = '_blank';
            };
            this.contentDivObj.appendChild(this.linkObj);
            this.imageObj = document.createElement('img');
            this.imageObj.src = resourcesSrc;
            this.imageObj.style.cssText = 'border:0px;width:' + resourceWidth + 'px;height:' + resourceHeight + 'px;';
            this.linkObj.appendChild(this.imageObj);
        }
    };
    this.display = function display() {

        var noSwfIndex = 0;
        //ipad新增
        if (is_iPad()) {

            if (this.resourcesSrc.length >= 1 && this.resourcesSrc[0].indexOf('.swf') != -1) {
                for (i = 1; i < this.resourcesSrc.length; i++) {
                    if (this.resourcesSrc[i].indexOf('.swf') == -1) {
                        noSwfIndex = i;
                        break;
                    }
                }
                if (noSwfIndex == 0) {
                    this.resourcesSrc[noSwfIndex] = "";
                }
            }
        }
        else {
            eval('tanChuObj' + Ad_Guid + '=window.open("","' + Ad_Guid + '","top=' + this.topPix + 'px,left=' + this.leftPix + 'px,width=' + this.resourceWidth[noSwfIndex] + 'px,height=' + this.resourceHeight[noSwfIndex] + 'px,status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0");');
            if (eval('tanChuObj' + Ad_Guid + ' == null')) {
                return;
            }
        }

        //初始化show客行数据
        var clientAnalysisShowData = BuildClientAnalysisDataforOneAD("show", this.resourceId[noSwfIndex], this.resourcesSrc[noSwfIndex], this.resourcesLink[noSwfIndex], this.clientId[noSwfIndex], this.clientName[noSwfIndex], this.adProId, this.adHolderId, this.price, Ad_AreaId, Ad_RealAreaName, Ad_ZoneNo);
        var thisAdData = BuildClientAnalysisDataforOneAD("click", this.resourceId[noSwfIndex], this.resourcesSrc[noSwfIndex], this.resourcesLink[noSwfIndex], this.clientId[noSwfIndex], this.clientName[noSwfIndex], this.adProId, this.adHolderId, this.price, Ad_AreaId, Ad_RealAreaName, Ad_ZoneNo);

        if (this.resourcesSrc[noSwfIndex].indexOf('.swf') != -1) {
            //xiewei 20121007
            if (this.resourcesLink[noSwfIndex] == '#') {
                eval('tanChuObj' + Ad_Guid + '.document.write("<div style=\'visibility:visible;z-index:1;position:absolute;left:0px;top:0px;\'>' + '<div position:relative;height:' + this.resourceHeight[noSwfIndex] + ';width:' + this.resourceWidth[noSwfIndex] + ';><embed src=\'' + this.resourcesSrc[noSwfIndex] + '\'' + 'border=\'0\' quality=high WIDTH=\'' + this.resourceWidth[noSwfIndex] + '\' HEIGHT=\'' + this.resourceHeight[noSwfIndex] + '\'' + 'style=\'position:absolute;z-index:0;\'' + 'type=\'application/x-shockwave-flash\'' + 'wmode=\'opaque\'>' + '<div style=\'width:' + this.resourceWidth[noSwfIndex] + 'px;height:' + this.resourceHeight[noSwfIndex] + 'px;z-index:0;position:absolute;\'>' + '<img src=\'/Portal_Resources/AdTemplatesPic/blank.gif\' width=' + this.resourceWidth[noSwfIndex] + 'px height=' + this.resourceHeight[noSwfIndex] + 'px/>' + '</div>' + '</embed></div></div>")');
            }
            else {
                var htmContent = '<script type=\'text/javascript\' src=\'/Portal_Resources/Common/jquery/jquery-1.11.0.min.js\'></script>';
                    htmContent += '<script type=\'text/javascript\' src=\'/Portal_Resources/Common/ClientAnalysis.js\'></script>';
                    htmContent += '<div style=\'visibility:visible;z-index:1;position:absolute;left:0px;top:0px;\'>';
                    htmContent += '<div style=\'position:relative;height:' + this.resourceHeight[noSwfIndex] + ';width:' + this.resourceWidth[noSwfIndex] + ';\'>';
                    htmContent += '<embed src=\'' + this.resourcesSrc[noSwfIndex] + '\'' + 'border=\'0\' quality=high WIDTH=\'' + this.resourceWidth[noSwfIndex] + '\' HEIGHT=\'' + this.resourceHeight[noSwfIndex] + '\'' + 'style=\'position:absolute;z-index:0;\'' + 'type=\'application/x-shockwave-flash\'' + 'wmode=\'opaque\'>';
                    htmContent += '<a onclick=\\"DoADClick(\'' + this.resourcesLink[noSwfIndex] + 'Ad_Source=' + Ad_Source + '\', \'' + thisAdData + '\', \'' + this.isPreview + '\');\\" style=\'cursor:pointer\'/>';
                    htmContent += '<div style=\'width:' + this.resourceWidth[noSwfIndex] + 'px;height:' + this.resourceHeight[noSwfIndex] + 'px;z-index:0;position:absolute;\'/>';
                    htmContent += '<img src=\'/Portal_Resources/AdTemplatesPic/blank.gif\' width=\'' + this.resourceWidth[noSwfIndex] + '\' height=\'' + this.resourceHeight[noSwfIndex] + '\'/>';
                    htmContent += '</embed></div></div>';

                eval('tanChuObj' + Ad_Guid + '.document.write("' + htmContent + '");');
            }
        }
        else {
            if (is_iPad() || (!is_iPad() && (IsFlash != "2"))) {
                if (this.resourcesLink[noSwfIndex] == '#') {
                    if (is_iPad()) {
                        this.createObject(this.resourceWidth[noSwfIndex], this.resourceHeight[noSwfIndex], this.resourcesSrc[noSwfIndex], '#', this.topPix, this.leftPix, "");
                    }
                    else {
                        eval('tanChuObj' + Ad_Guid + '.document.write("<div style=\'visibility:visible;z-index:1;position:absolute;left:0px;top:0px;\'><img border=\'0\' src=\'' + this.resourcesSrc[noSwfIndex] + '\'  width=\'' + this.resourceWidth[noSwfIndex] + '\' height=\'' + this.resourceHeight[noSwfIndex] + '\'  ></div>");');
                    }
                }
                else {
                    if (is_iPad()) {
                        this.createObject(this.resourceWidth[noSwfIndex], this.resourceHeight[noSwfIndex], this.resourcesSrc[noSwfIndex], this.resourcesLink[noSwfIndex] + 'Ad_Source=' + Ad_Source, this.topPix, this.leftPix, thisAdData);
                    }
                    else {
                        var htmContent = '<script type=\'text/javascript\' src=\'/Portal_Resources/Common/jquery/jquery-1.11.0.min.js\'></script>';
                        htmContent += '<script type=\'text/javascript\' src=\'/Portal_Resources/Common/ClientAnalysis.js\'></script>';
                        htmContent += '<div style=\'visibility:visible;z-index:1;position:absolute;left:0px;top:0px;cursor:pointer;\'>';
                        htmContent += '<a onclick=\\"DoADClick(\'' + this.resourcesLink[noSwfIndex] + 'Ad_Source=' + Ad_Source + '\', \'' + thisAdData + '\', \'' + this.isPreview + '\');\\" style=\'cursor:pointer;\'>';
                        htmContent += '<img border=\'0\' src=\'' + this.resourcesSrc[noSwfIndex] + '\'  width=\'' + this.resourceWidth[noSwfIndex] + '\' height=\'' + this.resourceHeight[noSwfIndex] + '\'/>';
                        htmContent += '</a></div>';
                        eval('tanChuObj' + Ad_Guid + '.document.write("' + htmContent + '");');
                    }
                }
            }
        }

        var adContainer = document.getElementById(Ad_AreaName);
        var adContainerContent = '<input type="hidden" class="ClientAnalysisDataforAD" value="' + clientAnalysisShowData + '" />';
        adContainer.innerHTML += adContainerContent;
    }
}
//var tanChunew = new tanChuNew();
//tanChunew.display();

var paras = GetParameter();
Ad_Guid = paras['Ad_Guid'];

eval('var tanChu' + Ad_Guid + '= new tanChuNew();');
eval('tanChu' + Ad_Guid + '.display();');
