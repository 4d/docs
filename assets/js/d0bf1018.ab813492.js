"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88442"],{428703:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/delete-index","title":"DELETE INDEX","description":"DELETE INDEX ( fieldPtr {; } )DELETE INDEX ( indexName {; } )","source":"@site/versioned_docs/version-20-R8/commands-legacy/delete-index.md","sourceDirName":"commands-legacy","slug":"/commands/delete-index","permalink":"/docs/20-R8/commands/delete-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-index","title":"DELETE INDEX","slug":"/commands/delete-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE INDEX","permalink":"/docs/20-R8/commands/create-index"},"next":{"title":"EXPORT STRUCTURE","permalink":"/docs/20-R8/commands/export-structure"}}'),s=d("785893"),i=d("250065");let r={id:"delete-index",title:"DELETE INDEX",slug:"/commands/delete-index",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Note for deployment",id:"note-for-deployment",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DELETE INDEX"})," ( ",(0,s.jsx)(n.em,{children:"fieldPtr"})," {; *} )",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"DELETE INDEX"})," ( ",(0,s.jsx)(n.em,{children:"indexName"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPtr\xa0|\xa0indexName"}),(0,s.jsx)(n.td,{children:"Pointer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pointer to field whose indexes are to be deleted or Name of index to be deleted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If passed = asynchronous operation"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The DELETE INDEX command deletes one or more existing indexes from the database.",(0,s.jsx)(n.br,{}),"\nYou can pass either a pointer to a field or the name of an index in the parameter:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you pass a pointer to a field (",(0,s.jsx)(n.em,{children:"fieldPtr"}),"), all the indexes associated with the field will be deleted. This can consist of keyword indexes or standard indexes. However, if the field is included in one or more composite indexes, they are not deleted (you must pass an index name)."]}),"\n",(0,s.jsxs)(n.li,{children:["If you pass the name of an index (",(0,s.jsx)(n.em,{children:"indexName"}),"), only the designated index will be deleted. This can consist of keyword indexes, standard indexes or composite indexes."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, when it is passed, performs deindexing in asynchronous mode. In this mode, the original method continues its execution after the call from the command, regardless of whether or not the index deletion is finished."]}),"\n",(0,s.jsxs)(n.p,{children:["If there is no index corresponding to ",(0,s.jsx)(n.em,{children:"fieldPtr"})," or ",(0,s.jsx)(n.em,{children:"indexName"}),", the command does nothing."]}),"\n",(0,s.jsx)(n.h2,{id:"note-for-deployment",children:"Note for deployment"}),"\n",(0,s.jsxs)(n.p,{children:["Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the ",(0,s.jsx)(n.em,{children:"Program Files"})," folder or .4dz file)."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example illustrates both syntaxes of the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Deletion of all indexes related to the LastName field\n\xa0DELETE INDEX(->[Customers]LastName)\n\xa0\xa0//Deletion of index named \u201CCityZip\u201D\n\xa0DELETE INDEX("CityZip")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/create-index",children:"CREATE INDEX"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/pause-indexes",children:"PAUSE INDEXES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-index",children:"SET INDEX"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"967"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return r}});var t=d(667294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);