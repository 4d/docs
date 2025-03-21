"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69161"],{130277:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/dom-parse-xml-source","title":"DOM Parse XML source","description":"DOM Parse XML source ( doc {; validacion {; dtd | esquema}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-parse-xml-source.md","sourceDirName":"commands-legacy","slug":"/commands/dom-parse-xml-source","permalink":"/docs/es/commands/dom-parse-xml-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-parse-xml-source.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-parse-xml-source","title":"DOM Parse XML source","slug":"/commands/dom-parse-xml-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Insert XML element","permalink":"/docs/es/commands/dom-insert-xml-element"},"next":{"title":"DOM Parse XML variable","permalink":"/docs/es/commands/dom-parse-xml-variable"}}'),s=r("785893"),o=r("250065");let d={id:"dom-parse-xml-source",title:"DOM Parse XML source",slug:"/commands/dom-parse-xml-source",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Parse XML source"})," ( ",(0,s.jsx)(n.em,{children:"doc"})," {; ",(0,s.jsx)(n.em,{children:"validacion"})," {; dtd | esquema}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"doc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta de acceso del documento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"validacion"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"True = Validaci\xf3n False = No validaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtd | esquema"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ubicaci\xf3n de la DTD o del esquema XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando DOM Parse XML source analiza un documento que contiene una estructura XML y devuelve una referencia para este documento. El comando puede validar o no el documento v\xeda una DTD o un esquema XML (documento XSD, XML Schema Definition)."}),"\n",(0,s.jsx)(n.p,{children:"El documento puede estar en el disco o en Internet/Intranet."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," la ejecuci\xf3n del comando ",(0,s.jsx)(n.strong,{children:"DOM Parse XML source"})," es s\xedncrona."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"documento"})," puede pasar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"una ruta de acceso completa est\xe1ndar (del tipo C:\\\\Carpeta\\\\Archivo\\\\... bajo Windows y MacintoshHD:Carpeta:Archivo bajo Mac OS),"}),"\n",(0,s.jsx)(n.li,{children:"o una ruta Unix bajo Mac OS (la cual debe comenzar por /)."}),"\n",(0,s.jsxs)(n.li,{children:["o una ruta red de tipo ",(0,s.jsx)(n.a,{href:"http://www.sitio.com/Archivo",children:"http://www.sitio.com/Archivo"})," o ftp://publico.ftp.com..."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro booleano ",(0,s.jsx)(n.em,{children:"validacion"})," permite indicar si validar o no la estructura."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"validacion"})," es igual a True, la estructura se validar\xe1. En este caso, el analizador intentar\xe1 validar la estructura XML del documento basado en la referencia DTD o el esquema XML incluida en el documento, o v\xeda la DTD o el esquema XML designado por el tercer par\xe1metro, si se pasa."]}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"validacion"})," es igual a False, la estructura no se validar\xe1."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa True en ",(0,s.jsx)(n.em,{children:"validacion"})," y omite el tercer par\xe1metro, el comando intentar\xe1 validar la estructura XML v\xeda una referencia DTD o XSD que se encuentra en la estructura misma. La validaci\xf3n puede ser indirecta: si la estructura contiene una referencia a un archivo DTD que contiene una referencia a un archivo XSD, el comando intentar\xe1 efectuar las dos validaciones.",(0,s.jsx)(n.br,{}),"\nEl tercer par\xe1metro permite designar una DTD espec\xedfica o un esquema XML para el an\xe1lisis del documento. Si utiliza este par\xe1metro, el comando no tendr\xe1 en cuenta la DTD referenciada en el documento XML."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Validaci\xf3n por DTD"})}),"\n",(0,s.jsx)(n.p,{children:"Hay dos formas de especificar una DTD:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Como una referencia. Para hacerlo, pase la ruta de acceso completa de la nueva DTD (extensi\xf3n \u201Cdtd\u201D) en el par\xe1metro ",(0,s.jsx)(n.em,{children:"dtd"}),". Si el documento indicado no contiene una DTD v\xe1lida, el par\xe1metro ",(0,s.jsx)(n.em,{children:"dtd"})," se ignora y se genera un error."]}),"\n",(0,s.jsx)(n.li,{children:"Directamente en un texto. En este caso, si los contenidos del par\xe1metro comienzan por \u201C<?xml\u201D, 4D considerar\xe1 que esa es la DTD; de lo contrario, 4D lo considerar\xe1 como una ruta de acceso."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Validaci\xf3n por esquema"}),(0,s.jsx)(n.br,{}),"\nPara validar el documento v\xeda un esquema XML, s\xf3lo necesita pasar en el tercer par\xe1metro un archivo o un URL de extensi\xf3n \u201Cxsd\u201D en lugar de un \u201Cdtd\u201D. La validaci\xf3n por esquema XML se considera m\xe1s flexible y poderosa que la validaci\xf3n por DTD. El lenguaje de los documentos XSD est\xe1 basado en el lenguaje XML. M\xe1s particularmente, los esquemas XML soportan tipos de datos. Para mayor informaci\xf3n sobre los esquemas XML, por favor consulte la siguiente direcci\xf3n: ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://www.w3.org/XML/Schema",children:"http://www.w3.org/XML/Schema"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la validaci\xf3n no se puede efectuar (no DTD o XSD, URL incorrecto, etc.), se genera un error. La variable sistema Error indica el n\xfamero del error. Puede interceptar este error utilizando un m\xe9todo instalado por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"El comando devuelve una cadena de 16 caracteres (RefElement) constituyendo la referencia en memoria de la estructura virtual del documento. Esta referencia debe utilizarse con los otros comandos de an\xe1lisis XML."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importante:"})," una vez no lo necesite, recuerde llamar al comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-close-xml",children:"DOM CLOSE XML"})," con esta referencia con el fin de liberar memoria."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Apertura sin validaci\xf3n de un documento XML en disco:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("C:\\\\importar.xml")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Apertura sin validaci\xf3n de un documento XML ubicado junto al archivo de estructura de la base:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("importar.xml")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Apertura de un documento XML ubicado en el disco y validaci\xf3n utilizando un DTD ubicado en el disco:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("C:\\\\importar.xml";True;"C:\\\\importar_dtd.xml")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Apertura sin validaci\xf3n de un documento XML ubicado en un URL espec\xedfico:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$xml_Ref_Estruct:=DOM Parse XML source("http://www.4DHispano.com/xml/importar.xml")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1. Si ocurre un error, toma el valor 0."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-parse-xml-variable",children:"DOM Parse XML variable"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"719"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var a=r(667294);let s={},o=a.createContext(s);function d(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);