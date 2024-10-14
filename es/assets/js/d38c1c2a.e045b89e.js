"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11104],{634887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(474848),l=t(28453);const s={id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},d=void 0,i={id:"ViewPro/commands/vp-import-from-blob",title:"VP IMPORT FROM BLOB",description:"VP IMPORT FROM BLOB ( vpAreaName 4D.blob { ; paramObj : Object} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-import-from-blob.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-import-from-blob",permalink:"/docs/es/20-R5/ViewPro/commands/vp-import-from-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},sidebar:"docs",previous:{title:"VP IMPORT DOCUMENT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-import-document"},next:{title:"VP IMPORT FROM OBJECT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-import-from-object"}},o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP IMPORT FROM BLOB"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"vpBlob"})," : 4D.blob { ; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpBlob"}),(0,r.jsx)(n.td,{children:"4D.Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Blob que contiene un documento de 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de importaci\xf3n"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP IMPORT FROM BLOB"})," importa el ",(0,r.jsx)(n.em,{children:"vpBlob"})," del \xe1rea ",(0,r.jsx)(n.em,{children:"vpAreaName"})," de 4D View Pro y reemplaza su contenido. ",(0,r.jsx)(n.em,{children:"vpBlob"})," debe contener un documento 4D View Pro previamente guardado como Blob ya sea utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})," o a trav\xe9s de la interfaz de 4D View Pro."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"paramObj"}),", puede pasar varias propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["M\xe9todo de retrollamada que se lanzar\xe1 cuando la importaci\xf3n haya finalizado. Ver ",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Pasar un m\xe9todo de retrollamada (f\xf3rmula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"calcOnDemand"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se calculan las f\xf3rmulas s\xf3lo cuando se solicitan, por defecto=false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dynamicReferences"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si calcular funciones con referencia din\xe1mica, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fullRecalc"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si calcular despu\xe9s de cargar los datos json, false por defecto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluye la f\xf3rmula al cargar, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si se incluye el estilo al cargar, por defecto=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeUnusedStyles"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Si incluir el estilo de nombre no utilizado al convertir excel xml al json, default=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"openMode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["puede ser: ",(0,r.jsx)(n.br,{}),"0: modo abierto normal, sin lazy e incremental. Al abrir el documento, el evento de la interfaz de usuario y la interfaz de usuario podr\xedan actualizarse y responder en puntos de tiempo espec\xedficos. ",(0,r.jsx)(n.br,{}),"1: modo abierto perezoso (lazy). Al abrir el documento, solo la hoja activa se cargar\xe1 directamente. Las dem\xe1s hojas s\xf3lo se cargar\xe1n cuando se vayan a utilizar. ",(0,r.jsx)(n.br,{}),"2: modo abierto incremental. Al abrir un documento, la interfaz de usuario y el evento de interfaz de usuario podr\xedan actualizarse y responder directamente."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Los siguientes par\xe1metros se pueden utilizar en el m\xe9todo de retrollamada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Par\xe1metros"}),(0,r.jsx)(n.th,{style:{textAlign:"left"}}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param1"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"El nombre del objeto de \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param2"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"4D.Blob"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"El blob importado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param3"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Referencia al par\xe1metro ",(0,r.jsx)(n.em,{children:"paramObj"})," del comando"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param4"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Un objeto devuelto por el m\xe9todo con un mensaje de estado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".success"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True si la importaci\xf3n se realiza correctamente, False en caso contrario."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorCode"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"integer"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"C\xf3digo de error."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Mensaje de error."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:'Desea importar al "ViewProArea" un documento 4D View Pro previamente guardado como Blob en la primera entidad de la dataclass Table.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob\nVP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);