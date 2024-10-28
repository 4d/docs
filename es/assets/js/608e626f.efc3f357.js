"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43336],{914982:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(474848),r=s(28453);const o={id:"save-variables",title:"SAVE VARIABLES",slug:"/commands/save-variables",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/save-variables",title:"SAVE VARIABLES",description:"SAVE VARIABLES ( doc ; variable {; variable2 ; ... ; variableN} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/save-variables.md",sourceDirName:"commands-legacy",slug:"/commands/save-variables",permalink:"/docs/es/commands/save-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"save-variables",title:"SAVE VARIABLES",slug:"/commands/save-variables",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LOAD VARIABLES",permalink:"/docs/es/commands/load-variables"},next:{title:"WA Back URL available",permalink:"/docs/es/commands/wa-back-url-available"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"SAVE VARIABLES"})," ( ",(0,n.jsx)(a.em,{children:"doc"})," ; ",(0,n.jsx)(a.em,{children:"variable"})," {; ",(0,n.jsx)(a.em,{children:"variable2"})," ; ... ; ",(0,n.jsx)(a.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe1metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"doc"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Nombre del documento en el cual guardar las variables"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"variable"}),(0,n.jsx)(a.td,{children:"Variable"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Variables a guardar"})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:["El comando SAVE VARIABLES guarda una o varias variables en el documento cuyo nombre se pasa en l par\xe1metro ",(0,n.jsx)(a.em,{children:"documento"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Las variables no deben ser del mismo tipo, pero tienen que ser de tipo Texto, Num\xe9rico, Fecha, Hora, Booleano o Imagen."}),"\n",(0,n.jsxs)(a.p,{children:["Si pasa una cadena vac\xeda en ",(0,n.jsx)(a.em,{children:"documento"}),", aparece una caja de di\xe1logo est\xe1ndar de guardar archivos; el usuario puede entonces elegir el documento a crear. En este caso, la variable sistema Document toma el nombre del documento si se ha creado."]}),"\n",(0,n.jsx)(a.p,{children:"Si las variables se guardan correctamente, la variable OK toma el valor 1. Si no, OK toma el valor 0."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," cuando escribe variables en documentos con SAVE VARIABLES, 4D utiliza un formato de datos interno. Puede recuperar las variables \xfanicamente con el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/load-variables",title:"LOAD VARIABLES",children:"LOAD VARIABLES"}),". No utilice ",(0,n.jsx)(a.a,{href:"/docs/es/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})," o ",(0,n.jsx)(a.a,{href:"/docs/es/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"})," para leer un documento creado por SAVE VARIABLES."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Advertencia:"})," este comando no soporta variables de tipo array. Para estas variables utilice los comandos del tema BLOB."]}),"\n",(0,n.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(a.p,{children:"El siguiente ejemplo guarda tres variables en un archivo llamado PrefsUsuario:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0SAVE VARIABLES(" PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)\n'})}),"\n",(0,n.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,n.jsx)(a.p,{children:"Si las variables se guardan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0."}),"\n",(0,n.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/es/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/load-variables",children:"LOAD VARIABLES"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.em,{children:"Variables sistema"})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>l});var n=s(296540);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);