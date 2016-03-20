package com.medicine.info.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import com.medicine.info.bean.Questions;

public interface QuestionsDao {
	
	public Questions getQuestionById(int id);
	public Questions getQuestionByName(@Param(value="name") String name);
	public List<Questions> getList(@Param(value="pageStart") int pageStart,@Param(value="pageSize")int pageSize,
			@Param(value="params")Map<String,String> params);
	public int updateQuestion(@Param("questions")Questions qs);
	public void insertQuesions(@Param("questions")Questions qs);
	public void deleteQuestions(@Param("id")int id);
	public int getTotal(@Param(value="question")Questions qs);

}
