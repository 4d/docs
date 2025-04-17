"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50472"],{526488:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/insert-string","title":"Insert string","description":"Insert string ( fuente ; ainsertar ; posicion ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/insert-string.md","sourceDirName":"commands-legacy","slug":"/commands/insert-string","permalink":"/docs/es/commands/insert-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-string.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"insert-string","title":"Insert string","slug":"/commands/insert-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TEXT KEYWORDS","permalink":"/docs/es/commands/get-text-keywords"},"next":{"title":"Length","permalink":"/docs/es/commands/length"}}'),t=s("785893"),i=s("250065");let d={id:"insert-string",title:"Insert string",slug:"/commands/insert-string",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Insert string"})," ( ",(0,t.jsx)(n.em,{children:"fuente"})," ; ",(0,t.jsx)(n.em,{children:"ainsertar"})," ; ",(0,t.jsx)(n.em,{children:"posicion"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadena en la cual insertar otra cadena"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ainsertar"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadena a insertar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posicion"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posici\xf3n de la inserci\xf3n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cadena resultante"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Insert string inserta la cadena de caracteres alfanum\xe9ricos ",(0,t.jsx)(n.em,{children:"ainsertar"})," en la cadena ",(0,t.jsx)(n.em,{children:"fuente"})," a partir de ",(0,t.jsx)(n.em,{children:"posicion"})," y devuelve la cadena de caracteres resultante. La cadena ",(0,t.jsx)(n.em,{children:"ainsertar"})," se coloca antes del car\xe1cter designado por ",(0,t.jsx)(n.em,{children:"posicion"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"ainsertar"}),' es una cadena vac\xeda (""), Insert string devuelve ',(0,t.jsx)(n.em,{children:"fuente"})," sin cambios."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"posicion"})," es mayor a la longitud de ",(0,t.jsx)(n.em,{children:"fuente"}),", ",(0,t.jsx)(n.em,{children:"ainsertar"})," se a\xf1ade al final de ",(0,t.jsx)(n.em,{children:"fuente"}),". Si ",(0,t.jsx)(n.em,{children:"posicion"})," es inferior a uno (1), ",(0,t.jsx)(n.em,{children:"ainsertar"})," se inserta antes de ",(0,t.jsx)(n.em,{children:"fuente"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Insert string es diferente de ",(0,t.jsx)(n.a,{href:"/docs/es/commands/change-string",title:"Change string",children:"Change string"})," en que esta funci\xf3n inserta caracteres en lugar de reemplazarlos."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo ilustra el uso de Insert string. Los resultados se asignan a la variable ",(0,t.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Insert string("El verde";"\xe1rbol ";4)\xa0// vtResult obtiene "El \xe1rbol verde"\n\xa0vtResult:=Insert string("Tala";"b";3)\xa0// vtResult es igual a "Tabla"\n\xa0vtResult:=Insert string("Indenficaci\xf3n";"ti";6)\xa0// vtResult es igual a "Indentaci\xf3n"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/change-string",children:"Change string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/delete-string",children:"Delete string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/replace-string",children:"Replace string"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"231"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);