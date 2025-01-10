"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43609"],{905450:function(e,t,o){o.r(t),o.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"FormObjects/formObjectsOverview","title":"About 4D Form Objects","description":"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.","source":"@site/versioned_docs/version-19/FormObjects/formObjects_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/formObjectsOverview","permalink":"/docs/19/FormObjects/formObjectsOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"formObjectsOverview","title":"About 4D Form Objects"},"sidebar":"docs","previous":{"title":"Window Size","permalink":"/docs/19/FormEditor/windowSize"},"next":{"title":"Button","permalink":"/docs/19/FormObjects/buttonOverview"}}'),s=o("785893"),r=o("250065");let i={id:"formObjectsOverview",title:"About 4D Form Objects"},c=void 0,a={},d=[{value:"Active and static objects",id:"active-and-static-objects",level:2},{value:"Handling form objects",id:"handling-form-objects",level:2}];function l(e){let t={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."}),"\n",(0,s.jsx)(t.h2,{id:"active-and-static-objects",children:"Active and static objects"}),"\n",(0,s.jsxs)(t.p,{children:["4D forms support a large number of built-in ",(0,s.jsx)(t.strong,{children:"active"})," and ",(0,s.jsx)(t.strong,{children:"static"})," objects:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"active objects"})," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"static objects"})," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"handling-form-objects",children:"Handling form objects"}),"\n",(0,s.jsx)(t.p,{children:"You can add or modify 4D form objects in the following ways:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"/docs/19/FormEditor/overview",children:"Form Editor"}),":"]})," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,s.jsx)(t.br,{}),"\nSee the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html",children:"Building Forms"})," chapter for more information."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"4D language"}),": Commands from the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html",children:"Objects (Forms)"})," theme such as ",(0,s.jsx)(t.code,{children:"OBJECT DUPLICATE"})," or ",(0,s.jsx)(t.code,{children:"OBJECT SET FONT STYLE"})," allow to create and define form objects."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON code in dynamic forms:"})," Define the properties using JSON. Use the ",(0,s.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#type",children:"type"})," property to define the object type, then set its available properties.  See the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292",children:"Dynamic Forms"})," page for information.",(0,s.jsx)(t.br,{}),"\nExample for a button object:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n	"type": "button", \n	"style": "bevel", \n	"text": "OK", \n	"action": "Cancel", \n	"left": 60, \n	"top": 160, \n	"width": 100, \n	"height": 20\n}\n'})}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return c},a:function(){return i}});var n=o(667294);let s={},r=n.createContext(s);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);