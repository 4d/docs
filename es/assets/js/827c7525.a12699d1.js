"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89289"],{335691:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/set-field-relation","title":"SET FIELD RELATION","description":"SET FIELD RELATION ( tablasN | CampoN ; uno ; muchos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-relation","permalink":"/docs/es/commands/set-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-relation.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-field-relation","title":"SET FIELD RELATION","slug":"/commands/set-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET AUTOMATIC RELATIONS","permalink":"/docs/es/commands/set-automatic-relations"},"next":{"title":"Resources","permalink":"/docs/es/commands/theme/Resources"}}'),i=a("785893"),l=a("250065");let o={id:"set-field-relation",title:"SET FIELD RELATION",slug:"/commands/set-field-relation",displayed_sidebar:"docs"},r=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET FIELD RELATION"})," ( tablasN | CampoN ; ",(0,i.jsx)(n.em,{children:"uno"})," ; ",(0,i.jsx)(n.em,{children:"muchos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tablasN | CampoN"}),(0,i.jsx)(n.td,{children:"Tabla, Campo"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Tabla de inicio de las relaciones o Campo de inicio de la relaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uno"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Estado de la relaci\xf3n Muchos a Uno a partir del campo o de las relaciones Muchos a Uno de la tabla"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"muchos"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Estado de la relaci\xf3n Uno a Muchos a partir del campo o de las relaciones Uno a Muchos de la tabla"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El comando SET FIELD RELATION permite definir separadamente el estado autom\xe1tico/manual de cada relaci\xf3n de la base para el proceso actual, sin tener en cuenta su estado inicial definido en el entorno Dise\xf1o en la ventana de propiedades de las relaciones."}),"\n",(0,i.jsx)(n.p,{children:"Pase en el primer par\xe1metro, un nombre de tabla o campo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si pasa un nombre de campo (",(0,i.jsx)(n.em,{children:"campoN"}),"), el comando se aplicar\xe1 \xfanicamente a la relaci\xf3n a partir del campo Muchos especificado."]}),"\n",(0,i.jsxs)(n.li,{children:["Si pasa un nombre de tabla (",(0,i.jsx)(n.em,{children:"tablaN"}),"), el comando se aplicar\xe1 a todas las relaciones a partir de la tabla Muchos especificada."]}),"\n",(0,i.jsxs)(n.li,{children:["Si no hay ninguna relaci\xf3n a partir del campo ",(0,i.jsx)(n.em,{children:"campoN"})," o de la tabla ",(0,i.jsx)(n.em,{children:"tablaN"}),", los par\xe1metros ",(0,i.jsx)(n.em,{children:"uno"})," y ",(0,i.jsx)(n.em,{children:"muchos"})," devuelven 0, se genera el error de sintaxis No. 16 (\u201CEl campo no tiene relaci\xf3n\u201D) y la variable sistema OK toma el valor 0."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en los par\xe1metros ",(0,i.jsx)(n.em,{children:"uno"})," y ",(0,i.jsx)(n.em,{children:"muchos"}),", los valores que indican el cambio de estado autom\xe1tico/manual a aplicar respectivamente a la(s) relaci\xf3n(es) de tipo Muchos a Uno y Uno a Muchos. Puede utilizar las constantes del tema \u201C",(0,i.jsx)(n.em,{children:"Relaciones"}),"\u201D:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Do not modifyDo not modify (0) = No modificar el estado actual de la(s) relaci\xf3n(es)."}),"\n",(0,i.jsx)(n.li,{children:"Structure configuration (1) = Utilizar la configuraci\xf3n definida para la(s) relaci\xf3n(es) en la ventana de estructura de la aplicaci\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Manual (2) = Volver manual(es) la(s) relaci\xf3n(es) en el proceso actual."}),"\n",(0,i.jsx)(n.li,{children:"Automatic (3) = Volver autom\xe1tica(s) la(s) relaci\xf3n(es) en el proceso actual."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," los cambios realizados con este comando s\xf3lo aplican al proceso actual. La configuraci\xf3n de las relaciones definida utilizando las opciones de la ventana de propiedades de la relaci\xf3n no se modifica."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": si pasa True al comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," durante la misma sesi\xf3n, las llamadas al comando SET FIELD RELATION se ignoran, sin importar si est\xe1n ubicadas antes o despu\xe9s de ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),'. Para "bloquear" el modo autom\xe1tico y tener en cuenta llamadas a SET FIELD RELATION, pase False a ',(0,i.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente c\xf3digo permite definir s\xf3lo las relaciones \xfatiles como autom\xe1ticas en el editor de informes r\xe1pidos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(False;False)\xa0//Inicializaci\xf3n de las relaciones\n\xa0\xa0//S\xf3lo se utilizar\xe1n las siguientes relaciones\n\xa0SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)\n\xa0SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)\n\xa0QR REPORT([Invoices];Char(1))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-field-relation",children:"GET FIELD RELATION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"919"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return o}});var s=a(667294);let i={},l=s.createContext(i);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);