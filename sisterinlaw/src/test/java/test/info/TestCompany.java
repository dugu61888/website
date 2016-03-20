package test.info;


import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.ui.ExtendedModelMap;

import com.medicine.info.bean.CompanyInfo;
import com.medicine.info.controller.CompanyInfoController;
import com.medicine.info.service.CompanyService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring-mvc.xml",
		"classpath:spring-mybatis.xml" })
public class TestCompany {
	MockHttpServletRequest request = new MockHttpServletRequest();  
    MockHttpServletResponse response = new MockHttpServletResponse();
	
	@Autowired  
    private CompanyInfoController companyInfoController ;  
	
	@Autowired
	private CompanyService  companyService;
	
	@Before 
    public void setUp() {
		request = new MockHttpServletRequest();      
        request.setCharacterEncoding("UTF-8");      
        response = new MockHttpServletResponse();  
	} 
	
//	@Test
//	public void testQueryById1() {
//		CompanyInfo userInfo = new CompanyInfo();
//		userInfo.setCompany_name("test2");
//		userInfo.setDescribtion("this is test2");
//		companyService.insertCompanyInfo(userInfo);
//		System.out.println("finish");
//	}
    
//	@Test
//	public void testController(){
//		request.setParameter("companyName", "controler1");
//    	request.setParameter("description", "controler1test");
//    	assertEquals("/user/add",companyInfoController.addCompany(request,new ExtendedModelMap())) ;
//    	System.out.println("finish");
//	} 
	
	@Test
	public void testList() {
		companyInfoController.listProduct(request, new ExtendedModelMap());
		System.out.println("finish");
	}
	
	
 
}
