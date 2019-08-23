package com.qf.hellojava.service;

import com.qf.hellojava.pojo.Account;

import java.util.List;

public interface IAccountService {
    public List<Account> loadAccountByUid(int uid);
    public int addAccountByUid(Account account);

}
