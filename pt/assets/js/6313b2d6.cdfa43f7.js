"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42875"],{51017:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>r,assets:()=>m,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/set-menu-item-parameter","title":"SET MENU ITEM PARAMETER","description":"SET MENU ITEM PARAMETER ( menu ; menuItem ; param )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-menu-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-parameter","permalink":"/docs/pt/commands/set-menu-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-parameter.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-menu-item-parameter","title":"SET MENU ITEM PARAMETER","slug":"/commands/set-menu-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM METHOD","permalink":"/docs/pt/commands/set-menu-item-method"},"next":{"title":"SET MENU ITEM PROPERTY","permalink":"/docs/pt/commands/set-menu-item-property"}}'),d=t("785893"),s=t("250065");let i={id:"set-menu-item-parameter",title:"SET MENU ITEM PARAMETER",slug:"/commands/set-menu-item-parameter",displayed_sidebar:"docs"},a=void 0,m={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET MENU ITEM PARAMETER"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," ; ",(0,d.jsx)(n.em,{children:"param"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"param"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"String a ser associado como par\xe2metro"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando SET MENU ITEM PARAMETER permite associar uma cadeia de caracteres personalizada com uma linha de menu designada pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"menu"})," e ",(0,d.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Este par\xe2metro \xe9 utilizado principalmente pelo comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/dynamic-pop-up-menu",title:"Dynamic pop up menu",children:"Dynamic pop up menu"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Este c\xf3digo oferece um menu que inclui os nomes das janelas abertas e permite recuperar o n\xfamero da janelas escolhida:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0WINDOW LIST($alWindow)\n\xa0$tMenuRef:=Create menu\n\xa0For($i;1;Size of array($alWindow))\n\xa0\xa0\xa0\xa0APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i}))\xa0// T\xedtulo da linha do menu\n\xa0\xa0\xa0\xa0SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i}))\xa0// Valor devolvido pela linha do menu\n\xa0End for\n\xa0$tWindowRef:=Dynamic pop up menu($tMenuRef)\n\xa0RELEASE MENU($tMenuRef)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-parameter",children:"Get menu item parameter"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-selected-menu-item-parameter",children:"Get selected menu item parameter"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1004"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);