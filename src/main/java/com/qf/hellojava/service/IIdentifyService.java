package com.qf.hellojava.service;

import com.qf.hellojava.pojo.User;

import java.util.List;

public interface IIdentifyService {
    public List<User> loadAllIdentify();
    public int identifyYes(int uid);
    public int identifyNo(int uid);
    public int loadMaxPage(int rows,String like);
    public List<User> loadUserByLike(String like,int page,int rows);
    public User loadUserByName(String userName);
    public int addRealUser(User realUser);
    public int updateLoad(int UserId,Double load);

}
