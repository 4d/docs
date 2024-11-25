"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22319"],{955631:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-environment-variable","title":"SET ENVIRONMENT VARIABLE","description":"SET ENVIRONMENT VARIABLE ( nomVar ; valorVar )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-environment-variable.md","sourceDirName":"commands-legacy","slug":"/commands/set-environment-variable","permalink":"/docs/es/commands/set-environment-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-environment-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-environment-variable","title":"SET ENVIRONMENT VARIABLE","slug":"/commands/set-environment-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PROCESS 4D TAGS","permalink":"/docs/es/commands/process-4d-tags"},"next":{"title":"SET MACRO PARAMETER","permalink":"/docs/es/commands/set-macro-parameter"}}'),a=s("785893"),t=s("250065");let i={id:"set-environment-variable",title:"SET ENVIRONMENT VARIABLE",slug:"/commands/set-environment-variable",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET ENVIRONMENT VARIABLE"})," ( ",(0,a.jsx)(n.em,{children:"nomVar"})," ; ",(0,a.jsx)(n.em,{children:"valorVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomVar"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre de la variable a definir"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valorVar"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:'Valor de la variable o "" para restablecer el valor por defecto'})]})]})]}),"\n",(0,a.jsx)(n.admonition,{title:"Compatibilidad",type:"info",children:(0,a.jsxs)(n.p,{children:["Se recomienda utilizar la clase ",(0,a.jsx)(n.a,{href:"/docs/es/API/SystemWorkerClass",children:(0,a.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"SET ENVIRONMENT VARIABLE"})," permite fijar el valor de una variable de entorno bajo macOS y Windows. Est\xe1 dise\xf1ado para utilizarse con el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"}),". Tambi\xe9n funciona con el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/php-execute",children:"PHP Execute"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase el nombre de la variable a definir en ",(0,a.jsx)(n.em,{children:"nomVar"})," y su valor en ",(0,a.jsx)(n.em,{children:"valorVar"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para obtener la lista general de las variables de entorno y sus posibles valores, por favor consulte la documentaci\xf3n t\xe9cnica de su sistema operativo."}),"\n",(0,a.jsxs)(n.li,{children:["Tres variables entorno espec\xedficas est\xe1n disponibles para uso en el contexto del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"}),":",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"_4D_OPTION_CURRENT_DIRECTORY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"_4D_OPTION_HIDE_CONSOLE"})," (Windows \xfanicamente)",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"_4D_OPTION_BLOCKING_EXTERNAL_PROCESS"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Para informaci\xf3n sobre estas variables, consulte la documentaci\xf3n del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Consulte los ejemplos del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let a={},t=r.createContext(a);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);