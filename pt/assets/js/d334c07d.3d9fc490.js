"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48023"],{983971:function(e,n,a){a.r(n),a.d(n,{default:()=>l,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/dynamic-pop-up-menu","title":"Dynamic pop up menu","description":"Dynamic pop up menu ( menu {; porpadrao {; coordX ; coordY}} )  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dynamic-pop-up-menu.md","sourceDirName":"commands-legacy","slug":"/commands/dynamic-pop-up-menu","permalink":"/docs/pt/20-R7/commands/dynamic-pop-up-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdynamic-pop-up-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dynamic-pop-up-menu","title":"Dynamic pop up menu","slug":"/commands/dynamic-pop-up-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISABLE MENU ITEM","permalink":"/docs/pt/20-R7/commands/disable-menu-item"},"next":{"title":"ENABLE MENU ITEM","permalink":"/docs/pt/20-R7/commands/enable-menu-item"}}'),d=a("785893"),t=a("250065");let r={id:"dynamic-pop-up-menu",title:"Dynamic pop up menu",slug:"/commands/dynamic-pop-up-menu",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Dynamic pop up menu"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," {; ",(0,d.jsx)(n.em,{children:"porpadrao"})," {; ",(0,d.jsx)(n.em,{children:"coordX"})," ; ",(0,d.jsx)(n.em,{children:"coordY"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Refer\xeancia de menu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"porpadrao"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Par\xe2metro de itens selecionado por padr\xe3o"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"coordX"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada X do canto esquerdo superior"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"coordY"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada Y do canto esquerdo superior"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Par\xe2metro do menu de item selecionado"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando Dynamic pop up menu faz aparecer um menu suspenso hier\xe1rquico na localiza\xe7\xe3o atual do mouse ou na localiza\xe7\xe3o definida pelos par\xe2metros opcionais ",(0,d.jsx)(n.em,{children:"Coordx"})," e ",(0,d.jsx)(n.em,{children:"Coordy"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["O menu hier\xe1rquico utilizado deve ter sido criado com o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/create-menu",children:"Create menu"}),". A refer\xeancia devolvida por ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/create-menu",children:"Create menu"})," deve ser passada no par\xe2metro ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/pop-up-menu",children:"Pop up menu"})," (tema \u201CInterface de usu\xe1rio\u201D) pode ser utilizada para criar menus pop-up menus baseados em texto."]}),"\n",(0,d.jsx)(n.p,{children:"De acordo com as regras padr\xe3o da interface, este comando geralmente deve ser chamado em resposta a um clique direito, ou quando o bot\xe3o \xe9 mantido pressionado por um certo per\xedodo de tempo (menu contextual por exemplo)."}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"porpadrao"})," pode ser utilizado para definir um elemento do menu suspenso selecionado automaticamente quando aparece o menu. Neste par\xe2metro, passe uma cadeia personalizada associada a refer\xeancia do elemento de menu. Esta cadeia deve ter sido definida anteriormente com a ajuda do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),". Se n\xe3o passar este par\xe2metro, o primeiro elemento do menu ser\xe1 selecionado automaticamente."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Por padr\xe3o apenas um item de menu de n\xedvel superior pode ser selecionado."]}),"\n",(0,d.jsxs)(n.p,{children:["Os par\xe2metros opcionais ",(0,d.jsx)(n.em,{children:"CoordX"})," e ",(0,d.jsx)(n.em,{children:"CoordY"})," podem ser utilizados para especificar a localiza\xe7\xe3o do menu suspenso a mostrar. Nos par\xe2metros ",(0,d.jsx)(n.em,{children:"CoordX"})," e ",(0,d.jsx)(n.em,{children:"CoordY"}),", passe as coordenadas horizontal e vertical respectivamente, da esquina superior esquerda do menu. Estas coordenadas devem ser expressas em p\xedxels no sistema de coordenadas local do formul\xe1rio atual. Estes dois par\xe2metros devem ser passados juntos; se \xe9 passado s\xf3 um deles, o outro ser\xe1 ignorado."]}),"\n",(0,d.jsxs)(n.p,{children:["Se quer mostrar um menu suspenso associado a um bot\xe3o 3D, n\xe3o passe os par\xe2metros opcionais ",(0,d.jsx)(n.em,{children:"CoordX"})," e ",(0,d.jsx)(n.em,{children:"CoordY"}),'. Neste caso, 4D calcula automaticamente a localiza\xe7\xe3o do menu relativo ao bot\xe3o de acordo aos padr\xf5es de interface da plataforma atual. (the 3D button must have the "With pop-up menu/Linked" or "With pop-up menu/Separated" property).']}),"\n",(0,d.jsxs)(n.p,{children:["Se um elemento de menu for selecionado, o comando devolve sua cadeia de caracteres personalizada associada (tal como foi definido utilizando o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),"). Do contrario, o comando devolve uma cadeia vazia."]}),"\n",(0,d.jsxs)(n.p,{children:["Se uma a\xe7\xe3o padr\xe3o for associada a um item menu, \xe9 levado em considera\xe7\xe3o pelo comando ",(0,d.jsx)(n.strong,{children:"Dynamic pop up menu"})," em v\xe1rios n\xedveis:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["se uma a\xe7\xe3o padr\xe3o associada n\xe3o for ativada (ou seja, n\xe3o puder ser chamada) no contexto do menu pop up, o item \xe9 automaticamente escondido. Pode saber se a a\xe7\xe3o foi ativada usando o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/action-info",children:"Action info"}),"."]}),"\n",(0,d.jsx)(n.li,{children:'Itens com uma a\xe7\xe3o toggle associada s\xe3o automaticamente marcados, desmarcados ou "mixed" dependendo da sele\xe7\xe3o.'}),"\n",(0,d.jsx)(n.li,{children:"Se o t\xedtulo da a\xe7\xe3o foi estabelecido ao item usando a constante ak standard action title, o nome localizado \xe9 exibido no menu."}),"\n",(0,d.jsx)(n.li,{children:"Quando o item for selecionado, a a\xe7\xe3o padr\xe3o associada \xe9 chamada (execu\xe7\xe3o \xe9 ass\xedncrona)."}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Este c\xf3digo permite criar um menu emergente din\xe2mico hier\xe1rquico baseado em a\xe7\xf5es padr\xe3o:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $refMainContextMenu;$refMenuEdit : Text\n\xa0$refMainContextMenu:=Create menu\n\xa0APPEND MENU ITEM($refMainContextMenu;"-")\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak select all)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak clear)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak copy)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak cut)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak paste)\n\xa0APPEND MENU ITEM($refMainContextMenu;"-")\n\xa0\xa0//sub menu text edit\n\xa0$refMenuEdit:=Create menu\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font bold)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("B"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font italic)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("I"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font linethrough)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("L"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font underline)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("U"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font show dialog)\n\xa0APPEND MENU ITEM($refMainContextMenu;"Edit";$refMenuEdit)\n\xa0\n\xa0paramRef:=Dynamic pop up menu($refMainContextMenu)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item-parameter",children:"Get menu item parameter"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-selected-menu-item-parameter",children:"Get selected menu item parameter"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/pop-up-menu",children:"Pop up menu"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1006"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return r}});var o=a(667294);let d={},t=o.createContext(d);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);