package com.qf.hellojava.service.impl;

import com.qf.hellojava.mapper.IAccountMapper;
import com.qf.hellojava.pojo.Account;
import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountMapper iAccountMapper;
    @Override
    public List<Account> loadAccountByUid(int uid) {
        return iAccountMapper.loadAccountByUid(uid);
    }

    @Override
    public List<Account> loadUloadByUid(int uid) {
        return iAccountMapper.loadUloadByUid(uid);
    }

    @Override
    public int addAccountByUid(Account account) {
        return iAccountMapper.addAccountByUid(account);
    }

    @Override
    public int updateMoneyByUid(int userId, double money) {
        return iAccountMapper.updateMoneyByUid(userId,money);
    }

    @Override
    public int updateUserByUid(User user) {
        return iAccountMapper.updateUserByUid(user);
    }
}
