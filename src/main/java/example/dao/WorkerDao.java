package example.dao;

import org.apache.ibatis.annotations.Mapper;

import example.vo.Worker;

	@Mapper
	public interface WorkerDao {
	 Worker getWorker(int no);
	}

