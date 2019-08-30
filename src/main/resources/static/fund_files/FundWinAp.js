
// <!CDATA[
function FundAdHis(id)
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + id + "&Func=fundanav","_blank") ;    
    }

function SortToDetail(type)
{
    if(type=="REPAY")
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9b%9e%e6%8a%a5%e7%8e%87%e6%8e%92%e8%a1%8c%e6%a6%9c.htm","_blank");
    }
}

function FundVisit()// 基金关注度小榜中点击更多
{
    window.open("/ICBC/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e7%94%a8%e6%88%b7%e5%85%b3%e6%b3%a8%e5%ba%a6%e6%8e%92%e8%a1%8c%e6%a6%9c.htm","_blank");
    
}

function RollOver_Click(url)
    {
        window.open(url,"_blank") ;    
    }

function FundDeclareClick(title)
    {
        //window.open("/ICBCDynamicSite/site/Fund/test.aspx?Title=" + title + "&Type=" + type + "&Time=" + time + "&Path=" + text,"_blank") ; 
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e5%85%ac%e5%91%8a/" + title + ".htm","_blank") ; 
    }
    
function FundClick(clickid)
    {
        formaction(clickid);    
    }
    
function CompanyFundClick(id)
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e6%80%bb%e8%a7%88.htm?PostId=" + id,"_blank") ;    
    }
    
    function CompanyClick(id)
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%85%ac%e5%8f%b8%e6%a6%82%e5%86%b5.htm?PostId=" + id,"_blank") ;    
    }
    
    function CompanyFundClickforIPad(id)
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e6%80%bb%e8%a7%88.htm?PostId=" + id+"&Type=IPad","_blank") ;    
    }
    function CompanyClickforIPad(id)
    {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%85%ac%e5%8f%b8%e6%a6%82%e5%86%b5.htm?PostId=" + id+"&Type=IPad","_blank") ;    
    }
function CompanyFundClick_FinanceMarket(id)
    {
        window.open("/FinanceMarket/fund/FundDetail.aspx?fundID=" + id,"_blank") ;    
    }//http://83.252.111.58:2222/FinanceMarket/fund/FundDetail.aspx?fundID=481001

function FundCompareClick(fundidlist) {
        window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e6%af%94%e8%be%83.htm?fundId=" + fundidlist, "_blank");
    }
function fortest(id)
{
    switch (id){
        case "fundasset":
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundasset","_parent") ; 
            break;
        case "fundlevel":
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundlevel","_parent") ; 
            break;
        case "fundageneral": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundageneral","_parent") ; 
            break;
        case "fundanav": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundanav","_parent") ; 
            break;
        case "fundarate": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundarate","_parent") ; 
            break;
        case "fundstock": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundstock","_parent") ; 
            break;
        case "fundbond": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundbond","_parent") ; 
            break;
        case "fundainvest": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundainvest","_parent") ; 
            break;
        case "fundinfotime": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundinfotime","_parent") ; 
            break;
        case "fundinfo": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundinfo","_parent") ; 
            break;
        case "fundlaw": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundlaw","_parent") ; 
            break;
        case "fundadhis":
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundadhis","_parent") ; 
            break;
        case "funddetail":
            window.open("/ICBCDynamicSite/site/Fund/test.aspx?PostId=" + document.getElementById("HidFundID").value ,"_parent") ; 
            break;
        case "fundacompany":
            window.open("test3.aspx?PostId=" + document.getElementById("HidFundID").value ,"_blank") ; 
            break;
        case "fundnavchart":
            window.open("test3.aspx?PostId=" + document.getElementById("HidFundID").value + "&PostType=" + document.getElementById("HidFundType").value + "&Type=3" ,"_blank") ; 
            break;
        case "fundfinance": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundfinance","_parent") ; 
            break;
        case "fundbs": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundbs","_parent") ; 
            break;
        case "fundicst": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundicst","_parent") ; 
            break;
        case "fundchange": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundchange","_parent") ; 
            break;
        case "fundhold": 
            window.open("/ICBCDynamicSite/site/Fund/test2.aspx?PostId=" + document.getElementById("HidFundID").value + "&Func=fundhold","_parent") ; 
            break;
        default: 
            break;
     }
} 

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function FundInjectClick(clickid)
{
    switch(clickid)
    {
        case "1":
            document.FormBuy.target="_blank";
            document.FormBuy.submit();
            break;
        case "2":
            document.FormRedeem.target="_blank";
            document.FormRedeem.submit();
            break;
        case "3":
            document.FormFixInvest.target="_blank";
            document.FormFixInvest.submit();
            break;
        case "4":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundchange","_parent");         
            break;
    }
}

