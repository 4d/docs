"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14547"],{28277:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-group-properties","title":"Set group properties","description":"Set group properties ( groupID ; name ; owner {; members} )  : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-properties","permalink":"/docs/commands/set-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-group-properties","title":"Set group properties","slug":"/commands/set-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET GROUP ACCESS","permalink":"/docs/commands/set-group-access"},"next":{"title":"SET PLUGIN ACCESS","permalink":"/docs/commands/set-plugin-access"}}'),t=n("785893"),o=n("250065");let i={id:"set-group-properties",title:"Set group properties",slug:"/commands/set-group-properties",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Set group properties"})," ( ",(0,t.jsx)(r.em,{children:"groupID"})," ; ",(0,t.jsx)(r.em,{children:"name"})," ; ",(0,t.jsx)(r.em,{children:"owner"})," {; ",(0,t.jsx)(r.em,{children:"members"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupID"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Unique ID number of group, -1 for adding a group"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Unique ID number of added group (if any)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"New group name"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"owner"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"User ID number of new group owner (Binary databases only)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"members"}),(0,t.jsx)(r.td,{children:"Array integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"New group members"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Function result"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Unique ID number of new group"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["Set group properties enables you to change and update the properties of an existing group whose unique group ID number you pass in ",(0,t.jsx)(r.em,{children:"groupID"}),", or to add a new group."]}),"\n",(0,t.jsxs)(r.p,{children:["To change the properties of an existing group, you must pass a valid group ID number returned by the command ",(0,t.jsx)(r.a,{href:"/docs/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["To add a new group, pass -1 in ",(0,t.jsx)(r.em,{children:"groupID"})," (see also notes below for binary databases)."]}),"\n",(0,t.jsxs)(r.p,{children:["After the call, if the group is successfully added, its unique ID number is returned in ",(0,t.jsx)(r.em,{children:"groupID"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you do not pass -1, -2 or a valid group ID number in ",(0,t.jsx)(r.em,{children:"groupID"}),", Set group properties does nothing."]}),"\n",(0,t.jsxs)(r.p,{children:["Pass the new name of the group in the ",(0,t.jsx)(r.em,{children:"name"})," parameter."]}),"\n",(0,t.jsxs)(r.p,{children:["(",(0,t.jsx)(r.em,{children:"Binary databases only"}),") Pass the ID number of the new owner of the group in the ",(0,t.jsx)(r.em,{children:"owner"})," parameter. This parameter is ignored in project databases."]}),"\n",(0,t.jsxs)(r.p,{children:["If you do not want to change all the properties of the group (besides the members, see below), first call ",(0,t.jsx)(r.a,{href:"/docs/commands/get-group-properties",children:"GET GROUP PROPERTIES"})," and pass the returned values for the properties you want to leave unchanged."]}),"\n",(0,t.jsxs)(r.p,{children:["If you do not pass the optional ",(0,t.jsx)(r.em,{children:"members"})," parameter, the current member list of the group is left unchanged. If you do not pass ",(0,t.jsx)(r.em,{children:"members"})," while adding a group, the group will have no members."]}),"\n",(0,t.jsxs)(r.p,{children:["If you pass the optional ",(0,t.jsx)(r.em,{children:"members"})," parameter, you change the whole member list for the group. Before the call, you must populate the array ",(0,t.jsx)(r.em,{children:"members"})," with the unique ID numbers of the users and groups the group will get as members."]}),"\n",(0,t.jsxs)(r.p,{children:["To remove all the members from a group, pass an empty ",(0,t.jsx)(r.em,{children:"members"})," array."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes for binary databases"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the ",(0,t.jsx)(r.em,{children:"User and group ID ranges"})," paragraph. To create a group affiliated with the Designer, pass -1 in groupID. To create a group affiliated with the Administrator, pass -2 in groupID."]}),"\n",(0,t.jsxs)(r.li,{children:["The group owner is not automatically set as a member of the group that he or she owns. It is up to you to include the group owner in the group, using the ",(0,t.jsx)(r.em,{children:"members"})," parameter."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(r.p,{children:["If you do not have the proper access privileges for calling Set group properties or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/get-user-list",children:"GET USER LIST"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"614"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifies variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return i}});var s=n(667294);let t={},o=s.createContext(t);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);