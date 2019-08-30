package com.qf.hellojava.mapper;

import com.qf.hellojava.pojo.Account;
import com.qf.hellojava.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface IAccountMapper {
    public List<Account> loadAccountByUid(int uid);
    public List<Account> loadUloadByUid(int uid);
    public int addAccountByUid(Account account);
    public int updateMoneyByUid(@Param("userId") int userId,@Param("money") double money);
    public int updateUserByUid(User user);
}
