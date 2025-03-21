"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95924"],{518468:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-group-properties","title":"GET GROUP PROPERTIES","description":"GET GROUP PROPERTIES ( groupID ; name ; owner {; members} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-properties","permalink":"/docs/commands/get-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-properties","title":"GET GROUP PROPERTIES","slug":"/commands/get-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP LIST","permalink":"/docs/commands/get-group-list"},"next":{"title":"Get plugin access","permalink":"/docs/commands/get-plugin-access"}}'),t=n("785893"),o=n("250065");let i={id:"get-group-properties",title:"GET GROUP PROPERTIES",slug:"/commands/get-group-properties",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," ( ",(0,t.jsx)(r.em,{children:"groupID"})," ; ",(0,t.jsx)(r.em,{children:"name"})," ; ",(0,t.jsx)(r.em,{children:"owner"})," {; ",(0,t.jsx)(r.em,{children:"members"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupID"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Unique group ID number"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Name of the group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"owner"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"User ID number of group owner (Binary databases only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"members"}),(0,t.jsx)(r.td,{children:"Array integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Group members"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["GET GROUP PROPERTIES returns the properties of the group whose unique group ID number you pass in ",(0,t.jsx)(r.em,{children:"groupID"}),". You must pass a valid group ID number returned by the command ",(0,t.jsx)(r.a,{href:"/docs/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"If you do not pass a valid group ID number, GET GROUP PROPERTIES returns empty parameters."}),"\n",(0,t.jsxs)(r.p,{children:["After the call, you retrieve the name of the group in the ",(0,t.jsx)(r.em,{children:"name"})," parameter."]}),"\n",(0,t.jsxs)(r.p,{children:["(",(0,t.jsx)(r.em,{children:"Binary databases only"}),") The owner of the group is returned in the ",(0,t.jsx)(r.em,{children:"owner"})," parameter. This parameter always returns 0 in project databases."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass the optional ",(0,t.jsx)(r.em,{children:"members"})," parameter, the unique ID numbers of the users and groups belonging to the group are returned."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note for binary databases:"})," Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the ",(0,t.jsx)(r.em,{children:"User and group ID ranges"})," paragraph."]}),"\n",(0,t.jsx)(r.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(r.p,{children:["If you do not have the proper access privileges for calling GET GROUP PROPERTIES or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"613"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifies variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return i}});var s=n(667294);let t={},o=s.createContext(t);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);