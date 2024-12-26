"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19787"],{40606:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>l,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-menu-item-icon","title":"GET MENU ITEM ICON","description":"GET MENU ITEM ICON ( menu ; menuItem ; refIcone {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-icon","permalink":"/docs/pt/commands/get-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-icon","title":"GET MENU ITEM ICON","slug":"/commands/get-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item","permalink":"/docs/pt/commands/get-menu-item"},"next":{"title":"Get menu item key","permalink":"/docs/pt/commands/get-menu-item-key"}}'),o=s("785893"),i=s("250065");let d={id:"get-menu-item-icon",title:"GET MENU ITEM ICON",slug:"/commands/get-menu-item-icon",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let n={a:"a",br:"br",em:"em",filesystem:"filesystem",h4:"h4",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"GET MENU ITEM ICON"})," ( ",(0,o.jsx)(n.em,{children:"menu"})," ; ",(0,o.jsx)(n.em,{children:"menuItem"})," ; ",(0,o.jsx)(n.em,{children:"refIcone"})," {; ",(0,o.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menu"}),(0,o.jsx)(n.td,{children:"Integer, Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menuItem"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de menu de item ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"refIcone"}),(0,o.jsx)(n.td,{children:"Text, Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nome ou n\xfamero da imagem associada com o item de menu"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"processo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de processo"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando GET MENU ITEM ICON devolve, na vari\xe1vel ",(0,o.jsx)(n.em,{children:"refIcone"}),", a referencia do \xedcone associado a linha de menu designada pelos par\xe2metros ",(0,o.jsx)(n.em,{children:"menu"})," e ",(0,o.jsx)(n.em,{children:"menuItem"}),". Esta refer\xeancia \xe9 o nome ou n\xfamero da imagem na biblioteca de imagens."]}),"\n",(0,o.jsxs)(n.p,{children:["Pode passar -1 em ",(0,o.jsx)(n.em,{children:"linhaMenu"})," para especificar a \xfaltima linha a\xf1adida a ",(0,o.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,o.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero de menu. Se passa uma refer\xeancia de menu, o par\xe2metro ",(0,o.jsx)(n.em,{children:"processo"})," n\xe3o ser\xe1 necess\xe1rio e se for passada \xe9 ignorada. Se passa um n\xfamero de menu, o comando ter\xe1 em conta o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Se o \xedcone foi especificado usando um arquivo de imagem, o comando retorna em ",(0,o.jsx)(n.em,{children:"iconRef"})," o nome de rota usando o padr\xe3o ",(0,o.jsxs)(n.strong,{children:["path:",(0,o.jsx)(n.filesystem,{path:""})]}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Se o \xedcone foi especificado usando uma biblioteca de imagem (apenas em bancos de dados bin\xe1rios), o comando retorna ou o n\xfamero ou o nome da imagem, dependendo do tipo de vari\xe1vel passado neste par\xe2metro. O padr\xe3o a seguir \xe9 usado para um nome: ",(0,o.jsxs)(n.strong,{children:["pictlib:",(0,o.jsx)(n.name,{})]}),".",(0,o.jsx)(n.br,{}),"\nSe n\xe3o atriburi um tipo especifico para a var\xedavel ",(0,o.jsx)(n.em,{children:"iconRef"}),", como padr\xe3o, o nome da imagem \xe9 retornado (tipo texto)."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Se nenhum \xedcone est\xe1 associado a linha de menu, o comando devolve uma imagem vazia."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-icon",children:"SET MENU ITEM ICON"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"983"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let o={},i=r.createContext(o);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);