package com.qf.hellojava.config;

import com.qf.hellojava.shiro.MyRealm;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;


@Controller
public class ShiroConfig {
    //创建shiro安全过滤器
    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(
            @Qualifier("defaultWebSecurityManager") DefaultWebSecurityManager defaultWebSecurityManager){
        ShiroFilterFactoryBean filterFactoryBean = new ShiroFilterFactoryBean();
        filterFactoryBean.setSecurityManager(defaultWebSecurityManager);

        return filterFactoryBean;
    }

    @Bean("defaultWebSecurityManager")
    public DefaultWebSecurityManager defaultWebSecurityManager(@Qualifier("myRealm")MyRealm myRealm){
        DefaultWebSecurityManager webSecurityManager = new DefaultWebSecurityManager();
        //组装realm到securityManager中
        webSecurityManager.setRealm(myRealm);
        return webSecurityManager;
    }

    @Bean("myRealm")
    public MyRealm myRealm(
            @Qualifier("hashedCredentialsMatcher") HashedCredentialsMatcher hashedCredentialsMatcher){
        MyRealm myRealm = new MyRealm();
        //装配凭证匹配器到realm中
        myRealm.setCredentialsMatcher(hashedCredentialsMatcher);
        myRealm.setAuthorizationCachingEnabled(false); //设置缓存
        return myRealm;
    }
    //通过AOP代理拦截权限设定
    @Bean
    public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator(){
        DefaultAdvisorAutoProxyCreator advisorAutoProxyCreator = new DefaultAdvisorAutoProxyCreator();
        //设置代理的模式为cglib proxy/jdk proxy
        advisorAutoProxyCreator.setProxyTargetClass(true);
        return advisorAutoProxyCreator;
    }

    //设置注解拦截码中的权限设定
    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(
            @Qualifier("defaultWebSecurityManager") DefaultWebSecurityManager webSecurityManager
    ){
        AuthorizationAttributeSourceAdvisor sourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        sourceAdvisor.setSecurityManager(webSecurityManager);
        return sourceAdvisor;
    }
    //设置-凭证匹配器
    @Bean(name="hashedCredentialsMatcher")
    public HashedCredentialsMatcher hashedCredentialsMatcher(){
        HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();
        //设置加密算法
        credentialsMatcher.setHashAlgorithmName("MD5");
        //设置shiro缓存的凭证字符串编码
        credentialsMatcher.setStoredCredentialsHexEncoded(true);
        //设置hash频次
        credentialsMatcher.setHashIterations(1024);
        return credentialsMatcher;
    }
}
