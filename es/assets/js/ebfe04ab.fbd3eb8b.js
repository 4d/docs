"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42493"],{838071:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/xml-get-options","title":"XML GET OPTIONS","description":"XML GET OPTIONS ( refElement | document ; selector ; valor {; selector2 ; valor2 ; ... ; selectorN ; valorN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/xml-get-options.md","sourceDirName":"commands-legacy","slug":"/commands/xml-get-options","permalink":"/docs/es/20-R8/commands/xml-get-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-get-options.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"xml-get-options","title":"XML GET OPTIONS","slug":"/commands/xml-get-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML GET ERROR","permalink":"/docs/es/20-R8/commands/xml-get-error"},"next":{"title":"XML SET OPTIONS","permalink":"/docs/es/20-R8/commands/xml-set-options"}}'),r=s("785893"),o=s("250065");let i={id:"xml-get-options",title:"XML GET OPTIONS",slug:"/commands/xml-get-options",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",date:"date",duration:"duration",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"XML GET OPTIONS"})," ( refElement | document ; ",(0,r.jsx)(n.em,{children:"selector"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," {; ",(0,r.jsx)(n.em,{children:"selector2"})," ; ",(0,r.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"selectorN"})," ; ",(0,r.jsx)(n.em,{children:"valorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElement | document"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia del elemento XML ra\xedz o referenica del documento abierto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Opci\xf3n a leer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor actual de la opci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"XML GET OPTIONS"})," se utiliza para obtener el valor actual de uno o m\xe1s de los par\xe1metros XML definidos para la sesi\xf3n actual y el usuario actual."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"selector"}),", pase una de las constantes del tema ",(0,r.jsx)(n.em,{children:"XML"})," indicando la opci\xf3n a obtener. El valor actual de la opci\xf3n se devuelve en el par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML binary encoding"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:["Especifica la manera como se convierten los datos binarios. ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"}),(0,r.jsx)(n.br,{}),'XML Base64 (valor por defecto): los datos binarios se convierten simplemente en base64XML Data URI scheme: los datos binarios se convierten en base64 y se a\xf1ade el encabezado "data:;base64". Este formato permite principalmente a un navegador decodificar autom\xe1ticamente una imagen, y tambi\xe9n es necesario para insertar im\xe1genes . Para mayor informaci\xf3n, consulte ',(0,r.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme",children:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML BOM"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsxs)(n.td,{children:["Especifica si los documentos XML incluyen BOM.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"})," XML por defecto (por defecto): utiliza la configuraci\xf3n actual de la base. Por defecto, BOM no se incluye, excepto en las bases/proyectos creados con versiones hasta v19.x, donde BOM se incluye. Ver tambi\xe9n par\xe1metros de compatibilidad. XML activado: incluye BOM XML desactivado: no incluye BOM"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML date encoding"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Especifica la forma en que se convierten las fechas 4D. Por ejemplo, !01/01/2003! en la zona horaria de Paris.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"}),(0,r.jsx)(n.br,{}),'XML ISO (valor por defecto): uso del formato xs:datetime sin indicaci\xf3n de la zona horaria. Resultado: "2003-01-01". La parte hora, si est\xe1 presente en el valor 4D (v\xeda SQL) se pierde. XML Local: uso del formato xs:date con indicaci\xf3n de zona horaria. Resultado: "2003-01-01 +01:00". La parte hora, si est\xe1 presente en el valor 4D (v\xeda SQL) se pierde. XML Datetime local: uso del formato xs:dateTime (ISO 8601). Indicaci\xf3n de la zona horaria. Este formato permite conservar la parte hora, si est\xe1 presente en el valor 4D (v\xeda SQL). Resultado: "',(0,r.jsx)(n.date,{children:"2003-01-01T00:00:00 +01:00"}),'". XML UTC: uso del formato xs:date. Resultado: "2003-01-01Z". La parte hora, si est\xe1 presente en el valor 4D (v\xeda SQL) se pierde. XML Datetime UTC: uso del formato xs:dateTime (ISO 8601). Este formato permite conservar la parte hora, si est\xe1 presente en el valor 4D (v\xeda SQL). Resultado: "',(0,r.jsx)(n.date,{children:"2003-01-01T00:00:00Z"}),'".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML DOM case sensitivity"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsxs)(n.td,{children:["Especifica la sensibilidad a may\xfasculas y min\xfasculas con respecto a los nombres de los elementos de los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-get-xml-element",children:"DOM Get XML element"})," y ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-count-xml-elements",children:"DOM Count XML elements"}),".",(0,r.jsx)(n.br,{}),"Valores posibles:XML case sensitive (valor predeterminado): los comandos distinguen entre may\xfasculas y min\xfasculasXML case insensitive: los comandos no distinguen entre may\xfasculas y min\xfasculas."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML external entity resolution"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsxs)(n.td,{children:["Controla si las entidades externas est\xe1n definidas en documentos XML. Por razones de seguridad, por defecto, los analizadores XML DOM y SAX de 4D no permiten la resoluci\xf3n de entidades externas. Tenga en cuenta que el alcance de este selector es el proceso de llamada (si es apropiativo) o todos los procesos cooperativos (si se llama desde un proceso cooperativo). Se aplica globalmente a todos los documentos XML (el primer par\xe1metro se ignora, puede pasar una cadena vac\xeda).",(0,r.jsx)(n.br,{}),"**",(0,r.jsx)(n.br,{}),"Valores posibles:**XML enabled: permite la resoluci\xf3n de entidades externas en documentos XMLXML disabled (valor predeterminado): no permite la resoluci\xf3n de entidades externas (una declaraci\xf3n de entidad externa genera un error de an\xe1lisis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML indentation"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["Define la indentaci\xf3n del ",(0,r.jsx)(n.em,{children:"document"})," XML. ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"}),(0,r.jsx)(n.br,{}),"XML With indentation (valor por defecto): el documento est\xe1 indentado.XML No indentation: el documento no est\xe1 indentado; su contenido se ubica en una sola l\xednea."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML line ending"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsxs)(n.td,{children:["Caracteres de fin de l\xednea en documentos XML escritos.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"})," XML por defecto (por defecto): utiliza la configuraci\xf3n actual de la base. Por defecto es LF en macOS y CRLF en Windows. Sin embargo, en macOS, en las bases/proyectos creados con versiones de 4D hasta la v19.x, por defecto es CR para DOM y CRLF para SAX. Ver tambi\xe9n par\xe1metros de compatibilidad. XML LF: utiliza LF (salto de l\xednea) XML CR: utiliza CR (carriage return) XML CRLF: utiliza CR+LF"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML picture encoding"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:["Especifica la forma en la que las im\xe1genes deben convertirse (antes de codificar en base64).",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"}),(0,r.jsx)(n.br,{}),"XML Convert to PNG (valor por defecto): las im\xe1genes se convierten en PNG antes de ser codificadas en base64.XML Native codec: las im\xe1genes se convierten en su primer CODEC nativo de almacenamiento antes de ser codificadas en base64. Debe utilizar estas opciones para codificar im\xe1genes SVG (ver ejemplo del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/xml-set-options",title:"XML SET OPTIONS",children:"XML SET OPTIONS"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML string encoding"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Especifica la forma como las cadenas 4D se convierten en valores de elementos. No concierne a las conversiones en atributos para las cuales XML impone el uso de caracteres de escape.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valores posibles:"}),(0,r.jsx)(n.br,{}),"XML With escaping (valor por defecto): conversi\xf3n de las cadenas 4D en valores de elementos XML con reemplazo de caracteres. Los datos de tipo texto son analizados autom\xe1ticamente de manera que los caracteres prohibidos (<&>\u2019) son reemplazados por las entidades XML (&<> '\").XML Raw data: las cadenas 4D se env\xedan como datos brutos; 4D no efect\xfaa codificaci\xf3n ni an\xe1lisis. Los valores 4D se convierten si es posible en fragmentos XML y se insertan como hijo del elemento objetivo. Si un valor no puede considerarse como fragmento XML, se inserta en forma de dato bruto en un nuevo nodo CDATA."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML time encoding"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Define la forma como las horas 4D se convierten. Por ejemplo, ?02/00/46? (hora de Paris). La codificaci\xf3n difiere dependiendo de si quiere expresar una hora o una duraci\xf3n.",(0,r.jsx)(n.br,{})," ",(0,r.jsx)(n.strong,{children:"Valores posibles para las horas:"}),(0,r.jsx)(n.br,{}),' XML Datetime UTC: hora expresada en UTC (Universal Time Coordinated). Note que la conversi\xf3n a UTC es autom\xe1tica. Resultado: "',(0,r.jsx)(n.duration,{children:"0000-00-00T01:00:46Z"}),'". XML Datetime local: hora expresada con la diferencia horaria de la m\xe1quina del motor de 4D. Resultado: "',(0,r.jsx)(n.duration,{children:"0000-00-00T02:00:46+01:00"}),'". XML Datetime local absolute (valor por defecto): hora expresada sin indicaci\xf3n de la zona horaria. Sin modificaci\xf3n del valor. Resultado: "',(0,r.jsx)(n.duration,{children:"0000-00-00T02:00:46"}),'". ',(0,r.jsx)(n.strong,{children:"Valores posibles para las duraciones:"}),(0,r.jsx)(n.br,{}),'XML Seconds: n\xfamero de segundos desde la media noche; sin modificaci\xf3n del valor porque expresa una duraci\xf3n. Resultado: "',(0,r.jsx)(n.duration,{children:"7246"}),'". XML Duration: duraci\xf3n expresada conforme a XML Schema Part 2: Datatypes Second Edition. Sin modificaci\xf3n dle valor ya que expresa una duraci\xf3n. Resultado: "',(0,r.jsx)(n.duration,{children:"PT02H00M46S"}),'".']})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1096"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var a=s(667294);let r={},o=a.createContext(r);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);