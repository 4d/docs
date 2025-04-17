"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29187"],{626034:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-num-value","title":"VP SET NUM VALUE","description":"VP SET NUM VALUE ( rangeObj Number { ; formatPattern : Text } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-num-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-num-value","permalink":"/docs/es/20-R8/ViewPro/commands/vp-set-num-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-num-value.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-num-value","title":"VP SET NUM VALUE"},"sidebar":"docs","previous":{"title":"VP SET FROZEN PANES","permalink":"/docs/es/20-R8/ViewPro/commands/vp-set-frozen-panes"},"next":{"title":"VP SET PRINT INFO","permalink":"/docs/es/20-R8/ViewPro/commands/vp-set-print-info"}}'),t=r("785893"),i=r("250065");let l={id:"vp-set-num-value",title:"VP SET NUM VALUE"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET NUM VALUE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"numberValue"})," : Number { ; ",(0,t.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto rango"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numberValue"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Valor del n\xfamero a definir"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formatPattern"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Formato del valor"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET NUM VALUE"})," commandassigns a specified numeric value to a designated cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})})," o ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-column",children:(0,t.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,t.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"numberValue"})," especifica un valor num\xe9rico que se asignar\xe1 al ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El ",(0,t.jsx)(n.em,{children:"formatPattern"})," opcional define un ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/configuring#cell-format",children:"patr\xf3n"})," para el par\xe1metro ",(0,t.jsx)(n.em,{children:"numberValue"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Definir el valor de la celda en 2\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)\n \n/Definir el valor de la celda y formatear en d\xf3lares\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/configuring#cell-format",children:"Cell format"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);