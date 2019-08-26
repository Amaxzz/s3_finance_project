package com.qf.hellojava.controller;

import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IIdentifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
@Controller
public class IdentifyController {

    @Autowired
    private IIdentifyService identifyService;
    @RequestMapping("/loadAllIdentify")
    public String loadAllIdentify(Model model){
        List<User> userList=new ArrayList<>();
        userList=identifyService.loadAllIdentify();
        model.addAttribute("userList",userList);
        return "auth_cert";
    }
    @RequestMapping("/identifyYes")
    public String identifyYes(int userId){
        identifyService.identifyYes(userId);
        return "auth_cert";
    }
    @RequestMapping("/identifyNo")
    public String identifyNo(int userId){
        identifyService.identifyNo(userId);
        return "auth_cert";
    }



    @RequestMapping("/loadUserByLike")
    public String loadUserByLike(String likehtml, Model model, String main, HttpSession session,
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
}
