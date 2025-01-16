"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36261"],{512139:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/get-user-properties","title":"GET USER PROPERTIES","description":"GET USER PROPERTIES ( userID ; name ; startup ; password ; nbLogin ; lastLogin {; memberships {; groupOwner}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-properties","permalink":"/docs/20-R7/commands/get-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-user-properties","title":"GET USER PROPERTIES","slug":"/commands/get-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER LIST","permalink":"/docs/20-R7/commands/get-user-list"},"next":{"title":"Is user deleted","permalink":"/docs/20-R7/commands/is-user-deleted"}}'),t=r("785893"),d=r("250065");let i={id:"get-user-properties",title:"GET USER PROPERTIES",slug:"/commands/get-user-properties",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET USER PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"userID"})," ; ",(0,t.jsx)(n.em,{children:"name"})," ; ",(0,t.jsx)(n.em,{children:"startup"})," ; ",(0,t.jsx)(n.em,{children:"password"})," ; ",(0,t.jsx)(n.em,{children:"nbLogin"})," ; ",(0,t.jsx)(n.em,{children:"lastLogin"})," {; ",(0,t.jsx)(n.em,{children:"memberships"})," {; ",(0,t.jsx)(n.em,{children:"groupOwner"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"userID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Unique user ID number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Name of the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"startup"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Startup method name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"password"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Always an empty string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nbLogin"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Number of logins to the database (Binary databases only)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lastLogin"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Date of last login to the database (Binary databases only)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"memberships"}),(0,t.jsx)(n.td,{children:"Array integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"ID numbers of groups to which the user belongs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupOwner"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"ID number of user group owner (Binary databases only)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET USER PROPERTIES"})," returns the information about the user whose unique user ID number you pass in ",(0,t.jsx)(n.em,{children:"userID"}),". You must pass a valid user ID number returned by the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/get-user-list",children:"GET USER LIST"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["If the user account does not exist or has been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),". Otherwise, you can call ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/is-user-deleted",children:"Is user deleted"})," to test the user account before calling ",(0,t.jsx)(n.strong,{children:"GET USER PROPERTIES"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After the call, you retrieve the name, startup method, number of logins and date of last login for the user, in the parameters ",(0,t.jsx)(n.em,{children:"name"}),", ",(0,t.jsx)(n.em,{children:"startup"}),", ",(0,t.jsx)(n.em,{children:"nbLogin"})," and ",(0,t.jsx)(n.em,{children:"lastLogin"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.em,{children:"nbLogin"})," and ",(0,t.jsx)(n.em,{children:"lastLogin"})," parameters are used in binary databases only. They always return respectively 0 and 00/00/00 in project databases."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.em,{children:"password"})," parameter is obsolete (it always returns an empty string). If you want to check a user's password, use the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/validate-password",children:"Validate password"})," function."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass the optional ",(0,t.jsx)(n.em,{children:"memberships"})," parameter, the unique ID numbers of the groups to which the user belongs are returned."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Binary databases only)"})," You can pass the optional ",(0,t.jsx)(n.em,{children:"groupOwner"})," parameter to get the ID number of the user group \u201Cowner\u201D, i.e. the default owner group of the objects created by this user."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The ",(0,t.jsx)(n.em,{children:"groupOwner"})," array always returns 0 values in project databases."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note for binary databases:"})," Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the ",(0,t.jsx)(n.em,{children:"User and group ID ranges"})," paragraph."]}),"\n",(0,t.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have the proper access privileges for calling GET USER PROPERTIES or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/set-user-properties",children:"Set user properties"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/validate-password",children:"Validate password"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"611"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);