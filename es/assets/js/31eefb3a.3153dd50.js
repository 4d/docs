"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87554"],{810121:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-pointer","title":"Get pointer","description":"Get pointer ( nomVar ) : Pointer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/get-pointer","permalink":"/docs/es/commands/get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pointer","title":"Get pointer","slug":"/commands/get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD","permalink":"/docs/es/commands/execute-method"},"next":{"title":"INVOKE ACTION","permalink":"/docs/es/commands/invoke-action"}}'),s=r("785893"),i=r("250065");let o={id:"get-pointer",title:"Get pointer",slug:"/commands/get-pointer",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get pointer"})," ( ",(0,s.jsx)(n.em,{children:"nomVar"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomVar"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de una variable proceso o interproceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Puntero hacia una variable proceso o interproceso"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Get pointer"})," devuelve un puntero hacia una variable proceso o interproceso cuyo nombre se pasa en ",(0,s.jsx)(n.em,{children:"nomVar"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Para obtener un puntero hacia un campo, utilice ",(0,s.jsx)(n.a,{href:"/docs/es/commands/field",children:"Field"}),". Para obtener un puntero hacia una tabla, utilice ",(0,s.jsx)(n.a,{href:"/docs/es/commands/table",children:"Table"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," puede pasar a ",(0,s.jsx)(n.strong,{children:"Get pointer"})," expresiones como por ejemplo, ",(0,s.jsx)(n.em,{children:'nomArray+"{3}"'}),", as\xed como tambi\xe9n elementos de array 2D (",(0,s.jsx)(n.em,{children:"nomArray"})," ",(0,s.jsx)(n.em,{children:'+"{3}{5}"'}),").",(0,s.jsx)(n.br,{}),"\nSin embargo, puede pasar elementos de variables (",(0,s.jsx)(n.em,{children:"nomArray"})," ",(0,s.jsx)(n.em,{children:'+"{myVar}"'}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"En un formulario, usted construye una matriz de 5 x 10 de variables editables llamadas v1, v2... v50. Para inicializar todas estas variables, usted escribe:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0For($vlVar;1;50)\n\xa0\xa0\xa0\xa0$vpVar:=Get pointer("v"+String($vlVar))\n\xa0\xa0\xa0\xa0$vpVar->:=""\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Utilizar punteros a elementos de arrays de dos dimensiones:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$pt:=Get pointer("a{1}{2}")\n\xa0\xa0//$pt=->a{1}{2}\n\xa0$pt2:=Get pointer("atCities"+"{2}{6}")\n\xa0\xa0//$pt2=->atCities{2}{6}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/table",children:"Table"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);