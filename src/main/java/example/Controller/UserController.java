package example.Controller;

import org.springframework.web.bind.annotation.GetMapping;

public class UserController {
	
	 @GetMapping("/login")
	    public String login() {
	        return "login_form";
	    }
}
