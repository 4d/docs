"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64238"],{93252:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/web-service-get-result","title":"WEB SERVICE GET RESULT","description":"WEB SERVICE GET RESULT ( returnValue {; returnName {; *}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-get-result.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-result","permalink":"/docs/ja/commands/web-service-get-result","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-result.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-get-result","title":"WEB SERVICE GET RESULT","slug":"/commands/web-service-get-result","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE Get info","permalink":"/docs/ja/commands/web-service-get-info"},"next":{"title":"WEB SERVICE SET OPTION","permalink":"/docs/ja/commands/web-service-set-option"}}'),s=t("785893"),c=t("250065");let d={id:"web-service-get-result",title:"WEB SERVICE GET RESULT",slug:"/commands/web-service-get-result",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB SERVICE GET RESULT"})," ( ",(0,s.jsx)(n.em,{children:"returnValue"})," {; ",(0,s.jsx)(n.em,{children:"returnName"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"returnValue"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u8FD4\u3055\u308C\u305F\u5024"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"returnName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u53D6\u5F97\u3059\u308B\u5F15\u6570\u306E\u540D\u524D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30E1\u30E2\u30EA\u3092\u89E3\u653E"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB SERVICE GET RESULT"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u884C\u308F\u308C\u305F\u51E6\u7406\u306E\u7D50\u679C\u3068\u3057\u3066Web\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u8FD4\u3055\u308C\u305F\u7D50\u679C\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-service-call",children:"WEB SERVICE CALL"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5F8C\u306B\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"returnValue"})," \u5F15\u6570\u306FWeb\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u9001\u308A\u8FD4\u3055\u308C\u305F\u5024\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F4D\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5909\u6570\u306F\u901A\u5E38\u3001\u30D7\u30ED\u30AF\u30B7\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u308B\u5024\u306B\u5BFE\u5FDC\u3059\u308B$0\u3067\u3059\u3002\u3057\u304B\u3057\u4E2D\u9593\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059 (\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u307F)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8"})," ",(0,s.jsx)(n.strong,{children:":"})," \u4F7F\u7528\u3059\u308B4D\u306E\u5909\u6570\u3084\u914D\u5217\u306F\u3001\u4E8B\u524D\u306B",(0,s.jsx)(n.em,{children:"\u30B3\u30F3\u30D1\u30A4\u30E9"}),"\u307E\u305F\u306F",(0,s.jsx)(n.em,{children:"\u914D\u5217"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5BA3\u8A00\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,s.jsx)(n.em,{children:"returnName"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u53D6\u5F97\u3059\u308B\u5F15\u6570\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u307B\u3068\u3093\u3069\u306EWeb\u30B5\u30FC\u30D3\u30B9\u306F1\u3064\u306E\u5024\u3057\u304B\u8FD4\u3055\u306A\u3044\u306E\u3067\u3001\u901A\u5E38\u3053\u306E\u5F15\u6570\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,s.jsx)(n.em,{children:"*"})," \u5F15\u6570\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u51E6\u7406\u306B\u4F7F\u7528\u3057\u305F\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3059\u308B\u3088\u3046\u6307\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306FWeb\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u8FD4\u3055\u308C\u305F\u6700\u5F8C\u306E\u5024\u3092\u53D6\u5F97\u3057\u3066\u304B\u3089\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"Web\u30B5\u30FC\u30D3\u30B9\u304C\u3042\u308B\u90FD\u5E02\u306E\u6642\u9593\u3092\u8FD4\u3059\u3068\u3057\u307E\u3059\u3002Web\u30B5\u30FC\u30D3\u30B9\u306B\u6E21\u3059\u5F15\u6570\u306F\u90FD\u5E02\u540D\u3068\u56FD\u30B3\u30FC\u30C9\u3067\u3059\u3002Web\u30B5\u30FC\u30D3\u30B9\u306F\u5BFE\u5FDC\u3059\u308B\u6642\u9593\u3092\u8FD4\u3057\u307E\u3059\u3002\u547C\u3073\u51FA\u3057\u30D7\u30ED\u30AF\u30B7\u30E1\u30BD\u30C3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var $2 : Text\n\xa0var $0 : Time\n\xa0\n\xa0WEB SERVICE SET PARAMETER("city";$1)\n\xa0WEB SERVICE SET PARAMETER("country_code";$2)\n\xa0\n\xa0WEB SERVICE CALL("http://www.citiesoftheworld.com/WS";"WSTime#City_time";"City_time";"http://www.citiesoftheworld.com/namespace/default")\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0WEB SERVICE GET RESULT($0;"return";*)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},c=r.createContext(s);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);