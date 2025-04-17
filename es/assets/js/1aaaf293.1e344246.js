"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52583"],{735365:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/change-string","title":"Change string","description":"Change string ( fuente ; nuevo ; posicion ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/change-string.md","sourceDirName":"commands-legacy","slug":"/commands/change-string","permalink":"/docs/es/20-R8/commands/change-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-string.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"change-string","title":"Change string","slug":"/commands/change-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/es/20-R8/commands/theme/String"},"next":{"title":"Char","permalink":"/docs/es/20-R8/commands/char"}}'),t=s("785893"),i=s("250065");let d={id:"change-string",title:"Change string",slug:"/commands/change-string",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Change string"})," ( ",(0,t.jsx)(n.em,{children:"fuente"})," ; ",(0,t.jsx)(n.em,{children:"nuevo"})," ; ",(0,t.jsx)(n.em,{children:"posicion"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadena original"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nuevo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nuevos caracteres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posicion"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posici\xf3n donde comenzar los cambios"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cadena resultante"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Change string devuelve una cadena resultante de cambiar los caracteres, en la cadena ",(0,t.jsx)(n.em,{children:"fuente"}),", a partir de ",(0,t.jsx)(n.em,{children:"posicion"})," con los caracteres en ",(0,t.jsx)(n.em,{children:"nuevo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"nuevo"}),' es una cadena vac\xeda (""), Change string devuelve ',(0,t.jsx)(n.em,{children:"fuente"})," sin cambios. Change string siempre devuelve una cadena de la misma longitud que ",(0,t.jsx)(n.em,{children:"fuente"}),". Si ",(0,t.jsx)(n.em,{children:"posicion"})," es inferior o superior a la longitud de ",(0,t.jsx)(n.em,{children:"fuente"}),", Change string devuelve ",(0,t.jsx)(n.em,{children:"fuente"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Change string se diferencia de ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/insert-string",title:"Insert string",children:"Insert string"})," en que reemplaza los caracteres en lugar de insertarlos."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo ilustra el uso de Change string. Los resultados se asignan a la variable ",(0,t.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Change string("Acme";"CME";2)\xa0// vtResult es igual a "ACME"\n\xa0vtResult:=Change string("noviembre";"dic";1)\xa0// vtResult es igual a "diciembre"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/delete-string",children:"Delete string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/insert-string",children:"Insert string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/replace-string",children:"Replace string"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"234"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);