package example.security;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
	protected void configure(HttpSecurity http) throws Exception {
		http
	    .formLogin()
	    .loginPage("/login.html")
	    .defaultSuccessUrl("/")
	    .failureUrl("/login")
	    .usernameParameter("username")
	    .passwordParameter("password")
	    //.loginProcessingUrl("/login_proc")
	    .successHandler(
	            new AuthenticationSuccessHandler() {
	                @Override
	                public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
	                    System.out.println("authentication : " + authentication.getName());
	                    HttpSession session = request.getSession();
	            		session.setAttribute("Name :", authentication.getName());
	                    response.sendRedirect("/"); // 인증이 성공한 후에는 root로 이동
	                }
	            }
	    )
	    .failureHandler(
                new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
                        System.out.println("exception : " + exception.getMessage());
                        response.sendRedirect("/login");
                    }
                }
        )
	    .permitAll();
	}
	
	
	
//	// 로그아웃
//	@Bean
//	SecurityWebFilterChain http(ServerHttpSecurity http) throws Exception {
//	    DelegatingServerLogoutHandler logoutHandler = new DelegatingServerLogoutHandler(
//	            new WebSessionServerLogoutHandler(), new SecurityContextServerLogoutHandler()
//	    );
//	    http
//	        .authorizeExchange((exchange) -> exchange.anyExchange().authenticated())
//	        .logout((logout) -> logout.logoutHandler(logoutHandler));
//	    return http.build();
//	}
	
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


	}
    

