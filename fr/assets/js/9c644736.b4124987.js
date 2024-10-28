"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50565],{502909:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=n(474848),l=n(28453);const t={id:"blob-to-variable",title:"BLOB TO VARIABLE",slug:"/commands/blob-to-variable",displayed_sidebar:"docs"},a=void 0,i={id:"commands-legacy/blob-to-variable",title:"BLOB TO VARIABLE",description:"BLOB TO VARIABLE ( blob ; variable {; offset} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-variable.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-variable",permalink:"/docs/fr/commands/blob-to-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-variable",title:"BLOB TO VARIABLE",slug:"/commands/blob-to-variable",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BLOB to text",permalink:"/docs/fr/commands/blob-to-text"},next:{title:"COMPRESS BLOB",permalink:"/docs/fr/commands/compress-blob"}},o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const s={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"BLOB TO VARIABLE"})," ( ",(0,r.jsx)(s.em,{children:"blob"})," ; ",(0,r.jsx)(s.em,{children:"variable"})," {; ",(0,r.jsx)(s.em,{children:"offset"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"blob"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"BLOB contenant une ou plusieurs variable(s) 4D"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"variable"}),(0,r.jsx)(s.td,{children:"Variable"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Variable \xe0 \xe9crire avec le contenu de BLOB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"offset"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2194"}),(0,r.jsx)(s.td,{children:"Position de la variable dans BLOB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Position de la variable suivante dans BLOB"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"BLOB TO VARIABLE"})," r\xe9\xe9crit la variable ",(0,r.jsx)(s.em,{children:"variable"})," avec les donn\xe9es stock\xe9es dans le BLOB ",(0,r.jsx)(s.em,{children:"blob"})," \xe0 l'offset d'octet (\xe0 partir de z\xe9ro) sp\xe9cifi\xe9 par ",(0,r.jsx)(s.em,{children:"offset"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Les donn\xe9es dans le BLOB doivent \xeatre compatibles avec la variable de destination : vous utiliserez g\xe9n\xe9ralement des BLOBs que vous avez pr\xe9c\xe9demment remplis \xe0 l'aide de ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous ne sp\xe9cifiez pas le param\xe8tre ",(0,r.jsx)(s.em,{children:"offset"}),", les donn\xe9es de la variable sont lues \xe0 partir du d\xe9but du BLOB. Si le BLOB contient plusieurs variables, vous devez passer le param\xe8tre ",(0,r.jsx)(s.em,{children:"offset"})," ainsi qu'une variable num\xe9rique. Avant d'appeler la commande, d\xe9finissez cette variable num\xe9rique avec l'offset correspondant. Apr\xe8s l'appel, la m\xeame variable num\xe9rique retourne l'offset de la variable suivante stock\xe9e dans le BLOB."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," ",(0,r.jsx)(s.strong,{children:"BLOB TO VARIABLE"})," prend en charge les variables objet de type ",(0,r.jsx)(s.a,{href:"c-object.md",children:"C_OBJECT"})," et les variables collection de type ",(0,r.jsx)(s.a,{href:"c-collection.md",children:"C_COLLECTION"}),". Pour plus d'informations, reportez-vous \xe0 la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"La variable OK prend la valeur 1 si l'op\xe9ration s'est correctement d\xe9roul\xe9e. Si l'op\xe9ration n'a pas pu \xeatre effectu\xe9e, par exemple \xe0 cause d'un manque de m\xe9moire, la variable OK prend la valeur 0."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note sur l'ind\xe9pendance de plate-forme :"})," ",(0,r.jsx)(s.strong,{children:"BLOB TO VARIABLE"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"})," utilisent un format interne \xe0 4D pour g\xe9rer les variables stock\xe9es dans les BLOBs. Vous n'avez donc pas besoin de vous pr\xe9occuper de la conversion des octets (\"byte swapping\") entre les diff\xe9rentes plates-formes lors de l'utilisation de ces deux commandes. Un BLOB cr\xe9\xe9 sous Windows \xe0 l'aide de ces deux commandes peut \xeatre r\xe9utilis\xe9 sans la moindre manipulation sous Mac OS et vice-versa."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["R\xe9f\xe9rez-vous aux exemples de ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"La variable OK prend la valeur 1 si la variable a \xe9t\xe9 correctement r\xe9\xe9crite, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"})})]})}function m(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(296540);const l={},t=r.createContext(l);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);