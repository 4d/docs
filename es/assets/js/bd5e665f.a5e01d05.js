"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25741"],{547889:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/milliseconds","title":"Milliseconds","description":"Milliseconds  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/milliseconds.md","sourceDirName":"commands-legacy","slug":"/commands/milliseconds","permalink":"/docs/es/commands/milliseconds","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmilliseconds.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"milliseconds","title":"Milliseconds","slug":"/commands/milliseconds","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Day of","permalink":"/docs/es/commands/day-of"},"next":{"title":"Month of","permalink":"/docs/es/commands/month-of"}}'),d=s("785893"),o=s("250065");let r={id:"milliseconds",title:"Milliseconds",slug:"/commands/milliseconds",displayed_sidebar:"docs"},t=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Milliseconds"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero de milisegundos transcurridos desde que se inici\xf3 el equipo"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"Milliseconds  devuelve el n\xfamero de milisegundos ( 1milisegundo = 1 mil\xe9sima de un segundo) pasados desde que se inici\xf3 el equipo."}),"\n",(0,d.jsx)(n.p,{children:"El valor devuelto es un entero largo firmado, hasta 2^31 (alrededor de 2 mil millones de milisegundos o 24 d\xedas). Cuando la m\xe1quina ha estado funcionando durante m\xe1s de 24 d\xedas, el n\xfamero se vuelve negativo."}),"\n",(0,d.jsx)(n.p,{children:"El prop\xf3sito del comando es medir cortos per\xedodos de tiempo con una alta precisi\xf3n. Un rango de 24 d\xedas es m\xe1s que suficiente para las comparaciones, pero debe tener cuidado. Al comparar valores, siempre trabaje con la diferencia entre dos valores. Nunca compare los valores directamente, ya que uno podr\xeda ser negativo y el otro positivo."}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente c\xf3digo espera hasta 5 segundos para que un registro bloqueado se desbloquee o finalice:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Locked([Table_1]))\n\xa0\xa0\xa0\xa0$starttime:=Milliseconds\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;15)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LOAD RECORD([Table_1])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$waittime:=Milliseconds-$starttime\n\xa0\xa0\xa0\xa0Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000))\xa0//espera 5 segundos m\xe1ximo\n\xa0End if\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," siempre compare la diferencia entre dos llamadas de ",(0,d.jsx)(n.strong,{children:"Milliseconds"})," como se muestra arriba, nunca compare directamente, por ejemplo:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0(Milliseconds>($starttime+5000))\xa0//nunca lo haga as\xed, ya que uno podr\xeda ser positivo, uno negativo\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/current-time",children:"Current time"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/tickcount",children:"Tickcount"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/timestamp",children:"Timestamp"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"459"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return r}});var i=s(667294);let d={},o=i.createContext(d);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);