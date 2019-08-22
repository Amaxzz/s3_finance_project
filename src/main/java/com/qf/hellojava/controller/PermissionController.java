package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.Permission;
import com.qf.hellojava.service.IPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PermissionController {
    @Autowired
    private IPermissionService permissionService;

    @ResponseBody
    @RequestMapping("loadPermAll")
    public List<Permission> loadPermAll(){
        return permissionService.loadAll();
    }

    @ResponseBody
    @RequestMapping("loadPermByRoleId")
    public  List<Permission> loadPermByRoleId(int roleId){
        List<Permission> allList=permissionService.loadAll();
        List<Permission> roleList=permissionService.loadByRoleId(roleId);

        for(Permission rolePermission:roleList){
            for (Permission allPermission:allList){
                if(rolePermission.getPermId()==allPermission.getPermId()){
                    allPermission.setChecked("true");
                    break;
                }
            }
        }
        return allList;
    }

    @ResponseBody
    @RequestMapping("assignpermission")
    public int assignPermission(String pids,int roleId){
        String[] ps=pids.split("-");
        int[] pIds=new int[ps.length];
        for (int i=0;i<pIds.length;i++){
            pIds[i]=Integer.parseInt(ps[i]);
        }
        boolean bool=permissionService.updateRolePerm(roleId,pIds);
        System.out.println(bool);
        return bool?1:0;
    }
}
