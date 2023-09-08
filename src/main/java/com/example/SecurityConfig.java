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
                        .antMatchers("/login")
                        .permitAll()
                        .anyRequest()
                        .authenticated())

                .formLogin(login -> login
                                .loginPage("/login")   // ·Î±×ÀÎ½Ã Ä¿½ºÅÒ ÆäÀÌÁö
                                .loginProcessingUrl("/doLogin")  // form action ÅÂ±×
                                .usernameParameter("id")  //ÆÄ¶ó¹ÌÅÍ key°ª Ä¿½ºÅÍ¸¶ÀÌÂ¡
                                .passwordParameter("pw")
                        //.defaultSuccessUrl("/index.html", true)
                        //.failureUrl("/login.html?error=true")
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
	//form login 커스텀 화면 깨짐 방지
	 @Override
	    public void configure(WebSecurity web) throws Exception {
	        web.ignoring().antMatchers("/static/js/**","/static/css/**","/static/img/**","/static/frontend/**");
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

	

	
//	//request 처리
//	static final String USER = "USER";
//	@Bean
//	SecurityWebFilterChain filterChain(ServerHttpSecurity http) {
//		http
//			.authorizeExchange((authorize) -> authorize
//				.pathMatchers(HttpMethod.GET,"/index").hasRole(USER)
//				.access((authentication, context) ->
//					hasRole("USER").check(authentication, context)
//					.filter(decision -> !decision.isGranted())
//					.switchIfEmpty(hasRole("DBA").check(authentication, context))
//			)
//			.anyExchange().denyAll()                                         
//		);
//		return http.build();
//
	


	
    

