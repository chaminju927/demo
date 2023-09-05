package example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import example.service.WorkerService;

@CrossOrigin("*")
@RestController
public class WorkerController {
	
	@Autowired private WorkerService workerService;	
	
	@GetMapping(value="/list")
	public Object list(int no) {
		return workerService.get(no);
		
	}
	
	
}


