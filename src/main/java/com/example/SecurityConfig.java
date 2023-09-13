package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
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
                        .antMatchers("/login","/index","/worker")  // antMatchers 설정한 리소스의 접근을 인증절차 없이 허용
                        .permitAll()
                        .anyRequest()
                        .authenticated())  //인증된 사용자만 접근할수 있도록 하는 메서드

                .formLogin(login -> login
                                .loginPage("/login")  
                                .loginProcessingUrl("/doLogin")  // form 액션태그
                                .usernameParameter("id")  // form id 커스터마이징
                                .passwordParameter("pw")
                                .defaultSuccessUrl("/index.html", true)
                                .failureUrl("/login?error=true")
//			    .successHandler(
//			            new AuthenticationSuccessHandler() {
//			            
//			                @Override
//			                public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {			                    
//			                	System.out.println("authentication : " + authentication.getName());
//			                    HttpSession session = request.getSession();
//			            		session.setAttribute("Name: ", authentication.getName());
//			                    response.sendRedirect("/index"); // 인증이 성공한 후에는 index페이지로 이동
//			            	}
//			            }
//	            )
                        );
		}

}
		
//	    )
//	    .failureHandler(
//                new AuthenticationFailureHandler() {
//                    @Override
//                    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
//                        System.out.println("exception : " + exception.getMessage());
//                        response.sendRedirect("/login");
//                    }
//                }
//        )

	


	
    

