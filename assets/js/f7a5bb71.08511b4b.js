"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12284],{108785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(474848),i=t(28453);const r={id:"HTTPAgentClass",title:"HTTPAgent"},o=void 0,d={id:"API/HTTPAgentClass",title:"HTTPAgent",description:"The HTTPAgent class allows you to handle HTTPAgent objects that can be used to manage the persistence and reuse of connections to servers using the HTTPRequest class.",source:"@site/versioned_docs/version-20-R7/API/HTTPAgentClass.md",sourceDirName:"API",slug:"/API/HTTPAgentClass",permalink:"/docs/API/HTTPAgentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FHTTPAgentClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"HTTPAgentClass",title:"HTTPAgent"},sidebar:"docs",previous:{title:"Function",permalink:"/docs/API/FunctionClass"},next:{title:"HTTPRequest",permalink:"/docs/API/HTTPRequestClass"}},c={},l=[{value:"HTTPAgent Object",id:"httpagent-object",level:3},{value:"4D.HTTPAgent.new()",id:"4dhttpagentnew",level:2},{value:"Description",id:"description",level:4},{value:"<code>options</code> parameter",id:"options-parameter",level:4},{value:"Example",id:"example",level:4},{value:".options",id:"options",level:2},{value:"Description",id:"description-1",level:4},{value:".requestsCount",id:"requestscount",level:2},{value:"Description",id:"description-2",level:4},{value:".freeSocketsCount",id:"freesocketscount",level:2},{value:"Description",id:"description-3",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"HTTPAgent"})," class allows you to handle ",(0,s.jsx)(n.a,{href:"#httpagent-object",children:(0,s.jsx)(n.code,{children:"HTTPAgent objects"})})," that can be used to manage the persistence and reuse of connections to servers using the ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass",children:"HTTPRequest class"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"HTTPAgent"})," class is available from the ",(0,s.jsx)(n.code,{children:"4D"})," class store. You can create a new ",(0,s.jsx)(n.a,{href:"#httpagent-object",children:(0,s.jsx)(n.code,{children:"HTTPAgent object"})})," using the ",(0,s.jsx)(n.a,{href:"#4dhttpagentnew",children:"4D.HTTPAgent.new()"})," function."]}),"\n",(0,s.jsx)(n.p,{children:"When no agent is associated to an HTTP request, a global agent with default values is used. The default agent is the simplest form of HTTP agent, suitable for basic use cases. Custom agents are recommended for more control, at the agent level rather than for each HTTP request, over specific aspects of the connection such keep-alive settings, timeouts or TLS/SSL configurations."}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20 R6"}),(0,s.jsx)(n.td,{children:"Class added"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"httpagent-object",children:"HTTPAgent Object"}),"\n",(0,s.jsx)(n.p,{children:"An HTTPAgent object is a shareable object."}),"\n",(0,s.jsx)(n.p,{children:"HTTPAgent objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#options",children:[(0,s.jsx)(n.strong,{children:"options"})," : Object"]}),(0,s.jsx)(n.br,{}),"the current used options of the HTTPAgent"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#requestsCount",children:[(0,s.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),(0,s.jsx)(n.br,{}),"the number of requests currently handled by the HTTPAgent"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#freeSocketsCount",children:[(0,s.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),(0,s.jsx)(n.br,{}),"the number of free sockets from ",(0,s.jsx)(n.code,{children:"maxSockets"})," associated with the HTTPAgent"]})})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxadmonitiontitle,{}),(0,s.jsx)(n.p,{children:"Since HTTPAgent is a shareable object, you can add one to a singleton class so you can use the same agent for all your requests to the same server."})]}),"\n",(0,s.jsx)(n.h2,{id:"4dhttpagentnew",children:"4D.HTTPAgent.new()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D.HTTPAgent.new"}),"( { ",(0,s.jsx)(n.em,{children:"options"})," : Object } ) : 4D.HTTPAgent"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"default options for the HTTPAgent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#httpagent-object",children:"4D.HTTPAgent"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"New HTTPAgent object"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"4D.HTTPAgent.new()"})," function creates a shareable HTTPAgent object with the defined ",(0,s.jsx)(n.em,{children:"options"}),", and returns a ",(0,s.jsx)(n.code,{children:"4D.HTTPAgent"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["The returned ",(0,s.jsx)(n.a,{href:"#httpagent-object",children:(0,s.jsx)(n.code,{children:"HTTPAgent object"})})," is used to customize connections to HTTP servers."]}),"\n",(0,s.jsxs)(n.h4,{id:"options-parameter",children:[(0,s.jsx)(n.code,{children:"options"})," parameter"]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"options"})," parameter, pass an object that can contain the following properties (all the properties are optional):"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxadmonitiontitle,{}),(0,s.jsxs)(n.p,{children:["HTTPAgent options will be merged with ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#4dhttprequestnew",children:"HTTPRequest options"})," (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used."]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"keepAlive"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Activates keep alive for the agent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxSockets"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"65535"}),(0,s.jsx)(n.td,{children:"Maximum number of sockets per server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxTotalSockets"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"65535"}),(0,s.jsx)(n.td,{children:"Maximum number of sockets for the agent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"undefined"}),(0,s.jsx)(n.td,{children:"If defined, timeout after which an unused socket is closed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"certificatesFolder"}),(0,s.jsx)(n.td,{children:"Folder"}),(0,s.jsxs)(n.td,{children:["undefined (see default value in ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,s.jsx)(n.td,{children:"Sets the active client certificates folder for the requests using the agent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minTLSVersion"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["undefined (see default value in ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,s.jsx)(n.td,{children:"Sets the minimum version of TLS for the requests using this agent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"protocol"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["undefined (see default value in ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,s.jsx)(n.td,{children:"Protocol used for the requests using the agent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"validateTLSCertificate"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["undefined (see default value in ",(0,s.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#options-parameter",children:"HTTPRequest.new()"}),")"]}),(0,s.jsx)(n.td,{children:"validateTLSCertificate for the requests using the agent"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options."})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Creating the HTTPAgent:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.maxSockets:=5 //5 is the maximum number of sockets per server\n$options.maxTotalSockets:=10 //10 is the maximum number of sockets for the agent\n$options.validateTLSCertificate:=True //To validate the sever's certificate\n\nvar $myAgent:=4D.HTTPAgent.new($options)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sending a request to check the local time of any city:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $options:={}\n$options.method:="GET"\n$options.agent:=$myAgent\nvar $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) \n\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxadmonitiontitle,{}),(0,s.jsx)(n.p,{children:"When no agent is associated to an HTTPRequest, a global agent with default values is used."})]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:".options"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"options"})," : Object"]}),"\n",(0,s.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".options"})," property object contains the current used options of the HTTPAgent."]}),"\n",(0,s.jsx)(n.h2,{id:"requestscount",children:".requestsCount"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),"\n",(0,s.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".requestsCount"})," property contains the number of requests currently handled by the HTTPAgent."]}),"\n",(0,s.jsx)(n.h2,{id:"freesocketscount",children:".freeSocketsCount"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),"\n",(0,s.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".freeSocketsCount"})," property contains the number of free sockets from ",(0,s.jsx)(n.code,{children:"maxSockets"})," associated with the HTTPAgent."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);