"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56209],{234502:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var s=r(474848),c=r(28453);const d={id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},t=void 0,l={id:"commands-legacy/selected-record-number",title:"Selected record number",description:"Selected record number {( tabla )} -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selected-record-number.md",sourceDirName:"commands-legacy",slug:"/commands/selected-record-number",permalink:"/docs/es/commands/selected-record-number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-record-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SCAN INDEX",permalink:"/docs/es/commands/scan-index"},next:{title:"TRUNCATE TABLE",permalink:"/docs/es/commands/truncate-table"}},o={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Selected record number"})," {( ",(0,s.jsx)(n.em,{children:"tabla"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla de la cual devolver el n\xfamero de registros seleccionados, o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero en la selecci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Selected record number devuelve la posici\xf3n del registro actual en la selecci\xf3n actual de ",(0,s.jsx)(n.em,{children:"tabla"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la selecci\xf3n no est\xe1 vac\xeda y si el registro actual est\xe1 en la selecci\xf3n, Selected record number devuelve un valor entre ",(0,s.jsx)(n.em,{children:"1"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/commands/records-in-selection",title:"Records in selection",children:"Records in selection"}),". Si la selecci\xf3n est\xe1 vac\xeda, o si no hay registro actual, devuelve ",(0,s.jsx)(n.em,{children:"0"})," (cero)."]}),"\n",(0,s.jsxs)(n.p,{children:["El n\xfamero del registro en la selecci\xf3n es diferente del n\xfamero devuelto por ",(0,s.jsx)(n.a,{href:"/docs/es/commands/record-number",title:"Record number",children:"Record number"}),", que devuelve el n\xfamero del registro f\xedsico en la tabla. El n\xfamero del registro en la selecci\xf3n depende de la selecci\xf3n y el registro actual."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo guarda el n\xfamero del registro actual de la selecci\xf3n en una variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0NumRegAc:=Selected record number([Personas])\xa0// Obtener el n\xfamero del registro en la selecci\xf3n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Acerca de n\xfameros de registros"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/records-in-selection",children:"Records in selection"})]})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(296540);const c={},d=s.createContext(c);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);