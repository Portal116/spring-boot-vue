(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a693b74"],{"05a7":function(t,e,i){"use strict";i("ac76")},"0c59":function(t,e,i){"use strict";i("1d1b")},"1d1b":function(t,e,i){},"227e":function(t,e,i){},"2e1b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"productDetail"},[i("div",{staticClass:"detailTop"},[i("div",{staticClass:"leftBox scale-down",staticStyle:{margin:"auto","text-align":"center"}},[i("img",{staticStyle:{width:"500px",height:"500px","border-radius":"10px"},attrs:{src:"/api/product/productimage/"+t.prod.productno+"/"+t.prod.imagename,alt:"productImage"}})]),i("div",{staticClass:"rightBox"},[i("div",{staticClass:"enter"}),i("div",{staticClass:"rightTitle"},[i("h2",[t._v(" "+t._s(t.prod.productname)+" ")]),1==this.prod.onsale?i("h1",[t._v(" "+t._s(t.AddComma(t.prod.price))+"원 ")]):t._e(),0==this.prod.onsale?i("h1",{staticStyle:{color:"red"}},[t._v(" 품절 상품입니다 ")]):t._e()]),i("div",{staticClass:"rightTop"},[i("p",[t._v("15시 이전 주문 시 오늘 출발")]),0==t.delivery?i("p",[t._v("무료 배송")]):t._e(),t.delivery>0?i("p",[t._v(" 배송비 "+t._s(t.AddComma(t.delivery))+"원 ( "+t._s(t.AddComma(t.delivery_low))+"원 이상 구매 시 배송비 무료) ")]):t._e()]),i("div",{staticClass:"rightSelect"},[i("h3",[t._v("옵션 선택")]),i("div",{staticClass:"searchBar"},[i("select",{staticClass:"searchSelectBox",attrs:{id:"search1",name:"searchSelect"},on:{click:function(e){return t.firstSelected(e)}}},t._l(t.option1,(function(e,s){return i("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"searchBar"},[i("select",{directives:[{name:"show",rawName:"v-show",value:t.isSelected,expression:"isSelected"}],staticClass:"searchSelectBox",attrs:{name:"searchSelect"},on:{click:function(e){return t.secondSelected(e)}}},t._l(t.option2,(function(e,s){return i("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])})),0)])]),i("div",{staticClass:"rightSelected"},[i("h3",{staticStyle:{"text-align":"left",padding:"0 0 0 20px"}},[t._v(" 선택된 옵션 ")]),i("table",{staticStyle:{width:"100%"}},[i("div",{staticClass:"rightSelectedTable"},t._l(t.items,(function(e,s){return i("tr",{key:s},[i("td",{staticStyle:{width:"200px"}},[i("span",[t._v("옵션1 : ")]),i("span",{domProps:{innerHTML:t._s(e.option1)}})]),i("td",{staticStyle:{width:"100px"}},[i("span",[t._v("옵션2 : ")]),i("span",{domProps:{innerHTML:t._s(e.option2)}})]),i("td",{staticStyle:{width:"10px",padding:"0 0 0 20px"}},[i("button",{staticStyle:{color:"black","background-color":"#fafafa"},on:{click:function(e){return t.amountDec(s)}}},[t._v(" - ")])]),i("td",{staticStyle:{padding:"0 3px",width:"25px","text-align":"center"}},[i("span",{domProps:{innerHTML:t._s(e.amount)}})]),i("td",{staticStyle:{width:"10px"}},[i("button",{staticStyle:{color:"black","background-color":"#fafafa"},on:{click:function(e){return t.amountInc(s)}}},[t._v(" + ")])]),i("td",{staticStyle:{width:"30px"}},[i("button",{staticClass:"removeSelectedBtn",on:{click:function(e){return t.removeSelected(s)}}},[t._v(" X ")])])])})),0)])]),i("div",{staticClass:"clear"}),i("div",{staticClass:"rightButton"},[i("h3",{staticStyle:{"text-align":"right",margin:"20px 35px 30px 0"}},[t._v(" 총 상품금액 : "+t._s(t.AddComma(t.totalPrice))+"원 ")]),i("router-link",{attrs:{to:"/basket"}},[i("button",{staticClass:"myCartBtn",staticStyle:{"margin-right":"20px"},attrs:{disabled:0==this.prod.onsale},on:{click:t.addBasket}},[t._v(" 장바구니 ")])]),i("router-link",{attrs:{to:"/payment"}},[i("button",{staticClass:"buyBtn",attrs:{disabled:0==this.prod.onsale},on:{click:t.insertOrderList}},[t._v(" 구매하기 ")])])],1)])]),i("div",{staticClass:"clear"}),i("div",{staticClass:"shopInfo"},[i("shopInfo")],1),i("div",{staticClass:"clear"}),i("div",{staticClass:"detail"},[i("detail")],1)])},a=[],n=i("bc3a"),o=i.n(n),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tabs"},t._l(t.list,(function(e){return i("TabItem",t._b({key:e.id,staticClass:"tabTop",model:{value:t.currentId,callback:function(e){t.currentId=e},expression:"currentId"}},"TabItem",e,!1))})),1),i("div",{staticClass:"contents"},[i("transition",[i("section",{key:t.currentId,staticClass:"item"},[1===t.currentId?i("div",[i("img",{staticStyle:{margin:"0 auto"},attrs:{src:"/api/product/detailimage/"+t.prod.productno+"/"+t.prod.detailimagename}})]):2===t.currentId?i("div",[i("review")],1):3===t.currentId?i("div",[i("qna")],1):t._e()])])],1),i("div",{staticClass:"tabs"},t._l(t.list,(function(e){return i("TabItem",t._b({key:e.id,staticClass:"tabBottom",model:{value:t.currentId,callback:function(e){t.currentId=e},expression:"currentId"}},"TabItem",e,!1))})),1)])},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{class:[t.active,"tab"],on:{click:function(e){return t.$emit("input",t.id)}}},[t._v(" "+t._s(t.label)+" ")])},d=[],p={props:{id:Number,label:String,value:Number},computed:{active(){return this.value===this.id&&"active"}}},u=p,h=(i("05a7"),i("2877")),m=Object(h["a"])(u,l,d,!1,null,"7a284c9c",null),g=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"review"},[t._m(0),i("div",{staticClass:"reviewMain"},[i("table",{staticClass:"reviewTable"},t._l(t.reviews,(function(e,s){return i("tr",{key:s},[i("td",{staticStyle:{width:"10%"}},[i("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/api/review/reviewImage/"+e.productno+"/"+e.reviewno+"/"+e.image}})]),i("td",{staticStyle:{"text-align":"left"}},[i("span",{domProps:{innerHTML:t._s(e.content)}})]),i("td",{staticStyle:{width:"10%"}},[i("span",{domProps:{innerHTML:t._s(e.id.slice(0,4)+"****")}})])])})),0)]),i("div",{staticStyle:{"text-align":"center"}},[i("button",{staticClass:"pageBtn",on:{click:t.pageMinus}},[t._v("이전 페이지")]),t._l(t.maxPage,(function(e){return i("span",{key:e},[e!=t.page?i("span",{staticClass:"pageOther",on:{click:function(i){return t.setPage(e)}}},[t._v(t._s(e))]):t._e(),e==t.page?i("span",{staticClass:"pageNow"},[t._v(t._s(e))]):t._e()])})),i("button",{staticClass:"pageBtn",on:{click:t.pagePlus}},[t._v("다음 페이지")])],2)])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reviewTitle"},[i("h2",[t._v("상품평")])])}],f={data(){return{reviews:"",page:1,content:5,maxPage:0,prodCount:0}},methods:{getReview(){const t=this.$route.params.id;o.a.get("/api/review/count/"+t).then(e=>{this.prodCount=e.data,this.maxPage=Math.ceil(this.prodCount/this.content),o()({method:"get",url:"/api/review/getReview",params:{productno:t,page:1,content:this.content}}).then(t=>{this.reviews=t.data})})},pageMinus(){const t=this.$route.params.id;this.page>1&&(this.page--,o()({method:"get",url:"/api/review/getReview",params:{productno:t,page:this.page,content:this.content}}).then(t=>{this.reviews=t.data}))},pagePlus(){const t=this.$route.params.id;this.page<this.maxPage&&(this.page++,o()({method:"get",url:"/api/review/getReview",params:{productno:t,page:this.page,content:this.content}}).then(t=>{this.reviews=t.data}))},setPage(t){const e=this.$route.params.id;this.page=t,o()({method:"get",url:"/api/review/getReview",params:{productno:e,page:this.page,content:this.content}}).then(t=>{this.reviews=t.data})}},mounted(){this.getReview()}},b=f,x=(i("ffd2"),Object(h["a"])(b,v,_,!1,null,"3b27b29e",null)),y=x.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"qna"},[i("div",{staticClass:"qnaTitle"},[i("h2",{staticStyle:{display:"inline-block"}},[t._v("상품 문의")]),i("span",{staticStyle:{"margin-left":"86%"}},[i("button",{staticStyle:{padding:"10px 20px"},on:{click:t.addOpen}},[t._v("문의하기")])])]),t.question?i("div",{staticClass:"questionAdd"},[i("table",{staticStyle:{"border-collapse":"collapse"}},[i("tr",{staticStyle:{"text-align":"center"}},[i("th",{staticStyle:{width:"81px"}},[t._v("질문 내용")]),t._m(0),i("td",{staticStyle:{width:"151px"}},[i("button",{staticStyle:{padding:"5px 10px"},on:{click:t.addQuestion}},[t._v("문의하기")])])])])]):t._e(),i("div",{staticClass:"qnaMain"},[t._m(1),t._l(t.qnas,(function(e){return i("tr",{key:e.number},[i("div",[i("collapse",{attrs:{selected:!1}},[i("div",{attrs:{slot:"collapse-header"},slot:"collapse-header"},[i("td",{staticStyle:{width:"80px"}},[i("span",{domProps:{innerHTML:t._s(e.qnano)}})]),i("td",{staticStyle:{width:"150px"}},[i("span",{domProps:{innerHTML:t._s(e.state)}})]),i("td",{staticStyle:{width:"650px","text-align":"left"}},[i("span",{domProps:{innerHTML:t._s(e.title)}})]),i("td",{staticStyle:{width:"170px"}},[i("span",{domProps:{innerHTML:t._s(e.id.slice(0,4)+"****")}})]),i("td",{staticStyle:{width:"150px"}},[i("span",{domProps:{innerHTML:t._s(e.regdate)}})])]),i("div",{staticStyle:{"text-align":"left"},attrs:{slot:"collapse-body"},slot:"collapse-body"},[i("td",{staticStyle:{width:"210px",border:"0","text-align":"right"}},[i("span",{staticClass:"ic_qs"},[t._v("Q")])]),i("td",{staticStyle:{width:"950px",border:"0"}},[i("span",{domProps:{innerHTML:t._s(e.title)}})])]),i("div",{staticStyle:{"text-align":"left"},attrs:{slot:"collapse-body"},slot:"collapse-body"},[i("td",{staticStyle:{width:"210px",border:"0","text-align":"right"}},[i("span",{staticClass:"ic_as"},[t._v("A")])]),i("td",{staticStyle:{width:"950px",border:"0"}},[i("span",{domProps:{innerHTML:t._s(e.answer)}})])])])],1)])}))],2),i("div",{staticStyle:{"text-align":"center"}},[i("button",{staticClass:"pageBtn",on:{click:t.pageMinus}},[t._v("이전 페이지")]),t._l(t.maxPage,(function(e){return i("span",{key:e},[e!=t.page?i("span",{staticClass:"pageOther",on:{click:function(i){return t.setPage(e)}}},[t._v(t._s(e))]):t._e(),e==t.page?i("span",{staticClass:"pageNow"},[t._v(t._s(e))]):t._e()])})),i("button",{staticClass:"pageBtn",on:{click:t.pagePlus}},[t._v("다음 페이지")])],2)])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticStyle:{width:"1015px"}},[i("input",{staticStyle:{width:"1000px"},attrs:{type:"text",id:"questionInput"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("div",[i("th",{staticStyle:{width:"81px"}},[t._v("번호")]),i("th",{staticStyle:{width:"151px"}},[t._v("상태")]),i("th",{staticStyle:{width:"651px"}},[t._v("제목")]),i("th",{staticStyle:{width:"171px"}},[t._v("문의자")]),i("th",{staticStyle:{width:"151px"}},[t._v("등록일")])])])}],w=i("2f62"),k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collapse collapse-item",class:{"is-active":t.active}},[i("div",{staticClass:"collapse-header touchable",attrs:{role:"tab","aria-expanded":t.active?"true":"false"},on:{click:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("collapse-header")],2),i("transition",{attrs:{name:"fade"}},[t.active?i("div",{staticClass:"collapse-content"},[i("div",{staticClass:"collapse-content-box"},[t._t("collapse-body")],2)]):t._e()])],1)},P=[],L={name:"Collapse",data(){return{active:!1}},props:{selected:{type:Boolean,required:!0,default:!1}},created(){this._isCollapseItem=!0,this.active=this.selected},ready(){this.active&&this.$emit("collapse-open",this.index)},methods:{toggle(){this.active=!this.active,this.active&&this.$emit("collapse-open",this.index)}}},$=L,I=(i("df4d"),Object(h["a"])($,k,P,!1,null,null,null)),q=I.exports;const M=Object(w["a"])("loginStore");var O={components:{Collapse:q},data(){return{qnas:"",question:!1,page:1,content:10,maxPage:0,prodCount:0}},methods:{getQna(){const t=this.$route.params.id;o.a.get("/api/qna/count/"+t).then(e=>{this.prodCount=e.data,this.maxPage=Math.ceil(this.prodCount/this.content),o()({method:"get",url:"/api/qna/getQna",params:{productno:t,page:1,content:this.content}}).then(t=>{this.qnas=t.data})})},pageMinus(){const t=this.$route.params.id;this.page>1&&(this.page--,o()({method:"get",url:"/api/qna/getQna",params:{productno:t,page:this.page,content:this.content}}).then(t=>{this.qnas=t.data}))},pagePlus(){const t=this.$route.params.id;this.page<this.maxPage&&(this.page++,o()({method:"get",url:"/api/qna/getQna",params:{productno:t,page:this.page,content:this.content}}).then(t=>{this.qnas=t.data}))},setPage(t){const e=this.$route.params.id;this.page=t,o()({method:"get",url:"/api/qna/getQna",params:{productno:e,page:this.page,content:this.content}}).then(t=>{this.qnas=t.data})},addOpen(){null==this.getLogin?alert("로그인을 해주세요"):this.question=!this.question},addQuestion(){let t=document.getElementById("questionInput").value;const e=this.$route.params.id;o()({method:"post",url:"/api/qna/"+e,params:{title:t,id:this.getLogin.user_id}}),alert("질문을 등록하셨습니다"),this.question=!1,this.$router.go()},...M.mapMutations(["Logout"])},computed:{...M.mapGetters(["getLogin"])},mounted(){this.getQna()}},T=O,B=(i("f6b6"),Object(h["a"])(T,C,S,!1,null,"07c24c84",null)),D=B.exports,E={components:{TabItem:g,review:y,qna:D},data(){return{currentId:1,prod:"",list:[{id:1,label:"상품 상세 정보"},{id:2,label:"상품 리뷰"},{id:3,label:"상품 문의"}]}},methods:{getProd(){const t=this.$route.params.id;o.a.get("/api/product/productDetail/"+t).then(t=>this.prod=t.data)}},computed:{current(){return this.list.find(t=>t.id===this.currentId)||{}}},mounted(){this.getProd()}},H=E,j=(i("0c59"),Object(h["a"])(H,r,c,!1,null,"3b2358f0",null)),N=j.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop-info"},[i("div",{staticClass:"shop-infoBox"},[i("div",{staticClass:"shop-title"},[i("h2",[t._v(t._s(t.shop))])])]),i("div",{staticClass:"shop-bestItem"},[t._m(0),i("div",{staticClass:"bestPicDiv"},t._l(t.bests,(function(e,s){return i("div",{key:s,staticClass:"bestPic"},[i("img",{staticStyle:{width:"140px",height:"140px"},attrs:{src:"/api/product/productimage/"+e.productno+"/"+e.imagename},on:{click:function(i){return t.moveto(e.productno)}}})])})),0)])])},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bestItemMore"},[i("span",{staticStyle:{"margin-right":"10px"}},[t._v("이 판매자의 인기상품이에요")]),i("button",{staticClass:"showMore"},[t._v("더 보기")])])}],R={data(){return{bests:"",shop:""}},methods:{getProd(){const t=this.$route.params.id;o.a.get("/api/product/productDetail/bestImage/"+t).then(t=>{this.bests=t.data})},getNick(){const t=this.$route.params.id;o.a.get("/api/member/productDetail/"+t).then(t=>{this.shop=t.data})},moveto(t){this.$router.push("/productDetail/"+t),this.$router.go()}},mounted(){this.getProd(),this.getNick()}},G=R,J=(i("8623"),Object(h["a"])(G,Q,A,!1,null,"5f7cb94a",null)),F=J.exports;const X=Object(w["a"])("loginStore"),z=Object(w["a"])("basketList"),K=Object(w["a"])("orderList");var U={components:{detail:N,shopInfo:F},data:function(){return{isSelected:!1,firstOption:0,secondOption:0,items:[],prod:{},delivery_low:5e4,option1:"",option2:"",shop:""}},methods:{firstSelected(t){t.target.value!=this.option1[0]?(this.isSelected=!0,this.firstOption=t.target.value):this.isSelected=!1},secondSelected(t){if(t.target.value!=this.option2[0]){this.secondOption=t.target.value,this.isSelected=!1;const e=this.$route.params.id;let i={imagename:this.prod.imagename,seller:this.shop,productname:this.prod.productname,option1:this.firstOption,option2:this.secondOption,price:this.prod.price,amount:1,productno:e};this.items.push(i),this.addList(i),t.target.value=this.option2[0],document.getElementById("search1").value=this.option1[0]}},insertOrderList(){this.clearOrderList();for(let t=0;t<this.items.length;t++)this.addOrderList(this.items[t])},addBasketList(){for(let t=0;t<this.items.length;t++)this.addList(this.items[t])},removeSelected(t){this.items.splice(t,1)},AddComma(t){var e=/\B(?=(\d{3})+(?!\d))/g;return(""+t).toString().replace(e,",")},amountDec(t){this.items[t].amount>1&&(this.items[t].amount--,this.items[t].price=this.prod.price*this.items[t].amount)},amountInc(t){this.items[t].amount++,this.items[t].price=this.prod.price*this.items[t].amount},...z.mapMutations(["addList"]),...K.mapMutations(["addOrderList"]),...K.mapMutations(["clearOrderList"]),...z.mapMutations(["delList"]),getProd(){const t=this.$route.params.id;o.a.get("/api/product/productDetail/"+t).then(t=>{this.prod=t.data,this.option1=this.prod.option1.split(";"),this.option2=this.prod.option2.split(";")})},getNick(){const t=this.$route.params.id;o.a.get("/api/member/productDetail/"+t).then(t=>{this.shop=t.data})},addBasket(){const t=this.$route.params.id;for(let e=0;e<this.items.length;e++)o()({method:"post",url:"/api/basket/create",params:{id:this.getLogin.user_id,productno:t,option1:this.items[e].option1,option2:this.items[e].option2,amount:this.items[e].amount}})},...X.mapMutations(["Logout"])},computed:{...z.mapGetters(["getBasketList"]),...X.mapGetters(["getLogin"]),totalPrice(){let t=0;for(let e=0;e<this.items.length;e++)t+=this.items[e].price;return t},delivery(){return this.prod.price>=5e4?0:2500}},mounted(){this.getProd(),this.getNick(),this.formData=new FormData}},V=U,W=(i("89b5"),Object(h["a"])(V,s,a,!1,null,"e9008ee2",null));e["default"]=W.exports},"611b":function(t,e,i){},"66b0":function(t,e,i){},7188:function(t,e,i){},8623:function(t,e,i){"use strict";i("227e")},"89b5":function(t,e,i){"use strict";i("611b")},ac76:function(t,e,i){},df4d:function(t,e,i){"use strict";i("7188")},e789:function(t,e,i){},f6b6:function(t,e,i){"use strict";i("66b0")},ffd2:function(t,e,i){"use strict";i("e789")}}]);
//# sourceMappingURL=chunk-8a693b74.44f13bd3.js.map