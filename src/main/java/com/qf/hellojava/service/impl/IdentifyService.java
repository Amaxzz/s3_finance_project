package com.qf.hellojava.service.impl;

import com.github.pagehelper.PageHelper;
import com.qf.hellojava.mapper.IdentifyMapper;
import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IIdentifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IdentifyService implements IIdentifyService {
    @Autowired
    private IdentifyMapper identifyMapper;


    @Override
    public List<User> loadAllIdentify() {
        return identifyMapper.loadAllIdentify();
    }

    @Override
    public int identifyYes(int uid) {
        return identifyMapper.identifyYes(uid);
    }

    @Override
    public int identifyNo(int uid) {
        return identifyMapper.identifyNo(uid);
    }

    @Override
    public List<User> loadUserByLike(String like,int page,int rows) {
        PageHelper.startPage(page,rows);
        List<User> userList=identifyMapper.loadUserByLike(like);
        return userList;
    }
    public int loadMaxPage(int rows,String like){
        int a=identifyMapper.loadCountId(like);
        int maxPage=a%rows==0?a/rows:a/rows+1;
        return maxPage;
    }


}
