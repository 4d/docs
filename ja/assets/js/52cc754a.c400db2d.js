/*! For license information please see 52cc754a.c400db2d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57609],{373745:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>A,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=s(474848),r=s(28453);const o={id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},i=void 0,d={id:"REST/authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",description:"REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3 \u306e\u6069\u6075\u3092\u53d7\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8907\u6570\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3084\u3001Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c7\u30fc\u30bf\u5171\u6709\u3001\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u306a\u3069\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/ja/20-R4/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},sidebar:"docs",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",permalink:"/docs/ja/20-R4/REST/configuration"},next:{title:"\u30b5\u30fc\u30d0\u30fc\u60c5\u5831\u306e\u53d6\u5f97",permalink:"/docs/ja/20-R4/REST/genInfo"}},c={},l=[{value:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",id:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",level:2},{value:"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb",id:"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb",level:2},{value:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/WebServer/sessions",children:"Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3"})," \u306e\u6069\u6075\u3092\u53d7\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8907\u6570\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3084\u3001Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c7\u30fc\u30bf\u5171\u6709\u3001\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u306a\u3069\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"4D Server\u4e0a\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u306b\u306f\u3001\u307e\u305a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u8a8d\u8a3c\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c",children:"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30d8\u30c3\u30c0\u30fc\u306b\u542b\u3081\u305f POST\u30ea\u30af\u30a8\u30b9\u30c8\u5185\u3067 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/REST/directory#directorylogin",children:(0,t.jsx)(n.code,{children:"$directory/login"})})," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f ",(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9 (\u5b58\u5728\u3059\u308c\u3070) \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb",children:"\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316"})," (\u63a8\u5968) \u3057\u3066\u3044\u308b\u5834\u5408\u306b\u3001",(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c ",(0,t.jsx)(n.code,{children:"true"})," \u3092\u8fd4\u3059\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u81ea\u52d5\u7684\u306b\u958b\u304b\u308c\u3001",(0,t.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304a\u3088\u3073 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/API/SessionClass",children:"Session API"})," \u3092\u4ecb\u3057\u3066\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5f8c\u7d9a\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u306a\u3044\u5834\u5408\u306b\u306f\u3001",(0,t.jsx)(n.code,{children:"guest"})," \u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",children:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9"}),"\n",(0,t.jsxs)(n.p,{children:["4D Server\u4e0a\u3067\u306f\u3001",(0,t.jsx)(n.strong,{children:"\u30a4\u30f3\u30bf\u30d7\u30ea\u30bf\u30e2\u30fc\u30c9\u3067\u3042\u3063\u3066\u3082"}),"\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u81ea\u52d5\u7684\u306b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001\u30b3\u30fc\u30c9\u306f ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/WebServer/preemptiveWeb#%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E3%82%BB%E3%83%BC%E3%83%95%E3%81%AAWeb%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9",children:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u5b9f\u884c\u306b\u6e96\u62e0"})," \u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fcWeb\u30b3\u30fc\u30c9\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u306b\u306f\u3001\u3042\u3089\u304b\u3058\u3081\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/Debugging/debugging-remote",children:"\u30b5\u30fc\u30d0\u30fc"})," \u307e\u305f\u306f ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/Debugging/debugging-remote#%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%884d%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%AC%E3%83%BC%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3"})," \u3067\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001Web\u30d7\u30ed\u30bb\u30b9\u304c\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u308f\u308a\u3001Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u30c7\u30d0\u30c3\u30b0\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u306e 4D \u3067\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30b3\u30fc\u30c9\u306f\u5e38\u306b\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c html\u30da\u30fc\u30b8\u306b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3001POST \u3067 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R4/REST/directory#directorylogin",children:(0,t.jsx)(n.code,{children:"$directory/login"})})," \u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059 (html\u30da\u30fc\u30b8\u306e\u9001\u4fe1\u306b\u304a\u3044\u3066\u306f\u3001HTTPS\u63a5\u7d9a\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059)\u3002 \u3053\u308c\u306b\u3088\u3066\u547c\u3073\u51fa\u3055\u308c\u305f ",(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u3092\u304a\u3053\u306a\u3044\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"html\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"alt-text",src:s(428043).A+"",width:"268",height:"85"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n\u30d1\u30b9\u30ef\u30fc\u30c9: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\n\u30ed\u30b0\u30a4\u30f3\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">\u30ed\u30b0\u30a4\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); // REST\u30b5\u30fc\u30d0\u30fc\u30a2\u30c9\u30ec\u30b9\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u306b\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u304c\u9001\u4fe1\u3055\u308c\u308b\u3068\u3001",(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'    // On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    // \u30d8\u30c3\u30c0\u30fc\u306b username-4D \u3068 password-4D \u3092\u542b\u3081\u3066 \'/rest\' URL \u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3057\u305f\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4e00\u65e6\u547c\u3073\u51fa\u3055\u308c\u3066 ",(0,t.jsx)(n.code,{children:"True"})," \u3092\u8fd4\u3059\u3068\u3001\u540c\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066 ",(0,t.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u305d\u308c\u4ee5\u4e0a\u547c\u3073\u51fa\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fillSession"})," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u305f\u3068\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u521d\u671f\u5316\u3057\u307e\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n'})})]})}function A(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,o={},l=null,a=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:l,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},428043:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);