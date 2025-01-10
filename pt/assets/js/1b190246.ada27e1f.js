"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57303"],{960579:function(e,r,a){a.r(r),a.d(r,{default:()=>c,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","description":"GET LIST ITEM PARAMETER ARRAYS ( { ;} list ; refElemento ; arrSeletores {; arrValores*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-item-parameter-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter-arrays","permalink":"/docs/pt/commands/get-list-item-parameter-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","slug":"/commands/get-list-item-parameter-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER","permalink":"/docs/pt/commands/get-list-item-parameter"},"next":{"title":"GET LIST ITEM PROPERTIES","permalink":"/docs/pt/commands/get-list-item-properties"}}'),n=a("785893"),t=a("250065");let o={id:"get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",slug:"/commands/get-list-item-parameter-arrays",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," ( {* ;} ",(0,n.jsx)(r.em,{children:"list"})," ; ",(0,n.jsx)(r.em,{children:"refElemento"})," ; ",(0,n.jsx)(r.em,{children:"arrSeletores"})," {; ",(0,n.jsx)(r.em,{children:"arrValores"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"*"}),(0,n.jsx)(r.td,{children:"Operador"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsxs)(r.td,{children:["Se for especificada, a lista \xe9 um nome de objeto (cadeia)",(0,n.jsx)(r.br,{}),"Se for omitida, a lista \xe9 um n\xfamero de referencia de lista"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:"Integer, Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsxs)(r.td,{children:["N\xfamero de referencia de lista ou",(0,n.jsx)(r.br,{}),"Nome de objeto de tipo lista (se passado *)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"refElemento"}),(0,n.jsx)(r.td,{children:"Integer, *"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsxs)(r.td,{children:["N\xfamero de referencia do elemento ou",(0,n.jsx)(r.br,{}),"0 para o \xfaltimo elemento agregado \xe0 lista ou",(0,n.jsx)(r.br,{}),"* para o elemento atual da lista"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrSeletores"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Array dos nomes dos par\xe2metros"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrValores"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Array dos valores dos par\xe2metros"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando ",(0,n.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," permite recuperar somente em uma chamada o conjunto dos par\xe2metros (tamb\xe9m como, opcionalmente, seus valores) associados ao elemento ",(0,n.jsx)(r.em,{children:"refElemento"})," da lista hier\xe1rquica cuja referencia ou nome de objeto se passou no par\xe2metro ",(0,n.jsx)(r.em,{children:"lista"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["O par\xe2metros associados aos elementos permitem armazenar informa\xe7\xe3o adicional sobre cada elemento. Se definem com a ajuda do comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["\xc9 passado o primeiro par\xe2metro opcional ",(0,n.jsx)(r.em,{children:"*"}),", indica que o par\xe2metro ",(0,n.jsx)(r.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o de lista no formul\xe1rio. Se passado este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(r.em,{children:"lista"})," \xe9 uma referencia de lista hier\xe1rquica (",(0,n.jsx)(r.em,{children:"RefList"}),"). \xc9 utilizado somente uma representa\xe7\xe3o de lista ou trabalha com os elementos estruturais (o segundo ",(0,n.jsx)(r.em,{children:"*"})," \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxes. No entanto, varias representa\xe7\xf5es s\xe3o utilizadas de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), deve utilizar a sintaxes baseada no nome do objeto, porque cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," devolve os par\xe2metros definidos para o elemento ",(0,n.jsx)(r.em,{children:"refElemento"})," no array texto ",(0,n.jsx)(r.em,{children:"arrSeletores"}),". Quando se passa o array texto ",(0,n.jsx)(r.em,{children:"arrValores"}),", o comando utiliza para devolver os valores associados com estes par\xe2metros."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"arrValores"}),' deve ser um array de tipo texto. Se tem valores associados que n\xe3o s\xe3o textuais (tipo num\xe9rico ou Booleano), convertidos em cadeias (True="1", False="0").']}),"\n",(0,n.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"Dada a seguinte lista hier\xe1rquica:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0<>HL:=New list\n\xa0$ID:=30\n\xa0APPEND TO LIST(<>HL;"Martin";$ID)\n\xa0\xa0//5 par\xe2metros\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Nome";"Phil")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Data de nascimento";"01/02/1978")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Homem";True)\xa0//Booleano\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Idade";33)\xa0//n\xfamero\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Cidade";"Dallas")\n'})}),"\n",(0,n.jsx)(r.p,{children:'Para maior simplicidade a lista se associou a uma lista objeto com o mesmo nome ("<>HL").'}),"\n",(0,n.jsx)(r.p,{children:'Quando o elemento "Martin" \xe9 selecionado na lista, pode recuperar seus par\xe2metros executando o seguinte c\xf3digo:'}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames)\n\xa0\xa0// arrParamNames{1} cont\xe9m "Nome"\n\xa0\xa0// arrParamNames{2} cont\xe9m "Data de nascimento"\n\xa0\xa0// arrParamNames{3} cont\xe9m "Homem"\n\xa0\xa0// arrParamNames{4} cont\xe9m "Idade"\n\xa0\xa0// arrParamNames{5} cont\xe9m "Cidade"\n'})}),"\n",(0,n.jsx)(r.p,{children:"Caso tamb\xe9m queiras obter os valores dos par\xe2metros, escreva:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0ARRAY TEXT(arrParamValues;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames;arrParamValues)\n\xa0\xa0// arrParamValues{1} cont\xe9m "Phil"\n\xa0\xa0// arrParamValues{2} cont\xe9m "01/02/1978"\n\xa0\xa0// arrParamValues{3} cont\xe9m "1"\n\xa0\xa0// arrParamValues{4} cont\xe9m "33"\n\xa0\xa0// arrParamValues{5} cont\xe9m "Dallas"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/pt/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})}),"\n",(0,n.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"1195"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return d},a:function(){return o}});var s=a(667294);let n={},t=s.createContext(n);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);