package com.example.Worker.Controller;

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

@RequestMapping(value = "/worker")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin
public class WorkerController {
	//private final Logger logger = LoggerFactory.getLogger("LoggerController의 로그");
	@Autowired private WorkerService workerService;	
	
//	@GetMapping("/log")
//    public void log() {
//        logger.info("로깅 발생!");
//    }
	
	@PostMapping
	  public void insert(@RequestBody Worker worker) {
		workerService.add(worker);  
		//System.out.println("success");
	    //return "redirect:/";
	 }

	@GetMapping("/{no}")
	public Worker list(@PathVariable("no") int no) {
		System.out.println(no);
		return workerService.get(no);
	}
	
	@GetMapping
	public Object list() {
		//System.out.print("요청 도착");
		return workerService.getAll();
	}

	@PutMapping("/update")
	public void update(@RequestBody Worker worker) {
		System.out.println("update요청: " + worker.getName()+ worker.getEmail()+ worker.getPhone());
		workerService.update(worker);
		//return worker;
	}

	  @DeleteMapping("/{no}")
	  public String delete(@PathVariable int no) {
	    System.out.println("삭제 번호 : " + no);
	    workerService.delete(no);
	    return "deleted Successfully";
	    //return null;
	  }
}


