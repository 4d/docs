"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95072"],{65882:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/lowercase","title":"Lowercase","description":"Lowercase ( laCadena {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/lowercase.md","sourceDirName":"commands-legacy","slug":"/commands/lowercase","permalink":"/docs/es/commands/lowercase","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flowercase.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"lowercase","title":"Lowercase","slug":"/commands/lowercase","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Localized string","permalink":"/docs/es/commands/localized-string"},"next":{"title":"Match regex","permalink":"/docs/es/commands/match-regex"}}'),r=s("785893"),d=s("250065");let c={id:"lowercase",title:"Lowercase",slug:"/commands/lowercase",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Lowercase"})," ( ",(0,r.jsx)(n.em,{children:"laCadena"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadena a pasar a min\xfasculas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se pasa: conservar los acentos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Cadena en min\xfasculas"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Lowercase devuelve una cadena de caracteres igual a ",(0,r.jsx)(n.em,{children:"laCadena"})," con todos los caracteres alfab\xe9ticos convertidos en min\xfasculas."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", si se pasa, indica que los eventuales caracteres acentuados presentes en ",(0,r.jsx)(n.em,{children:"laCadena"})," deben devolverse como caracteres en min\xfasculas con acentos. Por defecto, cuando se omite este par\xe1metro, los caracteres acentuados \u201Cpierden\u201D sus acentos despu\xe9s de que se lleva a cabo la conversi\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:'El siguiente m\xe9todo de proyecto convierte a may\xfasculas el primer car\xe1cter de la cadena o del texto recibido como par\xe1metro. Por ejemplo, Nom:= Mayus ("juan") devuelve "Juan".'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto Mayus\n\xa0\xa0// Mayus( Cadena) -> Cadena\n\xa0\xa0// Mayus( Todo texto o cadena) -> texto con una letra en may\xfasculas\n\xa0\n\xa0$0:=Lowercase($1)\n\xa0If(Length($0)>0)\n\xa0\xa0\xa0\xa0$0[[1]]:=Uppercase($0[[1]])\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Este ejemplo compara los resultados obtenidos de acuerdo a si se pasa o no el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$lacadena:=Lowercase("D\xc9J\xc0 VU")\xa0// $lacadena es "deja vu"\n\xa0$lacadena:=Lowercase("D\xc9J\xc0 VU";*)\xa0// $lacadena es "d\xe9j\xe0 vu"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/uppercase",children:"Uppercase"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var a=s(667294);let r={},d=a.createContext(r);function c(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);