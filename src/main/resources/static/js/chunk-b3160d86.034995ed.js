(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3160d86"],{"555e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"otoQ"},[a("table",[t._m(0),t._m(1),t._m(2),t._m(3),a("tr",[t._m(4),a("td",[a("p",[a("span",[a("input",{staticClass:"shortInput inputValues",attrs:{type:"text",name:"연락처",placeholder:"-없이 숫자만",id:"mobile"},on:{keyup:function(e){return t.phoneCheck()}}})]),a("span",[t.phoneValidate?t._e():a("span",{staticClass:"validate"},[t._v("- 없이 숫자만 입력해주세요")])])])])]),t._m(5),a("tr",[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[a("router-link",{staticClass:"signUpLink",attrs:{to:"/customerService"}},[a("button",{staticClass:"otoQBtn"},[t._v("취소하기")])]),a("button",{staticClass:"otoQBtn",attrs:{type:"submit"},on:{click:t.QuestionRegister}},[t._v(" 등록하기 ")])],1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticStyle:{padding:"0 0"},attrs:{colspan:"2"}},[a("h2",[t._v("문의글 작성")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticStyle:{width:"20%"}},[a("span",[t._v("유형")])]),a("td",[a("select",{staticClass:"qnaType"},[a("option",{attrs:{value:"회원"}},[t._v("회원")]),a("option",{attrs:{value:"쿠폰/혜택/이벤트"}},[t._v(" 쿠폰/혜택/이벤트 ")]),a("option",{attrs:{value:"주문/결제"}},[t._v("주문/결제")]),a("option",{attrs:{value:"배송"}},[t._v("배송")]),a("option",{attrs:{value:"취소/반품/교환"}},[t._v("취소/반품/교환")]),a("option",{attrs:{value:"기타"}},[t._v("기타")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("span",[t._v("제목")])]),a("td",[a("input",{staticClass:"longInput inputValues",attrs:{type:"text",name:"제목"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("span",[t._v("내용")])]),a("td",[a("textarea",{staticClass:"otoTextarea inputValues",staticStyle:{resize:"none"},attrs:{name:"내용",id:"otoTextarea",maxlength:"2000",placeholder:"문의 내용을 입력해주세요."}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("span",[t._v("연락처")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[a("span",[t._v("파일 첨부")])]),a("td",[a("input",{attrs:{type:"file"}})])])}],r={data(){return{phoneValidate:!0}},methods:{phoneCheck(){let t=document.getElementById("mobile").value;/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/.test(t)?this.phoneValidate=!0:this.phoneValidate=!1},QuestionRegister(){let t=!1;const e=document.getElementsByClassName("inputValues");for(var a=0;a<e.length;a++)if(t=!0,0==e[a].value.length)return alert(e[a].name+"을/를 입력하세요"),e[a].focus(),void(t=!1);t&&alert("질문을 등록했습니다")}}};document.getElementById("file");var i=r,l=(a("58b7"),a("2877")),o=Object(l["a"])(i,n,s,!1,null,"7dc9d79a",null);e["default"]=o.exports},"58b7":function(t,e,a){"use strict";a("be70")},be70:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b3160d86.034995ed.js.map