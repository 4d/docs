"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17332"],{586281:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/register-data-key","title":"Register data key","description":"Register data key ( curPassPhrase | curDataKey ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/register-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/register-data-key","permalink":"/docs/ja/commands/register-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"register-data-key","title":"Register data key","slug":"/commands/register-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New data key","permalink":"/docs/ja/commands/new-data-key"},"next":{"title":"Database Methods","permalink":"/docs/ja/category/database-methods"}}'),a=s("785893"),r=s("250065");let d={id:"register-data-key",title:"Register data key",slug:"/commands/register-data-key",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Register data key"})," ( curPassPhrase | curDataKey ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u5F15\u6570"}),(0,a.jsx)(n.th,{children:"\u578B"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"curPassPhrase | curDataKey"}),(0,a.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA(\u30C6\u30AD\u30B9\u30C8)\u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC(\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"\u6697\u53F7\u5316\u30AD\u30FC\u304C\u6B63\u5E38\u306B4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u5834\u5408\u306B\u306FTrue\u3001\u30AD\u30FC\u304C\u3059\u3067\u306B4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u5165\u3063\u3066\u3044\u305F\u5834\u5408\u306B\u306FFlase\u3092\u8FD4\u3059"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Register data key"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC\u30924D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306F\u3001\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u4E00\u3064\u4EE5\u4E0A\u306E\u6697\u53F7\u5316\u30AD\u30FC\u306E\u30BB\u30C3\u30C8\u306E\u3053\u3068\u3067\u30014D \u306F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u5FA9\u53F7\u5316/\u6697\u53F7\u5316\u3059\u308B\u305F\u3081\u306B\u30C7\u30FC\u30BF\u30AD\u30FC\u304C\u5FC5\u8981\u306B\u306A\u308B\u3068\u304D\u306B\u306F\u81EA\u52D5\u7684\u306B\u305D\u308C\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u307E\u3059\u3002\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,a.jsx)(n.em,{children:"\u30C7\u30FC\u30BF\u306E\u6697\u53F7\u5316"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u7B2C\u4E00\u5F15\u6570\u306B\u306F\u3001\u8FFD\u52A0\u3059\u308B\u6697\u53F7\u5316\u30AD\u30FC\u3092\u5B9A\u7FA9\u3059\u308B\u3001",(0,a.jsx)(n.em,{children:"curPassPhrase"})," \u5F15\u6570\u307E\u305F\u306F ",(0,a.jsx)(n.em,{children:"curDataKey"})," \u5F15\u6570\u306E\u3069\u3061\u3089\u304B\u3092\u6E21\u3057\u3066\u304F\u3060\u3055\u3044:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"curPassPhrase"}),": \u6697\u53F7\u5316\u30AD\u30FC\u3092\u751F\u6210\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F\u6587\u5B57\u5217\u3002\u3053\u306E\u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u6697\u53F7\u5316\u30AD\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"curDataKey"}),": \u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC\u3092\u683C\u7D0D\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(",(0,a.jsx)(n.em,{children:"encodedKey"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064)\u3002\u3053\u306E\u30AD\u30FC\u306F",(0,a.jsx)(n.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})," \u30B3\u30DE\u30F3\u30C9\u3067\u751F\u6210\u3055\u308C\u305F\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u8FD4\u3055\u308C\u308B\u5024"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u6697\u53F7\u5316\u30AD\u30FC\u304C4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u6B63\u5E38\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u5834\u5408\u306B\u306F",(0,a.jsx)(n.strong,{children:"True"})]}),"\n",(0,a.jsxs)(n.li,{children:["4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306E\u4E2D\u306B\u540C\u3058\u6697\u53F7\u5316\u30AD\u30FC\u304C\u65E2\u306B\u3042\u3063\u305F\u5834\u5408\u306B\u306F",(0,a.jsx)(n.strong,{children:"False"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $passphrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Enter the passphrase:")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\n\xa0\n\xa0\xa0\xa0\xa0OPEN DATA FILE("data.4DD")\xa0//4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306E\u4E2D\u306B\u5165\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u3053\u3053\u3067\u306F\u30AD\u30FC\u306F\u5FC5\u8981\u306A\u3044\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let a={},r=t.createContext(a);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);