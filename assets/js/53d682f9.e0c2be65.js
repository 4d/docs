"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60616"],{128908:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>l,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/change-current-user","title":"CHANGE CURRENT USER","description":"CHANGE CURRENT USER {( user ; password )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/change-current-user.md","sourceDirName":"commands-legacy","slug":"/commands/change-current-user","permalink":"/docs/commands/change-current-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-current-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-current-user","title":"CHANGE CURRENT USER","slug":"/commands/change-current-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO USERS","permalink":"/docs/commands/blob-to-users"},"next":{"title":"CHANGE PASSWORD","permalink":"/docs/commands/change-password"}}'),r=s("785893"),a=s("250065");let o={id:"change-current-user",title:"CHANGE CURRENT USER",slug:"/commands/change-current-user",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Offering a custom access management dialog box",id:"offering-a-custom-access-management-dialog-box",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," {( ",(0,r.jsx)(n.em,{children:"user"})," ; ",(0,r.jsx)(n.em,{children:"password"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name or unique user ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Password (not encrypted)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," changes the identity of the current user in the database, without needing to quit. The user can change their identity themselves either using the database connection dialog box (when the command is called without parameters) or directly via the command. When a user changes their identity, they abandon any former access privileges in favor of those belonging to the chosen user."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This command has no effect in project databases opened in single user mode."}),"\n",(0,r.jsxs)(n.li,{children:["If an alias was defined for the current user with the ",(0,r.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})," command, it is reset by the ",(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," command call."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," command is executed without parameters, the database connection dialog box appears. The user must then enter or select a valid name and password in order to enter the database. The contents of the connection dialog box will depend on the options set on the ",(0,r.jsx)(n.strong,{children:"Security"})," page of the Database Settings."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also pass the two optional ",(0,r.jsx)(n.em,{children:"user"})," and ",(0,r.jsx)(n.em,{children:"password"})," parameters to specify by programming the new account to be used."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"user"})," parameter, pass the name or unique user ID (",(0,r.jsx)(n.em,{children:"userRef"}),") of the account to be used. The user names and IDs can be obtained using the ",(0,r.jsx)(n.a,{href:"/docs/commands/get-user-list",children:"GET USER LIST"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["If the user account does not exist or was deleted, error -9979 is returned. You can intercept this error with the error-handling method installed by the ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command. Otherwise, you can call the function ",(0,r.jsx)(n.a,{href:"/docs/commands/is-user-deleted",children:"Is user deleted"})," to test the user account before calling this command."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the non-encrypted user account password in the ",(0,r.jsx)(n.em,{children:"password"})," parameter. If the password does not match the user, the command will return error message -9978 and do nothing."]}),"\n",(0,r.jsx)(n.p,{children:"The command execution is delayed to prevent flooding (brute force attack), in other words, attempts of multiple user name/password combinations. As a result, after the 4th call to this command, it is run only after a period of 10 seconds. This delay is throughout the entire work station."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' When the group of the current user provides access to a "serialized" feature (e.g. a plug-in), a corresponding license is used and will remain attached to the 4D user account until the end of the session, even if ',(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," is called and the group of the new user does not provide access to the feature."]}),"\n",(0,r.jsx)(n.h5,{id:"offering-a-custom-access-management-dialog-box",children:"Offering a custom access management dialog box"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," command can be used to set up custom dialog boxes for entering the name and password (with entry and expiration rules) that benefit from the same advantages as the access control system of 4D.",(0,r.jsx)(n.br,{}),"\nHere is how It works:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1."})," The database is entered directly in the \u201CDefault user\u201D mode, without a dialog box."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"2."})," The displays a custom dialog box for entering the user name and password. All types of processing are foreseeable in the dialog box:",(0,r.jsx)(n.br,{}),"\n- You can display the list of database users, as in the standard access dialog box of 4D, using the ",(0,r.jsx)(n.a,{href:"/docs/commands/get-user-list",children:"GET USER LIST"})," command.",(0,r.jsx)(n.br,{}),"\n- The password entry field can contain various controls to check the validity of the entered characters (minimum number of characters, uniqueness, etc.).",(0,r.jsx)(n.br,{}),"\n- If you want the characters of passwords being entered to be masked on screen, you can use the ",(0,r.jsx)(n.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"})," command with the special ",(0,r.jsx)(n.em,{children:"%password"})," font.",(0,r.jsx)(n.br,{}),"\n- Expiration rules can be applied at the moment when the dialog box is validated: expiration date, forced change to the initial connection, locking of account after several incorrect entries, memorization of passwords already used, etc."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"3."})," When the entry is validated, the required information (user name and password) are passed to the ",(0,r.jsx)(n.strong,{children:"CHANGE CURRENT USER"})," command in order to open the database with the user account privileges."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example simply displays the connection dialog box:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0CHANGE CURRENT USER\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This code does nothing in a single-user project database."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/change-password",children:"CHANGE PASSWORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"289"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},a=t.createContext(r);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);