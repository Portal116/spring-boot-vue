package com.myproject.second.product.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.myproject.second.product.vo.ProdVO;

@Mapper
public interface ProdMapper {
	@Select("select * from s_product")
	List<ProdVO> findAllProduct();

	@Select("select * from s_product where productno = #{productno}")
	ProdVO findProduct(int productno);

	@Select("select s_product.productno, s_product.productname, s_product.ptype, s_product.imagename, s_product.price, s_product.sellerid, s_member.nickname from s_product left join s_member on s_product.id = s_member.id where UPPER(productname) like UPPER(#{productname}) or UPPER(ptype) like UPPER(#{productname}) order by s_product.productno")
	List<ProdVO> searchProduct(@Param("productname") String productname);
	
	@Select("select * from s_product where sellerid = #{sellerid} order by regdate")
	List<ProdVO> findSalseList(String sellerid);

	@Select("select option1 from s_product where productno = #{productno}")
	String findOption1(int productno);

	@Select("select option2 from s_product where productno = #{productno}")
	String findOption2(int productno);

	@Select("select * from s_product left join s_seller on (s_seller.productno = s_product.productno) where s_product.sellerid = (select id from s_seller where productno = #{productno}) and s_product.productno != #{productno} order by s_seller.totalsell desc")
	List<ProdVO> findAllProductImage(int productno);

	@Select("select prod_seq.currval from dual")
	int getProductNo();

	@Insert("insert into s_product(productno, productname, ptype, imagename, price, option1, option2, regdate, sellerid, detailimagename) values (prod_seq.nextval, #{in.productname}, '신발', #{in.imagename}, #{in.price}, #{in.option1}, #{in.option2}, to_char(sysdate, 'yyyy.mm.dd hh24:mi'), #{in.sellerid}, #{in.detailimagename})")
	@Options(useGeneratedKeys = true, keyProperty = "result.productno", keyColumn = "productno")
	int insertProduct(@Param("in") ProdVO in, @Param("result") ProdVO result);

}
