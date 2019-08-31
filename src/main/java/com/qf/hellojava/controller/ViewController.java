package com.qf.hellojava.controller;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("loginview")
    public String loginView() {
        return "login";
    }

    @RequestMapping("regview")
    public String regView() {
        return "reg";
    }

    @RequestMapping("indexview")
    public String indexView() {
        return "index";
    }
    @RequestMapping("infoview")
    public String infoView(){ return "info";}

    @RequestMapping("mainview")
    public String mainView() {
        return "main";
    }

    @RequestMapping("addUserView")
    public String userView() {
        return "add";
    }

    @RequestMapping("roleview")
    public String roleView() {
        return "role";
    }
@RequiresPermissions(value = {"权限管理"})
    @RequestMapping("permissionview")
    public String permissionView() {
        return "permission";
    }

    @RequestMapping("assignPermissionview")
    public String assignPermissionView(int roleId, Model model) {
        model.addAttribute("roleId", roleId);
        return "assignPermission";
    }
    //理财管理
    @RequestMapping("fanac_syview")
    public String fanac_syView(){ return "fanac_sy";}
    @RequestMapping("fanac_bxview")
    public String fanac_bxView(){ return "fanac_bx";}
    @RequestMapping("fanac_jjview")
    public String fanac_jjView(){ return "fanac_jj";}
    @RequestMapping("fanac_jshview")
    public String fanac_jshView(){ return "fanac_jsh";}
    @RequestMapping("fanac_gjsview")
    public String fanac_gjsView(){ return "fanac_gjs";}


    //财务管理
    @RequestMapping("money_bbview")
    public String money_bbView(){ return "money_bb";}
    @RequiresPermissions(value = {"财务分析"})
    @RequestMapping("money_tjview")
    public String money_tjView(){ return "money_tj";}

    //理财业务
    @RequestMapping("financialView")
    public String financialView(){
        return "financial";
    }
    @RequestMapping("foreignView")
    public String foreignView(){
        return "foreign";
    }
    @RequestMapping("fundView")
    public String fundView(){
        return "fund";
    }
    @RequestMapping("insureView")
    public String insureView(){
        System.out.println("========================================");
        return "insure";
    }
    @RequestMapping("preciousView")
    public String preciousView(){
        return "precious";
    }

    @RequestMapping("auth_advview")
    public String auth_advView() {
        return "auth_adv";
    }

    @RequestMapping("auth_certview")
    public String auth_certView() {
        return "auth_cert";
    }

    @RequestMapping("auth_projectview")
    public String auth_projectView() {
        return "auth_project";
    }

    @RequestMapping("accttypeview")
    public String accttypeView() {
        return "accttype";
    }

    @RequestMapping("applyview")
    public String applyView() {
        return "apply";
    }

    @RequestMapping("apply-1view")
    public String apply1view() {
        return "apply-1";
    }

    @RequestMapping("apply-2view")
    public String apply2view() {
        return "apply-2";
    }

    @RequestMapping("apply-3view")
    public String apply3view() {
        return "apply-3";
    }
    @RequestMapping("/unOauth")
    public String unOauth(){
        return "unOauth";
    }

}

