"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53088"],{423924:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/timestamp","title":"Timestamp","description":"Timestamp : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/timestamp.md","sourceDirName":"commands-legacy","slug":"/commands/timestamp","permalink":"/docs/es/commands/timestamp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftimestamp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"timestamp","title":"Timestamp","slug":"/commands/timestamp","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Time string","permalink":"/docs/es/commands/time-string"},"next":{"title":"Year of","permalink":"/docs/es/commands/year-of"}}'),i=s("785893"),r=s("250065");let a={id:"timestamp",title:"Timestamp",slug:"/commands/timestamp",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Timestamp"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Hora actual devuelta utilizando el formato ISO con milisegundos"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Timestamp"}),' devuelve la hora UTC actual en formato ISO con milisegundos, es decir, aaaa-MM-ddTHH:mm:ss.SSSZ. Tenga en cuenta que el car\xe1cter "Z" indica la zona horaria GMT.']}),"\n",(0,i.jsxs)(n.p,{children:["Cada hora devuelta por ",(0,i.jsx)(n.strong,{children:"Timestamp"})," se expresa de acuerdo con la norma ISO 8601. Para m\xe1s informaci\xf3n sobre este est\xe1ndar, consulte: ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO%5F8601",children:"https://en.wikipedia.org/wiki/ISO%5F8601"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," esta funci\xf3n no es adecuada para tiempos; Debe utilizar ",(0,i.jsx)(n.a,{href:"/docs/es/commands/milliseconds",children:"Milliseconds"})," cuando desee medir el tiempo transcurrido."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["Puede utilizar ",(0,i.jsx)(n.strong,{children:"Timestamp"})," en un archivo de historial para saber con precisi\xf3n donde ocurrieron los eventos. Como se muestra a continuaci\xf3n, es posible que se produzcan varias operaciones durante el mismo segundo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef:=Append document("TimestampProject.log")\n\xa0$logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)\n\xa0SEND PACKET($vhDocRef;String($logWithTimestamp))\n'})}),"\n",(0,i.jsx)(n.p,{children:"Resultado:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-RAW",children:"2016-12-12T13:31:29.477Z\xa0\xa0 Log with timestamp2016-12-12T13:31:29.478Z\xa0\xa0 Connection of user12016-12-12T13:31:29.486Z\xa0\xa0 ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z\xa0\xa0 Click on button16842016-12-12T13:31:29.502Z\xa0\xa0 [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z\xa0\xa0 [SP_HELP- 5 rows] Result set fetched\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/milliseconds",children:"Milliseconds"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/string",children:"String"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/time",children:"Time"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1445"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);