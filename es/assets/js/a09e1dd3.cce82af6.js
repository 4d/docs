"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34264"],{19172:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/relate-many","title":"RELATE MANY","description":"RELATE MANY ( tabla1 | campo1 )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-many.md","sourceDirName":"commands-legacy","slug":"/commands/relate-many","permalink":"/docs/es/20-R7/commands/relate-many","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-many.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-many","title":"RELATE MANY","slug":"/commands/relate-many","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OLD RELATED ONE","permalink":"/docs/es/20-R7/commands/old-related-one"},"next":{"title":"RELATE MANY SELECTION","permalink":"/docs/es/20-R7/commands/relate-many-selection"}}'),r=s("785893"),o=s("250065");let l={id:"relate-many",title:"RELATE MANY",slug:"/commands/relate-many",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function d(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"RELATE MANY"})," ( tabla1 | campo1 )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabla1 | campo1"}),(0,r.jsx)(a.td,{children:"Tabla, Campo"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabla para la cual establecer todas las relaciones de Uno a Muchos o campo Uno"})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:"RELATE MANY tiene dos sintaxis."}),"\n",(0,r.jsxs)(a.p,{children:["La primera sintaxis, RELATE MANY(tabla1), establece todas las relaciones Uno a Muchos para ",(0,r.jsx)(a.em,{children:"tabla1"}),". Cambia la selecci\xf3n actual para cada tabla que tiene una relaci\xf3n Uno a Muchos con ",(0,r.jsx)(a.em,{children:"tabla1"}),". Las selecciones actuales en las tablas Muchos dependen del valor actual de cada campo relacionado en la tabla Uno. Cada vez que este comando se ejecuta, las selecciones actuales de las tablas Muchos son modificadas."]}),"\n",(0,r.jsxs)(a.p,{children:["La segunda sintaxis, RELATE MANY(campo1), establece la relaci\xf3n Uno a Muchos para ",(0,r.jsx)(a.em,{children:"campo1"}),". Modifica la selecci\xf3n actual para cada tabla que tenga una relaci\xf3n con ",(0,r.jsx)(a.em,{children:"campo1"}),". Esto significa que los registros relacionados se vuelven la selecci\xf3n actual de la tabla Muchos."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," si la selecci\xf3n actual de la tabla Uno est\xe1 vac\xeda en el momento de la ejecuci\xf3n de RELATE MANY, el comando no hace nada."]}),"\n",(0,r.jsx)(a.h3,{id:""}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(a.p,{children:"En el siguiente ejemplo, tres tablas est\xe1n relacionadas con relaciones autom\xe1ticas. Las dos tablas [Personas] y [Partes] tienen una relaci\xf3n Muchos a Uno con la tabla [Empresas]."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:s(32166).Z+"",width:"543",height:"276"})}),"\n",(0,r.jsx)(a.p,{children:"Este es el formulario para la tabla [Empresas] que mostrar\xe1 los registros relacionados de las tablas [Personas] y [Partes]."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:s(307866).Z+"",width:"801",height:"485"})}),"\n",(0,r.jsx)(a.p,{children:"Cuando se muestran los formularios para Personas y Partes, los registros relacionados para las tablas [Personas] y [Partes] se cargan y se vuelven las selecciones actuales de estas tablas."}),"\n",(0,r.jsx)(a.p,{children:"Por otra parte, los registros relacionados no se cargan si un registro de la tabla [Empresas] es seleccionado por programaci\xf3n. En este caso, debe utilizar el comando RELATE MANY."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Notas:"}),(0,r.jsx)(a.br,{}),"\n\u2022 Cuando el comando RELATE MANY se aplica a una selecci\xf3n vac\xeda, el comando no se ejecuta y la selecci\xf3n para la tabla Muchos no cambia.",(0,r.jsx)(a.br,{}),"\n\u2022 Para que el comando funcione, los campos llave for\xe1nea (campos Muchos) deben estar indexados."]}),"\n",(0,r.jsxs)(a.p,{children:["Por ejemplo, el siguiente m\xe9todo efect\xfaa un bucle por cada registro de la tabla [Empresas]. Para cada empresa, aparece una caja de alerta. La caja de alerta muestra el n\xfamero de personas en la empresa (el n\xfamero de registros relacionados en la tabla [Personas]), y el n\xfamero de partes que suministran (el n\xfamero de registros en la tabla [Partes] que est\xe1n relacionados). En el ejemplo, el argumento para el comando ",(0,r.jsx)(a.a,{href:"/docs/es/20-R7/commands/alert",children:"ALERT"})," se imprime en varias l\xedneas por claridad."]}),"\n",(0,r.jsx)(a.p,{children:"Note que es necesario el comando RELATE MANY, aunque las relaciones sean autom\xe1ticas."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0ALL RECORDS([Empresas])\xa0// Seleccionar todos los registros en la tabla\n\xa0ORDER BY([Empresas];[Empresas]Nombre)\xa0// Ordenar los registros en orden alfab\xe9tico\n\xa0For($i;1;Records in table([Empresas]))\xa0// Bucle una vez por cada registro\n\xa0\xa0\xa0\xa0RELATE MANY([Empresas]Nombre)\xa0// Seleccionar los registros relacionados\n\xa0\xa0\xa0\xa0ALERT("Company: "+[Empresas]Nombre+Char(13)+"Personas en la empresa: "\n\xa0\xa0\xa0\xa0+String(Records in selection([Personas]))+Char(13)+\n\xa0\xa0\xa0\xa0"N\xfamero de partes que suministran: "+String(Records in selection([Partes])))\n\xa0\xa0\xa0\xa0NEXT RECORD([Empresas])\xa0// Ir al siguiente registro\n\xa0End for\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/20-R7/commands/old-related-many",children:"OLD RELATED MANY"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/20-R7/commands/relate-one",children:"RELATE ONE"})]}),"\n",(0,r.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"262"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modifica la selecci\xf3n actual"}),(0,r.jsx)(a.td,{})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},32166:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict2286855.es-d70e4f5dcaaca401891de48e2f80cc18.png"},307866:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict2287703.es-b606aae28294d3c413593928bc5eed2f.png"},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return l}});var n=s(667294);let r={},o=n.createContext(r);function l(e){let a=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);