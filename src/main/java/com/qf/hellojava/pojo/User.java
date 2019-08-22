package com.qf.hellojava.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    private int userId;
    private  String userName;
    private  String userPwd;
    private Date createTime;
    private String nikeName;
    private String cardNum;
    private String userTel;
    private String userEmail;
    private int userStatus;
}
