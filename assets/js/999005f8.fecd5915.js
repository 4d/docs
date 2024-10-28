"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96881],{910392:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(474848),s=r(28453);const o={id:"wp-freeze-formulas",title:"WP FREEZE FORMULAS",slug:"/WritePro/commands/wp-freeze-formulas",displayed_sidebar:"docs"},i=void 0,d={id:"WritePro/commands-legacy/wp-freeze-formulas",title:"WP FREEZE FORMULAS",description:"WP FREEZE FORMULAS ( targetObj {; recompute} )",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-freeze-formulas.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-freeze-formulas",permalink:"/docs/WritePro/commands/wp-freeze-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-freeze-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-freeze-formulas",title:"WP FREEZE FORMULAS",slug:"/WritePro/commands/wp-freeze-formulas",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Find previous",permalink:"/docs/WritePro/commands/wp-find-previous"},next:{title:"WP GET ATTRIBUTES",permalink:"/docs/WritePro/commands/wp-get-attributes"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP FREEZE FORMULAS"})," ( ",(0,t.jsx)(n.em,{children:"targetObj"})," {; ",(0,t.jsx)(n.em,{children:"recompute"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recompute"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Option to control recomputing"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WP FREEZE FORMULAS"}),' command "freezes" the contents of the formulas in ',(0,t.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The command replaces each formula in the ",(0,t.jsx)(n.em,{children:"targetObj"})," with its computed value (either static text or image). This creates a portable document since only the references of formulas are kept in the ",(0,t.jsx)(n.em,{children:"targetObj"})," itself."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a range, or"}),"\n",(0,t.jsx)(n.li,{children:"an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline or anchored picture / text box), or"}),"\n",(0,t.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If targetObj designates an offscreen area where formulas have not been previously computed, they will be evaluated before being frozen. In particular, formulas are not computed when an offscreen document is loaded."}),"\n",(0,t.jsxs)(n.li,{children:["When you pass a section in ",(0,t.jsx)(n.em,{children:"targetObj"}),", only image formulas or formulas in text boxes anchored to this section or all sections are frozen. If anchored to a page or to the embedded view, their formulas are not frozen. Pass the document in ",(0,t.jsx)(n.em,{children:"targetObj"})," to freeze all anchored element formulas."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"recompute"})," optional parameter allows you to define if the formulas in ",(0,t.jsx)(n.em,{children:"targetObj"}),' must be recomputed before being frozen. You can pass one constant from the "4D Write Pro" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk do not recompute expressions"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Specifies that all expressions in the document are not recomputed before printing or freezing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk recompute expressions"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Specifies that all expressions in the document are recomputed before printing or freezing (default value)."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, if ",(0,t.jsx)(n.em,{children:"recompute"})," is omitted, expressions are recomputed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," ",(0,t.jsx)(n.em,{children:"Carry-over rows"}),", if any, are transformed as regular rows when you freeze the targetObj. As a result, if the page size or orientation is modified, or if the document is exported, they may be shifted in the resulting layout."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"To freeze the formulas in a document:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0WP FREEZE FORMULAS(WriteProArea)\n"})}),"\n",(0,t.jsx)(n.p,{children:"To freeze all formulas in the first section of a document without recomputing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-formulas",children:"WP Get formulas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);