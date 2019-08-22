package com.qf.hellojava.mapper;


import com.qf.hellojava.pojo.Permission;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface IPermissionMapper {
    public List<Permission> loadAll();
    public List<Permission> loadByRoleId(int roleId);
    public int delRolePerm(int roleId);
    public int addRolePerm(@Param("roleId") int roleId, @Param("array") int[] pIds);
    public List<Permission> findPermByUserName(String userName);
}
