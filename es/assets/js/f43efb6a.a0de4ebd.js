"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51247"],{453307:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>a,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"Concepts/date","title":"Fecha","description":"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Concepts/dt_date.md","sourceDirName":"Concepts","slug":"/Concepts/date","permalink":"/docs/es/20/Concepts/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"date","title":"Fecha"},"sidebar":"docs","previous":{"title":"Collection","permalink":"/docs/es/20/Concepts/collection"},"next":{"title":"Null e indefinido","permalink":"/docs/es/20/Concepts/null-undefined"}}'),t=s("785893"),r=s("250065");let c={id:"date",title:"Fecha"},i=void 0,a={},l=[{value:"Constantes literales de tipo fecha",id:"constantes-literales-de-tipo-fecha",level:2},{value:"Operadores de fechas",id:"operadores-de-fechas",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767."}),"\n",(0,t.jsx)(n.p,{children:"Aunque el modo de representaci\xf3n de fechas por C_DATE permite trabajar con fechas hasta el a\xf1o 32 767, ciertas operaciones que pasan por el sistema imponen un l\xedmite inferior."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en el manual de Referencia del Lenguaje 4D, los par\xe1metros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario."]}),"\n",(0,t.jsx)(n.h2,{id:"constantes-literales-de-tipo-fecha",children:"Constantes literales de tipo fecha"}),"\n",(0,t.jsx)(n.p,{children:"Una constante literal de tipo fecha est\xe1 rodeada de signos de exclamaci\xf3n (!...!). Una fecha debe estar estructurada utilizando el formato ISO (!AAAA-MM-DD!). Estos son algunos ejemplos de constantes de fechas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n!2004-09-29!\n!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Una fecha nula es especificada por ",(0,t.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consejo:"})," el Editor de c\xf3digo incluye un acceso directo para introducir una fecha null. Para escribir una fecha nula, introduzca el car\xe1cter de exclamaci\xf3n (!) y pulse Intro."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Por razones de compatibilidad, 4D acepta entradas de fecha utilizando el formato del sistema con a\xf1os de dos d\xedgitos, como !12/04/98!. Se asume que un a\xf1o de dos d\xedgitos se encuentra en el siglo XX o en el XXI seg\xfan sea mayor o menor de 30, a menos que esta configuraci\xf3n por defecto se haya cambiado utilizando el comando ",(0,t.jsx)(n.code,{children:"SET DEFAULT CENTURY"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Si ha marcado la opci\xf3n "Utilizar la configuraci\xf3n regional del sistema" ( ver P\xe1gina M\xe9todos), debe utilizar el formato de fecha definido en su sistema. Generalmente, en un entorno estadounidense, las fechas se introducen en la forma mes/d\xeda/a\xf1o, con una barra "/" que separa los valores.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"operadores-de-fechas",children:"Operadores de fechas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operaci\xf3n"}),(0,t.jsx)(n.th,{children:"Sintaxis"}),(0,t.jsx)(n.th,{children:"Devuelve"}),(0,t.jsx)(n.th,{children:"Expression"}),(0,t.jsx)(n.th,{children:"Valor"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Diferencia"}),(0,t.jsx)(n.td,{children:"Fecha \u2013 Fecha"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,t.jsx)(n.td,{children:"19"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Adici\xf3n"}),(0,t.jsx)(n.td,{children:"Fecha + N\xfamero"}),(0,t.jsx)(n.td,{children:"Fecha"}),(0,t.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,t.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resta"}),(0,t.jsx)(n.td,{children:"Fecha - N\xfamero"}),(0,t.jsx)(n.td,{children:"Fecha"}),(0,t.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,t.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Igual"}),(0,t.jsx)(n.td,{children:"Fecha = Fecha"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! =!2017-01-01!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-01! =!2017-01-01!"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Desigualdad"}),(0,t.jsx)(n.td,{children:"Fecha # Fecha"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! # !2017-01-01!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! # !2017-01-20!"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mayor que"}),(0,t.jsx)(n.td,{children:"Fecha > Fecha"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! > !2017-01-01!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! > !2017-01-20!"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Menor que"}),(0,t.jsx)(n.td,{children:"Fecha < Fecha"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! < !2017-01-20!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mayor o igual que"}),(0,t.jsx)(n.td,{children:"Fecha >= Fecha"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! >=!2017-01-01!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Menor o igual que"}),(0,t.jsx)(n.td,{children:"Date <= Date"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! <= !2017-01-20!"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,t.jsx)(n.td,{children:"False"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var d=s(667294);let t={},r=d.createContext(t);function c(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);