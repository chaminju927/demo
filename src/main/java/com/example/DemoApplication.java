package com.example;

//import org.mybatis.spring.annotation.MapperScan; 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.Worker.Controller.WorkerController;

@CrossOrigin("*")
@SpringBootApplication //(scanBasePackages = "demo.com.example.Worker")
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
