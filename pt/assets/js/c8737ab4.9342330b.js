"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54010"],{752892:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>l,assets:()=>a,toc:()=>m,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/insert-menu-item","title":"INSERT MENU ITEM","description":"INSERT MENU ITEM ( menu ; depoisItem ; textoElem {; subMenu {; processo}}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/insert-menu-item","permalink":"/docs/pt/commands/insert-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-menu-item","title":"INSERT MENU ITEM","slug":"/commands/insert-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get selected menu item parameter","permalink":"/docs/pt/commands/get-selected-menu-item-parameter"},"next":{"title":"Menu selected","permalink":"/docs/pt/commands/menu-selected"}}'),o=s("785893"),d=s("250065");let t={id:"insert-menu-item",title:"INSERT MENU ITEM",slug:"/commands/insert-menu-item",displayed_sidebar:"docs"},i=void 0,a={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"INSERT MENU ITEM"})," ( ",(0,o.jsx)(n.em,{children:"menu"})," ; ",(0,o.jsx)(n.em,{children:"depoisItem"})," ; ",(0,o.jsx)(n.em,{children:"textoElem"})," {; ",(0,o.jsx)(n.em,{children:"subMenu"})," {; ",(0,o.jsx)(n.em,{children:"processo"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menu"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"depoisItem"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de item de menu"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"textoElem"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Texto para o item de menu a ser inserido"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"subMenu"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia do submenu associado com o item"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"processo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se passado: considerar metacaracteres como caracteres comuns"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comandoINSERT MENU ITEM insere novas linhas no menu cujo n\xfamero ou refer\xeancia \xe9 passada em ",(0,o.jsx)(n.em,{children:"menu"})," e as localiza depois da linha de menu cujo n\xfamero se passa em ",(0,o.jsx)(n.em,{children:"depoisItem"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,o.jsx)(n.em,{children:"processo"}),", INSERT MENU ITEM se aplica a barra de menus do processo atual. Do contrario, INSERT MENU ITEM \xe9 aplicada a barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,o.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,o.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,o.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,o.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e \xe9 ignorada."]}),"\n",(0,o.jsxs)(n.p,{children:["Se n\xe3o passa o par\xe2metro * ",(0,o.jsx)(n.em,{children:", INSERT MENU ITEM"})," lhe permite inserir um ou v\xe1rios comandos de menu em uma s\xf3 chamada."]}),"\n",(0,o.jsxs)(n.p,{children:["INSERT MENU ITEM funciona como ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/append-menu-item",children:"APPEND MENU ITEM"}),", exceto que lhe permite inserir os comandos em qualquer parte do menu, enquanto que ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/append-menu-item",children:"APPEND MENU ITEM"})," sempre os adiciona ao final do menu."]}),"\n",(0,o.jsxs)(n.p,{children:["Consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/append-menu-item",children:"APPEND MENU ITEM"})," para mais informa\xe7\xe3o sobre a defini\xe7\xe3o dos comandos de menus passados em ",(0,o.jsx)(n.em,{children:"textoElem"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Nota: a constante ak standard action title \xe9 compat\xedvel com o par\xe2metro itemText (4D v16 R3 e superior)."}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"submenu"})," permite designar um menu como linha inserida e definir um submenu hier\xe1rquico. Deve passar este par\xe2metro uma refer\xeancia de menu (cadeia de tipo MenuRef) especificando um menu criado, por exemplo, utilizando o comando de menu ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/create-menu",children:"Create menu"}),". Se o comando adiciona mais de uma linha de menu, o submenu \xe9 associado com a primeira linha."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Importante:"})," as novas linhas n\xe3o tem m\xe9todos ou a\xe7\xf5es associados. Devem ser associados utilizando os comandos ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," ou ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"}),", ou os elementos tamb\xe9m podem ser administrados desde um m\xe9todo de formul\xe1rio utilizando o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/menu-selected",children:"Menu selected"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O exemplo a seguir cria um menu que consiste em dois comandos os quais atribuem um m\xe9todo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0MenuRef:=Criar menu\n\xa0APPEND MENU ITEM(MenuRef;"Caracteres")\n\xa0SET MENU ITEM METHOD(MenuRef;1;"CarMgmtDial")\n\xa0INSERT MENU ITEM(MenuRef;1;"Paragrafos")\n\xa0SET MENU ITEM METHOD(MenuRef;2;"ParaMgmtDial")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let o={},d=r.createContext(o);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);