package com.qf.hellojava.exception;

import org.apache.shiro.authz.UnauthenticatedException;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(value = UnauthorizedException.class)
    public String handlerException(HttpServletRequest request, Exception ex){

        return "unOauth";
    }

    @ExceptionHandler(value = UnauthenticatedException.class)
    public String handlerException1(HttpServletRequest request, Exception ex){
        return "login";
    }
}
