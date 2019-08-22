package com.qf.hellojava.service;

import com.qf.hellojava.pojo.Permission;

import java.util.List;

public interface IPermissionService {
    public List<Permission> loadAll();
    public List<Permission> loadByRoleId(int roleId);
    public boolean updateRolePerm(int roleId, int[] pIds);
    public List<Permission> findPermByUserName(String userName);
}
