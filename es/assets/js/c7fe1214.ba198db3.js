"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11607"],{663057:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-value","title":"VP SET VALUE","description":"VP SET VALUE ( rangeObj Object )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-value","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-value","title":"VP SET VALUE"},"sidebar":"docs","previous":{"title":"VP SET TIME VALUE","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-time-value"},"next":{"title":"VP SET VALUES","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-values"}}'),a=r("785893"),l=r("250065");let o={id:"vp-set-value",title:"VP SET VALUE"},d=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VP SET VALUE"})," ( ",(0,a.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,a.jsx)(n.em,{children:"valueObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metros"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rangeObj"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Objeto rango"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valueObj"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"->"}),(0,a.jsx)(n.td,{children:"Valores de la celda y opciones de formato"}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.code,{children:"VP SET VALUE"})," asigna un valor especificado a un rango de celdas designado."]}),"\n",(0,a.jsxs)(n.p,{children:["El comando permite utilizar un c\xf3digo gen\xe9rico para definir y formatear los tipos de valores en ",(0,a.jsx)(n.em,{children:"rangeObj"}),", mientras que otros comandos, como ",(0,a.jsx)(n.a,{href:"vp-set-text-value",children:(0,a.jsx)(n.code,{children:"VP SET TEXT VALUE"})})," y ",(0,a.jsx)(n.a,{href:"vp-set-num-value",children:(0,a.jsx)(n.code,{children:"VP SET NUM VALUE"})}),", reducen los valores a tipos espec\xedficos."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,a.jsx)(n.a,{href:"vp-cell",children:(0,a.jsx)(n.code,{children:"VP Cell"})})," o ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-column",children:(0,a.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,a.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"valueObj"})," es un objeto que incluye propiedades para el valor y el ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#cell-format",children:"formato"})," a asignar a ",(0,a.jsx)(n.em,{children:"rangeObj"}),". Puede contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedad"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"value"}),(0,a.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,a.jsxs)(n.td,{children:["Valor a asignar a ",(0,a.jsx)(n.em,{children:"rangeObj"})," (excepto- hora). Pase null para borrar el contenido de la celda."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"time"}),(0,a.jsx)(n.td,{children:"Real"}),(0,a.jsxs)(n.td,{children:["Valor hora (en segundos) a asignar a ",(0,a.jsx)(n.em,{children:"rangeObj"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"format"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsxs)(n.td,{children:["Patr\xf3n de propiedad valor/tiempo. Para obtener informaci\xf3n sobre patrones y caracteres de formato, consulte el p\xe1rrafo ",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#cell-format",children:"Formato de celda"}),"."]})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'//Define el valor de la celda como False\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))\n \n//Define el valor de la celda en 2\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))\n \n//Define el valor de la celda en $125,571.35\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35; "format";"_($* #,##0.00_)"))\n \n//Define el valor de la celda como \xa1Hola Mundo!\nVP SET VALUE(VP Celda("ViewProArea";3;2);New object("value"; "\xa1Hola Mundo!"))\n \n//Define el valor de la celda como fecha actual\nVP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))\n \n//Define el valor de la celda como hora actual\nVP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))\n \n//Define el valor de la celda como fecha y hora espec\xedficas\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!); "time";?14:30:10?; "format";vk pattern full date time))\n \n//Borrar el contenido de la celda\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-value",children:"VP Get values"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-boolean-value",children:"VP SET BOOLEAN VALUE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-field",children:"VP SET FIELD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-num-value",children:"VP SET NUM VALUE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-text-value",children:"VP SET TEXT VALUE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let a={},l=s.createContext(a);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);