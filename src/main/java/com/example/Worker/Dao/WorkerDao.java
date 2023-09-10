package com.example.Worker.Dao;

import org.apache.ibatis.annotations.Mapper;

import com.example.Worker.Vo.Worker;

	@Mapper //mybatis 버전3부터 사용가능
	public interface WorkerDao {

//	 Worker getWorker(int no);
		 String getWorker(int no);
	
	}

