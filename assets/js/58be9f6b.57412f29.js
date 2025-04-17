"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81529"],{156669:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/register-client","title":"REGISTER CLIENT","description":"REGISTER CLIENT ( clientName {; period}{; *} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/register-client.md","sourceDirName":"commands-legacy","slug":"/commands/register-client","permalink":"/docs/commands/register-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregister-client.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"register-client","title":"REGISTER CLIENT","slug":"/commands/register-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process state","permalink":"/docs/commands/process-state"},"next":{"title":"RESUME PROCESS","permalink":"/docs/commands/resume-process"}}'),i=s("785893"),r=s("250065");let l={id:"register-client",title:"REGISTER CLIENT",slug:"/commands/register-client",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REGISTER CLIENT"})," ( ",(0,i.jsx)(n.em,{children:"clientName"})," {; ",(0,i.jsx)(n.em,{children:"period"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name of the 4D client session"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"period"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Ignored since version 11.3"})})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Local process"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"REGISTER CLIENT"})," command \u201Cregisters\u201D a 4D client station with the name specified in ",(0,i.jsx)(n.em,{children:"clientName"})," on 4D Server, so as to allow other clients or eventually 4D Server (by using stored methods) to execute methods on it by using the ",(0,i.jsx)(n.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," command. Once it is registered, a 4D client can then execute one or more methods for other clients."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can also automatically register each client station that connects to 4D Server by using the \u201CRegister Clients at Startup...\u201D option in the Preferences dialog box."}),"\n",(0,i.jsx)(n.li,{children:"If this command is used with 4D in local mode, it has no effect."}),"\n",(0,i.jsx)(n.li,{children:"More than one 4D client station can have the same registered name."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When this command is executed, a process, named ",(0,i.jsx)(n.em,{children:"clientName"}),", is created on the client station. This process can only be aborted by the ",(0,i.jsx)(n.a,{href:"/docs/commands/unregister-client",children:"UNREGISTER CLIENT"})," command.",(0,i.jsx)(n.br,{}),"\nIf you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, the created process is local. 4D will automatically add the dollar sign ($) at the beginning of the process name. Otherwise, the process is global."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibility Note:"}),' Since version 11.3 of 4D, the server/client communication mechanisms have been optimized. Now the server sends execution requests directly to the registered clients when necessary (technology "push"). The previous principle where clients queried the server periodically is no longer used. The ',(0,i.jsx)(n.em,{children:"period"})," parameter is ignored if it is passed."]}),"\n",(0,i.jsxs)(n.p,{children:["Once the command is executed, it is not possible to modify a 4D client\u2019s name on the fly. To do so, you must call the ",(0,i.jsx)(n.a,{href:"/docs/commands/unregister-client",children:"UNREGISTER CLIENT"})," command, then the ",(0,i.jsx)(n.strong,{children:"REGISTER CLIENT"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In the following example, we are going to create a small messaging system that allows the client workstations to communicate between themselves."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"This method, Registration, allows you to register a 4D client and to keep it ready to receive a message from another 4D client:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//You must unregister before registering under another name\n\xa0UNREGISTER CLIENT\n\xa0Repeat\n\xa0\xa0\xa0\xa0vPseudoName:=Request("Enter your name:";"User";"OK";"Cancel")\n\xa0Until((OK=0)|(vPseudoName#""))\n\xa0If(OK=0)\n\xa0\xa0\xa0\xa0...\xa0// Don\u2019t do anything\n\xa0Else\n\xa0\xa0\xa0\xa0REGISTER CLIENT(vPseudoName)\n\xa0End if\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"The following instruction allows you to get a list of the registered clients. It can be placed in the :"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PrClientList:=New process("4D Client List";32000;"List of registered clients")\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"The method 4D Client List allows you to recuperate all the registered 4D clients and those that can receive messages:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0If(Application type=4D Remote Mode)\n\xa0\xa0// the code below is only valid in client-server mode\n\xa0\xa0\xa0\xa0$Ref:=Open window(100;100;300;400;-(Palette window+Has window title);"List of registered clients")\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET REGISTERED CLIENTS($ClientList;$ListeCharge)\n\xa0\xa0//Retrieve the registered clients in $ClientList\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ERASE WINDOW($Ref)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY(0;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($p;1;Size of array($ClientList))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE($ClientList{$p}+Char(Carriage return))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0//Display each second\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;60)\n\xa0\xa0\xa0\xa0Until(False)\xa0// Infinite loop\n\xa0End if\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"The following method allows you to send a message to another registered 4D client. It calls the Display_Message method (see below)."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$Addressee:=Request("Addressee of the message:";"")\n\xa0\xa0// Enter the name of the people visible in the window generated by the\n\xa0\xa0// On Startup database method\n\xa0If(OK#0)\n\xa0\xa0\xa0\xa0$Message:=Request("Message:")\xa0// message\n\xa0\xa0\xa0\xa0If(OK#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXECUTE ON CLIENT($Addressee;"Display_Message";$Message)\xa0// Send message\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Here is the Display_Message method:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0#DECLARE($message : Text)\n\xa0ALERT($message)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Finally, this method allows a client station to no longer be visible by the other 4D clients and to no longer receive messages:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0UNREGISTER CLIENT\n"})}),"\n",(0,i.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"If the 4D client is correctly registered, the OK system variable is equal to 1. If the 4D client was already registered, the command doesn\u2019t do anything and OK is equal to 0."}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"648"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);