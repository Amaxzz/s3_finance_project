package com.qf.hellojava.service.impl;

import com.qf.hellojava.mapper.IFanancMapper;
import com.qf.hellojava.pojo.Fananc;
import com.qf.hellojava.pojo.JsonClass;
import com.qf.hellojava.service.IFanacService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FanacService implements IFanacService {
    @Autowired
    IFanancMapper fanancMapper;

    @Override
    public List<Fananc> getFanac(int classss) {
        return fanancMapper.getFananc(classss);
    }

    @Override
    public List<JsonClass> findAllFinanc() {
        List<Integer> integerList=fanancMapper.findAllFinanc();
        List<JsonClass> jsonClassList=new ArrayList<>();
        List<String> stringList=loadStringList();
        for (int i = 0; i <integerList.size() ; i++) {
            JsonClass jsonClass=new JsonClass();
            jsonClass.setName(stringList.get(i));
            jsonClass.setValue(integerList.get(i));
            jsonClassList.add(i,jsonClass);
        }
        return jsonClassList;

    }

    @Override
    public Map<Integer,List>  findFanancByUid() {
        Map<Integer,List>  map=new HashMap<>();
        List<Integer> integerList=fanancMapper.findFanancByUid();
        List<String> stringList=loadStringList();
        map.put(1,stringList);
        map.put(2,integerList);
       return map;


    }

    public List<String> loadStringList(){
        List<String> stringList=new ArrayList<>();
        stringList.add(0,"速盈");
        stringList.add(1,"保险");
        stringList.add(2,"基金");
        stringList.add(3,"贵金属");
        stringList.add(4,"结售汇");

        return stringList;

    }
}
