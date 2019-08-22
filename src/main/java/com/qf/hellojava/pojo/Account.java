package com.qf.hellojava.pojo;

import lombok.Data;

@Data
public class Account {
    private int accId;
    private double accMoney;
    private double accLoan;
    private  String accDetailed;
}
