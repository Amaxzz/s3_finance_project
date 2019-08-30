package com.qf.hellojava.service;

import com.qf.hellojava.pojo.Account;
import com.qf.hellojava.pojo.User;

import java.util.List;

public interface IAccountService {
    public List<Account> loadAccountByUid(int uid);
    public List<Account> loadUloadByUid(int uid);
    public int addAccountByUid(Account account);
    public int updateMoneyByUid(int userId,double money);
    public int updateUserByUid(User user);

}
