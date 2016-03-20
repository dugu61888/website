package com.medicine.info.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.medicine.info.bean.Questions;
import com.medicine.info.dao.QuestionsDao;
import com.medicine.info.service.QuestionsService;
@Service("QuestionService")
public class QuestionServiceImpl implements QuestionsService {

	@Resource
	private QuestionsDao questionDao;
	@Override
	public Questions getQuestionById(int id) {
		// TODO Auto-generated method stub
		return questionDao.getQuestionById(id);
	}

	@Override
	public Questions getQuestionByName(String name) {
		// TODO Auto-generated method stub
		if(name==null){
			name="";
		}
		return questionDao.getQuestionByName(name);
	}

	@Override
	public List<Questions> getList(int pageStart, int pageSize, Map<String, String> params) {
		
		return questionDao.getList(pageStart, pageSize, params);
	}

	@Override
	public int updateQuestion(Questions qs) {
		// TODO Auto-generated method stub
		return questionDao.updateQuestion(qs);
	}

	@Override
	public void insertQuesions(Questions qs) {
		// TODO Auto-generated method stub
		questionDao.insertQuesions(qs);
	}

	@Override
	public void deleteQuestions(int id) {
		// TODO Auto-generated method stub
		questionDao.deleteQuestions(id);
	}

	@Override
	public int getTotal(Questions qs) {
		// TODO Auto-generated method stub
		
		return questionDao.getTotal(qs);
	}

}
