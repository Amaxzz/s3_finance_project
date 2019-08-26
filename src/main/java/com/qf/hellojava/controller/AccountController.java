package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.Account;
import com.qf.hellojava.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
public class AccountController {
    @Autowired
    private IAccountService accountService;
    @RequestMapping("/loadAccountByUid")
    public String  loadAccountByUid(int userId, Model model){
        List<Account> accountList=accountService.loadAccountByUid(userId);
        model.addAttribute("accounts",accountList);
        return accountList!=null?"account":"error";
    }
    @RequestMapping("/addAccountByUid")
    public void addAccountByUid(int userId,int money,boolean saveorcut){
        String detailed;
        if (saveorcut){
             detailed="账户支出"+money+"元";
        }else {
             detailed = "账户收入" + money + "元";
        }
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//可以方便地修改日期格式
        String time = dateFormat.format( now );
        Account account=new Account();
        account.setAccId(userId);
        account.setAccDetailed(detailed);
        account.setAccTime(time);
    }


}
