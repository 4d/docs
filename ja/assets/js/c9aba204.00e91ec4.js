"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27779],{579493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var c=t(474848),r=t(28453);const s={id:"vp-get-column-count",title:"VP Get column count"},o=void 0,d={id:"ViewPro/commands/vp-get-column-count",title:"VP Get column count",description:"VP Get column count ( vpAreaName  Integer } ) : Integer",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-column-count.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-column-count",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-column-count",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-column-count.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-column-count",title:"VP Get column count"},sidebar:"docs",previous:{title:"VP Get column attributes",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-column-attributes"},next:{title:"VP Get current sheet",permalink:"/docs/ja/20-R5/ViewPro/commands/vp-get-current-sheet"}},i={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function u(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP Get column count"})," ( ",(0,c.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,c.jsx)(n.em,{children:"sheet"})," :  Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5f15\u6570"}),(0,c.jsx)(n.th,{children:"\u578b"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8aac\u660e"}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vpAreaName"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"4D View Pro \u30a8\u30ea\u30a2\u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"sheet"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"\u30b7\u30fc\u30c8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (\u7701\u7565\u3057\u305f\u5834\u5408\u306f\u30ab\u30ec\u30f3\u30c8\u30b7\u30fc\u30c8)"}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"<-"}),(0,c.jsx)(n.td,{children:"\u30ab\u30e9\u30e0\u306e\u7dcf\u6570"}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"VP Get column count"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,c.jsx)(n.em,{children:"sheet"})," \u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u30b7\u30fc\u30c8\u306b\u304a\u3051\u308b\u30ab\u30e9\u30e0\u306e\u7dcf\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"vpAreaName"})," \u306b\u306f\u30014D View Pro \u30a8\u30ea\u30a2\u306e\u540d\u524d\u3092\u6e21\u3057\u307e\u3059\u3002 \u5b58\u5728\u3057\u306a\u3044\u540d\u524d\u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4efb\u610f\u306e ",(0,c.jsx)(n.em,{children:"sheet"})," \u5f15\u6570\u306b\u30b7\u30fc\u30c8\u30a4\u30f3\u30c7\u30c3\u30af\u30b9 (0 \u8d77\u70b9) \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u3069\u306e\u30b7\u30fc\u30c8\u306e\u30ab\u30e9\u30e0\u6570\u3092\u53d6\u5f97\u3059\u308b\u304b\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u7701\u7565\u3055\u308c\u305f\u5834\u5408\u3001\u307e\u305f\u306f ",(0,c.jsx)(n.code,{children:"vk current sheet"})," \u3092\u6e21\u3057\u305f\u5834\u5408\u3001\u30ab\u30ec\u30f3\u30c8\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u30014D View Pro \u30a8\u30ea\u30a2\u5185\u306e\u30ab\u30e9\u30e0\u306e\u6570\u304c\u8fd4\u3055\u308c\u307e\u3059:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'C_INTEGER($colCount)\n$colCount:=VP Get column count("ViewProarea")\n'})}),"\n",(0,c.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-get-row-count",children:"VP Get row count"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-column-count",children:"VP SET COLUMN COUNT"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R5/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var c=t(296540);const r={},s=c.createContext(r);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);