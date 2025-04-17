"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43828"],{356700:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/delete-folder","title":"DELETE FOLDER","description":"DELETE FOLDER ( carpeta {; opcionEliminacion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-folder.md","sourceDirName":"commands-legacy","slug":"/commands/delete-folder","permalink":"/docs/es/20-R8/commands/delete-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-folder","title":"DELETE FOLDER","slug":"/commands/delete-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE DOCUMENT","permalink":"/docs/es/20-R8/commands/delete-document"},"next":{"title":"DOCUMENT LIST","permalink":"/docs/es/20-R8/commands/document-list"}}'),i=r("785893"),a=r("250065");let t={id:"delete-folder",title:"DELETE FOLDER",slug:"/commands/delete-folder",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DELETE FOLDER"})," ( ",(0,i.jsx)(n.em,{children:"carpeta"})," {; ",(0,i.jsx)(n.em,{children:"opcionEliminacion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"carpeta"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre o ruta de acceso completa de la carpeta a borrar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"opcionEliminacion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opci\xf3n de eliminaci\xf3n de la carpeta"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"DELETE FOLDER"}),"borra la carpeta cuyo nombre o ruta completa se pasa en ",(0,i.jsx)(n.em,{children:"carpeta"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, por razones de seguridad, si se omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcionEliminacion"}),", ",(0,i.jsx)(n.strong,{children:"DELETE FOLDER"})," s\xf3lo permite carpetas vac\xedas a eliminar. Si desea que el comando pueda eliminar carpetas no vac\xedas, debe utilizar el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcionEliminacion"}),". En ",(0,i.jsx)(n.em,{children:"opcionEliminacion"}),', puede pasar una de las siguientes constantes, que se encuentra en el tema "',(0,i.jsx)(n.em,{children:"Documentos sistema"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Delete only if empty"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Elimina la carpeta s\xf3lo cuando est\xe1 vac\xeda"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Delete with contents"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Elimina la carpeta junto con todo su contenido"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cuando se pasa Delete only if empty (0) o si se omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcionEliminacion"}),":\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La carpeta especificada en el par\xe1metro ",(0,i.jsx)(n.em,{children:"carpeta"})," solamente se borra si est\xe1 vac\xeda; de lo contrario, el comando no hace nada y se genera un error -47 (el archivo ya est\xe1 abierto, o la carpeta no est\xe1 vac\xeda)."]}),"\n",(0,i.jsx)(n.li,{children:"Si la carpeta especificada no existe, se genera el error -120 (Intento de acceso a un archivo con una ruta de acceso que especifica un directorio no existente)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cuando se pasa Delete with contents (1):\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se elimina la carpeta, junto con todo su contenido.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Advertencia:"})," incluso cuando esta carpeta y/o su contenido est\xe1n bloqueados o en modo s\xf3lo lectura, si el usuario actual tiene los derechos de acceso adecuados, se eliminan."]}),"\n",(0,i.jsx)(n.li,{children:'Si esta carpeta, o cualquiera de los archivos que contiene, no se pueden eliminar, la eliminaci\xf3n se interrumpe tan pronto como se detecta el primer elemento inaccesible, y se devuelve un error (*). En este caso, la carpeta se puede eliminar s\xf3lo parcialmente. Cuando se cancela la eliminaci\xf3n, puede utilizar el comando [#cmd id="1015"/] para recuperar el nombre y la ruta del archivo que origina el error.'}),"\n",(0,i.jsxs)(n.li,{children:["Si la carpeta especificada no existe, el comando no hace nada y ning\xfan error se devuelve.",(0,i.jsx)(n.br,{}),"\n(*) En Windows: -54 (Intento de abrir un archivo bloqueado para escritura)",(0,i.jsx)(n.br,{}),"\nEn macOS: -45 (El archivo est\xe1 bloqueado o la ruta de acceso no es correcta)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Puede interceptar estos errores utilizando un m\xe9todo instalado por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/delete-document",children:"DELETE DOCUMENT"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"693"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var s=r(667294);let i={},a=s.createContext(i);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);