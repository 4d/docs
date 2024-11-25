"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2097"],{233163:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>j,assets:()=>i,toc:()=>t,frontMatter:()=>a});var d=JSON.parse('{"id":"ViewPro/commands/vp-find","title":"VP Find","description":"VP Find (  rangeObj Text ) Object ; searchValue Object } ) Object ; searchValue Object ; replaceValue Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-find.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-find","permalink":"/docs/es/20-R6/ViewPro/commands/vp-find","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-find.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-find","title":"VP Find"},"sidebar":"docs","previous":{"title":"F","permalink":"/docs/es/20-R6/commands/F"},"next":{"title":"VP Find table","permalink":"/docs/es/20-R6/ViewPro/commands/vp-find-table"}}'),s=r("785893"),l=r("250065");let a={id:"vp-find",title:"VP Find"},c=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4}];function o(e){let n={br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,s.jsx)(n.em,{children:"searchCondition"})," : Object } ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"VP Find"})," (  ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"searchValue"})," : Text ; ",(0,s.jsx)(n.em,{children:"searchCondition"})," : Object ; ",(0,s.jsx)(n.em,{children:"replaceValue"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchValue"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor de b\xfasqueda"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchCondition"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto que contiene la(s) condici\xf3n(es) de b\xfasqueda"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"replaceValue"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor de reemplazo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP Find"})," busca en el ",(0,s.jsx)(n.em,{children:"rangeObj"})," el ",(0,s.jsx)(n.em,{children:"searchValue"}),". Se pueden utilizar par\xe1metros opcionales para afinar la b\xfasqueda y/o sustituir los resultados encontrados."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pase un objeto que contenga un rango a buscar."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"searchValue"})," permite pasar el texto a buscar dentro del ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"searchCondition"})," para especificar el funcionamiento de la b\xfasqueda. Se soportan las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"afterColumn"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["El n\xfamero de la columna justo antes de la columna inicial de la b\xfasqueda. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," es un rango combinado, el n\xfamero de columna indicado debe ser del primer rango. Valor por defecto: -1 (inicio de ",(0,s.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"afterRow"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["El n\xfamero de la l\xednea justo antes de la l\xednea inicial de la b\xfasqueda. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," es un rango combinado, el n\xfamero de l\xednea indicado debe ser del primer rango. Valor por defecto: -1 (inicio de ",(0,s.jsx)(n.em,{children:"rangeObj"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"all"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.li,{children:["True - Se devuelven todas las celdas en ",(0,s.jsx)(n.em,{children:"rangeObj"})," correspondientes a ",(0,s.jsx)(n.em,{children:"searchValue"})]}),(0,s.jsxs)(n.li,{children:["False - (valor por defecto) S\xf3lo se devuelve la primera celda de ",(0,s.jsx)(n.em,{children:"rangeObj"})," correspondiente a ",(0,s.jsx)(n.em,{children:"searchValue"})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"flags"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag exact match"})}),(0,s.jsx)(n.td,{children:"El contenido completo de la celda debe coincidir completamente con el valor de b\xfasqueda"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag ignore case"})}),(0,s.jsx)(n.td,{children:'Las may\xfasculas y min\xfasculas se consideran iguales. Ej: "a" es igual a "A".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag none"})}),(0,s.jsx)(n.td,{children:"no se consideran banderas de b\xfasqueda (por defecto)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find flag use wild cards"})}),(0,s.jsxs)(n.td,{children:["Caracteres comod\xedn (*,?) puede utilizarse en la cadena de b\xfasqueda. Los caracteres comod\xedn se pueden utilizar en cualquier comparaci\xf3n de cadenas para coincidir con cualquier n\xfamero de caracteres:",(0,s.jsx)(n.li,{children:'* para cero o varios caracteres (por ejemplo, al buscar "bl*" se puede encontrar "bl", "black" o "blob")'}),(0,s.jsx)(n.li,{children:'? para un solo car\xe1cter (por ejemplo, la b\xfasqueda de "h?t" puede encontrar "hot", o "hit"'})]})]})]})}),"Estos indicadores pueden combinarse. Por ejemplo: ",(0,s.jsx)(n.code,{children:"$search.flags:=vk find flag use wild cards+vk find flag ignore case"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"order"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find order by columns"})}),(0,s.jsx)(n.td,{children:"La b\xfasqueda se realiza por columnas. Cada fila de una columna se busca antes de que la b\xfasqueda contin\xfae a la siguiente columna."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find order by rows"})}),(0,s.jsx)(n.td,{children:"La b\xfasqueda se realiza por filas. Se busca en cada columna de una linea antes de continuar con la siguiente linea (por defecto)"})]})]})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"target"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target formula"})}),(0,s.jsx)(n.td,{children:"La b\xfasqueda se realiza en la f\xf3rmula de la celda"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target tag"})}),(0,s.jsx)(n.td,{children:"La b\xfasqueda se realiza en la etiqueta de la celda"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk find target text"})}),(0,s.jsx)(n.td,{children:"La b\xfasqueda se realiza en el texto de la celda (predeterminado)"})]})]})}),(0,s.jsxs)(n.p,{children:["Estas banderas pueden combinarse. Por ejemplo:",(0,s.jsx)(n.code,{children:"$search.target:=vk find target formula+vk find target text"})]})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"replaceValue"}),", puede pasar un texto para que ocupe el lugar de toda instancia del texto en el ",(0,s.jsx)(n.em,{children:"searchValue"})," encontrado en ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,s.jsx)(n.p,{children:"La funci\xf3n devuelve un objeto de rango que describe cada valor de b\xfasqueda encontrado o reemplazado. Se devuelve un objeto de rango vac\xedo si no se encuentran resultados."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:'Para encontrar la primera celda que contenga la palabra "Total":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $range;$result : Object\n \n$range:=VP All("ViewProArea")\n \n$result:=VP Find($range;"Total")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:'Para encontrar "Total" y reemplazarlo por "Grand Total":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $range;$condition;$result : Object\n\n$range:=VP All("ViewProArea")\n\n$condition:=New object\n$condition.target:=vk find target text\n$condition.all:=True //Buscar en todo el documento\n$condition.flags:=vk find flag exact match\n\n  // Reemplazar las celdas que contienen s\xf3lo "Total" en la hoja actual con "Grand Total"\n$result:=VP Find($range;"Total";$condition;"Grand Total")\n\n  // Comprobar si el objeto de rango est\xe1 vac\xedo\nIf($result.ranges.length=0)\n    ALERT("No result found")\nElse\n    ALERT($result.ranges.length+" results found")\nEnd if\n'})})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var d=r(667294);let s={},l=d.createContext(s);function a(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);