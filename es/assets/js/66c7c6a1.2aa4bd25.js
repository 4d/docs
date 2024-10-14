"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51196],{866224:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(474848),r=t(28453);const i={id:"action",title:"Acci\xf3n"},s=void 0,d={id:"FormEditor/action",title:"Acci\xf3n",description:"M\xe9todo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/es/20/FormEditor/action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"action",title:"Acci\xf3n"},sidebar:"docs",previous:{title:"Lista de propiedades JSON del formulario",permalink:"/docs/es/20/FormEditor/jsonReference"},next:{title:"Propiedades de los formularios",permalink:"/docs/es/20/FormEditor/propertiesForm"}},a={},c=[{value:"M\xe9todo",id:"m\xe9todo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"m\xe9todo",children:"M\xe9todo"}),"\n",(0,n.jsxs)(o.p,{children:["Referencia de un m\xe9todo adjunto al formulario. Puede utilizar un m\xe9todo formulario para gestionar datos y objetos, pero generalmente es m\xe1s sencillo y eficiente utilizar un m\xe9todo objeto para estos fines. Ver ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/methods#specialized-methods",children:"M\xe9todos especializados"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"No llame a un m\xe9todo formulario - 4D lo llama autom\xe1ticamente cuando un evento implica el formulario al que el m\xe9todo est\xe1 asociado."}),"\n",(0,n.jsx)(o.p,{children:"Se soportan varios tipos de referencias de m\xe9todos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["una ruta de archivo de m\xe9todo proyecto est\xe1ndar, es decir, que utilice el siguiente modelo:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"method.4dm"}),(0,n.jsx)(o.br,{}),'\nEste tipo de referencia indica que el archivo de m\xe9todo se encuentra en la ubicaci\xf3n por defecto ("sources/{TableForms/',(0,n.jsx)(o.em,{children:"numTable"}),"} | {Forms}/",(0,n.jsx)(o.em,{children:"formName"}),'/"). En este caso, 4D maneja autom\xe1ticamente el m\xe9todo formulario cuando se ejecutan operaciones en el formulario (renombrar, duplicar, copiar/pegar...)']}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,n.jsx)(o.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"MyMethods/myFormMethod.4dm"})," You can also use a filesystem:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"/RESOURCES/Forms/FormMethod.4dm"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Nombre"}),(0,n.jsx)(o.th,{children:"Tipos de datos"}),(0,n.jsx)(o.th,{children:"Valores posibles"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"method"}),(0,n.jsx)(o.td,{children:"text"}),(0,n.jsx)(o.td,{children:"Ruta est\xe1ndar o personalizada del m\xe9todo formulario, o nombre del m\xe9todo proyecto"})]})})]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>d});var n=t(296540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);