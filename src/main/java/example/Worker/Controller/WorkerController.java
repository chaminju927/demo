package example.Worker.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import example.Worker.Service.WorkerService;

@CrossOrigin("*")
@RequestMapping("/success")
@RestController
public class WorkerController {
	
	@Autowired private WorkerService workerService;	
	
	@GetMapping("/{no}")
	public Object list(@PathVariable("no") Integer no) {
		System.out.println(no);
		
		return workerService.get(no);
		
	}
	
	
}


