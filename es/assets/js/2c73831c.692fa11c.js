"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74357"],{904121:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"Concepts/time","title":"Hora","description":"- Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 0000 y 596,00000.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/dt_time.md","sourceDirName":"Concepts","slug":"/Concepts/time","permalink":"/docs/es/18/Concepts/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"time","title":"Hora"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/es/18/Concepts/string"},"next":{"title":"Variant","permalink":"/docs/es/18/Concepts/variant"}}'),d=r("785893"),t=r("250065");let i={id:"time",title:"Hora"},o=void 0,a={},l=[{value:"Constantes literales de tipo hora",id:"constantes-literales-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:3},{value:"Ejemplo 2",id:"ejemplo-2",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00."}),"\n",(0,d.jsx)(e.li,{children:"Las horas est\xe1n en formato de 24 horas."}),"\n",(0,d.jsx)(e.li,{children:"Un valor de tiempo puede ser tratado como un n\xfamero. El n\xfamero devuelto de una hora es el n\xfamero de segundos desde la medianoche (00:00:00) que representa esa hora."}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Nota:"})," en el manual de referencia del lenguaje 4D, los par\xe1metros de tipo Hora en las descripciones de los comandos se llaman Hora, excepto cuando se indique lo contrario."]}),"\n",(0,d.jsx)(e.h2,{id:"constantes-literales-de-tipo-hora",children:"Constantes literales de tipo hora"}),"\n",(0,d.jsx)(e.p,{children:"Una constante hora est\xe1 rodeada de signos de interrogaci\xf3n (?...?)."}),"\n",(0,d.jsx)(e.p,{children:"Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas."}),"\n",(0,d.jsx)(e.p,{children:"Estos son algunos ejemplos de constantes de tipo hora:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"?00:00:00? ?00:00:00? ?00:00:00? ` media noche\n?09:30:00? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ?00:00:00? ` media noche\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minuto, y 59 segundos ?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n"})}),"\n",(0,d.jsx)(e.p,{children:"Una hora nula se escribe ?00:00:00?"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Consejo:"})," el Editor de m\xe9todos incluye un acceso directo para introducir una hora nula. Para escribir una hora nula, introduzca el car\xe1cter de interrogante (?) y pulse Intro."]}),"\n",(0,d.jsx)(e.h2,{id:"operadores-de-horas",children:"Operadores de horas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Operaci\xf3n"}),(0,d.jsx)(e.th,{children:"Sintaxis"}),(0,d.jsx)(e.th,{children:"Devuelve"}),(0,d.jsx)(e.th,{children:"Expression"}),(0,d.jsx)(e.th,{children:"Valor"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Adici\xf3n"}),(0,d.jsx)(e.td,{children:"Hora + Hora"}),(0,d.jsx)(e.td,{children:"Hora"}),(0,d.jsx)(e.td,{children:"?02:03:04? ?02:03:04? + ?01:02:03?"}),(0,d.jsx)(e.td,{children:"?03:05:07?"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Resta"}),(0,d.jsx)(e.td,{children:"Hora \u2013 Hora"}),(0,d.jsx)(e.td,{children:"Hora"}),(0,d.jsx)(e.td,{children:"?02:03:04? \u2013 ?01:02:03?"}),(0,d.jsx)(e.td,{children:"?01:01:01?"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Adici\xf3n"}),(0,d.jsx)(e.td,{children:"Hora + N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? ?02:03:04? + 65"}),(0,d.jsx)(e.td,{children:"7449"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Resta"}),(0,d.jsx)(e.td,{children:"Hora \u2013 N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? \u2013 65"}),(0,d.jsx)(e.td,{children:"7319"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Multiplicaci\xf3n"}),(0,d.jsx)(e.td,{children:"Hora * N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? * 2"}),(0,d.jsx)(e.td,{children:"14768"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Divisi\xf3n"}),(0,d.jsx)(e.td,{children:"Hora / N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? ?02:03:04? / 2"}),(0,d.jsx)(e.td,{children:"3692"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Divisi\xf3n entera"}),(0,d.jsx)(e.td,{children:"Hora \\ N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? \\ 2"}),(0,d.jsx)(e.td,{children:"3692"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"M\xf3dulo"}),(0,d.jsx)(e.td,{children:"Hora % Hora"}),(0,d.jsx)(e.td,{children:"Hora"}),(0,d.jsx)(e.td,{children:"?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00?"}),(0,d.jsx)(e.td,{children:"?02:50:00?"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"M\xf3dulo"}),(0,d.jsx)(e.td,{children:"Hora % N\xfamero"}),(0,d.jsx)(e.td,{children:"Number"}),(0,d.jsx)(e.td,{children:"?02:03:04? ?02:03:04? % 2"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Igual"}),(0,d.jsx)(e.td,{children:"Hora = Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? = ?01:02:03?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? = ?01:02:04?"}),(0,d.jsx)(e.td,{children:"False"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Desigualdad"}),(0,d.jsx)(e.td,{children:"Hora # Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? # ?01:02:04?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? # ?01:02:03?"}),(0,d.jsx)(e.td,{children:"False"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mayor que"}),(0,d.jsx)(e.td,{children:"Hora > Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? # ?01:02:04? ?01:02:03? ?01:02:04? > ?01:02:03?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? ?01:02:04? > ?01:02:03?"}),(0,d.jsx)(e.td,{children:"False"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Menor que"}),(0,d.jsx)(e.td,{children:"Hora < Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? < ?01:02:04?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? < ?01:02:03?"}),(0,d.jsx)(e.td,{children:"False"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mayor o igual que"}),(0,d.jsx)(e.td,{children:"Hora >= Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? >=?01:02:03?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:04? > ?01:02:03?"}),(0,d.jsx)(e.td,{children:"False"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Menor o igual que"}),(0,d.jsx)(e.td,{children:"Hora <= Hora"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"?01:02:03? ?01:02:03? <=?01:02:03?"}),(0,d.jsx)(e.td,{children:"True"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"?01:02:03? # ?01:02:04? ?01:02:03? <=?01:02:03?"}),(0,d.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsxs)(e.p,{children:["Para obtener una expresi\xf3n de tipo hora a partir de una expresi\xf3n que combina una expresi\xf3n de hora con un n\xfamero, utilice los comandos ",(0,d.jsx)(e.code,{children:"Time"})," y ",(0,d.jsx)(e.code,{children:"Time string"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["Puede combinar expresiones de los tipos hora y n\xfamero utilizando las funciones ",(0,d.jsx)(e.code,{children:"Time"})," o ",(0,d.jsx)(e.code,{children:"Current time"}),":"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"    //La siguiente l\xednea asigna a $vlSeconds el n\xfamero de segundos   \n    //que transcurrir\xe1n entre la medianoche y una hora a partir de ahora\n$vlSeconds:=Current time+3600\n    //La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 dentro de una hora\n$vhSoon:=Time(Current time+3600)\n"})}),"\n",(0,d.jsx)(e.p,{children:"La segunda l\xednea podr\xeda escribirse de forma m\xe1s sencilla:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"  // La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 en una hora\n $vhSoon:=Current time+?01:00:00?\n"})}),"\n",(0,d.jsx)(e.h3,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(e.p,{children:"El operador Modulo puede utilizarse, m\xe1s concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"$t1:=?23:00:00? // Son las 23:00 p.m. // Son las 23:00 p.m.\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 a.m. the next morning // Con una simple adici\xf3n, $t2 es ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 es ?01:30:00? y es 1:30 a.m. a la ma\xf1ana siguiente\n"})})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);