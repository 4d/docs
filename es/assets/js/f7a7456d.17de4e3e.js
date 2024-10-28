"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89605],{297376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(474848),c=n(28453);const s={id:"object-get-auto-spellcheck",title:"OBJECT Get auto spellcheck",slug:"/commands/object-get-auto-spellcheck",displayed_sidebar:"docs"},r=void 0,a={id:"commands-legacy/object-get-auto-spellcheck",title:"OBJECT Get auto spellcheck",description:"OBJECT Get auto spellcheck ( { ;} objeto* ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-auto-spellcheck.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-auto-spellcheck",permalink:"/docs/es/commands/object-get-auto-spellcheck",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-auto-spellcheck.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-auto-spellcheck",title:"OBJECT Get auto spellcheck",slug:"/commands/object-get-auto-spellcheck",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT Get action",permalink:"/docs/es/commands/object-get-action"},next:{title:"OBJECT GET BEST SIZE",permalink:"/docs/es/commands/object-get-best-size"}},i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"OBJECT Get auto spellcheck"})," ( {* ;} ",(0,o.jsx)(t.em,{children:"objeto"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe1metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operador"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o campo"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objeto"}),(0,o.jsx)(t.td,{children:"any"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Nombre del objeto (si se especifica *) o Variable o campo(si se omite *)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Boolean"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"True = correcci\xf3n autom\xe1tica, False = no correcci\xf3n autom\xe1tica"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:["El comando ",(0,o.jsx)(t.strong,{children:"OBJECT Get auto spellcheck"})," devuelve el estado de la opci\xf3n Correcci\xf3n ortogr\xe1fica autom\xe1tica del o de los objeto(s) designado(s) por los par\xe1metros ",(0,o.jsx)(t.em,{children:"objeto"})," y ",(0,o.jsx)(t.em,{children:"*"})," para el proceso actual ."]}),"\n",(0,o.jsxs)(t.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(t.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(t.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, indica que ",(0,o.jsx)(t.em,{children:"objeto"})," es una variable o un campo. En este caso, pase una referencia en lugar de un nombre."]}),"\n",(0,o.jsxs)(t.p,{children:["El comando devuelve ",(0,o.jsx)(t.strong,{children:"True"})," cuando la correcci\xf3n ortogr\xe1fica autom\xe1tica est\xe1 activada para el ",(0,o.jsx)(t.em,{children:"objeto"})," y ",(0,o.jsx)(t.strong,{children:"False"})," si no."]}),"\n",(0,o.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/es/commands/object-set-auto-spellcheck",children:"OBJECT SET AUTO SPELLCHECK"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(296540);const c={},s=o.createContext(c);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);