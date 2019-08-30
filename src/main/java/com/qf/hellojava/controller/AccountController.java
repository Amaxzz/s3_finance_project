package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.Account;
import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IAccountService;
import com.qf.hellojava.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class AccountController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private HttpSession session;
    @RequestMapping("/loadAccountByUid")
    public String  loadAccountByUid(int userId, Model model){
        List<Account> accountList=accountService.loadAccountByUid(userId);
        model.addAttribute("accounts",accountList);
        return accountList!=null?"account":"error";
    }
    @RequestMapping("/loadUloadByUid")
    public String loadUloadByUid(int userId, Model model){
        List<Account> accountList=accountService.loadUloadByUid(userId);
        model.addAttribute("accounts",accountList);
        return accountList!=null?"account":"error";
    }
    @ResponseBody
    @RequestMapping("/addAccountByUid")
    public double addAccountByUid(int userId,int money,boolean saveOrCut,double moneys){//与前端不符合
        String detailed;
        if (saveOrCut){
            if (money>moneys){
                return 0.1;
            }
        }
       /* User user=(User)session.getAttribute("user");
        double moneys=user.getUserMoney();*/
        Account account=new Account();
           if (saveOrCut) {
               detailed = "账户支出" + money + "元";
               moneys = moneys - money;
               accountService.updateMoneyByUid(userId, moneys);
           } else {
               detailed = "账户收入" + money + "元";
               moneys = moneys + money;
               accountService.updateMoneyByUid(userId, moneys);
           }
           account.setClassss(1);
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//可以方便地修改日期格式
        String time = dateFormat.format( now );
        account.setAccId(userId);
        account.setAccDetailed(detailed);
        account.setAccTime(time);
        accountService.addAccountByUid(account);
        return moneys;
    }

@ResponseBody
@RequestMapping("/updateLoadMoeny")
    public Map<Integer,Object> updateLoad(int userId,int money,double moneys,boolean saveOrCut,double daikuan,double load){
        Map<Integer,Object> map=new HashMap<>();
        String detailed="";
        Account account=new Account();
        if (saveOrCut) {
            if (money > load) {
                map.put(1, "fault");
                return map;
            }
        }else {
            if (money > moneys) {
                map.put(1, "fault");
                return map;
            }
        }
        if (!saveOrCut) {
            detailed = "还款" + money + "元";
            load = load + money;
            daikuan =daikuan-money;
            moneys=moneys-money;
        } else {
            detailed = "贷款" + money + "元";
            load = load - money;
            daikuan =daikuan+money;
            moneys=moneys+money;
        }
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//可以方便地修改日期格式
        String time = dateFormat.format( now );
        User user=(User) session.getAttribute("user");
        user.setUserLoad(load);
        user.setDaikuan(daikuan);
        user.setUserMoney(moneys);
        accountService.updateUserByUid(user);
        account.setClassss(2);
        account.setAccId(userId);
        account.setAccDetailed(detailed);
        account.setAccTime(time);
        accountService.addAccountByUid(account);
        map.put(1,daikuan);
        map.put(2,load);
        map.put(3,moneys);
    System.out.println("222222222");
        return map;
    }
}
