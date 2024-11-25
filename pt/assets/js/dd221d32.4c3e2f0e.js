"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91863"],{54047:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>r,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/is-editing-text","title":"Is editing text","description":"Is editing text  : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-editing-text.md","sourceDirName":"commands-legacy","slug":"/commands/is-editing-text","permalink":"/docs/pt/commands/is-editing-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-editing-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-editing-text","title":"Is editing text","slug":"/commands/is-editing-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HIGHLIGHT TEXT","permalink":"/docs/pt/commands/highlight-text"},"next":{"title":"Keystroke","permalink":"/docs/pt/commands/keystroke"}}'),s=n("785893"),i=n("250065");let d={id:"is-editing-text",title:"Is editing text",slug:"/commands/is-editing-text",displayed_sidebar:"docs"},r=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Is editing text"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultado"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"True se texto estiver sendo digitado, sen\xe3o False"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O comando ",(0,s.jsx)(t.strong,{children:"Is editing text"})," devolve ",(0,s.jsx)(t.strong,{children:"True"})," se o usu\xe1rio estiver ingressando valores em um objeto de formul\xe1rio de entrada e ",(0,s.jsx)(t.strong,{children:"False"})," em todos os demais casos."]}),"\n",(0,s.jsx)(t.p,{children:"Este comando se utiliza principalmente para distinguir, dentro do c\xf3digo ativado pelo evento de formul\xe1rio On Before Keystroke, entre a entrada de dados de usu\xe1rio real e o uso de teclas de acesso direto. Por exemplo, \xe9 poss\xedvel que queira executar um c\xf3digo diferente se o usu\xe1rio esteja pressionando uma tecla para ingressar texto em uma c\xe9lula ou para deslocar-se pelo listbox."}),"\n",(0,s.jsxs)(t.p,{children:["O comando ",(0,s.jsx)(t.strong,{children:"Is editing text"})," s\xf3 pode ser utilizado com os objetos de formul\xe1rio abaixo:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"entrada"}),"\n",(0,s.jsx)(t.li,{children:"listbox (edit\xe1ble e n\xe3o edit\xe1vel)"}),"\n",(0,s.jsx)(t.li,{children:"combo box"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Com outros objetos, o comando sempre devolve ",(0,s.jsx)(t.strong,{children:"False"}),". Em particular, n\xe3o pode utilizar com as \xe1reas 4D Write Pro e 4D View Pro."]}),"\n",(0,s.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(t.p,{children:"Se quiser permitir que o usu\xe1rio selecione uma linha come\xe7ando com a letra ou n\xfamero digitado em uma listbox edit\xe1vel:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On Before Keystroke)\xa0//uma tecla \xe9 pressionada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is editing text)\xa0//texto \xe9 digitado\n\xa0\xa0// pro\xedbe alguns caracteres\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//nada est\xe1 sendo digitado, \xe9 a funcionalidade de deslocamento atalho\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$charCode:=Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$char:=Uppercase($charCode)\xa0// remove acentos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//Seleciona uma linha come\xe7ando com a letra ou n\xfamero digitado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($charCode>=Left arrow key)&($charCode<=Down arrow key)\xa0// flechas esquerda/direita/cima/embaixo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\xa0// desativa a\xe7\xf5es das flechas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/commands/get-edited-text",children:"Get edited text"})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var o=n(667294);let s={},i=o.createContext(s);function d(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);