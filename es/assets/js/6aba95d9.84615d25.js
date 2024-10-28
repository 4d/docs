"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51940],{157851:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(474848),r=s(28453);const i={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/load-variables",title:"LOAD VARIABLES",description:"LOAD VARIABLES ( doc ; variable {; variable2 ; ... ; variableN} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-variables.md",sourceDirName:"commands-legacy",slug:"/commands/load-variables",permalink:"/docs/es/commands/load-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CLEAR VARIABLE",permalink:"/docs/es/commands/clear-variable"},next:{title:"SAVE VARIABLES",permalink:"/docs/es/commands/save-variables"}},o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"LOAD VARIABLES"})," ( ",(0,n.jsx)(a.em,{children:"doc"})," ; ",(0,n.jsx)(a.em,{children:"variable"})," {; ",(0,n.jsx)(a.em,{children:"variable2"})," ; ... ; ",(0,n.jsx)(a.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe1metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"doc"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Documento que contiene el o las variables 4D"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"variable"}),(0,n.jsx)(a.td,{children:"Variable"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"Variables a recibir los valores"})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:["El comando LOAD VARIABLES carga una o varias variables del documento especificado por ",(0,n.jsx)(a.em,{children:"documento"}),". El documento debe haberse creado utilizando el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/save-variables",title:"SAVE VARIABLES",children:"SAVE VARIABLES"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Las variables ",(0,n.jsx)(a.em,{children:"variable"}),", ",(0,n.jsx)(a.em,{children:"variable2"}),"...",(0,n.jsx)(a.em,{children:"variableN"})," son creadas; si ya existen, se sobrescriben."]}),"\n",(0,n.jsxs)(a.p,{children:["Si pasa una cadena vac\xeda en ",(0,n.jsx)(a.em,{children:"documento"}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario seleccionar el documento a abrir. Si se elige un documento, la variable sistema Document contendr\xe1 el nombre del documento."]}),"\n",(0,n.jsx)(a.p,{children:"En bases de datos compiladas, cada variable debe ser del mismo tipo que las cargadas del disco."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Advertencia:"})," este comando no soporta variables de tipo array. Para variables de tipo array utilice los comandos del tema BLOB."]}),"\n",(0,n.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(a.p,{children:"El siguiente ejemplo carga tres variables de un documento llamado PrefsUsuario:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,n.jsx)(a.p,{children:"Si las variables se cargan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0."}),"\n",(0,n.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/es/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>l});var n=s(296540);const r={},i=n.createContext(r);function d(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);