package com.qf.hellojava.service.impl;

import com.github.pagehelper.PageHelper;
import com.qf.hellojava.mapper.IUserMapper;
import com.qf.hellojava.pojo.Role;
import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;


@Service("userService")
public class UserService implements IUserService {
    @Resource
    IUserMapper userMapper;

    @Override
    public User findUserByUserName(String userName) {
        return userMapper.findUserByUserName(userName);
    }

    @Override
    public boolean loadUser(User user) {
    User u=userMapper.loadUser(user);
        return u!=null?true:false;
    }

    @Override
    public List<User> loadAllUser(int page, int rows) {
        PageHelper.startPage(page,rows);
        return userMapper.loadAllUser();
    }
    @Override
    public int calcMaxPage(int rows) {
        int count=userMapper.getTotalCount();
        return count%rows==0?count/rows:count/rows+1;
    }

    @Override
    public List<User> loadAllUsers(int page, int rows, String cont) {
        PageHelper.startPage(page,rows);
        return userMapper.loadAllUsers(cont);
    }
    @Override
    public int calcMaxPages(int rows,String cont) {
        int count=userMapper.getTotalCounts(cont);
        return count%rows==0?count/rows:count/rows+1;
    }

    @Override
    public User loadUserById(int userId) {
        return userMapper.loadUserById(userId);
    }

    @Override
    public boolean addUser(User user) {
        int count=userMapper.addUser(user);
        return count>0?true:false;
    }

    @Override
    public boolean deleteUserById(int userId) {
        int num=userMapper.delUserRole(userId);
        int count=userMapper.deleteUserById(userId);
        return num>0||count>0?true:false;
    }

    @Override
    public boolean deleteUser(String[] ids) {
        int num=userMapper.delUserRoles(ids);
        int count=userMapper.deleteUser(ids);
        return num>0||count>0?true:false;
    }

    @Override
    public boolean updateUser(User user) {
        int count=userMapper.updateUser(user);
        return count>0?true:false;
    }

    @Override
    public boolean loadReg(User user) {
        int count=userMapper.loadReg(user);
        return count>0?true:false;
    }



    @Override
    public boolean addRoleId(int userId, List<Integer> list) {
       int count=userMapper.addRoleId(userId,list);
        return count>0?true:false;
    }

    @Override
    public boolean deleteRoleId(int userId, List<Integer> list) {
        int count=userMapper.deleteRoleId(userId,list);
        return count>0?true:false;
    }


}
