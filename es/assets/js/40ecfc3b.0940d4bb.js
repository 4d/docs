"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21763"],{888476:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-filter","title":"OBJECT SET FILTER","description":"OBJECT SET FILTER ( { ;} objeto ; filtroEntrada* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-filter.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-filter","permalink":"/docs/es/20-R8/commands/object-set-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-filter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-filter","title":"OBJECT SET FILTER","slug":"/commands/object-set-filter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET EVENTS","permalink":"/docs/es/20-R8/commands/object-set-events"},"next":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/es/20-R8/commands/object-set-focus-rectangle-invisible"}}'),t=r("785893"),a=r("250065");let o={id:"object-set-filter",title:"OBJECT SET FILTER",slug:"/commands/object-set-filter",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET FILTER"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"filtroEntrada"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filtroEntrada"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nuevo filtro de entrada para el \xe1rea editable"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["OBJECT SET FILTER reemplaza el filtro de entrada para los objetos especificados por ",(0,t.jsx)(n.em,{children:"objeto"})," por ",(0,t.jsx)(n.em,{children:"filtroEntrada"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si omite el par\xe1metro opcional *, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, usted especifica una referencia de un campo o de una variable (campo o variable de tipo objeto \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"OBJECT SET FILTER puede utilizarse en formularios de entrada y di\xe1logos y puede aplicarse a los campos y variables editables que aceptan un filtro de entrada en el entorno Dise\xf1o."}),"\n",(0,t.jsxs)(n.p,{children:["Al pasar una cadena vac\xeda en ",(0,t.jsx)(n.em,{children:"filtroEntrada"})," se elimina el filtro de entrada actual para los objetos."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando no puede utilizarse con campos ubicados en el formulario listado de un subformulario."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en ",(0,t.jsx)(n.em,{children:"filtroEntrada"}),", para utilizar filtros de entrada predefinidos utilizando la Caja de herramientas, coloque un prefijo en el filtro de entrada, una barra vertical (|)."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo define el filtro de entrada para el campo c\xf3digo postal. Si la direcci\xf3n es de Espa\xf1a, el filtro se define para los c\xf3digos postales espa\xf1oles. De lo contrario, puede aceptar todo valor de entrada:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0If([Empresas]Pais ="ES")\xa0// Definir el filtro para un formato del c\xf3digo postal espa\xf1ol\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Empresas]Codigo Postal;"&9###")\n\xa0Else\xa0// Definir el filtro para aceptar todo valor alfanum\xe9rico y may\xfasculas\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Empresas]Codigo Postal;"~@")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo permite \xfanicamente la entrada de las letras \u201Ca,\u201D \u201Cb,\u201D \u201Cc,\u201D o \u201Cg\u201D en un campo de dos letras:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FILTER([Tabla]Campo ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este ejemplo define el filtro de entrada ",(0,t.jsx)(n.em,{children:'&"a;b;c;g"##'}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-get-filter",children:"OBJECT Get filter"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-set-format",children:"OBJECT SET FORMAT"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"235"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);