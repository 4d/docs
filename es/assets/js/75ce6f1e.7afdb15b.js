"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25205],{892368:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=r(474848),d=r(28453);const t={id:"time",title:"Hora"},i=void 0,o={id:"Concepts/time",title:"Hora",description:"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 0000 y 596,00000.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/es/20-R5/Concepts/time",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"time",title:"Hora"},sidebar:"docs",previous:{title:"Cadena",permalink:"/docs/es/20-R5/Concepts/string"},next:{title:"Variant",permalink:"/docs/es/20-R5/Concepts/variant"}},a={},l=[{value:"Constantes literales de tipo hora",id:"constantes-literales-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:3},{value:"Ejemplo 2",id:"ejemplo-2",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00."}),"\n",(0,s.jsx)(n.p,{children:"Las horas est\xe1n en formato de 24 horas."}),"\n",(0,s.jsx)(n.p,{children:"Un valor de tiempo puede ser tratado como un n\xfamero. El n\xfamero devuelto de una hora es el n\xfamero de segundos desde la medianoche (00:00:00) que representa esa hora."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," en el manual de ",(0,s.jsx)(n.em,{children:"referencia del lenguaje 4D"}),", los par\xe1metros de tipo Hora en las descripciones de los comandos se llaman Hora, excepto cuando se indique lo contrario."]}),"\n",(0,s.jsx)(n.h2,{id:"constantes-literales-de-tipo-hora",children:"Constantes literales de tipo hora"}),"\n",(0,s.jsx)(n.p,{children:"Una constante hora est\xe1 rodeada de signos de interrogaci\xf3n (?...?)."}),"\n",(0,s.jsx)(n.p,{children:"Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas."}),"\n",(0,s.jsx)(n.p,{children:"Estos son algunos ejemplos de constantes de tipo hora:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"?00:00:00? /medianoche\n?09:30:00? //9:30 am\n?13:01:59? //1 pm, 1 minuto y 59 segundos\n"})}),"\n",(0,s.jsx)(n.p,{children:"Una hora nula se escribe ?00:00:00?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Consejo:"})," el Editor de c\xf3digo incluye un acceso directo para introducir una hora null. Para escribir una hora nula, introduzca el car\xe1cter de interrogante (?) y presione Intro."]}),"\n",(0,s.jsx)(n.h2,{id:"operadores-de-horas",children:"Operadores de horas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operaci\xf3n"}),(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Devuelve"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adici\xf3n"}),(0,s.jsx)(n.td,{children:"Hora + Hora"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"?02:03:04? ?02:03:04? + ?01:02:03?"}),(0,s.jsx)(n.td,{children:"?03:05:07?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resta"}),(0,s.jsx)(n.td,{children:"Hora \u2013 Hora"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"?02:03:04? \u2013 ?01:02:03?"}),(0,s.jsx)(n.td,{children:"?01:01:01?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adici\xf3n"}),(0,s.jsx)(n.td,{children:"Hora + N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? ?02:03:04? + 65"}),(0,s.jsx)(n.td,{children:"7449"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resta"}),(0,s.jsx)(n.td,{children:"Hora \u2013 N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? \u2013 65"}),(0,s.jsx)(n.td,{children:"7319"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Multiplicaci\xf3n"}),(0,s.jsx)(n.td,{children:"Hora * N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? * 2"}),(0,s.jsx)(n.td,{children:"14768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Divisi\xf3n"}),(0,s.jsx)(n.td,{children:"Hora / N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? ?02:03:04? / 2"}),(0,s.jsx)(n.td,{children:"3692"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Divisi\xf3n entera"}),(0,s.jsx)(n.td,{children:"Hora \\ N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? \\ 2"}),(0,s.jsx)(n.td,{children:"3692"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"M\xf3dulo"}),(0,s.jsx)(n.td,{children:"Hora % Hora"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00?"}),(0,s.jsx)(n.td,{children:"?02:50:00?"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"M\xf3dulo"}),(0,s.jsx)(n.td,{children:"Hora % N\xfamero"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"?02:03:04? ?02:03:04? % 2"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Igual"}),(0,s.jsx)(n.td,{children:"Hora = Hora"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? ?01:02:03? = ?01:02:03?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? ?01:02:03? = ?01:02:04?"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Desigualdad"}),(0,s.jsx)(n.td,{children:"Hora # Hora"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? # ?01:02:04?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? # ?01:02:03?"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mayor que"}),(0,s.jsx)(n.td,{children:"Time > Time"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? # ?01:02:04? > ?01:02:03?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? > ?01:02:03?"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor que"}),(0,s.jsx)(n.td,{children:"Time < Time"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? < ?01:02:04?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? < ?01:02:03?"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mayor o igual que"}),(0,s.jsx)(n.td,{children:"Time >= Time"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? >=?01:02:03?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? >=?01:02:04?"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor o igual que"}),(0,s.jsx)(n.td,{children:"Time <= Time"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"?01:02:03? <=?01:02:03?"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"?01:02:03? # ?01:02:04? <=?01:02:03?"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Para obtener una expresi\xf3n de tipo hora a partir de una expresi\xf3n que combina una expresi\xf3n de hora con un n\xfamero, utilice los comandos ",(0,s.jsx)(n.code,{children:"Time"})," y ",(0,s.jsx)(n.code,{children:"Time string"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede combinar expresiones de los tipos hora y n\xfamero utilizando las funciones ",(0,s.jsx)(n.code,{children:"Time"})," o ",(0,s.jsx)(n.code,{children:"Current time"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//La siguiente l\xednea asigna a $vlSeconds el n\xfamero de segundos   \n\t//que transcurrir\xe1n entre la medianoche y una hora a partir de ahora\n$vlSeconds:=Current time+3600\n\t//La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 dentro de una hora\n$vhSoon:=Time(Current time+3600)\n"})}),"\n",(0,s.jsx)(n.p,{children:"La segunda l\xednea podr\xeda escribirse de forma m\xe1s sencilla:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"  // La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 en una hora\n $vhSoon:=Current time+?01:00:00?\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"El operador Modulo puede utilizarse, m\xe1s concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$t1:=?23:00:00? // Son las 23:00 horas\n  // Queremos sumar 2 horas y media\n$t2:=$t1 +?02:30:00? // Con una simple suma, $t2 es ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 es ?01:30:00? y es la 1:30 hora de la ma\xf1ana siguiente\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(296540);const d={},t=s.createContext(d);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);