"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43928"],{145954:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/system-folder","title":"System folder","description":"System folder {( tipo )} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/system-folder.md","sourceDirName":"commands-legacy","slug":"/commands/system-folder","permalink":"/docs/es/commands/system-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsystem-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"system-folder","title":"System folder","slug":"/commands/system-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET RECENT FONTS","permalink":"/docs/es/commands/set-recent-fonts"},"next":{"title":"System info","permalink":"/docs/es/commands/system-info"}}'),t=s("785893"),d=s("250065");let i={id:"system-folder",title:"System folder",slug:"/commands/system-folder",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",nombreusuario:"nombreusuario",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"System folder"})," {( ",(0,t.jsx)(e.em,{children:"tipo"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe1metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tipo"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Tipo de carpeta sistema"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Resultado"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Ruta de acceso de una carpeta del sistema activo"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(e.p,{children:["El comando ",(0,t.jsx)(e.strong,{children:"System folder"})," devuelve la ruta de acceso a una carpeta particular del sistema operativo o a la carpeta activa del sistema Windows o macOS."]}),"\n",(0,t.jsxs)(e.p,{children:["Pase un valor en el par\xe1metro opcional ",(0,t.jsx)(e.em,{children:"tipo"})," indicando el tipo de carpeta del sistema. 4D le ofrece las siguientes constantes predefinidas, ubicadas en el tema \u201C",(0,t.jsx)(e.em,{children:"Carpeta sistema"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constante"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{children:"Valor"}),(0,t.jsx)(e.th,{children:"Comentario"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Applications or program files"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"16"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Desktop"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"15"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Documents folder"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"17"}),(0,t.jsx)(e.td,{children:'Carpeta "Documents" del usuario'})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Favorites Win"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"14"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Fonts"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Home folder"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"18"}),(0,t.jsxs)(e.td,{children:['Carpeta de inicio actual del usuario (normalmente "/Users/',(0,t.jsx)(e.nombreusuario,{children:'/")'})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Start menu Win_all"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"8"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Start menu Win_user"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"9"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Startup Win_all"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"4"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Startup Win_user"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"5"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"System"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"System Win"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"12"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"System32 Win"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"13"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"User preferences_all"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"User preferences_user"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Notas"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Las constantes con sufijo ",(0,t.jsx)(e.strong,{children:"Win"}),", pueden utilizarse bajo Windows \xfanicamente. Cuando se utilizan en macOS, ",(0,t.jsx)(e.strong,{children:"System folder"})," devuelve una cadena vac\xeda."]}),"\n",(0,t.jsx)(e.li,{children:"Las rutas de acceso a algunas carpetas sistema pueden especificar el usuario actual. Las constantes 2 a 9 le permiten elegir si quiere obtener la ruta de acceso a una carpeta com\xfan para todos los usuarios o la ruta personalizada para el usuario actual."}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Si omite el par\xe1metro ",(0,t.jsx)(e.em,{children:"tipo"}),", la funci\xf3n devolver\xe1 la ruta a la carpeta sistema activa (= constante System)."]}),"\n",(0,t.jsx)(e.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/es/commands/get-4d-folder",children:"Get 4D folder"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/es/commands/temporary-folder",children:"Temporary folder"})]}),"\n",(0,t.jsx)(e.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero de comando"}),(0,t.jsx)(e.td,{children:"487"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Hilo seguro"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);