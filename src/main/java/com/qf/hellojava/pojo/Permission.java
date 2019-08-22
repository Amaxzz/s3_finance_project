package com.qf.hellojava.pojo;

import lombok.Data;

@Data
public class Permission {
    private int permId;
    private String permName;
    private String checked="false";
}
