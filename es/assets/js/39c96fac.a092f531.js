"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83095],{285461:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var n=s(474848),t=s(28453);const d={id:"get-allowed-methods",title:"GET ALLOWED METHODS",slug:"/commands/get-allowed-methods",displayed_sidebar:"docs"},r=void 0,a={id:"commands-legacy/get-allowed-methods",title:"GET ALLOWED METHODS",description:"GET ALLOWED METHODS ( arrMetodos )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-allowed-methods.md",sourceDirName:"commands-legacy",slug:"/commands/get-allowed-methods",permalink:"/docs/es/commands/get-allowed-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-allowed-methods",title:"GET ALLOWED METHODS",slug:"/commands/get-allowed-methods",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Formula from string",permalink:"/docs/es/commands/formula-from-string"},next:{title:"Parse formula",permalink:"/docs/es/commands/parse-formula"}},l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"GET ALLOWED METHODS"})," ( ",(0,n.jsx)(o.em,{children:"arrMetodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe1metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"arrMetodos"}),(0,n.jsx)(o.td,{children:"Text array"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Array de nombres de m\xe9todos"})]})})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,n.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(o.p,{children:["El comando GET ALLOWED METHODS devuelve, en ",(0,n.jsx)(o.em,{children:"arrMetodos"}),", los nombres de los m\xe9todos que pueden utilizarse para escribir f\xf3rmulas. Estos m\xe9todos est\xe1n listados al final de la lista de comandos en el editor."]}),"\n",(0,n.jsxs)(o.p,{children:["Por defecto, los m\xe9todos no pueden ser utilizados en el editor de f\xf3rmulas. Los m\xe9todos deben ser autorizados expl\xedcitamente utilizando el comando ",(0,n.jsx)(o.a,{href:"/docs/es/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),". Si este comando no ha sido ejecutado, GET ALLOWED METHODS devuelve un array vac\xedo."]}),"\n",(0,n.jsxs)(o.p,{children:["GET ALLOWED METHODS devuelve exactamente lo que se le pas\xf3 a ",(0,n.jsx)(o.a,{href:"/docs/es/commands/set-allowed-methods",title:"SET ALLOWED METHODS",children:"SET ALLOWED METHODS"}),", es decir un array alfa (el comando crea y dimensiona el array). Igualmente, si el car\xe1cter arroba (@) se utiliza para definir un grupo de m\xe9todos, se devuelve la cadena que contiene el car\xe1cter @ (y no los nombres de los m\xe9todos del grupo)."]}),"\n",(0,n.jsx)(o.p,{children:"Este comando es \xfatil para conservar los par\xe1metros del conjunto actual de m\xe9todos autorizados antes de la ejecuci\xf3n de una f\xf3rmula en un contexto espec\xedfico (por ejemplo, un informe r\xe1pido)."}),"\n",(0,n.jsx)(o.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(o.p,{children:"Este ejemplo autoriza un conjunto de m\xe9todos espec\xedficos para crear un informe:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//Almacenamiento de los par\xe1metros actuales\n\xa0GET ALLOWED METHODS(metodosArray)\n\xa0\n\xa0\xa0//Definici\xf3n de los m\xe9todos para el informe r\xe1pido\n\xa0arrMetodos_Reports{1}:="Reports_@"\n\xa0SET ALLOWED METHODS(arrMetodos_Reports)\n\xa0QR REPORT([Personas];"MiInforme")\n\xa0\n\xa0\xa0//Reestablecimiento de los par\xe1metros actuales\n\xa0SET ALLOWED METHODS(arrMetodos)\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/es/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>a});var n=s(296540);const t={},d=n.createContext(t);function r(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);