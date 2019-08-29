package com.qf.hellojava.service;

import com.qf.hellojava.pojo.Fananc;
import com.qf.hellojava.pojo.JsonClass;

import java.util.List;
import java.util.Map;

public interface IFanacService {
    public List<Fananc> getFanac(int classss);

    public List<JsonClass> findAllFinanc();
    public Map<Integer,List>  findFanancByUid();
}
