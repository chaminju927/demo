package example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import example.service.WorkerService;

@CrossOrigin("*")
@Controller
public class WorkerController {
	
	@Autowired WorkerService workerService;	
	
	@GetMapping("/list/{no}")
	public Object list(@PathVariable(value ="no") int no) {
		workerService.getClass();
		return "list";
	}
	
	
}


