"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68077],{459555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=t(474848),r=t(28453);const c={id:"set-recent-fonts",title:"SET RECENT FONTS",slug:"/commands/set-recent-fonts",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/set-recent-fonts",title:"SET RECENT FONTS",description:"SET RECENT FONTS ( fontsArray )",source:"@site/versioned_docs/version-20-R7/commands-legacy/set-recent-fonts.md",sourceDirName:"commands-legacy",slug:"/commands/set-recent-fonts",permalink:"/docs/commands/set-recent-fonts",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-recent-fonts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-recent-fonts",title:"SET RECENT FONTS",slug:"/commands/set-recent-fonts",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Select RGB Color",permalink:"/docs/commands/select-rgb-color"},next:{title:"System folder",permalink:"/docs/commands/system-folder"}},i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET RECENT FONTS"})," ( ",(0,s.jsx)(n.em,{children:"fontsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fontsArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of font names"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET RECENT FONTS"}),' command modifies the list of fonts displayed in the context menu of the "recent fonts".']}),"\n",(0,s.jsxs)(n.p,{children:["This menu contains the names of the last fonts selected during the session. It is used in particular by ",(0,s.jsx)(n.em,{children:"Programming Notes"})," areas."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to add a font to the menu of recent fonts:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(542410).A+"",width:"433",height:"244"})}),"\n",(0,s.jsx)(n.p,{children:"You execute the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrRecent;0)\n\xa0FONT LIST($arrRecent;2)\n\xa0APPEND TO ARRAY($arrRecent;"Segoe Script")\n\xa0APPEND TO ARRAY($arrRecent)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then the menu contains:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(59403).A+"",width:"467",height:"243"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/font-list",children:"FONT LIST"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},542410:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict1202029.en-40cd8bff9ed6120af29a90c5dad795ee.png"},59403:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict1202031.en-14c405c9da34d8facbfc30dc88ce7157.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);