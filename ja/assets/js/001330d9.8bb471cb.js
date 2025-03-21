"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39683"],{825866:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/http-get-certificates-folder","title":"HTTP Get certificates folder","description":"HTTP Get certificates folder  : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-get-certificates-folder.md","sourceDirName":"commands-legacy","slug":"/commands/http-get-certificates-folder","permalink":"/docs/ja/commands/http-get-certificates-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-get-certificates-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-get-certificates-folder","title":"HTTP Get certificates folder","slug":"/commands/http-get-certificates-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Get","permalink":"/docs/ja/commands/http-get"},"next":{"title":"HTTP GET OPTION","permalink":"/docs/ja/commands/http-get-option"}}'),r=n("785893"),i=n("250065");let d={id:"http-get-certificates-folder",title:"HTTP Get certificates folder",slug:"/commands/http-get-certificates-folder",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5F15\u6570"}),(0,r.jsx)(t.th,{children:"\u578B"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u8A3C\u660E\u66F8\u30D5\u30A9\u30EB\u30C0\u306E\u5B8C\u5168\u306A\u30D1\u30B9\u540D"})]})})]}),"\n",(0,r.jsx)(t.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:(0,r.jsxs)(t.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E92\u63DB\u6027\u306E\u305F\u3081\u3060\u3051\u306B\u7DAD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u73FE\u5728\u306F ",(0,r.jsx)(t.a,{href:"/docs/ja/API/HTTPRequestClass",children:(0,r.jsx)(t.code,{children:"4D.HTTPRequest \u30AF\u30E9\u30B9"})})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})}),"\n",(0,r.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"HTTP Get certificates folder"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u8A3C\u660E\u66F8\u30D5\u30A9\u30EB\u30C0\u306E\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:['\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30014D \u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u3068\u306A\u308A\u306B\u4F5C\u6210\u3055\u308C\u305F "ClientCertificatesFolder" \u3068\u3044\u3046\u30D5\u30A9\u30EB\u30C0\u3092\u4F7F\u7528\u3057\u307E\u3059(\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u4F5C\u6210\u3055\u308C\u307E\u3059)\u3002 ',(0,r.jsx)(t.a,{href:"/docs/ja/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u30E6\u30FC\u30B6\u30FC\u5B9A\u7FA9\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(t.p,{children:"\u8A3C\u660E\u66F8\u30D5\u30A9\u30EB\u30C0\u3092\u4E00\u6642\u7684\u306B\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $certifFolder : Text\n\xa0$certifFolder :=HTTP Get certificates folder\xa0//\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30EB\u30C0\u3092\u4FDD\u5B58\n\xa0HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")\n\xa0...\xa0// \u7279\u5B9A\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u5B9F\u884C\n\xa0HTTP SET CERTIFICATES FOLDER($certifFolder)\xa0//\u4EE5\u524D\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u5FA9\u5143\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/ja/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})}),"\n",(0,r.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(t.td,{children:"1307"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);