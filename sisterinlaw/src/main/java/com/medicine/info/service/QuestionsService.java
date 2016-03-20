package com.medicine.info.service;

import java.util.List;
import java.util.Map;
import com.medicine.info.bean.Questions;

public interface QuestionsService {
	
	public Questions getQuestionById(int id);
	public Questions getQuestionByName(String name);
	public List<Questions> getList(int pageStart,int pageSize,Map<String,String> params);
	public int updateQuestion(Questions qs);
	public void insertQuesions(Questions qs);
	public void deleteQuestions(int id);
	public int getTotal(Questions qs);

}
