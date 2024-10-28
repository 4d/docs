"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11039],{129085:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(474848),o=n(28453);const s={id:"variable-to-blob",title:"VARIABLE TO BLOB",slug:"/commands/variable-to-blob",displayed_sidebar:"docs"},l=void 0,i={id:"commands-legacy/variable-to-blob",title:"VARIABLE TO BLOB",description:"VARIABLE TO BLOB ( variable ; BLOB {; offset\xa0|\xa0*} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/variable-to-blob.md",sourceDirName:"commands-legacy",slug:"/commands/variable-to-blob",permalink:"/docs/es/commands/variable-to-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariable-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"variable-to-blob",title:"VARIABLE TO BLOB",slug:"/commands/variable-to-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"TEXT TO BLOB",permalink:"/docs/es/commands/text-to-blob"},next:{title:"Bool",permalink:"/docs/es/commands/bool"}},t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota",id:"nota",level:5},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"VARIABLE TO BLOB"})," ( ",(0,r.jsx)(a.em,{children:"variable"})," ; ",(0,r.jsx)(a.em,{children:"BLOB"})," {; offset\xa0|\xa0*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"variable"}),(0,r.jsx)(a.td,{children:"Variable"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Variable a guardar en el BLOB"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Blob"}),(0,r.jsx)(a.td,{children:"Blob"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"BLOB a recibir la variable"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"offset\xa0|\xa0*"}),(0,r.jsx)(a.td,{children:"Variable, Operador"}),(0,r.jsx)(a.td,{children:"\u2194"}),(0,r.jsx)(a.td,{children:"Offset de la variable (expresado en bytes) en el BLOB o * para a\xf1adir el valor"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"Nuevo offset despu\xe9s de escritura si se omite *"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando VARIABLE TO BLOB almacena la variable ",(0,r.jsx)(a.em,{children:"variable"})," en el BLOB ",(0,r.jsx)(a.em,{children:"blob"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Si especifica el par\xe1metro opcional *, la variable se a\xf1ade al BLOB y el tama\xf1o del BLOB se extiende en consecuencia. Utilizando el par\xe1metro opcional *, usted puede almacenar secuencialmente todo n\xfamero de variables o listas (ver otros comandos BLOB) en un BLOB, el \xfanico limite es la memoria disponible."}),"\n",(0,r.jsxs)(a.p,{children:["Si no especifica el par\xe1metro opcional * ni la variable en el par\xe1metro ",(0,r.jsx)(a.em,{children:"offset"}),", la variable se almacena al comienzo del BLOB, sobre su contenido anterior; el tama\xf1o del BLOB se redimensiona en consecuencia."]}),"\n",(0,r.jsxs)(a.p,{children:["Si pasa la variable ",(0,r.jsx)(a.em,{children:"offset"})," en par\xe1metro, la variable se escribe en BLOB al offset (a partir de cero). Sin importar donde escribe la variable, el tama\xf1o del BLOB aumenta de acuerdo a la ubicaci\xf3n pasada (m\xe1s el tama\xf1o de la variable, si es necesario). Los nuevos bytes redefinidos, diferentes de los bytes en los que est\xe1 escribiendo, se inicializan en cero."]}),"\n",(0,r.jsxs)(a.p,{children:["Despu\xe9s de llamar el comando, la variable del par\xe1metro ",(0,r.jsx)(a.em,{children:"offset"})," se incrementa en el n\xfamero de bytes escritos. Por lo tanto, usted puede reutilizar la misma variable con otro comando de escritura de BLOB para poner otra variable o lista."]}),"\n",(0,r.jsx)(a.p,{children:"VARIABLE TO BLOB acepta todo tipo de variables (incluyendo otros BLOBs), excepto los siguientes:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Puntero"}),"\n",(0,r.jsx)(a.li,{children:"Array de punteros"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Note que:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["si guarda una variable de tipo Entero largo que es una referencia a una lista jer\xe1rquica (ListRef), VARIABLE TO BLOB guardar\xe1 la variable Entero largo, no la lista. Para guardar y recuperar las listas jer\xe1rquicas en un BLOB, utilice los comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/list-to-blob",children:"LIST TO BLOB"})," y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-list",children:"BLOB to list"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["si pasa un objeto o una colecci\xf3n en el par\xe1metro ",(0,r.jsx)(a.em,{children:"variable"}),", el comando ubica una copia (y no una referencia) en el BLOB. Si el objeto o colecci\xf3n contiene punteros, los valores no referenciados se guardan en el BLOB, no los punteros mismos."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Sin embargo, si almacena una variable de tipo ",(0,r.jsx)(a.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"})," que es una referencia a una lista jer\xe1rquica (",(0,r.jsx)(a.a,{href:"#",title:"Una referencia a una lista jer\xe1rquica",children:"ListRef"}),"), VARIABLE TO BLOB almacenar\xe1 la variable ",(0,r.jsx)(a.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),", no la lista. Para guardar y recuperar las listas jer\xe1rquicas en un BLOB, utilice los comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/list-to-blob",children:"LIST TO BLOB"})," y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-list",children:"BLOB to list"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Advertencia:"})," Si utiliza un BLOB para almacenar las variables, debe utilizar posteriormente el comando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," para recuperar el contenido del BLOB, porque las variables son almacenadas en BLOBs utilizando un formato interno de 4D."]}),"\n",(0,r.jsx)(a.p,{children:"Despu\xe9s del llamar al comando, si la variable ha sido almacenada con \xe9xito, la variable OK toma el valor 1. Si la operaci\xf3n no se pudo realizar, la variable OK toma el valor 0; por ejemplo, por falta de memoria."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota sobre la independencia de la plataforma:"})," VARIABLE TO BLOB y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," utilizan un formato interno de 4D para administrar las variables almacenadas en los BLOBs. La ventaja es que usted no tiene que preocuparse por la conversi\xf3n de bytes (byte swapping) entre plataformas mientras utiliza estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando cualquiera de estos dos comandos puede ser reutilizado en Macintosh y viceversa."]}),"\n",(0,r.jsx)(a.h5,{id:"nota",children:"Nota"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota de compatibilidad"}),": como este comando altera el blob pasado como par\xe1metro, no soporta objetos blob (tipo 4D.Blob). Ver ",(0,r.jsx)(a.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n",(0,r.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(a.p,{children:"La variable OK toma el valor 1 si la variable ha sido almacenada correctamente, de lo contrario toma el valor 0."}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(a.p,{children:"Los dos m\xe9todos de proyecto siguientes permiten almacenar y recuperar r\xe1pidamente las variables en un BLOB:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto GUARDAR VARIABLES EN BLOB\n\xa0\xa0// GUARDAR VARIABLES EN BLOB ( Puntero{ ; Puntero... { ; Puntero} } )\n\xa0\xa0// GUARDAR VARIABLES EN BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam : Integer\n\xa0\n\xa0SET BLOB SIZE($1->;0)\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(${$vlParam}->;$1->;*)\n\xa0End for\n\xa0\n\xa0\n\xa0\xa0// M\xe9todo de proyecto RECUPERAR VARIABLES DEL BLOB\n\xa0\xa0// RECUPERAR VARIABLES DEL BLOB ( Puntero{ ; Puntero... { ; Puntero} } )\n\xa0\xa0// RECUPERAR VARIABLES DEL BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam;$vlOffset : Integer\n\xa0\n\xa0$vlOffset:=0\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)\n\xa0End for\n"})}),"\n",(0,r.jsx)(a.p,{children:"Despu\xe9s de escribir estos m\xe9todos en su aplicaci\xf3n, puede escribir:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0GUARDAR VARIABLES EN BLOB(->vxBLOB;->vgImagen;->comoUnArray;->alOtroArray)\n\xa0\xa0// ...\n\xa0RECUPERAR VARIABLES DEL BLOB(->vxBLOB;->vgImagen;->comoUnArray;->alOtroArray)\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"Los siguientes m\xe9todos de proyecto le permiten almacenar y recuperar r\xe1pidamente los arrays en los documentos en disco:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto SAVE ARRAY\n\xa0\xa0// SAVE ARRAY (Text ; Pointer)\n\xa0\xa0// SAVE ARRAY (Document ; -> Array)\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxArrayData : Blob\n\xa0VARIABLE TO BLOB($2->;$vxArrayData)\xa0// Almacenar el array en el BLOB\n\xa0COMPRESS BLOB($vxArrayData)\xa0// Comprimir el BLOB\n\xa0BLOB TO DOCUMENT($1;$vxArrayData)\xa0// Guardar el BLOB en disco\n"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo proyecto LOAD ARRAY\n\xa0\xa0// LOAD ARRAY (Text ; Pointer)\n\xa0\xa0// LOAD ARRAY (Document ; -> Array)\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxArrayData : Blob\n\xa0DOCUMENT TO BLOB($1;$vxArrayData)\xa0// Cargar el BLOB del disco\n\xa0EXPAND BLOB($vxArrayData)\xa0// Expandir el BLOB\n\xa0BLOB TO VARIABLE($vxArrayData;$2->)\xa0// Recuperar el array del BLOB\n"})}),"\n",(0,r.jsx)(a.p,{children:"Despu\xe9s de a\xf1adir estos m\xe9todos a su aplicaci\xf3n, puede escribir:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0ARRAY TEXT(...;asAnyArray;...)\n\xa0\xa0//\xa0 ...\n\xa0SAVE ARRAY($vsDocName;->asAnyArray)\n\xa0\xa0//\xa0 ...\n\xa0LOAD ARRAY($vsDocName;->asAnyArray)\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-list",children:"BLOB to list"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/list-to-blob",children:"LIST TO BLOB"})]})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);