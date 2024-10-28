"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6869],{909835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=s(474848),r=s(28453);const i={id:"on-web-authentication-database-method",title:"On Web Authentication database method",slug:"/commands/on-web-authentication-database-method",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/on-web-authentication-database-method",title:"On Web Authentication database method",description:"$1, $2, $3, $4, $5, $6 -> On Web Authentication database method -> $0",source:"@site/versioned_docs/version-20-R7/commands-legacy/on-web-authentication-database-method.md",sourceDirName:"commands-legacy",slug:"/commands/on-web-authentication-database-method",permalink:"/docs/commands/on-web-authentication-database-method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-web-authentication-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"on-web-authentication-database-method",title:"On Web Authentication database method",slug:"/commands/on-web-authentication-database-method",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"On System Event database method",permalink:"/docs/commands/on-system-event-database-method"},next:{title:"On Web Connection database method",permalink:"/docs/commands/on-web-connection-database-method"}},o={},h=[{value:"Description",id:"description",level:4},{value:"On Web Authentication Database Method calls",id:"on-web-authentication-database-method-calls",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"$1, $2, $3, $4, $5, $6 -> On Web Authentication database method -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"HTTP header + HTTP body"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$3"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"IP address of browser"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$4"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"IP address of the server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$5"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"User name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$6"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Password"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$0"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = request accepted, False = request refused"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"On Web Authentication database method"})," is in charge of managing Web server engine access. It is called by 4D or 4D Server when a Web browser request requires the execution of a 4D method on the server (method called using a ",(0,t.jsx)(n.em,{children:"4DACTION"})," URL, a ",(0,t.jsx)(n.em,{children:"4DSCRIPT"})," tag, etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"This method receives six Text parameters: $1, $2, $3, $4, $5, and $6, and returns one Boolean parameter, $0. The description of these parameters is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"HTTP header + HTTP body (32 KB maximum)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$3"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"IP address of the Web client (browser)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$4"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"IP address of the server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$5"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"User name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$6"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Password"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$0"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"True = request accepted, False = request rejected"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"You must declare these parameters as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// On Web Authentication Database Method\n\xa0\n\xa0var $1;$2;$3;$4;$5;$6 : Text\n\xa0var $0 : Boolean\n\xa0\n\xa0\xa0// Code for the method\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," All the On Web Authentication database method\u2019s parameters are not necessarily filled in. The information received by the database method depends on the options that you have previously selected in the Database Settings dialog box (please refer to the section ",(0,t.jsx)(n.em,{children:"Connection Security"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL"}),(0,t.jsx)(n.br,{}),"\nThe first parameter (",(0,t.jsx)(n.em,{children:"$1"}),") is the URL entered by the user in the location area of his or her Web browser, from which the host address has been removed.",(0,t.jsx)(n.br,{}),"\nLet\u2019s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is ",(0,t.jsx)(n.em,{children:"123.45.67.89"}),". The following table shows the values of ",(0,t.jsx)(n.em,{children:"$1"})," depending on the URL entered in the Web browser:",(0,t.jsx)(n.br,{}),"\n| ",(0,t.jsx)(n.strong,{children:"URL entered in Web browser Location area"})," | ",(0,t.jsx)(n.strong,{children:"Value of parameter $1"})," |",(0,t.jsx)(n.br,{}),"\n| -------------------------------------------- | ------------------------- |",(0,t.jsx)(n.br,{}),"\n| 123.45.67.89                                 | /                         |",(0,t.jsx)(n.br,{}),"\n| ",(0,t.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"}),"                          | /                         |",(0,t.jsx)(n.br,{}),"\n| 123.45.67.89/Customers                       | /Customers                |",(0,t.jsx)(n.br,{}),"\n| ",(0,t.jsx)(n.a,{href:"http://123.45.67.89/Customers",children:"http://123.45.67.89/Customers"}),"                | /Customers                |",(0,t.jsx)(n.br,{}),"\n| ",(0,t.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"}),"            | /Customers/Add            |",(0,t.jsx)(n.br,{}),"\n| 123.45.67.89/Do_This/If_OK/Do_That        | /Do_This/If_OK/Do_That |"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Header and Body of the HTTP request"}),(0,t.jsx)(n.br,{}),"\nThe second parameter (",(0,t.jsx)(n.em,{children:"$2"}),") is the header and the body of the HTTP request sent by the Web browser. Note that this information is passed to your ",(0,t.jsx)(n.strong,{children:"On Web Authentication database method"})," as it is. Its contents will vary depending on the nature of the Web browser which is attempting the connection.",(0,t.jsx)(n.br,{}),"\nIf your application deals with this information, it is up to you to parse the header and the body."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server."}),"\n",(0,t.jsxs)(n.li,{children:["For more information about this parameter, please refer to the description of the ",(0,t.jsx)(n.a,{href:"/docs/commands/on-web-connection-database-method",children:"On Web Connection database method"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Web client IP address"}),(0,t.jsx)(n.br,{}),"\nThe $3 parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between Intranet and Internet connections.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note:"})," 4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,t.jsx)(n.em,{children:"Support of IPv6"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Server IP address"}),(0,t.jsx)(n.br,{}),"\nThe $4 parameter receives the IP address used to call the Web server. 4D since version 6.5 allows for multi-homing, which allows you to exploit machines with more than one IP address. For more information, please refer to the section ",(0,t.jsx)(n.em,{children:"Web Server Settings"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Name and Password"}),(0,t.jsx)(n.br,{}),"\nThe $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if a password management option has been selected in the Database Settings dialog box (see section ",(0,t.jsx)(n.em,{children:"Connection Security"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"$0 parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"On Web Authentication database method"})," returns a boolean in $0:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If $0 is ",(0,t.jsx)(n.strong,{children:"True"}),", the connection is accepted."]}),"\n",(0,t.jsxs)(n.li,{children:["If $0 is ",(0,t.jsx)(n.strong,{children:"False"}),", the connection is refused."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/commands/on-web-connection-database-method",children:"On Web Connection database method"})," is only executed if the connection has been accepted by ",(0,t.jsx)(n.strong,{children:"On Web Authentication"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WARNING:"})," If no value is set to ",(0,t.jsx)(n.em,{children:"$0"})," or if ",(0,t.jsx)(n.em,{children:"$0"})," is not defined in the On Web Authentication database method, the connection is considered as accepted and the ",(0,t.jsx)(n.a,{href:"/docs/commands/on-web-connection-database-method",children:"On Web Connection database method"})," is executed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Do not call any interface elements in the ",(0,t.jsx)(n.strong,{children:"On Web Authentication database method"})," (",(0,t.jsx)(n.a,{href:"/docs/commands/alert",children:"ALERT"}),", ",(0,t.jsx)(n.a,{href:"/docs/commands/dialog",children:"DIALOG"}),", etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing."]}),"\n",(0,t.jsxs)(n.li,{children:["It is possible to prevent execution by ",(0,t.jsx)(n.em,{children:"4DACTION"})," or ",(0,t.jsx)(n.em,{children:"4DSCRIPT"})," for each project method via the \u201cAvailable through 4D HTML tags and URLs (4DACTION...)\u201d option in the Method properties dialog box. For more information about this point, please refer to the ",(0,t.jsx)(n.em,{children:"Connection Security"})," section."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"on-web-authentication-database-method-calls",children:"On Web Authentication Database Method calls"}),"\n",(0,t.jsx)(n.p,{children:"The On Web Authentication database method is automatically called, regardless of the mode, when a request or processing requires the execution of a 4D method. It is also called when the Web server receives an invalid static URL (for example, if the static page requested does not exist)."}),"\n",(0,t.jsx)(n.p,{children:"The On Web Authentication database method is therefore called in the following cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["when 4D receives a URL beginning with ",(0,t.jsx)(n.em,{children:"4DACTION/"})]}),"\n",(0,t.jsxs)(n.li,{children:["when 4D receives a URL beginning with ",(0,t.jsx)(n.em,{children:"4DCGI/"})]}),"\n",(0,t.jsxs)(n.li,{children:["when 4D receives a URL beginning with ",(0,t.jsx)(n.em,{children:"4DSYNC/"})]}),"\n",(0,t.jsx)(n.li,{children:"when 4D receives a URL requesting a static page that does not exist"}),"\n",(0,t.jsxs)(n.li,{children:["when 4D receives a root access URL and no home page has been set in the Database Settings or by means of the ",(0,t.jsx)(n.a,{href:"/docs/commands/web-set-home-page",children:"WEB SET HOME PAGE"})," command"]}),"\n",(0,t.jsxs)(n.li,{children:["when 4D processes a ",(0,t.jsx)(n.em,{children:"4DSCRIPT"})," tag in a semi-dynamic page"]}),"\n",(0,t.jsxs)(n.li,{children:["when 4D processes a ",(0,t.jsx)(n.em,{children:"4DLOOP"})," tag based on a method in a semi-dynamic page."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibility note:"})," The database method is also called when 4D receives a URL beginning with ",(0,t.jsx)(n.em,{children:"4DMETHOD/"}),". This URL is obsolete and is only kept for compatibility's sake."]}),"\n",(0,t.jsx)(n.p,{children:"Note that the On Web Authentication database method is NOT called when the server receives a URL requesting a valid static page."}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"Example of the On Web Authentication database method in BASIC mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//On Web Authentication Database Method\n\xa0var $5;$6;$3;$4 : Text\n\xa0var $user;$password;$BrowserIP;$ServerIP : Text\n\xa0var $4Duser : Boolean\n\xa0ARRAY TEXT($users;0)\n\xa0ARRAY LONGINT($nums;0)\n\xa0var $upos : Integer\n\xa0var $0 : Boolean\n\xa0\n\xa0$0:=False\n\xa0\n\xa0$user:=$5\n\xa0$password:=$6\n\xa0$BrowserIP:=$3\n\xa0$ServerIP:=$4\n\xa0\n\xa0\xa0//For security reasons, refuse names that contain @\n\xa0If(WithWildcard($user)|WithWildcard($password))\n\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0//The WithWildcard method is described below\n\xa0Else\n\xa0\xa0//Check to see if it\u2019s a 4D user\n\xa0\xa0\xa0\xa0GET USER LIST($users;$nums)\n\xa0\xa0\xa0\xa0$upos:=Find in array($users;$user)\n\xa0\xa0\xa0\xa0If($upos >0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$4Duser:=Not(Is user deleted($nums{$upos}))\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$4Duser:=False\n\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0If(Not($4Duser))\n\xa0\xa0//It is not a user defined 4D, look in the table of Web users\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([WebUsers];[WebUsers]User=$user;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([WebUsers];\xa0&\xa0[WebUsers]Password=$password)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=(Records in selection([WebUsers])=1)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\xa0//Is this an intranet connection?\n\xa0If(Substring($BrowserIP;1;7)#"192.100.")\n\xa0\xa0\xa0\xa0$0:=False\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"Example of the On Web Authentication database method in DIGEST mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//On Web Authentication Database Method\n\xa0var $1;$2;$5;$6;$3;$4 : Text\n\xa0var $user : Text\n\xa0var $0 : Boolean\n\xa0$0:=False\n\xa0$user:=$5\n\xa0\xa0//For security reasons, refuse names that contain @\n\xa0If(WithWildcard($user))\n\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0//The WithWildcard method is described below\n\xa0Else\n\xa0\xa0\xa0\xa0QUERY([WebUsers];[WebUsers]User=$user)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=WEB Validate digest($user;[WebUsers]password)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0//User does not exist\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"The WithWildcard method is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//WithWildcard Method\n\xa0\xa0//WithWildcard ( String ) -> Boolean\n\xa0\xa0//WithWildcard ( Name ) -> Contains a Wilcard character\n\xa0\n\xa0C_INTEGER($i)\n\xa0var $0 : Boolean\n\xa0var $1 : Text\n\xa0\n\xa0$0:=False\n\xa0For($i;1;Length($1))\n\xa0\xa0\xa0\xa0If(Character code(Substring($1;$i;1))=Character code("@"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(296540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);