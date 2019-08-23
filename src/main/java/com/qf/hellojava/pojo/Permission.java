package com.qf.hellojava.pojo;

import lombok.Data;

@Data
public class Permission {
    private int permId;
    private String permName;
    private int pId;
    private String icon;
    private String checked="false";
}
