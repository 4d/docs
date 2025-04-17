"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74447"],{368934:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/add-record","title":"ADD RECORD","description":"ADD RECORD ( {;}{*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/add-record.md","sourceDirName":"commands-legacy","slug":"/commands/add-record","permalink":"/docs/es/20-R8/commands/add-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"add-record","title":"ADD RECORD","slug":"/commands/add-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCEPT","permalink":"/docs/es/20-R8/commands/accept"},"next":{"title":"CANCEL","permalink":"/docs/es/20-R8/commands/cancel"}}'),r=a("785893"),i=a("250065");let d={id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},l=void 0,o={},t=[{value:"Compatibilidad",id:"compatibilidad",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ADD RECORD"})," ( {",(0,r.jsx)(n.em,{children:"tabla"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla a utilizar para entrada de datos o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Ocultar barras de desplazamiento"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"compatibilidad",children:"Compatibilidad"}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsxs)(n.em,{children:["Este comando se implement\xf3 en las primeras versiones de 4D y sigue siendo \xfatil para la creaci\xf3n de prototipos o desarrollos b\xe1sicos. Sin embargo, para construir interfaces personalizadas y modernas, ahora se recomienda utilizar formularios gen\xe9ricos basados en el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/dialog",children:"DIALOG"})," que ofrecen funciones avanzadas y un mejor control sobre el flujo de datos."]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"ADD RECORD"})," permite al usuario a\xf1adir un nuevo registro en la tabla ",(0,r.jsx)(n.em,{children:"tabla"})," o en la tabla por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"tabla"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ADD RECORD"})," crea un nuevo registro, hace del nuevo registro el registro actual para el proceso actual y muestra el formulario de entrada actual. En el entorno Men\xfas personalizados, despu\xe9s de que el usuario acepta el nuevo registro, el nuevo registro es el \xfanico registro en la selecci\xf3n actual."]}),"\n",(0,r.jsx)(n.p,{children:"La siguiente imagen presenta un formulario de entrada de datos t\xedpico."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(443099).Z+"",width:"642",height:"374"})}),"\n",(0,r.jsxs)(n.p,{children:["El formulario aparece en la ventana del primer plano del proceso. La ventana tiene barras de desplazamiento y una caja de control del tama\xf1o. Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," las barras de desplazamiento no aparecen y la ventana del formulario no puede reducirse."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(472706).Z+"",width:"689",height:"414"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ADD RECORD"})," muestra el formulario hasta que el usuario acepta o cancela el registro. Si el usuario est\xe1 a\xf1adiendo varios registros, el comando debe ejecutarse una vez para cada registro."]}),"\n",(0,r.jsxs)(n.p,{children:["El registro se guarda (aceptado) si el usuario hace clic en el bot\xf3n Aceptar o al presionar la tecla Intro (teclado num\xe9rico), o si se ejecuta el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/accept",children:"ACCEPT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El registro no se guarda (cancelado) si el usuario hace clic en el bot\xf3n Cancelar o presiona la tecla de anulaci\xf3n Esc o si se ejecuta el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/cancel",children:"CANCEL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando no requiere ",(0,r.jsx)(n.em,{children:"tabla"})," para estar en modo lectura/escritura. Puede ser utilizado incluso si la tabla est\xe1 en modo lectura \xfanicamente (ver ",(0,r.jsx)(n.em,{children:"Record Locking"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de llamar a ",(0,r.jsx)(n.strong,{children:"ADD RECORD"}),", OK toma el valor 1 si se acepta el registro y 0 si se cancela."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el registro permanece en memoria, incluso cuando se cancela, y puede guardarse si se ejecuta ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/save-record",children:"SAVE RECORD"})," antes de que cambie el puntero del registro actual."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo es un bucle utilizado generalmente para a\xf1adir nuevos registros a una base:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Clientes];"Entrada")\xa0// Designar el formulario de entrada de la tabla [Clientes]\n\xa0Repeat\xa0// Bucle hasta que el usuario cancele\n\xa0\xa0\xa0\xa0ADD RECORD([Clientes];*)\xa0// A\xf1adir un registro a la tabla [Clientes]\n\xa0Until(OK=0)\xa0// Hasta que el usuario cancele\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo busca un cliente en la base. Dependiendo de los resultado de la b\xfasqueda, suceder\xe1 una de estas cosas. Si no se encuentra un cliente, entonces se le permite al usuario a\xf1adir un nuevo cliente con ADD RECORD. Si se encuentra al menos un cliente, se le presenta al usuario el primer registro encontrado, el cual puede modificarse con ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/modify-record",title:"MODIFY RECORD",children:"MODIFY RECORD"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0READ WRITE([Clientes])\n\xa0FORM SET INPUT([Clientes];"Entrada")\xa0// Designar el formulario de entrada\n\xa0vlCustNum:=Num(Request("Introducir un n\xfamero de cliente:"))\xa0// Obtener el n\xfamero de cliente\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Clientes];[Clientes]CustNo=vlCustNum)\xa0// Buscar el cliente\n\xa0\xa0\xa0\xa0If(Records in selection([Clientes])=0)\xa0// si no se encuentra ning\xfan cliente\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ADD RECORD([Clientes])\xa0// A\xf1adir un nuevo registro\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Locked([Clientes])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MODIFY RECORD([Clientes])\xa0// Modificar el registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UNLOAD RECORD([Clientes])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El registro est\xe1 siendo utilizado actualmente.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si se acepta el registro y 0 si se cancela. La variable OK no toma ning\xfan valor hasta que el registro haya sido validado o anulado."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/accept",children:"ACCEPT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/cancel",children:"CANCEL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/create-record",children:"CREATE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/modify-record",children:"MODIFY RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"56"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica el registro actual"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},443099:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict2804768.en-90f1dbe0b38710d7f9696cee3162c305.png"},472706:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict2804770.en-5d1c5b3a4fa0cb23ab83527536f94b7e.png"},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return d}});var s=a(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);