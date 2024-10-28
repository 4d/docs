"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95213],{257435:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=s(474848),t=s(28453);const o={id:"document-list",title:"DOCUMENT LIST",slug:"/commands/document-list",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/document-list",title:"DOCUMENT LIST",description:"DOCUMENT LIST ( nombreRuta ; documentos {; opciones} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/document-list.md",sourceDirName:"commands-legacy",slug:"/commands/document-list",permalink:"/docs/es/commands/document-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"document-list",title:"DOCUMENT LIST",slug:"/commands/document-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DELETE FOLDER",permalink:"/docs/es/commands/delete-folder"},next:{title:"Document to text",permalink:"/docs/es/commands/document-to-text"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOCUMENT LIST"})," ( ",(0,r.jsx)(n.em,{children:"nombreRuta"})," ; ",(0,r.jsx)(n.em,{children:"documentos"})," {; ",(0,r.jsx)(n.em,{children:"opciones"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nombreRuta"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Ruta de acceso al volumen o a la carpeta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"documentos"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombres de los documentos presentes en esta ubicaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"opciones"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Opciones para crear la lista"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"DOCUMENT LIST"})," llena el array de tipo Texto ",(0,r.jsx)(n.em,{children:"documentos"})," con los nombres del los documentos ubicados en la ubicaci\xf3n pasada en ",(0,r.jsx)(n.em,{children:"rutaAcceso"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro ",(0,r.jsx)(n.em,{children:"rutaAcceso"})," s\xf3lo acepta rutas de acceso absolutas."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"opciones"}),", s\xf3lo los nombres de los documentos se devuelven en el array ",(0,r.jsx)(n.em,{children:"documentos"}),". Puede modificar este funcionamiento pasando en el par\xe1metro ",(0,r.jsx)(n.em,{children:"opciones"}),", una o m\xe1s de las siguientes constantes, que se encuentran en el tema ",(0,r.jsx)(n.em,{children:"Documentos sistema"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Absolute path"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"El array documentos contiene las rutas de acceso absolutas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Ignore invisible"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"Los documentos invisibles no se listan"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Posix path"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["El array ",(0,r.jsx)(n.em,{children:"documentos"})," contiene las rutas de acceso al formato POSIX"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Recursive parsing"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"El array documentos contiene los archivos y todas las subcarpetas de la carpeta especificada"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Con la opci\xf3n Recursive parsing en modo relativo (opci\xf3n 1 \xfanicamente), las rutas de los documentos ubicadas en las subcarpetas comienzan con los caracteres ":" o "\\" dependiendo de la plataforma.'}),"\n",(0,r.jsx)(n.li,{children:'Con la opci\xf3n Posix path en modo relativo (opci\xf3n 4 \xfanicamente), las rutas no comienzan por "/".'}),"\n",(0,r.jsx)(n.li,{children:'Con la opci\xf3n Posix path en modo absoluto (opci\xf3n 4 + 2), las rutas siempre comienzan por "/".'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si no hay documentos en la ubicaci\xf3n especificada, el comando devuelve un array vac\xedo. Si la ruta de acceso pasada en ",(0,r.jsx)(n.em,{children:"rutaAcceso"})," es invalida, ",(0,r.jsx)(n.strong,{children:"DOCUMENT LIST"})," genera un error de gesti\xf3n de archivo que se puede interceptar utilizando un m\xe9todo ",(0,r.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Lista de todos los documentos en una carpeta (sintaxis por defecto):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["-> arrFiles:",(0,r.jsx)(n.br,{}),"\nText1.txt",(0,r.jsx)(n.br,{}),"\nText2.txt"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Lista de todos los documentos en una carpeta en modo absoluto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles; Absolute path)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["-> arrFiles:",(0,r.jsx)(n.br,{}),"\nC:\\Text1.txt",(0,r.jsx)(n.br,{}),"\nC:\\Text2.txt"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Lista de todos los documentos en modo recursivo (relativo):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles;Recursive parsing)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["-> arrFiles:",(0,r.jsx)(n.br,{}),"\nText1.txt",(0,r.jsx)(n.br,{}),"\nText2.txt",(0,r.jsx)(n.br,{}),"\n\\Folder1\\Text3.txt",(0,r.jsx)(n.br,{}),"\n\\Folder1\\Text4.txt",(0,r.jsx)(n.br,{}),"\n\\Folder2\\Text5.txt",(0,r.jsx)(n.br,{}),"\n\\Folder2\\Folder3\\Picture1.png"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Lista de todos los documentos en modo recursivo absoluto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";arrFiles;Recursive parsing)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["-> arrFiles:",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\MyText1.txt",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\MyText2.txt",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder1\\MyText3.txt",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder1\\MyText4.txt",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder2\\MyText5.txt",(0,r.jsx)(n.br,{}),"\nC:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Lista de todos los documentos en modo recursivo Posix (relativo):"}),"\n",(0,r.jsx)(n.p,{children:'#code4D]DOCUMENT LIST("C:\\\\MyFolder\\\\";arrFiles;Recursive parsing+Posix path)[#/code4D]'}),"\n",(0,r.jsxs)(n.p,{children:["-> arrFiles:",(0,r.jsx)(n.br,{}),"\nMyText1.txt",(0,r.jsx)(n.br,{}),"\nMyText2.txt",(0,r.jsx)(n.br,{}),"\nFolder1/MyText3.txt",(0,r.jsx)(n.br,{}),"\nFolder1/MyText4.txt",(0,r.jsx)(n.br,{}),"\nFolder2/MyText5.txt",(0,r.jsx)(n.br,{}),"\nFolder2/Folder3/MyPicture1.png"]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/folder-list",children:"FOLDER LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/volume-list",children:"VOLUME LIST"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(296540);const t={},o=r.createContext(t);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);