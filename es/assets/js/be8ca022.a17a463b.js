"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59612"],{232433:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/last-query-path","title":"Last query path","description":"Last query path ( formatDesc ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/last-query-path.md","sourceDirName":"commands-legacy","slug":"/commands/last-query-path","permalink":"/docs/es/commands/last-query-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-query-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"last-query-path","title":"Last query path","slug":"/commands/last-query-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get query limit","permalink":"/docs/es/commands/get-query-limit"},"next":{"title":"Last query plan","permalink":"/docs/es/commands/last-query-plan"}}'),r=s("785893"),d=s("250065");let a={id:"last-query-path",title:"Last query path",slug:"/commands/last-query-path",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last query path"})," ( ",(0,r.jsx)(n.em,{children:"formatDesc"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatDesc"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Formato de descripci\xf3n (Texto o XML)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de la ruta de la \xfaltima b\xfasqueda ejecutada"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Last query path devuelve la descripci\xf3n interna detallada de la ruta real de la \xfaltima b\xfasqueda efectuada en los datos. Para mayor informaci\xf3n sobre las descripciones de b\xfasquedas, consulte la documentaci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/describe-query-execution",title:"DESCRIBE QUERY EXECUTION",children:"DESCRIBE QUERY EXECUTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Esta descripci\xf3n se devuelve en formato Texto o XML dependiendo del valor pasado en el par\xe1metro ",(0,r.jsx)(n.em,{children:"formatDesc"}),". Puede pasar una de las siguientes constantes, ubicadas en el tema \u201CQueries\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in text format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in XML format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando devuelve un valor significativo si el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/describe-query-execution",title:"DESCRIBE QUERY EXECUTION",children:"DESCRIBE QUERY EXECUTION"})," ha sido ejecutado durante la sesi\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["La descripci\xf3n de la ruta de la \xfaltima b\xfasqueda puede compararse con la descripci\xf3n del plan de b\xfasqueda de la \xfaltima b\xfasqueda (obtenido utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/last-query-plan",title:"Last query plan",children:"Last query plan"}),") con prop\xf3sitos de optimizaci\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1045"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},d=t.createContext(r);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);