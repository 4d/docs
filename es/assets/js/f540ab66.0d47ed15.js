"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84380"],{258822:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/select-log-file","title":"SELECT LOG FILE","description":"SELECT LOG FILE ( historial )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/select-log-file","permalink":"/docs/es/commands/select-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-log-file","title":"SELECT LOG FILE","slug":"/commands/select-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE INFO","permalink":"/docs/es/commands/restore-info"},"next":{"title":"BLOB","permalink":"/docs/es/category/blob"}}'),a=n("785893"),i=n("250065");let l={id:"select-log-file",title:"SELECT LOG FILE",slug:"/commands/select-log-file",displayed_sidebar:"docs"},o=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let r={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"SELECT LOG FILE"})," ( ",(0,a.jsx)(r.em,{children:"historial"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"historial"}),(0,a.jsx)(r.td,{children:"*, Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nombre del archivo historial o * para cerrar el historial actual"})]})})]}),"\n",(0,a.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["El comando ",(0,a.jsx)(r.strong,{children:"SELECT LOG FILE"})," crea, o cierra el archivo historial de acuerdo al valor que se pase en ",(0,a.jsx)(r.em,{children:"historial"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Pase en ",(0,a.jsx)(r.em,{children:"historial"}),", el nombre o la ruta de acceso completa del archivo historial a crear. Si pasa \xfanicamente un nombre, el archivo se crear\xe1 junto al archivo de estructura de la base."]}),"\n",(0,a.jsxs)(r.p,{children:["Si pasa una cadena vac\xeda en ",(0,a.jsx)(r.em,{children:"historial"}),", ",(0,a.jsx)(r.strong,{children:"SELECT LOG FILE"})," presenta una caja de di\xe1logo est\xe1ndar de registro de archivo, permitiendo al usuario elegir el nombre y la ubicaci\xf3n del archivo historial a crear. Si el archivo se crea correctamente, la variable OK toma el valor 1. Por el contrario, si el usuario hace clic en el bot\xf3n Cancelar o si el archivo historial no se puede crear, OK toma el valor 0."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," el nuevo archivo de historial no se genera de inmediato despu\xe9s de la ejecuci\xf3n del comando, sino despu\xe9s del siguiente backup (el par\xe1metro se conserva en el archivo de datos y se tendr\xe1 en cuenta incluso si la base se cierra). Puede llamar al comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/backup",children:"BACKUP"})," para provocar la creaci\xf3n del archivo historial."]}),"\n",(0,a.jsxs)(r.p,{children:["Si pasa ",(0,a.jsx)(r.em,{children:'"*"'})," en ",(0,a.jsx)(r.em,{children:"historial"}),", ",(0,a.jsx)(r.strong,{children:"SELECT LOG FILE"})," cierra el archivo historial actual de la base. La variable OK toma el valor 1 cuando el archivo historial est\xe1 cerrado."]}),"\n",(0,a.jsxs)(r.p,{children:["Si utiliza ",(0,a.jsx)(r.strong,{children:"SELECT LOG FILE"})," para crear un archivo historial antes de que el backup haya terminado y el archivo de datos ya contiene registros, 4D genera el error ",(0,a.jsx)(r.em,{children:"-4447,"})," el cual puede interceptar con un m\xe9todo ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(r.p,{children:"OK toma el valor 1 si el archivo hist\xf3rico es creado o cerrado correctamente."}),"\n",(0,a.jsx)(r.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsxs)(r.p,{children:["Se genera el error -4447 si no se puede realizar la operaci\xf3n porque la base de datos necesita una copia de seguridad. Puede interceptar el error con un m\xe9todo ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,a.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"345"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modifica variables"}),(0,a.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return l}});var s=n(667294);let a={},i=s.createContext(a);function l(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);