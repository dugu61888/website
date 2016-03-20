package com.medicine.info.service;

import java.util.List;
import java.util.Map;
import com.medicine.info.bean.CompanyInfo;

public interface CompanyService {
	
	public CompanyInfo getCompanyById(int id);
	public CompanyInfo getCompanyByName(String name);
	public List<CompanyInfo> getList(int pageStart,int pageSize,Map<String,String> params);
	public int getTotal(CompanyInfo ci);
	public int updateCompanyInfo(CompanyInfo ci);
	public void insertCompanyInfo(CompanyInfo ci);
	public void deleteCompanyInfo(int id);
	

}
