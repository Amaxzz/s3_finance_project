package com.qf.hellojava.mapper;


import com.qf.hellojava.pojo.Permission;
import com.qf.hellojava.pojo.Role;
import com.qf.hellojava.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface IUserMapper {
    public User findUserByUserName(String userName);
    public List<Permission> findPermByUserName(String userName);
    public User loadUser(User user);
    public List<User> loadAllUser();
    public List<User> loadAllUsers(String cont);
    public int getTotalCount();
    public int getTotalCounts(String cont);
    public User loadUserById(int user);
    public int addUser(User user);
    public int deleteUserById(int userId);
    public int deleteUser(String[] ids);
    public int delUserRole(int userId);
    public int delUserRoles(String[] ids);
    public int updateUser(User user);
    public int loadReg(User user);
    public List<User> searchUser(String context);

    public int addRoleId(@Param("userId") int userId, @Param("list") List<Integer> list);
    public int deleteRoleId(@Param("userId") int userId, @Param("list") List<Integer> list);
}
