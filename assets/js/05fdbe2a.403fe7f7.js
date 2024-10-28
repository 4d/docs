"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15748],{489966:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=o(474848),r=o(28453);const s={id:"action",title:"Action"},i=void 0,d={id:"FormEditor/action",title:"Action",description:"Method",source:"@site/versioned_docs/version-20-R6/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/20-R6/FormEditor/action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"Form JSON property list",permalink:"/docs/20-R6/FormEditor/jsonReference"},next:{title:"Form Properties",permalink:"/docs/20-R6/FormEditor/propertiesForm"}},a={},c=[{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"method",children:"Method"}),"\n",(0,n.jsxs)(t.p,{children:["Reference of a method attached to the form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. See ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/methods#specialized-methods",children:"Specialized methods"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You do not call a form method\u20144D calls it automatically when an event involves the form to which the method is attached."}),"\n",(0,n.jsx)(t.p,{children:"Several types of method references are supported:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a standard project method file path, i.e. that uses the following pattern:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"method.4dm"}),(0,n.jsx)(t.br,{}),'\nThis type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,n.jsx)(t.em,{children:"numTable"}),"} | {Forms}/",(0,n.jsx)(t.em,{children:"formName"}),'/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a project method name: name of an existing project method without file extension, i.e.:\n",(0,n.jsx)(t.code,{children:"myMethod"}),"\nIn this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"MyMethods/myFormMethod.4dm"}),"\nYou can also use a filesystem:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"/RESOURCES/Forms/FormMethod.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Possible Values"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:"text"}),(0,n.jsx)(t.td,{children:"Form method standard or custom file path, or project method name"})]})})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var n=o(296540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);