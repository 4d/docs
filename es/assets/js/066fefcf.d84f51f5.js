"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49473"],{812798:function(e,n,d){d.r(n),d.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>t,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/create-index","title":"CREATE INDEX","description":"CREATE INDEX ( tabla ; arrayCampos ; tipoIndice ; nombreIndice {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-index.md","sourceDirName":"commands-legacy","slug":"/commands/create-index","permalink":"/docs/es/20-R7/commands/create-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-index","title":"CREATE INDEX","slug":"/commands/create-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Structure Access","permalink":"/docs/es/20-R7/commands/theme/Structure-Access"},"next":{"title":"DELETE INDEX","permalink":"/docs/es/20-R7/commands/delete-index"}}'),s=d("785893"),a=d("250065");let i={id:"create-index",title:"CREATE INDEX",slug:"/commands/create-index",displayed_sidebar:"docs"},c=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Nota para despliegue",id:"nota-para-despliegue",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CREATE INDEX"})," ( ",(0,s.jsx)(n.em,{children:"tabla"})," ; ",(0,s.jsx)(n.em,{children:"arrayCampos"})," ; ",(0,s.jsx)(n.em,{children:"tipoIndice"})," ; ",(0,s.jsx)(n.em,{children:"nombreIndice"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla para la cual crear un \xedndice"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayCampos"}),(0,s.jsx)(n.td,{children:"Pointer array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Puntero(s) a el/los campo(s) a indexar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipoIndice"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo de \xedndice a crear: -1 = Palabras claves, 0 = por defecto, 1 = B-Tree est\xe1ndar, 3 = B-Tree cluster"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombreIndice"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del \xedndice a crear"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si pasa = indexaci\xf3n asincr\xf3nica"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"CREATE INDEX"})," permite crear:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Un \xedndice est\xe1ndar en uno o m\xe1s campos (\xedndice compuesto) o"}),"\n",(0,s.jsx)(n.li,{children:"Un \xedndice de palabras claves en un campo."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El \xedndice se crea para la tabla ",(0,s.jsx)(n.em,{children:"laTabla"})," utilizando uno o m\xe1s campos designados por el array de punteros ",(0,s.jsx)(n.em,{children:"arrayCampos"}),". Este array contiene una sola l\xednea si quiere crear un \xedndice simple y dos o m\xe1s cuando quiere crear un \xedndice compuesto (excepto en el caso de un \xedndice de palabras claves). En el caso de los \xedndices compuestos, el orden de los campos en el array es importante durante la construcci\xf3n del \xedndice."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tipoIndice"})," permite definir el tipo de \xedndice a crear. Puede pasar una de las siguientes constantes, que se encuentran en el tema \u201C",(0,s.jsx)(n.em,{children:"Tipo de \xedndice"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cluster BTree index"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"\xcdndice de tipo B-Tree utilizando clusters. Este tipo de \xedndice se optimiza cuando el \xedndice contiene pocas palabras claves, es decir cuando los mismos valores se presentan con frecuencia en los datos."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default index type"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"4D define el tipo de \xedndice (excepto los \xedndices de palabras claves) que es el m\xe1s optimizado en funci\xf3n del contenido del campo."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keywords index"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"Permite la indexaci\xf3n palabra por palabra del contenido del campo. Este tipo de \xedndice s\xf3lo puede utilizarse con campos de tipo Texto, Alfa e Imagen. Atenci\xf3n los \xedndices de palabras claves no pueden ser compuestos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Standard BTree index"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"\xcdndice de tipo B-Tree cl\xe1sico. Este tipo de \xedndice multi prop\xf3sito se utiliza en las versiones anteriores de 4D"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," un \xedndice B-Tree asociado a un campo de tipo texto almacena como m\xe1ximo los primeros 1024 caracteres del campo. Por lo tanto en este contexto, las b\xfasquedas en las cadenas que contienen m\xe1s de 1024 caracteres fallar\xe1n."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase en ",(0,s.jsx)(n.em,{children:"nomIndice"})," el nombre del \xedndice a crear. Es necesario dar nombres a los \xedndices si varios \xedndices de diferentes tipos pueden asociarse a un mismo campo y si prefiere poder borrarlos individualmente con la ayuda del comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/delete-index",children:"DELETE INDEX"}),". Si el \xedndice ",(0,s.jsx)(n.em,{children:"nomIndice"})," ya existe, el comando no hace nada."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", cuando se pasa, permite efectuar la indexaci\xf3n en modo asincr\xf3nico. En este modo, el m\xe9todo original continua su ejecuci\xf3n despu\xe9s de la llamada del comando, sin importar si la indexaci\xf3n ha terminado o no."]}),"\n",(0,s.jsxs)(n.p,{children:["Si el comando ",(0,s.jsx)(n.strong,{children:"CREATE INDEX"})," encuentra registros bloqueados, estos no se indexar\xe1n y el comando esperar\xe1 a que se desbloqueen."]}),"\n",(0,s.jsx)(n.p,{children:"Si ocurre un problema durante la ejecuci\xf3n del comando (campo no indexable, intento de creaci\xf3n de un \xedndice de palabras claves de m\xe1s de un campo, etc.), se genera un error. Este error puede interceptarse utilizando un m\xe9todo de gesti\xf3n de errores."}),"\n",(0,s.jsx)(n.h2,{id:"nota-para-despliegue",children:"Nota para despliegue"}),"\n",(0,s.jsx)(n.p,{children:"Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicaci\xf3n empaquetada de s\xf3lo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz)."}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Creaci\xf3n de dos \xedndices est\xe1ndar en los campos \u201CApellido\u201D y \u201CTel\xe9fono\u201D de la tabla [Clientes]:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(arrayPtrCampo;1)\n\xa0fieldPtrArr{1}:=->[Clientes]Apellido\n\xa0CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustLNameIdx")\n\xa0fieldPtrArr{1}:=->[Clientes]Telefono\n\xa0CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustTelIdx")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Creaci\xf3n de un \xedndice de palabras claves en el campo \u201CObservaciones\u201D de la tabla [Clientes]:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(arrayPtrCampo;1)\n\xa0fieldPtrArr{1}:=->[Clientes]Observaciones\n\xa0CREATE INDEX([Clientes];arrayPtrCampo;Keywords Index;"CustObsIdx")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Creaci\xf3n de un \xedndice compuesto en los campos \u201CCiudad\u201D y \u201CCodigoPostal\u201D de la tabla [Clientes]:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(arrayPtrCampo;2)\n\xa0fieldPtrArr{1}:=->[Clientes]Ciudad\n\xa0fieldPtrArr{2}:=->[Clientes]CodigoPostal\n\xa0CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CityZip")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/delete-index",children:"DELETE INDEX"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/resume-indexes",children:"RESUME INDEXES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-index",children:"SET INDEX"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"966"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return i}});var r=d(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);