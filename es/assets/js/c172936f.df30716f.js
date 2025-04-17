"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60815"],{602120:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/object-set-title","title":"OBJECT SET TITLE","description":"OBJECT SET TITLE ( { ;} objeto ; titulo* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-title.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-title","permalink":"/docs/es/commands/object-set-title","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-title.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-title","title":"OBJECT SET TITLE","slug":"/commands/object-set-title","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET THREE STATES CHECKBOX","permalink":"/docs/es/commands/object-set-three-states-checkbox"},"next":{"title":"OBJECT SET VALUE","permalink":"/docs/es/commands/object-set-value"}}'),o=t("785893"),i=t("250065");let d={id:"object-set-title",title:"OBJECT SET TITLE",slug:"/commands/object-set-title",displayed_sidebar:"docs"},r=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET TITLE"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"titulo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"titulo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nuevo t\xedtulo para el objeto"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando OBJECT SET TITLE cambia el t\xedtulo de los objetos especificados por ",(0,o.jsx)(n.em,{children:"objeto"})," y lo reemplaza por el valor pasado en ",(0,o.jsx)(n.em,{children:"titulo"})," ",(0,o.jsx)(n.em,{children:"."})]}),"\n",(0,o.jsxs)(n.p,{children:["Si especifica el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena) . Si omite el par\xe1metro opcional *, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, usted especifica una referencia de un campo o de una variable (variable tipo objeto \xfanicamente) en lugar de una cadena. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"OBJECT SET TITLE aplica a todos los tipos de objetos simples que contienen una etiqueta:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"botones y botones 3D,"}),"\n",(0,o.jsx)(n.li,{children:"casillas de selecci\xf3n y casillas de selecci\xf3n 3D,"}),"\n",(0,o.jsx)(n.li,{children:"botones radio y botones radio 3D,"}),"\n",(0,o.jsx)(n.li,{children:"encabezados de listbox,"}),"\n",(0,o.jsx)(n.li,{children:"textos est\xe1ticos,"}),"\n",(0,o.jsx)(n.li,{children:"\xe1reas de grupo."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Generalmente, este comando se aplica a un objeto a la vez. El \xe1rea de t\xedtulo del objeto debe ser lo suficientemente grande para acomodar el texto; si no lo es, el texto se trunca."}),"\n",(0,o.jsxs)(n.p,{children:["No utilice retornos de carro en ",(0,o.jsx)(n.em,{children:"titulo"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo es el m\xe9todo de objeto de un bot\xf3n de b\xfasqueda ubicado en el \xe1rea de pie de p\xe1gina de un formulario de salida mostrado por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"}),". El m\xe9todo busca una tabla; dependiendo de los resultados de b\xfasqueda, activa o desactiva un bot\xf3n titulado ",(0,o.jsx)(n.em,{children:"bEliminar"})," y cambia su t\xedtulo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Nombre=vNombre)\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Records in selection([Personas])=0)\xa0// No se encontr\xf3 ninguna persona\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bDelete;" Borrar")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bDelete;False)\n\xa0\xa0\xa0\xa0:(Records in selection([Personas])=1)\xa0// Se encontr\xf3 una persona\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bDelete;"Borrar persona")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bDelete;True)\n\xa0\xa0\xa0\xa0:(Records in selection([Personas])>1)\xa0// Se encontraron varias personas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET TITLE(bDelete;"Borrar personas")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENABLED(bDelete;True)\n\xa0End case\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Usted quiere insertar los t\xedtulos en dos l\xedneas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET TITLE(*;"header1";"Ascending sort \\\\\\ \\\\Descending sort")\n\xa0OBJECT SET TITLE(*;"button1";"Click here \\\\to print")\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(257462).Z+"",width:"469",height:"90"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/object-get-title",children:"OBJECT Get title"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"194"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},257462:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let o={},i=s.createContext(o);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);