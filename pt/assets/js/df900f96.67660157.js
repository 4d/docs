"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49377],{42379:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=o(474848),d=o(28453);const r={id:"post-key",title:"POST KEY",slug:"/commands/post-key",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/post-key",title:"POST KEY",description:"POST KEY ( codigo {; modificadores {; processo}} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/post-key.md",sourceDirName:"commands-legacy",slug:"/commands/post-key",permalink:"/docs/pt/commands/post-key",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"post-key",title:"POST KEY",slug:"/commands/post-key",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"POST EVENT",permalink:"/docs/pt/commands/post-event"},next:{title:"REDRAW",permalink:"/docs/pt/commands/redraw"}},i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"POST KEY"})," ( ",(0,n.jsx)(s.em,{children:"codigo"})," {; ",(0,n.jsx)(s.em,{children:"modificadores"})," {; ",(0,n.jsx)(s.em,{children:"processo"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"codigo"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"C\xf3digo do caractere ou c\xf3digo da tecla de fun\xe7\xe3o"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"modificadores"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Estado de teclas modificadoras"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"processo"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"N\xfamero de refer\xeancia do processo destino; ou fila do evento de aplica\xe7\xe3o, se omitido, ou 0"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(s.p,{children:"O comando POST KEY simula uma tecla. Esse efeito funciona como se o usu\xe1rio tivesse entrado um caractere no teclado."}),"\n",(0,n.jsxs)(s.p,{children:["Voc\xea passa o c\xf3digo do caractere em ",(0,n.jsx)(s.em,{children:"codigo"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Se passar o par\xe2metro ",(0,n.jsx)(s.em,{children:"modificadores"}),", voc\xea passa uma ou mais combina\xe7\xf5es das constantes Eventos (modificadores). Por exemplo, para simular a tecla Shift, passa Shift key mask. Se n\xe3o passar ",(0,n.jsx)(s.em,{children:"modificadores"}),", nenhum modificador ser\xe1 simulado."]}),"\n",(0,n.jsxs)(s.p,{children:["Se especificar o par\xe2metro ",(0,n.jsx)(s.em,{children:"processo"}),", a tecla foi enviada ao processo cujo n\xfamero de processo voc\xea passou em ",(0,n.jsx)(s.em,{children:"processo"}),". Se voc\xea passar ",(0,n.jsx)(s.em,{children:"0"})," (zero) ou se omitir o par\xe2metro, a tecla \xe9 enviada ao n\xedvel da aplica\xe7\xe3o, e o agendador de tarefas 4D ir\xe1 envi\xe1-lo ao processo apropriado."]}),"\n",(0,n.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(s.p,{children:["Ver exemplo do comando ",(0,n.jsx)(s.a,{href:"process-number.md",children:"Process number"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"C\xf3digos ASCII"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.em,{children:"C\xf3digos de Fun\xe7\xe3o de teclado"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/post-click",children:"POST CLICK"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/post-event",children:"POST EVENT"})]})]})}function m(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>t,x:()=>c});var n=o(296540);const d={},r=n.createContext(d);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);