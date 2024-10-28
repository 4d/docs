"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70870],{786671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var s=r(474848),t=r(28453);const c={id:"char",title:"Char",slug:"/commands/char",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/char",title:"Char",description:"Char ( codigoCaracter ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/char.md",sourceDirName:"commands-legacy",slug:"/commands/char",permalink:"/docs/es/commands/char",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"char",title:"Char",slug:"/commands/char",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Change string",permalink:"/docs/es/commands/change-string"},next:{title:"Character code",permalink:"/docs/es/commands/character-code"}},o={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Char"})," ( ",(0,s.jsx)(n.em,{children:"codigoCaracter"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"codigoCaracter"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"C\xf3digo del caracter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Caracter representado por codigoCaracter"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Char"})," devuelve el car\xe1cter cuyo c\xf3digo es ",(0,s.jsx)(n.em,{children:"codigoCaracter"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase un valor UTF-16 (entre 1 y 65535) en ",(0,s.jsx)(n.em,{children:"codigoCaracter."})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," el comando ",(0,s.jsx)(n.strong,{children:"Char"})," generalmente se utiliza para insertar en el editor de m\xe9todos los caracteres que no pueden ser introducidos desde el teclado o que deben ser interpretados como un comando de edici\xf3n en el editor de m\xe9todos."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo utiliza Char para insertar un retorno de carro en el texto de un mensaje de alerta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Empleados: "+String(Records in table([Empleados]))+Char(Carriage return)+"Presione Aceptar para continuar.")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/character-code",children:"Character code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"C\xf3digos Unicode"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"S\xedmbolos de referencia de caracteres"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var s=r(296540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);