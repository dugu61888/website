package com.medicine.info.service;

import java.util.List;
import java.util.Map;
import com.medicine.info.bean.Product;

public interface ProductService {
	
	
	public Product getProductById(int id);
	public Product getProductByName(String name);
	public List<Product> getList(int pageStart,int pageSize,Map<String,String> params);
	public int updateProduct(Product pt);
	public void insertProduct(Product pt);
	public void deleteProduct(int id);
	public int getTotal(Product pt);

}
