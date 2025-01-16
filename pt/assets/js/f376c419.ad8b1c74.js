"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36419"],{343750:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/longint-array-from-selection","title":"LONGINT ARRAY FROM SELECTION","description":"LONGINT ARRAY FROM SELECTION ( tabela ; arrayRegistro {; sele\xe7ao} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/longint-array-from-selection.md","sourceDirName":"commands-legacy","slug":"/commands/longint-array-from-selection","permalink":"/docs/pt/commands/longint-array-from-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flongint-array-from-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"longint-array-from-selection","title":"LONGINT ARRAY FROM SELECTION","slug":"/commands/longint-array-from-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST TO ARRAY","permalink":"/docs/pt/commands/list-to-array"},"next":{"title":"MULTI SORT ARRAY","permalink":"/docs/pt/commands/multi-sort-array"}}'),t=r("785893"),o=r("250065");let a={id:"longint-array-from-selection",title:"LONGINT ARRAY FROM SELECTION",slug:"/commands/longint-array-from-selection",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LONGINT ARRAY FROM SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"tabela"})," ; ",(0,t.jsx)(n.em,{children:"arrayRegistro"})," {; ",(0,t.jsx)(n.em,{children:"sele\xe7ao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabela"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabela da sele\xe7\xe3o atual"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayRegistro"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array dos n\xfameros gravados"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sele\xe7ao"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome da sele\xe7\xe3o escolhida ou a sele\xe7\xe3o atual se este par\xe2metro for omitido"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando LONGINT ARRAY FROM SELECTION preenche o array ",(0,t.jsx)(n.em,{children:"arrReg"})," com os n\xfameros (absolutos) dos registros que est\xe3o em ",(0,t.jsx)(n.em,{children:"sele\xe7ao"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se voc\xea n\xe3o passar o par\xe2metro ",(0,t.jsx)(n.em,{children:"sele\xe7ao"}),", o comando utiliza a sele\xe7\xe3o atual da ",(0,t.jsx)(n.em,{children:"tabela"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," o elemento n\xfamero 0 do array \xe9 inicializado em -1."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser recuperar os n\xfameros dos registros da sele\xe7\xe3o atual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($_arrRecNum;0)\xa0//obrigat\xf3rio para o modo compilado\n\xa0LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"647"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let t={},o=s.createContext(t);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);