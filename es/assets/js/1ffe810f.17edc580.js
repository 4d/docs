"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93066],{312578:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var c=o(474848),i=o(28453);const s={id:"collection",title:"Collection"},l=void 0,a={id:"Concepts/collection",title:"Collection",description:"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, objeto, booleano, colecci\xf3n o null).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/es/18/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/es/18/Concepts/boolean"},next:{title:"Fecha",permalink:"/docs/es/18/Concepts/date"}},r={},d=[{value:"Inicializaci\xf3n",id:"inicializaci\xf3n",level:2},{value:"Colecci\xf3n est\xe1ndar o compartida",id:"colecci\xf3n-est\xe1ndar-o-compartida",level:3},{value:"M\xe9todos de colecci\xf3n",id:"m\xe9todos-de-colecci\xf3n",level:2},{value:"par\xe1metro rutaPropiedad",id:"par\xe1metro-rutapropiedad",level:3}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, objeto, booleano, colecci\xf3n o null)."}),"\n",(0,c.jsxs)(n.p,{children:["Para gestionar las variables de tipo Colecci\xf3n se debe utilizar la notaci\xf3n de objetos (ver ",(0,c.jsx)(n.a,{href:"Conceptos/dt_object.md#sintaxis-b%C3%A1sica",children:"Sintaxis-b\xe1sica"}),")."]}),"\n",(0,c.jsx)(n.p,{children:"Para acceder a un elemento de la colecci\xf3n, hay que pasar el n\xfamero del elemento entre corchetes:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Puede pasar toda expresi\xf3n 4D v\xe1lida que devuelva un entero positivo en la expresi\xf3n. Ejemplos:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:" myCollection[5]  //acceso al 6\xba elemento de la colecci\xf3n\n myCollection[$var]\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Atenci\xf3n:"})," los elementos de la colecci\xf3n est\xe1n numerados desde 0."]}),"\n",(0,c.jsx)(n.p,{children:"Puede asignar un valor a un elemento de la colecci\xf3n u obtener el valor de un elemento de la colecci\xf3n utilizando la notaci\xf3n de objetos:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,c.jsx)(n.p,{children:"Si se asigna un \xedndice de elemento que sobrepasa el \xfaltimo elemento existente de la colecci\xf3n, la colecci\xf3n se redimensiona autom\xe1ticamente y a todos los nuevos elementos intermedios se les asigna un valor nulo:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,c.jsx)(n.h2,{id:"inicializaci\xf3n",children:"Inicializaci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["Las colecciones deben haber sido inicializadas, por ejemplo utilizando el comando ",(0,c.jsx)(n.code,{children:"New collection"}),", de lo contrario al intentar leer o modificar sus elementos se generar\xe1 un error de sintaxis."]}),"\n",(0,c.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:" C_COLLECTION($colVar) //creaci\xf3n de una variable 4D de tipo colecci\xf3n\n $colVar:=Nueva colecci\xf3n //inicializaci\xf3n de la colecci\xf3n y asignaci\xf3n a la variable 4D\n"})}),"\n",(0,c.jsx)(n.h3,{id:"colecci\xf3n-est\xe1ndar-o-compartida",children:"Colecci\xf3n est\xe1ndar o compartida"}),"\n",(0,c.jsx)(n.p,{children:"Puede crear dos tipos de colecciones:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["colecciones est\xe1ndar (no compartidas), utilizando el comando ",(0,c.jsx)(n.code,{children:"New collection"}),". Estas colecciones pueden ser editadas sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidas entre procesos."]}),"\n",(0,c.jsxs)(n.li,{children:["colecciones compartidas, utilizando el comando ",(0,c.jsx)(n.code,{children:"New shared collection"}),". Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. These collections can be shared between processes, including preemptive threads. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,c.jsx)(n.a,{href:"/docs/es/18/Concepts/shared",children:"Objetos y colecciones compartidos"}),"."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"m\xe9todos-de-colecci\xf3n",children:"M\xe9todos de colecci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["Las referencias a colecciones 4D se benefician de m\xe9todos especiales (a veces llamados ",(0,c.jsx)(n.em,{children:"funciones miembro"}),"). Gracias a la notaci\xf3n de objetos, estos m\xe9todos pueden aplicarse a las referencias de la colecci\xf3n utilizando la siguiente sintaxis:"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"{$result:=}myCollection.memberFunction( {params} )"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Tenga en cuenta que, aunque no tenga par\xe1metros, una funci\xf3n miembro debe ser llamada con par\xe9ntesis (), de lo contrario se genera un error de sintaxis."}),"\n",(0,c.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"$newCol:=$col.copy() //copia de $col a $newCol\n$col.push(10;100) //a\xf1ade de 10 y 100 a la colecci\xf3n\n"})}),"\n",(0,c.jsx)(n.p,{children:"Algunos m\xe9todos devuelven la colecci\xf3n original despu\xe9s de la modificaci\xf3n, para que pueda ejecutar las llamadas en una secuencia:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,c.jsx)(n.h3,{id:"par\xe1metro-rutapropiedad",children:"par\xe1metro rutaPropiedad"}),"\n",(0,c.jsxs)(n.p,{children:["Varios m\xe9todos aceptan una ",(0,c.jsx)(n.em,{children:"propertyPath"})," como par\xe1metro. Este par\xe1metro significa:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'o bien un nombre de propiedad del objeto, por ejemplo "apellido"'}),"\n",(0,c.jsx)(n.li,{children:'o una ruta de propiedades del objeto, es decir, una secuencia jer\xe1rquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".'}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Atenci\xf3n:"}),' cuando se utilizan m\xe9todos y par\xe1metros propertyPath, no se puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedir\xe1 que 4D analice correctamente la ruta:']}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //error\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var c=o(296540);const i={},s=c.createContext(i);function l(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);