package com.example.Worker.Dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.Worker.Vo.Worker;

	@Mapper 
	public interface WorkerDao {

	 Worker getWorker(int no);
	 List<Worker> getAllWorker();
	 void insert(Worker worker);
	 void delete(int no);
	 void update(Worker worker);

	}

