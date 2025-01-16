"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26974"],{85824:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-date-value","title":"VP SET DATE VALUE","description":"VP SET DATE VALUE ( rangeObj Date { ; formatPattern : Text } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-date-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-date-value","permalink":"/docs/es/ViewPro/commands/vp-set-date-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-value.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-date-value","title":"VP SET DATE VALUE"},"sidebar":"docs","previous":{"title":"VP SET DATE TIME VALUE","permalink":"/docs/es/ViewPro/commands/vp-set-date-time-value"},"next":{"title":"VP SET DEFAULT STYLE","permalink":"/docs/es/ViewPro/commands/vp-set-default-style"}}'),d=r("785893"),a=r("250065");let s={id:"vp-set-date-value",title:"VP SET DATE VALUE"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"VP SET DATE VALUE"})," ( ",(0,d.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,d.jsx)(n.em,{children:"dateValue"})," : Date { ; ",(0,d.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metros"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rangeObj"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Objeto rango"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dateValue"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Valor date a definir"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"formatPattern"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Formato del valor"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.code,{children:"VP SET DATE VALUE"})," asigna un valor de fecha especificado a un rango de celdas designado."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"rangeObj"}),", pase un rango de la(s) celda(s) cuyo valor desea indicar. Si ",(0,d.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"dateValue"})," indica un valor de fecha que se asignar\xe1 a ",(0,d.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"formatPattern"})," define un modelo para el par\xe1metro ",(0,d.jsx)(n.em,{children:"dateValue"}),". Pase un formato personalizado o puede utilizar una de las siguientes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Configuraci\xf3n por defecto de US"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vk pattern long date"})}),(0,d.jsx)(n.td,{children:"Formato ISO 8601 para la fecha completa"}),(0,d.jsx)(n.td,{children:'"dddd, dd MMMM yyyy"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vk pattern month day"})}),(0,d.jsx)(n.td,{children:"Formato ISO 8601 para el mes y el d\xeda"}),(0,d.jsx)(n.td,{children:'"MMMM dd"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vk pattern short date"})}),(0,d.jsx)(n.td,{children:"Formato ISO 8601 corto para la fecha"}),(0,d.jsx)(n.td,{children:'"MM/dd/yyyy"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"vk pattern year month"})}),(0,d.jsx)(n.td,{children:"Formato ISO 8601 para el mes y el a\xf1o"}),(0,d.jsx)(n.td,{children:'"yyyy MMMM"'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Para obtener informaci\xf3n sobre los modelos y los caracteres de formato, consulte la secci\xf3n ",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#date-and-time-formats",children:"Formatos fecha y hora"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'//Definir el valor de la celda para la fecha actual\nVP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))\n \n//Definir el valor de la celda para una fecha espec\xedfica con un formato designado\nVP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")\nVP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"Formato de celda 4D View Pro"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var t=r(667294);let d={},a=t.createContext(d);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);