"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28782"],{29848:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/object-get-indicator-type","title":"OBJECT Get indicator type","description":"OBJECT Get indicator type ( { ;} objeto* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-indicator-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-indicator-type","permalink":"/docs/pt/commands/object-get-indicator-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-indicator-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-indicator-type","title":"OBJECT Get indicator type","slug":"/commands/object-get-indicator-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/pt/commands/object-get-horizontal-alignment"},"next":{"title":"OBJECT Get keyboard layout","permalink":"/docs/pt/commands/object-get-keyboard-layout"}}'),r=t("785893"),d=t("250065");let i={id:"object-get-indicator-type",title:"OBJECT Get indicator type",slug:"/commands/object-get-indicator-type",displayed_sidebar:"docs"},s=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get indicator type"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de objeto (se* \xe9 especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tipo de indicador"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"OBJECT Get indicator type"})," devolve o tipo do indicador atual atribu\xeddo ao term\xf4metro(s) designado pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pode definir o tipo de indicador utilizando a lista de propriedades em modo de desenho ou utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel do objeto unicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:['Pode comparar o valor devolvido pelo comando com as seguintes constantes, que se encontram no tema "',(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Asynchronous progress bar"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Indicador circular mostra uma anima\xe7\xe3o cont\xednua"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Barber shop"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Barra que mostra uma anima\xe7\xe3o cont\xednua"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Progress bar"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Barra de progresso estandarte"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1247"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var o=t(667294);let r={},d=o.createContext(r);function i(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);