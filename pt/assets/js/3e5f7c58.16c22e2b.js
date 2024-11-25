"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92935"],{681251:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>l,assets:()=>t,toc:()=>m,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/set-menu-item-icon","title":"SET MENU ITEM ICON","description":"SET MENU ITEM ICON ( menu ; menuItem ; iconeRef {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-icon","permalink":"/docs/pt/commands/set-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-icon","title":"SET MENU ITEM ICON","slug":"/commands/set-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM","permalink":"/docs/pt/commands/set-menu-item"},"next":{"title":"SET MENU ITEM MARK","permalink":"/docs/pt/commands/set-menu-item-mark"}}'),r=s("785893"),i=s("250065");let d={id:"set-menu-item-icon",title:"SET MENU ITEM ICON",slug:"/commands/set-menu-item-icon",displayed_sidebar:"docs"},a=void 0,t={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",filesystem:"filesystem",h4:"h4",li:"li",p:"p",pre:"pre",relativepathname:"relativepathname",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," ; ",(0,r.jsx)(n.em,{children:"iconeRef"})," {; ",(0,r.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia ou N\xfamero de Menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero do item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"iconeRef"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome ou n\xfamero de imagem a ser associado com o item de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de processo"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," permite modificar o \xedcone associado \xe0 linha de menu designada pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"menu"})," e ",(0,r.jsx)(n.em,{children:"menuItem"}),".",(0,r.jsx)(n.br,{}),"\nPode passar -1 em ",(0,r.jsx)(n.em,{children:"menuItem"})," para especificar o \xfaltimo elemento adicionado a ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero de menu. Se passas uma refer\xeancia de menu, o comando aplicar\xe1 a todas as inst\xe2ncias do menu em todos os processos. Neste caso, se passar o par\xe2metro ",(0,r.jsx)(n.em,{children:"processo"})," \xe9 ignorado. Se passa um n\xfamero de menu, o comando considerar\xe1 o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"iconeRef"}),", pode passar o nome ou o n\xfamero da imagem da biblioteca a utilizar como \xedcone. Pode utilizar uma imagem da biblioteca ou uma refer\xeancia de imagem."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Refer\xeancia de arquivo de Imagem: dois padr\xf5es s\xe3o compat\xedveis:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["path:",(0,r.jsx)(n.filesystem,{})]})," (",(0,r.jsx)(n.em,{children:"recomendado"}),'), por exemplo "path:/RESOURCES/icon.png". Para saber mais, veja o par\xe1grafo ',(0,r.jsx)(n.em,{children:"Nomes de rotas de Filesystem"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["file:",(0,r.jsx)(n.relativepathname,{})]})," (",(0,r.jsx)(n.em,{children:"obsoleto"}),'), P\xf2r exemplo "file:icon.png". A imagem deve estar localizada na pasta ',(0,r.jsx)(n.strong,{children:"Recursos"})," do banco de dados."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Biblioteca de imagem (apenas banco de dados bin\xe1rio): Pode passar ou o nome ou o n\xfamero da imagem. \xc9 geralmente prefer\xedvel usar o n\xfamero j\xe1 que n\xfameros s\xe3o identidades \xfanicas, o que n\xe3o \xe9 o caso com os nomes."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," Uso de uma rota de arquivo de imagem \xe9 recomendado j\xe1 que a Biblioteca de Imagem est\xe1 obsoleta e n\xe3o \xe9 compat\xedvel com projetos de banco de dados 4D. Al\xe9m disso, o padr\xe3o ",(0,r.jsxs)(n.em,{children:["file:",(0,r.jsx)(n.relativepathname,{})]})," est\xe1 obsoleto, usar o padr\xe3o ",(0,r.jsxs)(n.em,{children:["path:",(0,r.jsx)(n.filesystem,{})]})," \xe9 recomendado."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Uso de uma imagem localizada na pasta Recursos do banco de dados:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-icon",children:"GET MENU ITEM ICON"})})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var o=s(667294);let r={},i=o.createContext(r);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);