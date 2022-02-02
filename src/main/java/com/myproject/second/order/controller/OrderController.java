package com.myproject.second.order.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.second.order.service.OrderService;
import com.myproject.second.order.vo.OrderVO;

@RestController
@RequestMapping(value = "api/order/*")
public class OrderController {
	@Autowired
	private OrderService orderService;

	@GetMapping("/{id}")
	public List<OrderVO> getAllOrderList(@PathVariable("id") String id) throws Exception {
		return orderService.getAllOrderList(id);
	}

	@GetMapping("/getOrders")
	public List<OrderVO> getOrderList(@RequestParam("id") String id, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate, @RequestParam("productname") String productname) throws Exception {
		return orderService.getOrderList(id, startdate, enddate, productname);
	}

	@GetMapping("/getCancels")
	public List<OrderVO> getCancelList(@RequestParam("id") String id, @RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate, @RequestParam("productname") String productname) throws Exception {
		return orderService.getCancelList(id, startdate, enddate, productname);
	}

	@GetMapping("/canquit/{id}")
	public int haveOrder(@PathVariable("id") String id) throws Exception {
		return orderService.haveOrder(id);
	}

	@PostMapping("/create")
	public void insertOrder(@RequestBody OrderVO orderVO) throws Exception {
		orderService.insertOrder(orderVO);
	}

	@GetMapping("/getSell/{sellerid}")
	public List<OrderVO> getSellList(@PathVariable("sellerid") String sellerid) {
		return orderService.getSellList(sellerid);
	}

	@PutMapping("/update")
	public void updateOrder(@RequestParam("orderidx") long orderidx, @RequestParam("state") String state)
			throws Exception {
		orderService.updateOrder(orderidx, state);
	}
}
