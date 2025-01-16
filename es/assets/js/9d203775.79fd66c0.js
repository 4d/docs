"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88368"],{395801:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/mod","title":"Mod","description":"Mod ( n\xfamero1 ; n\xfamero2 ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/mod.md","sourceDirName":"commands-legacy","slug":"/commands/mod","permalink":"/docs/es/20-R7/commands/mod","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmod.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mod","title":"Mod","slug":"/commands/mod","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log","permalink":"/docs/es/20-R7/commands/log"},"next":{"title":"Random","permalink":"/docs/es/20-R7/commands/random"}}'),r=s("785893"),o=s("250065");let l={id:"mod",title:"Mod",slug:"/commands/mod",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mod"})," ( ",(0,r.jsx)(n.em,{children:"n\xfamero1"})," ; ",(0,r.jsx)(n.em,{children:"n\xfamero2"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n\xfamero1"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero a dividir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n\xfamero2"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero divisor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Devuelve el resto de la divisi\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Mod devuelve el resto de la divisi\xf3n entera de ",(0,r.jsx)(n.em,{children:"n\xfamero1"})," entre ",(0,r.jsx)(n.em,{children:"n\xfamero2"}),".",(0,r.jsx)(n.br,{}),"\n\u2022 Mod acepta expresiones de tipo Entero, Entero largo y Reales. Sin embargo, si ",(0,r.jsx)(n.em,{children:"n\xfamero1"})," o ",(0,r.jsx)(n.em,{children:"n\xfamero2"})," son n\xfameros reales, los n\xfameros primeros son redondeados y luego se calcula Mod.",(0,r.jsx)(n.br,{}),"\n\u2022 Sea cuidadoso cuando utilice Mod con n\xfameros reales de gran tama\xf1o (sobre 2^31), ya que en este caso, su operaci\xf3n podr\xeda alcanzar los l\xedmites de las capacidades de c\xe1lculo de los procesadores est\xe1ndar."]}),"\n",(0,r.jsxs)(n.p,{children:["Igualmente puede utilizar el operador ",(0,r.jsx)(n.em,{children:"%"})," para calcular el resto (ver ",(0,r.jsx)(n.em,{children:"Operadores num\xe9ricos"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," el operador ",(0,r.jsx)(n.em,{children:"%"})," devuelve resultados v\xe1lidos con expresiones de tipo Entero y Entero largo. Para calcular el m\xf3dulo de valores reales, debe utilizar el comando Mod."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo ilustra el funcionamiento de Mod con diferentes argumentos. Cada l\xednea asigna un n\xfamero a la variable ",(0,r.jsx)(n.em,{children:"vlResult"}),". Los comentarios describen los resultados:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vlResult:=Mod(3;2)\xa0// vlResult vale 1\n\xa0vlResult:=Mod(4;2)\xa0// vlResult vale 0\n\xa0vlResult:=Mod(3.5;2)\xa0// vlResult vale 0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"98"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var d=s(667294);let r={},o=d.createContext(r);function l(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);