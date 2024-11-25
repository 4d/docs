"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34801"],{324802:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/object-get-list-name","title":"OBJECT Get list name","description":"OBJECT Get list name ( { ;} objeto {; tipoLista*} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-list-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-name","permalink":"/docs/pt/commands/object-get-list-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-list-name","title":"OBJECT Get list name","slug":"/commands/object-get-list-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get keyboard layout","permalink":"/docs/pt/commands/object-get-keyboard-layout"},"next":{"title":"OBJECT Get list reference","permalink":"/docs/pt/commands/object-get-list-reference"}}'),s=n("785893"),d=n("250065");let i={id:"object-get-list-name",title:"OBJECT Get list name",slug:"/commands/object-get-list-name",displayed_sidebar:"docs"},a=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OBJECT Get list name"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"objeto"})," {; ",(0,s.jsx)(t.em,{children:"tipoLista"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operador"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel ou campo."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objeto"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nome de objeto (se * for especificado) ou Vari\xe1vel ou campo (se * for omitido)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tipoLista"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Tipo de lista: lista de sele\xe7\xe3o, lista de obrigat\xf3rios ou lista de exclu\xeddos"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultado"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Nome da lista de escolha (especificado no modo Desenho)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O comando OBJECT Get list name devolve o nome da lista associada ao objeto ou a um grupo de objetos designados por ",(0,s.jsx)(t.em,{children:"objeto"}),". 4D lhe permite associar uma lista de op\xe7\xf5es (criada com o editor de listas em modo Desenho) com objetos de formul\xe1rio utilizando o editor de formul\xe1rios ou o comando ",(0,s.jsx)(t.a,{href:"/docs/pt/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Se pasa o par\xe2metro opcional ",(0,s.jsx)(t.em,{children:"*"}),", indica que o par\xe2metro objeto \xe9 um nome de objeto (cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro objeto \xe9 um campo ou uma vari\xe1vel. Neeste caso, se passa uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto unicamente) ao inv\xe9s de uma cadeia."]}),"\n",(0,s.jsxs)(t.p,{children:["Pode utilizar o par\xe2metro opcional ",(0,s.jsx)(t.em,{children:"tipoLista"})," para designar o tipo de lista que deseja obter. Por padr\xe3o, se omitir este par\xe2metro, o comando devolve o nome da lista de op\xe7\xf5es (lista de valores) associado ao objeto. Tamb\xe9m pode obter os nomes das listas obrigat\xf3rias ou das listas de exclu\xeddos passando, em ",(0,s.jsx)(t.em,{children:"tipoLista"}),', uma das seguintes constantes que se encontram no tema "',(0,s.jsx)(t.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constante"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{children:"Valor"}),(0,s.jsx)(t.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Choice list"}),(0,s.jsx)(t.td,{children:"Inteiro longo"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:'Lista simples de sele\xe7\xe3o de valores (op\xe7\xe3o "Lista" na Lista de Propriedades) (por padr\xe3o)'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Excluded list"}),(0,s.jsx)(t.td,{children:"Inteiro longo"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:'Lista de valores n\xe3o aceitos para a entrada (Op\xe7\xe3o "Exclus\xf5es" na lista de propriedades)'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Required list"}),(0,s.jsx)(t.td,{children:"Inteiro longo"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:'Lista s\xf3 os valores aceitos para a entrada (Op\xe7\xe3o "Obrigat\xf3ria" na Lista de Propriedades)'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Se nenhuma lista do tipo definido est\xe1 associada ao ",(0,s.jsx)(t.em,{children:"objeto"}),', o comando devolve uma cadeia vazia ("").']}),"\n",(0,s.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/commands/object-get-list-reference",children:"OBJECT Get list reference"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"})]})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var o=n(667294);let s={},d=o.createContext(s);function i(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);