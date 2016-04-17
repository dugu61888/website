package com.medicine.info.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.medicine.info.bean.CompanyInfo;
import com.medicine.info.bean.Product;
import com.medicine.info.bean.Questions;
import com.medicine.info.service.CompanyService;
import com.medicine.info.service.ProductService;
import com.medicine.info.service.QuestionsService;


@Controller
@RequestMapping("/")
public class CompanyInfoController {
	
	@Resource
	private CompanyService companyService;
	@Resource
	private ProductService productService;
	
	@Resource
    private QuestionsService questionService;
	
	@RequestMapping("/add")
	public String addCompany(HttpServletRequest request,Model model){
		String companyName =(String) request.getAttribute("companyName");
		String description = (String) request.getAttribute("description");
		String isFirst = (String) request.getAttribute("isFirst");
		if(!"false".equals(isFirst)){
			model.addAttribute("isFirst", "false");
			return "/user/add";
		}
		CompanyInfo companyInfo=new CompanyInfo();
		companyInfo.setCompany_name(companyName);
		companyInfo.setDescribtion(description);
		companyService.insertCompanyInfo(companyInfo);
		model.addAttribute("isFirst", "false");
		return "/user/success";
	}
	@RequestMapping("/index")
	public String subintrol(HttpServletRequest request,Model model){
		System.out.println("begin!!!!");
		return "../../index";
	}
	
	@RequestMapping("/subintrol")
	public String list(HttpServletRequest request,Model model){
		System.out.println("subintrol!!!!");
		return "/subintrol";
	}
	
	@RequestMapping("/detail")
	public String listdetail(HttpServletRequest request,Model model){
		String paraPid=(String) request.getAttribute("pid");
		if(paraPid==null||"".equals(paraPid)){
			paraPid="0";
		}

//		Product product=productService.getProductById(Integer.valueOf(paraPid));
//		String jsonText=JSON.toJSONString(product);
//		System.out.println("list2Json()方法：jsonText=="+jsonText);
//		model.addAttribute("obj", jsonText);
		return "/detail";
	}
	
	@RequestMapping("/getProductJson")
	@ResponseBody
	public String listProduct(HttpServletRequest request,Model model){
		Map<String, String> params=new HashMap<>();
		String paraPid=(String) request.getParameter("pid");
		String jsonText="";
		if(paraPid==null||"".equals(paraPid)){
			List<Product> products=productService.getList(0, 0, params);
			jsonText = JSON.toJSONString(products, true);  
			System.out.println("list2Json()方法：jsonText=="+jsonText);
		}else{
			Product product=productService.getProductById(Integer.valueOf(paraPid));
			jsonText=JSON.toJSONString(product);
			System.out.println("toJSONString()方法：jsonText=="+jsonText);
		}

		return jsonText;
	}
	
	@RequestMapping(value="/getQuestionsJson",produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String listQuestions(HttpServletRequest request,HttpServletResponse response){
		Map<String, String> params=new HashMap<>();
		String paraPid=(String) request.getParameter("pid");
		String jsonText="";
		response.setCharacterEncoding("UTF-8"); 
		if(paraPid==null||"".equals(paraPid)){
			List<Questions> questions=questionService.getList(0, 0, params);
			jsonText = JSON.toJSONString(questions, true);  
			System.out.println("list2Json()方法：questions=="+jsonText);
		}else{
			Questions question=questionService.getQuestionById(Integer.valueOf(paraPid));
			jsonText=JSON.toJSONString(question);
			System.out.println("toJSONString()方法：question=="+jsonText);
		}

		return jsonText;
	}
	
	
	

}
