"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23654"],{929884:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/memory-statistics","title":"MEMORY STATISTICS","description":"MEMORY STATISTICS ( tipoInfo ; arrayNomes ; arrayValores ; arrayContador )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/memory-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/memory-statistics","permalink":"/docs/pt/20-R7/commands/memory-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmemory-statistics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"memory-statistics","title":"MEMORY STATISTICS","slug":"/commands/memory-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get cache size","permalink":"/docs/pt/20-R7/commands/get-cache-size"},"next":{"title":"SET BLOBS CACHE PRIORITY","permalink":"/docs/pt/20-R7/commands/set-blobs-cache-priority"}}'),t=s("785893"),a=s("250065");let o={id:"memory-statistics",title:"MEMORY STATISTICS",slug:"/commands/memory-statistics",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MEMORY STATISTICS"})," ( ",(0,t.jsx)(n.em,{children:"tipoInfo"})," ; ",(0,t.jsx)(n.em,{children:"arrayNomes"})," ; ",(0,t.jsx)(n.em,{children:"arrayValores"})," ; ",(0,t.jsx)(n.em,{children:"arrayContador"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tipoInfo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Seletor de informa\xe7\xe3o a ser obtido"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayNomes"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"T\xedtulos da informa\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayValores"}),(0,t.jsx)(n.td,{children:"Real array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valores da informa\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayContador"}),(0,t.jsx)(n.td,{children:"Real array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de objetos respectivos (se dispon\xedvel)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"MEMORY STATISTICS"})," recupera informa\xe7\xe3o relacionada ao uso da cache de dados 4D. . Esta informa\xe7\xe3o pode ser usada para analisar o funcionamento do aplicativo."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,t.jsx)(n.em,{children:"tipoInfo"})," um valor que indique o tipo de informa\xe7\xe3o que voc\xea deseja obteR. Em vers\xf5es 4D atuais, h\xe1 apenas um tipo compat\xedvel (",(0,t.jsx)(n.em,{children:"tipoInfo"}),"=1)"]}),"\n",(0,t.jsxs)(n.p,{children:["Depois que o comando for executado, as estat\xedsticas s\xe3o fornecidas nos arrays ",(0,t.jsx)(n.em,{children:"arrNomes, arrValores"})," e ",(0,t.jsx)(n.em,{children:"arrCont"}),". Esta informa\xe7\xe3o tamb\xe9m est\xe1 dispon\xedvel vai o Runtime Explorer: tamanho da mem\xf3ria f\xedsica, virtual, livre e usada, mem\xf3ria stack e mem\xf3ria stack livre, etc. Para saber mais sobre interpreta\xe7\xe3o avan\xe7ada desses dados, entre em contato com seu departamento de Servi\xe7o T\xe9cnico"]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/cache-info",children:"Cache info"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1118"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},a=r.createContext(t);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);