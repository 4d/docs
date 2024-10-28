"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70633],{524918:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=s(474848),t=s(28453);const i={id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/show-on-disk",title:"SHOW ON DISK",description:"SHOW ON DISK ( nombreRuta {; *} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/show-on-disk.md",sourceDirName:"commands-legacy",slug:"/commands/show-on-disk",permalink:"/docs/es/commands/show-on-disk",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshow-on-disk.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"show-on-disk",title:"SHOW ON DISK",slug:"/commands/show-on-disk",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET DOCUMENT SIZE",permalink:"/docs/es/commands/set-document-size"},next:{title:"Test path name",permalink:"/docs/es/commands/test-path-name"}},r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4}];function l(e){const n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SHOW ON DISK"})," ( ",(0,a.jsx)(n.em,{children:"nombreRuta"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nombreRuta"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Ruta de acceso del elemento a mostrar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si el elemento es una carpeta, mostrar su contenido"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando SHOW ON DISK muestra en una ventana est\xe1ndar del sistema operativo el archivo o la carpeta en la cual la ruta de acceso se pasa en el par\xe1metro ",(0,a.jsx)(n.em,{children:"nombreRuta."})]}),"\n",(0,a.jsx)(n.p,{children:"En una interfaz de usuario, este comando permite designar la ubicaci\xf3n de un archivo o carpeta especifico."}),"\n",(0,a.jsxs)(n.p,{children:["Por defecto, si ",(0,a.jsx)(n.em,{children:"nombreRuta"})," designa una carpeta, el comando muestra el nivel de la carpeta misma. Si pasa el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"}),", el comando abre la carpeta y muestra su contenido en la ventana. Si ",(0,a.jsx)(n.em,{children:"nombreRuta"})," designa un archivo, se ignora el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Los siguientes ejemplos ilustran el funcionamiento del comando:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MiCarpeta\\\\MiArchivo.txt")\xa0// Muestra el archivo designado\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(996779).A+"",width:"537",height:"287"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MiCarpeta\\\\Carpeta2")\xa0// Muestra la carpeta designada\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(506398).A+"",width:"537",height:"287"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SHOW ON DISK("c:\\\\MiCarpeta\\\\Carpeta2";*)\xa0// Muestra los contenidos de la carpeta designada\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(212189).A+"",width:"537",height:"283"})}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el comando se ejecuta correctamente, de lo contrario toma el valor 0."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},996779:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/pict35007.es-42109813376c36072826739a4a25085f.png"},506398:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/pict35008.es-b1326cd54210089c6296af74b1fa2a3b.png"},212189:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/pict35009.es-67394beffe596e75e300d8527aa32c10.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var a=s(296540);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);