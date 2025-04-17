"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74899"],{889262:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands/create-entity-selection","title":"Create entity selection","description":"Create entity selection ( dsTable Object } ) : 4D.EntitySelection","source":"@site/versioned_docs/version-20-R9/commands/create-entity-selection.md","sourceDirName":"commands","slug":"/commands/create-entity-selection","permalink":"/docs/commands/create-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcreate-entity-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-entity-selection","title":"Create entity selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE DATA FILE","permalink":"/docs/commands/create-data-file"},"next":{"title":"Data file","permalink":"/docs/commands/data-file"}}'),i=t("785893"),r=t("250065");let d={id:"create-entity-selection",title:"Create entity selection",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create entity selection"})," ( ",(0,i.jsx)(n.em,{children:"dsTable"})," : Table { ; ",(0,i.jsx)(n.em,{children:"settings"})," : Object } ) : 4D.EntitySelection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dsTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table in the 4D database whose current selection will be used to build the entity selection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Build option: context"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Entity selection matching the dataclass related to the given table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Create entity selection"})," command builds and returns a new, ",(0,i.jsx)(n.a,{href:"/docs/ORDA/entities#shareable-or-alterable-entity-selections",children:"alterable"})," entity selection related to the dataclass matching the given ",(0,i.jsx)(n.em,{children:"dsTable"}),", according to the current selection of this table."]}),"\n",(0,i.jsxs)(n.p,{children:["If the current selection is sorted, an ",(0,i.jsx)(n.a,{href:"/docs/ORDA/dsmapping#ordered-or-unordered-entity-selection",children:"ordered"})," entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"dsTable"})," is not exposed in ",(0,i.jsx)(n.a,{href:"/docs/commands/ds",children:(0,i.jsx)(n.code,{children:"ds"})}),", an error is returned. This command cannot be used with a Remote datastore."]}),"\n",(0,i.jsxs)(n.p,{children:["In the optional ",(0,i.jsx)(n.em,{children:"settings"})," parameter, you can pass an object containing the following property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"context"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Label for the ",(0,i.jsx)(n.a,{href:"/docs/ORDA/client-server-optimization",children:"optimization context"})," applied to the entity selection."]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $employees : cs.EmployeeSelection\nALL RECORDS([Employee])\n$employees:=Create entity selection([Employee])\n// The $employees entity selection now contains a set of reference\n// on all entities related to the Employee dataclass\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/use-entity-selection",children:"USE ENTITY SELECTION"}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.a,{href:"/docs/API/DataClassClass#newselection",children:(0,i.jsx)(n.code,{children:"dataClass.newSelection()"})})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1512"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);