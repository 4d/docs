"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20618],{451292:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>d});var r=o(474848),i=o(28453);const t={id:"staticPicture",title:"Imagen est\xe1tica"},a=void 0,n={id:"FormObjects/staticPicture",title:"Imagen est\xe1tica",description:"Las im\xe1genes est\xe1ticas son objetos est\xe1ticos que pueden ser utilizados para varios prop\xf3sitos en los formularios 4D, incluyendo la decoraci\xf3n, el fondo o la interfaz de usuario:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/staticPicture.md",sourceDirName:"FormObjects",slug:"/FormObjects/staticPicture",permalink:"/docs/es/FormObjects/staticPicture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FstaticPicture.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"staticPicture",title:"Imagen est\xe1tica"},sidebar:"docs",previous:{title:"Separador",permalink:"/docs/es/FormObjects/splitters"},next:{title:"Stepper",permalink:"/docs/es/FormObjects/stepper"}},c={},d=[{value:"Formato y ubicaci\xf3n",id:"formato-y-ubicaci\xf3n",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Las im\xe1genes est\xe1ticas son ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/formObjectsOverview#active-and-static-objects",children:"objetos est\xe1ticos"})," que pueden ser utilizados para varios prop\xf3sitos en los formularios 4D, incluyendo la decoraci\xf3n, el fondo o la interfaz de usuario:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:o(168029).A+"",width:"312",height:"332"})}),"\n",(0,r.jsx)(s.p,{children:"Las im\xe1genes est\xe1ticas se almacenan fuera de los formularios y se insertan por referencia. En el editor de formularios, los objetos imagen est\xe1ticos se crean mediante operaciones de copiar/pegar o arrastrar y soltar."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Si coloca una imagen est\xe1tica en la p\xe1gina 0 de un formulario de varias p\xe1ginas, aparecer\xe1 autom\xe1ticamente como elemento de fondo en todas las p\xe1ginas. Tambi\xe9n puede incluirlo en un formulario heredado, aplicado en el fondo de otros formularios diferentes. De cualquier manera, su aplicaci\xf3n funcionar\xe1 m\xe1s r\xe1pido que si la imagen se pegara en cada p\xe1gina."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"formato-y-ubicaci\xf3n",children:"Formato y ubicaci\xf3n"}),"\n",(0,r.jsx)(s.p,{children:"La imagen original debe estar almacenada en un formato gestionado de forma nativa por 4D (4D reconoce los principales formatos de imagen: JPEG, PNG, BMP, SVG, GIF, etc.)."}),"\n",(0,r.jsx)(s.p,{children:"Se pueden utilizar dos ubicaciones principales para la trayectoria de la imagen est\xe1tica:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["en la carpeta ",(0,r.jsx)(s.strong,{children:"Resources"}),' del proyecto. Apropiado cuando se desea compartir im\xe1genes est\xe1ticas entre varios formularios en el proyecto. En este caso, el nombre de la ruta es en "/RESOURCES/<picture path>".']}),"\n",(0,r.jsxs)(s.li,{children:["en una carpeta de im\xe1genes (por ejemplo, llamada ",(0,r.jsx)(s.strong,{children:"Images"}),') dentro de la carpeta del formulario. Conveniente cuando las im\xe1genes est\xe1ticas se utilizan s\xf3lo en el formulario y/o se quiere poder mover o duplicar todo el formulario dentro del proyecto o de diferentes proyectos. En este caso, el nombre de la ruta es "<\\picture path>" y se resuelve desde la ra\xedz de la carpeta del formulario.']}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase CSS"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesPicture#display",children:"Visualizaci\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesPicture#pathname",children:"Ruta de acceso"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},168029:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>n});var r=o(296540);const i={},t=r.createContext(i);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);