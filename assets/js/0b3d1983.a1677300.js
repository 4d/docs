"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60081],{940303:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(474848),t=r(28453);const i={id:"web-server-list",title:"WEB Server list",displayed_sidebar:"docs"},l=void 0,o={id:"commands/web-server-list",title:"WEB Server list",description:"WEB Server list : Collection",source:"@site/versioned_docs/version-20-R7/commands/web-server-list.md",sourceDirName:"commands",slug:"/commands/web-server-list",permalink:"/docs/commands/web-server-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fweb-server-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-server-list",title:"WEB Server list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB Server",permalink:"/docs/commands/web-server"},next:{title:"WEB SET HOME PAGE",permalink:"/docs/commands/web-set-home-page"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB Server list"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Collection of the available Web Server objects"})]})})]}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18 R3"}),(0,s.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WEB Server list"})," command returns a collection of all Web server objects available in the 4D application."]}),"\n",(0,s.jsx)(n.p,{children:"A 4D application can contain anywhere from one to several Web servers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"one Web server for the host database (default Web server)"}),"\n",(0,s.jsx)(n.li,{children:"one Web server for each component."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All available Web servers are returned by the ",(0,s.jsx)(n.code,{children:"WEB Server list"})," command, whether they are actually running or not."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the ",(0,s.jsx)(n.a,{href:"/docs/commands/web-server",children:(0,s.jsx)(n.code,{children:"WEB Server"})})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"/docs/API/WebServerClass#name",children:".name"})," property of the Web server object to identify the project or component to which each Web server object in the list is attached."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"We want to know how many running web servers are available:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $wSList : Collection\n var $vRun : Integer\n\n $wSList:=WEB Server list\n $vRun:=$wSList.countValues(True;"isRunning")\n ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/web-server",children:"WEB Server"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/API/WebServerClass#stop",children:"webServer.stop()"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(296540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);