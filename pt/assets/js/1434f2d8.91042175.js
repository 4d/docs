"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8000"],{208581:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/post-key","title":"POST KEY","description":"POST KEY ( codigo {; modificadores {; processo}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/post-key.md","sourceDirName":"commands-legacy","slug":"/commands/post-key","permalink":"/docs/pt/20-R8/commands/post-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-key.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"post-key","title":"POST KEY","slug":"/commands/post-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POST EVENT","permalink":"/docs/pt/20-R8/commands/post-event"},"next":{"title":"REDRAW","permalink":"/docs/pt/20-R8/commands/redraw"}}'),d=n("785893"),r=n("250065");let t={id:"post-key",title:"POST KEY",slug:"/commands/post-key",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"POST KEY"})," ( ",(0,d.jsx)(s.em,{children:"codigo"})," {; ",(0,d.jsx)(s.em,{children:"modificadores"})," {; ",(0,d.jsx)(s.em,{children:"processo"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"codigo"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"C\xf3digo do caractere ou c\xf3digo da tecla de fun\xe7\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modificadores"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Estado de teclas modificadoras"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"processo"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"N\xfamero de refer\xeancia do processo destino; ou fila do evento de aplica\xe7\xe3o, se omitido, ou 0"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(s.p,{children:"O comando POST KEY simula uma tecla. Esse efeito funciona como se o usu\xe1rio tivesse entrado um caractere no teclado."}),"\n",(0,d.jsxs)(s.p,{children:["Voc\xea passa o c\xf3digo do caractere em ",(0,d.jsx)(s.em,{children:"codigo"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Se passar o par\xe2metro ",(0,d.jsx)(s.em,{children:"modificadores"}),", voc\xea passa uma ou mais combina\xe7\xf5es das constantes Eventos (modificadores). Por exemplo, para simular a tecla Shift, passa Shift key mask. Se n\xe3o passar ",(0,d.jsx)(s.em,{children:"modificadores"}),", nenhum modificador ser\xe1 simulado."]}),"\n",(0,d.jsxs)(s.p,{children:["Se especificar o par\xe2metro ",(0,d.jsx)(s.em,{children:"processo"}),", a tecla foi enviada ao processo cujo n\xfamero de processo voc\xea passou em ",(0,d.jsx)(s.em,{children:"processo"}),". Se voc\xea passar ",(0,d.jsx)(s.em,{children:"0"})," (zero) ou se omitir o par\xe2metro, a tecla \xe9 enviada ao n\xedvel da aplica\xe7\xe3o, e o agendador de tarefas 4D ir\xe1 envi\xe1-lo ao processo apropriado."]}),"\n",(0,d.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(s.p,{children:["Ver exemplo do comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R8/commands/process-number",children:"Process number"}),"."]}),"\n",(0,d.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.em,{children:"C\xf3digos ASCII"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.em,{children:"C\xf3digos de Fun\xe7\xe3o de teclado"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/20-R8/commands/post-click",children:"POST CLICK"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/20-R8/commands/post-event",children:"POST EVENT"})]}),"\n",(0,d.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"465"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return t}});var o=n(667294);let d={},r=o.createContext(d);function t(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);