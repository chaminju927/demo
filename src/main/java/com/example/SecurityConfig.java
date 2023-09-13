package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@EnableWebSecurity 
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())   //토큰 검사 비활성화 로직
                .authorizeHttpRequests(requests -> requests
                         .antMatchers("/login","/index","/worker/*") // antMatchers 설정한 리소스의 접근을 인증절차 없이 허용
                        .permitAll()
                        .anyRequest()
                        .authenticated())  //인증된 사용자만 접근할수 있도록 하는 메서드

                .formLogin(login -> login
                                .loginPage("/login")  
                                .loginProcessingUrl("/doLogin")  // form 액션태그
                                .usernameParameter("id")  // form id 커스터마이징
                                .passwordParameter("pw")
                                .defaultSuccessUrl("/index.html", true) //true는 로그인 성공후 이동할 페이지를 항상 고정하기 위함
                                .failureUrl("/login?error=true")

                 );
		}

}
		
	


	
    

