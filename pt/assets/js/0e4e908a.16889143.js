"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42144"],{328234:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/object-set-resizing-options","title":"OBJECT SET RESIZING OPTIONS","description":"OBJECT SET RESIZING OPTIONS ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-resizing-options.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-resizing-options","permalink":"/docs/pt/commands/object-set-resizing-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-resizing-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-resizing-options","title":"OBJECT SET RESIZING OPTIONS","slug":"/commands/object-set-resizing-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET PRINT VARIABLE FRAME","permalink":"/docs/pt/commands/object-set-print-variable-frame"},"next":{"title":"OBJECT SET RGB COLORS","permalink":"/docs/pt/commands/object-set-rgb-colors"}}'),t=s("785893"),r=s("250065");let i={id:"object-set-resizing-options",title:"OBJECT SET RESIZING OPTIONS",slug:"/commands/object-set-resizing-options",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET RESIZING OPTIONS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Op\xe7\xe3o de redimensionamento horizontal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Op\xe7\xe3o de redimensionamento vertical"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"OBJECT SET RESIZING OPTIONS"})," permite definir ou modificar dinamicamente as op\xe7\xf5es de redimensionamento do objeto ou dos objetos designados pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"objeto"})," e ",(0,t.jsx)(n.em,{children:"*"})," para o processo atual. Estas op\xe7\xf5es definem a visualiza\xe7\xe3o do objeto em caso de redimensionamento da janela do formul\xe1rio."]}),"\n",(0,t.jsxs)(n.p,{children:["Passa-se o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, isto indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma referencia de vari\xe1vel em lugar de uma cadeia."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"horizontal"}),", passe um valor que indique a op\xe7\xe3o de redimensionamento horizontal a definir para o ",(0,t.jsx)(n.em,{children:"objeto"}),". Pode passar uma das seguintes constantes, do tema ",(0,t.jsx)(n.em,{children:"Propriedades dos objetos"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal grow"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Se a janela cresce um 50% de largura, o objeto cresce 50% \xe0 direita"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal move"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Se a janela cresce 100 pixeles de largura, o objeto \xe9 movido 100 pixeles \xe0 direita"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal none"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Se a janela cresce de largo, nem o largo nem a posi\xe7\xe3o do objeto variam"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"vertical"}),", passe um valor que indique a op\xe7\xe3o de redimensionamento vertical a definir para o ",(0,t.jsx)(n.em,{children:"objeto"}),". Pode passar uma das seguintes constantes, do tema ",(0,t.jsx)(n.em,{children:"Propriedades dos objetos"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical grow"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Se a janela cresce um 50% de alto, o objeto cresce 50% para abaixo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical move"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Se a janela cresce 100 pixeles de alto, o objeto cresce 100 pixeles para abaixo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical none"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Se a janela cresce de altura, nem o largo nem a posi\xe7\xe3o do objeto mudam"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-get-resizing-options",children:"OBJECT GET RESIZING OPTIONS"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1175"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let t={},r=o.createContext(t);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);