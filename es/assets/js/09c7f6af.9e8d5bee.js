"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15605],{393165:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var l=n(474848),a=n(28453);const s={id:"blob",title:"BLOB"},r=void 0,d={id:"Concepts/blob",title:"BLOB",description:"Un campo, variable o expresi\xf3n BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/es/20-R6/Concepts/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Tipos de datos",permalink:"/docs/es/20-R6/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/es/20-R6/Concepts/boolean"}},c={},i=[{value:"Tipos Blob",id:"tipos-blob",level:2},{value:"Verificar si una variable contiene un blob escalar o un <code>4D.Blob</code>",id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob",level:2},{value:"Pasar blobs como par\xe1metros",id:"pasar-blobs-como-par\xe1metros",level:2},{value:"Pasar blobs y objetos blob a los comandos 4D",id:"pasar-blobs-y-objetos-blob-a-los-comandos-4d",level:3},{value:"Pasar blobs y objetos blob a los m\xe9todos",id:"pasar-blobs-y-objetos-blob-a-los-m\xe9todos",level:3},{value:"Pasar un blob escalar por referencia usando un puntero",id:"pasar-un-blob-escalar-por-referencia-usando-un-puntero",level:3},{value:"Asignar una variable Blob a otra",id:"asignar-una-variable-blob-a-otra",level:2},{value:"Conversi\xf3n autom\xe1tica del tipo blob",id:"conversi\xf3n-autom\xe1tica-del-tipo-blob",level:2},{value:"Modificaci\xf3n de un blob escalar",id:"modificaci\xf3n-de-un-blob-escalar",level:2},{value:"Acceder individualmente a los bytes de un blob",id:"acceder-individualmente-a-los-bytes-de-un-blob",level:2},{value:"Acceder a los bytes de un blob escalar",id:"acceder-a-los-bytes-de-un-blob-escalar",level:4},{value:"Acceder a los bytes de un <code>4D.Blob</code>",id:"acceder-a-los-bytes-de-un-4dblob",level:4}];function t(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.p,{children:"Un campo, variable o expresi\xf3n BLOB (Binary Large OBject) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente."}),"\n",(0,l.jsx)(o.p,{children:"Un blob se carga en la memoria en su totalidad. Una variable blob se mantiene y existe s\xf3lo en la memoria. Un campo blob se carga en memoria desde el disco, como el resto del registro al que pertenece."}),"\n",(0,l.jsxs)(o.p,{children:["Al igual que otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos blob no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos ",(0,l.jsx)(o.code,{children:"Old"})," y ",(0,l.jsx)(o.code,{children:"Modified"})," no es significativo cuando se aplica a un campo blob."]}),"\n",(0,l.jsx)(o.h2,{id:"tipos-blob",children:"Tipos Blob"}),"\n",(0,l.jsx)(o.p,{children:"Utilizando el lenguaje 4D, hay dos maneras de manipular un blob:"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"como un valor escalar"}),": un blob puede ser almacenado en una variable o un campo Blob y puede ser modificado."]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsxs)(o.strong,{children:["como un objeto (",(0,l.jsx)(o.code,{children:"4D.Blob"}),")"]}),": un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," es un objeto blob. Puede encapsular un blob o una parte de \xe9l en un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," sin alterar el bloque original. Este m\xe9todo se llama ",(0,l.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing",children:"boxing"}),". Para m\xe1s informaci\xf3n sobre c\xf3mo instanciar un ",(0,l.jsx)(o.code,{children:"4D.Blob"}),", vea ",(0,l.jsx)(o.a,{href:"/docs/es/20-R6/API/BlobClass",children:"Blob Class"}),"."]}),"\n"]}),"\n",(0,l.jsx)(o.p,{children:"Cada tipo de blob tiene sus ventajas. Utilice la siguiente tabla para determinar cu\xe1l se ajusta a sus necesidades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{}),(0,l.jsx)(o.th,{style:{textAlign:"center"},children:"Blob"}),(0,l.jsx)(o.th,{style:{textAlign:"center"},children:"4D.Blob"})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Alterable"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"S\xed"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"No"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Compartible en objetos y colecciones"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"No"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"S\xed"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Pasado por referencia*"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"No"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"S\xed"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Rendimiento al acceder a los bytes"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"+"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Tama\xf1o m\xe1ximo"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"2GB"}),(0,l.jsx)(o.td,{style:{textAlign:"center"},children:"Memoria"})]})]})]}),"\n",(0,l.jsxs)(o.p,{children:["Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los m\xe9todos. Puede pasar blobs y objetos blob (",(0,l.jsx)(o.code,{children:"4D.Blob"}),") a los m\xe9todos."]}),"\n",(0,l.jsxs)(o.blockquote,{children:["\n",(0,l.jsx)(o.p,{children:"Por defecto, 4D define el tama\xf1o m\xe1ximo de los blobs escalares en 2GB, pero este l\xedmite de tama\xf1o puede ser menor dependiendo de su sistema operativo y del espacio disponible."}),"\n"]}),"\n",(0,l.jsx)(o.p,{children:"No se pueden utilizar operadores en los blobs."}),"\n",(0,l.jsxs)(o.h2,{id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob",children:["Verificar si una variable contiene un blob escalar o un ",(0,l.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,l.jsxs)(o.p,{children:["Utilice el comando ",(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1509.html",children:"Value type"})," para determinar si un valor es de tipo Blob u Objeto.\nPara verificar que un objeto es un objeto blob (",(0,l.jsx)(o.code,{children:"4D.Blob"}),"), utilice ",(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1731.html",children:"instancia OB de"}),":"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n"})}),"\n",(0,l.jsx)(o.h2,{id:"pasar-blobs-como-par\xe1metros",children:"Pasar blobs como par\xe1metros"}),"\n",(0,l.jsx)(o.p,{children:"Los bloques escalares y los objetos blob pueden pasarse como par\xe1metros a los comandos 4D o a las rutinas de plug-in que esperan par\xe1metros blob."}),"\n",(0,l.jsx)(o.h3,{id:"pasar-blobs-y-objetos-blob-a-los-comandos-4d",children:"Pasar blobs y objetos blob a los comandos 4D"}),"\n",(0,l.jsxs)(o.p,{children:["Puede pasar un blob escalar o un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," a todo comando 4D que tome un blob como par\xe1metro:"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n'})}),"\n",(0,l.jsxs)(o.p,{children:["Algunos comandos 4D modifican el blob, y por lo tanto no soportan el tipo ",(0,l.jsx)(o.code,{children:"4D.Blob"}),":"]}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page560.html",children:"DELETE FROM BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page559.html",children:"INSERT IN BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page548.html",children:"INTEGER TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page550.html",children:"LONGINT TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page552.html",children:"REAL TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page606.html",children:"SET BLOB SIZE"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page554.html",children:"TEXT TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page532.html",children:"VARIABLE TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page556.html",children:"LIST TO BLOB"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page782.html",children:"SOAP DECLARATION"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page777.html",children:"WEB SERVICE SET PARAMETER"})}),"\n"]}),"\n",(0,l.jsx)(o.h3,{id:"pasar-blobs-y-objetos-blob-a-los-m\xe9todos",children:"Pasar blobs y objetos blob a los m\xe9todos"}),"\n",(0,l.jsxs)(o.p,{children:["Al trabajar con m\xe9todos, usar objetos blob (",(0,l.jsx)(o.code,{children:"4D.Blob"}),") es m\xe1s eficiente, ya que son pasados por referencia. Tenga en cuenta que a diferencia de los objetos blob, que son pasados por referencia, los blobs escalares se duplican en la memoria cuando se pasan a los m\xe9todos."]}),"\n",(0,l.jsx)(o.h3,{id:"pasar-un-blob-escalar-por-referencia-usando-un-puntero",children:"Pasar un blob escalar por referencia usando un puntero"}),"\n",(0,l.jsx)(o.p,{children:"Pasar un blob escalar a sus propios m\xe9todos sin duplicarlo en memoria, defina un puntero a la variable que lo almacena y pase el puntero como par\xe1metro."}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"Ejemplos:"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"// Declarar una variable de tipo Blob\nvar $myBlobVar: Blob\n// Pasar el blob como par\xe1metro a un comando 4D\n SET BLOB SIZE($myBlobVar; 024*1024)\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"// Pasar el blob como par\xe1metro a una rutina externa\n $errCode:=Hacer algo con este blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"// Pasar el blob como un par\xe1metro a un m\xe9todo que devuelve un blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"// Pasa un puntero al blob como par\xe1metro a su propio m\xe9todo,\nCOMPUTE BLOB(->$myBlobVar)\n"})}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"Nota para los desarrolladores de plugins:"}),' un par\xe1metro BLOB se declara como "&O" (la letra "O", no el d\xedgito "0").']}),"\n",(0,l.jsx)(o.h2,{id:"asignar-una-variable-blob-a-otra",children:"Asignar una variable Blob a otra"}),"\n",(0,l.jsx)(o.p,{children:"Puede asignar una variable Blob a otra:"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"Ejemplo:"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"// Declarar dos variables de tipo Blob\n var $vBlobA; $vBlobB : Blob\n// Establecer el tama\xf1o del primer blob en 10K\n SET BLOB SIZE($vBlobA; 0*1024)\n// Asignar el primer blob al segundo\n $vBlobB:=$vBlobA\n"})}),"\n",(0,l.jsx)(o.h2,{id:"conversi\xf3n-autom\xe1tica-del-tipo-blob",children:"Conversi\xf3n autom\xe1tica del tipo blob"}),"\n",(0,l.jsx)(o.p,{children:"4D convierte autom\xe1ticamente los blobs escalares a objetos blob y viceversa, cuando se les asigna uno al otro. Por ejemplo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:'// Crear una variable de tipo Blob y una variable objeto\nvar $myBlob: Blob\nvar $myObject : Objeto\n\n// Asignar ese blob a una propiedad de $myObject llamada "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// El blob almacenado en $myBlob se convierte autom\xe1ticamente en un 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob) //True\n\n// Conversi\xf3n de un 4D.Blob en Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n'})}),"\n",(0,l.jsxs)(o.blockquote,{children:["\n",(0,l.jsxs)(o.p,{children:["Al convertir un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," a un blob escalar, si el tama\xf1o del ",(0,l.jsx)(o.code,{children:"4D.Blob"})," excede el tama\xf1o m\xe1ximo para los blobs escalares, el blob escalar resultante est\xe1 vac\xedo.\nPor ejemplo, cuando el tama\xf1o m\xe1ximo para los blobs escalares es 2GB, si convierte un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," de 2,5GB a un blob, obtiene un blob vac\xedo."]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"modificaci\xf3n-de-un-blob-escalar",children:"Modificaci\xf3n de un blob escalar"}),"\n",(0,l.jsx)(o.p,{children:"A diferencia de los objetos blob, se pueden modificar los blobs escalares. Por ejemplo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n"})}),"\n",(0,l.jsx)(o.h2,{id:"acceder-individualmente-a-los-bytes-de-un-blob",children:"Acceder individualmente a los bytes de un blob"}),"\n",(0,l.jsx)(o.h4,{id:"acceder-a-los-bytes-de-un-blob-escalar",children:"Acceder a los bytes de un blob escalar"}),"\n",(0,l.jsxs)(o.p,{children:["Puede acceder a los bytes individuales de un blob escalar utilizando las llaves ",(0,l.jsx)(o.code,{children:"{}"}),". Dentro de un blob, los bytes se numeran de 0 a N-1, donde N es el tama\xf1o del BLOB:"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"  // Declarar una variable de tipo Blob\n var $vBlob : Blob\n  // Establecer el tama\xf1o del blob en 256 bytes\n SET BLOB SIZE($vBlob; 56)\n  // El siguiente c\xf3digo hace un bucle a trav\xe9s del blob para inicializar cada byte en cero\n For(vByte; ;Tama\xf1o BLOB ($vBlob)-1)\n    $vBlob{vByte}:=0\n Fin por\n"})}),"\n",(0,l.jsx)(o.p,{children:"Como puede dirigir todos los bytes de un blob individualmente, puede almacenar lo que desee en una variable o un campo Blob."}),"\n",(0,l.jsxs)(o.h4,{id:"acceder-a-los-bytes-de-un-4dblob",children:["Acceder a los bytes de un ",(0,l.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,l.jsxs)(o.p,{children:["Utilice los corchetes ",(0,l.jsx)(o.code,{children:"[]"})," para acceder directamente a un byte espec\xedfico en un ",(0,l.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n'})}),"\n",(0,l.jsxs)(o.p,{children:["Dado que un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," no puede ser modificado, puede leer los bytes de un ",(0,l.jsx)(o.code,{children:"4D.Blob"})," utilizando esta sintaxis, pero no modificarlos."]})]})}function b(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>d});var l=n(296540);const a={},s=l.createContext(a);function r(e){const o=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:o},e.children)}}}]);