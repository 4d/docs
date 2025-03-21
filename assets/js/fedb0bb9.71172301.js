"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10085"],{155932:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/set-plugin-access","title":"SET PLUGIN ACCESS","description":"SET PLUGIN ACCESS ( plugIn ; group )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-plugin-access","permalink":"/docs/20-R7/commands/set-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-plugin-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-plugin-access","title":"SET PLUGIN ACCESS","slug":"/commands/set-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set group properties","permalink":"/docs/20-R7/commands/set-group-properties"},"next":{"title":"SET USER ALIAS","permalink":"/docs/20-R7/commands/set-user-alias"}}'),i=s("785893"),r=s("250065");let l={id:"set-plugin-access",title:"SET PLUGIN ACCESS",slug:"/commands/set-plugin-access",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET PLUGIN ACCESS"})," ( ",(0,i.jsx)(n.em,{children:"plugIn"})," ; ",(0,i.jsx)(n.em,{children:"group"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"plugIn"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Plug-in number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"group"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Group name to associate with plug-in"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The SET PLUGIN ACCESS command sets, by programming, the user group allowed to use each \u201Cserialized\u201D plug-in that is installed in the database. This way you can manage how plug-in licenses are used."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This can also be done in the Design environment using the Groups editor."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the number of the plug-in to be associated with a group of users in the ",(0,i.jsx)(n.em,{children:"plugIn"})," parameter. Plug-in licenses include 4D Client Web and SOAP licenses. You can pass one of the following constants found in the ",(0,i.jsx)(n.em,{children:"Is License Available"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D Client SOAP license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808465465"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D Client Web license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808465209"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D for OCI license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808465208"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D ODBC Pro license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808464946"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D View license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808465207"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4D Write license"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"808464697"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the name of the group whose users are authorized to use the plug-in in ",(0,i.jsx)(n.em,{children:"group"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Only one group at a time can be allowed to use a plug-in. When this command is executed, if another group had the plug-in access rights, it loses this privilege."}),"\n",(0,i.jsxs)(n.li,{children:["Used licenses will remain attached to 4D user accounts in ",(0,i.jsx)(n.em,{children:"group"})," for the whole session, even if they change memberships or if the ",(0,i.jsx)(n.em,{children:"group"})," loses its plug-in access rights."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/get-plugin-access",children:"Get plugin access"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/plugin-list",children:"PLUGIN LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-group-access",children:"SET GROUP ACCESS"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"845"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);