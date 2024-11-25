"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2792"],{513683:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>l,assets:()=>i,toc:()=>m,frontMatter:()=>s});var o=JSON.parse('{"id":"commands-legacy/get-menu-item-property","title":"GET MENU ITEM PROPERTY","description":"GET MENU ITEM PROPERTY ( menu ; menuItem ; propriedade ; valor {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-property.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-property","permalink":"/docs/pt/commands/get-menu-item-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-property","title":"GET MENU ITEM PROPERTY","slug":"/commands/get-menu-item-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item parameter","permalink":"/docs/pt/commands/get-menu-item-parameter"},"next":{"title":"Get menu item style","permalink":"/docs/pt/commands/get-menu-item-style"}}'),t=r("785893"),d=r("250065");let s={id:"get-menu-item-property",title:"GET MENU ITEM PROPERTY",slug:"/commands/get-menu-item-property",displayed_sidebar:"docs"},a=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET MENU ITEM PROPERTY"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"menuItem"})," ; ",(0,t.jsx)(n.em,{children:"propriedade"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," {; ",(0,t.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuItem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propriedade"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tipo de propriedade"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor da propriedade"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"processo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de processo"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comandoGET MENU ITEM PROPERTY devolve, no par\xe2metro ",(0,t.jsx)(n.em,{children:"valor"}),", o valor atual da linha de menu designada pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"menu"})," e ",(0,t.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pode passar -1 em ",(0,t.jsx)(n.em,{children:"menuItem"})," para especificar o \xfaltimo elemento adicionado a ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero de menu. Se passa uma refer\xeancia de menu, o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"})," n\xe3o \xe9 necess\xe1rio e ser\xe1 ignorado se for passado. Se passa um n\xfamero de menu, o comando considera o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"propriedade"}),", passe a propriedade para a qual quer obter o valor. Pode utilizar uma das constantes do tema \u201C",(0,t.jsx)(n.em,{children:"Propriedades de item de menu"}),"\u201D ou uma cadeia correspondente a uma propriedade personalizada. Para maior informa\xe7\xe3o sobre as propriedades dos menus e seus valores, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})]}),"\n",(0,t.jsxs)(n.p,{children:["Nota de compatibilidade: Como padr\xe3o, se o valor da vari\xe1vel n\xe3o for digitado explicitamente, o comando n\xe3o retorna um nome ",(0,t.jsx)(n.em,{children:"A\xe7\xe3o estandarte"}),". Se quiser obter um valor num\xe9rico definido no tema de constante (obsoleto) ",(0,t.jsx)(n.em,{children:"Valores para a\xe7\xe3o padr\xe3o associada"})," precisa declarar a vari\xe1vel de valor como longint."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var o=r(667294);let t={},d=o.createContext(t);function s(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);