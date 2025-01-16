"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27544"],{929150:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/on-sql-authentication-database-method","title":"On SQL Authentication database method","description":"$1, $2, $3 -> On SQL Authentication database method -> $0","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-sql-authentication-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-sql-authentication-database-method","permalink":"/docs/es/commands/on-sql-authentication-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-sql-authentication-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-sql-authentication-database-method","title":"On SQL Authentication database method","slug":"/commands/on-sql-authentication-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Startup database method","permalink":"/docs/es/commands/on-server-startup-database-method"},"next":{"title":"On Startup database method","permalink":"/docs/es/commands/on-startup-database-method"}}'),a=t("785893"),r=t("250065");let d={id:"on-sql-authentication-database-method",title:"On SQL Authentication database method",slug:"/commands/on-sql-authentication-database-method",displayed_sidebar:"docs"},i=void 0,o={},c=[];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"$1, $2, $3 -> On SQL Authentication database method -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"User name"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Password"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"(Optional) IP address of client at origin of the request"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$0"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"True = request accepted, False = request refused"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:""}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," can be used to filter requests sent to the integrated SQL server of 4D. This filtering can be based on the name and password as well as the (optional) IP address of the user. The developer can use their own table of users or that of the 4D users to evaluate the connection identifiers. Once the connection is authenticated, the ",(0,a.jsx)(n.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"})," command must be called in order to control access of requests within the 4D database."]}),"\n",(0,a.jsxs)(n.p,{children:["When it exists, the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," is called automatically by 4D or 4D Server on each external connection to the SQL server. The internal system for managing 4D users is therefore not activated. The connection is only accepted if the database method returns ",(0,a.jsx)(n.strong,{children:"True"})," in $0 and if the ",(0,a.jsx)(n.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"})," command has been executed successfully. If one of these conditions is not met, the request is refused."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": The statement ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"}),"(",(0,a.jsx)(n.strong,{children:"SQL_INTERNAL"}),";$user;$password) does not call the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," since it is an internal connection in this case."]}),"\n",(0,a.jsx)(n.p,{children:"The database method receives up to three parameters of the Text type, passed by 4D ($1, $2 and $3), and returns a Boolean, $0. Here is a description of these parameters:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Parameters"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Type"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Description"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"User name"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Password"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"(optional) IP address of client at origin of the request(*)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$0"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"True = request accepted, False = request refused"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["(*) 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,a.jsx)(n.em,{children:"Support of IPv6"})," section."]}),"\n",(0,a.jsx)(n.p,{children:"You must declare these parameters as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//On SQL Authentication database method\n\xa0\n\xa0var $1;$2;$3 : Text\n\xa0var $0 : Boolean\n\xa0\xa0//Code for method\n"})}),"\n",(0,a.jsx)(n.p,{children:"The password ($2) is received as standard text."}),"\n",(0,a.jsxs)(n.p,{children:["You must check the identifiers of the SQL connection in the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"}),". For example, you can check the name and password using a custom table of users. If the identifiers are valid, pass ",(0,a.jsx)(n.strong,{children:"True"})," in $0 to accept the connection. Otherwise, pass ",(0,a.jsx)(n.strong,{children:"False"})," in $0; in this case, the connection is refused."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," If the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," does not exist, the connection is evaluated using the integrated user management system of 4D (if it is activated, in other words, if a password has been assigned to the Designer). If this system is not activated, users are connected with Designer access rights (free access)."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have passed ",(0,a.jsx)(n.strong,{children:"True"})," in $0, you must then successfully call the ",(0,a.jsx)(n.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"})," command in the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," in order for the request to be accepted and for 4D to open an SQL session for the user*.*"]}),"\n",(0,a.jsxs)(n.p,{children:["The use of the ",(0,a.jsx)(n.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"})," command can be used to implement a virtual authentication system which has the double advantage of allowing the control of connection actions and of hiding the connection identifiers from the outside in the 4D SQL session."]}),"\n",(0,a.jsxs)(n.p,{children:["This example of the ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"}),' checks whether the connection request comes from the internal network, validates the identifiers and then assigns access rights to the "sql_user" user for the SQL session.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $1;$2;$3 : Text\n\xa0var $0 : Boolean\n\xa0\xa0//$1: user\n\xa0\xa0//$2: password\n\xa0\xa0//{$3: IP address of client}\n\xa0ON ERR CALL("SQL_error")\n\xa0If(checkInternalIP($3))\n\xa0\xa0//The checkInternalIP method checks whether the IP address is internal\n\xa0\xa0\xa0\xa0If($1="victor")\xa0&\xa0($2="hugo")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE CURRENT USER("sql_user";"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=False\n\xa0End if\n'})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);