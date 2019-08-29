package com.qf.hellojava.pojo;

import lombok.Data;

import java.io.Serializable;
@Data
public class JsonClass implements Serializable {
    private int value;
    private String name;
}
