"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12733],{229735:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=n(474848),o=n(28453);const r={id:"modify-record",title:"MODIFY RECORD",slug:"/commands/modify-record",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/modify-record",title:"MODIFY RECORD",description:"MODIFY RECORD ( {;}{*} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modify-record.md",sourceDirName:"commands-legacy",slug:"/commands/modify-record",permalink:"/docs/es/commands/modify-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"modify-record",title:"MODIFY RECORD",slug:"/commands/modify-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Modified",permalink:"/docs/es/commands/modified"},next:{title:"Old",permalink:"/docs/es/commands/old"}},c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const a={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"MODIFY RECORD"})," ( {",(0,s.jsx)(a.em,{children:"tabla"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tabla"}),(0,s.jsx)(a.td,{children:"Table"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Tabla a utilizar para entrada de datos o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"*"}),(0,s.jsx)(a.td,{children:"Operator"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Ocultar barras de desplazamiento"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["El comando MODIFY RECORD permite al usuario modificar el registro actual de la tabla ",(0,s.jsx)(a.em,{children:"tabla"})," o de la tabla por defecto si se omite el par\xe1metro ",(0,s.jsx)(a.em,{children:"tabla"}),". MODIFY RECORD carga el registro, si no se ha cargado por el proceso actual y muestra el formulario de entrada actual. Si no hay registro actual, entonces MODIFY RECORD no hace nada. MODIFY RECORD no afecta la selecci\xf3n actual."]}),"\n",(0,s.jsxs)(a.p,{children:["El formulario aparece en la ventana del primer plano del proceso. La ventana tiene barras de desplazamiento y una caja de control del tama\xf1o. Si pasa el par\xe1metro opcional ",(0,s.jsx)(a.em,{children:"*"})," la ventana aparece sin las barras de desplazamiento y sin la caja de control de tama\xf1o."]}),"\n",(0,s.jsxs)(a.p,{children:["Para utilizar MODIFY RECORD, el registro actual debe tener acceso de lectura-escritura y no debe estar bloqueado.",(0,s.jsx)(a.br,{}),"\nSi el formulario contiene botones de navegaci\xf3n entre los registros de la selecci\xf3n, MODIFY RECORD le permite al usuario hacer clic en los botones para modificar registros y moverse a otros registros."]}),"\n",(0,s.jsxs)(a.p,{children:["El registro se guarda (aceptado) si el usuario hace clic en el bot\xf3n Aceptar o presiona la tecla Intro (teclado num\xe9rico) o si se ejecuta el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/accept",title:"ACCEPT",children:"ACCEPT"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"El registro no se guarda si el usuario hace clic en un bot\xf3n de tipo CANCELAR o presiona la combinaci\xf3n de teclas (Ctrl-Punto en Windows, Comando-Punto en Macintosh), o si se ejecuta el comando CANCEL."}),"\n",(0,s.jsx)(a.p,{children:"Despu\xe9s de llamar MODIFY RECORD, la variable sistema OK toma el valor 1 si se acepta el registro y 0 si se cancela."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," el registro permanece en memoria, incluso cuando se cancela, y puede guardarse si se ejecuta ",(0,s.jsx)(a.a,{href:"/docs/es/commands/save-record",title:"SAVE RECORD",children:"SAVE RECORD"})," antes de que el puntero del registro actual cambie."]}),"\n",(0,s.jsx)(a.p,{children:"Si est\xe1 utilizando MODIFY RECORD y el usuario no realiza ninguna modificaci\xf3n al registro, no se considera que el registro haya sido modificado y aunque acepte el registro no se guardar\xe1 nuevamente. Las acciones tales como el cambio del valor de variables, la selecci\xf3n de casillas de selecci\xf3n y de botones de radio no clasifican como modificaciones. \xdanicamente la modificaci\xf3n del valor de un campo, a trav\xe9s de una entrada manual o de un m\xe9todo, hace que el registro se guarde nuevamente."}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(a.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/add-record",title:"ADD RECORD",children:"ADD RECORD"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(a.p,{children:"La variable sistema OK toma el valor 1 si se acepta el registro y 0 si se cancela. La variable OK no toma ning\xfan valor hasta que el registro haya sido validado o anulado."}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/locked",children:"Locked"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/modified-record",children:"Modified record"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/unload-record",children:"UNLOAD RECORD"})]})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>d});var s=n(296540);const o={},r=s.createContext(o);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);