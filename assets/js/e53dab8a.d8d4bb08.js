"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70496],{442358:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=r(474848),s=r(28453);const d={id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/qr-find-column",title:"QR Find column",description:"QR Find column ( area ; expression ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/qr-find-column.md",sourceDirName:"commands-legacy",slug:"/commands/qr-find-column",permalink:"/docs/commands/qr-find-column",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-find-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR EXECUTE COMMAND",permalink:"/docs/commands/qr-execute-command"},next:{title:"QR Get area property",permalink:"/docs/commands/qr-get-area-property"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function a(e){const n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Find column"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"expression"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Reference of the area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expression"}),(0,t.jsx)(n.td,{children:"Text, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Column object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Number of the column"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The QR Find column command returns the number of the first column whose contents match the ",(0,t.jsx)(n.em,{children:"expression"})," passed in parameter."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"expression"})," can either be a string or a pointer."]}),"\n",(0,t.jsx)(n.p,{children:"QR Find column returns \u20131 if nothing has been found."}),"\n",(0,t.jsx)(n.p,{children:"If you pass an invalid area number, the error -9850 will be generated."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following code retrieves the column number that holds the field [G.NQR Tests]Quarter and deletes that column:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$NumColumn:=QR Find column(MyArea;->[G.NQR Tests]Quarter)\n"})}),"\n",(0,t.jsx)(n.p,{children:"or:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$NumColumn:=QR Find column(MyArea;"[G.NQR Tests]Quarter")\n'})}),"\n",(0,t.jsx)(n.p,{children:"followed by:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If($NumColumn#-1)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MyArea;$NumColumn)\n\xa0End if\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const s={},d=t.createContext(s);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);