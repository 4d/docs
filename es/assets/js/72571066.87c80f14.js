"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62335],{215699:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=o(474848),s=o(28453);const a={id:"new-shared-object",title:"New shared object",slug:"/commands/new-shared-object",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/new-shared-object",title:"New shared object",description:"New shared object {( propiedad ; valor {; propiedad2 ; valor2 ; ... ; propiedadN ; valorN} )} -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-shared-object.md",sourceDirName:"commands-legacy",slug:"/commands/new-shared-object",permalink:"/docs/es/commands/new-shared-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-shared-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"new-shared-object",title:"New shared object",slug:"/commands/new-shared-object",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New object",permalink:"/docs/es/commands/new-object"},next:{title:"OB Class",permalink:"/docs/es/commands/ob-class"}},t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New shared object"})," {( ",(0,r.jsx)(n.em,{children:"propiedad"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," {; ",(0,r.jsx)(n.em,{children:"propiedad2"})," ; ",(0,r.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"propiedadN"})," ; ",(0,r.jsx)(n.em,{children:"valorN"}),"} )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propiedad"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de la propiedad a crear"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Text, Date, Boolean, Pointer, Number, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de la propiedad"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nuevo objeto compartido"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"New shared object"})," crea un nuevo objeto compartido vac\xedo o prellenado y devuelve su referencia. Para agregar o editar una propiedad a este objeto debe estar rodeado por la estructura ",(0,r.jsx)(n.em,{children:"Use...End use"}),", de lo contrario, se devuelve un error. Sin embargo, es posible leer una propiedad fuera de una estructura ",(0,r.jsx)(n.em,{children:"Use...End use"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n sobre objetos compartidos, consulte la p\xe1gina ",(0,r.jsx)(n.em,{children:"Objetos y colecciones compartidos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no pasa ning\xfan par\xe1metro, ",(0,r.jsx)(n.strong,{children:"New shared object"})," crea un objeto vac\xedo y devuelve su referencia. Debe asignar esta referencia a una variable 4D declarada con el comando ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," declara una variable del tipo ",(0,r.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"Objeto"})," pero no crea un objeto."]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, puede rellenar el nuevo objeto pasando uno o varios pares de ",(0,r.jsx)(n.em,{children:"propiedad"}),"/",(0,r.jsx)(n.em,{children:"valor"})," como par\xe1metros:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"propiedad"}),", pase la etiqueta de la propiedad que se crear\xe1 (hasta 255 caracteres). Tenga en cuenta que el par\xe1metro de propiedad es sensible a may\xfasculas y min\xfasculas."]}),"\n",(0,r.jsxs)(n.li,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"}),", pase el valor que desea definir para la propiedad. Los objetos compartidos solo pueden contener valores de los siguientes tipos:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"n\xfamero (real, entero largo...) Los valores num\xe9ricos siempre se almacenan como reales."}),"\n",(0,r.jsx)(n.li,{children:"texto"}),"\n",(0,r.jsx)(n.li,{children:"booleano"}),"\n",(0,r.jsx)(n.li,{children:"fecha"}),"\n",(0,r.jsx)(n.li,{children:"hora (almacenado como n\xfamero de milisegundos - real)"}),"\n",(0,r.jsx)(n.li,{children:"null"}),"\n",(0,r.jsx)(n.li,{children:"objeto compartido(*)"}),"\n",(0,r.jsxs)(n.li,{children:["colecci\xf3n compartida(*)",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Nota:"})," a diferencia de los objetos est\xe1ndar (no compartidos), los objetos compartidos no son compatibles con im\xe1genes, punteros y objetos o colecciones que no se comparten."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Cuando se agrega un objeto o una colecci\xf3n compartido a un objeto compartido, comparten el mismo identificador de bloqueo. Para m\xe1s informaci\xf3n sobre este punto, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Identificador de bloqueo"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea crear un nuevo objeto compartido prellenado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $contact : Object\n\xa0$contact:=New shared object("name";"Smith";"firstname";"John")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea crear y modificar un objeto compartido. La estructura debe llamarse para este objeto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $s_obj : Object\n\xa0$s_obj:=New shared object("prop1";"alpha")\n\xa0Use($s_obj)\n\xa0\xa0\xa0\xa0$s_obj.prop1:="omega"\n\xa0End use\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/new-object",children:"New object"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"new-shared-collection.md",children:"New shared collection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Objetos y colecciones compartidos"})]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>c});var r=o(296540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);