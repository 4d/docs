"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56950"],{255680:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/json-resolve-pointers","title":"JSON Resolve pointers","description":"JSON Resolve pointers ( objeto {; opciones} ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-resolve-pointers.md","sourceDirName":"commands-legacy","slug":"/commands/json-resolve-pointers","permalink":"/docs/es/20-R8/commands/json-resolve-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-resolve-pointers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-resolve-pointers","title":"JSON Resolve pointers","slug":"/commands/json-resolve-pointers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON PARSE ARRAY","permalink":"/docs/es/20-R8/commands/json-parse-array"},"next":{"title":"JSON Stringify","permalink":"/docs/es/20-R8/commands/json-stringify"}}'),o=s("785893"),t=s("250065");let l={id:"json-resolve-pointers",title:"JSON Resolve pointers",slug:"/commands/json-resolve-pointers",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Definir punteros JSON",id:"definir-punteros-json",level:2},{value:"Recursividad y resoluci\xf3n de ruta",id:"recursividad-y-resoluci\xf3n-de-ruta",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"JSON Resolve pointers"})," ( ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"opciones"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Objeto que contiene punteros JSON para resolver"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Objeto con punteros JSON resueltos (s\xf3lo si resultado es un objeto)"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"opciones"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Opciones para la resoluci\xf3n de punteros"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Objeto que contiene el resultado del proceso"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"JSON Resolve pointers"})," resuelve todos los punteros JSON encontrados en el objeto, con respecto a la configuraci\xf3n de opciones (si existe)."]}),"\n",(0,o.jsx)(n.p,{children:"Los punteros JSON son particularmente \xfatiles para:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"anidar parte de un documento JSON externo o reutilizar una parte de un documento JSON en otros lugares en el mismo documento JSON, con el fin de factorizar la informaci\xf3n,"}),"\n",(0,o.jsx)(n.li,{children:"expresan una estructura c\xedclica en JSON,"}),"\n",(0,o.jsx)(n.li,{children:"definir un objeto de plantilla que contiene las propiedades predeterminadas almacenadas en JSON."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," un objeto que contiene punteros JSON que se deben resolver (para m\xe1s informaci\xf3n sobre la sintaxis del puntero JSON, consulte el p\xe1rrafo ",(0,o.jsx)(n.em,{children:"Definir punteros JSON"})," abajo)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el ",(0,o.jsx)(n.em,{children:"objeto"})," fuente se actualizar\xe1 con el resultado de la resoluci\xf3n del puntero despu\xe9s de ejecutar el comando (excepto si el resultado no es un objeto, consulte abajo). Si desea conservar una versi\xf3n original del objeto, puede considerar utilizar previamente ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/ob-copy",children:"OB Copy"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Opcionalmente, puede pasar en ",(0,o.jsx)(n.em,{children:"opciones"})," un objeto que contenga propiedades espec\xedficas que se utilizar\xe1n al resolver punteros. Se soportan las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Propiedad"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Tipo de valor"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rootFolder"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"Ruta absoluta (utilizando la sintaxis 4D est\xe1ndar) a la carpeta que se utilizar\xe1 para resolver punteros relativos en el objeto. El valor predeterminado es la carpeta Recursos de la base."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"merge"}),(0,o.jsx)(n.td,{children:"Booleano"}),(0,o.jsxs)(n.td,{children:["Fusiona objetos con objetos puntero (true) en lugar de reemplazarlos (false). El valor predeterminado es false ",(0,o.jsx)(n.img,{src:s(355600).Z+"",width:"769",height:"322"})]})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de ejecutar el comando:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["si el resultado de la resoluci\xf3n del puntero es un objeto, el ",(0,o.jsx)(n.em,{children:"objeto"})," se actualiza y contiene el objeto resultante."]}),"\n",(0,o.jsx)(n.li,{children:'si el resultado de la resoluci\xf3n del puntero es un valor escalar (es decir, un texto, un n\xfamero...), el objeto se deja intacto y el valor resultante se devuelve en la propiedad "valor" del resultado de la funci\xf3n.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"En todos los casos, el comando devuelve un objeto que contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Propiedad"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Tipo de valor"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"value"}),(0,o.jsx)(n.td,{children:"Cualquiera"}),(0,o.jsxs)(n.td,{children:["Resultado del procesamiento del comando en ",(0,o.jsx)(n.em,{children:"objeto"}),". Si el resultado es un objeto, es igual al ",(0,o.jsx)(n.em,{children:"objeto"})," de salida."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"success"}),(0,o.jsx)(n.td,{children:"Booleano"}),(0,o.jsx)(n.td,{children:"true si todos los punteros han sido resueltos correctamen"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"errors"}),(0,o.jsx)(n.td,{children:"Colecci\xf3n"}),(0,o.jsx)(n.td,{children:"Colecci\xf3n de errores si los hay"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"errors[].code"}),(0,o.jsx)(n.td,{children:"N\xfamero"}),(0,o.jsx)(n.td,{children:"c\xf3digo del error"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"errors[].message"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"mensaje de error"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"errors[].pointerURI"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"valor del puntero"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"errors[].referredPath"}),(0,o.jsx)(n.td,{children:"Cadena"}),(0,o.jsx)(n.td,{children:"ruta completa del documento"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"definir-punteros-json",children:"Definir punteros JSON"}),"\n",(0,o.jsxs)(n.p,{children:["JSON Pointer es un est\xe1ndar que define una sintaxis de cadena que se puede utilizar para acceder a un campo o a un valor clave particular en todo el documento JSON. El est\xe1ndar se ha descrito en ",(0,o.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"RFC 6901"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'Un puntero JSON es, estrictamente hablando, una cadena compuesta de partes separadas por \'/\'. Un puntero JSON normalmente se encuentra en un URI que especifica el documento en el que se resolver\xe1 el puntero. El car\xe1cter de fragmento "#" se utiliza en la URI para especificar el puntero JSON Por convenci\xf3n, se puede encontrar un URI que contenga un puntero JSON en una propiedad de objeto JSON que debe llamarse "$ ref".'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0 "$ref":<path>#<json_pointer>\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),': 4D no soporta el car\xe1cter "-" como referencia a elementos de array inexistentes.']}),"\n",(0,o.jsx)(n.h3,{id:"recursividad-y-resoluci\xf3n-de-ruta",children:"Recursividad y resoluci\xf3n de ruta"}),"\n",(0,o.jsx)(n.p,{children:"Los punteros JSON se resuelven recursivamente, lo que significa que si un puntero resuelto tambi\xe9n contiene punteros, se resuelven recursivamente y as\xed sucesivamente, hasta que se resuelvan todos los punteros. En este contexto, todas las rutas de archivo encontradas en las URIs de puntero JSON pueden ser relativas o absolutas. Deben utilizar '/' como delimitador de ruta y se resuelven de la siguiente manera:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Una ruta relativa no debe comenzar con '/'. Se resuelve relativamente al documento JSON donde se ha encontrado la cadena de ruta de acceso,"}),"\n",(0,o.jsxs)(n.li,{children:["Una ruta absoluta comienza con '/'. Solo las ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/Concepts/paths#filesystem-pathnames",children:"rutas filesystem"}),' se aceptan como rutas absolutas. Por ejemplo, "/RESOURCES/templates/myfile.json" apunta al archivo "myfile.json" que se encuentra en la carpeta de recursos de la base de datos actual.']}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La resoluci\xf3n del nombre distingue entre may\xfasculas y min\xfasculas."}),"\n",(0,o.jsx)(n.li,{children:'4D no resuelve una ruta a un archivo json ubicado en la red (que empiece por "http/https").'}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo b\xe1sico ilustra c\xf3mo un puntero JSON se puede definir y reemplazar en un objeto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// crear un objeto con alg\xfan valor\n\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0\n\xa0\xa0// crear el objeto puntero JSON\n\xa0var $ref : Object\n\xa0$ref:=New object("$ref";"#/value")\n\xa0\n\xa0\xa0// a\xf1adir el objeto puntero JSON como propiedad\n\xa0$o.myJSONPointer:=$ref\n\xa0\n\xa0\xa0// resolverlo todo y verificar que el puntero se ha resuelto\n\xa0var $result : Object\n\xa0$options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)\n\xa0$result:=JSON Resolve pointers($o;$options)\n\xa0If($result.success)\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.value))\n\xa0\xa0//{"value":42,"myJSONPointer":42}\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.errors))\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:'Usted quiere reutilizar "billingAddress" como "shippingAddress" en el siguiente objeto JSON (llamado $oMyConfig):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0 "billingAddress": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0 },\n\xa0\xa0\xa0 "shippingAddress": { "$ref": "#/billingAddress" }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de ejecutar este c\xf3digo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0$oResult:=JSON Resolve pointers($oMyConfig)\n"})}),"\n",(0,o.jsx)(n.p,{children:"... se devuelve el siguiente objeto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "billingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "shippingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:'Este ejemplo ilustra el efecto de la opci\xf3n "fusionar". Usted desea editar los derechos de un usuario bas\xe1ndose en un archivo predeterminado.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "rights": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "$ref": "defaultSettings.json#/defaultRights",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["El archivo ",(0,o.jsx)(n.em,{children:"defaultSettings.json"})," contiene:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "defaultRights":\n\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Si ejecuta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";False)\xa0//reemplazar contenidos\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["el valor resultante es exactamente el contenido del archivo ",(0,o.jsx)(n.em,{children:"defaultSettings.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Si ejecuta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";True)\xa0//fusionar ambos contenidos\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,o.jsx)(n.p,{children:"...el valor resultante es una versi\xf3n modificada del objeto original:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1478"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},355600:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict3516702.es-cb064ec14e9d4dfe520c789afa171666.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let o={},t=r.createContext(o);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);