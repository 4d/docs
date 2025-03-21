"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74186"],{949054:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/time","title":"Time","description":"Time ( valHora ) : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/time.md","sourceDirName":"commands-legacy","slug":"/commands/time","permalink":"/docs/es/commands/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftime.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"time","title":"Time","slug":"/commands/time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tickcount","permalink":"/docs/es/commands/tickcount"},"next":{"title":"Time string","permalink":"/docs/es/commands/time-string"}}'),i=s("785893"),d=s("250065");let t={id:"time",title:"Time",slug:"/commands/time",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Time"})," ( ",(0,i.jsx)(n.em,{children:"valHora"})," ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valHora"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor a devolver en forma de hora"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Hora especificada por horaCadena"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando Time devuelve una expresi\xf3n de tipo Hora equivalente a la hora especificada en el par\xe1metro ",(0,i.jsx)(n.em,{children:"valHora"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"valHora"})," debe contener:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["una cadena que contenga una hora expresada en uno de los siguientes formatos de hora est\xe1ndar de 4D correspondientes al lenguaje de su sistema (para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/string",children:"String"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"un entero largo que representa el n\xfamero de segundos transcurridos desde 00:00:00."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si la expresi\xf3n ",(0,i.jsx)(n.em,{children:"valHora"})," se eval\xfaa como indefinida, ",(0,i.jsx)(n.strong,{children:"Time"})," devuelve una hora vac\xeda (00:00:00). Esto es \xfatil cuando se espera que el resultado de una expresi\xf3n (por ejemplo, un atributo objeto) sea una hora, incluso si puede ser indefinida."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo muestra una caja de alerta con el mensaje \u201C1:00 P.M. = 13 horas 0 minutos\u201D:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Puede expresar todo valor num\xe9rico como una hora:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0vTime:=Time(10000)\n\xa0\xa0//vTime is 02:46:40\n\xa0vTime2:=Time((60*60)+(20*60)+5200)\n\xa0\xa0//vTime2 is 02:46:40\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/array-time",children:"ARRAY TIME"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/bool",children:"Bool"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/string",children:"String"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/time-string",children:"Time string"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/timestamp",children:"Timestamp"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"179"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let i={},d=r.createContext(i);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);