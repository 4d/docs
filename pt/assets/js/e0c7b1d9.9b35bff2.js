"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80509"],{107762:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/current-date","title":"Current date","description":"Current date {( * )} : Date","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/current-date.md","sourceDirName":"commands-legacy","slug":"/commands/current-date","permalink":"/docs/pt/commands/current-date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-date","title":"Current date","slug":"/commands/current-date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Add to date","permalink":"/docs/pt/commands/add-to-date"},"next":{"title":"Current time","permalink":"/docs/pt/commands/current-time"}}'),t=s("785893"),r=s("250065");let o={id:"current-date",title:"Current date",slug:"/commands/current-date",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Current date"})," {( * )} : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Devolve a data atual do servidor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Data atual"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando Current date retorna a data atual tal como est\xe1 definida no rel\xf3gio do sistema.se passado o par\xe2metro asterisco (*) durante a execu\xe7\xe3o desta fun\xe7\xe3o em um equipo cliente 4D Client, a fun\xe7\xe3o devolve a data atual do servidor."}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"O seguinte exemplo mostra uma caixa de di\xe1logo de alerta com a data atual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("The date is "+String(Current date)+".")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Se desenvolve uma aplica\xe7\xe3o para o mercado internacional, necessita saber se a vers\xe3o de 4D com a qual \xe9 executada sua aplica\xe7\xe3o funciona com as datas de formato MM/DD/YYYY (vers\xe3o US) ou DD/MM/YYYY (vers\xe3o francesa). Esta informa\xe7\xe3o \xe9 \xfatil para personalizar corretamente as \xe1reas de entrada."}),"\n",(0,t.jsx)(n.p,{children:"O seguinte m\xe9todo de projeto permite fazer isso:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Fun\xe7\xe3o global Sys date format\n\xa0\xa0// Sys date format -> String\n\xa0\xa0// Sys date format -> Formato de dados 4D por padr\xe3o\n\xa0\n\xa0C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)\n\xa0var $1;$vlPos : Integer\n\xa0var $vdDate : Date\n\xa0\n\xa0\xa0//Obter uma data na qual os valores de m\xeas, dia e ano sejam todos diferentes\n\xa0$vdDate:=Current date\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vsMonth:=String(Month of($vdDate))\n\xa0\xa0\xa0\xa0$vsDay:=String(Day of($vdDate))\n\xa0\xa0\xa0\xa0$vsYear:=String(Year of($vdDate)%100)\n\xa0\xa0\xa0\xa0If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vOK:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdDate:=$vdDate+1\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vOK:=1\n\xa0\xa0\xa0\xa0End if\n\xa0Until(vOK=1)\n\xa0$0:=""\xa0// Inicializa\xe7\xe3o do resultado da fun\xe7\xe3o\n\xa0$vsDate:=String($vdDate)\n\xa0$vlPos:=Position("/";$vsDate)\xa0// Procurar o primeiro separador / na string ../../..\n\xa0$vsMDY:=Substring($vsDate;1;$vlPos-1)\xa0// Extrair os primeiros d\xedgitos da data\n\xa0$vsDate:=Substring($vsDate;$vlPos+1)\xa0// Eliminar os primeiros d\xedgitos e o primeiro separador /\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsMDY=$vsMonth)\xa0// Os d\xedgitos expressam o m\xeas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="MM"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsDay)\xa0//Os d\xedgitos expressam o dia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="DD"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsYear)\xa0//Os d\xedgitos expressam o ano\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="YYYY"\n\xa0End case\n\xa0$0:=$0+"/"\xa0//Iniciar a constru\xe7\xe3o do resultado da fun\xe7\xe3o\n\xa0$vlPos:=Position("/";$vsDate)\xa0// Procurar o segundo separador na string ../..\n\xa0$vsMDY:=Substring($vsDate;1;$vlPos-1)\xa0// Extrair os seguintes d\xedgitos da data\n\xa0$vsDate:=Substring($vsDate;$vlPos+1)\xa0// Reduzir a string aos \xfaltimos d\xedgitos da data\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsMDY=$vsMonth)\xa0// Os d\xedgitos expressam o m\xeas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"MM"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsDay)\xa0// Os d\xedgitos expressam o dia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"DD"\n\xa0\xa0\xa0\xa0:($vsMDY=$vsYear)\xa0// Os d\xedgitos expressam o ano\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"YYYY"\n\xa0End case\n\xa0$0:=$0+"/"\xa0//Iniciar a constru\xe7\xe3o do resultado da fun\xe7\xe3o\n\xa0Case of\n\xa0\xa0\xa0\xa0:($vsDate=$vsMonth)\xa0// Os d\xedgitos expressam o m\xeas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"MM"\n\xa0\xa0\xa0\xa0:($vsDate=$vsDay)\xa0// Os d\xedgitos expressam o dia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"DD"\n\xa0\xa0\xa0\xa0:($vsDate=$vsYear)\xa0// Os d\xedgitos expressam o ano\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+"YYYY"\n\xa0End case\n\xa0\xa0//Neste momento $0 \xe9 igual a MM/DD/YYYY ou DD/MM/YYYY ou...\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/day-of",children:"Day of"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/month-of",children:"Month of"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/year-of",children:"Year of"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"33"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var a=s(667294);let t={},r=a.createContext(t);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);