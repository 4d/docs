"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64841"],{2934:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/array-time","title":"ARRAY TIME","description":"ARRAY TIME ( nomArray ; tamanho {; tamanho2} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-time.md","sourceDirName":"commands-legacy","slug":"/commands/array-time","permalink":"/docs/pt/commands/array-time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-time","title":"ARRAY TIME","slug":"/commands/array-time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TEXT","permalink":"/docs/pt/commands/array-text"},"next":{"title":"ARRAY TO LIST","permalink":"/docs/pt/commands/array-to-list"}}'),s=n("785893"),o=n("250065");let d={id:"array-time",title:"ARRAY TIME",slug:"/commands/array-time",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"ARRAY TIME"})," ( ",(0,s.jsx)(r.em,{children:"nomArray"})," ; ",(0,s.jsx)(r.em,{children:"tamanho"})," {; ",(0,s.jsx)(r.em,{children:"tamanho2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nomArray"}),(0,s.jsx)(r.td,{children:"Array"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Nome de array"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tamanho"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de elementos no array ou N\xfamero de filas se especificado tamanho2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tamanho2"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de colunas em um array de duas dimens\xf5es"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"ARRAY TIME"})," cria ou redimensiona um array de tipo tempo em mem\xf3ria.em 4D, as horas podem ser processadas \u200B\u200Bcomo valores num\xe9ricos. Nas vers\xf5es de 4D anteriores a v14, tinham que combinar um array inteiro longo com um formato de visualiza\xe7\xe3o para gerenciar um array de horas."]}),"\n",(0,s.jsxs)(r.p,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"nomArray"})," \xe9 o nome do array."]}),"\n",(0,s.jsxs)(r.p,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"tam"})," \xe9 o n\xfamero de elementos do array."]}),"\n",(0,s.jsxs)(r.p,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"tam2"})," \xe9 opcional. Se ele passar, este comando cria um array de duas dimens\xf5es. Neste caso, ",(0,s.jsx)(r.em,{children:"tam"})," especifica o n\xfamero de filas e ",(0,s.jsx)(r.em,{children:"tam2"})," o n\xfamero de colunas de cada array. Cada fila em um array de duas dimens\xf5es se pode processar tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimens\xe3o de um array de duas dimens\xf5es, pode inserir e retirar arrays inteiros utilizando outros comandos deste tema ."]}),"\n",(0,s.jsxs)(r.p,{children:["Quando aplica o comando ",(0,s.jsx)(r.strong,{children:"ARRAY TIME"})," a um array existente :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Seu tamanho \xe9 ampliado, os elementos existentes n\xe3o mudam e os novos elementos se inicializam no valor de hora nulo (00:00:00 ) ."}),"\n",(0,s.jsx)(r.li,{children:"Seu tamanho \xe9 reduzido, se eliminam e perdem os elementos de abaixo do array."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Quando aplica ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/selection-to-array",children:"SELECTION TO ARRAY"})," ou ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"})," a um campo de tipo Hora, tenha em conta que s\xf3 s\xe3o criados um array de tipo Hora se o array n\xe3o foi definido como outro tipo, tal como Inteiro longo, por exemplo."]}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(r.p,{children:"Este exemplo cria um array processo que cont\xe9m 100 elementos de tipo Hora:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TIME(arrTimes;100)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(r.p,{children:"Este exemplo cria um array local de 100 filas, contendo cada uma 50 elementos de tipo Hora:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TIME($arrTimes;100;50)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(r.p,{children:"Como os arrays de horas aceitam valores num\xe9ricos, o seguinte c\xf3digo \xe9 v\xe1lido:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TIME($arrTimeValues;10)\n\xa0$CurTime:=Current time+1\n\xa0APPEND TO ARRAY($arrTimeValues;$CurTime)\n\xa0$Found:=Find in array($arrTimeValues;$CurTime)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Criando arrays"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/time",children:"Time"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"1223"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var a=n(667294);let s={},o=a.createContext(s);function d(e){let r=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);