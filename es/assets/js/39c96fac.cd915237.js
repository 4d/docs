"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84536"],{452055:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>i,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/get-allowed-methods","title":"GET ALLOWED METHODS","description":"GET ALLOWED METHODS ( arrMetodos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-allowed-methods.md","sourceDirName":"commands-legacy","slug":"/commands/get-allowed-methods","permalink":"/docs/es/20-R7/commands/get-allowed-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-allowed-methods","title":"GET ALLOWED METHODS","slug":"/commands/get-allowed-methods","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formula from string","permalink":"/docs/es/20-R7/commands/formula-from-string"},"next":{"title":"Parse formula","permalink":"/docs/es/20-R7/commands/parse-formula"}}'),d=s("785893"),t=s("250065");let r={id:"get-allowed-methods",title:"GET ALLOWED METHODS",slug:"/commands/get-allowed-methods",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET ALLOWED METHODS"})," ( ",(0,d.jsx)(n.em,{children:"arrMetodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"arrMetodos"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Array de nombres de m\xe9todos"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando GET ALLOWED METHODS devuelve, en ",(0,d.jsx)(n.em,{children:"arrMetodos"}),", los nombres de los m\xe9todos que pueden utilizarse para escribir f\xf3rmulas. Estos m\xe9todos est\xe1n listados al final de la lista de comandos en el editor."]}),"\n",(0,d.jsxs)(n.p,{children:["Por defecto, los m\xe9todos no pueden ser utilizados en el editor de f\xf3rmulas. Los m\xe9todos deben ser autorizados expl\xedcitamente utilizando el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),". Si este comando no ha sido ejecutado, GET ALLOWED METHODS devuelve un array vac\xedo."]}),"\n",(0,d.jsxs)(n.p,{children:["GET ALLOWED METHODS devuelve exactamente lo que se le pas\xf3 a ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),", es decir un array alfa (el comando crea y dimensiona el array). Igualmente, si el car\xe1cter arroba (@) se utiliza para definir un grupo de m\xe9todos, se devuelve la cadena que contiene el car\xe1cter @ (y no los nombres de los m\xe9todos del grupo)."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando es \xfatil para conservar los par\xe1metros del conjunto actual de m\xe9todos autorizados antes de la ejecuci\xf3n de una f\xf3rmula en un contexto espec\xedfico (por ejemplo, un informe r\xe1pido)."}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Este ejemplo autoriza un conjunto de m\xe9todos espec\xedficos para crear un informe:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Almacenamiento de los par\xe1metros actuales\n\xa0GET ALLOWED METHODS(metodosArray)\n\xa0\n\xa0\xa0//Definici\xf3n de los m\xe9todos para el informe r\xe1pido\n\xa0arrMetodos_Reports{1}:="Reports_@"\n\xa0SET ALLOWED METHODS(arrMetodos_Reports)\n\xa0QR REPORT([Personas];"MiInforme")\n\xa0\n\xa0\xa0//Reestablecimiento de los par\xe1metros actuales\n\xa0SET ALLOWED METHODS(arrMetodos)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"908"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var o=s(667294);let d={},t=o.createContext(d);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);