"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80677"],{31598:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-missing-table-names","title":"GET MISSING TABLE NAMES","description":"GET MISSING TABLE NAMES ( missingTables )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-missing-table-names.md","sourceDirName":"commands-legacy","slug":"/commands/get-missing-table-names","permalink":"/docs/commands/get-missing-table-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-missing-table-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-missing-table-names","title":"GET MISSING TABLE NAMES","slug":"/commands/get-missing-table-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD PROPERTIES","permalink":"/docs/commands/get-field-properties"},"next":{"title":"GET RELATION PROPERTIES","permalink":"/docs/commands/get-relation-properties"}}'),i=s("785893"),a=s("250065");let r={id:"get-missing-table-names",title:"GET MISSING TABLE NAMES",slug:"/commands/get-missing-table-names",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET MISSING TABLE NAMES"})," ( ",(0,i.jsx)(n.em,{children:"missingTables"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"missingTables"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Names of missing tables in the database"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GET MISSING TABLE NAMES"})," command returns the names of all the missing tables of the current database in the ",(0,i.jsx)(n.em,{children:"missingTables"})," array."]}),"\n",(0,i.jsx)(n.p,{children:"Missing tables are tables whose data are present in the data file but that do not exist at the level of the current structure. This can happen when a data file is opened with different versions of the structure."}),"\n",(0,i.jsx)(n.p,{children:"Typically, the scenario is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The developer provides a structure containing tables A, B and C,"}),"\n",(0,i.jsxs)(n.li,{children:["The user adds the custom tables D and E, using, for example, the integrated ",(0,i.jsx)(n.em,{children:"SQL"})," commands of 4D, and stores data in these tables,"]}),"\n",(0,i.jsxs)(n.li,{children:["The developer provides a new version of the structure. It does not contain tables D and E.",(0,i.jsx)(n.br,{}),"\nIn this case, the user version of the database still contains data from tables D and E, but it cannot be accessed. The ",(0,i.jsx)(n.strong,{children:"GET MISSING TABLE NAMES"}),' command will return the names "D" and "E".']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have identified the missing tables of the database, you can reactivate them via the ",(0,i.jsx)(n.a,{href:"/docs/commands/regenerate-missing-table",children:"REGENERATE MISSING TABLE"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The data of missing tables are erased when the data file is compacted (if the tables have not been regenerated)."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/regenerate-missing-table",children:"REGENERATE MISSING TABLE"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1125"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);