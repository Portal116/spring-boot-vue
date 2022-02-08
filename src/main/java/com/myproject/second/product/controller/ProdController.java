package com.myproject.second.product.controller;

import java.util.List;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.myproject.second.product.service.ProdService;
import com.myproject.second.product.vo.ProdVO;

@RestController
@RequestMapping(value = "api/product/*")
public class ProdController {
	@Autowired
	private ProdService prodService;

	@GetMapping("/productDetail/{productno}")
	public ProdVO getfindProduct(@PathVariable("productno") int productno) throws Exception {
		return prodService.getfindProduct(productno);
	}

	@GetMapping("/count")
	public int getCount(@RequestParam("productname") String productname, @RequestParam("min") int min,
			@RequestParam("max") int max) throws Exception {
		return prodService.getCount(productname, min, max);
	}

	@GetMapping("/search")
	public List<ProdVO> searchMinMaxProduct(@RequestParam("productname") String productname,
			@RequestParam("page") int page, @RequestParam("content") int content, @RequestParam("min") int min,
			@RequestParam("max") int max) throws Exception {
		return prodService.searchMinMaxProduct(productname, page, content, min, max);
	}

	@GetMapping("/popular/{productname}")
	public List<ProdVO> searchProduct(@PathVariable("productname") String productname) throws Exception {
		return prodService.searchPopular(productname);
	}

	@GetMapping("/productDetail/all")
	public List<ProdVO> getAllProductList() throws Exception {
		return prodService.getProductList();
	}

	@GetMapping("/productDetail/saleslist/{sellerid}")
	public List<ProdVO> getSalesList(@PathVariable("sellerid") String sellerid) throws Exception {
		return prodService.getSalesList(sellerid);
	}

	@GetMapping("/productDetail/bestImage/{productno}")
	public List<ProdVO> getAllProductImageList(@PathVariable("productno") int productno) throws Exception {
		return prodService.getProductImageList(productno);
	}

	@GetMapping("/canquit/{id}")
	public int haveProduct(@PathVariable("id") String sellerid) throws Exception {
		return prodService.haveProduct(sellerid);
	}

	@PatchMapping("/onsale/{productno}")
	public ResponseEntity<?> onSaleProduct(@PathVariable("productno") int productno,
			@RequestParam("onsale") String onsale) {
		return prodService.onSaleProduct(onsale, productno);
	}

	@PostMapping("/insertProduct")
	public ResponseEntity<?> insertProduct(@RequestPart(value = "data") ProdVO requestData,
			@RequestParam("fileList") List<MultipartFile> fileList) throws NotFoundException {
		return prodService.insertProduct(requestData, fileList);
	}

	@PutMapping("/uodateProduct")
	public ResponseEntity<?> updateProduct(@RequestPart(value = "data") ProdVO requestData,
			@RequestParam("fileList") List<MultipartFile> fileList) throws NotFoundException {
		return prodService.updateProduct(requestData, fileList);
	}

	@GetMapping("/findByName/{productname}")
	public ResponseEntity<?> findByName(@PathVariable("productname") String productname) {
		return prodService.findByName(productname);
	}

	@GetMapping("/findByNo/{productno}")
	public ResponseEntity<?> findByNo(@PathVariable("productno") int productno) {
		return prodService.findByNo(productno);
	}

	@PutMapping("/updateAmount")
	public ResponseEntity<?> updateAmount(@RequestParam("productno") int productno,
			@RequestParam("amount") int amount) {
		return prodService.updateAmount(productno, amount);
	}
}
