package com.qf.hellojava.mapper;

import com.qf.hellojava.pojo.Fananc;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IFanancMapper {
    public List<Fananc> getFananc(int classss);

    public List<Integer> findAllFinanc();
    public List<Integer> findFanancByUid();

}
