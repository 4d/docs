"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37832"],{379234:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/create-set","title":"CREATE SET","description":"CREATE SET ( {aTable ;} set )","source":"@site/versioned_docs/version-20-R8/commands-legacy/create-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-set","permalink":"/docs/commands/create-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-set","title":"CREATE SET","slug":"/commands/create-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE EMPTY SET","permalink":"/docs/commands/create-empty-set"},"next":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/commands/create-set-from-array"}}'),r=s("785893"),d=s("250065");let c={id:"create-set",title:"CREATE SET",slug:"/commands/create-set",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"CREATE SET"})," ( {",(0,r.jsx)(t.em,{children:"aTable"})," ;} ",(0,r.jsx)(t.em,{children:"set"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table for which to create a set from the selection, or Default table, if omitted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"set"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of the new set"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"CREATE SET"})," creates a new set, ",(0,r.jsx)(t.em,{children:"set"}),", for ",(0,r.jsx)(t.em,{children:"aTable"}),", and places the current selection in ",(0,r.jsx)(t.em,{children:"set"}),". The current record pointer for the table is saved with ",(0,r.jsx)(t.em,{children:"set"}),". If ",(0,r.jsx)(t.em,{children:"set"})," is used with ",(0,r.jsx)(t.a,{href:"/docs/commands/use-set",children:"USE SET"}),", the current selection and current record are restored. As with all sets, there is no sorted order; when ",(0,r.jsx)(t.em,{children:"set"})," is used, the default order is used. If a set with the same name already exists, the existing set is cleared by the new set."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following example creates a set after doing a search, in order to save the set to disk:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0QUERY([People])\xa0// Let the user do a search\n\xa0CREATE SET([People];"SearchSet")\xa0// Create a new set\n\xa0SAVE SET("SearchSet";"MySearch")\xa0// Save the set on disk\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/create-empty-set",children:"CREATE EMPTY SET"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"116"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return c}});var n=s(667294);let r={},d=n.createContext(r);function c(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);