"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41863"],{973674:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-get-list-reference","title":"OBJECT Get list reference","description":"OBJECT Get list reference ( { ;} objeto {; tipoLista*} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-list-reference.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-reference","permalink":"/docs/pt/commands/object-get-list-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-reference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-list-reference","title":"OBJECT Get list reference","slug":"/commands/object-get-list-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get list name","permalink":"/docs/pt/commands/object-get-list-name"},"next":{"title":"OBJECT GET MAXIMUM VALUE","permalink":"/docs/pt/commands/object-get-maximum-value"}}'),r=t("785893"),o=t("250065");let d={id:"object-get-list-reference",title:"OBJECT Get list reference",slug:"/commands/object-get-list-reference",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"tipoLista"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de objeto (se * for especificado) ou Campo ou vari\xe1vel (se * for omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipoLista"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de lista: lista de Sele\xe7\xe3o, lista obrigat\xf3ria ou a lista de exclu\xeddos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," devolve o n\xfamero de refer\xeancia (",(0,r.jsx)(n.em,{children:"RefList"}),") da lista hier\xe1rquica associada ao objeto ou grupo de objetos designados pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de campo ou vari\xe1vel em lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por padr\xe3o, se omite o par\xe2metro ",(0,r.jsx)(n.em,{children:"tipoLista"}),", o comando devolve o nome da lista de op\xe7\xf5es (lista de valores) associado ao objeto. Tamb\xe9m pode obter o n\xfamero de refer\xeancia das listas obrigat\xf3ria ou as listas de exclu\xeddos passando em ",(0,r.jsx)(n.em,{children:"tipoLista"}),', uma das seguintes constantes do tema "',(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Choice list"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:'Lista simples de sele\xe7\xe3o de valores (op\xe7\xe3o "Lista" na Lista de Propriedades) (por padr\xe3o)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Excluded list"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'Lista de valores n\xe3o aceitos para a entrada (Op\xe7\xe3o "Exclus\xf5es" na lista de propriedades)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Required list"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'Lista s\xf3 os valores aceitos para a entrada (Op\xe7\xe3o "Obrigat\xf3ria" na Lista de Propriedades)'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Se n\xe3o h\xe1 uma lista hier\xe1rquica associada ao objeto para o ",(0,r.jsx)(n.em,{children:"tipoLista"})," definido, o comando devolve 0."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1267"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);