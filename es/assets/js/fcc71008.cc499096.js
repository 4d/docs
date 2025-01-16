"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91325"],{947738:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/create-record","title":"CREATE RECORD","description":"CREATE RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-record.md","sourceDirName":"commands-legacy","slug":"/commands/create-record","permalink":"/docs/es/commands/create-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-record","title":"CREATE RECORD","slug":"/commands/create-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records","permalink":"/docs/es/category/records"},"next":{"title":"DELETE RECORD","permalink":"/docs/es/commands/delete-record"}}'),a=n("785893"),t=n("250065");let d={id:"create-record",title:"CREATE RECORD",slug:"/commands/create-record",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"CREATE RECORD"})," {( ",(0,a.jsx)(r.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"tabla"}),(0,a.jsx)(r.td,{children:"Table"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Tabla para la cual crear un nuevo registro, o Tabla por defecto, si se omite"})]})})]}),"\n",(0,a.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"CREATE RECORD"})," crea un nuevo registro vac\xedo para ",(0,a.jsx)(r.em,{children:"tabla,"})," pero no muestra el nuevo registro. Utilice el comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"})," para crear un nuevo registro y mostrarlo en un formulario de entrada."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"CREATE RECORD"})," se utiliza en lugar de ",(0,a.jsx)(r.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"})," cuando los valores de los registros se introducen por programaci\xf3n. El nuevo registro se convierte en el registro actual para la selecci\xf3n actual pero la selecci\xf3n actual no se modifica."]}),"\n",(0,a.jsxs)(r.p,{children:["El registro existe en memoria \xfanicamente hasta que un comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/save-record",children:"SAVE RECORD"})," se ejecute para la tabla. Si cambia el registro actual (por ejemplo, por una b\xfasqueda) antes de guardar el registro, el nuevo registro se pierde."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," este comando no requiere ",(0,a.jsx)(r.em,{children:"tabla"})," para estar en modo lectura/escritura. Se puede utilizar incluso cuando la tabla est\xe1 en modo de s\xf3lo lectura (ver ",(0,a.jsx)(r.em,{children:"Record Locking"}),")."]}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(r.p,{children:"El siguiente ejemplo archiva los registros que tienen m\xe1s de 30 d\xedas. Esta operaci\xf3n se realiza para la creaci\xf3n de registros en una tabla de archivo. Una vez termina la operaci\xf3n, los registros archivados son eliminados de la tabla [Cuentas]:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// B\xfasqueda de registros de m\xe1s de 30 d\xedas\n\xa0QUERY([Cuentas];[Cuentas]Introducido<(Current date 30))\n\xa0For($vlRegistro;1;Records in selection([Cuentas]))\xa0// Bucle una vez por registro\n\xa0\xa0\xa0\xa0CREATE RECORD([Archivo])\xa0// Creaci\xf3n de un nuevo registro de archivo\n\xa0\xa0\xa0\xa0[Archive]Number:=[Cuentas]Numero\xa0// Copia de los campos en el archivo\n\xa0\xa0\xa0\xa0[Archive]Entered:=[Cuentas]Introducido\n\xa0\xa0\xa0\xa0[Archive]Amount:=[Cuentas]Cantidad\n\xa0\xa0\xa0\xa0SAVE RECORD([Cuentas])\xa0// Guardar el registro del archivo\n\xa0\xa0\xa0\xa0NEXT RECORD([Cuentas])\xa0// Mover el registro de cuenta siguiente\n\xa0End for\n\xa0DELETE SELECTION([Cuentas])\xa0// Borrar los registros de cuenta\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/modify-record",children:"MODIFY RECORD"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,a.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"68"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modifica el registro actual"}),(0,a.jsx)(r.td,{})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return d}});var s=n(667294);let a={},t=s.createContext(a);function d(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);