"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74921"],{670935:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-get-modification-date","title":"METHOD GET MODIFICATION DATE","description":"METHOD GET MODIFICATION DATE ( ruta ; fechaMod ; horaMod {; operador} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-modification-date.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-modification-date","permalink":"/docs/es/commands/method-get-modification-date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-modification-date.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-modification-date","title":"METHOD GET MODIFICATION DATE","slug":"/commands/method-get-modification-date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET FOLDERS","permalink":"/docs/es/commands/method-get-folders"},"next":{"title":"METHOD GET NAMES","permalink":"/docs/es/commands/method-get-names"}}'),t=d("785893"),r=d("250065");let o={id:"method-get-modification-date",title:"METHOD GET MODIFICATION DATE",slug:"/commands/method-get-modification-date",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"METHOD GET MODIFICATION DATE"})," ( ",(0,t.jsx)(n.em,{children:"ruta"})," ; ",(0,t.jsx)(n.em,{children:"fechaMod"})," ; ",(0,t.jsx)(n.em,{children:"horaMod"})," {; ",(0,t.jsx)(n.em,{children:"operador"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ruta"}),(0,t.jsx)(n.td,{children:"Text, Text array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texto o array texto que contiene una o m\xe1s rutas de acceso"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fechaMod"}),(0,t.jsx)(n.td,{children:"Date, Date array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Fecha(s) de modificaci\xf3n de m\xe9todos(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horaMod"}),(0,t.jsx)(n.td,{children:"Time, Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Hora(s) de modificaci\xf3n de m\xe9todos(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"operador"}),(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"METHOD GET MODIFICATION DATE"})," devuelve en los par\xe1metros ",(0,t.jsx)(n.em,{children:"fechaMod"})," y ",(0,t.jsx)(n.em,{children:"horaMod"})," las fechas y horas de la \xfaltima modificaci\xf3n de los m\xe9todos designados por el par\xe1metro ",(0,t.jsx)(n.em,{children:"ruta"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Puede utilizar dos tipos de sintaxis, basadas en arrays o variables:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// variables\n\xa0var vDate : Date\n\xa0var vTime : Time\n\xa0METHOD GET MODIFICATION DATE(tVpath;vDate;vTime)\xa0// fecha y hora de un solo m\xe9todo\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays\n\xa0ARRAY DATE(arrDates;0)\n\xa0ARRAY LONGINT(arrTimes;0)\n\xa0METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)\xa0// fechas y horas de varios m\xe9todos\n"})}),"\n",(0,t.jsx)(n.p,{children:"No es posible combinar las dos sintaxis."}),"\n",(0,t.jsxs)(n.p,{children:["Si el comando se ejecuta desde un componente, se aplica por defecto a los m\xe9todos del componente. Si pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", accede a los m\xe9todos de la base local."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Quiere conocer las fechas y horas de modificaci\xf3n por varios m\xe9todos:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrPaths;0)\n\xa0APPEND TO ARRAY(arrPaths;"MyMethod1")\n\xa0APPEND TO ARRAY(arrPaths;"MyMethod2")\n\xa0...\n\xa0ARRAY DATE(arrDates;0)\n\xa0ARRAY LONGINT(arrTimes;0)\n\xa0METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:'Quiere obtener las fechas de modificaci\xf3n de los m\xe9todos de un m\xf3dulo con el prefijo "Web_". No se puede utilizar el s\xedmbolo "@" en una ruta; Sin embargo, puede escribir:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_webMethod;0)\n\xa0METHOD GET NAMES($_webMethod;"Web_@")\n\xa0ARRAY DATE($_date;0)\n\xa0ARRAY LONGINT($_time;0)\n\xa0METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1170"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return o}});var s=d(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);