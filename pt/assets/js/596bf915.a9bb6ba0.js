"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20918"],{143858:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-list-properties","title":"GET LIST PROPERTIES","description":"GET LIST PROPERTIES ( lista ; aparencia {; icone {; alturaLinha {; duploClique {; multiSele\xe7ao {; editavel}}}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-properties","permalink":"/docs/pt/commands/get-list-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-properties","title":"GET LIST PROPERTIES","slug":"/commands/get-list-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PROPERTIES","permalink":"/docs/pt/commands/get-list-item-properties"},"next":{"title":"INSERT IN LIST","permalink":"/docs/pt/commands/insert-in-list"}}'),r=s("785893"),i=s("250065");let d={id:"get-list-properties",title:"GET LIST PROPERTIES",slug:"/commands/get-list-properties",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET LIST PROPERTIES"})," ( ",(0,r.jsx)(n.em,{children:"lista"})," ; ",(0,r.jsx)(n.em,{children:"aparencia"})," {; ",(0,r.jsx)(n.em,{children:"icone"})," {; ",(0,r.jsx)(n.em,{children:"alturaLinha"})," {; ",(0,r.jsx)(n.em,{children:"duploClique"})," {; ",(0,r.jsx)(n.em,{children:"multiSele\xe7ao"})," {; ",(0,r.jsx)(n.em,{children:"editavel"}),"}}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lista"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia da lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aparencia"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Estilo gr\xe1fico da lista 1 = Lista hier\xe1rquica \xe0 Macintosh 2 = Lista hier\xe1rquica \xe0 Windows"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"icone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Refer\xeancia de recurso Mac OS \u2018cicn\u2019"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alturaLinha"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Altura m\xednima de la linha expressada em pixels"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"duploClique"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Expandir/Contrair sub-lista com duplo-clique? 0 = Sim, 1= N\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"multiSele\xe7ao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Sele\xe7\xf5es m\xfaltiplas: 0 = N\xe3o, 1 = Sim"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editavel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Lista edit\xe1vel pelo usu\xe1rio: 0 = N\xe3o, 1 = Sim"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando GET LIST PROPERTIES  retorna informa\xe7\xe3o sobre a lista cujo n\xfamero de refer\xeancia se passa em ",(0,r.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"aparencia"})," retorna o estilo gr\xe1fico da lista.",(0,r.jsx)(n.br,{}),"\nO par\xe2metro ",(0,r.jsx)(n.em,{children:"icone"})," \xe9 obsoleto, retorna sempre 0.",(0,r.jsx)(n.br,{}),"\nO par\xe2metro ",(0,r.jsx)(n.em,{children:"alturaLinha"})," retorna a altura de linha m\xednima.",(0,r.jsx)(n.br,{}),"\nSe ",(0,r.jsx)(n.em,{children:"duploClique"})," vale 1, fazer duplo-clique em um elemento pai da lista n\xe3o faz com que sua lista filho se expanda ou se contraia. Se ",(0,r.jsx)(n.em,{children:"duploclique"})," vale 0, este comportamento \xe9 ativado (valor normal).",(0,r.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,r.jsx)(n.em,{children:"multiSele\xe7ao"})," vale 0, as sele\xe7\xf5es m\xfaltiplas de elementos (manualmente ou por programa\xe7\xe3o) n\xe3o s\xe3o poss\xedveis na lista. Se valer 1, s\xe3o permitidas as sele\xe7\xf5es m\xfaltiplas.",(0,r.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,r.jsx)(n.em,{children:"editavel"})," vale 1, a lista \xe9 edit\xe1vel quando se mostra em forma de lista de sele\xe7\xe3o nos registros. Se vale 0, a lista n\xe3o \xe9 edit\xe1vel."]}),"\n",(0,r.jsxs)(n.p,{children:["Estas propriedades podem ser definidas com a ajuda do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-list-properties",children:"SET LIST PROPERTIES"})," ou no editor de listas no ambiente Desenho, se a lista foi criada no editor ou guardada utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/save-list",children:"SAVE LIST"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para uma completa descri\xe7\xe3o da apar\xeancia, \xedcones de knots, altura de linha m\xednima e administra\xe7\xe3o de uma lista com duplo clique, consulte o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-list-properties",children:"SET LIST PROPERTIES"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-list-properties",children:"SET LIST PROPERTIES"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"632"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);