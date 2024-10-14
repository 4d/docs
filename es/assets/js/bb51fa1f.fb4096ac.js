"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52847],{839278:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=r(474848),d=r(28453);const o={id:"onHeaderClick",title:"On Header Click"},i=void 0,l={id:"Events/onHeaderClick",title:"On Header Click",description:"| Code | Puede ser llamado por                                                                                                                                                            | Definici\xf3n                                     |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onHeaderClick.md",sourceDirName:"Events",slug:"/Events/onHeaderClick",permalink:"/docs/es/19/Events/onHeaderClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeaderClick.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onHeaderClick",title:"On Header Click"},sidebar:"docs",previous:{title:"On Header",permalink:"/docs/es/19/Events/onHeader"},next:{title:"On Load",permalink:"/docs/es/19/Events/onLoad"}},t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Puede ser llamado por"}),(0,s.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"42"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box "})]}),(0,s.jsx)(n.td,{children:"Se produce un clic en el encabezado de columna"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,s.jsxs)(n.p,{children:["Este evento se genera cuando se hace clic en el encabezado de una columna de list box. En este caso, el comando ",(0,s.jsx)(n.code,{children:"Self"})," permite identificar el encabezado de la columna sobre la que se ha hecho clic."]}),"\n",(0,s.jsxs)(n.p,{children:["Si se seleccion\xf3 la propiedad ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/propertiesAction#sortable",children:"Sortable"})," para el list box, se puede decidir si se autoriza o no una ordenaci\xf3n est\xe1ndar de la columna pasando el valor 0 o -1 en la variable ",(0,s.jsx)(n.code,{children:"$0"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.code,{children:"$0"})," es igual a 0, se realiza una ordenaci\xf3n est\xe1ndar."]}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.code,{children:"$0"})," es igual a -1, no se realiza una ordenaci\xf3n est\xe1ndar y el encabezado no muestra la flecha de ordenaci\xf3n. El desarrollador puede seguir generando una ordenaci\xf3n de columnas basada en criterios de ordenaci\xf3n personalizados utilizando el lenguaje 4D."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si la propiedad ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/propertiesAction#sortable",children:"Sortable"})," no est\xe1 seleccionada para el list box, la variable ",(0,s.jsx)(n.code,{children:"$0"})," no se utiliza."]}),"\n",(0,s.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,s.jsxs)(n.p,{children:["Este evento se genera cuando el usuario hace clic en el encabezado de una columna o l\xednea en un documento 4D View Pro. En este contexto, el ",(0,s.jsx)(n.a,{href:"/docs/es/19/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,s.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"entero largo"}),(0,s.jsx)(n.td,{children:"42"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Header Click"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Rango de celdas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetArea"}),(0,s.jsx)(n.td,{children:"entero largo"}),(0,s.jsxs)(n.td,{children:["La ubicaci\xf3n de la hoja donde tuvo lugar el evento:",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.li,{children:"0: el \xe1rea de cruce entre el n\xfamero de columna/encabezado de letra (parte superior izquierda de la hoja)"}),(0,s.jsx)(n.li,{children:"1: los encabezados de las columnas (\xe1rea que indica los n\xfameros/letras de las columnas)"}),(0,s.jsx)(n.li,{children:"2: los encabezados de l\xednea (\xe1rea que indica los n\xfameros de l\xednea)"})]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Header Click)\n    Case of\n       :(FORM Event.sheetArea=1)\n          $values:=VP Get values(FORM Event.range)\n       :(FORM Event.sheetArea=2)\n          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))\n       :(FORM Event.sheetArea=0)\n          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\\\n          New object("color";"#800080";"style";vk line style thick)))\n    End case\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(296540);const d={},o=s.createContext(d);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);