package com.myproject.second.product.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ProdVO getProductList(@PathVariable("productno") int productno) throws Exception {
		return prodService.getProductList(productno);
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

	@PostMapping("/upload/img/{productno}")
	public void productImageUpload(@PathVariable("productno") int productno,
			@RequestParam("fileList") List<MultipartFile> fileList) {
		File file = new File("./src/main/resources/images/product/" + productno + "/");

		boolean directoryCreated = file.mkdir();
		System.out.println(productno);
		try {
			for (MultipartFile multipartFile : fileList) {
				FileOutputStream writer = new FileOutputStream(
						"./src/main/resources/images/product/" + productno + "/" + multipartFile.getOriginalFilename());
				System.out.println(multipartFile.getOriginalFilename());
				writer.write(multipartFile.getBytes());
				writer.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@PostMapping("/insertProduct")
	public ResponseEntity<?> insertProduct(@RequestPart(value = "data") ProdVO requestData,
			@RequestParam("fileList") List<MultipartFile> fileList) throws NotFoundException {
		ResponseEntity<?> entity = null;

		try {
			int productno = prodService.insertProduct(requestData);

			File file = new File("./src/main/resources/images/product/" + productno + "/");
			file.mkdir();
			String[] path = { "/detail/", "/product/" };
			file = new File("./src/main/resources/images/product/" + productno + path[0]);
			file.mkdir();
			file = new File("./src/main/resources/images/product/" + productno + path[1]);
			file.mkdir();

			for (int i = 0; i < fileList.size(); i++) {
				MultipartFile multipartFile = fileList.get(i);
				FileOutputStream writer = new FileOutputStream("./src/main/resources/images/product/" + productno
						+ path[i] + multipartFile.getOriginalFilename());
				System.out.println(multipartFile.getOriginalFilename());
				writer.write(multipartFile.getBytes());
				writer.close();
			}
			entity = new ResponseEntity<>(HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return entity;
	}
}
