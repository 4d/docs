"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57995"],{445852:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"Concepts/time","title":"Hora","description":"- As vari\xe1veis, campos ou express\xf5es de tipo Hora podem pertencer a um intervalo entre 0000 e 596,00000.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_time.md","sourceDirName":"Concepts","slug":"/Concepts/time","permalink":"/docs/pt/18/Concepts/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"time","title":"Hora"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/pt/18/Concepts/string"},"next":{"title":"Diferente de","permalink":"/docs/pt/18/Concepts/variant"}}'),d=r("785893"),t=r("250065");let i={id:"time",title:"Hora"},o=void 0,a={},l=[{value:"Constantes literais de tipo hora",id:"constantes-literais-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Exemplo 1",id:"exemplo-1",level:3},{value:"Exemplo 2",id:"exemplo-2",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"As vari\xe1veis, campos ou express\xf5es de tipo Hora podem pertencer a um intervalo entre 00:00:00 e 596,000:00:00."}),"\n",(0,d.jsx)(n.li,{children:"As horas s\xe3o em formato de 24 horas."}),"\n",(0,d.jsx)(n.li,{children:"Um valor de Hora pode ser tratado como um n\xfamero. O n\xfamero retornado de uma Hora ser\xe1 o n\xfamero de segundos desde a maia noite (00:00:00) contidos nesse valor de hora."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," no manual de refer\xeancia da linguagem 4D, os par\xe2metros de tipo Hora nas descri\xe7\xf5es dos comandos s\xe3o chamados Hora, exceto quando for indicado o contr\xe1rio."]}),"\n",(0,d.jsx)(n.h2,{id:"constantes-literais-de-tipo-hora",children:"Constantes literais de tipo hora"}),"\n",(0,d.jsx)(n.p,{children:"Uma constante hora est\xe1 rodeada por sinais de interroga\xe7\xe3o (?....?)."}),"\n",(0,d.jsx)(n.p,{children:"A time literal constant is ordered hour:minute:second, with a colon (:) setting off each part. Times are specified in 24-hour format. As horas s\xe3o especificadas no formato de 24 horas."}),"\n",(0,d.jsx)(n.p,{children:"Aqui s\xe3o exemplos de constantes de tipo hora:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"?00:00:00? ` meia noite\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, e 59 segundos\n"})}),"\n",(0,d.jsx)(n.p,{children:"Uma hora nula se escreve ?00:00:00?"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Dica:"})," o editor de m\xe9todos inclui um acesso direto para introduzir uma hora nula. Para escrever uma hora nula, introduza o sinal de interroga\xe7\xe3o (?) e aperte Enter."]}),"\n",(0,d.jsx)(n.h2,{id:"operadores-de-horas",children:"Operadores de horas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,d.jsx)(n.th,{children:"Sintaxe"}),(0,d.jsx)(n.th,{children:"Retorna"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Adi\xe7\xe3o"}),(0,d.jsx)(n.td,{children:"Hora + Hora"}),(0,d.jsx)(n.td,{children:"Hora"}),(0,d.jsx)(n.td,{children:"?02:03:04? + ?01:02:03?"}),(0,d.jsx)(n.td,{children:"?03:05:07?"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Subtra\xe7\xe3o"}),(0,d.jsx)(n.td,{children:"Hora \u2013 Hora"}),(0,d.jsx)(n.td,{children:"Hora"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"?01:01:01?"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Adi\xe7\xe3o"}),(0,d.jsx)(n.td,{children:"Hora + N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"7449"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Subtra\xe7\xe3o"}),(0,d.jsx)(n.td,{children:"Hora \u2013 N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"7319"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Multiplica\xe7\xe3o"}),(0,d.jsx)(n.td,{children:"Hora * N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"14768"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Divis\xe3o"}),(0,d.jsx)(n.td,{children:"Hora / N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"3692"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Divis\xe3o inteira"}),(0,d.jsx)(n.td,{children:"Hora \\ N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"3692"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"M\xf3dulo"}),(0,d.jsx)(n.td,{children:"Hora % Hora"}),(0,d.jsx)(n.td,{children:"Hora"}),(0,d.jsx)(n.td,{children:"?20:10:00? % ?04:20:00?"}),(0,d.jsx)(n.td,{children:"?02:50:00?"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"M\xf3dulo"}),(0,d.jsx)(n.td,{children:"Hora % N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"?02:03:04? ?02:03:04?"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Igual"}),(0,d.jsx)(n.td,{children:"Hora = Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Desigualdade"}),(0,d.jsx)(n.td,{children:"Hora # Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Maior que"}),(0,d.jsx)(n.td,{children:"Hora > Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? >=?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? >=?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor que"}),(0,d.jsx)(n.td,{children:"Hora < Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Maior ou igual a"}),(0,d.jsx)(n.td,{children:"Hora >= Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor que ou igual a"}),(0,d.jsx)(n.td,{children:"Hora <= Hora"}),(0,d.jsx)(n.td,{children:"Par\xe2metros"}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"?01:02:03? ?01:02:03?"}),(0,d.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsxs)(n.p,{children:["Para obter uma express\xe3o de tipo hora a partir de uma express\xe3o que combina uma express\xe3o de hora com um n\xfamero, utilize os comandos ",(0,d.jsx)(n.code,{children:"Time"})," e ",(0,d.jsx)(n.code,{children:"Time string"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pode combinar express\xf5es dos tipos hora e n\xfamero utilizando as fun\xe7\xf5es ",(0,d.jsx)(n.code,{children:"Time"})," ou ",(0,d.jsx)(n.code,{children:"Current time"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"    //A linha abaixo atribuir a $vlSeconds o n\xfamero de segundos   \n    //que est\xe3o entre meia noite e uma hora a partir de agora\n$vlSeconds:=Current time+3600\n    //A linha abaixo atribui a $vHSoon a hora que ser\xe1 em uma hora de tempo\n$vhSoon:=Time(Current time+3600)\n"})}),"\n",(0,d.jsx)(n.p,{children:"A segunda linha pode ser escrita de forma mais simples:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"  //A linha abaixo atribui a $vHSoon a hora que ser\xe1 em uma hora\n $vhSoon:=Current time+?01:00:00?\n"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"O operador Modulo pode ser usado, mais concretamente, para somar tempos que considerem o formato de 24 horas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"$t1:=?23:00:00? // S\xe3o 23:00 p.m.\n  // S\xe3o 23:00 p.m.\n  // Queremos adicionar 2 horas e meia\n$t2:=$t1 +?02:30:00? // Com uma simples adi\xe7\xe3o, $t2 \xe9?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 \xe9 ?01:30:00? e \xe9 1:30 da manh\xe3. na manh\xe3 seguinte\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);