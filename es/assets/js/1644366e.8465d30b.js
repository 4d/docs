"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34155"],{131432:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>x,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-text-value","title":"VP SET TEXT VALUE","description":"VP SET TEXT VALUE ( rangeObj Text { ; formatPattern : Text }  )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-text-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-text-value","permalink":"/docs/es/ViewPro/commands/vp-set-text-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-text-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-text-value","title":"VP SET TEXT VALUE"},"sidebar":"docs","previous":{"title":"VP SET TABLE THEME","permalink":"/docs/es/ViewPro/commands/vp-set-table-theme"},"next":{"title":"VP SET TIME VALUE","permalink":"/docs/es/ViewPro/commands/vp-set-time-value"}}'),s=t("785893"),i=t("250065");let d={id:"vp-set-text-value",title:"VP SET TEXT VALUE"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TEXT VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"textValue"})," : Text { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"textValue"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor texto a definir"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Formato del valor"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP SET TEXT VALUE"})," asigna un valor de texto especificado a un rango de celdas designado."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," o ",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"textValue"})," indica un valor texto que se asignar\xe1 a ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El ",(0,s.jsx)(n.em,{children:"formatPattern"})," opcional define un ",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"patr\xf3n"})," para el par\xe1metro ",(0,s.jsx)(n.em,{children:"textValue"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);