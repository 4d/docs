"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27277"],{602770:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"REST/authUsers","title":"\u30E6\u30FC\u30B6\u30FC\u3068\u30BB\u30C3\u30B7\u30E7\u30F3","description":"\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/ja/18/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"authUsers","title":"\u30E6\u30FC\u30B6\u30FC\u3068\u30BB\u30C3\u30B7\u30E7\u30F3"},"sidebar":"docs","previous":{"title":"\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A","permalink":"/docs/ja/18/REST/configuration"},"next":{"title":"\u30B5\u30FC\u30D0\u30FC\u60C5\u5831\u306E\u53D6\u5F97","permalink":"/docs/ja/18/REST/genInfo"}}'),o=s("785893"),t=s("250065");let a={id:"authUsers",title:"\u30E6\u30FC\u30B6\u30FC\u3068\u30BB\u30C3\u30B7\u30E7\u30F3"},i=void 0,d={},c=[{value:"\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C",id:"\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C",level:2},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3cookie",id:"\u30BB\u30C3\u30B7\u30E7\u30F3cookie",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C",children:"\u30E6\u30FC\u30B6\u30FC\u8A8D\u8A3C"}),"\n",(0,o.jsx)(n.p,{children:"4D Server\u4E0A\u3067 REST\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304F\u306B\u306F\u3001\u307E\u305A\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u304C\u8A8D\u8A3C\u3055\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30E6\u30FC\u30B6\u30FC\u3092\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u306B\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092 ",(0,o.jsx)(n.a,{href:"/docs/ja/18/REST/directory#directorylogin",children:(0,o.jsx)(n.code,{children:"$directory/login"})})," \u306B\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u30E6\u30FC\u30B6\u30FC\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u540C\u6642\u306B\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u304B\u308C\u307E\u3059\u3002 \u4EE5\u964D\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u304A\u3051\u308B\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u306E\u6271\u3044\u65B9\u306B\u3064\u3044\u3066\u306F\u3001\u5F8C\u8FF0\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3059\u308B\u3068\u81EA\u52D5\u7D42\u4E86\u3057\u307E\u3059\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3cookie",children:"\u30BB\u30C3\u30B7\u30E7\u30F3cookie"}),"\n",(0,o.jsx)(n.p,{children:"4D Server\u4E0A\u3067\u306F\u3001\u5404 REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5C02\u7528\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u4ECB\u3057\u3066\u51E6\u7406\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u6700\u521D\u306E\u6709\u52B9\u306A REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u30B5\u30FC\u30D0\u30FC\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u751F\u6210\u3057\u3001",(0,o.jsx)(n.strong,{children:'"Set-Cookie" \u30EC\u30B9\u30DD\u30F3\u30B9\u30D8\u30C3\u30C0\u30FC'})," \u306B\u3001\u30BB\u30C3\u30B7\u30E7\u30F3UUID \u3092\u683C\u7D0D\u3057\u305F ",(0,o.jsx)(n.code,{children:"WASID4D"})," \u3068\u3044\u3046\u540D\u524D\u306E\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u3092\u8FD4\u3057\u307E\u3059\u3002\u4F8B:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4EE5\u964D\u306E REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001",(0,o.jsx)(n.strong,{children:'"Cookie" \u30EA\u30AF\u30A8\u30B9\u30C8\u30D8\u30C3\u30C0\u30FC'})," \u306B\u3053\u306E cookie \u3092\u542B\u3081\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u540C\u3058\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3057\u7D9A\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305D\u3046\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u65B0\u898F\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u304B\u308C\u308B\u3053\u3068\u3068\u306A\u308A\u3001\u3057\u305F\u304C\u3063\u3066\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5225\u9014\u6D88\u8CBB\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,o.jsxs)(n.p,{children:["\u5B9F\u969B\u306E\u3068\u3053\u308D\u3001\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u306E\u6271\u3044\u306F HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u5BC4\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u984C\u3067\u306F\u30014D \u306E ",(0,o.jsx)(n.code,{children:"HTTP Request"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u5834\u5408\u306B\u3001\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u3092\u62BD\u51FA\u3057\u3001\u518D\u9001\u4FE1\u3059\u308B\u65B9\u6CD5\u3092\u793A\u3057\u307E\u3059:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// \u30D8\u30C3\u30C0\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n// \u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306F "kind user" \u3068\u3044\u3046\u30E6\u30FC\u30B6\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304D\u307E\u3059\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n// \u4EE5\u964D\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u30D8\u30C3\u30C0\u30FC\u7528\u306B cookie WASID4D \u306E\u307F\u3092\u683C\u7D0D\u3057\u305F\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\nbuildHeader(->headerNames;->headerValues)\n\n// \u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u65B0\u898F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304D\u307E\u305B\u3093\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'// buildHeader \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let o={},t=r.createContext(o);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);