"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62079],{254232:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=o(474848),r=o(28453);const s={id:"action",title:"Action"},i=void 0,d={id:"FormEditor/action",title:"Action",description:"M\xe9thode",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/fr/FormEditor/action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"Form JSON property list",permalink:"/docs/fr/FormEditor/jsonReference"},next:{title:"Propri\xe9t\xe9s des formulaires",permalink:"/docs/fr/FormEditor/propertiesForm"}},l={},c=[{value:"M\xe9thode",id:"m\xe9thode",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"m\xe9thode",children:"M\xe9thode"}),"\n",(0,n.jsxs)(t.p,{children:["R\xe9f\xe9rence d'une m\xe9thode associ\xe9e au formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure. Voir ",(0,n.jsx)(t.a,{href:"/docs/fr/Concepts/methods#specialized-methods",children:"M\xe9thodes sp\xe9cialis\xe9es"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Vous n'appelez pas de m\xe9thode formulaire - 4D l'appelle automatiquement lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e."}),"\n",(0,n.jsx)(t.p,{children:"Plusieurs types de r\xe9f\xe9rences de m\xe9thode sont pris en charge :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a standard project method file path, i.e. that uses the following pattern:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"method.4dm"}),(0,n.jsx)(t.br,{}),'\nThis type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,n.jsx)(t.em,{children:"numTable"}),"} | {Forms}/",(0,n.jsx)(t.em,{children:"formName"}),'/"). Dans ce cas, 4D g\xe8re automatiquement la m\xe9thode formulaire lorsque des op\xe9rations sont ex\xe9cut\xe9es sur le formulaire (renommage, duplication, copier/coller, etc.)']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,n.jsx)(t.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"MyMethods/myFormMethod.4dm"}),"\nYou can also use a filesystem:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"/RESOURCES/Forms/FormMethod.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nom"}),(0,n.jsx)(t.th,{children:"Type de donn\xe9es"}),(0,n.jsx)(t.th,{children:"Valeurs possibles"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:"text"}),(0,n.jsx)(t.td,{children:"Chemin standard ou personnalis\xe9 de la m\xe9thode formulaire ou nom de la m\xe9thode projet"})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var n=o(296540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);