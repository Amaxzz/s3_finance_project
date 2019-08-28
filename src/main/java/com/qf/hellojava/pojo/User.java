package com.qf.hellojava.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    private int userId;
    private  String userName;
    private  String userPwd;
    private String createTime;
    private String nickName;
    private String cardNum;
    private String userTel;
    private String userEmail;
    private int userStatus=0;
    private String userImg;
    private double userMoney;
    private double userLoad;
}
