package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import lombok.RequiredArgsConstructor;



@RequiredArgsConstructor
@EnableWebSecurity 
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic(basic -> basic.disable())
                .authorizeHttpRequests(
                        request -> request.antMatchers("/", "/main","/login").permitAll().anyRequest().authenticated()
                );
		http.formLogin(login -> login
			      .loginPage("/login") 
			      .defaultSuccessUrl("/index", true) 
			      .failureUrl("/login"));
        http.csrf(csrf -> csrf.disable());
        http.headers(headers -> headers.frameOptions().disable());
       
	}

 
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//
//        config.setAllowCredentials(true);
//        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
//        config.setAllowedMethods(Arrays.asList("HEAD","POST","GET","DELETE","PUT"));
//        config.setAllowedHeaders(Arrays.asList("*"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//        return source;
//    }
 }


		
	


	
    

