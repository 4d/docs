"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13468"],{992225:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>d,assets:()=>a,toc:()=>l,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/find-in-field","title":"Find in field","description":"Find in field ( campoObjetivo ; valor ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/find-in-field.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-field","permalink":"/docs/es/20-R8/commands/find-in-field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-field.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"find-in-field","title":"Find in field","slug":"/commands/find-in-field","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DESCRIBE QUERY EXECUTION","permalink":"/docs/es/20-R8/commands/describe-query-execution"},"next":{"title":"GET QUERY DESTINATION","permalink":"/docs/es/20-R8/commands/get-query-destination"}}'),r=i("785893"),s=i("250065");let o={id:"find-in-field",title:"Find in field",slug:"/commands/find-in-field",displayed_sidebar:"docs"},t=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Find in field"})," ( ",(0,r.jsx)(n.em,{children:"campoObjetivo"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campoObjetivo"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo objetivo en el cual ejecutar la b\xfasqueda."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Field, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor a buscar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor encontrado"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero del registro encontrado o -1 si no se encontr\xf3 ning\xfan registro"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Find in field devuelve el n\xfamero del primer registro cuyo ",(0,r.jsx)(n.em,{children:"campoObjetivo"})," es igual a ",(0,r.jsx)(n.em,{children:"valor"}),".",(0,r.jsx)(n.br,{}),"\nSi no se encuentran registros, Find in field devuelve -1."]}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de llamar este comando, ",(0,r.jsx)(n.em,{children:"valor"})," contiene el valor encontrado. Esta funcionalidad le permite efectuar b\xfasquedas utilizando el car\xe1cter (\u201C@\u201D) en campos tipo Alfa y luego recuperar el valor encontrado."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," por este principio, no se puede utilizar un par\xe1metro ($1, $2, etc.) en ",(0,r.jsx)(n.em,{children:"valor"})," porque esto causar\xeda un mal funcionamiento en modo compilado. Del mismo modo, si pasa un campo en el par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"}),", tenga en cuenta que su valor ser\xe1 reasignado si la consulta tiene \xe9xito (el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/modified-record",children:"Modified record"}),", en particular, devolver\xe1 True para el registro actual de la tabla)."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando no modifica la selecci\xf3n actual ni el registro actual."}),"\n",(0,r.jsx)(n.p,{children:"Este comando es r\xe1pido y muy \xfatil para evitar la creaci\xf3n de entradas dobles durante la entrada de datos."}),"\n",(0,r.jsxs)(n.p,{children:["**",(0,r.jsx)(n.strong,{children:"Nota hist\xf3rica:"})," en versiones anteriores de 4D, el comando ",(0,r.jsx)(n.strong,{children:"Find in field"})," era llamado ",(0,r.jsx)(n.strong,{children:"Find index key"})," y s\xf3lo funcionaba con campos indexados. A partir de 4D v11 SQL, esta limitaci\xf3n se elimin\xf3 y el comando se renombr\xf3."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"En una base de datos de CDs, durante la entrada de datos asumamos que usted quiere verificar el nombre del cantante para ver si ya existe en la base. Como pueden existir hom\xf3nimos, usted quiere que el campo [Cantante]Nombre sea \xfanico. Por lo tanto, en el formulario de entrada, puede escribir el siguiente c\xf3digo en el m\xe9todo de objeto del campo [Cantante]Nombre:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Data Change)\n\xa0\xa0\xa0\xa0$RecNum:=Find in field([Cantante]Nombre;[Cantante]Nombre)\n\xa0\xa0\xa0\xa0If($RecNum #-1)\xa0// si este nombre ya ha sido introducido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Ya existe un cantante con el mismo nombre. \xbfQuiere ver el registro?";"S\xed";"No")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO RECORD([Cantante];$RecNum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este es un ejemplo que permite verificar la existencia de un valor:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $id;$1 : Integer\n\xa0$id:=$1\n\xa0If(Find in field([MyTable]MyID;$id)>=0)\n\xa0\xa0\xa0\xa0$0:=True\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=False\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Tenga en cuenta >= permite cubrir todos los casos. De hecho, la funci\xf3n devuelve un n\xfamero de registro y el primer registro tiene el n\xfamero 0."}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"653"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return o}});var d=i(667294);let r={},s=d.createContext(r);function o(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);