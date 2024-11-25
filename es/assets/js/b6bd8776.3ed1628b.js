"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91867"],{705971:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>t});var r=JSON.parse('{"id":"commands/process-number","title":"Process number","description":"Process number ( name {; } ) Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/process-number.md","sourceDirName":"commands","slug":"/commands/process-number","permalink":"/docs/es/commands/process-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-number","title":"Process number","slug":"/commands/process-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process info","permalink":"/docs/es/commands/process-info"},"next":{"title":"Process state","permalink":"/docs/es/commands/process-state"}}'),d=s("785893"),o=s("250065");let t={id:"process-number",title:"Process number",slug:"/commands/process-number",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Process number"})," ( ",(0,d.jsx)(n.em,{children:"name"})," {; *} ) : Integer",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Process number"})," ( ",(0,d.jsx)(n.em,{children:"id"})," {; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metros"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre del proceso del que se desea obtener el n\xfamero de proceso"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"id"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"ID del proceso del que se desea obtener el n\xfamero de proceso"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Devuelve el n\xfamero de proceso del servidor"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Longint"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Process number"})]})]})]}),"\n",(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Lanzamiento"}),(0,d.jsx)(n.th,{children:"Modificaciones"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20 R7"}),(0,d.jsx)(n.td,{children:"Soporte del par\xe1metro id"})]})})]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Process number"})," returns the number of the process whose ",(0,d.jsx)(n.em,{children:"name"})," or ",(0,d.jsx)(n.em,{children:"id"})," you pass in the first parameter",(0,d.jsx)(n.code,{children:"Process number"})," devuelve el n\xfamero del proceso cuyo ",(0,d.jsx)(n.em,{children:"name"})," o ",(0,d.jsx)(n.em,{children:"id"})," pasa en el primer par\xe1metro. Si no se encuentra ning\xfan proceso, ",(0,d.jsx)(n.code,{children:"Process number"})," devuelve 0."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional * permite recuperar, de un 4D remoto, el n\xfamero de un proceso que se ejecuta en el servidor. En este caso, el valor devuelto es negativo. Esta opci\xf3n es especialmente \xfatil cuando se utilizan los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ejecuta con el par\xe1metro * desde un proceso en la m\xe1quina servidor, el valor devuelto es positivo."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/process-state",children:"Process state"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var r=s(667294);let d={},o=r.createContext(d);function t(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);