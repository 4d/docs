"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14987"],{137923:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-stylesheets","title":"VP Get stylesheet","description":"VP Get stylesheet ( vpAreaName Text { ; sheet Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-stylesheet.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-stylesheets","permalink":"/docs/ja/ViewPro/commands/vp-get-stylesheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-stylesheets","title":"VP Get stylesheet"},"sidebar":"docs","previous":{"title":"VP Get stylesheets","permalink":"/docs/ja/ViewPro/commands/vp-get-stylesheet"},"next":{"title":"VP Get column attributes","permalink":"/docs/ja/ViewPro/commands/vp-get-table-column-attributes"}}'),r=n("785893"),l=n("250065");let d={id:"vp-get-stylesheets",title:"VP Get stylesheet"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5F15\u6570"}),(0,r.jsx)(t.th,{children:"\u578B"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"\u30B9\u30BF\u30A4\u30EB\u306E\u540D\u524D"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"VP Get stylesheet"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(t.em,{children:"styleName"})," \u3067\u6307\u5B9A\u3057\u305F\u3001\u5B9A\u7FA9\u6E08\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u5024\u3092\u683C\u7D0D\u3057\u305F\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"vpAreaName"})," \u306B\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002 \u5B58\u5728\u3057\u306A\u3044\u540D\u524D\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"styleName"})," \u306B\u306F\u3001\u53D6\u5F97\u3059\u308B\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u4EFB\u610F\u306E ",(0,r.jsx)(t.em,{children:"sheet"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3092\u3069\u3053\u304B\u3089\u53D6\u5F97\u3059\u308B\u304B\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B7\u30FC\u30C8\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (0 \u8D77\u70B9) \u304B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(t.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["... \u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8\u306E ",(0,r.jsx)(t.em,{children:"GreenDashDotStyle"})," \u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88",children:"4D View Pro \u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ja/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ja/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ja/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(667294);let r={},l=s.createContext(r);function d(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);