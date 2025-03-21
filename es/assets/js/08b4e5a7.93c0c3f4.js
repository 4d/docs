"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5088"],{790943:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","description":"GET FIELD ENTRY PROPERTIES ( ptrCamp|numTabla {; numCamp}; lista ; obligatorio ; noEditable ; noModificable )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-entry-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-entry-properties","permalink":"/docs/es/20-R7/commands/get-field-entry-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-entry-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","slug":"/commands/get-field-entry-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get external data path","permalink":"/docs/es/20-R7/commands/get-external-data-path"},"next":{"title":"GET FIELD PROPERTIES","permalink":"/docs/es/20-R7/commands/get-field-properties"}}'),d=s("785893"),r=s("250065");let t={id:"get-field-entry-properties",title:"GET FIELD ENTRY PROPERTIES",slug:"/commands/get-field-entry-properties",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET FIELD ENTRY PROPERTIES"})," ( ptrCamp|numTabla {; ",(0,d.jsx)(n.em,{children:"numCamp"}),"}; ",(0,d.jsx)(n.em,{children:"lista"})," ; ",(0,d.jsx)(n.em,{children:"obligatorio"})," ; ",(0,d.jsx)(n.em,{children:"noEditable"})," ; ",(0,d.jsx)(n.em,{children:"noModificable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ptrCamp|numTabla"}),(0,d.jsx)(n.td,{children:"Puntero, Entero largo"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Puntero del campo o n\xfamero de tabla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numCamp"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de campo si el n\xfamero de tabla se pasa como primer par\xe1metro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lista"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nombre de la lista asociada o cadena vac\xeda"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"obligatorio"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = Obligatorio, False = Opcional"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"noEditable"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = No editable, False = Editable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"noModificable"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = No modificable, False = Modificable"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando GET FIELD ENTRY PROPERTIES devuelve las propiedades de entrada de datos para el campo especificado por ",(0,d.jsx)(n.em,{children:"numTabla"})," y ",(0,d.jsx)(n.em,{children:"numCamp"})," o por ",(0,d.jsx)(n.em,{children:"ptrCamp"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Puede pasar:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["n\xfameros de tabla y de campo en ",(0,d.jsx)(n.em,{children:"numTabla"})," y ",(0,d.jsx)(n.em,{children:"numCamp"}),", o"]}),"\n",(0,d.jsxs)(n.li,{children:["un puntero al campo en ",(0,d.jsx)(n.em,{children:"ptrCamp"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este comando devuelve las propiedades definidas a nivel de la ventana de estructura de la base. Propiedades similares pueden definirse a nivel de los formularios."]}),"\n",(0,d.jsx)(n.p,{children:"Una vez ejecutado el comando:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"list"})," devuelve el nombre de la lista asociada al campo (si la hay). Es posible asociar una lista a los siguientes tipos de campos: Alfa, Texto, Num\xe9rico, Entero, Entero largo, Fecha, Hora y Booleano."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:'Si ninguna lista est\xe1 asociada al campo o si el tipo del campo no permite la asociaci\xf3n de listas, se devuelve una cadena vac\xeda ("").'}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"obligatorio"}),' devuelve True si el campo es \u201CObligatorio\u201D; de lo contrario False. El atributo "obligatorio" puede asociarse a todo tipo de campos, excepto BLOB.']}),"\n",(0,d.jsxs)(n.li,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"noEditable"})," devuelve True si el campo dispone del atributo \u201CNo editable\u201D, de lo contrario False. Un campo no editable \xfanicamente puede leerse, no acepta entrada de datos. El atributo \u201CNo modificable\u201D puede asociarse a campos de todos los tipos, excepto BLOB."]}),"\n",(0,d.jsxs)(n.li,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"noModificable"})," devuelve True si el campo es \u201CNo modificable\u201D, de lo contrario False. Un campo no modificable acepta s\xf3lo una entrada y no puede ser modificado. El atributo \u201CNo modificable\u201D puede ser definido para todos los tipos de campos, excepto BLOB."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-table-properties",children:"GET TABLE PROPERTIES"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"685"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(667294);let d={},r=i.createContext(d);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);