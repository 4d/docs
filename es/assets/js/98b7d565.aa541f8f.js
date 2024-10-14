"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94483],{989315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(474848),s=t(28453);const o={id:"distinct",title:"$distinct"},r=void 0,c={id:"REST/distinct",title:"$distinct",description:'Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (por ejemplo, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/es/20-R5/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/es/20-R5/REST/compute"},next:{title:"$entityset",permalink:"/docs/es/20-R5/REST/entityset"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (",(0,i.jsx)(n.em,{children:"por ejemplo"}),", ",(0,i.jsx)(n.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$distinct"})," permite devolver una colecci\xf3n que contiene los diferente valores de una petici\xf3n sobre un atributo espec\xedfico. S\xf3lo se puede especificar un atributo en la dataclass. Generalmente, el tipo String es el mejor; sin embargo, tambi\xe9n puede utilizarlo en cualquier tipo de atributo que pueda contener m\xfaltiples valores."]}),"\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n puede utilizar ",(0,i.jsx)(n.code,{children:"$skip"})," y ",(0,i.jsx)(n.code,{children:"$top/$limit"}),", si desea navegar por la selecci\xf3n antes de colocarla en un array."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:'En nuestro ejemplo siguiente, queremos recuperar los diferentes valores de un nombre de empresa que empiece por la letra "a":'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(296540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);