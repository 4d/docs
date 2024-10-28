"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92522],{735270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(474848),d=r(28453);const i={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},t=void 0,o={id:"commands-legacy/qr-get-selection",title:"QR GET SELECTION",description:"QR GET SELECTION ( area ; esquerda ; superior {; direita {; inferior }} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-selection.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-selection",permalink:"/docs/pt/commands/qr-get-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR Get report table",permalink:"/docs/pt/commands/qr-get-report-table"},next:{title:"QR GET SORTS",permalink:"/docs/pt/commands/qr-get-sorts"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function a(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"esquerda"})," ; ",(0,s.jsx)(n.em,{children:"superior"})," {; ",(0,s.jsx)(n.em,{children:"direita"})," {; ",(0,s.jsx)(n.em,{children:"inferior"})," }} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"esquerda"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite esquerdo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"superior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite superior"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"direita"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite direito"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inferior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite inferior"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando QR GET SELECTION devolve as coordenadas da sele\xe7\xe3o atual de ",(0,s.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"esquerdo"})," devolve o n\xfamero da coluna que \xe9 o limite esquerdo da sele\xe7\xe3o. Se ",(0,s.jsx)(n.em,{children:"esquerdo"})," \xe9 igual a 0, toda a linha \xe9 selecionada."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"superior"})," devolve o n\xfamero da linha que \xe9 o limite superior da sele\xe7\xe3o. Se ",(0,s.jsx)(n.em,{children:"superior"})," \xe9 igual a 0, toda a coluna \xe9 selecionada."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": se ",(0,s.jsx)(n.em,{children:"esquerdo"})," e ",(0,s.jsx)(n.em,{children:"superior"})," s\xe3o iguais a 0, toda a \xe1rea \xe9 selecionada."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"direito"})," \xe9 o n\xfamero da coluna que \xe9 o limite direito da sele\xe7\xe3o."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"inferior"})," \xe9 o n\xfamero da fila que \xe9 o limite superior da sele\xe7\xe3o."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": se n\xe3o houver sele\xe7\xe3o, os par\xe2metros ",(0,s.jsx)(n.em,{children:"esquerdo"}),", ",(0,s.jsx)(n.em,{children:"superior, direito"})," e ",(0,s.jsx)(n.em,{children:"inferior"})," tomam o valor -1."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/qr-set-selection",children:"QR SET SELECTION"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(296540);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);