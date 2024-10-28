"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24275],{626851:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(474848),r=t(28453);const i={id:"is-in-set",title:"Is in set",slug:"/commands/is-in-set",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/is-in-set",title:"Is in set",description:"Is in set ( set ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/is-in-set.md",sourceDirName:"commands-legacy",slug:"/commands/is-in-set",permalink:"/docs/commands/is-in-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-in-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"is-in-set",title:"Is in set",slug:"/commands/is-in-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"INTERSECTION",permalink:"/docs/commands/intersection"},next:{title:"LOAD SET",permalink:"/docs/commands/load-set"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Is in set"})," ( ",(0,n.jsx)(s.em,{children:"set"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"set"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Name of the set to test"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Function result"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Current record of set's table is in set (True) or Current record of set's table is not in set (False)"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Is in set tests whether or not the current record for the table is in ",(0,n.jsx)(s.em,{children:"set"}),". The Is in set function returns TRUE if the current record of the table is in ",(0,n.jsx)(s.em,{children:"set"}),", and returns FALSE if the current record of the table is not in ",(0,n.jsx)(s.em,{children:"set"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.p,{children:"The following example is a button object method. It tests to see whether or not the currently displayed record is in the set of best customers:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0If(Is in set("Best"))\xa0// Check if it is a good customer\n\xa0\xa0\xa0\xa0ALERT("They are one of our best customers.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("They are not one of our best customers.")\n\xa0End if\n'})}),"\n",(0,n.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/commands/add-to-set",children:"ADD TO SET"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/remove-from-set",children:"REMOVE FROM SET"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(296540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);