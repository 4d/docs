"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96951"],{459458:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"ViewPro/commands/vp-get-values","title":"VP Get values","description":"VP Get values ( rangeObj Collection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-values","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-get-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-values","title":"VP Get values"},"sidebar":"docs","previous":{"title":"VP Get value","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-get-value"},"next":{"title":"VP Get workbook options","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-get-workbook-options"}}'),l=s("785893"),r=s("250065");let d={id:"vp-get-values",title:"VP Get values"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get values"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"\u5024\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"VP Get values"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,l.jsx)(n.em,{children:"rangeObj"})," \u3067\u6307\u5B9A\u3057\u305F\u30EC\u30F3\u30B8\u306E\u5024\u3092\u3059\u3079\u3066\u53D6\u5F97\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u3067\u3001\u5024\u3092\u53D6\u5F97\u3057\u305F\u3044\u30EC\u30F3\u30B8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 ",(0,l.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u304C\u8907\u6570\u30EC\u30F3\u30B8\u3092\u6307\u5B9A\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u6700\u521D\u306E\u30EC\u30F3\u30B8\u306E\u307F\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"VP Get values"})," \u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u30012\u6B21\u5143\u69CB\u9020\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7B2C1\u30EC\u30D9\u30EB\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5404\u8981\u7D20\u306F\u884C\u3092\u8868\u3057\u3001\u5024\u306E\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5404\u30B5\u30D6\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u305D\u306E\u884C\u306E\u30BB\u30EB\u5024\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059\u3002 \u5024\u306F\u6574\u6570\u3001\u5B9F\u6570\u3001\u30D6\u30FC\u30EB\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001Null \u306E\u3044\u305A\u308C\u304B\u3067\u3059\u3002 \u5024\u304C\u65E5\u4ED8\u307E\u305F\u306F\u6642\u9593\u306E\u5834\u5408\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Date"}),(0,l.jsx)(n.td,{children:"\u30BB\u30EB\u306E\u5024 (\u6642\u9593\u90E8\u5206\u3092\u9664\u304F)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"\u5024\u304C js \u65E5\u4ED8\u578B\u306E\u5834\u5408\u3001\u6642\u9593\u5024 (\u79D2\u5358\u4F4D)"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"\u65E5\u4ED8\u307E\u305F\u306F\u6642\u9593\u306F \u65E5\u4ED8\u6642\u9593 (datetime) \u3068\u3057\u3066\u6271\u308F\u308C\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u88DC\u5B8C\u3055\u308C\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6642\u9593\u5024 - \u65E5\u4ED8\u90E8\u5206\u306F 1899\u5E7412\u670830\u65E5\u3068\u3057\u3066\u88DC\u5B8C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u65E5\u4ED8\u5024 - \u6642\u9593\u90E8\u5206\u306F\u771F\u591C\u4E2D (00:00:00:000) \u3068\u3057\u3066\u88DC\u5B8C\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(n.p,{children:"C4 \u304B\u3089 G6 \u307E\u3067\u306E\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(87149).Z+"",width:"629",height:"221"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))\n// $result[0]=[4,5,null,hello,world]\n// $result[1]=[6,7,8,9,null]\n// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},87149:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpGetValues-260c1d0b895e13be413a70052a3d640e.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let l={},r=t.createContext(l);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);