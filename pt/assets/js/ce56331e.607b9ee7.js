"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29772"],{219771:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>x,assets:()=>i,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-get-array","title":"LISTBOX Get array","description":"LISTBOX Get array ( { ;} objeto ; tipoArray* ) : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-array","permalink":"/docs/pt/commands/listbox-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-array","title":"LISTBOX Get array","slug":"/commands/listbox-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX EXPAND","permalink":"/docs/pt/commands/listbox-expand"},"next":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/pt/commands/listbox-get-arrays"}}'),s=r("785893"),t=r("250065");let d={id:"listbox-get-array",title:"LISTBOX Get array",slug:"/commands/listbox-get-array",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get array"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"tipoArray"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se for especificado, objeto \xe9 um nome de objeto (cadeia) Se for omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,s.jsx)(n.br,{}),"Vari\xe1vel (se * for omitido)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipoArray"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo de array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Ponteiro ao array associado a propriedade"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Este comando s\xf3 funciona com os list box de tipo array."]}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"LISTBOX Get array"})," devolve um ponteiro ao array associado ao estilo ou a cor do list box ou da coluna de list box designada pelos par\xe2metros ",(0,s.jsx)(n.em,{children:"objeto"})," e ",(0,s.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["Os arrays de estilo, cor ou cor de fundo podem estar associados aos list box de tipo de array usando a lista de propriedades em modo ",(0,s.jsx)(n.em,{children:"Desenho"})," ou o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-array",children:"LISTBOX SET ARRAY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passa uma refer\xeancia de vari\xe1vel no lugar de uma cadeia. Pode designar um list box ou uma coluna de list box como par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe em ",(0,s.jsx)(n.em,{children:"tipoArray"}),', o tipo de array de propriedade a obter. Pode utilizar uma das seguintes constantes, do tema "',(0,s.jsx)(n.em,{children:"List box"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk background color array"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk control array"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk font color array"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk row height array"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"(licen\xe7a 4D View Pro exigida)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk style array"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"O comando devolve um dos seguintes valores:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"})," Se nenhum array da propriedade solicitada est\xe1 associado a coluna ou ao list box."]}),"\n",(0,s.jsx)(n.li,{children:"Um ponteiro ao array da propriedade solicitada, definido pelo usu\xe1rio."}),"\n",(0,s.jsxs)(n.li,{children:["Um ponteiro ao array da propriedade solicitada, definido dinamicamente quando se chama ao comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Exemplos t\xedpicos de uso:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)\n\xa0\xa0// Devolve um ponteiro ao array de cores de fonte\n\xa0\xa0// Associado ao list box "MyLB"\n\xa0\n\xa0vPtr:=LISTBOX Get array(*;"Col4";lk style array)\n\xa0\xa0// Devolve um ponteiro ao array de estilos de fonte\n\xa0\xa0// Associado a coluna de list box "Col4"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var o=r(667294);let s={},t=o.createContext(s);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);