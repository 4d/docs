/*! For license information please see ff9b6090.b64c4c89.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70039],{448141:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(474848),i=a(28453);const o={id:"templates",title:"P\xe1ginas de plantillas"},t=void 0,r={id:"WebServer/templates",title:"P\xe1ginas de plantillas",description:"El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante etiquetas de transformaci\xf3n como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (``) en el c\xf3digo fuente HTML.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/es/20-R5/WebServer/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"templates",title:"P\xe1ginas de plantillas"},sidebar:"docs",previous:{title:"Desarrollo web",permalink:"/docs/es/20-R5/WebServer/gettingStarted"},next:{title:"Procesamiento de peticiones HTTP",permalink:"/docs/es/20-R5/WebServer/httpRequests"}},d={},c=[{value:"Etiquetas para las plantillas",id:"etiquetas-para-las-plantillas",level:2},{value:"An\xe1lisis de etiquetas",id:"an\xe1lisis-de-etiquetas",level:2},{value:"Acceso a los m\xe9todos 4D a trav\xe9s de la web",id:"acceso-a-los-m\xe9todos-4d-a-trav\xe9s-de-la-web",level:2},{value:"Prevenci\xf3n de la inserci\xf3n de c\xf3digos maliciosos",id:"prevenci\xf3n-de-la-inserci\xf3n-de-c\xf3digos-maliciosos",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Tags/transformation-tags",children:"etiquetas de transformaci\xf3n"})," como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (",(0,s.jsx)(n.code,{children:"\x3c!--#4DTagName TagValue--\x3e"}),") en el c\xf3digo fuente HTML."]}),"\n",(0,s.jsx)(n.p,{children:"Cuando estas p\xe1ginas son enviadas por el servidor HTTP, son analizadas y las etiquetas que contienen son ejecutadas y sustituidas por los datos resultantes. Las p\xe1ginas que reciben los navegadores son una combinaci\xf3n de elementos est\xe1ticos y valores procedentes del procesamiento 4D."}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, si se escribe en una p\xe1gina HTML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<P>Bienvenido a \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["El valor de la variable 4D ",(0,s.jsx)(n.em,{children:"vtSiteName"})," se insertar\xe1 en la p\xe1gina HTML."]}),"\n",(0,s.jsx)(n.h2,{id:"etiquetas-para-las-plantillas",children:"Etiquetas para las plantillas"}),"\n",(0,s.jsx)(n.p,{children:"Las siguientes etiquetas 4D est\xe1n disponibles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4DTEXT, para insertar variables y expresiones 4D como texto,"}),"\n",(0,s.jsx)(n.li,{children:"4DHTML, para insertar el c\xf3digo HTML,"}),"\n",(0,s.jsx)(n.li,{children:"4DEVAL, para evaluar toda expresi\xf3n 4D,"}),"\n",(0,s.jsx)(n.li,{children:"4DSCRIPT, para ejecutar un m\xe9todo 4D,"}),"\n",(0,s.jsx)(n.li,{children:"4DINCLUDE, para incluir una p\xe1gina dentro de otra,"}),"\n",(0,s.jsx)(n.li,{children:"4DBASE, para modificar la carpeta por defecto utilizada por la etiqueta 4DINCLUDE,"}),"\n",(0,s.jsx)(n.li,{children:"4DCODE, para insertar el c\xf3digo 4D,"}),"\n",(0,s.jsx)(n.li,{children:"4DIF, 4DELSE, 4DELSEIF y 4DENDIF, para insertar condiciones en el c\xf3digo HTML,"}),"\n",(0,s.jsx)(n.li,{children:"4DLOOP y 4DENDLOOP, para hacer bucles en el c\xf3digo HTML,"}),"\n",(0,s.jsx)(n.li,{children:"4DEACH y 4DENDEACH, para hacer bucles en colecciones, selecciones de entidades o propiedades de objetos."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Estas etiquetas se describen en la p\xe1gina ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Tags/transformation-tags",children:"Etiquetas de transformaci\xf3n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Es posible combinar etiquetas. Por ejemplo, el siguiente c\xf3digo HTML es permitido:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n \n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"an\xe1lisis-de-etiquetas",children:"An\xe1lisis de etiquetas"}),"\n",(0,s.jsx)(n.p,{children:'Por razones de optimizaci\xf3n, el servidor web de 4D no realiza el an\xe1lisis del c\xf3digo fuente HTML cuando se llama a las p\xe1ginas HTML utilizando URLs simples con el sufijo ".HTML" o ".HTM".'}),"\n",(0,s.jsxs)(n.p,{children:["El an\xe1lisis del contenido de las p\xe1ginas plantillas enviadas por el servidor web de 4D tiene lugar cuando se llaman los comandos ",(0,s.jsx)(n.code,{children:"WEB SEND FILE"})," (.htm, .html, .shtm, .shtml), ",(0,s.jsx)(n.code,{children:"WEB SEND BLOB"})," (text/html type BLOB) o ",(0,s.jsx)(n.code,{children:"WEB SEND TEXT"}),', as\xed como cuando se env\xed En este \xfaltimo caso, por razones de optimizaci\xf3n, las p\xe1ginas con sufijo ".htm" y ".html" NO se analizan. Para "forzar" el an\xe1lisis de las p\xe1ginas HTML en este caso, debe a\xf1adir el sufijo ".shtm" o ".shtml" (por ejemplo, ',(0,s.jsx)(n.code,{children:"http://www.server.com/dir/page.shtm"}),"). Un ejemplo del uso de este tipo de p\xe1gina se da en la descripci\xf3n del comando ",(0,s.jsx)(n.code,{children:"WEB GET STATISTICS"}),". Las p\xe1ginas XML (.xml, .xsl) tambi\xe9n son compatibles y siempre son analizadas por 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n puede llevar a cabo el an\xe1lisis sint\xe1ctico fuera del contexto web cuando utilice el comando ",(0,s.jsx)(n.code,{children:"PROCESS 4D TAGS"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Internamente, el analizador funciona con cadenas UTF-16, pero los datos a analizar pueden haber sido codificados de forma diferente. Cuando las etiquetas contienen texto (por ejemplo ",(0,s.jsx)(n.code,{children:"4DHTML"}),"), 4D convierte los datos cuando es necesario dependiendo de su origen y de la informaci\xf3n disponible (charset). A continuaci\xf3n se muestran los casos en los que 4D analiza las etiquetas contenidas en las p\xe1ginas HTML, as\xed como las conversiones realizadas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Acci\xf3n / Comando"}),(0,s.jsx)(n.th,{children:"An\xe1lisis del contenido de las p\xe1ginas enviadas"}),(0,s.jsx)(n.th,{children:"Soporte de la sintaxis $(*)"}),(0,s.jsx)(n.th,{children:"Conjunto de caracteres utilizados para el an\xe1lisis sint\xe1ctico de las etiquetas"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"P\xe1ginas llamadas a trav\xe9s de URLs"}),(0,s.jsx)(n.td,{children:'X, excepto las p\xe1ginas con extensiones ".htm" o ".html"'}),(0,s.jsx)(n.td,{children:'X, excepto las p\xe1ginas con extensiones ".htm" o ".html"'}),(0,s.jsx)(n.td,{children:'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND FILE"})}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND TEXT"})}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"No es necesaria la conversi\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND BLOB"})}),(0,s.jsx)(n.td,{children:'X, si el BLOB es de tipo "text/html'}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:'Uso del conjunto de caracteres definido en el encabezado "Content-Type" de la respuesta. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Inclusi\xf3n por la etiqueta ",(0,s.jsx)(n.code,{children:"\x3c!--#4DINCLUDE--\x3e"})]}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PROCESS 4D TAGS"})}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"X"}),(0,s.jsx)(n.td,{children:"Datos de texto: no hay conversi\xf3n. Datos BLOB: conversi\xf3n autom\xe1tica del conjunto de caracteres Mac-Roman por compatibilidad"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"(*) La sintaxis alternativa basada en $ est\xe1 disponible para las etiquetas 4DHTML, 4DTEXT y 4DEVAL."}),"\n",(0,s.jsx)(n.h2,{id:"acceso-a-los-m\xe9todos-4d-a-trav\xe9s-de-la-web",children:"Acceso a los m\xe9todos 4D a trav\xe9s de la web"}),"\n",(0,s.jsxs)(n.p,{children:["Executing a 4D method with ",(0,s.jsx)(n.code,{children:"4DEACH"}),", ",(0,s.jsx)(n.code,{children:"4DELSEIF"}),", ",(0,s.jsx)(n.code,{children:"4DEVAL"}),", ",(0,s.jsx)(n.code,{children:"4DHTML"}),", ",(0,s.jsx)(n.code,{children:"4DIF"}),", ",(0,s.jsx)(n.code,{children:"4DLOOP"}),", ",(0,s.jsx)(n.code,{children:"4DSCRIPT"}),", or ",(0,s.jsx)(n.code,{children:"4DTEXT"})," from a web request is subject to the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/WebServer/allowProject",children:"Available through 4D tags and URLs (4DACTION...)"})," attribute value defined in the properties of the method. Si no se comprueba el atributo para el m\xe9todo, \xe9ste no puede ser llamado desde una petici\xf3n web."]}),"\n",(0,s.jsx)(n.h2,{id:"prevenci\xf3n-de-la-inserci\xf3n-de-c\xf3digos-maliciosos",children:"Prevenci\xf3n de la inserci\xf3n de c\xf3digos maliciosos"}),"\n",(0,s.jsx)(n.p,{children:"Las etiquetas 4D aceptan diferentes tipos de datos como par\xe1metros: texto, variables, m\xe9todos, nombres de comandos, etc. Cuando estos datos son proporcionados por su propio c\xf3digo, no hay riesgo de inserci\xf3n de c\xf3digo malicioso ya que usted controla la entrada. Sin embargo, el c\xf3digo de su base de datos suele trabajar con datos que, en un momento u otro, fueron introducidos a trav\xe9s de una fuente externa (entrada del usuario, importaci\xf3n, etc.)."}),"\n",(0,s.jsxs)(n.p,{children:["En este caso, es aconsejable ",(0,s.jsx)(n.strong,{children:"no utilizar"})," etiquetas como ",(0,s.jsx)(n.code,{children:"4DEVAL"})," o ",(0,s.jsx)(n.code,{children:"4DSCRIPT"}),", que eval\xfaan par\xe1metros, directamente con este tipo de datos."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, according to the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Tags/transformation-tags#recursive-processing",children:"principle of recursion"}),", malicious code may itself include transformation tags. En este caso, es imprescindible utilizar la etiqueta ",(0,s.jsx)(n.code,{children:"4DTEXT"}),'. Imagine, por ejemplo, un campo de formulario web llamado "Name", donde los usuarios deben introducir su nombre. Este nombre se muestra mediante una etiqueta ',(0,s.jsx)(n.code,{children:"\x3c!--#4DHTML vName--\x3e"}),' en la p\xe1gina. Si se inserta un texto del tipo "\x3c!--#4DEVAL QUIT 4D--\x3e" en lugar del nombre, la interpretaci\xf3n de esta etiqueta provocar\xe1 la salida de la aplicaci\xf3n. Para evitar este riesgo, basta con utilizar sistem\xe1ticamente la etiqueta ',(0,s.jsx)(n.code,{children:"4DTEXT"}),' en este caso. Como esta etiqueta escapa a los caracteres especiales de HTML, cualquier c\xf3digo recursivo malicioso que pueda haberse insertado no ser\xe1 reinterpretado. To refer to the previous example, the "Name" field will contain, in this case, "',(0,s.jsx)(n.code,{children:"&lt;!--#4DEVAL QUIT 4D--&gt;"}),'" which will not be transformed.']})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,a)=>{var s=a(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,o={},c=null,l=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,s)&&!d.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var s=a(296540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);