"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4860],{765121:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(474848),i=s(28453);const o={id:"singleton",title:"$singleton"},l=void 0,r={id:"REST/singleton",title:"$singleton",description:"You can directly call exposed functions of your shared singletons through REST.",source:"@site/versioned_docs/version-20-R7/REST/$singleton.md",sourceDirName:"REST",slug:"/REST/singleton",permalink:"/docs/REST/singleton",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24singleton.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"singleton",title:"$singleton"},sidebar:"docs",previous:{title:"$info",permalink:"/docs/REST/info"},next:{title:"$upload",permalink:"/docs/REST/upload"}},c={},a=[{value:"Function calls",id:"function-calls",level:2},{value:"POST request",id:"post-request",level:4},{value:"GET request",id:"get-request",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Response",id:"response",level:4}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You can directly call exposed ",(0,t.jsx)(n.a,{href:"/docs/Concepts/classes#singleton-classes",children:"functions of your shared singletons"})," through REST."]}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions are called in POST or GET requests with the ",(0,t.jsx)(n.code,{children:"$singleton"})," command and without ",(0,t.jsx)(n.code,{children:"()"}),". For example, if you have defined a ",(0,t.jsx)(n.code,{children:"buildVehicle()"})," function in the ",(0,t.jsx)(n.code,{children:"VehicleFactory"})," shared singleton class, you could call it using the following request:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"/rest/$singleton/VehicleFactory/buildVehicle\n"})}),"\n",(0,t.jsx)(n.p,{children:'with data in the body of the POST request: ["truck"]'}),"\n",(0,t.jsx)(n.p,{children:"In 4D language, this call is equivalent to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$singleton:=cs.VehicleFactory.me.buildVehicle("truck")\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Keep in mind that only functions with the ",(0,t.jsxs)(n.a,{href:"/docs/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:[(0,t.jsx)(n.code,{children:"exposed"})," keyword"]})," can be directly called from REST requests."]})}),"\n",(0,t.jsx)(n.h2,{id:"function-calls",children:"Function calls"}),"\n",(0,t.jsxs)(n.p,{children:["Singleton functions can be called using REST ",(0,t.jsx)(n.strong,{children:"POST"})," or ",(0,t.jsx)(n.strong,{children:"GET"})," requests."]}),"\n",(0,t.jsx)(n.p,{children:"The formal syntax is:"}),"\n",(0,t.jsx)(n.h4,{id:"post-request",children:"POST request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction"})}),"\n",(0,t.jsxs)(n.p,{children:["with data in the body of the POST request: ",(0,t.jsx)(n.code,{children:'["myparam"]'})]}),"\n",(0,t.jsx)(n.h4,{id:"get-request",children:"GET request"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction?$params='[\"myparam\"]'"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SingletonClassFunction()"})," function must have been declared with the ",(0,t.jsx)(n.code,{children:"onHttpGet"})," keyword to be callable with ",(0,t.jsx)(n.code,{children:"GET"})," (see ",(0,t.jsx)(n.a,{href:"ClassFunctions#function-configuration",children:"Function configuration"}),")."]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,t.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,t.jsxs)(n.a,{href:"/docs/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:[(0,t.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can restrict calls to specific singleton functions by configuring appropriate privileges in the ",(0,t.jsx)(n.a,{href:"/docs/ORDA/privileges#rolesjson-file",children:(0,t.jsx)(n.strong,{children:"roles.json"})})," file."]})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["You can send parameters to singleton functions. On the server side, they will be received in the ",(0,t.jsx)(n.a,{href:"/docs/Concepts/parameters#declaring-parameters",children:"declared parameters"})," of the singleton class functions."]}),"\n",(0,t.jsxs)(n.p,{children:["Sending parameters to singleton functions is exactly the same as sending parameter to ORDA class functions. Please refer to ",(0,t.jsxs)(n.a,{href:"/docs/REST/classFunctions#parameters",children:["the ",(0,t.jsx)(n.strong,{children:"Parameters"}),' paragraph of the "Calling class functions" page']})," for a detailed description."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You have created a simple shared singleton with an exposed function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//class mySingleton\n\nshared singleton Class constructor()\n\nexposed Function sayHello ($value : Text)\n\treturn "Hello "+$value\n\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"mySingleton"})," class and ",(0,t.jsx)(n.code,{children:"sayHello"})," function are listed when you call the ",(0,t.jsx)(n.a,{href:"/docs/REST/catalog#singleton",children:(0,t.jsx)(n.code,{children:"$catalog"})})," command."]})}),"\n",(0,t.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"POST"})," ",(0,t.jsx)(n.code,{children:"/rest/$singleton/mySingleton/sayHello"})]}),"\n",(0,t.jsx)(n.p,{children:'Body of the request: ["John"]'}),"\n",(0,t.jsx)(n.h4,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"result": "Hello John"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(296540);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);