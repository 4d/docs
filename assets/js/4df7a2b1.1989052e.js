"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89467"],{960581:function(e,t,o){o.r(t),o.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"FormEditor/action","title":"Action","description":"Method","source":"@site/versioned_docs/version-20-R8/FormEditor/properties_Action.md","sourceDirName":"FormEditor","slug":"/FormEditor/action","permalink":"/docs/FormEditor/action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"action","title":"Action"},"sidebar":"docs","previous":{"title":"Form JSON property list","permalink":"/docs/FormEditor/jsonReference"},"next":{"title":"Form Properties","permalink":"/docs/FormEditor/propertiesForm"}}'),r=o("785893"),s=o("250065");let i={id:"action",title:"Action"},d=void 0,a={},c=[{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"method",children:"Method"}),"\n",(0,r.jsxs)(t.p,{children:["Reference of a method attached to the form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. See ",(0,r.jsx)(t.a,{href:"/docs/Concepts/methods#specialized-methods",children:"Specialized methods"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You do not call a form method\u20144D calls it automatically when an event involves the form to which the method is attached."}),"\n",(0,r.jsx)(t.p,{children:"Several types of method references are supported:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["a standard project method file path, i.e. that uses the following pattern:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"method.4dm"}),(0,r.jsx)(t.br,{}),'\nThis type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,r.jsx)(t.em,{children:"numTable"}),"} | {Forms}/",(0,r.jsx)(t.em,{children:"formName"}),'/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["a project method name: name of an existing project method without file extension, i.e.:\n",(0,r.jsx)(t.code,{children:"myMethod"}),"\nIn this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"MyMethods/myFormMethod.4dm"}),"\nYou can also use a filesystem:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"/RESOURCES/Forms/FormMethod.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"method"}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"Form method standard or custom file path, or project method name"})]})})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return d},a:function(){return i}});var n=o(667294);let r={},s=n.createContext(r);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);