"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40873"],{50554:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/current-user","title":"Current user","description":"Current user {( user )} : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/current-user.md","sourceDirName":"commands-legacy","slug":"/commands/current-user","permalink":"/docs/commands/current-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-user","title":"Current user","slug":"/commands/current-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE PASSWORD","permalink":"/docs/commands/change-password"},"next":{"title":"DELETE USER","permalink":"/docs/commands/delete-user"}}'),t=r("785893"),d=r("250065");let c={id:"current-user",title:"Current user",slug:"/commands/current-user",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Current user"})," {( ",(0,t.jsx)(n.em,{children:"user"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"user"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"User alias or 4D user account"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"User name of the current user"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Current user returns the alias or account name of the current user."}),"\n",(0,t.jsxs)(n.p,{children:["By default if the ",(0,t.jsx)(n.em,{children:"user"})," parameter is omitted, if an alias has been defined for the user with ",(0,t.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})," during the session, the command returns the user alias. Otherwise, it returns the 4D user account name."]}),"\n",(0,t.jsxs)(n.p,{children:["In the optional ",(0,t.jsx)(n.em,{children:"user"})," parameter, you can specify which of the following you want returned:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D user account"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"4D user account name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D user alias"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["Alternate name for 4D user account if defined with the ",(0,t.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"}),' command or empty string ("") if no alias is defined for the 4D user.']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D user alias or account"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Alternate name for 4D user account as defined with the ",(0,t.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})," command, or regular 4D user account name if no alias is defined."]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See example for the ",(0,t.jsx)(n.a,{href:"/docs/commands/user-in-group",children:"User in group"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/change-password",children:"CHANGE PASSWORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/user-in-group",children:"User in group"})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);