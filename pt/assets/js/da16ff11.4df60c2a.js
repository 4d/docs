"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75865],{387649:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var r=n(474848),s=n(28453);const t={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",description:"BOOLEAN ARRAY FROM SET ( booleanArr {; conjunto} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/boolean-array-from-set.md",sourceDirName:"commands-legacy",slug:"/commands/boolean-array-from-set",permalink:"/docs/pt/commands/boolean-array-from-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ARRAY TO SELECTION",permalink:"/docs/pt/commands/array-to-selection"},next:{title:"COPY ARRAY",permalink:"/docs/pt/commands/copy-array"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,r.jsx)(o.em,{children:"booleanArr"})," {; ",(0,r.jsx)(o.em,{children:"conjunto"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"booleanArr"}),(0,r.jsx)(o.td,{children:"Boolean array"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Array para indicar se um registro est\xe1 no conjunto ou n\xe3o"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"conjunto"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome do conjunto ou UserSet se o par\xe2metro for omitido"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando BOOLEAN ARRAY FROM SET  preenche um array de booleanos indicando se cada registro na tablea est\xe1 ou n\xe3o no ",(0,r.jsx)(o.em,{children:"conjunto"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Os elementos no array s\xe3o ordenados em fun\xe7\xe3o da ordem de cria\xe7\xe3o dos registros na tabela (n\xfameros de registro absolutos). Se N \xe9 o n\xfamero de registros na tabela, o elemento 0 do array corresponde ao registro n\xfamero 0, o elemento 1 do array corresponde ao registro n\xfamero 1, etc."}),"\n",(0,r.jsx)(o.p,{children:"Cada elemento do array \xe9:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," se o registro correspondente pertence ao conjunto."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," se o registro correspondente n\xe3o pertence ao conjunto."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Advert\xeancia:"})," o n\xfamero total de elementos no array ",(0,r.jsx)(o.em,{children:"arrBool"})," n\xe3o \xe9 significativo. Por raz\xf5es estruturais, este n\xfamero pode ser diferente do n\xfamero de registros realmente presentes na tabela. Os poss\xedveis elementos extras s\xe3o definidos como ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Se voc\xea n\xe3o passar o par\xe2metro ",(0,r.jsx)(o.em,{children:"conjunto"}),", o comando utilizar\xe1 UserSet no processo atual."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>d});var r=n(296540);const s={},t=r.createContext(s);function a(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);