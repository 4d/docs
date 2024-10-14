"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44074],{897567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var r=t(474848),s=t(28453);const d={id:"upload",title:"$upload"},o=void 0,a={id:"REST/upload",title:"$upload",description:"\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e ID \u3092\u8fd4\u3057\u307e\u3059",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/REST/$upload.md",sourceDirName:"REST",slug:"/REST/upload",permalink:"/docs/ja/20-R5/REST/upload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"upload",title:"$upload"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/ja/20-R5/REST/info"},next:{title:"API (dataClass)",permalink:"/docs/ja/20-R5/category/api-dataclass"}},l={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa",id:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa",level:2},{value:"4D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b",id:"4d-http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e ID \u3092\u8fd4\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u3044\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u5834\u5408\u306b\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092 POST \u3057\u307e\u3059\u3002 \u753b\u50cf\u306e\u5834\u5408\u306b\u306f ",(0,r.jsx)(n.code,{children:"$rawPict=true"})," \u3092\u6e21\u3057\u307e\u3059\u3002 \u305d\u306e\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u5834\u5408\u306f ",(0,r.jsx)(n.code,{children:"$binary=true"})," \u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f 120\u79d2\u3067\u3059\u304c\u3001",(0,r.jsx)(n.code,{children:"$timeout"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u4efb\u610f\u306e\u6570\u5024\u3092\u6e21\u3057\u3066\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa",children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b7\u30ca\u30ea\u30aa"}),"\n",(0,r.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30d4\u30af\u30c1\u30e3\u30fc\u5c5e\u6027\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u3001\u753b\u50cf\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u753b\u50cf (\u307e\u305f\u306f\u4efb\u610f\u306e\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb) \u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30a1\u30a4\u30eb\u81ea\u4f53\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e ",(0,r.jsx)(n.strong,{children:"\u30dc\u30c7\u30a3"})," \u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306b\u3001\u4e0b\u306e\u3088\u3046\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u9078\u629e\u3057\u305f\u753b\u50cf\u3092 4D Server \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,r.jsx)(n.p,{children:"\u305d\u306e\u7d50\u679c\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u8b58\u5225\u3059\u308b ID \u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u753b\u50cf\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u8fd4\u3055\u308c\u305f ID \u3092\u4f7f\u3044 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/REST/method#methodupdate",children:(0,r.jsx)(n.code,{children:"$method=update"})})," \u3067\u753b\u50cf\u5c5e\u6027\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u30ea\u30af\u30a8\u30b9\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"POST \u30c7\u30fc\u30bf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"\u66f4\u65b0\u5f8c\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u8fd4\u3055\u308c\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4d-http\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b",children:"4D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b21\u306e\u4f8b\u3067\u306f\u30014D HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.jsx)(n.em,{children:".pdf"})," \u30d5\u30a1\u30a4\u30eb\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" // REST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6e96\u5099\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) // \u30d0\u30a4\u30ca\u30ea\u306e\u8aad\u307f\u8fbc\u307f\n\n // \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e 1\u3064\u76ee\u306e POST\u30ea\u30af\u30a8\u30b9\u30c8\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306e 2\u3064\u76ee\u306e\u30ea\u30af\u30a8\u30b9\u30c8\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(296540);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);