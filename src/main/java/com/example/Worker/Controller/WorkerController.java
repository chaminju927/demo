package com.example.Worker.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Worker.Service.WorkerService;
import com.example.Worker.Vo.Worker;

@CrossOrigin("*")
@RequestMapping(value = "/worker")
@RestController
public class WorkerController {
	
	@Autowired private WorkerService workerService;	
	
//	@GetMapping("/{no}")
//	public Worker list(@PathVariable("no") int no) {
//		System.out.println(no);
//		return workerService.get(no);
//		//return null;
//	}
//	
	@GetMapping("/{no}")
	public String list(@PathVariable("no") int no) {
		System.out.println(no);
		return workerService.get(no);
		//return null;
	}
	
	
}


