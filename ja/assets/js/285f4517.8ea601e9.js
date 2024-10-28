"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90545],{925683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=t(474848),r=t(28453);const d={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/get-menu-items",title:"GET MENU ITEMS",description:"GET MENU ITEMS ( menu ; menuTitlesArray ; menuRefsArray )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-items.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-items",permalink:"/docs/ja/commands/get-menu-items",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get menu item style",permalink:"/docs/ja/commands/get-menu-item-style"},next:{title:"Get menu title",permalink:"/docs/ja/commands/get-menu-title"}},m={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuTitlesArray"})," ; ",(0,s.jsx)(n.em,{children:"menuRefsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30e1\u30cb\u30e5\u30fc\u53c2\u7167\u307e\u305f\u306f\u30e1\u30cb\u30e5\u30fc\u756a\u53f7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuTitlesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30e1\u30cb\u30e5\u30fc\u30bf\u30a4\u30c8\u30eb\u914d\u5217"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuRefsArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30e1\u30cb\u30e5\u30fc\u53c2\u7167\u914d\u5217"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["GET MENU ITEMS \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,s.jsx)(n.em,{children:"menu"}),"\u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u30e1\u30cb\u30e5\u30fc\u307e\u305f\u306f\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u306e\u30bf\u30a4\u30c8\u30eb\u3068ID\u3092",(0,s.jsx)(n.em,{children:"menuTitlesArray"})," \u3068 ",(0,s.jsx)(n.em,{children:"menuRefsArray"})," \u914d\u5217\u306b\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"menu"})," \u5f15\u6570\u306b\u306f\u30e1\u30cb\u30e5\u30fc\u53c2\u7167 (",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),")\u3001\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u756a\u53f7\u3001\u307e\u305f\u306f",(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-menu-bar-reference",title:"Get menu bar reference",children:"Get menu bar reference"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u53d6\u5f97\u3057\u305f\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u53c2\u7167\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9805\u76ee\u306b\u30e1\u30cb\u30e5\u30fc\u53c2\u7167\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5bfe\u5fdc\u3059\u308b\u914d\u5217\u8981\u7d20\u306b\u306f\u7a7a\u306e\u6587\u5b57\u5217\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u306e\u5185\u5bb9\u3092\u53d6\u5f97\u3057\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(menuTitlesArray;0)\n\xa0ARRAY TEXT(menuRefsArray;0)\n\xa0MenuBarRef:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(MenuBarRef;menuTitlesArray;menuRefsArray)\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);