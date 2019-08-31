package com.qf.hellojava.shiro;

import com.qf.hellojava.pojo.Permission;
import com.qf.hellojava.pojo.User;
import com.qf.hellojava.service.IPermissionService;
import com.qf.hellojava.service.IUserService;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MyRealm extends AuthorizingRealm {
    @Autowired
    private IUserService userService;
    @Autowired
    private IPermissionService permissionService;

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        //从身份信息集合中获取当前主体的身份信息
        Object primaryPrincipal = principalCollection.getPrimaryPrincipal();
        if(!StringUtils.isEmpty(primaryPrincipal)){
            String loginName = (String) primaryPrincipal;
            List<Permission> permList = permissionService.findPermByUserName(loginName);
            //权限去重
            Set<String> perms =new HashSet<>();
            System.out.println("1111111111111"+permList);
            for(Permission perm:permList){
                String menu_url=perm.getPermName();
                perms.add(menu_url);
                System.out.println(menu_url);
            }
            SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
            //授权
            authorizationInfo.setStringPermissions(perms);
            return authorizationInfo;
        }
        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        //获取身份信息
        Object principal = token.getPrincipal();
        if(!StringUtils.isEmpty(principal)){
            String loginName=(String) principal;
            //调用业务逻辑方法查询用户信息
            User user=userService.findUserByUserName(loginName);
            ByteSource salt = ByteSource.Util.bytes(loginName);
            SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(loginName, user.getUserPwd(),salt,getName());
            //SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(loginName, user.getUserPwd(), getName());
            return authenticationInfo;
        }
        return null;
    }
}
