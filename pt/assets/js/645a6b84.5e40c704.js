"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35766"],{644206:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/day-number","title":"Day number","description":"Day number ( data ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/day-number.md","sourceDirName":"commands-legacy","slug":"/commands/day-number","permalink":"/docs/pt/commands/day-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fday-number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"day-number","title":"Day number","slug":"/commands/day-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/pt/commands/date"},"next":{"title":"Day of","permalink":"/docs/pt/commands/day-of"}}'),t=d("785893"),s=d("250065");let a={id:"day-number",title:"Day number",slug:"/commands/day-number",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Day number"})," ( ",(0,t.jsx)(e.em,{children:"data"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe2metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"data"}),(0,t.jsx)(e.td,{children:"Date"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Data para a qual devolver o n\xfamero do dia"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Resultado"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"N\xfamero que representa o dia da semana que corresponde a data"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(e.p,{children:["O comando Day number retorna um n\xfamero que representa o dia da semana que corresponde a ",(0,t.jsx)(e.em,{children:"data"}),".Day Number retorna ",(0,t.jsx)(e.em,{children:"2"})," para datas nulas."]}),"\n",(0,t.jsx)(e.p,{children:"4D oferece as seguintes constantes pr\xe9-definidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constante"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{children:"Valor"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sunday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Monday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Tuesday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Wednesday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thursday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Friday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"6"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Saturday"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"7"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Nota:"})," Day number retorna um valor entre 1 e 7. Para obter o n\xfamero de dia no m\xeas para uma data, utilize o comando ",(0,t.jsx)(e.a,{href:"/docs/pt/commands/day-of",title:"Day of",children:"Day of"}),"."]}),"\n",(0,t.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(e.p,{children:"O seguinte exemplo \xe9 uma fun\xe7\xe3o que retorna o dia atual como uma string:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0$viDia :=Day number(Current date)\xa0// $viDia toma o valor do n\xfamero do dia atual\n\xa0Case of\n\xa0\xa0\xa0\xa0:($viDia =1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Domingo"\n\xa0\xa0\xa0\xa0:($viDia =2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Lunes"\n\xa0\xa0\xa0\xa0:($viDia =3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Martes"\n\xa0\xa0\xa0\xa0:($viDia =4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Mi\xe9rcoles"\n\xa0\xa0\xa0\xa0:($viDia =5)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Jueves"\n\xa0\xa0\xa0\xa0:($viDia =6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Viernes"\n\xa0\xa0\xa0\xa0:($viDia =7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="S\xe1bado"\n\xa0End case\n'})}),"\n",(0,t.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/pt/commands/day-of",children:"Day of"})}),"\n",(0,t.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero do comando"}),(0,t.jsx)(e.td,{children:"114"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread-seguro"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return i},a:function(){return a}});var r=d(667294);let t={},s=r.createContext(t);function a(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);