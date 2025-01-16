"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29023"],{502697:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/upload","title":"$upload","description":"\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u8FD4\u3057\u307E\u3059","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/$upload.md","sourceDirName":"REST","slug":"/REST/upload","permalink":"/docs/ja/20-R7/REST/upload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"upload","title":"$upload"},"sidebar":"docs","previous":{"title":"$singleton","permalink":"/docs/ja/20-R7/REST/singleton"},"next":{"title":"API (dataClass)","permalink":"/docs/ja/20-R7/category/api-dataclass"}}'),s=t("785893"),d=t("250065");let o={id:"upload",title:"$upload"},a=void 0,l={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30B7\u30CA\u30EA\u30AA",id:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30B7\u30CA\u30EA\u30AA",level:2},{value:"4D HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u4F8B",id:"4d-http\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u4F8B",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u8FD4\u3057\u307E\u3059"}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u3044\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308B\u5834\u5408\u306B\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092 POST \u3057\u307E\u3059\u3002 \u753B\u50CF\u306E\u5834\u5408\u306B\u306F ",(0,s.jsx)(n.code,{children:"$rawPict=true"})," \u3092\u6E21\u3057\u307E\u3059\u3002 \u305D\u306E\u4ED6\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u5408\u306F ",(0,s.jsx)(n.code,{children:"$binary=true"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 120\u79D2\u3067\u3059\u304C\u3001",(0,s.jsx)(n.code,{children:"$timeout"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u4EFB\u610F\u306E\u6570\u5024\u3092\u6E21\u3057\u3066\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30B7\u30CA\u30EA\u30AA",children:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30B7\u30CA\u30EA\u30AA"}),"\n",(0,s.jsx)(n.p,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u5C5E\u6027\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306B\u3001\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u753B\u50CF (\u307E\u305F\u306F\u4EFB\u610F\u306E\u30D0\u30A4\u30CA\u30EA\u30D5\u30A1\u30A4\u30EB) \u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3066\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u81EA\u4F53\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u306E ",(0,s.jsx)(n.strong,{children:"\u30DC\u30C7\u30A3"})," \u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6B21\u306B\u3001\u4E0B\u306E\u3088\u3046\u306A\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u9078\u629E\u3057\u305F\u753B\u50CF\u3092 4D Server \u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,s.jsx)(n.p,{children:"\u305D\u306E\u7D50\u679C\u3001\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u8B58\u5225\u3059\u308B ID \u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u753B\u50CF\u3092\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u8FD4\u3055\u308C\u305F ID \u3092\u4F7F\u3044 ",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/REST/method#methodupdate",children:(0,s.jsx)(n.code,{children:"$method=update"})})," \u3067\u753B\u50CF\u5C5E\u6027\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002 \u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST \u30C7\u30FC\u30BF"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"\u66F4\u65B0\u5F8C\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4d-http\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u4F8B",children:"4D HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u4F8B"}),"\n",(0,s.jsxs)(n.p,{children:["\u6B21\u306E\u4F8B\u3067\u306F\u30014D HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,s.jsx)(n.em,{children:".pdf"})," \u30D5\u30A1\u30A4\u30EB\u3092\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $params : Text\nvar $response : Object\nvar $result : Integer\nvar $blob : Blob\n\n\nARRAY TEXT($headerNames; 1)\nARRAY TEXT($headerValues; 1)\n\n$url:="localhost:80/rest/$upload?$binary=true" // REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6E96\u5099\n\n$headerNames{1}:="Content-Type"\n$headerValues{1}:="application/octet-stream"\n\nDOCUMENT TO BLOB("c:\\\\invoices\\\\inv003.pdf"; $blob) // \u30D0\u30A4\u30CA\u30EA\u306E\u8AAD\u307F\u8FBC\u307F\n\n // \u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u305F\u3081\u306E 1\u3064\u76EE\u306E POST\u30EA\u30AF\u30A8\u30B9\u30C8\n$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)\n\nIf ($result=200) \n    var $data : Object\n    $data:=New object\n    $data.__KEY:="3"\n    $data.__STAMP:="3"\n    $data.pdf:=New object("ID"; String($response.ID)) \n\n    $url:="localhost:80/rest/Invoices?$method=update" // \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u66F4\u65B0\u3059\u308B\u305F\u3081\u306E 2\u3064\u76EE\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\n\n    $headerNames{1}:="Content-Type"\n    $headerValues{1}:="application/json"\n\n    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)\nElse\n    ALERT(String($result)+" Error")\nEnd if\n'})})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);