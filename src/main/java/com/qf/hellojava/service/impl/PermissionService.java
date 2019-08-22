package com.qf.hellojava.service.impl;


import com.qf.hellojava.mapper.IPermissionMapper;
import com.qf.hellojava.pojo.Permission;
import com.qf.hellojava.service.IPermissionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("permissionService")
public class PermissionService implements IPermissionService {
    @Resource
    private IPermissionMapper permissionMapper;
    @Override
    public List<Permission> loadAll() {
        return permissionMapper.loadAll();
    }

    @Override
    public List<Permission> loadByRoleId(int roleId) {
        return permissionMapper.loadByRoleId(roleId);
    }

    @Override
    public boolean updateRolePerm(int roleId, int[] pIds) {
        int del=permissionMapper.delRolePerm(roleId);
        int add=permissionMapper.addRolePerm(roleId,pIds);
        System.out.println(del);
        System.out.println(add);
        return add>0?true:false;

    }

    @Override
    public List<Permission> findPermByUserName(String userName) {
        return permissionMapper.findPermByUserName(userName);
    }
}
