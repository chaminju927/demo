package example.Worker.Dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import example.Worker.Vo.Worker;

	@Mapper
	@Repository
	public interface WorkerDao {

	 Worker getWorker(int no);
	
	}

