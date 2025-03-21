"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93510"],{71531:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/delete-record","title":"DELETE RECORD","description":"DELETE RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-record.md","sourceDirName":"commands-legacy","slug":"/commands/delete-record","permalink":"/docs/es/20-R7/commands/delete-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-record","title":"DELETE RECORD","slug":"/commands/delete-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RECORD","permalink":"/docs/es/20-R7/commands/create-record"},"next":{"title":"DISPLAY RECORD","permalink":"/docs/es/20-R7/commands/display-record"}}'),d=r("785893"),a=r("250065");let t={id:"delete-record",title:"DELETE RECORD",slug:"/commands/delete-record",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," {( ",(0,d.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla de la cual borrar el registro actual, o Tabla por defecto, si se omite"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["DELETE RECORD borra el registro actual de ",(0,d.jsx)(n.em,{children:"tabla"})," en el proceso. Si no hay registro actual para ",(0,d.jsx)(n.em,{children:"tabla"})," en el proceso, DELETE RECORD no tiene efecto. En un formulario, puede crear un bot\xf3n Borrar registro y asignarle la acci\xf3n autom\xe1tica correspondiente, en lugar de utilizar este comando."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["si el registro actual es descargado de la memoria antes de la llamada a DELETE RECORD (por ejemplo en respuesta a un ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/unload-record",children:"UNLOAD RECORD"}),"), la selecci\xf3n actual de tabla est\xe1 vac\xeda despu\xe9s de la eliminaci\xf3n."]}),"\n",(0,d.jsxs)(n.li,{children:["el comando DELETE RECORD no hace nada cuando la tabla est\xe1 en modo ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/read-only",children:"READ ONLY"}),", independientemente de si el registro a borrar est\xe1 bloqueado o no."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["La eliminaci\xf3n de registros es una operaci\xf3n permanente y no puede deshacerse (excepto cuando se ejecuta durante una transacci\xf3n, ver ",(0,d.jsx)(n.em,{children:"Utilizaci\xf3n de transacciones"}),")."]}),"\n",(0,d.jsx)(n.p,{children:"Si se borra un registro, el n\xfamero del registro se reutilizar\xe1 cuando se creen nuevos registros. No utilice el n\xfamero del registro como identificador del registro si su base permite la eliminaci\xf3n de registros."}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo borra un registro de un empleado. El c\xf3digo pregunta al usuario el n\xfamero del empleado a borrar, busca el registro correspondiente y lo borra:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0vBuscar:=Request("N\xfamero del empleado a borrar:")\xa0// Obtiene un n\xfamero de identificaci\xf3n del empleado\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Empleado];[Empleado]ID =vBuscar)\xa0// Buscar el empleado\n\xa0\xa0\xa0\xa0DELETE RECORD([Empleado])\xa0// Borrar el empleado\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/locked",children:"Locked"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"58"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica el registro actual"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let d={},a=s.createContext(d);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);