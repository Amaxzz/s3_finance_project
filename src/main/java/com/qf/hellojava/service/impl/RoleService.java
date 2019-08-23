package com.qf.hellojava.service.impl;


import com.qf.hellojava.mapper.IRoleMapper;
import com.qf.hellojava.pojo.Role;
import com.qf.hellojava.service.IRoleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("roleService")
public class RoleService implements IRoleService {
    @Resource
    private IRoleMapper roleMapper;
    @Override
    public List<Role> loadAllRole(int page, int rows) {
        return roleMapper.loadAllRole();
    }

    @Override
    public int calcMaxPage(int rows) {
        int count=roleMapper.getTotalCount();
        return count%rows==0?count/rows:count/rows+1;
    }

    @Override
    public Role loadRoleById(int roleId) {
        return roleMapper.loadRoleById(roleId);
    }

    @Override
    public boolean addRole(Role role) {
        int count=roleMapper.addRole(role);
        return count>0?true:false;
    }

    @Override
    public boolean deleteRoleById(int roleId) {
        int num=roleMapper.delRolePerm(roleId);
        int count=roleMapper.deleteRoleById(roleId);
        return num>0||count>0?true:false;
    }

    @Override
    public boolean deleteRole(String[] ids) {
        int num=roleMapper.delRolePerms(ids);
        int count=roleMapper.deleteRole(ids);
        return num>0||count>0?true:false;
    }

    @Override
    public boolean updateRole(Role role) {
        int count=roleMapper.updateRole(role);
        return count>0?true:false;
    }
    @Override
    public List<Role> getRole1(int userId) {
        return roleMapper.getRole1(userId);
    }

    @Override
    public List<Role> getRole2(int userId) {
        return roleMapper.getRole2(userId);
    }

}
