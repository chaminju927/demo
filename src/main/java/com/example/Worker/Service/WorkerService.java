package com.example.Worker.Service;

import java.util.List;

import com.example.Worker.Vo.Worker;

public interface WorkerService {

	Worker get(int no);
	List<Worker> getAll();
	void add(Worker worker);
	void delete(int no);
	void update(Worker worker);
}
