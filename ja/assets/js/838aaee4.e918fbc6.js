"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84919"],{871331:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/web-set-http-header","title":"WEB SET HTTP HEADER","description":"WEB SET HTTP HEADER ( header )WEB SET HTTP HEADER ( fieldArray ; valueArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-set-http-header.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-http-header","permalink":"/docs/ja/commands/web-set-http-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-http-header.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-set-http-header","title":"WEB SET HTTP HEADER","slug":"/commands/web-set-http-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET HOME PAGE","permalink":"/docs/ja/commands/web-set-home-page"},"next":{"title":"WEB SET OPTION","permalink":"/docs/ja/commands/web-set-option"}}'),t=r("785893"),d=r("250065");let l={id:"web-set-http-header",title:"WEB SET HTTP HEADER",slug:"/commands/web-set-http-header",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",version:"version",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"header"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"WEB SET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"fieldArray"})," ; ",(0,t.jsx)(n.em,{children:"valueArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"header|fieldArray"}),(0,t.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u30C6\u30AD\u30B9\u30C8\u914D\u5217"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8HTTP\u30D8\u30C3\u30C0\u30FC\u3092\u683C\u7D0D\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3001\u307E\u305F\u306FHTTP\u30D8\u30C3\u30C0\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueArray"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"HTTP\u30D8\u30C3\u30C0\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u30B3\u30F3\u30C6\u30F3\u30C4"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SET HTTP HEADER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30014D\u304B\u3089Web\u30D6\u30E9\u30A6\u30B6\u30FC\u3078\u9001\u4FE1\u3055\u308C\u308BHTTP\u30D8\u30C3\u30C0\u30FC\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FWeb\u30D7\u30ED\u30BB\u30B9\u3067\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),'\n\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067 "Cookie" \u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002']}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u30012\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["1\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9**:** ",(0,t.jsx)(n.strong,{children:"WEB SET HTTP HEADER"})," (header)",(0,t.jsx)(n.br,{}),"\n\u8A2D\u5B9A\u3057\u305F\u3044\u30C6\u30AD\u30B9\u30C8\u30BF\u30A4\u30D7 (\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9) \u306EHTTP\u30D8\u30C3\u30C0\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u3092 \u5F15\u6570 ",(0,t.jsx)(n.em,{children:"fields"})," \u306B\u6E21\u3057\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),'\n\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001"HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO" \u306E\u3088\u3046\u306B\u30D8\u30C3\u30C0\u30FC\u3092\u8A18\u8FF0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002Windows \u3068 Mac OS\u4E0A\u3067\u306F\u3001\u30D8\u30C3\u30C0\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3001CR \u307E\u305F\u306F CR+LF (\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3 + \u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9) \u30B7\u30FC\u30B1\u30F3\u30B9\u3067\u533A\u5207\u3089\u308C\u3066\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u30024D\u304C\u305D\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3057\u307E\u3059\u3002']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'\u30AB\u30B9\u30BF\u30E0 "Cookie" \u306E\u4F8B\u3092\u793A\u3057\u307E\u3059:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vTcookie : Text\n\xa0$vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"\n\xa0WEB SET HTTP HEADER($vTcookie)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["**",(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"header"})," \u3068\u3057\u3066\u3001\u30EA\u30C6\u30E9\u30EB\u30C6\u30AD\u30B9\u30C8\u3092\u53D7\u3051\u5165\u308C\u307E\u305B\u3093\u30024D\u306E\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["HTTP\u30D8\u30C3\u30C0\u30FC\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,t.jsx)(n.a,{href:"http://www.w3c.org/",children:"http://www.w3c.org"})," \u306ERFC (Request For Comments) \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["2\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9 ",(0,t.jsx)(n.strong,{children:":"})," ",(0,t.jsx)(n.strong,{children:"WEB SET HTTP HEADER"})," (fieldArray; valueArray)",(0,t.jsx)(n.br,{}),"\n2\u3064\u306E\u30C6\u30AD\u30B9\u30C8\u914D\u5217 ",(0,t.jsx)(n.em,{children:"fieldArray"})," \u3068 ",(0,t.jsx)(n.em,{children:"valueArray"})," \u3092\u901A\u3057\u3066\u3001HTTP\u30D8\u30C3\u30C0\u30FC\u306F\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30D8\u30C3\u30C0\u30FC\u3092\u8A18\u8FF0\u3057\u307E\u3059:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0fieldArray{1}:="X-VERSION"\n\xa0fieldArray{2}:="X-STATUS"\n\xa0fieldArray{3}:="Set-Cookie"\n\xa0fieldArray{4}:="Server"\n\xa0\n\xa0valueArray{1}:="HTTP/1.0"*\n\xa0valueArray{2}:="200 OK"*\n\xa0valueArray{3}:="C=HELLO"\n\xa0valueArray{4}:="North_Carolina"\n'})}),"\n",(0,t.jsx)(n.p,{children:"* \u6700\u521D\u306E2\u3064\u306E\u30A2\u30A4\u30C6\u30E0\u306F\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u6700\u521D\u306E\u884C\u3067\u3059\u3002\u3053\u308C\u3089\u3092\u5165\u529B\u3059\u308B\u969B\u306F\u3001\u914D\u5217\u306E1\u756A\u76EE\u30682\u756A\u76EE\u306E\u8981\u7D20\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305F\u3060\u3057\u3001\u3053\u308C\u3089\u3092\u7701\u7565\u3057\u3066\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306E\u307F\u3092\u8A18\u8FF0\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059 (4D\u304C\u30D8\u30C3\u30C0\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0fieldArray{1}:="Set-Cookie"\n\xa0valueArray{1}:="C=HELLO"\n'})}),"\n",(0,t.jsxs)(n.p,{children:['X-VERSION\u3068X-STATUS\u3092\u6307\u5B9A\u3057\u306A\u3044\u3068\u3001\u81EA\u52D5\u7684\u306BHTTP/1.0 200 OK\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002Server \u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F"4D/',(0,t.jsxs)(n.version,{children:['" \u3067\u3059\u3002',(0,t.jsx)(n.strong,{children:"Date"})," \u3068 ",(0,t.jsx)(n.strong,{children:"Content-Length"})," \u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u30824D\u306B\u3088\u3063\u3066\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"660"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},d=s.createContext(t);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);