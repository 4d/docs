"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23445"],{24999:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>i,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/process-4d-tags","title":"PROCESS 4D TAGS","description":"PROCESS 4D TAGS ( plantillaEntrada ; datosSalida {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/process-4d-tags.md","sourceDirName":"commands-legacy","slug":"/commands/process-4d-tags","permalink":"/docs/es/commands/process-4d-tags","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-4d-tags.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-4d-tags","title":"PROCESS 4D TAGS","slug":"/commands/process-4d-tags","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN URL","permalink":"/docs/es/commands/open-url"},"next":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/es/commands/set-environment-variable"}}'),t=a("785893"),r=a("250065");let o={id:"process-4d-tags",title:"PROCESS 4D TAGS",slug:"/commands/process-4d-tags",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," ( ",(0,t.jsx)(n.em,{children:"plantillaEntrada"})," ; ",(0,t.jsx)(n.em,{children:"datosSalida"})," {; ",(0,t.jsx)(n.em,{children:"param"}),"}{; ",(0,t.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"plantillaEntrada"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Datos que contiene las etiquetas a tratar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datosSalida"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Datos procesados"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Par\xe1metros pasados a la plantilla en ejecuci\xf3n"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," provoca el procesamiento de las etiquetas de transformaci\xf3n 4D contenidas en el par\xe1metro ",(0,t.jsx)(n.em,{children:"plantillaEntrada"})," mientras opcionalmente inserta valores utilizando los valores v\xeda los par\xe1metros ",(0,t.jsx)(n.em,{children:"param"})," y devuelve los datos resultantes en ",(0,t.jsx)(n.em,{children:"datosSalida"}),".Para una descripci\xf3n completa de estas etiquetas, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Etiquetas de transformaci\xf3n 4D"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'Este comando permite ejecutar un texto de tipo "template" que contiene las etiquetas y las referencias a las expresiones o variables 4D y produce un resultado dependiendo del contexto de ejecuci\xf3n y/o de los valores pasados en par\xe1metro.'}),"\n",(0,t.jsxs)(n.p,{children:["Por ejemplo, puede utilizar este comando para generar y guardar las p\xe1ginas HTML basadas en ",(0,t.jsx)(n.strong,{children:"p\xe1ginas"})," ",(0,t.jsx)(n.strong,{children:"semi-din\xe1micas"})," que contienen las etiquetas de transformaci\xf3n 4D (sin que sea necesario que el servidor Web de 4D se inicie). Puede utilizarlas para enviar mensajes de correo electr\xf3nico en formato HTML que contengan procesamientos y/o referencias a los datos contenidos en la base a trav\xe9s de 4D Internet Commands. Es posible procesar cualquier tipo de datos basados \u200B\u200Ben texto, tales como XML, SVG o texto multi-estilo."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase los datos que contienen las etiquetas a procesar en el par\xe1metro ",(0,t.jsx)(n.em,{children:"plantillaEntrada"}),". Este par\xe1metro puede ser un campo o una variable de tipo Texto."]}),"\n",(0,t.jsxs)(n.p,{children:["Todas las etiquetas de transformaci\xf3n de 4D son soportadas (",(0,t.jsx)(n.em,{children:"4DTEXT"}),", ",(0,t.jsx)(n.em,{children:"4DHTML"}),", ",(0,t.jsx)(n.em,{children:"4DSCRIPT"}),", ",(0,t.jsx)(n.em,{children:"4DLOOP"}),", ",(0,t.jsx)(n.em,{children:"4DEVAL,"})," etc.),"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en caso de utilizar la etiqueta ",(0,t.jsx)(n.em,{children:"4DINCLUDE"})," fuera del marco del servidor web (proceso web):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Con 4D en modo local o 4D Server, la carpeta por defecto es la carpeta que contiene el archivo de estructura de la base,"}),"\n",(0,t.jsx)(n.li,{children:"Con 4D en modo remoto, la carpeta por defecto es la carpeta que contiene la aplicaci\xf3n 4D."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"PROCESS 4D TAGS"})," soporta un n\xfamero indefinido de par\xe1metros ",(0,t.jsx)(n.em,{children:"param"})," que se pueden insertar en el c\xf3digo que se ejecuta. Al igual que con los m\xe9todos proyecto, dichos par\xe1metros pueden contener valores escalares de tipos variados (texto, fecha, hora, entero largo, real, etc), as\xed como tambi\xe9n objetos o colecciones. Tambi\xe9n puede utilizar los arrays, por intermedio de punteros de arrays. Dentro del c\xf3digo procesado por las etiquetas 4D, estos par\xe1metros son accesibles por medio de argumentos est\xe1ndar ($1, $2, etc.), al igual que en los m\xe9todos 4D (ver ejemplo).",(0,t.jsx)(n.br,{}),"\nUn conjunto dedicado de variables locales se define en el contexto de ejecuci\xf3n del comando ",(0,t.jsx)(n.strong,{children:"PROCESS 4D TAGS"}),". Estas variables pueden ser escritas o le\xeddas durante el procesamiento."]}),"\n",(0,t.jsxs)(n.p,{children:["Despu\xe9s de la ejecuci\xf3n del comando, el par\xe1metro ",(0,t.jsx)(n.em,{children:"datosSalida"})," recibe el resultado de la ejecuci\xf3n del par\xe1metro ",(0,t.jsx)(n.em,{children:"plantillaEntrada"}),", junto con el resultado del proceso de las etiquetas 4D que contiene, cuando aplica. Si ",(0,t.jsx)(n.em,{children:"datosEntrada"})," no contiene las etiquetas 4D o produce una cadena vac\xeda, el contenido de ",(0,t.jsx)(n.em,{children:"datosSalida"})," es id\xe9ntico al de ",(0,t.jsx)(n.em,{children:"plantillaEntrada"}),".",(0,t.jsx)(n.br,{}),"\nEl par\xe1metro ",(0,t.jsx)(n.em,{children:"datosSalida"})," puede ser un campo o una variable de tipo Texto."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": este comando nunca llama al ",(0,t.jsx)(n.a,{href:"metodo-base-on-web-authentication.md",children:"M\xe9todo base On Web Authentication"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:'Este ejemplo carga un documento de tipo "plantilla", procesa las etiquetas que contiene y luego lo almacena:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $inputText_t : Text\n\xa0var $outputText_t : Text\n\xa0\n\xa0$inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)\n\xa0PROCESS 4D TAGS($inputText_t;$outputText_t)\n\xa0TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo genera un texto utilizando los datos de los arrays:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($array;2)\n\xa0$array{1}:="hello"\n\xa0$array{2}:="world"\n\xa0$input:=""\n\xa0$input:=$input+""\n\xa0$input:=$input+" "\n\xa0$input:=$input+""\n\xa0PROCESS 4D TAGS($input;$output;"elements = ";->$array)\n\xa0\xa0// $output = "elements = hello world"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Etiquetas de transformaci\xf3n 4D"})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return o}});var s=a(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);