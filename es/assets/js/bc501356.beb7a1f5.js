"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97611"],{196903:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/web-service-set-parameter","title":"WEB SERVICE SET PARAMETER","description":"WEB SERVICE SET PARAMETER ( nombre ; valor {; tipoSOAP} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-set-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-set-parameter","permalink":"/docs/es/20-R7/commands/web-service-set-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-set-parameter","title":"WEB SERVICE SET PARAMETER","slug":"/commands/web-service-set-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE SET OPTION","permalink":"/docs/es/20-R7/commands/web-service-set-option"},"next":{"title":"Web Services (Server)","permalink":"/docs/es/20-R7/commands/theme/Web-Services-Server"}}'),d=r("785893"),i=r("250065");let t={id:"web-service-set-parameter",title:"WEB SERVICE SET PARAMETER",slug:"/commands/web-service-set-parameter",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB SERVICE SET PARAMETER"})," ( ",(0,d.jsx)(n.em,{children:"nombre"})," ; ",(0,d.jsx)(n.em,{children:"valor"})," {; ",(0,d.jsx)(n.em,{children:"tipoSOAP"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nombre"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre del par\xe1metro a incluir en la petici\xf3n SOAP"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valor"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Variable 4D que contiene el valor del par\xe1metro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoSOAP"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo SOAP del par\xe1metro"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WEB SERVICE SET PARAMETER"})," permite la definici\xf3n de un par\xe1metro utilizado por una petici\xf3n SOAP cliente. Llame este comando por cada par\xe1metro en la petici\xf3n (el n\xfamero de veces que se llame el comando depende del n\xfamero de par\xe1metros)."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase en ",(0,d.jsx)(n.em,{children:"nombre"})," el nombre del par\xe1metro tal como aparece en la petici\xf3n SOAP."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"valor"}),", pase la variable 4D que contiene el valor del par\xe1metro. En el caso de los m\xe9todos proxy, esta variable es generalmente ",(0,d.jsx)(n.em,{children:"$1"}),", ",(0,d.jsx)(n.em,{children:"$2"}),", ",(0,d.jsx)(n.em,{children:"$3"}),", etc., correspondiente a un par\xe1metro 4D pasado al m\xe9todo proxy durante su llamada. Sin embargo, es posible utilizar variables intermediarias."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," cada variable o array 4D utilizado debe declararse previamente utilizando los comandos de los temas ",(0,d.jsx)(n.em,{children:"Compilador"})," y ",(0,d.jsx)(n.em,{children:"Arrays"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Por defecto, 4D determina autom\xe1ticamente el tipo SOAP m\xe1s apropiado para el par\xe1metro ",(0,d.jsx)(n.em,{children:"nombre"})," de acuerdo al contenido de ",(0,d.jsx)(n.em,{children:"valor"}),". La indicaci\xf3n del tipo est\xe1 incluida en la petici\xf3n."]}),"\n",(0,d.jsxs)(n.p,{children:["Sin embargo, podr\xeda \u201Cforzar\u201D la definici\xf3n del tipo SOAP de un par\xe1metro. En este caso, puede pasar el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"tipoSOAP"})," utilizando una de las siguientes cadenas de caracteres (tipos de datos primarios):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"tipoSOAP"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Cadena"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"Entero largo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Booleano"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"float"}),(0,d.jsx)(n.td,{children:"Real 32 bits"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"decimal"}),(0,d.jsx)(n.td,{children:"Real con d\xe9cimal"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"double"}),(0,d.jsx)(n.td,{children:"Real 64 bits"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"duration"}),(0,d.jsx)(n.td,{children:"Duraci\xf3n en a\xf1os, meses, d\xedas, horas, minutos, segundos, por ejemplo:"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"P1Y2M3DT10H30M"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"datetime"}),(0,d.jsx)(n.td,{children:"Fecha y hora en formato ISO8601, por ejemplo 2003-05-31T13:20:00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"time"}),(0,d.jsx)(n.td,{children:"Hora, por ejemplo 13:20:00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"date"}),(0,d.jsx)(n.td,{children:"Fecha, por ejemplo 2003-05-31"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gyearmonth"}),(0,d.jsx)(n.td,{children:"A\xf1o y mes (calendario gregoriano), por ejemplo 2003-05"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gyear"}),(0,d.jsx)(n.td,{children:"A\xf1o (calendario gregoriano), por ejemplo 2003"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gmonthday"}),(0,d.jsx)(n.td,{children:"Mes y d\xeda (calendario gregoriano), por ejemplo --05-31"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gday"}),(0,d.jsx)(n.td,{children:"D\xeda (calendario gregoriano), por ejemplo ---31"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gmonth"}),(0,d.jsx)(n.td,{children:"Mes (calendario gregoriano), por ejemplo --10--"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hexbinary"}),(0,d.jsx)(n.td,{children:"Valor expresado en hexadecimal"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"base64binary"}),(0,d.jsx)(n.td,{children:"BLOB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"anyuri"}),(0,d.jsx)(n.td,{children:"Uniform Resource Identifier (URI), por ejemplo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"http://www.empresa.com/page",children:"http://www.empresa.com/page"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qname"}),(0,d.jsx)(n.td,{children:"Nombre XML calificado (espacio de nombre y parte local)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"notation"}),(0,d.jsx)(n.td,{children:"Atributo notaci\xf3n"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Notas:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Para mayor informaci\xf3n sobre tipos de datos XML, consulte el URL ",(0,d.jsx)(n.a,{href:"http://www.w3.org/TR/xmlschema-2/",children:"http://www.w3.org/TR/xmlschema-2/"})]}),"\n",(0,d.jsxs)(n.li,{children:["Este comando no soporta objetos blob (tipo 4D.Blob). Ver ",(0,d.jsx)(n.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Este ejemplo define dos par\xe1metros:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var $2 : Text\n\xa0WEB SERVICE SET PARAMETER("ciudad";$1)\n\xa0WEB SERVICE SET PARAMETER("pa\xeds";$2)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"777"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let d={},i=s.createContext(d);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);