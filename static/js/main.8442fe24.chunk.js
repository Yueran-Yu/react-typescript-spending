(this["webpackJsonpreact-accounting-app"]=this["webpackJsonpreact-accounting-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,c=n(21),s=n(43),r=(n(1),n(30)),i=n.n(r),o=n(2);try{(a=n(78)).keys().forEach(a)}catch(_){console.log(_)}var l=function(e){var t=e.name,n=(e.children,e.className),a=Object(s.a)(e,["name","children","className"]);return Object(o.jsx)("svg",Object(c.a)(Object(c.a)({className:i()("icon",n)},a),{},{children:t&&Object(o.jsx)("use",{xlinkHref:"#"+t})}))}},139:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a,c,s,r,i,o,l,_,u,d,p,b,x,j,f,h,O,m,g=n(1),w=n(29),v=n.n(w),E=n(5),y=n(20),M=n(7),D=n(6),C=n(28),P=n(9),T=parseInt(window.localStorage.getItem("idMax")||"0"),k=function(){return T+=1,window.localStorage.setItem("idMax",JSON.stringify(T)),T},L=function(e,t){var n=Object(g.useRef)(0);Object(g.useEffect)((function(){n.current+=1})),Object(g.useEffect)((function(){n.current>1&&e()}),[e,t])},R=function(){var e=Object(g.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1];Object(g.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("tags")||"[]");0===e.length&&(e=[{id:k(),name:"Residence"},{id:k(),name:"Clothing"},{id:k(),name:"Food"},{id:k(),name:"Transportation"}]),a(e)}),[]),L((function(){window.localStorage.setItem("tags",JSON.stringify(n))}),n);return{tags:n,setTags:a,findTag:function(e){return n.filter((function(t){return t.id===e}))[0]},findTagIndex:function(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].id===e){t=a;break}return t},updateTag:function(e,t){a(n.map((function(n){return n.id===e?{id:e,name:t.name}:n})))},deleteTag:function(e){a(n.filter((function(t){return t.id!==e})))},addTag:function(){var e=window.prompt("The new Tag name is:");if(null!==e&&""!==e){var t=k();a([].concat(Object(C.a)(n),[{id:t,name:e}]))}},getName:function(e){var t=n.filter((function(t){return t.id===e}))[0];return t?t.name:""}}},B=n(12),A=n(2),I=D.a.nav(a||(a=Object(E.a)(["\n  background: white;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n  font-size: 16px;\n  color: #515151;\n  padding: 5px 0;\n\n  > ul {\n    display: flex;\n    justify-content: space-around;\n    text-align: center;\n\n    > li {\n      padding-top: 6px;\n      padding-bottom: 2px;\n\n      > a {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        .icon {\n          fill: #515151;\n        }\n\n        &.selected {\n          color: #5678de;\n\n          .icon {\n            fill: #5678de;\n          }\n        }\n      }\n    }\n  }\n"]))),S=function(){return Object(A.jsx)(I,{children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)(y.c,{to:"/money",activeClassName:"selected",children:Object(A.jsx)(B.a,{name:"money"})})}),Object(A.jsx)("li",{children:Object(A.jsx)(y.c,{to:"/tags",activeClassName:"selected",children:Object(A.jsx)(B.a,{name:"tags"})})}),Object(A.jsx)("li",{children:Object(A.jsx)(y.c,{to:"/statistics",activeClassName:"selected",children:Object(A.jsx)(B.a,{name:"statistics"})})})]})})},N=D.a.div(c||(c=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px dashed #e0e0e0;\n  //height: calc(var(--vh, 1vh) * 100);\n"]))),U=D.a.div(s||(s=Object(E.a)(["\n  flex-grow: 1;\n  overflow: auto;\n"]))),W=function(e){var t=e.children,n=e.className,a=function(){var e=Object(g.useState)({width:0,height:0}),t=Object(P.a)(e,2),n=t[0],a=t[1];return Object(g.useLayoutEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}().height;return Object(A.jsxs)(N,{style:{height:a},children:[Object(A.jsx)(U,{className:n,children:t}),Object(A.jsx)(S,{})]})},K=D.a.button(r||(r=Object(E.a)(["\n  font-size: 18px;\n  font-weight: 200;\n  border: none;\n  padding: 5px 12px;\n  background: #5678de;\n  color: white;\n  border-radius: 3px;\n"]))),z=D.a.div(i||(i=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 30px 0 20px 0;\n"]))),J=D.a.ol(o||(o=Object(E.a)(["\n  font-size: 16px;\n  background: white;\n  font-weight: 150;\n\n  h3 {\n    text-align: center;\n    width: 100%;\n    padding: 15px 0 10px 0;\n    background: #eeeeee;\n\t\tfont-weight: 300;\n  }\n\n  > a > li {\n    display: flex;\n    border-bottom: 1px dashed #d5d5d9;\n    line-height: 20px;\n    padding: 8px 0;\n    margin: 0 16px;\n    justify-content: space-between;\n    align-items: center;\n\n    .icon {\n      fill: grey;\n      font-size: 12px;\n    }\n  }"]))),G=function(){var e=R(),t=e.tags,n=e.addTag;return Object(A.jsxs)(W,{children:[Object(A.jsxs)(J,{children:[Object(A.jsx)("h3",{children:"Tag List"}),t.map((function(e){return Object(A.jsx)(y.b,{to:"/tags/"+e.id,children:Object(A.jsxs)("li",{children:[Object(A.jsx)("span",{className:"oneLine",children:e.name}),Object(A.jsx)(B.a,{name:"right"})]},e.id)})}))]}),Object(A.jsx)(z,{children:Object(A.jsx)(K,{onClick:n,children:"New Tag"})})]})},q=n(21),V=D.a.section(l||(l=Object(E.a)(["\n  font-size: 14px;\n  margin: 10px auto;\n  display: inline-flex;\n\n  > .roundCorner {\n    border-radius: 5px;\n    border: 0.5px solid #5678de;\n    display: flex;\n    justify-content: center;\n\n    > div {\n      text-align: center;\n      padding: 6px 10px;\n      color: #5678de;\n      border-radius: 3px;\n\t\t\t\n      &.selected {\n        background: #5678de;\n        color: white;\n      }\n    }\n  }\n"]))),F=function(e){var t=e.value,n={"-":"Expense","+":"Income"},a=Object(g.useState)(["-","+"]),c=Object(P.a)(a,1)[0];return Object(A.jsx)(V,{children:Object(A.jsx)("div",{className:"roundCorner",children:c.map((function(a){return Object(A.jsx)("div",{onClick:function(){e.onChange(a)},className:t===a?"selected":"",children:n[a]},a)}))})})},H=D.a.section(_||(_=Object(E.a)(['\n  background: #ffffff;\n  padding: 12px 16px;\n  flex-grow: 1;\n  overflow: auto;\n\n  > ol {\n    margin: 0 -12px;\n\n    > li {\n      background: #D9D9D9;\n      border-radius: 18px;\n      display: inline-block;\n      padding: 3px 18px;\n      font-size: 14px;\n      margin: 8px 12px;\n\n      &.selected {\n        background: #7c9eff;\n        color: #ffffff;\n        border: none;\n      }\n    }\n  }\n\n  > button {\n    background: none;\n    border: none;\n    padding: 2px 4px;\n    border-bottom: 1px solid #333;\n    color: #666;\n    margin-bottom: 8px;\n\t\tfont-size: large;\n    font-family: "Academy Engraved LET",serif;\n  }\n']))),Y=function(e){var t=R(),n=t.tags,a=t.addTag,c=e.value;return Object(A.jsxs)(H,{children:[Object(A.jsx)("button",{onClick:a,children:"New Tag"}),Object(A.jsx)("ol",{children:n.map((function(t){return Object(A.jsx)("li",{onClick:function(){var n;n=t.id,c.indexOf(n)>=0?e.onChange(c.filter((function(e){return e!==n}))):e.onChange([].concat(Object(C.a)(c),[n]))},className:(n=t.id,c.indexOf(n)>=0?"selected":""),children:t.name},t.id);var n}))})]})},$=n(43),Q=["children"],X=D.a.label(u||(u=Object(E.a)(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > span {\n    margin-right: 6px;\n    white-space: nowrap;\n\n    .icon {\n      fill: #5678de;\n    }\n  }\n\n  input {\n    display: block;\n    width: 100%;\n    background: none;\n    border: none;\n\n    ::placeholder {\n      color: #bebebe;\n\t\t\tfont-size: 15px;\n      font-family: "Arial Narrow",serif;\n    }\n  }\n']))),Z=function(e){var t=e.children,n=Object($.a)(e,Q);return Object(A.jsxs)(X,{children:[Object(A.jsx)("span",{children:t}),Object(A.jsx)("input",Object(q.a)({},n))]})},ee=function(e){var t=e.value;return Object(A.jsx)(Z,{type:"text",placeholder:"Add notes here",value:t,onChange:function(t){e.onChange(t.target.value)},label:"right",children:Object(A.jsx)(B.a,{name:"write"})})},te=n(65),ne=n(67),ae=n.n(ne),ce=D.a.div(d||(d=Object(E.a)(["\n  & .date {\n    text-align: center;\n    float: right;\n    width: 80%;\n    color: #5678de;\n    border: 0.5px solid #5678de;\n    margin-right: 5px;\n    border-radius: 5px 5px 5px 5px;\n    font-weight: 700;\n\t\tpadding: 0 5px;\n  }\n"]))),se=(n(91),n(30)),re=n.n(se),ie=function(e){var t=e.value,n=e.className;return Object(A.jsx)(ce,{className:re()(n),children:Object(A.jsx)(ae.a,{name:"date",className:"date",selected:t,onChange:function(t){e.onDateChange(t)},dateFormat:"dd/MMMM",dateFormatCalendar:"MMM yyyy"})})},oe=function(){var e=Object(g.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1];Object(g.useEffect)((function(){a(JSON.parse(window.localStorage.getItem("collectedData")||"[]"))}),[]),L((function(){window.localStorage.setItem("collectedData",JSON.stringify(n))}),n);return{collectedData:n,addCollectedData:function(e){return 0===e.tagsId.length?(alert("Please Select Tags"),!1):(a([].concat(Object(C.a)(n),[e])),!0)}}},le=D.a.section(p||(p=Object(E.a)(["\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n\n  .dateSection {\n    display: flex;\n    align-items: center;\n  }\n"]))),_e=Object(D.a)(W)(b||(b=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ue={tagsId:[],note:"",date:new Date,category:"-",amount:0},de=function(){var e=Object(g.useState)(ue),t=Object(P.a)(e,2),n=t[0],a=t[1],c=function(e){a(Object(q.a)(Object(q.a)({},n),e))},s=oe().addCollectedData;return Object(A.jsxs)(_e,{children:[Object(A.jsx)(F,{value:n.category,onChange:function(e){return c({category:e})}}),Object(A.jsx)(Y,{value:n.tagsId,onChange:function(e){return c({tagsId:e})}}),Object(A.jsxs)(le,{children:[Object(A.jsx)(ee,{value:n.note,onChange:function(e){return c({note:e})}}),Object(A.jsx)(ie,{className:"dateSection",value:n.date,onDateChange:function(e){return c({date:e})}})]}),Object(A.jsx)(te.a,{value:n.amount,onChange:function(e){c({amount:e})},onOk:function(){s(n)&&(a(ue),alert("Saved Successfully"))}})]})},pe=n(70),be=n.n(pe),xe=n(57),je=function(){Object(g.useEffect)((function(){console.log(xe.a)}),[]);return Object(A.jsx)(xe.a,{option:{tooltip:{trigger:"item",formatter:"{b}: ${c} ({d}%)"},series:[{type:"pie",radius:["55%","95%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641c\u7d22\u5f15\u64ce"},{value:735,name:"\u76f4\u63a5\u8bbf\u95ee"},{value:580,name:"\u90ae\u4ef6\u8425\u9500"},{value:484,name:"\u8054\u76df\u5e7f\u544a"},{value:300,name:"\u89c6\u9891\u5e7f\u544a"}]}]}})},fe=D.a.div(x||(x=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  background: white;\n"]))),he=D.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  background: white;\n  font-size: 18px;\n  line-height: 20px;\n  padding: 10px 16px;\n\n  > .note {\n    margin-right: auto;\n    margin-left: 16px;\n    color: #999;\n  }\n"]))),Oe=D.a.h3(f||(f=Object(E.a)(["\n  font-size: 18px;\n  line-height: 20px;\n  padding: 10px 16px;\n"]))),me=function(){var e=Object(g.useState)("-"),t=Object(P.a)(e,2),n=t[0],a=t[1],c=oe().collectedData,s=R().getName,r=c.filter((function(e){return e.category===n})),i={};r.forEach((function(e){var t=be()(e.date).format("YYYY-MM-DD");t in i||(i[t]=[]),i[t].push(e)}));var o=Object.entries(i).sort((function(e,t){return e[0]===t[0]?0:e[0]>t[0]?-1:e[0]<t[0]?1:0}));return Object(A.jsxs)(W,{children:[Object(A.jsx)(fe,{children:Object(A.jsx)(F,{value:n,onChange:function(e){return a(e)}})}),Object(A.jsx)(je,{}),o.map((function(e){var t=Object(P.a)(e,2),n=t[0],a=t[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)(Oe,{children:n}),a.map((function(e){return Object(A.jsxs)(he,{children:[Object(A.jsx)("div",{className:"tags",children:e.tagsId.map((function(e){return Object(A.jsx)("span",{children:s(e)},e)})).reduce((function(e,t,n,a){return e.concat(n<a.length-1?[t,", "]:[t])}),[])}),e.note&&Object(A.jsxs)("div",{className:"note",children:[" ",e.note," "]}),Object(A.jsxs)("div",{className:"amount",children:["$ ",e.amount]})]})}))]})}))]})},ge=function(){return Object(A.jsx)("div",{children:"Page Not Found."})},we=D.a.header(h||(h=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  line-height: 20px;\n  padding: 14px;\n  background: white;\n  align-items: center;\n"]))),ve=D.a.div(O||(O=Object(E.a)(["\n  background: white;\n  margin-top: 16px;\n  padding: 5px 20px 5px 0;\n\n  .editTag {\n    font-weight: 150;\n    color: grey;\n    font-size: 16px;\n    line-height: 16px;\n  }\n"]))),Ee=function(){var e=R(),t=e.findTag,n=e.updateTag,a=e.deleteTag,c=Object(M.h)().tagId,s=t(parseInt(c)),r=Object(M.g)();return Object(A.jsxs)(W,{children:[Object(A.jsxs)(we,{children:[Object(A.jsx)(B.a,{name:"left",className:"hoist",onClick:function(){r.goBack()}}),Object(A.jsx)("span",{children:"Edit"}),Object(A.jsx)(B.a,{})]}),s?function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)(ve,{children:Object(A.jsx)(Z,{className:"editTag",label:"tagName",type:"text",value:e.name,placeholder:"Tag Name",onChange:function(t){n(e.id,{name:t.target.value})},children:Object(A.jsx)(B.a,{name:"write"})})}),Object(A.jsx)(z,{children:Object(A.jsx)(K,{onClick:function(){console.log("delete is happened."),a(e.id)},children:"Remove"})})]})}(s):Object(A.jsx)(z,{children:"tag is not exist."})]})},ye=D.a.div(m||(m=Object(E.a)(["\n  color: #6d6c6c;\n"])));var Me=function(){return Object(A.jsx)(ye,{children:Object(A.jsx)(y.a,{children:Object(A.jsxs)(M.d,{children:[Object(A.jsx)(M.b,{path:"/money",children:Object(A.jsx)(de,{})}),Object(A.jsx)(M.b,{exact:!0,path:"/tags",children:Object(A.jsx)(G,{})}),Object(A.jsx)(M.b,{path:"/tags/:tagId",children:Object(A.jsx)(Ee,{})}),Object(A.jsx)(M.b,{path:"/statistics",children:Object(A.jsx)(me,{})}),Object(A.jsx)(M.a,{exact:!0,from:"/",to:"/money"}),Object(A.jsx)(M.b,{path:"*",children:Object(A.jsx)(ge,{})})]})})})};n(139);v.a.render(Object(A.jsx)(Me,{}),document.getElementById("root"))},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NumberPadSection}));var _Users_yueranyu_Code_03Javascript_JRG_Course_Account_App_JRG_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_NumberPadSection_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),NumberPadSection=function NumberPadSection(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(_Users_yueranyu_Code_03Javascript_JRG_Course_Account_App_JRG_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),output=_useState2[0],_setOutput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState4=Object(_Users_yueranyu_Code_03Javascript_JRG_Course_Account_App_JRG_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],_setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(_Users_yueranyu_Code_03Javascript_JRG_Course_Account_App_JRG_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),temp=_useState6[0],_setTemp=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("OK"),_useState8=Object(_Users_yueranyu_Code_03Javascript_JRG_Course_Account_App_JRG_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),btn=_useState8[0],setBtn=_useState8[1],lastChar=output.charAt(output.length-1),setOutput=function(e){e.slice(0,10).includes("+")||e.slice(0,10).includes("-")||e.slice(0,10).includes(".")?e=e.slice(0,40):(e=e.slice(0,10)).length>9&&alert("The number is long."),0===e.length&&(e=""),_setOutput(e)},setTemp=function(e){e.length>9?_setTemp(e.slice(0,9)):_setTemp(e)},setResult=function(e){e.length>9?_setResult(e.slice(0,9)):_setResult(e)},isANumber=function(e){return e>="0"&&e<="9"},calc=function calc(value){if(""!==value){var v=new RegExp("(\\.\\d+?)0+\\b","g");return eval(value).toFixed(9).toLocaleString().replace(v,"$1")}return"0"},onClickButtonWrapper=function(e){var t=e.target.textContent;if(null!==t)try{switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":setBtn("="),output.length>0&&"0"!==output?(setResult(calc(output+t)),setOutput(output+t),setTemp(temp+t)):(setResult(calc(t)),setOutput(t),setTemp(t));break;case"":if(output.length>0){setOutput(output.slice(0,-1));var n=output.charAt(output.length-2);setResult(calc("+"===n||"-"===n?output.slice(0,-2):output.slice(0,-1)))}else console.log("triggered???"),result.length>1?setResult(result.slice(0,-1)):setResult("0");output.length<=1?setBtn("OK"):setBtn("="),temp.length>1?setTemp(temp.slice(0,-1)):setTemp("");break;case"+":case"-":setBtn("="),setTemp(""),0===output.length?setOutput(result+t):(isANumber(lastChar)||"."===lastChar)&&setOutput(output+t);break;case"C":setResult("0"),setOutput("0"),setTemp("temp");break;case".":if(output.length>0&&"0"!==output){if(temp.indexOf(".")>=1||"."===temp.charAt(0))return void console.log("can't click '.' again ");setTemp(temp+t),setOutput(output+t),0===temp.length&&(setTemp(temp+"0"+t),setOutput(output+"0"+t))}else setTemp("0"+t),setOutput("0"+t);break;case"OK":if("0"===result)return;props.onOk&&props.onOk(),setResult("0"),setOutput(""),setTemp("");break;case"=":setResult(calc("+"===lastChar||"-"===lastChar?output.slice(0,-1):output)),props.onChange(parseFloat(result)),setBtn("OK"),setOutput(""),setTemp("")}}catch(e){console.log(e)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_NumberPadSection_styles__WEBPACK_IMPORTED_MODULE_3__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"outputWrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"output",children:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"total",children:"0"===output?"":output})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"pad clearfix",onClick:onClickButtonWrapper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.a,{name:"delete"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"ok",children:btn})]})]})}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,c=n(5),s=n(6).a.section(a||(a=Object(c.a)(["\n  .outputWrapper {\n    display: flex;\n    flex-direction: column;\n    background: white;\n    color: #8d8d8d;\n    text-align: right;\n    padding: 0 16px;\n    box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25);\n\n    .output {\n      font-size: 36px;\n      line-height: 35px;\n      height: 35px;\n      padding: 4px 0;\n    }\n\n    .total {\n      line-height: 15px;\n      padding-bottom: 6px;\n    }\n  }\n  .pad {\n    display: flex;\n    flex-wrap: wrap;\n\n    > button {\n      width: 25%;\n      height: 56px;\n      outline: none;\n      border-bottom: 0.5px solid #e2e2e2;\n      border-top: none;\n      border-right: 0.5px solid #e2e2e2;\n      border-left: none;\n      font-size: 1.5rem;\n      color: #888888;\n      cursor: pointer;\n\n      .icon {\n        font-size: 1.2rem;\n        fill: #888888;\n      }\n\n      &.ok {\n        background-color: #5678de;\n        color: white;\n        border: none;\n      }\n    }\n  }\n"])))},78:function(e,t,n){var a={"./delete.svg":79,"./left.svg":80,"./money.svg":81,"./right.svg":82,"./statistics.svg":83,"./tags.svg":84,"./write.svg":85};function c(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=s,e.exports=c,c.id=78},79:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"delete",use:"delete-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="delete"><defs><style type="text/css"></style></defs><path d="M842.666667 853.333333H337.066667c-12.8 0-25.6-6.4-34.133334-14.933333L64 539.733333c-12.8-14.933333-12.8-38.4 0-53.333333l238.933333-298.666667c8.533333-10.666667 21.333333-14.933333 34.133334-14.933333h507.733333c64 0 117.333333 51.2 117.333333 117.333333v450.133334c-2.133333 61.866667-53.333333 113.066667-119.466666 113.066666z m-486.4-85.333333h486.4c17.066667 0 32-14.933333 32-32v-448c0-17.066667-14.933333-32-32-32H356.266667L151.466667 512l204.8 256z" p-id="1210" /><path d="M475.733333 667.733333c-10.666667 0-21.333333-4.266667-29.866666-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733333l226.133333-226.133333c17.066667-17.066667 42.666667-17.066667 59.733333 0 17.066667 17.066667 17.066667 42.666667 0 59.733333L505.6 654.933333c-6.4 8.533333-19.2 12.8-29.866667 12.8z" p-id="1211" /><path d="M701.866667 667.733333c-10.666667 0-21.333333-4.266667-29.866667-12.8L445.866667 428.8c-17.066667-17.066667-17.066667-42.666667 0-59.733333 17.066667-17.066667 42.666667-17.066667 59.733333 0l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-19.2 12.8-29.866666 12.8z" p-id="1212" /></symbol>'});r.a.add(i);t.default=i},80:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"left",use:"left-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="left"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff2") format("woff2"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff") format("woff"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.ttf") format("truetype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.svg#iconfont") format("svg"); }</style></defs><path d="M672 160a32 32 0 0 1 22.72 54.72L397.12 512l297.6 297.28a32.128 32.128 0 0 1-45.44 45.44l-320-320a32 32 0 0 1 0-45.44l320-320a32 32 0 0 1 22.72-9.28z" p-id="750" /></symbol>'});r.a.add(i);t.default=i},81:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"money",use:"money-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="money"><defs><style type="text/css"></style></defs><path d="M374.778 321.029c-11.428 11.46-11.985 30.01-0.525 41.432L482.585 471.08v5.446h-86.794c-16.183 0.007-29.298 13.12-29.306 29.306 0.008 16.18 13.123 29.295 29.306 29.295h86.794v58.61h-86.794a29.283 29.283 0 0 0-20.724 8.577 29.286 29.286 0 0 0-8.582 20.717 29.286 29.286 0 0 0 8.582 20.726 29.287 29.287 0 0 0 20.725 8.58h86.794v87.119a29.29 29.29 0 0 0 29.294 29.303 29.288 29.288 0 0 0 29.306-29.303v-87.12h88.9a29.273 29.273 0 0 0 20.729-8.572 29.307 29.307 0 0 0 8.578-20.733 29.287 29.287 0 0 0-8.578-20.726 29.29 29.29 0 0 0-20.728-8.569h-88.9v-58.61h88.9a29.28 29.28 0 0 0 20.72-8.578 29.304 29.304 0 0 0 0.004-41.442 29.288 29.288 0 0 0-20.724-8.581h-88.9v-1.2l108.59-113.428c11.17-11.715 10.985-30.27-0.735-41.428a29.135 29.135 0 0 0-41.288 1.022l-93.032 97.778-98.51-98.3a29.278 29.278 0 0 0-20.728-8.565 29.287 29.287 0 0 0-20.707 8.625z m0 0" p-id="2436" /><path d="M948.87 489.7v21.756h-61.942l0.013 0.944c0 206.801-168.218 375.039-375.015 375.069-206.601 0.037-375.122-168.472-375.122-375.07 0-206.813 168.25-375.063 375.063-375.063l0.368 0.008V74.836l-0.004-0.005c-241.428-0.2-437.903 196.137-437.932 437.523-0.024 241.44 196.137 437.636 437.577 437.631 241.29-0.004 437.581-196.286 437.581-437.585 0-7.608-0.195-15.18-0.588-22.7z m0 0" p-id="2437" /><path d="M522.963 137.295h-10.724v-62.46h10.724c17.25 0 31.231 13.981 31.231 31.232 0 17.246-13.98 31.228-31.231 31.228zM917.9 479.733c-17.105 0-30.965 13.863-30.969 30.964v0.759h61.94v-0.76c-0.007-17.1-13.871-30.963-30.971-30.963zM820.61 83.088a28.048 28.048 0 0 0-39.738 0c-11.007 11.002-11.007 28.85 0 39.79l68.701 68.703h-163.45c-16.157 0.008-29.256 13.108-29.26 29.264a29.245 29.245 0 0 0 29.26 29.256h163.451l-68.7 68.702a28.092 28.092 0 0 0-8.257 19.898 28.099 28.099 0 0 0 8.256 19.897 28.034 28.034 0 0 0 19.87 8.248 28.051 28.051 0 0 0 19.868-8.248l111.704-111.771c9.947-4.685 17.146-14.281 17.146-25.982 0-3.93-1.862-7.203-3.274-10.653-0.171-0.584-0.288-1.17-0.53-1.7-1.227-2.513-2.518-4.613-4.439-6.664-0.585-0.705-0.827-1.528-1.465-2.172-2.172-2.163-4.74-3.507-7.262-4.856-0.526-0.23-0.756-0.814-1.229-0.998L820.611 83.088z m110.651 110.714" p-id="2438" /></symbol>'});r.a.add(i);t.default=i},82:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"right",use:"right-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="right"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff2") format("woff2"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff") format("woff"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.ttf") format("truetype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.svg#iconfont") format("svg"); }</style></defs><path d="M352 864a32 32 0 0 1-22.72-54.72L626.88 512l-297.6-297.28a32.128 32.128 0 0 1 45.44-45.44l320 320a32 32 0 0 1 0 45.44l-320 320a32 32 0 0 1-22.72 9.28z" p-id="1321" /></symbol>'});r.a.add(i);t.default=i},83:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"statistics",use:"statistics-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="statistics"><defs><style type="text/css"></style></defs><path d="M1024.252 0l-209.92 23.04 69.12 69.12-227.84 278.528-236.544-218.624c-15.872-14.848-40.96-14.848-57.344-0.512L14.076 465.408c-17.408 15.872-18.944 43.008-3.072 60.416 8.192 9.216 19.968 13.824 31.744 13.824 10.24 0 20.48-3.584 28.672-10.752l318.464-287.744 241.152 222.72c8.704 8.192 20.48 11.776 31.744 11.264 11.776-1.024 22.528-6.656 30.208-15.36l250.88-306.688 57.344 57.344L1024.252 0z m-890.88 1024h-102.4c-16.896 0-30.72-13.824-30.72-30.72V645.12c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v348.16c0 16.896-13.824 30.72-30.72 30.72z" p-id="5200" /><path d="M420.092 1024h-102.4c-16.896 0-30.72-13.824-30.72-30.72V440.32c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v552.96c0 16.896-13.824 30.72-30.72 30.72z m286.72 0h-102.4c-16.896 0-30.72-13.824-30.72-30.72V593.92c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v399.36c0 16.896-13.824 30.72-30.72 30.72z m286.72 0h-102.4c-16.896 0-30.72-13.824-30.72-30.72V337.92c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v655.36c0 16.896-13.824 30.72-30.72 30.72z" p-id="5201" /></symbol>'});r.a.add(i);t.default=i},84:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"tags",use:"tags-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="tags"><defs><style type="text/css"></style></defs><path d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8c-3.1 3.1-3.1 8.2 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9z m283.8 282.9l-39.6-39.5c-3.1-3.1-8.2-3.1-11.3 0l-362 361.3-237.6-237c-3.1-3.1-8.2-3.1-11.3 0l-39.6 39.5c-3.1 3.1-3.1 8.2 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z" p-id="1259" /></symbol>'});r.a.add(i);t.default=i},85:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),s=n(11),r=n.n(s),i=new c.a({id:"write",use:"write-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="write"><defs><style type="text/css"></style></defs><path d="M791 875.42H215.28c-30.52 0-55.27-24.74-55.27-55.27V240.99c0-30.52 24.74-55.27 55.27-55.27h370.67c15.26 0 27.63 12.37 27.63 27.63s-12.37 27.63-27.63 27.63H256.93c-23 0-41.64 18.64-41.64 41.64V778.5c0 23 18.64 41.64 41.64 41.64h492.42c23 0 41.64-18.64 41.64-41.64V460.54c0-15.26 12.37-27.63 27.63-27.63s27.63 12.37 27.63 27.63v359.61c0.01 30.53-24.73 55.27-55.25 55.27z" p-id="4451" /><path d="M812.67 199c-17.71-17.71-46.42-17.71-64.12 0L407.51 540.04l-59.99 134.32c-3.41 13.06 8.14 25.13 21.34 22.31l139.71-53.41 0.01 0.01L850.7 301.16c17.71-17.71 17.71-46.42 0-64.12L812.67 199z m5.97 70.1l-27.37 27.37-38.03-38.03 27.37-27.37 38.03 38.03zM408.59 648.74c-6.04 4.07-13.1-3.51-8.62-9.25l37.77-67.06 36.97 36.97-66.12 39.34z m61.97-107.62L721.18 290.5l38.03 38.03-250.62 250.62-38.03-38.03z" p-id="4452" /></symbol>'});r.a.add(i);t.default=i}},[[141,1,2]]]);
//# sourceMappingURL=main.8442fe24.chunk.js.map