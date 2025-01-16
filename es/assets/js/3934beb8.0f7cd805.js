"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45348"],{672871:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>t,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-field-titles","title":"SET FIELD TITLES","description":"SET FIELD TITLES ( tabla ; titulosCampos ; numCampos {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-titles","permalink":"/docs/es/commands/set-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-titles.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-field-titles","title":"SET FIELD TITLES","slug":"/commands/set-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CURSOR","permalink":"/docs/es/commands/set-cursor"},"next":{"title":"SET TABLE TITLES","permalink":"/docs/es/commands/set-table-titles"}}'),r=n("785893"),i=n("250065");let o={id:"set-field-titles",title:"SET FIELD TITLES",slug:"/commands/set-field-titles",displayed_sidebar:"docs"},l=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," ( ",(0,r.jsx)(s.em,{children:"tabla"})," ; ",(0,r.jsx)(s.em,{children:"titulosCampos"})," ; ",(0,r.jsx)(s.em,{children:"numCampos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabla"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Tabla para la cual definir los t\xedtulos de los campos"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"titulosCampos"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nuevos t\xedtulos de los campos"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"numCampos"}),(0,r.jsx)(s.td,{children:"Integer array"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfameros de los campos"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Utilizar los nombres personalizados en el editor de f\xf3rmulas"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," permite ocultar, renombrar y reorganizar los campos de la tabla pasada en ",(0,r.jsx)(s.em,{children:"tabla"})," cuando aparecen en las cajas de di\xe1logo est\xe1ndar de 4D, tal como el editor de b\xfasquedas, en el entorno Aplicaci\xf3n(es decir, cuando el modo de inicio es ",(0,r.jsx)(s.strong,{children:"Aplicaci\xf3n"}),", o despu\xe9s de seleccionar ",(0,r.jsx)(s.strong,{children:"Probar aplicaci\xf3n"})," en el men\xfa ",(0,r.jsx)(s.strong,{children:"Ejecutar"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Utilizando este comando, puede tambi\xe9n renombrar instant\xe1neamente las etiquetas de los campos en sus formularios, si ha utilizado nombres din\xe1micos. Para mayor informaci\xf3n sobre la inserci\xf3n de etiquetas de tablas y campos din\xe1micos en los formularios, consulte el Manual de Dise\xf1o 4D."}),"\n",(0,r.jsxs)(s.p,{children:["Los arrays ",(0,r.jsx)(s.em,{children:"titulosCampos"})," y ",(0,r.jsx)(s.em,{children:"numCampos"})," deben estar sincronizados. En el array ",(0,r.jsx)(s.em,{children:"titulosCampos"}),", pase el nombre de los campos tal como quiere que aparezcan. Si no quiere mostrar un campo en particular, no incluya su nombre o nuevo t\xedtulo en el array. Los campos aparecer\xe1n en el orden que especifique en este array. En cada elemento del array ",(0,r.jsx)(s.em,{children:"numCampos"}),", pase el n\xfamero de la tabla que corresponde al nombre, nuevo o antiguo, del campo pasado en el mismo n\xfamero de elemento que en el array ",(0,r.jsx)(s.em,{children:"titulosCampos"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Por ejemplo, usted tiene una tabla compuesta por los campos F, G, y H, creada en ese orden. Usted quiere que estos campos aparezcan como M, N, y O. Adem\xe1s usted no quiere mostrar el campo N. Por \xfaltimo, quiere mostrar O y M en ese orden. Para hacer esto, pase en el par\xe1metro ",(0,r.jsx)(s.em,{children:"titulosCampos un array que contenga"})," dos elementos, O y M, y pase en el par\xe1metro ",(0,r.jsx)(s.em,{children:"numCampos"})," un array que contenga dos elementos, 3 y 1."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," si su aplicaci\xf3n da acceso al editor de f\xf3rmulas (por ejemplo por el editor de Informes r\xe1pidos), es necesario pasar el par\xe1metro * para mantener consistencia en la aplicaci\xf3n."]}),"\n",(0,r.jsxs)(s.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(s.em,{children:"*"}),' indica si los nombres personalizados (estructuras "virtuales") definidos utilizando este comando puede ser utilizados en f\xf3rmulas 4D. Por defecto, cuando se omite este par\xe1metro, las f\xf3rmulas ejecutadas en 4D no pueden utilizar estos nombres personalizados; es necesario utilizar los nombres de campos reales. Debe pasar este par\xe1metro si desea controlar la informaci\xf3n que se proporciona a los usuarios y garantizar la coherencia de la interfaz siempre que se utilicen f\xf3rmulas o expresiones, es decir:']}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"si su aplicaci\xf3n da acceso al editor de f\xf3rmulas (por ejemplo, a trav\xe9s del editor de informes r\xe1pidos),"}),"\n",(0,r.jsx)(s.li,{children:"si su aplicaci\xf3n muestra referencias de expresi\xf3n, como en los documentos 4D Write Pro."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota"}),": cuando se pasa el par\xe1metro ",(0,r.jsx)(s.em,{children:"*"}),", los nombres definidos por este comando se pueden usar en las f\xf3rmulas ejecutadas por 4D. ",(0,r.jsx)(s.strong,{children:"Tenga cuidado en este caso"}),', los nombres personalizados no deben contener caracteres que son considerados como \u201Cprohibidos\u201D por el interprete del lenguaje 4D, tal como "Rate_in_%" que no puede utilizarse en una f\xf3rmula (para mayor informaci\xf3n, consulte la secci\xf3n ',(0,r.jsx)(s.em,{children:"Convenciones"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," NO modifica la estructura de su base. Est\xe1 dise\xf1ado para afectar usos posteriores de los editores est\xe1ndar de 4D y de los formularios que utilizan nombres din\xe1micos cuando se utilizan en entorno Aplicaci\xf3n. El alcance del comando ",(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," es la sesi\xf3n de trabajo. Un beneficio en cliente/Servidor es que varias estaciones 4D cliente pueden \u201Cver\u201D simult\xe1neamente su estructura de una manera diferente. Puede llamar ",(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," tantas veces como quiera."]}),"\n",(0,r.jsxs)(s.p,{children:["Utilice el comando ",(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," para:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Traducir din\xe1micamente su base."}),"\n",(0,r.jsx)(s.li,{children:"Mostrar los campos en el orden que usted quiera, independientemente de la definici\xf3n real de su tabla."}),"\n",(0,r.jsx)(s.li,{children:"Mostrar los campos de manera que dependan de la identidad o de los privilegios personalizados de un usuario."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Advertencia:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"})," NO anula el efecto de la propiedad invisible de un campo. Cuando un campo se define para que sea invisible al nivel de la estructura, no aparecer\xe1 en modo Aplicaci\xf3n, aunque se incluya en una llamada a ",(0,r.jsx)(s.strong,{children:"SET FIELD TITLES"}),"."]}),"\n",(0,r.jsx)(s.li,{children:'Los plug-ins siempre acceden a la estructura "virtual" como est\xe1 especificado por este comando.'}),"\n",(0,r.jsxs)(s.li,{children:["Si se llama el comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-table-titles",children:"SET TABLE TITLES"}),' sin par\xe1metros, la estructura "virtual" (incluyendo los nombres de tablas y campos personalizados) se elimina completamente del entorno Aplicaci\xf3n.']}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(s.p,{children:["Ver el ejemplo del comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-table-titles",title:"SET TABLE TITLES",children:"SET TABLE TITLES"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/field-name",children:"Field name"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/get-field-titles",children:"GET FIELD TITLES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/last-field-number",children:"Last field number"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/parse-formula",children:"Parse formula"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/set-table-titles",children:"SET TABLE TITLES"})]}),"\n",(0,r.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"602"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var a=n(667294);let r={},i=a.createContext(r);function o(e){let s=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);