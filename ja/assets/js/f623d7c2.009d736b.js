"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96893"],{704644:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"REST/upload","title":"$upload","description":"\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u8FD4\u3057\u307E\u3059","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/REST/$upload.md","sourceDirName":"REST","slug":"/REST/upload","permalink":"/docs/ja/18/REST/upload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24upload.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"upload","title":"$upload"},"sidebar":"docs","previous":{"title":"$info","permalink":"/docs/ja/18/REST/info"},"next":{"title":"{dataClass}","permalink":"/docs/ja/18/REST/{dataClass}"}}'),o=t("785893"),s=t("250065");let d={id:"upload",title:"$upload"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u4F8B",id:"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u4F8B",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E ID \u3092\u8FD4\u3057\u307E\u3059"}),"\n",(0,o.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u305F\u3044\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308B\u5834\u5408\u306B\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092 POST \u3057\u307E\u3059\u3002 \u753B\u50CF\u306E\u5834\u5408\u306B\u306F ",(0,o.jsx)(n.code,{children:"$rawPict=true"})," \u3092\u6E21\u3057\u307E\u3059\u3002 \u305D\u306E\u4ED6\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u5408\u306F ",(0,o.jsx)(n.code,{children:"$binary=true"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 120\u79D2\u3067\u3059\u304C\u3001",(0,o.jsx)(n.code,{children:"$timeout"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u4EFB\u610F\u306E\u6570\u5024\u3092\u6E21\u3057\u3066\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u4F8B",children:"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306E\u4F8B"}),"\n",(0,o.jsx)(n.p,{children:"\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u524D\u306B\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u4F7F\u7528\u306E\u305F\u3081\u306E HTML 5 \u30D3\u30EB\u30C8\u30A4\u30F3 API \u3092\u4F7F\u3063\u3066\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4E0A\u3067\u5BFE\u8C61\u3068\u306A\u308B\u30D5\u30A1\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u9078\u629E\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u3092\u9069\u5207\u306B\u6271\u3046\u305F\u3081\u30014D \u306F\u30D5\u30A1\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E MIME\u30BF\u30A4\u30D7\u5C5E\u6027\u3092\u4F7F\u3044\u307E\u3059\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u6B21\u306B\u30014D Server \u306B\u9078\u629E\u3057\u305F\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/$upload?$rawPict=true"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }'})}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306E\u753B\u50CF\u3092\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u8FD4\u3055\u308C\u305F ID \u3092\u4F7F\u3044 ",(0,o.jsx)(n.a,{href:"/docs/ja/18/REST/method#methodupdate",children:(0,o.jsx)(n.code,{children:"$method=update"})})," \u3067\u753B\u50CF\u5C5E\u6027\u306B\u4FDD\u5B58\u3057\u307E\u3059:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee/?$method=update"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"POST \u30C7\u30FC\u30BF"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    __KEY: "12",\n    __STAMP: 4,\n    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } \n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"\u66F4\u65B0\u5F8C\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "__KEY": "12", \n    "__STAMP": 5, \n    "uri": "http://127.0.0.1:8081/rest/Employee(12)", \n    "ID": 12, \n    "firstName": "John", \n    "firstName": "Smith",\n    "photo":\n    {\n        "__deferred":\n        {\n            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",\n            "image": true\n        }\n    },}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);