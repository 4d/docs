"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36097"],{661849:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>d,metadata:()=>i,assets:()=>h,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"ViewPro/commands/vp-set-binding-path","title":"VP SET BINDING PATH","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-binding-path.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-binding-path","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-binding-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-binding-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-binding-path","title":"VP SET BINDING PATH"},"sidebar":"docs","previous":{"title":"VP SET ALLOWED METHODS","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-allowed-methods"},"next":{"title":"VP SET BOOLEAN VALUE","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-boolean-value"}}'),s=t("785893"),r=t("250065");let d={id:"vp-set-binding-path",title:"VP SET BINDING PATH"},c=void 0,h={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(n){let e={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(e.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"19 R5"}),(0,s.jsx)(e.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"VP SET BINDING PATH"})," ( ",(0,s.jsx)(e.em,{children:"rangeObj"})," : Object  ; ",(0,s.jsx)(e.em,{children:"dataContextAttribute"}),"  : Text)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"rangeObj"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"->"}),(0,s.jsx)(e.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataContextAttribute"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"->"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"rangeObj"})," \u306B\u30D0\u30A4\u30F3\u30C9\u3059\u308B\u5C5E\u6027\u306E\u540D\u79F0"]}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"VP SET BINDING PATH"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(e.em,{children:"rangeObj"})," \u3067\u6307\u5B9A\u3057\u305F\u30EC\u30F3\u30B8\u306B\u3001\u30B7\u30FC\u30C8\u306E\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306E\u5C5E\u6027\u3092\u30D0\u30A4\u30F3\u30C9\u3057\u307E\u3059\u3002 \u6A5F\u80FD\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-data-context",children:"SET DATA CONTEXT"})," \u3092\u4F7F\u3063\u3066\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5C5E\u6027\u3092\u542B\u3080\u5834\u5408\u3001",(0,s.jsx)(e.em,{children:"dataContextAttribute"})," \u306E\u5024\u304C ",(0,s.jsx)(e.em,{children:"rangeObj"})," \u306E\u30BB\u30EB\u306B\u81EA\u52D5\u7684\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u306F\u3001\u30BB\u30EB\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8907\u5408\u30BB\u30EB\u30EC\u30F3\u30B8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u306F\u3001\u30BB\u30EB\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8907\u5408\u30BB\u30EB\u30EC\u30F3\u30B8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u304C\u8907\u6570\u30BB\u30EB\u3092\u542B\u3080\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6700\u521D\u306E\u30BB\u30EB\u306B\u5C5E\u6027\u3092\u30D0\u30A4\u30F3\u30C9\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"dataContextAttribute"})," \u306B\u306F\u3001",(0,s.jsx)(e.em,{children:"rangeObj"})," \u306B\u30D0\u30A4\u30F3\u30C9\u3059\u308B\u5C5E\u6027\u306E\u540D\u79F0\u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,s.jsx)(e.em,{children:"dataContextAttribute"})," \u304C\u7A7A\u306E\u6587\u5B57\u5217\u3060\u3063\u305F\u5834\u5408\u3001\u95A2\u6570\u306F\u5C5E\u6027\u306E\u30D0\u30A4\u30F3\u30C9\u3092\u89E3\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u306E\u5C5E\u6027\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002 \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u5C5E\u6027\u306E\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u8A2D\u5B9A\u3057\u3001",(0,s.jsx)(e.code,{children:"firstName"})," \u3068 ",(0,s.jsx)(e.code,{children:"lastName"})," \u306E\u5C5E\u6027\u3092\u30BB\u30EB\u306B\u30D0\u30A4\u30F3\u30C9\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'var $p : Object\n\n$p:=New object\n$p.firstName:="Freehafer"\n$p.lastName:="Nancy"\n\nVP SET DATA CONTEXT("ViewProArea"; $p)\n\nVP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")\nVP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(442017).Z+"",width:"300",height:"81"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-binding-path",children:"VP Get binding path"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-data-context",children:"VP Get data context"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-data-context",children:"VP SET DATA CONTEXT"})]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},442017:function(n,e,t){t.d(e,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);