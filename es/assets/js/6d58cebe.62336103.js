"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73125],{630660:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(474848),o=s(28453);const i={id:"vp-get-sheet-options",title:"VP Get sheet options"},r=void 0,d={id:"ViewPro/commands/vp-get-sheet-options",title:"VP Get sheet options",description:"VP Get sheet options ( vpAreaName Integer } ) ) : Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-sheet-options.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-sheet-options",permalink:"/docs/es/ViewPro/commands/vp-get-sheet-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-sheet-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-get-sheet-options",title:"VP Get sheet options"},sidebar:"docs",previous:{title:"VP Get sheet name",permalink:"/docs/es/ViewPro/commands/vp-get-sheet-name"},next:{title:"VP Get show print lines",permalink:"/docs/es/ViewPro/commands/vp-get-show-print-lines"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get sheet options"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro en el formulario"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto opciones de la hoja"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Get sheet options"})," devuelve un objeto que contiene las opciones de hoja actuales del \xe1rea ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase el nombre del \xe1rea de 4D View Pro en ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica (la numeraci\xf3n comienza en 0). Si se omite o si se pasa ",(0,t.jsx)(n.code,{children:"vk current sheet"}),", se utiliza la hoja de c\xe1lculo actual."]}),"\n",(0,t.jsx)(n.h4,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,t.jsxs)(n.p,{children:["El m\xe9todo devuelve un objeto que contiene los valores actuales de todas las opciones de hoja disponibles. Un valor de opci\xf3n puede haber sido modificado por el usuario o por el m\xe9todo ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Para ver la lista completa de las opciones, consulte ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#sheet-options",children:"Opciones Hoja"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$options:=VP Get sheet options("ViewProArea")\nIf($options.colHeaderVisible) //los encabezados de las columnas son visibles\n    ... //do something\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#sheet-options",children:"4D VIEW PRO SHEET OPTIONS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(296540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);