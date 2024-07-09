/*! For license information please see 884ee5f2.0ab1c3d9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46024],{436534:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(474848),n=o(28453);const s={id:"formObjectsOverview",title:"About 4D Form Objects"},i=void 0,c={id:"FormObjects/formObjectsOverview",title:"About 4D Form Objects",description:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/versioned_docs/version-19/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/19/FormObjects/formObjectsOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"formObjectsOverview",title:"About 4D Form Objects"},sidebar:"docs",previous:{title:"Window Size",permalink:"/docs/19/FormEditor/windowSize"},next:{title:"Button",permalink:"/docs/19/FormObjects/buttonOverview"}},a={},d=[{value:"Active and static objects",id:"Active-and-static-objects",level:2},{value:"Handling form objects",id:"Handling-form-objects",level:2}];function l(e){const t={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"You build and customize your application forms by manipulating the objects on them. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."}),"\n",(0,r.jsx)(t.h2,{id:"Active-and-static-objects",children:"Active and static objects"}),"\n",(0,r.jsxs)(t.p,{children:["4D forms support a large number of built-in ",(0,r.jsx)(t.strong,{children:"active"})," and ",(0,r.jsx)(t.strong,{children:"static"})," objects:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"active objects"})," perform a database task or an interface function. Fields are active objects. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"static objects"})," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"Handling-form-objects",children:"Handling form objects"}),"\n",(0,r.jsx)(t.p,{children:"You can add or modify 4D form objects in the following ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"/docs/19/FormEditor/overview",children:"Form Editor"}),":"]})," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,r.jsx)(t.br,{}),"\nSee the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html",children:"Building Forms"})," chapter for more information."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"4D language"}),": Commands from the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html",children:"Objects (Forms)"})," theme such as ",(0,r.jsx)(t.code,{children:"OBJECT DUPLICATE"})," or ",(0,r.jsx)(t.code,{children:"OBJECT SET FONT STYLE"})," allow to create and define form objects."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"JSON code in dynamic forms:"})," Define the properties using JSON. Use the ",(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#type",children:"type"})," property to define the object type, then set its available properties.  See the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292",children:"Dynamic Forms"})," page for information.",(0,r.jsx)(t.br,{}),"\nExample for a button object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n\t"type": "button", \n\t"style": "bevel", \n\t"text": "OK", \n\t"action": "Cancel", \n\t"left": 60, \n\t"top": 160, \n\t"width": 100, \n\t"height": 20\n}\n'})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var r=o(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,s={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var r=o(296540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);