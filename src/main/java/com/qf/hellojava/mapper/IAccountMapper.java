package com.qf.hellojava.mapper;

import com.qf.hellojava.pojo.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface IAccountMapper {
    public List<Account> loadAccountByUid(int uid);
    public int addAccountByUid(Account account);
}
