package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IIdentifyService;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Controller
public class IdentifyController {

    @Autowired
    private IIdentifyService identifyService;
    @Autowired
    private HttpSession session;
    @RequestMapping("/loadAllIdentify")
    public String loadAllIdentify(Model model){
        List<User> userList=new ArrayList<>();
        userList=identifyService.loadAllIdentify();
        System.out.println(userList);
        model.addAttribute("userList",userList);
        return "auth_cert";
    }
    @RequestMapping("/identifyYes")
    public String identifyYes(int userId){
        identifyService.identifyYes(userId);
        return "redirect:loadAllIdentify";
    }
    @RequestMapping("/identifyNo")
    public String identifyNo(int userId){
        identifyService.identifyNo(userId);
        return "redirect:loadAllIdentify";
    }
    @RequestMapping("/loadUserByLike")
    public String loadUserByLike(String likehtml, Model model, String main,
                                 @RequestParam(required = false,defaultValue = "1")int page,
                                 @RequestParam(required = false,defaultValue = "5")int rows){
        String like="";
        if (main==null){
            if (likehtml!=null){
                like=likehtml;
            }else {
                like=(String)session.getAttribute("like");
            }
        }

        int maxPage=identifyService.loadMaxPage(rows,like);
        if (page<1){
            page=maxPage;
        }
        if (page>maxPage){
            page=1;
        }
        List<User> userList=identifyService.loadUserByLike(like,page,rows);
        session.setAttribute("like",like);
        session.setAttribute("page",page);
        model.addAttribute("userList",userList);
        model.addAttribute("page",page);
        model.addAttribute("maxPage",maxPage);
        return userList!=null?"auth_adv":"error";
    }
    @RequestMapping("/member")
    public String member(Model model){
        String uName=(String) session.getAttribute("uName");
        User user=identifyService.loadUserByName(uName);
        System.out.println(user+"88888888888");
        String state="未实名认证";
        String img="img/services-box1.jpg";

        if (user!=null) {
            if (user.getUserStatus() == 0) {
                state = "未实名认证";
            } else if (user.getUserStatus() == 1) {
                state = "已实名待审核";
            } else if (user.getUserStatus() == 2) {
                state = "实名认证成功";
            }else if (user.getUserStatus()==3){
                state ="实名认证失败";
            }
            if(user.getUserImg()!=null) {
                img = user.getUserImg();
            }
        }
        model.addAttribute("state",state);
        model.addAttribute("img",img);
        model.addAttribute("user",uName);
        return "member";
    }
    @RequestMapping("/apply")
    public String apply(){
        return "apply";
    }
    @RequestMapping("/loadApply1")
    public String loadApply1(User realUser,Model model){
        session.setAttribute("realUser",realUser);
        String img="img/pic.jpg";
        User user=(User) session.getAttribute("realUser");
        if (user.getUserImg()!=null){
            img=user.getUserImg();
        }
        model.addAttribute("img",img);
        return "apply1";
    }
    @RequestMapping("/uploadImg")
    public String uploadImg(MultipartFile img, HttpServletRequest request){
        String path=request.getServletContext().getRealPath("/upload");
        File upfile=new File(path);
        System.out.println("99999999999999999999999999999999999999");
        if (img!=null) {
            if (!upfile.exists()) {
                upfile.mkdirs();
            }
            try {
                InputStream inputStream = img.getInputStream();
                FileOutputStream fileOutputStream = new FileOutputStream(upfile + "/" + img.getOriginalFilename());
                byte[] bytes = new byte[1024];
                int len = 0;
                while ((len = inputStream.read(bytes)) != -1) {
                    fileOutputStream.write(bytes, 0, len);
                    fileOutputStream.flush();
                }
                fileOutputStream.close();
                inputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String imgname = "upload/" + img.getOriginalFilename();
            User realUser = (User) session.getAttribute("realUser");
            realUser.setUserImg(imgname);
            System.out.println(realUser + "---------img");
            session.setAttribute("realUser", realUser);
        }
        return "apply2";
    }

    @RequestMapping("/apply2")
    public String apply2(){
        System.out.println("apple2");
        return "apply2";
    }

    @ResponseBody
    @RequestMapping("/addRealUser")
    public int addRealUser(String email,String num){
        int a=0;
        User realUser=(User) session.getAttribute("realUser");
        String userName=(String)session.getAttribute("uName");
        realUser.setUserName(userName);
        realUser.setUserEmail(email);
        realUser.setUserStatus(1);
        String code=(String)session.getAttribute("code");
        System.out.println(realUser+"========finsh");
        a=identifyService.addRealUser(realUser);
        if(num==null){
            a=2;
            return a;
        }
        if (code.equals(num)&&a!=0){
            a=1;
        }else {
            a=2;
            return a;
        }
        return a;
    }
    @ResponseBody
    @RequestMapping("/emailHander")//发送邮件验证码
    public String emailHander(String email){
        System.out.println(email+"564555555555555555");
        Random random=new Random();
        String code="";
        for (int i = 0; i <6 ; i++) {
            int a=random.nextInt(10);
            code=code+a;
        }
        session.setAttribute("code",code);
        String emailContext="验证码："+code+"如果不是您本人操作请勿理睬";
        //邮件发送的类(Commons-email 核心的类)
        HtmlEmail htmlEmail=new HtmlEmail();
        //设置发送邮件的服务器(发件人邮箱的服务器地址)
        htmlEmail.setHostName("smtp.163.com");
        //设置发送邮件的用户和密码(发件人的用户名和密码)
        htmlEmail.setAuthentication("18391700970@163.com","413125687yn");
        htmlEmail.setCharset("UTF-8");
        //主题
        htmlEmail.setSubject("测试邮件");
        try {
            //设置发送邮件的地址和昵称
            htmlEmail.setFrom("18391700970@163.com", "e金融客服");
            //内容
            htmlEmail.setHtmlMsg(emailContext);
            //设置邮件收件人地址
            htmlEmail.addTo(email);
            //发送
            htmlEmail.send();
        }catch (EmailException e){
            e.printStackTrace();
            return "error";
        }
        return "ok";
    }
}
