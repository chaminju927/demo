package com.example.Worker.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Worker.Service.WorkerService;
import com.example.Worker.Vo.Worker;

@CrossOrigin("*")
@RequestMapping(value = "/worker")
@RestController
public class WorkerController {
	
	private final Logger logger = LoggerFactory.getLogger("LoggerController의 로그");
	@Autowired private WorkerService workerService;	
	
	@GetMapping("/log")
    public void log() {
        logger.info("로깅 발생!");
    }
	
	@PostMapping("/join")
	  public String insert(@RequestBody Worker worker) {
		workerService.add(worker);  
	    return "redirect:/";
	 }

	@GetMapping("/{no}")
	public Worker list(@PathVariable("no") int no) {
		System.out.println(no);
		return workerService.get(no);
	}
	@PutMapping("/update")
	public Worker update(@RequestBody Worker worker) {
		System.out.println(worker);
		workerService.update(worker);
		return null;
	}

	  @DeleteMapping("/{no}")
	  public String delete(@PathVariable int no) {
	    System.out.println("삭제번호 : " + no);
	    workerService.delete(no);
	    return "redirect:/";
	  }
 
//	@GetMapping("/{no}")
//	public String list(@PathVariable("no") int no) {
//		System.out.println(no);
//		return workerService.get(no);
//		//return null;
//	}
	
}


