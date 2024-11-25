"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50375"],{308782:function(e,o,r){r.r(o),r.d(o,{metadata:()=>a,contentTitle:()=>d,default:()=>l,assets:()=>m,toc:()=>i,frontMatter:()=>s});var a=JSON.parse('{"id":"commands-legacy/count-parameters","title":"Count parameters","description":"Count parameters  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/count-parameters.md","sourceDirName":"commands-legacy","slug":"/commands/count-parameters","permalink":"/docs/pt/commands/count-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-parameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"count-parameters","title":"Count parameters","slug":"/commands/count-parameters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copy parameters","permalink":"/docs/pt/commands/copy-parameters"},"next":{"title":"cs","permalink":"/docs/pt/commands/cs"}}'),t=r("785893"),n=r("250065");let s={id:"count-parameters",title:"Count parameters",slug:"/commands/count-parameters",displayed_sidebar:"docs"},d=void 0,m={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Count parameters"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultado"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"N\xfamero de par\xe2metros realmente passado"})]})})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"O comando Count parameters devolve o n\xfamero de par\xe2metros passados a um m\xe9todo de projeto."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Advert\xeancia:"})," Count parameters \xe9 significativo apenas em um m\xe9todo de projeto que tenha sido chamado por outro m\xe9todo (m\xe9todo de projeto ou outro). Se o m\xe9todo de projeto que chama Count parameters est\xe1 associado a um menu, Count parameters devolve 0."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(o.p,{children:["Os m\xe9todos de projeto de 4D aceitam par\xe2metros opcionais, a partir da direita.",(0,t.jsx)(o.br,{}),"\nPor exemplo, pode chamar ao m\xe9todo MeuMetodo(a;b;c;d) das seguintes formas:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0MeuMetodo(a;b;c;d)\xa0// Todos os par\xe2metros s\xe3o passados\n\xa0MeuMetodo(a;b;c)\xa0// O \xfaltimo par\xe2metro n\xe3o se passa\n\xa0MeuMetodo(a;b)\xa0// os dois \xfaltimos par\xe2metros n\xe3o s\xe3o passados\n\xa0MeuMetodo(a)\xa0// S\xf3 \xe9 passado o primeiro par\xe2metro\n\xa0MeuMetodo\xa0// N\xe3o se passa nenhum par\xe2metro\n"})}),"\n",(0,t.jsx)(o.p,{children:"Utilizando Count parameters desde MeuMetodo, pode detectar o n\xfamero de par\xe2metros passados e realizar diferentes opera\xe7\xf5es dependendo do que tenha recebido. O exemplo a seguir mostra uma mensagem de texto e pode inserir o texto em uma \xe1rea 4D Write ou enviar o texto a um documento em disco:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto AGREGAR TEXTO\n\xa0\xa0// AGREGAR TEXTO ( Texto { ; Inteiro longo { ; Hora } } )\n\xa0\xa0// AGREGAR TEXT ( Texto { ; \xc1rea 4D Write { ; RefDoc } } )\n\xa0\n\xa0var $1 : Text\n\xa0var $2 : Time\n\xa0var $3 : Integer\n\xa0\n\xa0MESSAGE($1)\n\xa0If(Count parameters>=3)\n\xa0\xa0\xa0\xa0SEND PACKET($3;$1)\n\xa0Else\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WR INSERT TEXT($2;$1)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(o.p,{children:"Depois de adicionar este m\xe9todo de projeto a sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0AGREGAR TEXTO(vtText)\xa0// Mostrar s\xf3 a mensagem de texto\n\xa0AGREGAR TEXTO(vtText;$wrArea)\xa0// Mostrar a mensagem de texto e adicionar o texto a $wrArea\n\xa0AGREGAR TEXTO(vtText;0;$vhRefDoc)\xa0// Mostrar a mensagem de texto e escrev\xea-la em $vhDocRef\n"})}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(o.p,{children:["Os m\xe9todos de projeto de 4D aceitam um n\xfamero vari\xe1vel de par\xe2metros do mesmo tipo, a partir da direita. Para declarar estes par\xe2metros, utilize as diretivas de compila\xe7\xe3o \xe0s quais voc\xea passa ",(0,t.jsx)(o.em,{children:"${N}"})," como uma vari\xe1vel, onde N especifica o primeiro par\xe2metro. Utilizando Count parameters pode referenciar estes par\xe2metros com um loop For e a sintaxe de indire\xe7\xe3o de par\xe2metro. Este exemplo \xe9 uma fun\xe7\xe3o que retorna o n\xfamero mais grande recebido como par\xe2metro:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Max de\n\xa0\xa0// Max de ( Real { ; Real2... ; RealN } ) -> Real\n\xa0\xa0// Max de ( Valor { ; Valor2... ; ValorN } ) -> Valor m\xe1ximo\n\xa0\n\xa0var $0;${1} : Real\xa0// Todos os par\xe2metros s\xe3o de tipo REAL assim como o resultado da fun\xe7\xe3o\n\xa0$0:=${1}\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0If(${$vlParam}>$0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=${$vlParam}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,t.jsx)(o.p,{children:"Depois de adicionar este m\xe9todo de projeto a sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0vrResult:=Max of(Records in set("Opera\xe7\xe3o A");Records in set("Opera\xe7\xe3o B"))\n'})}),"\n",(0,t.jsx)(o.p,{children:"ou:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0vrResult:=Max of(r1;r2;r3;r4;r5;r6)\n"})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.em,{children:"Comandos de Compila\xe7\xe3o"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/copy-parameters",children:"Copy parameters"})]})]})}function l(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return s}});var a=r(667294);let t={},n=a.createContext(t);function s(e){let o=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);