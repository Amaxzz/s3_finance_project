package com.qf.hellojava.mapper;



import com.qf.hellojava.pojo.Role;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IRoleMapper {
    public List<Role> loadAllRole();
    public List<Role> loadAllRoles(String context);
    public Role loadRoleById(int Role);
    public int addRole(Role role);
    public int deleteRoleById(int roleId);
    public int deleteRole(String[] ids);
    public int delRolePerm(int roleId);
    public int delRolePerms(String[] ids);
    public int updateRole(Role role);
    public int getTotalCount();

}
