package com.qf.hellojava.service;


import com.qf.hellojava.pojo.Role;

import java.util.List;

public interface IRoleService {
    public List<Role> loadAllRole(int page, int rows);
    public int calcMaxPage(int rows);
    public Role loadRoleById(int RoleId);
    public boolean addRole(Role role);
    public boolean deleteRoleById(int roleId);
    public boolean deleteRole(String[] ids);
    public boolean updateRole(Role role);
    public List<Role> getRole1(int userId);
    public List<Role> getRole2(int userId);
}
