package com.qf.hellojava.service.impl;

import com.qf.hellojava.mapper.IFanancMapper;
import com.qf.hellojava.pojo.Fananc;
import com.qf.hellojava.service.IFanacService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FanacService implements IFanacService {
    @Autowired
    IFanancMapper fanancMapper;

    @Override
    public List<Fananc> getFanac(int classss) {
        return fanancMapper.getFananc(classss);
    }
}
