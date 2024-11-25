"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2157"],{263627:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>t,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/save-record","title":"SAVE RECORD","description":"SAVE RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/save-record.md","sourceDirName":"commands-legacy","slug":"/commands/save-record","permalink":"/docs/es/commands/save-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"save-record","title":"SAVE RECORD","slug":"/commands/save-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in table","permalink":"/docs/es/commands/records-in-table"},"next":{"title":"Sequence number","permalink":"/docs/es/commands/sequence-number"}}'),s=n("785893"),o=n("250065");let d={id:"save-record",title:"SAVE RECORD",slug:"/commands/save-record",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SAVE RECORD"})," {( ",(0,s.jsx)(r.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabla"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabla del registro a guardar o Tabla por defecto, si se omite"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["SAVE RECORD guarda el registro actual de ",(0,s.jsx)(r.em,{children:"tabla"})," en el proceso actual. Si no hay registro actual, se ignora el comando SAVE RECORD."]}),"\n",(0,s.jsx)(r.p,{children:"Puede utilizar SAVE RECORD para guardar un registro creado o modificado por programaci\xf3n. Cuando un registro ha sido modificado y validado por el usuario en un formulario, no es necesario guardar con SAVE RECORD. Un registro que ha sido modificado por el usuario en un formulario, pero ha sido cancelado, a\xfan pueden ser guardado con SAVE RECORD."}),"\n",(0,s.jsx)(r.p,{children:"Estos son algunos casos donde es necesario SAVE RECORD:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Para guardar un nuevo registro creado con ",(0,s.jsx)(r.a,{href:"/docs/es/commands/create-record",children:"CREATE RECORD"})," o ",(0,s.jsx)(r.a,{href:"/docs/es/commands/duplicate-record",children:"DUPLICATE RECORD"})]}),"\n",(0,s.jsxs)(r.li,{children:["Para guardar datos desde ",(0,s.jsx)(r.a,{href:"/docs/es/commands/receive-record",children:"RECEIVE RECORD"})]}),"\n",(0,s.jsx)(r.li,{children:"Para guardar un registro modificado por un m\xe9todo"}),"\n",(0,s.jsxs)(r.li,{children:["Para guardar un registro que contiene un subregistro creado o modificado por uno de estos comandos ",(0,s.jsx)(r.em,{children:"_o_ADD SUBRECORD"}),", ",(0,s.jsx)(r.em,{children:"_o_CREATE SUBRECORD"}),", o ",(0,s.jsx)(r.em,{children:"_o_MODIFY SUBRECORD"})]}),"\n",(0,s.jsx)(r.li,{children:"Durante la entrada de datos, para guardar el registro mostrado antes de llamar un comando que cambia el registro actual"}),"\n",(0,s.jsx)(r.li,{children:"Durante la entrada de datos, para guardar el registro actual"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"No debe ejecutar SAVE RECORD en el evento de formulario On Validate de un registro que ha sido aceptado. Si lo hace, el registro se guardar\xe1 dos veces."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," guardar un registro que contiene campos objeto editados generalmente requiere que notifique expl\xedcitamente a 4D antes de llamar a ",(0,s.jsx)(r.strong,{children:"SAVE RECORD"}),". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(r.em,{children:"Guardar campos objeto"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"El siguiente ejemplo es parte de un m\xe9todo que lee registros de un documento. En esta parte del c\xf3digo, se recibe un registro, y luego, si se recibe correctamente, se guarda el registro:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0RECEIVE RECORD([Clientes])\xa0// Recepci\xf3n del registro a partir del disco\n\xa0If(OK=1)\xa0// Si el registro se recibe correctamente\u2026\n\xa0\xa0\xa0\xa0SAVE RECORD([Clientes])\xa0// guardar\n\xa0End if\n"})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/commands/create-record",children:"CREATE RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/locked",children:"Locked"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Triggers"})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var a=n(667294);let s={},o=a.createContext(s);function d(e){let r=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);