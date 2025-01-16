"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62428"],{206399:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"REST/configuration","title":"Server Configuration","description":"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.","source":"@site/versioned_docs/version-20-R7/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/20-R7/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"configuration","title":"Server Configuration"},"sidebar":"docs","previous":{"title":"Getting Started","permalink":"/docs/20-R7/REST/gettingStarted"},"next":{"title":"Users and sessions","permalink":"/docs/20-R7/REST/authUsers"}}'),r=s("785893"),o=s("250065");let i={id:"configuration",title:"Server Configuration"},a=void 0,l={},c=[{value:"Starting the REST Server",id:"starting-the-rest-server",level:2},{value:"Controlling REST access",id:"controlling-rest-access",level:2},{value:"Exposing tables and fields",id:"exposing-tables-and-fields",level:2},{value:"Exposing tables",id:"exposing-tables",level:3},{value:"Exposing fields",id:"exposing-fields",level:3},{value:"Preemptive mode",id:"preemptive-mode",level:2}];function d(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, ",(0,r.jsx)(t.em,{children:"i.e."})," to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more."]}),"\n",(0,r.jsx)(t.p,{children:"To start using the REST features, you need to start and configure the 4D REST server."}),"\n",(0,r.jsx)(t.h2,{id:"starting-the-rest-server",children:"Starting the REST Server"}),"\n",(0,r.jsxs)(t.p,{children:["For security reasons, by default, 4D does not respond to REST requests. If you want to start the REST Server, you must check the ",(0,r.jsx)(t.strong,{children:"Expose as REST server"})," option in the ",(0,r.jsx)(t.strong,{children:"Web"})," > ",(0,r.jsx)(t.strong,{children:"Web Features"})," page of the structure settings in order for REST requests to be processed."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"alt-text",src:s(437225).Z+"",width:"855",height:"381"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"REST services use the 4D HTTP server, so you need to make sure that the 4D web server is started."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.'}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"You must restart the 4D application for your changes to take effect."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"controlling-rest-access",children:"Controlling REST access"}),"\n",(0,r.jsx)(t.p,{children:"By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage."}),"\n",(0,r.jsxs)(t.p,{children:["As of 4D 20 R6, you configure REST accesses by enabling the ",(0,r.jsxs)(t.a,{href:"/docs/20-R7/REST/authUsers#force-login-mode",children:[(0,r.jsx)(t.strong,{children:"force login"})," mode"]})," and create an ",(0,r.jsx)(t.a,{href:"/docs/20-R7/REST/authUsers#authentify",children:(0,r.jsx)(t.code,{children:"authentify()"})})," datastore class function to authenticate users and assign privileges to their web session."]}),"\n",(0,r.jsx)(t.admonition,{title:"Compatibility",type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Access"})," area in the Settings dialog box is only available in converted projects for compatibility. See ",(0,r.jsx)(t.a,{href:"/docs/20-R7/settings/web#access",children:"Access"})," for more information."]})}),"\n",(0,r.jsx)(t.h2,{id:"exposing-tables-and-fields",children:"Exposing tables and fields"}),"\n",(0,r.jsxs)(t.p,{children:["Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/ORDA/dsmapping#datastore",children:"datastore interface"}),". Thus, it can use their data. For example, if your database contains an [Employee] table, it is possible to write:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"This request will return all employees whose salary field is higher than 10000."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:'4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error."}),"\n",(0,r.jsx)(t.h3,{id:"exposing-tables",children:"Exposing tables"}),"\n",(0,r.jsx)(t.p,{children:"By default, all tables are exposed in REST."}),"\n",(0,r.jsx)(t.p,{children:"For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a [Users] table storing user names and passwords, it would be better not to expose it."}),"\n",(0,r.jsx)(t.p,{children:"To remove the REST exposure for a table:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Display the Table Inspector in the Structure editor and select the table you want to modify."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Uncheck the ",(0,r.jsx)(t.strong,{children:"Expose as REST resource"})," option:\n",(0,r.jsx)(t.img,{alt:"alt-text",src:s(213590).Z+"",width:"279",height:"330"}),"\nDo this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"exposing-fields",children:"Exposing fields"}),"\n",(0,r.jsx)(t.p,{children:"By default, all 4D database fields are exposed in REST."}),"\n",(0,r.jsx)(t.p,{children:"You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field."}),"\n",(0,r.jsx)(t.p,{children:"To remove the REST exposure for a field:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Display the Field Inspector in the Structure editor and select the field you want to modify."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Uncheck the ",(0,r.jsx)(t.strong,{children:"Expose as REST resource"})," for the field.\n",(0,r.jsx)(t.img,{alt:"alt-text",src:s(372600).Z+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"preemptive-mode",children:"Preemptive mode"}),"\n",(0,r.jsxs)(t.p,{children:["On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,r.jsx)(t.strong,{children:"even in interpreted mode"}),". You need to make sure that your code is ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compliant with a preemptive execution"}),"."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["To debug interpreted web code on the server machine, make sure the debugger is ",(0,r.jsx)(t.a,{href:"/docs/20-R7/Debugging/debugging-remote",children:"attached to the server"})," or ",(0,r.jsx)(t.a,{href:"/docs/20-R7/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client",children:"to a remote machine"}),". Web processes then switch to cooperative mode and the web server code can be debugged."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With 4D single-user, interpreted code always runs in cooperative mode."})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},437225:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},372600:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},213590:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return i}});var n=s(667294);let r={},o=n.createContext(r);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);