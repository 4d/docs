"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51168"],{138561:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-field-relation","title":"GET FIELD RELATION","description":"GET FIELD RELATION ( campoN ; uno ; muchos {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-relation","permalink":"/docs/es/commands/get-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-relation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-relation","title":"GET FIELD RELATION","slug":"/commands/get-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET AUTOMATIC RELATIONS","permalink":"/docs/es/commands/get-automatic-relations"},"next":{"title":"OLD RELATED MANY","permalink":"/docs/es/commands/old-related-many"}}'),o=a("785893"),r=a("250065");let l={id:"get-field-relation",title:"GET FIELD RELATION",slug:"/commands/get-field-relation",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"GET FIELD RELATION"})," ( ",(0,o.jsx)(n.em,{children:"campoN"})," ; ",(0,o.jsx)(n.em,{children:"uno"})," ; ",(0,o.jsx)(n.em,{children:"muchos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"campoN"}),(0,o.jsx)(n.td,{children:"Field"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo de inicio de una relaci\xf3n"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"uno"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Estado de la relaci\xf3n Muchos a Uno"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"muchos"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Estado de la relaci\xf3n Uno a Muchos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"\u2022 Si se pasa: uno y muchos devuelven el estado actual de la relaci\xf3n (valores 2 o 3 \xfanicamente) \u2022 Si se omite (por defecto): uno y muchos puede devolver el valor 1 si la relaci\xf3n no ha sido modificada por programaci\xf3n"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando GET FIELD RELATION permite conocer el estado autom\xe1tico/manual de la relaci\xf3n comenzando desde el ",(0,o.jsx)(n.em,{children:"campoN"})," para el proceso actual. Todas las relaciones pueden ser consultadas, incluyendo las relaciones autom\xe1ticas en la ventana de Estructura."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pase en ",(0,o.jsx)(n.em,{children:"campoN"}),", el nombre del campo de la tabla N desde donde comienza la relaci\xf3n cuyo estado quiere conocer. Si ninguna relaci\xf3n se origina desde el campo ",(0,o.jsx)(n.em,{children:"campoN"}),", los par\xe1metros ",(0,o.jsx)(n.em,{children:"uno"})," y ",(0,o.jsx)(n.em,{children:"muchos"})," devuelven 0, se genera un error y la variable sistema OK toma el valor 0 (ver a continuaci\xf3n)."]}),"\n",(0,o.jsxs)(n.li,{children:["Despu\xe9s de la ejecuci\xf3n del comando, la variable ",(0,o.jsx)(n.em,{children:"uno"})," contiene un valor indicando si la relaci\xf3n Muchos a Uno especificada est\xe1 definida como autom\xe1tica:",(0,o.jsx)(n.br,{}),"\n0 = no hay relaci\xf3n desde ",(0,o.jsx)(n.em,{children:"campoN"}),". Se genera el error de sintaxis No. 16 (\u201CEl campo no tiene relaci\xf3n\u201D) y la variable sistema OK toma el valor 0.",(0,o.jsx)(n.br,{}),"\n1 = el estado autom\xe1tico/manual de la relaci\xf3n Muchos a Uno especificado est\xe1 definido por la opci\xf3n ",(0,o.jsx)(n.strong,{children:"Relaci\xf3n Muchos a Uno autom\xe1tica"})," en las propiedades de la relaci\xf3n en el entorno Dise\xf1o (no ha sido modificado por programaci\xf3n).",(0,o.jsx)(n.br,{}),"\n2 = la relaci\xf3n Muchos a Uno es manual para el proceso.",(0,o.jsx)(n.br,{}),"\n3 = la relaci\xf3n Muchos a Uno es autom\xe1tica para el proceso."]}),"\n",(0,o.jsxs)(n.li,{children:["Despu\xe9s de la ejecuci\xf3n del comando, el par\xe1metro ",(0,o.jsx)(n.em,{children:"muchos"})," contiene un valor indicando si la relaci\xf3n Uno a Muchos especificada est\xe1 definida como autom\xe1tica:",(0,o.jsx)(n.br,{}),"\n0 = no hay relaci\xf3n desde ",(0,o.jsx)(n.em,{children:"campoN"}),". Se genera el error de sintaxis No. 16 (\u201CEl campo no tiene relaci\xf3n\u201D) y la variable sistema OK toma el valor 0.",(0,o.jsx)(n.br,{}),"\n1 = el estado autom\xe1tico/manual de la relaci\xf3n Uno a Muchos especificada est\xe1 definido por la opci\xf3n ",(0,o.jsx)(n.strong,{children:"Relaci\xf3n Uno a Muchos autom\xe1tica"})," en las propiedades de la relaci\xf3n en el entorno Dise\xf1o (no ha sido modificado por programaci\xf3n).",(0,o.jsx)(n.br,{}),"\n2 = la relaci\xf3n Uno a Muchos es manual para el proceso.",(0,o.jsx)(n.br,{}),"\n3 = la relaci\xf3n Uno a Muchos es autom\xe1tica para el proceso."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Puede comparar los valores recibidos en los par\xe1metros ",(0,o.jsx)(n.em,{children:"uno"})," y ",(0,o.jsx)(n.em,{children:"muchos"})," con las constantes del tema \u201C\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Automatic"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"3"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Manual"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"No relation"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"0"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Structure configuration"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," permite \u201Cforzar\u201D la lectura del estado actual de la relaci\xf3n, incluso si no ha sido modificado por programaci\xf3n. En otras palabras, cuando pasa el par\xe1metro opcional *, s\xf3lo pueden devolverse los valores 2 \xf3 3 en los par\xe1metros ",(0,o.jsx)(n.em,{children:"uno"})," y ",(0,o.jsx)(n.em,{children:"muchos"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Dada la siguiente estructura:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(240241).Z+"",width:"348",height:"212"})}),"\n",(0,o.jsx)(n.p,{children:"Las propiedades de la relaci\xf3n que une el campo [Empleados]Empresa con el campo[Empresas]Nombre son las siguientes:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(194037).Z+"",width:"268",height:"514"})}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente c\xf3digo ilustra las diferentes posibilidades ofrecidas por los comandos GET FIELD RELATION, ",(0,o.jsx)(n.a,{href:"/docs/es/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," as\xed como sus efectos:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//devuelve False, False\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many)\xa0//devuelve 1,1\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many;*)\xa0//devuelve 3,2\n\xa0\n\xa0SET FIELD RELATION([Empleados]Empresa;2;0)\xa0//cambia la relaci\xf3n Muchos a uno a manual\n\xa0\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many)\xa0//devuelve 2,1\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many;*)\xa0//devuelve 2, 2\n\xa0\n\xa0SET FIELD RELATION([Empleados]Empresa;1;0)\xa0//restablece los par\xe1metros definidos en el entorno Dise\xf1o para la relaci\xf3n Muchos a Uno\n\xa0\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many)\xa0//devuelve 1,1\n\xa0GET FIELD RELATION([Empleados]Empresa;one;many;*)\xa0//devuelve 3,2\n\xa0\n\xa0SET AUTOMATIC RELATIONS(True;True)\xa0//cambia todas las relaciones de todas las tablas a autom\xe1tica\n\xa0\n\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//devuelve True, True\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//devuelve 1,1\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//devuelve 3,3\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"920"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},240241:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict31607.es-7d5565d27d8d90048194733264e68ea3.png"},194037:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict31608.es-97c29a1d6701ba5f0fb2d9c0281a4bdf.png"},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var s=a(667294);let o={},r=s.createContext(o);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);