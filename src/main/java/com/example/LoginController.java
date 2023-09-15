package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RequestMapping
@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
	
//	  @GetMapping("/api/hello")
//	    public String test() {
//	        return "Hello, world!";
//	    }
	  @GetMapping("/loginPage")  // .loginPage("LOGIN_PAGE")에서 설정한 LOGIN_PAGE와 일치해야 함
	  public String getLoginForm() {
		  return "loginPage";
	  }
	
	@GetMapping("/")
    public String getIndex() {
        return "index";
    }
	
//	@GetMapping("/main")
//    public String getMain() {
//        return "main";
//    }

}