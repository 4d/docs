"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78816"],{122910:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/round","title":"Round","description":"Round ( redond ; decimales ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/round.md","sourceDirName":"commands-legacy","slug":"/commands/round","permalink":"/docs/es/commands/round","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fround.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"round","title":"Round","slug":"/commands/round","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Random","permalink":"/docs/es/commands/random"},"next":{"title":"SET REAL COMPARISON LEVEL","permalink":"/docs/es/commands/set-real-comparison-level"}}'),r=d("785893"),l=d("250065");let i={id:"round",title:"Round",slug:"/commands/round",displayed_sidebar:"docs"},o=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Round"})," ( ",(0,r.jsx)(n.em,{children:"redond"})," ; ",(0,r.jsx)(n.em,{children:"decimales"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redond"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero a redondear"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decimales"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de lugares decimales a redondear"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero redondeado para el n\xfamero de lugares decimales especificado por decimales"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Round devuelve ",(0,r.jsx)(n.em,{children:"n\xfamero"})," redondeado al n\xfamero de decimales especificado por ",(0,r.jsx)(n.em,{children:"decimales"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"decimales e"}),"s positivo, se redondea la parte decimal de ",(0,r.jsx)(n.em,{children:"n\xfamero"}),". Si ",(0,r.jsx)(n.em,{children:"decimales"})," es negativo, se redondea la parte entera de ",(0,r.jsx)(n.em,{children:"n\xfamero"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la cifra despu\xe9s del n\xfamero de decimales definido por ",(0,r.jsx)(n.em,{children:"decimales e"}),"st\xe1 entre 5 y 9, ",(0,r.jsx)(n.em,{children:"redond"})," redondea al valor superior si el n\xfamero es positivo, y hacia el valor inferior si el n\xfamero es negativo. Si el digito despu\xe9s de ",(0,r.jsx)(n.em,{children:"decimales"})," est\xe1 entre 0 y 4, Round redondea hacia cero."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo ilustra c\xf3mo Redondeo funciona con diferentes argumentos. Cada l\xednea asigna un n\xfamero a la variable ",(0,r.jsx)(n.em,{children:"vlResult"}),". Los comentarios describen los resultados:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vlResult:=Round(16.857;2)\xa0// vlResult vale 16.86\n\xa0vlResult:=Round(32345.67;-3)\xa0// vlResult vale 32000\n\xa0vlResult:=Round(29.8725;3)\xa0// vlResult vale 29.873\n\xa0vlResult:=Round(-1.5;0)\xa0// vlResult vale \u20132\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/trunc",children:"Trunc"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"94"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return i}});var s=d(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);