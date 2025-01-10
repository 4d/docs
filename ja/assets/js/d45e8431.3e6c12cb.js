"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39924"],{863460:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-set-filter","title":"OBJECT SET FILTER","description":"OBJECT SET FILTER ( { ;} object ; entryFilter* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-filter.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-filter","permalink":"/docs/ja/commands/object-set-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-filter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-filter","title":"OBJECT SET FILTER","slug":"/commands/object-set-filter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET EVENTS","permalink":"/docs/ja/commands/object-set-events"},"next":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/ja/commands/object-set-focus-rectangle-invisible"}}'),r=t("785893"),d=t("250065");let c={id:"object-set-filter",title:"OBJECT SET FILTER",slug:"/commands/object-set-filter",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET FILTER"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"entryFilter"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entryFilter"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5165\u529B\u53EF\u30A8\u30EA\u30A2\u306E\u65B0\u3057\u3044\u5165\u529B\u30D5\u30A3\u30EB\u30BF"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["OBJECT SET FILTER \u306F\u3001",(0,r.jsx)(n.em,{children:"object"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092",(0,r.jsx)(n.em,{children:"entryFilter"}),"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"}),"\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059 (\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,r.jsx)(n.em,{children:"object"}),"\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u53C2\u7167 (\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u307F) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"OBJECT SET FILTER \u306F\u3001\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u304A\u3088\u3073\u30C0\u30A4\u30A2\u30ED\u30B0\u7528\u30D5\u30A9\u30FC\u30E0\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3067\u304D\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092\u53D7\u3051\u4ED8\u3051\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5165\u529B\u53EF\u5909\u6570\u306B\u9069\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"entryFilter"}),"\u306B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092\u53D6\u308A\u9664\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u914D\u7F6E\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u30C4\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9\u3067\u3042\u3089\u304B\u3058\u3081\u5B9A\u7FA9\u3057\u305F\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092",(0,r.jsx)(n.em,{children:"entryFilter"}),"\u306B\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u540D\u306E\u524D\u306B\u7E26\u68D2(|)\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u90F5\u4FBF\u756A\u53F7\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5BFE\u3059\u308B\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u4F4F\u6240\u304C\u7C73\u56FD\u306E\u5834\u5408\u306F\u3001\u7C73\u56FD\u306E\u90F5\u4FBF\u756A\u53F7\u30D5\u30A3\u30EB\u30BF\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F\u3001\u4EFB\u610F\u306E\u5165\u529B\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If([Companies]Country="US")\xa0// ZIP\u30B3\u30FC\u30C9\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u8A2D\u5B9A\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Companies]ZIP Code;"&9#####")\n\xa0Else\xa0// \u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u3068\u6570\u5B57\u3092\u53D7\u3051\u4ED8\u3051\u3001\u5C0F\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u5909\u63DB\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Companies]ZIP Code;"~@")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001\u201Ca,\u201D \u201Cb,\u201D \u201Cc,\u201D \u305D\u3057\u3066\u201Cg\u201D\u306E\u307F\u306E\u5165\u529B\u3092\u8A31\u53EF\u3059\u308B\u3088\u3046\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FILTER([table]field ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u4F8B\u984C\u3067\u306F\u5165\u529B\u30D5\u30A3\u30EB\u30BF\u3092 ",(0,r.jsx)(n.em,{children:'&"a;b;c;g"##'})," \u306B\u8A2D\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/object-get-filter",children:"OBJECT Get filter"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/object-set-format",children:"OBJECT SET FORMAT"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"235"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let r={},d=s.createContext(r);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);