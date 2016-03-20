package com.medicine.info.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.medicine.info.bean.CompanyInfo;

public interface CompanyInfoDao {

	public CompanyInfo getCompanyInfoById(int id);
	public CompanyInfo getCompanyInfoByName(@Param(value="name") String name);
	public List<CompanyInfo> getList(@Param(value="pageStart") int pageStart,@Param(value="pageSize")int pageSize,
			@Param(value="params")Map<String,String> params);
	public int getTotal(@Param(value="companyInfo")CompanyInfo ci);
	public int updateCompanyInfo(@Param(value="companyInfo")CompanyInfo ci);
	public void insertCompanyInfo(@Param(value="companyInfo")CompanyInfo ci);
	public void deleteCompanyInfo(@Param("id")int id);
	
}
