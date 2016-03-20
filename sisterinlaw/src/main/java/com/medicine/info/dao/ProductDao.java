package com.medicine.info.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import com.medicine.info.bean.Product;

public interface ProductDao {
	
	public Product getProductById(int id);
	public Product getProductByName(@Param(value="name") String name);
	public List<Product> getList(@Param(value="pageStart") int pageStart,@Param(value="pageSize")int pageSize,
			@Param(value="params")Map<String,String> params);
	public int updateProduct(@Param(value="product")Product pt);
	public void insertProduct(@Param(value="product")Product pt);
	public void deleteProduct(@Param("id")int id);
	public int getTotal(@Param(value="product")Product pt);

}
