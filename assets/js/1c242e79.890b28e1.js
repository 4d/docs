"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96726"],{383237:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"WebServer/preemptiveWeb","title":"Using preemptive web processes","description":"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.","source":"@site/versioned_docs/version-19/WebServer/preemptiveWeb.md","sourceDirName":"WebServer","slug":"/WebServer/preemptiveWeb","permalink":"/docs/19/WebServer/preemptiveWeb","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"preemptiveWeb","title":"Using preemptive web processes"},"sidebar":"docs","previous":{"title":"User sessions","permalink":"/docs/19/WebServer/sessions"},"next":{"title":"Getting Started","permalink":"/docs/19/REST/gettingStarted"}}'),t=s("785893"),i=s("250065");let d={id:"preemptiveWeb",title:"Using preemptive web processes"},c=void 0,l={},o=[{value:"Availability of preemptive mode for web processes",id:"availability-of-preemptive-mode-for-web-processes",level:2},{value:"Writing thread-safe web server code",id:"writing-thread-safe-web-server-code",level:2},{value:"Thread-safety of 4D web code",id:"thread-safety-of-4d-web-code",level:2},{value:"4D commands and database methods",id:"4d-commands-and-database-methods",level:3},{value:"Web Server URLs",id:"web-server-urls",level:3},{value:"Preemptive web process icon",id:"preemptive-web-process-icon",level:3}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible."}),"\n",(0,t.jsxs)(n.p,{children:["For in-depth information on preemptive process in 4D, please refer to the ",(0,t.jsx)(n.em,{children:"Preemptive 4D processes"})," section in the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com",children:(0,t.jsx)(n.em,{children:"4D Language Reference"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"availability-of-preemptive-mode-for-web-processes",children:"Availability of preemptive mode for web processes"}),"\n",(0,t.jsx)(n.p,{children:"The following table indicates whether the preemptive mode is used or is available, depending on the execution context:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"4D Server"}),(0,t.jsxs)(n.th,{children:["Interpreted, project (",(0,t.jsx)(n.a,{href:"/docs/19/Desktop/clientServer#using-4d-and-4d-server-on-the-same-machine",children:"client connected locally"}),")"]}),(0,t.jsx)(n.th,{children:"Interpreted, project (no client connected locally) or binary"}),(0,t.jsx)(n.th,{children:"Compiled"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"REST Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:"preemptive"}),(0,t.jsx)(n.td,{children:"preemptive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Services Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Legacy REST"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"4D remote/single-user"}),(0,t.jsx)(n.th,{children:"Interpreted"}),(0,t.jsx)(n.th,{children:"Compiled"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"REST Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:"preemptive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Services Server"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Legacy REST"}),(0,t.jsx)(n.td,{children:"cooperative"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"web setting"})})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["REST Server: handles ",(0,t.jsx)(n.a,{href:"/docs/19/REST/classFunctions",children:"ORDA data model class functions"})]}),"\n",(0,t.jsxs)(n.li,{children:["Web Server: handles ",(0,t.jsx)(n.a,{href:"/docs/19/WebServer/templates",children:"web templates"}),", ",(0,t.jsx)(n.a,{href:"/docs/19/WebServer/httpRequests",children:"4DACTION and database methods"})]}),"\n",(0,t.jsx)(n.li,{children:"Web Service Server: handles SOAP requests"}),"\n",(0,t.jsxs)(n.li,{children:["Legacy REST: direct requests to 4D methods (",(0,t.jsx)(n.code,{children:"/rest/{table}/{methodName}"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"web setting"})})," means that the preemptive mode depends on a setting value:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["when ",(0,t.jsx)(n.a,{href:"/docs/19/WebServer/sessions#enabling-sessions",children:(0,t.jsx)(n.strong,{children:"Scalable sessions"})})," option is selected, the ",(0,t.jsx)(n.a,{href:"/docs/19/WebServer/sessions#preemptive-mode",children:"preemptive mode is automatically used"})," for web processes."]}),"\n",(0,t.jsxs)(n.li,{children:["otherwise, the ",(0,t.jsx)(n.a,{href:"/docs/19/WebServer/webServerConfig#use-preemptive-processes",children:(0,t.jsx)(n.strong,{children:"Use preemptive processes"})})," option is taken into account."]}),"\n",(0,t.jsxs)(n.li,{children:['regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html",children:"Publishing a Web Service with 4D"}),") or proxy client methods (see ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html",children:"Subscribing to a Web Service in 4D"}),") and make sure they are confirmed thread-safe by the compiler."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"writing-thread-safe-web-server-code",children:"Writing thread-safe web server code"}),"\n",(0,t.jsxs)(n.p,{children:["All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the ",(0,t.jsx)(n.strong,{children:"Use preemptive processes"})," option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"All web-related database methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/19/WebServer/authentication#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/19/WebServer/httpRequests#on-web-connection",children:(0,t.jsx)(n.code,{children:"On Web Connection"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/19/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,t.jsx)(n.code,{children:"On REST Authentication"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,t.jsx)(n.code,{children:"On Mobile App Authentication"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"compiler_web"}),' project method (regardless of its actual "Execution mode" property);']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Basically any code processed by the ",(0,t.jsx)(n.code,{children:"PROCESS 4D TAGS"})," command in the web context, for example through .shtml pages."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Any project method with the "Available through 4D tags and URLS (',(0,t.jsx)(n.code,{children:"4DACTION"}),', etc.)" attribute']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Triggers for tables with "Expose as REST resource" attribute'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/19/REST/classFunctions",children:"ORDA data model class functions"})," called via REST"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Project methods with "REST Server" property checked (legacy REST calls)'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the ",(0,t.jsx)(n.em,{children:"Writing a thread-safe method"})," paragraph in the ",(0,t.jsx)(n.em,{children:"Processes"})," chapter of the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com",children:"4D Language Reference"})," manual."]}),"\n",(0,t.jsx)(n.h2,{id:"thread-safety-of-4d-web-code",children:"Thread-safety of 4D web code"}),"\n",(0,t.jsx)(n.p,{children:"Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode."}),"\n",(0,t.jsx)(n.h3,{id:"4d-commands-and-database-methods",children:"4D commands and database methods"}),"\n",(0,t.jsxs)(n.p,{children:["All 4D web-related commands are thread-safe, ",(0,t.jsx)(n.em,{children:"i.e."}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["all commands from the ",(0,t.jsx)(n.em,{children:"Web Server"})," theme,"]}),"\n",(0,t.jsxs)(n.li,{children:["all commands from the ",(0,t.jsx)(n.em,{children:"HTTP Client"})," theme."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The web-related database methods are thread-safe and can be used in preemptive mode (see below): ",(0,t.jsx)(n.code,{children:"On Web Authentication"}),", ",(0,t.jsx)(n.code,{children:"On Web Connection"}),", ",(0,t.jsx)(n.code,{children:"On REST Authentication"}),"...)."]}),"\n",(0,t.jsx)(n.p,{children:"Of course, the code executed by these methods must also be thread-safe."}),"\n",(0,t.jsx)(n.h3,{id:"web-server-urls",children:"Web Server URLs"}),"\n",(0,t.jsx)(n.p,{children:"The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"4daction/"})," (the called project method must also be thread-safe)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"4dcgi/"})," (the called database methods must also be thread-safe)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"4dwebtest/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"4dblank/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"4dstats/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"4dhtmlstats/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"4dcacheclear/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"rest/"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"4dimgfield/"})," (generated by ",(0,t.jsx)(n.code,{children:"PROCESS 4D TAGS"})," for web request on picture fields)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"4dimg/"})," (generated by ",(0,t.jsx)(n.code,{children:"PROCESS 4D TAGS"})," for web request on picture variables)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"preemptive-web-process-icon",children:"Preemptive web process icon"}),"\n",(0,t.jsx)(n.p,{children:"Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Process type"}),(0,t.jsx)(n.th,{children:"Icon"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Preemptive web method"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:s(335901).Z+"",width:"40",height:"32"})})]})})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},335901:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);