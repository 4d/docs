"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52779],{147681:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var s=r(474848),t=r(28453);const a={id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},d=void 0,i={id:"ViewPro/commands/vp-set-date-time-value",title:"VP SET DATE TIME VALUE",description:"VP SET DATE TIME VALUE ( rangeObj Date ; timeValue Text } )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-date-time-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-date-time-value",permalink:"/docs/es/20-R6/ViewPro/commands/vp-set-date-time-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-time-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},sidebar:"docs",previous:{title:"VP SET DATA CONTEXT",permalink:"/docs/es/20-R6/ViewPro/commands/vp-set-data-context"},next:{title:"VP SET DATE VALUE",permalink:"/docs/es/20-R6/ViewPro/commands/vp-set-date-value"}},c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET DATE TIME VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"dateValue"})," : Date ; ",(0,s.jsx)(n.em,{children:"timeValue"})," : Time {; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dateValue"}),(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor date a definir"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeValue"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor hora a definir"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Formato del valor"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP SET DATE TIME VALUE"})," asigna un valor especificado de fecha y hora a un rango de celdas designado."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," o ",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"dateValue"})," indica un valor de fecha que se asignar\xe1 a ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"timeValue"})," indica un valor hora (expresado en segundos) que se asignar\xe1 al ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"formatPattern"})," define un modelo para los par\xe1metros ",(0,s.jsx)(n.em,{children:"dateValue"})," y ",(0,s.jsx)(n.em,{children:"timeValue"}),". Para obtener informaci\xf3n sobre los modelos y los caracteres de formato, consulte la secci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#date-and-time-formats",children:"Formatos fecha y hora"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Definir el valor de la celda como la fecha y hora actuales\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)\n \n//Definir el valor de la celda como 18 de diciembre\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#cell-format",children:"Formato de celdas 4D View Pro"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-date-value",children:"VP SET DATE VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(296540);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);