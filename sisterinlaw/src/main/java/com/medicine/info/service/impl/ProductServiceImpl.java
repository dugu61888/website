package com.medicine.info.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.medicine.info.bean.Product;
import com.medicine.info.dao.ProductDao;
import com.medicine.info.service.ProductService;
@Service("ProductService")
public class ProductServiceImpl implements ProductService {

	@Resource
	private ProductDao productDao;
	
	@Override
	public Product getProductById(int id) {
		// TODO Auto-generated method stub
		return productDao.getProductById(id);
	}

	@Override
	public Product getProductByName(String name) {
		// TODO Auto-generated method stub
		if(name==null){
			name="";
		}
		return productDao.getProductByName(name);
	}

	@Override
	public List<Product> getList(int pageStart, int pageSize, Map<String, String> params) {
		// TODO Auto-generated method stub
		return productDao.getList(pageStart, pageSize, params);
	}

	@Override
	public int updateProduct(Product pt) {
		// TODO Auto-generated method stub
		return productDao.updateProduct(pt);
	}

	@Override
	public void insertProduct(Product pt) {
		// TODO Auto-generated method stub
		productDao.insertProduct(pt);
	}

	@Override
	public void deleteProduct(int id) {
		// TODO Auto-generated method stub
		productDao.deleteProduct(id);
	}

	@Override
	public int getTotal(Product pt) {
		// TODO Auto-generated method stub
		return productDao.getTotal(pt);
	}

}
