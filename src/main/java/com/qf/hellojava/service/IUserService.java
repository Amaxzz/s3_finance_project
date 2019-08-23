package com.qf.hellojava.service;



import com.qf.hellojava.pojo.Role;
import com.qf.hellojava.pojo.User;

import java.util.List;

public interface IUserService {
    public User findUserByUserName(String userName);
    public boolean loadUser(User user);
    public List<User> loadAllUser(int page, int rows);
    public int calcMaxPage(int rows);
    public List<User> loadAllUsers(int page, int rows, String cont);
    public int calcMaxPages(int rows, String cont);
    public User loadUserById(int UserId);
    public boolean addUser(User user);
    public boolean deleteUserById(int userId);
    public boolean deleteUser(String[] ids);
    public boolean updateUser(User user);
    public boolean loadReg(User user);

    public boolean addRoleId(int userId, List<Integer> list);
    public boolean deleteRoleId(int userId, List<Integer> list);
}
