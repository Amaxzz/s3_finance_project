package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class UserController {
    @Autowired
    private IUserService userService;

    @RequestMapping(value="/loginHandler",method = RequestMethod.POST)
    public String loginByUserName(@RequestParam("userName") String userName,
                                  @RequestParam("userPwd") String userPwd,
                                  HttpSession session){
        /**
         * 1、查询用户是够存在
         * 2、用户存在查出用户信息，比对凭证
         * 3、对输入的凭证信息加密与查出的凭证比较
         * 4、凭证一致，根据用户名查询该用户的权限集合
         * 5、将用户信息进行脱密后和权限信息存储（session）
         * 6、返回登录成功信息
         * 使用shiro后，这些步骤统一交给shiro处理
         */
        try {
            Subject subject = SecurityUtils.getSubject();
            System.out.println(userName+"===="+userPwd);
            UsernamePasswordToken token = new UsernamePasswordToken(userName, userPwd);
            subject.login(token);
            session.setAttribute("uName",userName);
            int status=userService.loadStatusByLoginName(userName);

            if (subject.isAuthenticated()){
                System.out.println("login is successful");
                if (status>5) {
                    return "main";
                } else {
                    return "info";
                }
            }
        } catch (AuthenticationException e) {
            e.printStackTrace();
        }
        return "login";
    }

    @RequestMapping("loginhandler")
    public String login(User user, HttpSession session){
        boolean bool=userService.loadUser(user);
        String result=user.getUserName();
        session.setAttribute("uName",result);
        if(bool) {
            if (result.equals("admin")) {
                return "main";
            } else {
                return "info";
            }
        }else {
            return "error";
        }
    }
    @RequestMapping("loadUserById")
    public String loadUserById(int userId,Model model){
        User u=userService.loadUserById(userId);
        model.addAttribute("user",u);
        return u!=null?"edit":"error";
    }
    @RequiresPermissions(value = {"用户管理"})
    @RequestMapping("userall")
    public String loadAllUser(@RequestParam(required = false,defaultValue = "1")int page,
                              @RequestParam(required = false,defaultValue = "3")int rows,
                              @RequestParam(required = false,defaultValue = "")String cont,
                              Model model){
        System.out.println(cont);
        int maxPage=0;
        List<User> userList=new ArrayList<User>();
        if(cont.equals("")){
            maxPage=userService.calcMaxPage(rows);
            userList=userService.loadAllUser(page,rows);
            System.out.println(cont+"================");
        }else{
            maxPage=userService.calcMaxPages(rows,cont);
            userList=userService.loadAllUsers(page,rows,cont);
            System.out.println(cont+"------------------");
        }
        if(page<1){
            page=1;
        }
        if (page>=maxPage){
            page=maxPage;
        }
        model.addAttribute("userList",userList);
        model.addAttribute("currentPage",page);
        model.addAttribute("maxPage",maxPage);
        model.addAttribute("cont",cont);
        return userList!=null?"user":"error";
    }
    @RequestMapping("addUser")
    public String addUser(User user){
        boolean bool=userService.addUser(user);
        return bool?"redirect:userall":"error";
    }
    @RequestMapping("deleteUserById")
    public String deleteUserById(int userId){
        boolean bool=userService.deleteUserById(userId);
        return bool?"redirect:userall":"error";
    }
    @RequestMapping("updateUser")
    public String updateUser(User user){
        boolean bool=userService.updateUser(user);
        return bool?"redirect:userall":"error";
    }
    @RequestMapping("deleteUser")
    public String deleteUser(String[] ids){
        boolean bool=userService.deleteUser(ids);
        return bool?"redirect:userall":"error";
    }

    @RequestMapping("loadreg")
    public String loadReg(User user){
        Md5Hash md5Hash2 = new Md5Hash(user.getUserPwd(), user.getUserName(), 1024);
        String mima=md5Hash2.toHex();
        user.setUserPwd(mima);
        Date now = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//可以方便地修改日期格式
        String time = dateFormat.format( now );
        user.setCreateTime(time);
        boolean bool=userService.loadReg(user);
        return bool?"redirect:loginview":"error";
    }


    @RequestMapping("addRoleId")
    public String addRoleId(int userId,@RequestParam(required = false) List<Integer> list){
        boolean bool=userService.addRoleId(userId,list);
        return bool?"redirect:assignRoleHandler?userId="+userId:"error";
    }
    @RequestMapping("deleteRoleId")
    public  String deleteRoleId(int userId,@RequestParam(required = false) List<Integer> list){
        boolean bool=userService.deleteRoleId(userId,list);
        return bool?"redirect:assignRoleHandler?userId="+userId:"error";
    }
    @RequestMapping("/loadUserAllByUid")
    public String loadUserAllByUid(int userId,Model model){
        User user=userService.loadUserById(userId);
        model.addAttribute("user",user);
        return user!=null?"xiangXinXi":"error";

    }

}
