"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33515"],{481584:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-menu-bar-reference","title":"Get menu bar reference","description":"Get menu bar reference {( processo )} : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-bar-reference.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-bar-reference","permalink":"/docs/pt/commands/get-menu-bar-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-bar-reference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-bar-reference","title":"Get menu bar reference","slug":"/commands/get-menu-bar-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENABLE MENU ITEM","permalink":"/docs/pt/commands/enable-menu-item"},"next":{"title":"Get menu item","permalink":"/docs/pt/commands/get-menu-item"}}'),d=r("785893"),s=r("250065");let o={id:"get-menu-bar-reference",title:"Get menu bar reference",slug:"/commands/get-menu-bar-reference",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get menu bar reference"})," {( ",(0,d.jsx)(n.em,{children:"processo"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"processo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de refer\xeancia do processo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Refer\xeancia de menu"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"Get menu bar reference"})," devolve a identifica\xe7\xe3o \xfanica da barra de menus atual ou da barra de menus de um processo espec\xedfico."]}),"\n",(0,d.jsxs)(n.p,{children:["Se a barra de menus foi criada pelo comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/create-menu",children:"Create menu"}),", esta identifica\xe7\xe3o corresponde a refer\xeancia \xfanica do menu criado. Do contr\xe1rio, o comando devolve uma identifica\xe7\xe3o interna espec\xedfica. Em todos os casos, esta identifica\xe7\xe3o, MenuRef pode ser utilizada para referenciar a barra de menus para todos os outros comandos do tema."]}),"\n",(0,d.jsxs)(n.p,{children:["(*) Este ID espec\xedfico \xe9 tempor\xe1rio e deixa de ser v\xe1lido logo que se chame a outra barra de menu com ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-menu-bar",children:"SET MENU BAR"}),". Se quiser conservar a refer\xeancia de um menu criado no editor de menu, deve copi\xe1-lo na mem\xf3ria utilizando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/create-menu",children:"Create menu"}),". Por exemplo:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$vEditorRef:=Get menu bar reference(Frontmost process)\xa0//menu criado no editor de barras de menu\n\xa0$vMenuRef:=Create menu($vEditorRef)\xa0//copia o menu\n\xa0SET MENU BAR(2)\xa0//instala outra barra de men\xfa\n\xa0...\xa0// executar c\xf3digo\n\xa0SET MENU BAR($vMenuRef)\xa0//regressa \xe0 barra de menu inicial\n"})}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro ",(0,d.jsx)(n.em,{children:"processo"})," pode ser utilizado para designar o processo do que quer obter a identifica\xe7\xe3o da barra de menus atual. Se omite este par\xe2metro, o comando devolve a identifica\xe7\xe3o da barra de menus do processo atual..i"]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-menu-items",title:"GET MENU ITEMS",children:"GET MENU ITEMS"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-menu-bar",children:"SET MENU BAR"})}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"979"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let d={},s=t.createContext(d);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);