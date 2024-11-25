"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31417"],{469493:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"Extensions/develop-plug-ins","title":"Developing Plug-ins","description":"Why the need for a plug-in?","source":"@site/versioned_docs/version-20/Extensions/develop-plug-ins.md","sourceDirName":"Extensions","slug":"/Extensions/develop-plug-ins","permalink":"/docs/20/Extensions/develop-plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"develop-plug-ins","title":"Developing Plug-ins"},"sidebar":"docs","previous":{"title":"Developing Components","permalink":"/docs/20/Extensions/develop-components"},"next":{"title":"Web Applications","permalink":"/docs/20/category/web-applications"}}'),o=t("785893"),s=t("250065");let l={id:"develop-plug-ins",title:"Developing Plug-ins"},a=void 0,r={},c=[{value:"Why the need for a plug-in?",id:"why-the-need-for-a-plug-in",level:2},{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Important note",id:"important-note",level:3},{value:"How to create a plug-in?",id:"how-to-create-a-plug-in",level:2},{value:"Sharing plug-ins",id:"sharing-plug-ins",level:2}];function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"why-the-need-for-a-plug-in",children:"Why the need for a plug-in?"}),"\n",(0,o.jsx)(n.p,{children:"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."}),"\n",(0,o.jsx)(n.p,{children:"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."}),"\n",(0,o.jsx)(n.p,{children:"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity."}),"\n",(0,o.jsx)(n.h2,{id:"what-is-a-plug-in-and-what-can-it-do",children:"What is a plug-in and what can it do?"}),"\n",(0,o.jsx)(n.p,{children:"A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity."}),"\n",(0,o.jsx)(n.p,{children:"Usually, a plug-in does things that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"4D cannot do (ie, specific platform technology),"}),"\n",(0,o.jsx)(n.li,{children:"will be very hard to write just using 4D,"}),"\n",(0,o.jsx)(n.li,{children:"are only available as Plug-in Entrypoint"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.strong,{children:"plug-in routine"})," is a routine written in native language (usually C or C++) that causes an action."]}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.strong,{children:"external area"})," is a part of a form that can display almost everything and interact with the user when necessary."]}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.strong,{children:"external process"})," is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"important-note",children:"Important note"}),"\n",(0,o.jsxs)(n.p,{children:['A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call ',(0,o.jsx)(n.code,{children:"PA_Yield()"})," to give time to the 4D scheduler unless its task is critical for both it and the application."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-create-a-plug-in",children:"How to create a plug-in?"}),"\n",(0,o.jsxs)(n.p,{children:["4D provides on GitHub an open-source ",(0,o.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,o.jsx)(n.strong,{children:"plug-in SDK"})}),", containing the 4D Plugin API and the 4D Plugin Wizard:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,o.jsx)(n.strong,{children:"4D Plugin API"})}),", written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,o.jsx)(n.strong,{children:"4D Plugin Wizard"})})," is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"sharing-plug-ins",children:"Sharing plug-ins"}),"\n",(0,o.jsxs)(n.p,{children:["We encourage you to support the 4D developer community by sharing your plug-ins, preferably on the ",(0,o.jsx)(n.a,{href:"https://github.com/topics/4d-plugin",children:"GitHub platform"}),". We recommend that you use the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"4d-plugin"})})," topic to be correctly referenced."]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(667294);let o={},s=i.createContext(o);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);