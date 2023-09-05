//package example.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.ReactiveAuthenticationManager;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.authentication.preauth.x509.SubjectDnX509PrincipalExtractor;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.security.web.server.authentication.logout.DelegatingServerLogoutHandler;
//import org.springframework.security.web.server.authentication.logout.SecurityContextServerLogoutHandler;
//import org.springframework.security.web.server.authentication.logout.WebSessionServerLogoutHandler;
//
//
//@Configuration
//public class SecurityConfig {
//	
//	// 정보 조회시 인증
//	@Bean
//	public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
//		SubjectDnX509PrincipalExtractor principalExtractor =
//		        new SubjectDnX509PrincipalExtractor();
//
//		principalExtractor.setSubjectDnRegex("OU=(.*?)(?:,|$)"); 
//
//		ReactiveAuthenticationManager authenticationManager = authentication -> {
//			authentication.setAuthenticated("차민주".equals(authentication.getName()));
//			return Mono.just(authentication);
//		};
//		http
//			.x509(x509 -> x509
//				    .principalExtractor(principalExtractor)
//				    .authenticationManager(authenticationManager)
//			)
//			.authorizeExchange(exchanges -> exchanges
//			    .anyExchange().authenticated()
//			);
//		return http.build();
//	}
//	
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
//	
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
//
////	//servlet app
////	@Bean
////	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////		http
////			.formLogin(form -> form
////					.loginPage("/login")
////					.permitAll()
////					);
////		
////		return http.build();
////	} 
//
//	}
//    
//
