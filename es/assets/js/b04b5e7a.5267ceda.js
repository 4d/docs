"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2693],{312955:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(474848),o=n(28453);const r={id:"rollback",title:"P\xe1gina Retroceso",sidebar_label:"P\xe1gina Retroceso"},i=void 0,c={id:"MSC/rollback",title:"P\xe1gina Retroceso",description:"La p\xe1gina Retroceso permite acceder a la funci\xf3n de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una funci\xf3n de anulaci\xf3n aplicada en varios niveles. Es especialmente \xfatil cuando un registro ha sido borrado por error en una base de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/es/20-R6/MSC/rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"rollback",title:"P\xe1gina Retroceso",sidebar_label:"P\xe1gina Retroceso"},sidebar:"docs",previous:{title:"P\xe1gina compactado",permalink:"/docs/es/20-R6/MSC/compact"},next:{title:"P\xe1gina Restauraci\xf3n",permalink:"/docs/es/20-R6/MSC/restore"}},t={},l=[];function d(e){const a={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"La p\xe1gina Retroceso permite acceder a la funci\xf3n de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una funci\xf3n de anulaci\xf3n aplicada en varios niveles. Es especialmente \xfatil cuando un registro ha sido borrado por error en una base de datos."}),"\n",(0,s.jsx)(a.p,{children:"Esta funci\xf3n s\xf3lo est\xe1 disponible cuando la aplicaci\xf3n trabaja con un archivo de historial de datos."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:n(267385).A+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Si la base de datos est\xe1 encriptada y no se ha suministrado una llave de datos v\xe1lida correspondiente al archivo de registro abierto, los valores encriptados no se muestran en la columna ",(0,s.jsx)(a.strong,{children:"Valores"})," y se muestra un di\xe1logo en el que se solicita la frase secreta o la llave de datos si se hace clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Retroceso"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["El contenido y el funcionamiento de la lista de operaciones es el mismo que el de la ventana ",(0,s.jsx)(a.a,{href:"/docs/es/20-R6/MSC/analysis",children:"An\xe1lisis de actividades"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Para realizar un retroceso entre las operaciones, seleccione la linea tras la cual deben anularse todas las operaciones. La operaci\xf3n de la l\xednea seleccionada ser\xe1 la \xfaltima conservada. Si, por ejemplo, desea cancelar una eliminaci\xf3n, seleccione la operaci\xf3n situada justo antes de ella. La operaci\xf3n de eliminaci\xf3n, as\xed como todas las operaciones posteriores, se cancelar\xe1n."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:n(411298).A+"",width:"1008",height:"366"})}),"\n",(0,s.jsxs)(a.p,{children:["A continuaci\xf3n, haga clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Retroceso"}),". 4D le pide que confirme la operaci\xf3n. Si hace clic en ",(0,s.jsx)(a.strong,{children:"Aceptar"}),", los datos se restauran al estado exacto en el que se encontraban en el momento de la acci\xf3n seleccionada."]}),"\n",(0,s.jsx)(a.p,{children:"El men\xfa que se encuentra en la parte inferior de la ventana permite seleccionar un archivo de historial que se utilizar\xe1 cuando se aplique la funci\xf3n de retorno a una base restaurada desde un archivo. En este caso, debe especificar el archivo de historial de datos correspondiente al archivo."}),"\n",(0,s.jsxs)(a.p,{children:["As\xed es como funciona la funci\xf3n de retroceso: cuando el usuario hace clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Retroceso"}),", 4D cierra la base de datos actual y restaura la \xfaltima copia de seguridad de los datos de la base. La base restaurada se abre y 4D integra las operaciones del archivo de historial de datos hasta la operaci\xf3n seleccionada. Si la base a\xfan no se ha guardado, 4D se inicia con un archivo de datos vac\xedo."]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},267385:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},411298:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>c});var s=n(296540);const o={},r=s.createContext(o);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);