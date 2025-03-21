"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50358"],{112571:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/execute-on-client","title":"EXECUTE ON CLIENT","description":"EXECUTE ON CLIENT ( clientName ; methodName {; param}{; param2 ; ... ; paramN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/execute-on-client.md","sourceDirName":"commands-legacy","slug":"/commands/execute-on-client","permalink":"/docs/20-R7/commands/execute-on-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-on-client.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-on-client","title":"EXECUTE ON CLIENT","slug":"/commands/execute-on-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELAY PROCESS","permalink":"/docs/20-R7/commands/delay-process"},"next":{"title":"Execute on server","permalink":"/docs/20-R7/commands/execute-on-server"}}'),r=t("785893"),d=t("250065");let i={id:"execute-on-client",title:"EXECUTE ON CLIENT",slug:"/commands/execute-on-client",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," ( ",(0,r.jsx)(n.em,{children:"clientName"})," ; ",(0,r.jsx)(n.em,{children:"methodName"})," {; ",(0,r.jsx)(n.em,{children:"param"}),"}{; ",(0,r.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Client\u2019s registered name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name of the method to execute"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Method\u2019s parameter(s)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," command forces the execution of the ",(0,r.jsx)(n.em,{children:"methodName"})," method, with the parameters ",(0,r.jsx)(n.em,{children:"param1... paramN"}),", if necessary, on the registered 4D Client whose name is ",(0,r.jsx)(n.em,{children:"clientName"}),". 4D Client\u2019s registered name is defined by the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,r.jsx)(n.p,{children:"This command can be called from a 4D Client or a stored method from 4D Server."}),"\n",(0,r.jsxs)(n.p,{children:["If the method requires one or more parameters, pass them after the name of the method.",(0,r.jsx)(n.br,{}),"\nThe execution of the method on 4D Client is done in a process automatically created on the client workstation, and its name will be the 4D Client\u2019s registered name."]}),"\n",(0,r.jsxs)(n.p,{children:["If this command is called many times in a row on the same 4D Client, the execution orders will be stacked. Therefore, the methods will be treated one after another in asynchronous mode. The more methods that are stacked, the bigger the workload is for the 4D Client. You can know the state of the workload of each client by using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The stacking of the execution orders cannot be modified or stopped unless 4D Client is unregistered by using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["You can simultaneously execute the same method on many or all of the registered 4D Clients. To do so, use the wildcard character (@) in the ",(0,r.jsx)(n.em,{children:"clientName"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s assume that you want to execute the \u201CGenerateNums\u201D method on the \u201CClient1\u201D client station:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("Client1";"GenerateNums";12;$a;"Text")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"If you want all the clients to execute the \u201CEmptyTemp\u201D method:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("@";"EmptyTemp")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the example of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OK"})," system variable is equal to 1 if 4D Server has correctly received the execution request of a method; however, this does not guarantee that the method has been properly executed by 4D Client."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/execute-on-server",children:"Execute on server"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/register-client",children:"REGISTER CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"651"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);