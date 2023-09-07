package example;

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
                .authorizeHttpRequests(requests -> requests
                        .antMatchers("/chk").permitAll()    // LoadBalancer Chk
                        .anyRequest().authenticated())
                .formLogin(login -> login
                        .loginPage("/login")
                        .defaultSuccessUrl("/static/success.html", true)
                        .failureUrl("/login")
                        .permitAll());
		}

//	  @Bean
//	    public BCryptPasswordEncoder bCryptPasswordEncoder() {
//	        return new BCryptPasswordEncoder();
//	    }
}
		
//	    .successHandler(
//	            new AuthenticationSuccessHandler() {
//	                @Override
//	                public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//	                    
//	                	System.out.println("authentication : " + authentication.getName());
//	                    HttpSession session = request.getSession();
//	            		session.setAttribute("Name: ", authentication.getName());
//	                    response.sendRedirect("/index"); // 인증이 성공한 후에는 root로 이동
//	                }
//	            }
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
//	}


	
    

