/*! For license information please see f83f366b.7cfe2c39.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7361],{71536:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(474848),s=n(28453);const r={id:"components",title:"Componentes"},c=void 0,l={id:"Concepts/components",title:"Componentes",description:"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes aplicaciones. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en aplicaciones 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/es/19/Concepts/components",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"components",title:"Componentes"},sidebar:"docs",previous:{title:"Modos interpretado y compilado",permalink:"/docs/es/19/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/es/19/Concepts/plug-ins"}},i={},d=[{value:"Presentaci\xf3n",id:"presentaci\xf3n",level:2},{value:"Definiciones",id:"definiciones",level:3},{value:"Principios",id:"principios",level:3},{value:"Alcance de los comandos del lenguaje",id:"alcance-de-los-comandos-del-lenguaje",level:2},{value:"Comandos no utilizables",id:"comandos-no-utilizables",level:3},{value:"Compartir m\xe9todos proyecto",id:"compartir-m\xe9todos-proyecto",level:2},{value:"Paso de variables",id:"paso-de-variables",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Acceso a las tablas del proyecto local",id:"acceso-a-las-tablas-del-proyecto-local",level:2},{value:"Uso de tablas y campos",id:"uso-de-tablas-y-campos",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Utilizaci\xf3n de formularios",id:"utilizaci\xf3n-de-formularios",level:2},{value:"Utilizaci\xf3n de recursos",id:"utilizaci\xf3n-de-recursos",level:2},{value:"Ejecuci\xf3n del c\xf3digo de inicializaci\xf3n",id:"ejecuci\xf3n-del-c\xf3digo-de-inicializaci\xf3n",level:2},{value:"Protecci\xf3n de los componentes: compilaci\xf3n",id:"protecci\xf3n-de-los-componentes-compilaci\xf3n",level:2}];function t(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes aplicaciones. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en aplicaciones 4D."}),"\n",(0,a.jsx)(o.h2,{id:"presentaci\xf3n",children:"Presentaci\xf3n"}),"\n",(0,a.jsx)(o.h3,{id:"definiciones",children:"Definiciones"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Base proyecto"}),": proyecto 4D utilizado para desarrollar el componente. El proyecto matriz es una base est\xe1ndar sin atributos espec\xedficos. Un proyecto matricial forma un \xfanico componente."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Proyecto local"}),": proyecto aplicaci\xf3n en la que se instala y utiliza un componente."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Componente"}),": proyecto matricial, compilado o no, copiado en la carpeta ",(0,a.jsx)(o.a,{href:"/docs/es/19/Project/architecture",children:(0,a.jsx)(o.code,{children:"Components"})})," de la aplicaci\xf3n local y cuyo contenido se utiliza en la aplicaci\xf3n local."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"principios",children:"Principios"}),"\n",(0,a.jsxs)(o.p,{children:["La creaci\xf3n e instalaci\xf3n de componentes 4D se realiza directamente desde 4D. B\xe1sicamente, los componentes se gestionan como ",(0,a.jsx)(o.a,{href:"/docs/es/19/Concepts/plug-ins",children:"plug-ins"})," seg\xfan los siguientes principios:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Un componente consiste en un archivo de proyecto 4D cl\xe1sico."}),"\n",(0,a.jsxs)(o.li,{children:["Para instalar un componente, basta con copiarlo en la carpeta ",(0,a.jsxs)(o.a,{href:"/docs/es/19/Project/architecture",children:[(0,a.jsx)(o.code,{children:"Components"})," del proyecto"]}),". Puede utilizar alias o atajos."]}),"\n",(0,a.jsx)(o.li,{children:'Un proyecto puede ser a la vez "matriz" y "local", es decir, que un proyecto matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por s\xed mismo.'}),"\n",(0,a.jsx)(o.li,{children:"Un componente puede llamar a la mayor\xeda de los elementos de 4D: m\xe9todos proyecto, formularios proyecto, barras de men\xfa, listas de selecci\xf3n, etc. No puede llamar a los m\xe9todos base ni a los triggers."}),"\n",(0,a.jsx)(o.li,{children:"No se pueden utilizar tablas o archivos de datos est\xe1ndar en los componentes 4D. Sin embargo, un componente puede crear y/o utilizar tablas, campos y archivos de datos utilizando mecanismos de bases externas. Se trata de bases 4D independientes con las que se trabaja utilizando comandos SQL."}),"\n",(0,a.jsx)(o.li,{children:"Un proyecto local que se ejecuta en modo interpretado puede utilizar componentes interpretados o compilados. Un proyecto local que se ejecuta en modo compilado no puede utilizar componentes interpretados. En este caso, s\xf3lo se pueden utilizar componentes compilados."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"alcance-de-los-comandos-del-lenguaje",children:"Alcance de los comandos del lenguaje"}),"\n",(0,a.jsxs)(o.p,{children:["A excepci\xf3n de los ",(0,a.jsx)(o.a,{href:"#comandos-inutilizables",children:"comandos no utilizables"}),", un componente puede utilizar cualquier comando del lenguaje 4D."]}),"\n",(0,a.jsxs)(o.p,{children:["Cuando se llaman comandos desde un componente, se ejecutan en el contexto del componente, excepto el comando ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD"})," o ",(0,a.jsx)(o.code,{children:"EXECUTE FORMULA"}),' que utilizan el contexto del m\xe9todo especificado por el comando. Tambi\xe9n hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leer\xe1n los usuarios y grupos del proyecto local (un componente no tiene sus propios usuarios y grupos).']}),"\n",(0,a.jsxs)(o.p,{children:["Los comandos ",(0,a.jsx)(o.code,{children:"SET DATABASE PARAMETER"})," y ",(0,a.jsx)(o.code,{children:"Get database parameter"})," son una excepci\xf3n: su alcance es global a la aplicaci\xf3n. Cuando estos comandos se llaman desde un componente, se aplican al proyecto de la aplicaci\xf3n local."]}),"\n",(0,a.jsxs)(o.p,{children:["Adem\xe1s, se han especificado medidas espec\xedficas para los comandos ",(0,a.jsx)(o.code,{children:"Structure file"})," y ",(0,a.jsx)(o.code,{children:"Get 4D folder"})," cuando se utilizan en el marco de los componentes."]}),"\n",(0,a.jsxs)(o.p,{children:["El comando ",(0,a.jsx)(o.code,{children:"COMPONENT LIST"})," puede utilizarse para obtener la lista de componentes cargados por el proyecto local."]}),"\n",(0,a.jsx)(o.h3,{id:"comandos-no-utilizables",children:"Comandos no utilizables"}),"\n",(0,a.jsx)(o.p,{children:'Los siguientes comandos no son compatibles para su uso dentro de un componente porque modifican el archivo de estructura - que est\xe1 abierto en s\xf3lo lectura. Su ejecuci\xf3n en un componente generar\xe1 el error -10511, "El comando NomComando no puede ser llamado desde un componente":'}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"ON EVENT CALL"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"Method called on event"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"SET PICTURE TO LIBRARY"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"REMOVE PICTURE FROM LIBRARY"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"SAVE LIST"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"ARRAY TO LIST"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"EDIT FORM"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"CREATE USER FORM"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"DELETE USER FORM"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"CHANGE PASSWORD"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"EDIT ACCESS"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"Set group properties"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"Set user properties"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"DELETE USER"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"CHANGE LICENSES"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"BLOB TO USERS"})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:"SET PLUGIN ACCESS"})}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["El comando ",(0,a.jsx)(o.code,{children:"Current form table"})," devuelve ",(0,a.jsx)(o.code,{children:"Nil"})," cuando se llama en el contexto de un formulario proyecto. Por consiguiente, no puede utilizarse en un componente."]}),"\n",(0,a.jsxs)(o.li,{children:["Los comandos SQL de definici\xf3n de datos (",(0,a.jsx)(o.code,{children:"CREATE TABLE"}),", ",(0,a.jsx)(o.code,{children:"DROP TABLE"}),", etc.) no pueden utilizarse en el proyecto componente. Sin embargo, se soportan con bases de datos externas (ver el comando SQL ",(0,a.jsx)(o.code,{children:"CREATE DATABASE"}),")."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"compartir-m\xe9todos-proyecto",children:"Compartir m\xe9todos proyecto"}),"\n",(0,a.jsx)(o.p,{children:"Todos los m\xe9todos proyecto de un proyecto matricial son por definici\xf3n incluidos en el componente (el proyecto es el componente), lo que significa que pueden ser llamados y ejecutados por el componente."}),"\n",(0,a.jsxs)(o.p,{children:["Por otro lado, por defecto estos m\xe9todos proyecto no ser\xe1n visibles, y no podr\xe1n ser llamados por el proyecto local. On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. Estos m\xe9todos forman los ",(0,a.jsx)(o.strong,{children:"puntos de entrada"})," en el componente."]}),"\n",(0,a.jsxs)(o.p,{children:["Por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar m\xe9todos proyecto que pertenezcan al proyecto local. En algunos casos, puede ser necesario permitir que un componente acceda a los m\xe9todos proyecto de su proyecto local. Para ello, debe designar expl\xedcitamente qu\xe9 m\xe9todos proyecto del proyecto local quiere hacer accesibles a los componentes (en las propiedades del m\xe9todo, marque la casilla ",(0,a.jsx)(o.strong,{children:"Compartido por componentes y proyecto local"}),")."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:n(622790).A+"",width:"592",height:"146"})}),"\n",(0,a.jsxs)(o.p,{children:["Una vez que los m\xe9todos del proyecto anfitri\xf3n est\xe1n disponibles para los componentes, se puede ejecutar un m\xe9todo anfitri\xf3n desde dentro de un componente utilizando los comandos ",(0,a.jsx)(o.code,{children:"EXECUTE FORMULA"})," o ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'// M\xe9todo local\ncomponent_method("host_method_name")\n'})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"// component_method\n C_TEXT($1)\n EXECUTE METHOD($1)\n"})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Una base local interpretada que contenga componentes interpretados puede ser compilada o verificada sint\xe1cticamente si no llama a m\xe9todos del componente interpretado. De lo contrario, aparecer\xe1 una caja de di\xe1logo de advertencia cuando intente iniciar la compilaci\xf3n o una comprobaci\xf3n de sintaxis y no ser\xe1 posible realizar la operaci\xf3n. Tenga en cuenta que un m\xe9todo interpretado puede llamar a un m\xe9todo compilado, pero no a la inversa, excepto mediante el uso de los comandos ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD"})," y ",(0,a.jsx)(o.code,{children:"EXECUTE FORMULA"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"paso-de-variables",children:"Paso de variables"}),"\n",(0,a.jsx)(o.p,{children:"Las variables locales, proceso e interproceso no se comparten entre los componentes y los proyectos locales. La \xfanica forma de modificar las variables del componente desde el proyecto local y viceversa es utilizando punteros."}),"\n",(0,a.jsx)(o.p,{children:"Ejemplo utilizando un array:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"//En el proyecto local: ARRAY INTEGER( MyArray;10)\n     AMethod(-> MyArray)\n\n//En el componente, el m\xe9todo proyecto AMethod contiene:\n     APPEND TO ARRAY($1->;2)\n"})}),"\n",(0,a.jsx)(o.p,{children:"Ejemplos utilizando variables:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"C_TEXT(myvariable)\ncomponent_method1(->myvariable)\n"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"C_POINTER($p)\n$p:=component_method2(...)\n"})}),"\n",(0,a.jsx)(o.p,{children:"Sin un puntero, un componente puede seguir accediendo al valor de una variable de la base local (pero no a la propia variable) y viceversa:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'//En la base local\nC_TEXT($input_t)\n$input_t:="DoSomething"\ncomponent_method($input_t)\n// component_method obtiene "DoSomething" en $1 (pero no la variable $input_t)\n'})}),"\n",(0,a.jsx)(o.p,{children:"Cuando se utilizan punteros para que los componentes y el proyecto local se comuniquen, hay que tener en cuenta las siguientes particularidades:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["El comando ",(0,a.jsx)(o.code,{children:"Get pointer"})," no devolver\xe1 un puntero a una variable del proyecto local si se llama desde un componente y viceversa."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"La arquitectura de componentes permite la coexistencia, dentro del mismo proyecto interpretado, de componentes interpretados y compilados (a la inversa, en un proyecto compilado s\xf3lo pueden utilizarse componentes compilados). Para utilizar punteros en este caso, debe respetar el siguiente principio: el int\xe9rprete puede desanclar un puntero construido en modo compilado; sin embargo, en modo compilado, no puede desanclar un puntero construido en modo interpretado. Ilustremos este principio con el siguiente ejemplo: dados dos componentes, C (compilado) e I (interpretado), instalados en el mismo proyecto local."}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Si el componente C define la variable ",(0,a.jsx)(o.code,{children:"myCvar"}),", el componente I puede acceder al valor de esta variable utilizando el puntero ",(0,a.jsx)(o.code,{children:"->myCvar"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Si el componente C define la variable ",(0,a.jsx)(o.code,{children:"myIvar"}),", el componente C no puede acceder a esta variable utilizando el puntero ",(0,a.jsx)(o.code,{children:"->myIvar"}),". Esta sintaxis provoca un error de ejecuci\xf3n."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["La comparaci\xf3n de punteros utilizando el comando ",(0,a.jsx)(o.code,{children:"RESOLVE POINTER"})," no se recomienda con los componentes, ya que el principio de partici\xf3n de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en el proyecto local (u otro componente). El tipo de la variable puede incluso ser diferente en ambos contextos. Si los punteros ",(0,a.jsx)(o.code,{children:"myptr1"})," y ",(0,a.jsx)(o.code,{children:"myptr2"})," apuntan cada uno a una variable, la siguiente comparaci\xf3n producir\xe1 un resultado incorrecto:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //Esta prueba devuelve True aunque las variables sean diferentes\n"})}),"\n",(0,a.jsx)(o.p,{children:"En este caso, es necesario utilizar la comparaci\xf3n de punteros:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"     If(myptr1=myptr2) //Esta prueba devuelve False\n"})}),"\n",(0,a.jsx)(o.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsxs)(o.p,{children:["Un ",(0,a.jsx)(o.a,{href:"/docs/es/19/Concepts/error-handling",children:"m\xe9todo de gesti\xf3n de errores"})," instalado por el comando ",(0,a.jsx)(o.code,{children:"ON ERR CALL"})," s\xf3lo se aplica a la aplicaci\xf3n en ejecuci\xf3n. En el caso de un error generado por un componente, no se llama al m\xe9todo de gesti\xf3n de errores ",(0,a.jsx)(o.code,{children:"ON ERR CALL"})," del proyecto local, y viceversa."]}),"\n",(0,a.jsx)(o.h2,{id:"acceso-a-las-tablas-del-proyecto-local",children:"Acceso a las tablas del proyecto local"}),"\n",(0,a.jsx)(o.p,{children:"Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que los proyectos locales y los componentes se comuniquen entre s\xed. Por ejemplo, este es un m\xe9todo que podr\xeda ser llamado desde un componente:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'// llamar a un m\xe9todo componente\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n'})}),"\n",(0,a.jsxs)(o.p,{children:["Dentro del componente, el c\xf3digo del m\xe9todo ",(0,a.jsx)(o.code,{children:"methCreateRec"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"C_POINTER($1) //Puntero a una tabla del proyecto local\nC_POINTER($2) //Puntero a un campo del proyecto local\nC_TEXT($3) // Valor a insertar\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n"})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"En el contexto de un componente, 4D asume que una referencia a un formulario tabla es una referencia al formulario tabla local (ya que los componentes no pueden tener tablas.)"}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"uso-de-tablas-y-campos",children:"Uso de tablas y campos"}),"\n",(0,a.jsxs)(o.p,{children:["Un componente no puede utilizar las tablas y campos definidos en la estructura 4D del proyecto matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos seg\xfan sus necesidades. Puede crear y gestionar bases externas utilizando SQL. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos seg\xfan sus necesidades. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL ",(0,a.jsx)(o.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(o.p,{children:"El siguiente c\xf3digo se incluye en un componente y realiza tres acciones b\xe1sicas con una base de datos externa:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"creaci\xf3n de la base de datos externa si a\xfan no existe,"}),"\n",(0,a.jsx)(o.li,{children:"a\xf1ade datos a la base de datos externa,"}),"\n",(0,a.jsx)(o.li,{children:"lectura de datos desde la base de datos externa."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Creaci\xf3n de la base de datos externa:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) almacena los datos en un directorio autorizado\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n'})}),"\n",(0,a.jsx)(o.p,{children:"Escritura en la base de datos externa:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" $Ptr_1:=$2 // recupera datos del proyecto local mediante punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,a.jsx)(o.p,{children:"Lectura en una base de datos externa:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" $Ptr_1:=$2 // accede a los datos del proyecto local a trav\xe9s de punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,a.jsx)(o.h2,{id:"utilizaci\xf3n-de-formularios",children:"Utilizaci\xf3n de formularios"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'S\xf3lo los "formularios de proyecto" (formularios que no est\xe1n asociados a ninguna tabla espec\xedfica) pueden utilizarse en un componente. S\xf3lo los "formularios de proyecto" (formularios que no est\xe1n asociados a ninguna tabla espec\xedfica) pueden utilizarse en un componente.'}),"\n",(0,a.jsx)(o.li,{children:"Un componente puede llamar a formularios tabla del proyecto local. Tenga en cuenta que en este caso es necesario utilizar punteros en lugar de nombres de tablas entre par\xe9ntesis [] para especificar los formularios en el c\xf3digo del componente."}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Si un componente utiliza el comando ",(0,a.jsx)(o.code,{children:"ADD RECORD"}),", se mostrar\xe1 el formulario de entrada actual del proyecto local, en el contexto del proyecto local. Por consiguiente, si el formulario incluye variables, el componente no tendr\xe1 acceso a ellas."]}),"\n"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Puede publicar formularios de componentes como subformularios en los proyectos locales. Esto significa que puede, m\xe1s concretamente, desarrollar componentes que ofrezcan objetos gr\xe1ficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes."}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["En el contexto de un componente, cualquier formulario de proyecto referenciado debe pertenecer al componente. Por ejemplo, dentro de un componente, hacer referencia a un formulario proyecto local utilizando ",(0,a.jsx)(o.code,{children:"DIALOG"})," u ",(0,a.jsx)(o.code,{children:"Open form window"})," arrojar\xe1 un error."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"utilizaci\xf3n-de-recursos",children:"Utilizaci\xf3n de recursos"}),"\n",(0,a.jsx)(o.p,{children:"Los componentes pueden utilizar recursos situados en la carpeta Resources del componente."}),"\n",(0,a.jsx)(o.p,{children:"Los mecanismos autom\xe1ticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente ser\xe1n cargados por este componente."}),"\n",(0,a.jsx)(o.p,{children:'En un proyecto local que contiene uno o m\xe1s componentes, cada componente, as\xed como los proyectos locales, tiene su propia "cadena de recursos." Los recursos est\xe1n divididos entre las diferentes proyectos: no es posible acceder a los recursos del componente A desde el componente B o desde el proyecto local.'}),"\n",(0,a.jsx)(o.h2,{id:"ejecuci\xf3n-del-c\xf3digo-de-inicializaci\xf3n",children:"Ejecuci\xf3n del c\xf3digo de inicializaci\xf3n"}),"\n",(0,a.jsx)(o.p,{children:"Un componente puede ejecutar autom\xe1ticamente c\xf3digo 4D al abrir o cerrar la base local, por ejemplo para cargar y/o guardar las preferencias o los estados usuario relacionados con el funcionamiento de la base local."}),"\n",(0,a.jsxs)(o.p,{children:["La ejecuci\xf3n del c\xf3digo de inicializaci\xf3n o cierre se realiza mediante el m\xe9todo base ",(0,a.jsx)(o.code,{children:"On Host Database Event"}),"."]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Por razones de seguridad, debe autorizar expl\xedcitamente la ejecuci\xf3n del m\xe9todo base ",(0,a.jsx)(o.code,{children:"On Host Database Event"})," en la base local para poder llamarlo. For security reasons, you must explicitly authorize the execution of the ",(0,a.jsx)(o.code,{children:"On Host Database Event"})," database method in the host database in order to be able to call it."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"protecci\xf3n-de-los-componentes-compilaci\xf3n",children:"Protecci\xf3n de los componentes: compilaci\xf3n"}),"\n",(0,a.jsx)(o.p,{children:"Por defecto, todos los m\xe9todos proyecto de un proyecto matriz instalado como componente son potencialmente visibles desde el proyecto local. En particular:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Los m\xe9todos proyecto compartido se encuentran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos del proyecto local. Su contenido puede ser seleccionado y copiado en el \xe1rea de vista previa del Explorador. Tambi\xe9n se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de m\xe9todos o modificarlos."}),"\n",(0,a.jsx)(o.li,{children:"Los otros m\xe9todos proyecto del proyecto matriz no aparecen en el Explorador, pero tambi\xe9n pueden verse en el depurador del proyecto local."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Para proteger eficazmente los m\xe9todos proyecto de un componente, basta con compilar el proyecto de la matriz y entregarlo en forma de archivo .4dz. Cuando se instala un proyecto matricial compilado como un componente:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Los m\xe9todos proyecto compartidos se muestran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos del proyecto local. Sin embargo, su contenido no aparecer\xe1 en el \xe1rea de vista previa ni en el depurador."}),"\n",(0,a.jsx)(o.li,{children:"Los otros m\xe9todos proyecto del proyecto matriz nunca aparecer\xe1n."}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},221020:(e,o,n)=>{var a=n(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,n){var a,r={},d=null,t=null;for(a in void 0!==n&&(d=""+n),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(t=o.ref),o)c.call(o,a)&&!i.hasOwnProperty(a)&&(r[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===r[a]&&(r[a]=o[a]);return{$$typeof:s,type:e,key:d,ref:t,props:r,_owner:l.current}}o.Fragment=r,o.jsx=d,o.jsxs=d},474848:(e,o,n)=>{e.exports=n(221020)},622790:(e,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>l});var a=n(296540);const s={},r=a.createContext(s);function c(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);