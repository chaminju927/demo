package example.dao;

	import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import example.vo.Worker;

	@Mapper
	public interface WorkerDao {
	 List<Worker> getWorker(int no);
	}

