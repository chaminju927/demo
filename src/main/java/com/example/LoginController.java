package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@CrossOrigin("*")
@RequestMapping
@Controller
public class LoginController {
	
	  @GetMapping("/api/hello")
	    public String test() {
	        return "Hello, world!";
	    }
	
	@GetMapping("/")
    public String getIndex() {
        return "/index";
    }
	
	@GetMapping("/main")
    public String getMain() {
        return "main";
    }
	
//	@GetMapping("/login")
//    public String getLoginForm(Model model) {
//        // 서버 측 데이터를 템플릿에 전달하기 위해 Model 객체를 사용합니다.
//        // 예를 들어, 로그인 페이지에 필요한 데이터를 여기에서 설정할 수 있습니다.
//        model.addAttribute("message", "Welcome to the login page");
//        return "loginPage"; // loginPage.html을 반환
//    }
//	
    @GetMapping("/login")  // .loginPage("LOGIN_PAGE")에서 설정한 LOGIN_PAGE와 일치해야 함
    public String getLoginForm() {
        return "loginPage";
    }
}