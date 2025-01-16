"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49764"],{889959:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-group-list","title":"GET GROUP LIST","description":"GET GROUP LIST ( groupNames ; groupNumbers )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-group-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-list","permalink":"/docs/commands/get-group-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-list","title":"GET GROUP LIST","slug":"/commands/get-group-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get group access","permalink":"/docs/commands/get-group-access"},"next":{"title":"GET GROUP PROPERTIES","permalink":"/docs/commands/get-group-properties"}}'),t=n("785893"),i=n("250065");let d={id:"get-group-list",title:"GET GROUP LIST",slug:"/commands/get-group-list",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET GROUP LIST"})," ( ",(0,t.jsx)(r.em,{children:"groupNames"})," ; ",(0,t.jsx)(r.em,{children:"groupNumbers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupNames"}),(0,t.jsx)(r.td,{children:"Text array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Names of the groups as they appear in the Password editor window"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupNumbers"}),(0,t.jsx)(r.td,{children:"Array integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Corresponding unique group ID numbers"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["GET GROUP LIST populates the arrays ",(0,t.jsx)(r.em,{children:"groupNames"})," and ",(0,t.jsx)(r.em,{children:"groupNumbers"})," with the names and unique ID numbers of the groups as they appear in the Password editor window."]}),"\n",(0,t.jsxs)(r.p,{children:["The array ",(0,t.jsx)(r.em,{children:"groupNumbers"}),", synchronized with ",(0,t.jsx)(r.em,{children:"groupNames"}),", is filled with the corresponding unique group ID numbers."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"In project databases, these numbers start at 15001 and are dynamically allocated at startup and maintained during the session."}),"\n",(0,t.jsxs)(r.li,{children:["In binary databases, these numbers are stored and belong to a specific range, depending on the group creator. For more information, please refer to the ",(0,t.jsx)(r.em,{children:"User and group ID ranges"})," paragraph."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(r.p,{children:["If you do not have the proper access privileges for calling GET GROUP LIST or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"610"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifies variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return d}});var s=n(667294);let t={},i=s.createContext(t);function d(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);