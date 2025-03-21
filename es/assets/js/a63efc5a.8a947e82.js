"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69564"],{958414:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/form-get-entry-order","title":"FORM GET ENTRY ORDER","description":"FORM GET ENTRY ORDER ( nomObjetos {; numPag | * } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-get-entry-order.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-entry-order","permalink":"/docs/es/commands/form-get-entry-order","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-entry-order.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-entry-order","title":"FORM GET ENTRY ORDER","slug":"/commands/form-get-entry-order","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get current page","permalink":"/docs/es/commands/form-get-current-page"},"next":{"title":"FORM GET HORIZONTAL RESIZING","permalink":"/docs/es/commands/form-get-horizontal-resizing"}}'),o=r("785893"),a=r("250065");let s={id:"form-get-entry-order",title:"FORM GET ENTRY ORDER",slug:"/commands/form-get-entry-order",displayed_sidebar:"docs"},t=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FORM GET ENTRY ORDER"})," ( ",(0,o.jsx)(n.em,{children:"nomObjetos"})," {; numPag | * } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomObjetos"}),(0,o.jsx)(n.td,{children:"Text array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombres de objetos ordenados por orden de entrada"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numPag | *"}),(0,o.jsx)(n.td,{children:"Entero largo, Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de la p\xe1gina para la que se obtiene el orden de entrada definido (p\xe1gina actual si se omite), o  * para obtener el orden de entrada real de la p\xe1gina actual"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"FORM GET ENTRY ORDER"})," devuelve en ",(0,o.jsx)(n.em,{children:"nomObjetos"})," los nombres ordenados de los objetos que definen el orden de entrada del formulario."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si no pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"}),", ",(0,o.jsx)(n.strong,{children:"FORM GET ENTRY ORDER"})," devuelve el orden de entrada como se declar\xf3 anteriormente con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"}),". Puede omitir o pasar el par\xe1metro ",(0,o.jsx)(n.em,{children:"numPag"}),":\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"numPag"}),", el array ",(0,o.jsx)(n.em,{children:"nomObjetos"})," devuelve el orden de entrada para la p\xe1gina actual,"]}),"\n",(0,o.jsxs)(n.li,{children:["Si pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"numPag"}),", el array ",(0,o.jsx)(n.em,{children:"nomObjetos"})," devuelve el orden de entrada para la p\xe1gina ",(0,o.jsx)(n.em,{children:"numPag"}),".",(0,o.jsx)(n.br,{}),"\nEn ambos casos, si el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})," no fue llamado previamente para el formulario actual, el array ",(0,o.jsx)(n.em,{children:"nomObjetos"})," se devuelve vac\xedo."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Si pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"}),", ",(0,o.jsx)(n.strong,{children:"FORM GET ENTRY ORDER"})," devuelve el orden de entrada actual de la p\xe1gina actual, es decir, el array ",(0,o.jsx)(n.em,{children:"nomObjetos"})," s\xf3lo contiene nombres de objeto ",(0,o.jsx)(n.strong,{children:"v\xe1lidos"})," ( (para m\xe1s informaci\xf3n sobre objetos v\xe1lidos, consulte la descripci\xf3n del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"}),"). El orden de entrada de formulario real puede ser:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"El orden de entrada de formulario predeterminado, basado en la superposici\xf3n de objetos,"}),"\n",(0,o.jsxs)(n.li,{children:["O el orden de entrada del editor de formularios (ver ",(0,o.jsx)(n.em,{children:"Modificar el orden de entrada de los datos"}),"), si se ha utilizado,"]}),"\n",(0,o.jsxs)(n.li,{children:["O el orden de entrada definido por una llamada al comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})," en el proceso actual, si se ha utilizado.",(0,o.jsx)(n.br,{}),"\nEl orden de entrada real siempre incluye objetos de la p\xe1gina 0 y de los formularios heredados."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el orden de entrada dentro de un subformulario no se devuelve cuando se aplica este comando al formulario padre."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Puede excluir ciertos objetos del orden de entrada:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTabOrderObject;0)\n\xa0var $vElem : Integer\n\xa0\n\xa0FORM GET ENTRY ORDER($arrTabOrderObject;*)\xa0//obtener el orden de entrada actual\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vElem:=Find in array($arrTabOrderObject;"vTax@")\n\xa0\xa0\xa0\xa0If($vElem>0)\xa0//excluye objetos cuyo nombre comienza por "vTax" del orden de entrada de datos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($arrTabOrderObject;$vElem)\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vElem<0)\n\xa0FORM SET ENTRY ORDER($arrTabOrderObject)\xa0//aplica el nuevo orden de entrada\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/form-set-entry-order",children:"FORM SET ENTRY ORDER"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1469"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return s}});var d=r(667294);let o={},a=d.createContext(o);function s(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);