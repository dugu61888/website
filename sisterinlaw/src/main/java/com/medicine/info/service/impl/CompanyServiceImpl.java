package com.medicine.info.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.medicine.info.bean.CompanyInfo;
import com.medicine.info.dao.CompanyInfoDao;
import com.medicine.info.service.CompanyService;
@Service("companyService")
public class CompanyServiceImpl implements CompanyService {
    @Resource
   	private CompanyInfoDao companyInfoDao;
	@Override
	public CompanyInfo getCompanyById(int id) {
		// TODO Auto-generated method stub
		return companyInfoDao.getCompanyInfoById(id);
	}

	@Override
	public CompanyInfo getCompanyByName(String name) {
		// TODO Auto-generated method stub
		if(name==null)
			name="";
		return companyInfoDao.getCompanyInfoByName(name);
	}

	@Override
	public List<CompanyInfo> getList(int pageStart, int pageSize, Map<String, String> params) {
		// TODO Auto-generated method stub
		
		return companyInfoDao.getList(pageStart, pageSize, params);
	}

	@Override
	public int getTotal(CompanyInfo ci) {
		// TODO Auto-generated method stub
		return companyInfoDao.getTotal(ci);
	}

	@Override
	public int updateCompanyInfo(CompanyInfo ci) {
		// TODO Auto-generated method stub
		return companyInfoDao.updateCompanyInfo(ci);
	}

	@Override
	public void insertCompanyInfo(CompanyInfo ci) {
		// TODO Auto-generated method stub
		companyInfoDao.insertCompanyInfo(ci);
	}

	@Override
	public void deleteCompanyInfo(int id) {
		// TODO Auto-generated method stub
		companyInfoDao.deleteCompanyInfo(id);
	}

}
