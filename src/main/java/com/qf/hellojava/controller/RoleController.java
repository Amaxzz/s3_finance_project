package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.Role;
import com.qf.hellojava.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class RoleController {
    @Autowired
    private IRoleService roleService;

    @RequestMapping("loadRoleById")
    public String loadRoleById(int roleId,Model model){
        Role u=roleService.loadRoleById(roleId);
        model.addAttribute("role",u);
        return u!=null?"edit":"error";
    }
    @RequestMapping("roleall")
    public String loadAllRole(@RequestParam(required = false,defaultValue = "1")int page,
                              @RequestParam(required = false,defaultValue = "5")int rows,
                              Model model){
        int maxPage=roleService.calcMaxPage(rows);
        List<Role> roleList=roleService.loadAllRole(page,rows);
        if(page<1){
            page=1;
        }
        if (page>maxPage){
            page=maxPage;
        }
        model.addAttribute("roleList",roleList);
        model.addAttribute("currentPage",page);
        model.addAttribute("maxPage",maxPage);
        return roleList!=null?"role":"error";
    }
    @RequestMapping("addRole")
    public String addRole(Role role){
        boolean bool=roleService.addRole(role);
        return bool?"redirect:roleall":"error";
    }
    @RequestMapping("deleteRoleById")
    public String deleteRoleById(int roleId){
        boolean bool=roleService.deleteRoleById(roleId);
        return bool?"redirect:roleall":"error";
    }
    @RequestMapping("updateRole")
    public String updateRole(Role role){
        boolean bool=roleService.updateRole(role);
        return bool?"redirect:roleall":"error";
    }
    @RequestMapping("deleteRole")
    public String deleteRole(String[] ids){
        boolean bool=roleService.deleteRole(ids);
        return bool?"redirect:roleall":"error";
    }
}
