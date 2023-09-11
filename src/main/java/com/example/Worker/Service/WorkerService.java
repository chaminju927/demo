package com.example.Worker.Service;

import com.example.Worker.Vo.Worker;

public interface WorkerService {

	Worker get(int no);
	void add(Worker worker);
	void delete(int no);
	Worker update(Worker worker);
}