function FundInjectClickA(clickid, injectUrl) {
    IEPAClientAnalysisInjectUtil.recordInjectHitcount(injectUrl);
    switch (clickid) {
        case "1":
            document.FormBuy.target = "_blank";
            document.FormBuy.submit();
            break;
        case "2":
            document.FormRedeem.target = "_blank";
            document.FormRedeem.submit();
            break;
        case "3":
            document.FormFixInvest.target = "_blank";
            document.FormFixInvest.submit();
            break;
        case "4":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundchange", "_parent");
            break;
    }
}

function FundInjectROLLOVER()
{
    document.FormRollOver.target="_blank";
    document.FormRollOver.submit();
    //window.open(ROLLOVERUrl,"_blank") ; 
}

function FundInjectROLLOVERA(injectUrl) {
    IEPAClientAnalysisInjectUtil.recordInjectHitcount(injectUrl);
    document.FormRollOver.target = "_blank";
    document.FormRollOver.submit();
}

function FundInjectROLLOVERPARA(injectUrl, injectTranName, injectTranData, injectSignStr) {
    IEPAClientAnalysisInjectUtil.recordInjectHitcount(injectUrl);
    document.FormRollOver.injectTranName.value = injectTranName;
    document.FormRollOver.injectTranData.value = injectTranData;
    document.FormRollOver.injectSignStr.value = injectSignStr;
    document.FormRollOver.target = "_blank";
    document.FormRollOver.submit();
}

function FundInjectCompareClick(formid)
{
    document.getElementById(formid).target="_blank";
    document.getElementById(formid).submit();
}

function FundInjectCompareClickA(formid, injectUrl) {
    IEPAClientAnalysisInjectUtil.recordInjectHitcount(injectUrl);
    document.getElementById(formid).target = "_blank";
    document.getElementById(formid).submit();
}

function FundParentInjectClick(clickid)
{
    switch(clickid)
    {
        case "1":
            parent.parent.document.FormBuy.target="_blank";
            parent.parent.document.FormBuy.submit();
            break;
        case "2":
            parent.parent.document.FormRedeem.target="_blank";
            parent.parent.document.FormRedeem.submit();
            break;
        case "3":
            parent.parent.document.FormFixInvest.target="_blank";
            parent.parent.document.FormFixInvest.submit();
            break;
    }
}

function formaction(id)
{
    switch (id){
        case "fundasset":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundasset","_parent") ; 
            break;
        case "fundlevel":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundlevel","_parent") ; 
            break;
        case "fundageneral": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundageneral","_parent") ; 
            break;
        case "fundanav": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundanav","_parent") ; 
            break;
        case "fundarate": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundarate","_parent") ; 
            break;
        case "fundstock": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundstock","_parent") ; 
            break;
        case "fundbond": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundbond","_parent") ; 
            break;
        case "fundainvest": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundainvest","_parent") ; 
            break;
        case "fundinfotime": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundinfotime","_parent") ; 
            break;
        case "fundinfo": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundinfo","_parent") ; 
            break;
        case "fundlaw": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundlaw","_parent") ; 
            break;
        case "fundadhis":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundadhis","_parent") ; 
            break;
        case "funddetail":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e6%80%bb%e8%a7%88.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundadhis","_parent") ; 
            break;
        case "fundacompany":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%85%ac%e5%8f%b8%e6%a6%82%e5%86%b5.htm?PostId=" + document.getElementById("HidFundID").value ,"_blank") ; 
            break;
        case "fundnavchart":
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e7%bb%a9%e6%95%88%e8%b5%b0%e5%8a%bf%e5%9b%be.htm?PostId=" + document.getElementById("HidFundID").value + "&PostType=" + document.getElementById("HidFundType").value + "&Type=3" ,"_blank") ; 
            break;
        case "fundfinance": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundfinance","_parent") ; 
            break;
        case "fundbs": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundbs","_parent") ; 
            break;
        case "fundicst": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundicst","_parent") ; 
            break;
        case "fundchange": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundchange","_parent") ; 
            break;
        case "fundhold": 
            window.open("/icbc/%e7%bd%91%e4%b8%8a%e5%9f%ba%e9%87%91/%e5%9f%ba%e9%87%91%e5%b9%b3%e5%8f%b0/%e5%9f%ba%e9%87%91%e4%bf%a1%e6%81%af.htm?PostId=" + document.getElementById("HidFundID").value + "&Func=fundhold","_parent") ; 
            break;
        
        default: 
            break; 
     }
}


// ]]>