"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93531],{810625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(474848),s=t(28453);const i={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/get-menu-items",title:"GET MENU ITEMS",description:"GET MENU ITEMS ( menu ; menuTitlesArray ; menuRefsArray )",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-items.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-items",permalink:"/docs/commands/get-menu-items",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get menu item style",permalink:"/docs/commands/get-menu-item-style"},next:{title:"Get menu title",permalink:"/docs/commands/get-menu-title"}},m={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuTitlesArray"})," ; ",(0,r.jsx)(n.em,{children:"menuRefsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuTitlesArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array of menu titles"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuRefsArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array of menu references"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"GET MENU ITEMS"})," command returns, in the ",(0,r.jsx)(n.em,{children:"menuTitlesArray"})," and ",(0,r.jsx)(n.em,{children:"menuRefsArray"})," arrays, the titles and IDs of all the items of the menu or menu bar designated by the ",(0,r.jsx)(n.em,{children:"menu"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"menu"})," parameter, you can pass a menu reference (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),"), a menu bar number or a menu bar reference obtained using the ",(0,r.jsx)(n.a,{href:"/docs/commands/get-menu-bar-reference",children:"Get menu bar reference"})," command."]}),"\n",(0,r.jsx)(n.p,{children:"If no menu reference is associated with an item, an empty string is returned in the corresponding array element."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to find out the contents of the menu bar of the current process:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(menuTitlesArray;0)\n\xa0ARRAY TEXT(menuRefsArray;0)\n\xa0MenuBarRef:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(MenuBarRef;menuTitlesArray;menuRefsArray)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(296540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);