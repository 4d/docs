"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1035"],{592186:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>t,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-menu-item-icon","title":"SET MENU ITEM ICON","description":"SET MENU ITEM ICON ( menu ; lineamenu ; refIcon\\t {; proceso} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-icon","permalink":"/docs/es/commands/set-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-icon","title":"SET MENU ITEM ICON","slug":"/commands/set-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM","permalink":"/docs/es/commands/set-menu-item"},"next":{"title":"SET MENU ITEM MARK","permalink":"/docs/es/commands/set-menu-item-mark"}}'),i=s("785893"),a=s("250065");let d={id:"set-menu-item-icon",title:"SET MENU ITEM ICON",slug:"/commands/set-menu-item-icon",displayed_sidebar:"docs"},o=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",filesystem:"filesystem",h4:"h4",li:"li",p:"p",pre:"pre",relativepathname:"relativepathname",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," ( ",(0,i.jsx)(n.em,{children:"menu"})," ; ",(0,i.jsx)(n.em,{children:"lineamenu"})," ; ",(0,i.jsx)(n.em,{children:"refIcon"}),"	 {; ",(0,i.jsx)(n.em,{children:"proceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"menu"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Referencia de men\xfa o n\xfamero de men\xfa"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lineamenu"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refIcon"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre o n\xfamero de la librer\xeda de im\xe1genes a asociar a la l\xednea de men\xfa"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"proceso"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de proceso"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," permite modificar el icono asociado a la l\xednea de men\xfa designada por los par\xe1metros ",(0,i.jsx)(n.em,{children:"menu"})," y ",(0,i.jsx)(n.em,{children:"lineaMenu"}),".",(0,i.jsx)(n.br,{}),"\nPuede pasar -1 en ",(0,i.jsx)(n.em,{children:"lineaMenu"})," para especificar el \xfaltimo elemento a\xf1adido a ",(0,i.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (",(0,i.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") o un n\xfamero de men\xfa. Si pasa una referencia de men\xfa, el comando aplicar\xe1 a todas las instancias del men\xfa en todos los procesos. En este caso, si se pasa el par\xe1metro ",(0,i.jsx)(n.em,{children:"proceso"})," se ignora. Si pasa un n\xfamero de men\xfa, el comando tendr\xe1 en cuenta el men\xfa correspondiente en la barra de men\xfas principal del proceso actual. Si quiere designar otro proceso, pase su n\xfamero en el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"refIcon"}),", puede pasar el nombre o el n\xfamero de la imagen de la librer\xeda a utilizar como icono. Puede utilizar una imagen de la librer\xeda (bases binarias \xfanicamente) o una referencia a un archivo de imagen."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Referencia de archivo de imagen. Se pueden utilizar dos tipos:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["path:",(0,i.jsx)(n.filesystem,{})]})," (",(0,i.jsx)(n.em,{children:"recomendado"}),'), por ejemplo "path:/RESOURCES/icon.png". Para mayor informaci\xf3n, consulte el p\xe1rrafo ',(0,i.jsx)(n.em,{children:"Rutas a los Filesystem"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["file:",(0,i.jsx)(n.relativepathname,{})]})," (",(0,i.jsx)(n.em,{children:"obsoleto"}),'), por ejemplo "file:icon.png". La imagen debe estar ubicada en la carpeta ',(0,i.jsx)(n.strong,{children:"Resources"})," de la base."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Imagen de librer\xeda (bases binarias \xfanicamente): puede pasar el nombre o el n\xfamero de imagen. Por lo general es preferible utilizar su n\xfamero en lugar del nombre ya que los n\xfameros de imagen son identificadores \xfanicos, que no es el caso con de los nombres."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," se recomienda el uso de una ruta de archivo de imagen ya que la Librer\xeda de im\xe1genes est\xe1 en desuso y no es compatible con las bases de datos de proyectos 4D. Adem\xe1s, el tipo ",(0,i.jsxs)(n.em,{children:["file:",(0,i.jsx)(n.relativepathname,{})]})," es obsoleto, se recomienda utilizar ",(0,i.jsxs)(n.em,{children:["path:",(0,i.jsx)(n.filesystem,{})]}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Uso de una imagen ubicada en la carpeta Resources de la base:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-icon",children:"GET MENU ITEM ICON"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"984"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let i={},a=r.createContext(i);function d(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);