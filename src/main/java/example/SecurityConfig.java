package example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig{
	@Bean
	protected void configure(HttpSecurity http) throws Exception {
        http
//            .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
//                .requestMatchers(new AntPathRequestMatcher("/static/index.html")).permitAll())
//            .csrf((csrf) -> csrf
//                .ignoringRequestMatchers(new AntPathRequestMatcher("")))
//            .headers((headers) -> headers
//                .addHeaderWriter(new XFrameOptionsHeaderWriter(
//                    XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN)))
            .formLogin((formLogin) -> formLogin
                .loginPage("/login")
                .defaultSuccessUrl("/index")
            	.failureUrl("/login")
            	.usernameParameter("email")
            	.passwordParameter("no")
            );
        
        
    }
//	@Autowired
//    protected void configure(AuthenticatoinMangerBuilder auth) throws Exception{
//    	
//    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

