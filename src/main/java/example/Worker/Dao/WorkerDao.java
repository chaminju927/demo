package example.Worker.Dao;

import org.apache.ibatis.annotations.Mapper;

import example.Worker.Vo.Worker;

	@Mapper //mybatis 버전3부터 사용가능
	//@Repository
	public interface WorkerDao {

	 Worker getWorker(int no);
	
	}

