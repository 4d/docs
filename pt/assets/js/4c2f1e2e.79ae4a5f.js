"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24781"],{128408:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>c,toc:()=>i,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/menu-selected","title":"Menu selected","description":"Menu selected {( subMenu )} : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/menu-selected.md","sourceDirName":"commands-legacy","slug":"/commands/menu-selected","permalink":"/docs/pt/commands/menu-selected","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmenu-selected.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"menu-selected","title":"Menu selected","slug":"/commands/menu-selected","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT MENU ITEM","permalink":"/docs/pt/commands/insert-menu-item"},"next":{"title":"RELEASE MENU","permalink":"/docs/pt/commands/release-menu"}}'),o=s("785893"),r=s("250065");let t={id:"menu-selected",title:"Menu selected",slug:"/commands/menu-selected",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Menu selected"})," {( ",(0,o.jsx)(n.em,{children:"subMenu"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"subMenu"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Refer\xeancia de menu contendo o item selecionado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:'Comando de menu selecionado "Palavra Superior": n\xfamero de menu Palavra inferior: N\xfamero de comando de menu'})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"Menu selected \xe9 utilizado s\xf3 quando s\xe3o mostrados formul\xe1rios. Esta fun\xe7\xe3o detecta o comando de menu escolhido no menu no caso de um submenu hier\xe1rquico, retorna a refer\xeancia do submenu."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dica:"})," sempre que seja poss\xedvel, utilize m\xe9todos associados com comandos de menu em uma barra associada (com um n\xfamero de barra negativo) ao inv\xe9s de utilizar Menu selected. As barras de menus associadas s\xe3o mais f\xe1ceis de administrar, j\xe1 que n\xe3o \xe9 necess\xe1rio provar sua sele\xe7\xe3o. Entretanto, se s\xe3o utilizados os comandos ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/append-menu-item",title:"APPEND MENU ITEM",children:"APPEND MENU ITEM"})," ou ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/insert-menu-item",title:"INSERT MENU ITEM",children:"INSERT MENU ITEM"}),", deve utilizar Menu selected porque as linhas de menus adicionadas por esses comandos n\xe3o t\xeam m\xe9todos associados."]}),"\n",(0,o.jsxs)(n.p,{children:["O comando Menu selected pode ser utilizado para trabalhar com submenus hier\xe1rquicos. Quando se seleciona uma linha de um menu hier\xe1rquico mais al\xe9m do primeiro n\xedvel, o comando devolve, no par\xe2metro opcional submenu, a refer\xeancia (tipo ",(0,o.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),", cadeia de 16 caracteres) do submenu ao qual pertence a linha selecionada. Se o comando de menu n\xe3o conter um submenu hier\xe1rquico, este par\xe2metro recebe uma cadeia vazia."]}),"\n",(0,o.jsx)(n.p,{children:"Menu selected devolve o n\xfamero do menu selecionado, um inteiro longo. Para encontrar o n\xfamero de menu, divida Menu selected por 65,536 e converta o resultado em um inteiro. Para obter o n\xfamero do comando de menu, calcule o m\xf3dulo de Menu selected com o coeficiente 65,536. Utilize as seguintes f\xf3rmulas para calcular o n\xfamero de menu e do comando de menu:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=Menu selected\\ 65536\n\xa0comando de menu:=Menu selected% 65536\n"})}),"\n",(0,o.jsx)(n.p,{children:"Da mesma forma pode extrair estes valores utilizando os Operadores bitwise como no exemplo a seguir:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=(Menu selected\xa0&\xa00xFFFF0000)>>16\n\xa0comando de menu:=Menu selected\xa0&\xa00xFFFF\n"})}),"\n",(0,o.jsx)(n.p,{children:"Se nenhum comando de menu estiver selecionado, Menu selected devolve 0."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://3.bp.blogspot.com/%5F6kVfdO0K8wI/TCLapBtKciI/AAAAAAAAAZs/hwb4zRkSFMs/s1600/hand.gif",children:" "})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(n.p,{children:["O m\xe9todo a seguir de formul\xe1rio utiliza Menu selected para proporcionar os argumentos menu e linha de menu a ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-mark",title:"SET MENU ITEM MARK",children:"SET MENU ITEM MARK"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(16;$MenuRefIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $ref;$MenuNum;$MenuItemNum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref:=Menu selected($MenuRefIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuNum:=$ref\\65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuItemNum:=$ref%65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET MENU ITEM MARK(MenuRefIncludingItem;$MenuItemNum;Char(18))\n\xa0End case\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," o evento de formul\xe1rio On Menu Selected n\xe3o \xe9 ativado se nenhuma linha estiver selecionada, ",(0,o.jsx)(n.em,{children:"$MenuRefIncludingItem"})," sempre \xe9 dado e ",(0,o.jsx)(n.em,{children:"$MenuNum"})," vale 0 se o menu n\xe3o \xe9 um dos menus da barra."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Gest\xe3o de Menus"})}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"152"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Proibido no servidor"}),(0,o.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var d=s(667294);let o={},r=d.createContext(o);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);