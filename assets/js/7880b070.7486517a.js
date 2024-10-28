"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23293],{69569:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(474848),n=o(28453);const r={id:"formObjectsOverview",title:"Form Objects"},i=void 0,c={id:"FormObjects/formObjectsOverview",title:"Form Objects",description:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/versioned_docs/version-20-R6/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/20-R6/FormObjects/formObjectsOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"formObjectsOverview",title:"Form Objects"},sidebar:"docs",previous:{title:"Window Size",permalink:"/docs/20-R6/FormEditor/windowSize"},next:{title:"Button",permalink:"/docs/20-R6/FormObjects/buttonOverview"}},a={},d=[{value:"Active and static objects",id:"active-and-static-objects",level:2},{value:"Handling form objects",id:"handling-form-objects",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."}),"\n",(0,s.jsx)(t.h2,{id:"active-and-static-objects",children:"Active and static objects"}),"\n",(0,s.jsxs)(t.p,{children:["4D forms support a large number of built-in ",(0,s.jsx)(t.strong,{children:"active"})," and ",(0,s.jsx)(t.strong,{children:"static"})," objects:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"active objects"})," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"static objects"})," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"handling-form-objects",children:"Handling form objects"}),"\n",(0,s.jsx)(t.p,{children:"You can add or modify 4D form objects in the following ways:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R6/FormEditor/overview",children:"Form Editor"}),":"]})," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"4D language"}),": Commands from the ",(0,s.jsx)(t.code,{children:"Objects (Forms)"})," theme such as ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1111.html",children:(0,s.jsx)(t.code,{children:"OBJECT DUPLICATE"})})," or ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4dv20/help/command/en/page166.html",children:(0,s.jsx)(t.code,{children:"OBJECT SET FONT STYLE"})})," allow to create and define form objects."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON code in dynamic forms:"})," Define the properties using JSON. Use the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/propertiesObject#type",children:"type"})," property to define the object type, then set its ",(0,s.jsx)(t.a,{href:"/docs/20-R6/FormObjects/propertiesReference",children:"available properties"}),".\nExample for a button object:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'\t{\n\t\t"type": "button", \n\t\t"style": "bevel", \n\t\t"text": "OK", \n\t\t"action": "Cancel", \n\t\t"left": 60, \n\t\t"top": 160, \n\t\t"width": 100, \n\t\t"height": 20\n\t}\n'})})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var s=o(296540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);