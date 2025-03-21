"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82323"],{535904:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"FormEditor/action","title":"Action","description":"M\xe9thode","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Action.md","sourceDirName":"FormEditor","slug":"/FormEditor/action","permalink":"/docs/fr/19/FormEditor/action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"action","title":"Action"},"sidebar":"docs","previous":{"title":"Liste de propri\xe9t\xe9s JSON","permalink":"/docs/fr/19/FormEditor/jsonReference"},"next":{"title":"Propri\xe9t\xe9s des formulaires","permalink":"/docs/fr/19/FormEditor/propertiesForm"}}'),r=n("785893"),s=n("250065");let i={id:"action",title:"Action"},d=void 0,l={},c=[{value:"M\xe9thode",id:"m\xe9thode",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"m\xe9thode",children:"M\xe9thode"}),"\n",(0,r.jsxs)(t.p,{children:["R\xe9f\xe9rence d'une m\xe9thode associ\xe9e au formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure. See ",(0,r.jsx)(t.a,{href:"/docs/fr/19/Concepts/methods",children:"methods"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Vous n'appelez pas de m\xe9thode formulaire - 4D l'appelle automatiquement lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e."}),"\n",(0,r.jsx)(t.p,{children:"Plusieurs types de r\xe9f\xe9rences de m\xe9thode sont pris en charge :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["un chemin de fichier de m\xe9thode projet standard, c'est-\xe0-dire qui utilise le mod\xe8le suivant :",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"method.4dm"}),(0,r.jsx)(t.br,{}),"\nCe type de r\xe9f\xe9rence indique que le fichier de m\xe9thode se trouve \xe0 l'emplacement par d\xe9faut (\"sources/{TableForms/",(0,r.jsx)(t.em,{children:"numTable"}),"} | {Forms}/",(0,r.jsx)(t.em,{children:"formName"}),'/"). Dans ce cas, 4D g\xe8re automatiquement la m\xe9thode formulaire lorsque des op\xe9rations sont ex\xe9cut\xe9es sur le formulaire (renommage, duplication, copier/coller, etc.)']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,r.jsx)(t.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"MyMethods/myFormMethod.4dm"})," You can also use a filesystem:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"/RESOURCES/Forms/FormMethod.4dm"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Nom"}),(0,r.jsx)(t.th,{children:"Type de donn\xe9es"}),(0,r.jsx)(t.th,{children:"Valeurs possibles"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"method"}),(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"Chemin standard ou personnalis\xe9 de la m\xe9thode formulaire ou nom de la m\xe9thode projet"})]})})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var o=n(667294);let r={},s=o.createContext(r);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);