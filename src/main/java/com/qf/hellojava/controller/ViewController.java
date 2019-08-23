package com.qf.hellojava.controller;

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

    @RequestMapping("permissionview")
    public String permissionView() {
        return "permission";
    }

    @RequestMapping("assignPermissionview")
    public String assignPermissionView(int roleId, Model model) {
        model.addAttribute("roleId", roleId);
        return "assignPermission";
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

}

