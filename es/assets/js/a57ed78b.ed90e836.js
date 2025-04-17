"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87515"],{528229:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-field-properties","title":"GET FIELD PROPERTIES","description":"GET FIELD PROPERTIES ( campPtr ; campTipo {; campLong {; indexado {; unico {; invisible}}}} )GET FIELD PROPERTIES ( tablaNum ; numCamp ; campTipo {; campLong {; indexado {; unico {; invisible}}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-field-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-properties","permalink":"/docs/es/20-R8/commands/get-field-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-field-properties","title":"GET FIELD PROPERTIES","slug":"/commands/get-field-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD ENTRY PROPERTIES","permalink":"/docs/es/20-R8/commands/get-field-entry-properties"},"next":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/es/20-R8/commands/get-missing-table-names"}}'),r=d("785893"),i=d("250065");let l={id:"get-field-properties",title:"GET FIELD PROPERTIES",slug:"/commands/get-field-properties",displayed_sidebar:"docs"},c=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," ( ",(0,r.jsx)(n.em,{children:"campPtr"})," ; ",(0,r.jsx)(n.em,{children:"campTipo"})," {; ",(0,r.jsx)(n.em,{children:"campLong"})," {; ",(0,r.jsx)(n.em,{children:"indexado"})," {; ",(0,r.jsx)(n.em,{children:"unico"})," {; ",(0,r.jsx)(n.em,{children:"invisible"}),"}}}} )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," ( ",(0,r.jsx)(n.em,{children:"tablaNum"})," ; ",(0,r.jsx)(n.em,{children:"numCamp"})," ; ",(0,r.jsx)(n.em,{children:"campTipo"})," {; ",(0,r.jsx)(n.em,{children:"campLong"})," {; ",(0,r.jsx)(n.em,{children:"indexado"})," {; ",(0,r.jsx)(n.em,{children:"unico"})," {; ",(0,r.jsx)(n.em,{children:"invisible"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campPtr\xa0|\xa0tablaNum"}),(0,r.jsx)(n.td,{children:"Puntero, Entero largo"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Puntero de campo o N\xfamero de tabla"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numCamp"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de campo si se pasa un n\xfamero de tabla"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campTipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tipo de campo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campLong"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Longitud del campo, si es alfanum\xe9rico"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"indexado"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = Indexado, False = No indexado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unico"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = \xfanico, False = No \xfanico"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"invisible"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = Invisible, False = Visible"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," devuelve informaci\xf3n sobre el campo designado por ",(0,r.jsx)(n.em,{children:"campPtr"})," o por ",(0,r.jsx)(n.em,{children:"tablaNum"})," y ",(0,r.jsx)(n.em,{children:"campNum"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Puede pasar:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["los n\xfameros de tabla y de campo en ",(0,r.jsx)(n.em,{children:"tablaNum"})," y ",(0,r.jsx)(n.em,{children:"campNum"}),", o"]}),"\n",(0,r.jsxs)(n.li,{children:["un puntero al campo en ",(0,r.jsx)(n.em,{children:"campPtr"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la llamada:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"campTipo"})," devuelve el tipo del campo. El par\xe1metro variable ",(0,r.jsx)(n.em,{children:"campTipo"})," recibe uno de los valores predefinidos por las constantes de 4D (tema ",(0,r.jsx)(n.em,{children:"Tipos de campos y variables"}),"):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is alpha field"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is BLOB"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"30"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is float"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"35"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is integer"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is integer 64 bits"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"25"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is picture"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is subtable"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"campLong"})," devuelve la longitud del campo, si el campo es alfanum\xe9rico (es decir, ",(0,r.jsx)(n.em,{children:"campTipo=Is Alpha Field"}),"). El valor de ",(0,r.jsx)(n.em,{children:"campField"})," no es significativo para los otros tipos de campo."]}),"\n",(0,r.jsxs)(n.li,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"indexado"})," devuelve True si el campo est\xe1 indexado, de lo contrario False. El valor de ",(0,r.jsx)(n.em,{children:"indexado"})," es significativo \xfanicamente para campos de tipo Alfanum\xe9rico, Entero, Entero largo, Real, Fecha, Hora y Booleano."]}),"\n",(0,r.jsxs)(n.li,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"unico"})," devuelve True si el campo est\xe1 definido como \u201C\xfanico\u201D, de lo contrario False."]}),"\n",(0,r.jsxs)(n.li,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"invisible"})," devuelve True si el campo est\xe1 definido como \u201CInvisible\u201D, de lo contrario False. El atributo invisible puede ser utilizado para ocultar un campo en el editor est\xe1ndar de 4D (etiquetas, gr\xe1ficos...)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["En este ejemplo, las variables ",(0,r.jsx)(n.em,{children:"vTipo"}),", ",(0,r.jsx)(n.em,{children:"vLong"}),", ",(0,r.jsx)(n.em,{children:"vIndex"}),", ",(0,r.jsx)(n.em,{children:"vUnico"})," y ",(0,r.jsx)(n.em,{children:"vInvisible"})," toman por valor las propiedades del tercer campo de la primera tabla:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(1;3;vTipo;vLong;vIndex;vUnico;vInvisible)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Este ejemplo recupera en las variables ",(0,r.jsx)(n.em,{children:"vTipo"}),", ",(0,r.jsx)(n.em,{children:"vLong"}),", ",(0,r.jsx)(n.em,{children:"vIndex"}),", ",(0,r.jsx)(n.em,{children:"vUnico"})," y ",(0,r.jsx)(n.em,{children:"vInvisible"})," las propiedades del campo [Tabla3]Campo2:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(->[Tabla3]Campo2;vTipo;vLong;vIndex;vUnico;vInvisible)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/field",children:"Field"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/field-name",children:"Field name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-index",children:"SET INDEX"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"258"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return l}});var s=d(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);