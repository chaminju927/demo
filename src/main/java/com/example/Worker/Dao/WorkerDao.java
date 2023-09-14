package com.example.Worker.Dao;

import org.apache.ibatis.annotations.Mapper;

import com.example.Worker.Vo.Worker;

	@Mapper 
	public interface WorkerDao {

	 //Worker getWorker(int no);
	String getWorker(int no);
	 void insert(Worker worker);
	 void delete(int no);
	 void update(Worker worker);
	}

