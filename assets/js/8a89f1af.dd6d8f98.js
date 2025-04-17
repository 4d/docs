"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54470"],{163416:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/use-entity-selection","title":"USE ENTITY SELECTION","description":"USE ENTITY SELECTION ( entitySelection : 4D.EntitySelection )","source":"@site/versioned_docs/version-20-R9/commands/use-entity-selection.md","sourceDirName":"commands","slug":"/commands/use-entity-selection","permalink":"/docs/commands/use-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fuse-entity-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"use-entity-selection","title":"USE ENTITY SELECTION","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table fragmentation","permalink":"/docs/commands/table-fragmentation"},"next":{"title":"VERIFY CURRENT DATA FILE","permalink":"/docs/commands/verify-current-data-file"}}'),i=t("785893"),r=t("250065");let o={id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"USE ENTITY SELECTION"})," ( ",(0,i.jsx)(n.em,{children:"entitySelection"})," : 4D.EntitySelection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entitySelection"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"An entity selection"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"})," command updates the current selection of the table matching the dataclass of the ",(0,i.jsx)(n.em,{children:"entitySelection"})," parameter, according to the content of the entity selection."]}),"\n",(0,i.jsxs)(n.p,{children:["This command cannot be used with a ",(0,i.jsx)(n.a,{href:"/docs/ORDA/datastores",children:"Remote datastore"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This command is designed to make 4D current selections benefit from the power of ORDA queries. For performance reasons, in 4D single-user and 4D Server, the command directly connects ",(0,i.jsx)(n.em,{children:"entitySelection"})," to the current selection. Therefore, once ",(0,i.jsx)(n.em,{children:"entitySelection"})," has been used, it must not be reused or altered afterwards."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["After a call to ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"}),", the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the ",(0,i.jsx)(n.code,{children:"LOAD RECORD"})," command after the ",(0,i.jsx)(n.code,{children:"USE ENTITY SELECTION"})," command."]})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $entitySel : cs.EmployeeSelection\n\n$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel is related to the Employee dataclass\nREDUCE SELECTION([Employee];0)\nUSE ENTITY SELECTION($entitySel) //The current selection of the Employee table is updated\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/create-entity-selection",children:"Create entity selection"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1513"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current record"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current selection"}),(0,i.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);