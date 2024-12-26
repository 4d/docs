"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90700"],{688625:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>a,assets:()=>l,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/get-plugin-access","title":"Get plugin access","description":"Get plugin access ( plugIn ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/get-plugin-access","permalink":"/docs/commands/get-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-plugin-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-plugin-access","title":"Get plugin access","slug":"/commands/get-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP PROPERTIES","permalink":"/docs/commands/get-group-properties"},"next":{"title":"GET USER LIST","permalink":"/docs/commands/get-user-list"}}'),r=s("785893"),i=s("250065");let c={id:"get-plugin-access",title:"Get plugin access",slug:"/commands/get-plugin-access",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get plugin access"})," ( ",(0,r.jsx)(n.em,{children:"plugIn"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"plugIn"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Plug-in number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Group name associated with plug-in"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Get plugin access command returns the name of the user group authorized to use the plug-in whose number was passed in the ",(0,r.jsx)(n.em,{children:"plugIn"}),' parameter. If there is no group associated with the plug-in, the command returns an empty string ("").']}),"\n",(0,r.jsxs)(n.p,{children:["Pass the number of the plug-in for which you want to find out the associated group of users in the ",(0,r.jsx)(n.em,{children:"plugIn"})," parameter. Plug-in licenses include 4D Client Web and SOAP licenses. You can pass one of the following constants found in the ",(0,r.jsx)(n.em,{children:"Is License Available"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D Client SOAP license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808465465"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D Client Web license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808465209"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D for OCI license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808465208"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D ODBC Pro license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808464946"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D View license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808465207"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D Write license"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"808464697"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/set-group-access",children:"SET GROUP ACCESS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-plugin-access",children:"SET PLUGIN ACCESS"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"846"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);