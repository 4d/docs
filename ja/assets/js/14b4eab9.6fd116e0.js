"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97072"],{735465:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>A,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-cell-style","title":"VP SET CELL STYLE","description":"VP SET CELL STYLE ( rangeObj Object)","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-cell-style.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-cell-style","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-cell-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-cell-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-cell-style","title":"VP SET CELL STYLE"},"sidebar":"docs","previous":{"title":"VP SET BORDER","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-border"},"next":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-column-attributes"}}'),c=t("785893"),o=t("250065");let r={id:"vp-set-cell-style",title:"VP SET CELL STYLE"},l=void 0,i={},A=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function E(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP SET CELL STYLE"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,c.jsx)(n.em,{children:"styleObj"}),"  : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"styleObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"\u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"VP SET CELL STYLE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,c.jsx)(n.em,{children:"styleObj"})," \u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u30B9\u30BF\u30A4\u30EB\u3092\u3001",(0,c.jsx)(n.em,{children:"rangeObj"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30BB\u30EB\u306B\u9069\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u306F\u3001\u30B9\u30BF\u30A4\u30EB\u3092\u9069\u7528\u3057\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,c.jsx)(n.em,{children:"rangeObj"})," \u306B\u8907\u6570\u306E\u30BB\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u30B9\u30BF\u30A4\u30EB\u306F\u305D\u308C\u305E\u308C\u306E\u30BB\u30EB\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"VP SET CELL STYLE"})," \u3067\u9069\u7528\u3055\u308C\u305F\u5883\u754C\u7DDA\u306F\u3001",(0,c.jsx)(n.em,{children:"rangeObj"})," \u306E\u5404\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u5BFE\u3057\u3066 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-border",children:"VP SET BORDER"})," \u30B3\u30DE\u30F3\u30C9\u306F\u5883\u754C\u7DDA\u3092 ",(0,c.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u5168\u4F53\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"styleObj"})," \u306B\u306F\u30B9\u30BF\u30A4\u30EB\u8A2D\u5B9A\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u65E2\u5B58\u306E\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3057\u3001\u65B0\u3057\u3044\u30B9\u30BF\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002 ",(0,c.jsx)(n.em,{children:"styleObj"})," \u306B\u65E2\u5B58\u306E\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u3068\u3001\u8FFD\u52A0\u306E\u30B9\u30BF\u30A4\u30EB\u8A2D\u5B9A\u306E\u4E21\u65B9\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u65E2\u5B58\u306E\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u304C\u5148\u306B\u9069\u7528\u3055\u308C\u3001\u305D\u306E\u3042\u3068\u306B\u8FFD\u52A0\u306E\u8A2D\u5B9A\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30B9\u30BF\u30A4\u30EB\u3092\u524A\u9664\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30BF\u30A4\u30EB\u8A2D\u5B9A (\u3042\u308C\u3070) \u306B\u623B\u3059\u306B\u306F\u3001NULL\u5024\u3092\u6E21\u3057\u307E\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"styleObj"})," \u5F15\u6570\u3068\u3057\u3066 NULL\u5024\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,c.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306E\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u306F\u3059\u3079\u3066\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5C5E\u6027\u306B NULL\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5F53\u8A72\u5C5E\u6027\u306F ",(0,c.jsx)(n.em,{children:"rangeObj"})," \u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u30B9\u30BF\u30A4\u30EB\u30B7\u30FC\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/configuring#%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u30B9\u30BF\u30A4\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$style:=New object\n$style.font:="8pt Arial"\n$style.backColor:="Azure"\n$style.foreColor:="red"\n$style.hAlign:=1\n$style.isVerticalText:=True\n$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)\n$style.backgroundImage:=Null // \u7279\u5B9A\u306E\u5C5E\u6027\u3092\u524A\u9664\u3057\u307E\u3059\n\nVP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(583856).Z+"",width:"258",height:"231"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-get-cell-style",children:"VP Get cell style"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-border",children:"VP SET BORDER"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(E,{...e})}):E(e)}},583856:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let c={},o=s.createContext(c);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);