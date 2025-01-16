"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37094"],{250130:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/web-send-text","title":"WEB SEND TEXT","description":"WEB SEND TEXT ( htmlText {; type} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-text.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-text","permalink":"/docs/ja/commands/web-send-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-text","title":"WEB SEND TEXT","slug":"/commands/web-send-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND RAW DATA","permalink":"/docs/ja/commands/web-send-raw-data"},"next":{"title":"WEB Server","permalink":"/docs/ja/commands/web-server"}}'),d=t("785893"),r=t("250065");let c={id:"web-send-text",title:"WEB SEND TEXT",slug:"/commands/web-send-text",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB SEND TEXT"})," ( ",(0,d.jsx)(n.em,{children:"htmlText"})," {; ",(0,d.jsx)(n.em,{children:"type"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"htmlText"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Web\u30D6\u30E9\u30A6\u30B6\u3078\u9001\u3089\u308C\u308BHTML\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9 \u307E\u305F\u306F\u5909\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"type"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"MIME\u578B"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB SEND TEXT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001 HTML\u306B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u30C7\u30FC\u30BF\u3092\u76F4\u63A5\u9001\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"htmlText"})," \u306F\u9001\u308B\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\u30024D\u306F\u5F15\u6570\u306E\u5185\u5BB9\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u305B\u3093\u306E\u3067\u3001HTML\u304C\u6B63\u78BA\u306B\u30B3\u30FC\u30C9\u5316\u3055\u308C\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u306E4D\u5909\u6570\u3068 ",(0,d.jsx)(n.em,{children:"4DSCRIPT"})," \u578B\u30BF\u30B0\u3078\u306E\u53C2\u7167\u306F\u5168\u3066\u89E3\u6790\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"type"}),' \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u30014D\u306F\u9001\u4FE1\u3055\u308C\u305F\u30C7\u30FC\u30BF\u304C "text/html" \u578B\u3067\u3042\u308B\u3068\u81EA\u52D5\u7684\u306B\u5224\u65AD\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F ',(0,d.jsx)(n.a,{href:"/docs/ja/commands/web-send-blob",children:"WEB SEND BLOB"}),' \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066 "text/html" \u578B\u306EBLOB\u3092\u9001\u4FE1\u3057\u305F\u306E\u3068\u540C\u4E00\u306E\u6319\u52D5\u3092\u3057\u307E\u3059\u3002',(0,d.jsx)(n.br,{}),"\n\u307E\u305F\u3001 ",(0,d.jsx)(n.em,{children:"type"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u9001\u4FE1\u3057\u305F\u3044\u30C6\u30AD\u30B9\u30C8\u306EMIME\u578B\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308BMIME\u578B\u306B\u95A2\u3057\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306F\u3001 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/web-send-blob",children:"WEB SEND BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $content_t : Text\n\xa0var $blob_x : Blob\n\xa0$content_t:=""\n\xa0$content_t:=$content_t+String(Current time)\n\xa0$content_t:=$content_t+""\n\xa0\n\xa0\xa0// \u4EE5\u4E0B\u306E\u4E8C\u884C\u3092\n\xa0TEXT TO BLOB($content_t;$blob_x;UTF8 text without length)\n\xa0WEB SEND BLOB($blob_x;"text/html")\n\xa0\n\xa0\xa0// \u4E00\u884C\u3067\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\xa0WEB SEND TEXT($content_t)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"677"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let d={},r=s.createContext(d);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);