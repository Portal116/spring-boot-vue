package com.myproject.second.product.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.myproject.second.product.mapper.ProdMapper;
import com.myproject.second.product.vo.ProdVO;

@Service
public class ProdService {
	private ProdMapper prodMapper;

	public ProdService(ProdMapper prodMapper) {
		this.prodMapper = prodMapper;
	}

	public List<ProdVO> getProductList() {
		return prodMapper.findAllProduct();
	}

	public List<ProdVO> getSalesList(String sellerid) {
		return prodMapper.findSalesList(sellerid);
	}

	public ProdVO getProductList(int productno) {
		return prodMapper.findProduct(productno);
	}

	public List<ProdVO> searchProduct(String productname) {
		String temp = "%" + productname + "%";
		return prodMapper.searchProduct(temp);
	}

	public String getOption1(int productno) {
		return prodMapper.findOption1(productno);
	}

	public List<ProdVO> getProductImageList(int productno) {
		List<ProdVO> list = prodMapper.findAllProductImage(productno).subList(0, 6);
		return list;
	}

	public int insertProduct(ProdVO target) {
		ProdVO result = new ProdVO();
		prodMapper.insertProduct(target, result);
		return result.getProductno();
	}
	
	public int haveProduct(String sellerid) {
		return prodMapper.haveProduct(sellerid);
	}

}
