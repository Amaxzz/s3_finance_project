package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.Fananc;
import com.qf.hellojava.pojo.JsonClass;
import com.qf.hellojava.service.IFanacService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class FanancController {
    @Autowired
    IFanacService fanacService;
    @RequestMapping("fanac")
    public String fanac (int classss, Model model){
        List<Fananc> fanancList=fanacService.getFanac(classss);
        model.addAttribute("fanacList",fanancList);
        switch (classss){
            case 1:return "fanac_sy";
            case 2:return "fanac_bx";
            case 3:return "fanac_jj";
            case 4:return "fanac_gjs";
            case 5:return "fanac_jsh";
            default:break;
        }
        return "error";
    }
    @ResponseBody
    @RequestMapping("/findAllFinanc")
    public List<JsonClass> findAllFinanc1(){
        List<JsonClass> allFananc=fanacService.findAllFinanc();
        return allFananc;
    }
    @ResponseBody
    @RequestMapping("/findFanancByUid")
    public Map<Integer,List> findFanancByUid(){
        Map<Integer,List>  allFananc=fanacService.findFanancByUid();
        return allFananc;
    }
}
