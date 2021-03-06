package com.qf.hellojava.mapper;

import com.qf.hellojava.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface IdentifyMapper {
    public List<User> loadAllIdentify();
    public int identifyYes(int uid);
    public int identifyNo(int uid);
    public int loadCountId(String like);
    public List<User> loadUserByLike(String like);
    public User loadUserByName(String userName);
    public int addRealUser(User realUser);
    public int updateLoad(@Param("userId") int userId, @Param("load") Double load);

}
