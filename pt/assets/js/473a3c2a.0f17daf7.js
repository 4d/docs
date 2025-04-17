"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59646"],{313616:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/time","title":"Time","description":"Time ( horaString ) : Time","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/time.md","sourceDirName":"commands-legacy","slug":"/commands/time","permalink":"/docs/pt/20-R8/commands/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftime.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"time","title":"Time","slug":"/commands/time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tickcount","permalink":"/docs/pt/20-R8/commands/tickcount"},"next":{"title":"Time string","permalink":"/docs/pt/20-R8/commands/time-string"}}'),i=s("785893"),t=s("250065");let d={id:"time",title:"Time",slug:"/commands/time",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Time"})," ( ",(0,i.jsx)(n.em,{children:"horaString"})," ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"horaText"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Hora para a qual devolver o n\xfamero de segundos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Hora especificada por horaString"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando ",(0,i.jsx)(n.strong,{children:"Time"})," retorna uma express\xe3o de tipo Hora equivalente \xe0 hora especificada como uma string por ",(0,i.jsx)(n.em,{children:"horaString"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["O par\xe2metro ",(0,i.jsx)(n.em,{children:"horaString"})," deve conter:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uma cadeia que contenha uma hora expressa em um dos seguintes formatos de hora padr\xe3o de 4D correspondentes \xe0 linguagem de seu sistema (para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/string",children:"String"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Um inteiro longo que representa o n\xfamero de segundos passados desde 00:00:00."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," se a express\xe3o ",(0,i.jsx)(n.em,{children:"valHora"})," se avaliar como indefinida, ",(0,i.jsx)(n.strong,{children:"Time"})," devolve uma hora vazia (00:00:00). Isso \xe9 \xfatil quando se espera que o resultado de uma express\xe3o (por exemplo, um atributo objeto) seja uma hora, mesmo se puder ser indefinida."]}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"O seguinte exemplo mostra uma caixa de alerta com a mensagem \u201C1:00 P.M. = 13 horas 0 minutos\u201D:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Pode expressar todo valor num\xe9rico como uma hora:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0vTime:=Time(10000)\n\xa0\xa0//vTime is 02:46:40\n\xa0vTime2:=Time((60*60)+(20*60)+5200)\n\xa0\xa0//vTime2 is 02:46:40\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/array-time",children:"ARRAY TIME"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/bool",children:"Bool"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/string",children:"String"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/time-string",children:"Time string"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R8/commands/timestamp",children:"Timestamp"})]}),"\n",(0,i.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"179"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);