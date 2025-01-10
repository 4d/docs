"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53119"],{209213:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/open-resource-file","title":"Open resource file","description":"Open resource file ( resNomArchivo {; tipo} ) : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-resource-file.md","sourceDirName":"commands-legacy","slug":"/commands/open-resource-file","permalink":"/docs/es/commands/open-resource-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-resource-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-resource-file","title":"Open resource file","slug":"/commands/open-resource-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text resource","permalink":"/docs/es/commands/get-text-resource"},"next":{"title":"RESOURCE LIST","permalink":"/docs/es/commands/resource-list"}}'),a=s("785893"),n=s("250065");let i={id:"open-resource-file",title:"Open resource file",slug:"/commands/open-resource-file",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Open resource file"})," ( ",(0,a.jsx)(r.em,{children:"resNomArchivo"})," {; ",(0,a.jsx)(r.em,{children:"tipo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"resNomArchivo"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nombre o ruta de acceso completa del archivo de recursos o Cadena vac\xeda para mostrar la caja de di\xe1logo est\xe1ndar de apertura de archivos"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"tipo"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:'Tipo de archivo Mac OS (cadena de 4 caracteres) o extensi\xf3n del archivo Windows (cadena de 1 a 3 caracteres) o archivo de recursos ("res " / .RES) si se omite'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Time"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia del archivo de recursos"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["El comando ",(0,a.jsx)(r.strong,{children:"Open resource file"})," abre el archivo de recursos cuyo nombre o ruta de acceso completa se pasa en ",(0,a.jsx)(r.em,{children:"resNomArchivo"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Si pasa un nombre de archivo, el archivo debe estar ubicado en la misma carpeta que el archivo de estructura de la base. Para abrir un archivo de recursos ubicado en otra carpeta, pase una ruta de acceso completa."}),"\n",(0,a.jsxs)(r.p,{children:["Si pasa una cadena vac\xeda en ",(0,a.jsx)(r.em,{children:"resNomArchivo"}),", la caja de di\xe1logo est\xe1ndar de apertura de archivos aparece, permitiendo al usuario seleccionar el archivo a abrir. Si el usuario hace clic en Cancelar en esta caja de di\xe1logo, no se abre ning\xfan archivo de recursos; ",(0,a.jsx)(r.strong,{children:"Open resource file"})," devuelve un valor nulo en DocRef y la variable OK toma el valor 0."]}),"\n",(0,a.jsxs)(r.p,{children:["Si el archivo de recursos se abre correctamente, ",(0,a.jsx)(r.strong,{children:"Open resource file"})," devuelve su n\xfamero de referencia de archivo y la variable OK toma el valor 1. Si el archivo de recursos no existe o si el archivo que intenta abrir no es un archivo de recursos, se genera un error."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["En Macintosh, si utiliza la caja de di\xe1logo est\xe1ndar de apertura de archivos, todos los archivos se presentan por defecto. Para mostrar archivos de un tipo en particular, especifique el tipo del archivo en el par\xe1metro opcional ",(0,a.jsx)(r.em,{children:"tipoArchivo"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["En Windows, si utiliza la caja de di\xe1logo est\xe1ndar de apertura de archivos, todos los archivos se presentan por defecto. Para mostrar archivos de un tipo particular, pase en ",(0,a.jsx)(r.em,{children:"tipoArchivo"}),", una extensi\xf3n de archivo Windows de 1 a 3 caracteres o un tipo de archivo Macintosh asociado a una extensi\xf3n Windows utilizando el comando ",(0,a.jsx)(r.em,{children:"_o_MAP FILE TYPES"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Recuerde llamar ",(0,a.jsx)(r.a,{href:"/docs/es/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," para el archivo de recursos. Note, sin embargo, que 4D cierra autom\xe1ticamente todos los archivos de recursos abiertos utilizando ",(0,a.jsx)(r.strong,{children:"Open resource file"})," cuando sale de la aplicaci\xf3n o abre otra base de datos."]}),"\n",(0,a.jsxs)(r.p,{children:["A diferencia del comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/open-document",children:"Open document"}),", que abre por defecto un documento con un acceso exclusivo en lectura escritura, ",(0,a.jsx)(r.strong,{children:"Open resource file"})," permite abrir un archivo de recursos ya abierto desde la sesi\xf3n 4D. Por ejemplo, si trata de abrir el mismo documento dos veces con ",(0,a.jsx)(r.a,{href:"/docs/es/commands/open-document",children:"Open document"}),", un error de E/S ser\xe1 devuelto al segundo intento. Por otra parte, si trata de abrir un archivo de recursos ya abierto desde la sesi\xf3n 4D, ",(0,a.jsx)(r.strong,{children:"Open resource file"})," devolver\xe1 su n\xfamero de referencia. Incluso si abre un archivo de recursos varias veces, s\xf3lo necesita llamar ",(0,a.jsx)(r.a,{href:"/docs/es/commands/close-resource-file",children:"CLOSE RESOURCE FILE"})," una vez para cerrar ese archivo. Note que este funcionamiento es v\xe1lido s\xf3lo si el archivo de recursos est\xe1 abierto desde la sesi\xf3n 4D; si trata de abrir un archivo de recursos ya abierto por otra aplicaci\xf3n, obtendr\xe1 un error E/S."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Advertencia:"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Est\xe1 prohibido acceder a los archivos de recursos de las aplicaciones 4D y de las bases fusionadas con 4D Desktop."}),"\n",(0,a.jsxs)(r.li,{children:["Aunque es t\xe9cnicamente posible, no es recomendable utilizar el archivo de recursos de la estructura de la base porque su c\xf3digo no funcionar\xe1 si la base est\xe1 compilada y fusionada con 4D Desktop.",(0,a.jsx)(r.br,{}),"\nSin embargo, si accede al archivo de recursos de la estructura y quiere a\xf1adir, borrar o modificar los recursos por programaci\xf3n, aseg\xfarese de probar el entorno en el cual se ejecuta la base. Con 4D Server, esto probablemente llevar\xe1 a serios problemas. Por ejemplo, si modifica un recurso en el equipo del servidor (v\xeda un m\xe9todo de base de datos o un procedimiento almacenado), definitivamente afectar\xe1 el sistema de administraci\xf3n integrado de 4D Server que distribuye recursos (de manera transparente) a las estaciones de trabajo. Note que con 4D Client, usted no tiene acceso directo al archivo de estructura; est\xe1 ubicado en el equipo servidor."]}),"\n",(0,a.jsx)(r.li,{children:"Por todas estas razones, si utiliza los recursos, gu\xe1rdelos en sus propios archivos."}),"\n",(0,a.jsxs)(r.li,{children:["Cuando trabaje con sus propios recursos, NO utilice n\xfameros de recursos negativos; los n\xfameros negativos est\xe1n reservados para el sistema operativo. NO utilice n\xfameros de recursos entre 0 y 14 999; este rango est\xe1 reservado para 4D. Utilice el rango entre 15 000 y 32 767 para sus propios recursos. Recuerde que una vez haya abierto un archivo de recursos, ser\xe1 el primer archivo donde se buscar\xe1 en la cadena de archivos de recursos. Si guarda un recurso en ese archivo con un n\xfamero que pertenece a los rangos reservados para el sistema o para 4D, este recurso ser\xe1 utilizado no s\xf3lo por comandos como ",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-resource",children:"GET RESOURCE"}),"  si no tambi\xe9n por rutinas internas de la aplicaci\xf3n 4D. Este puede podr\xeda ser el resultado que usted quiere obtener, pero si no est\xe1 seguro, NO utilice estos rangos, ya que pueden producir errores del sistema."]}),"\n",(0,a.jsxs)(r.li,{children:["Un archivo de recursos es altamente estructurado y no puede aceptar m\xe1s de 2 700 recursos por archivo. Si quiere trabajar con archivos que contengan un gran n\xfamero de recursos, es recomendable probar ese n\xfamero antes de a\xf1adir nuevos recursos a un archivo. Consulte los ejemplos de ",(0,a.jsx)(r.em,{children:(0,a.jsx)(r.strong,{children:"Count resources"})})," en la descripci\xf3n del comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/resource-type-list",children:"RESOURCE TYPE LIST"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Una vez haya abierto una archivo de recursos, puede analizar su contenido utilizando los comandos ",(0,a.jsx)(r.a,{href:"/docs/es/commands/resource-type-list",children:"RESOURCE TYPE LIST"})," y ",(0,a.jsx)(r.a,{href:"/docs/es/commands/resource-list",children:"RESOURCE LIST"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo trata de abrir, en Windows, el archivo de recursos \u201CMyPrefs.res\u201D ubicado en la carpeta de la base:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("MisPrefs";"res ")\n'})}),"\n",(0,a.jsx)(r.p,{children:"En Macintosh, el ejemplo trata de abrir el archivo \u201CMisPrefs\u201D."}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo trata de abrir en Windows el archivo de recursos \u201CMisPrefs.rsr\u201D ubicado en la carpeta de la base:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("MisPrefs";"rsr")\n'})}),"\n",(0,a.jsx)(r.p,{children:"En Mac OS, el ejemplo tratar\xe1 de abrir el archivo \u201CMisPrefs\u201D."}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo muestra la caja de di\xe1logo est\xe1ndar de apertura de archivos, en la cual se muestran todos los tipos de documentos:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("")\n'})}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo muestra la caja de di\xe1logo est\xe1ndar de apertura de archivos, en la cual s\xf3lo se muestran los documentos creados con la ayuda de la funci\xf3n Create resource file, y que utilizan el tipo por defecto:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$vhResArchivo:=Open resource file("";"res ")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALERT("Acaba de abrir\u201C"+Document+"\u201D.")\n\xa0\xa0\xa0\xa0CLOSE RESOURCE FILE($vhResArchivo)\n\xa0End if\n'})}),"\n",(0,a.jsx)(r.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(r.p,{children:"Si el archivo de recursos se abre correctamente, la variable sistema OK toma el valor 1. Si el archivo de recursos no se pudo abrir o si el usuario hace clic en Cancelar en la caja de di\xe1logo est\xe1ndar de apertura de archivos, la variable OK toma el valor 0 (cero)."}),"\n",(0,a.jsx)(r.p,{children:"Si el archivo de recursos se abre correctamente utilizando la caja de di\xe1logo est\xe1ndar de apertura de archivos, la variable sistema Document contiene la ruta de acceso al archivo."}),"\n",(0,a.jsx)(r.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsxs)(r.p,{children:["Si el archivo de recursos no se pudo abrir por un problema del recurso o de E/S, se genera un error. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/commands/close-resource-file",children:"CLOSE RESOURCE FILE"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Recursos"})]}),"\n",(0,a.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"497"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modifica variables"}),(0,a.jsx)(r.td,{children:"OK, Document, error"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var o=s(667294);let a={},n=o.createContext(a);function i(e){let r=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);