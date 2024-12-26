"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71105"],{839540:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/create-alias","title":"CREATE ALIAS","description":"CREATE ALIAS ( rutaObjetivo ; rutaAlias )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-alias.md","sourceDirName":"commands-legacy","slug":"/commands/create-alias","permalink":"/docs/es/commands/create-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-alias","title":"CREATE ALIAS","slug":"/commands/create-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY DOCUMENT","permalink":"/docs/es/commands/copy-document"},"next":{"title":"Create document","permalink":"/docs/es/commands/create-document"}}'),s=a("785893"),t=a("250065");let i={id:"create-alias",title:"CREATE ALIAS",slug:"/commands/create-alias",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CREATE ALIAS"})," ( ",(0,s.jsx)(n.em,{children:"rutaObjetivo"})," ; ",(0,s.jsx)(n.em,{children:"rutaAlias"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rutaObjetivo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre o ruta de acceso al objetivo del alias/atajo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rutaAlias"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre o ruta de acceso completa del alias/del atajo a crear"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando CREATE ALIAS crea un alias (llamado \u201Catajo\u201D en Windows) del archivo o carpeta objetivo pasado en ",(0,s.jsx)(n.em,{children:"rutaObjetivo"}),". El nombre y la ubicaci\xf3n son definidos por el par\xe1metro ",(0,s.jsx)(n.em,{children:"rutaAlias"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Puede crear un alias de todo tipo de documento o de carpeta. El icono del alias ser\xe1 id\xe9ntico al del elemento objetivo. El icono contiene una peque\xf1a flecha en la parte inferior izquierda. Bajo Mac OS, el nombre del icono se muestra en caracteres en it\xe1lica."}),"\n",(0,s.jsxs)(n.p,{children:["Este comando no asigna un nombre por defecto, el nombre tiene que pasarse en el par\xe1metro ",(0,s.jsx)(n.em,{children:"rutaAlias"}),". Si s\xf3lo pasa un nombre en este par\xe1metro, el alias se crea en la carpeta activa actual (generalmente la carpeta que contiene el archivo de estructura)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," bajo Windows, los atajos son archivos con extensi\xf3n \u201C.LNK\u201D (invisible). Si esta extensi\xf3n no se pasa, es a\xf1adida autom\xe1ticamente por el comando."]}),"\n",(0,s.jsxs)(n.p,{children:["Si se pasa una cadena vac\xeda en ",(0,s.jsx)(n.em,{children:"rutaObjetivo"}),", el comando no hace nada."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Su base genera archivos de texto llamados \u201CInformeN\xfamero\u201D almacenados en la carpeta de la base. El usuario quiere crear atajos a estos informes y almacenarlos en una ubicaci\xf3n conveniente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo CREAR_INFORME\n\xa0var $vtInf : Text\n\xa0C_STRING(250;$vtruta)\n\xa0C_STRING(80;$vanombre)\n\xa0var vDoc : Time\n\xa0C_INTEGER($NumInforme)\n\xa0\n\xa0$vtInf:=...\xa0//Crear informe\n\xa0$NumInforme:=...\xa0//Calculo del n\xfamero del informe\n\xa0$vanombre:="Informe"+String($NumInforme)+".txt"\xa0//Nombre del archivo\n\xa0vDoc:=Create document($vanombre)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;$vtInf)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\n\xa0\xa0//A\xf1adir el alias\n\xa0\xa0\xa0\xa0CONFIRM("\xbfCrear un alias para este informe?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtRuta:=Select folder("\xbfD\xf3nde quiere crear el alias?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE ALIAS($vaNombre;$vtRuta+$vanombre)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW ON DISK($vtRuta+$vanombre)\n\xa0\xa0//Mostrar la ubicaci\xf3n del alias\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el comando se ejecuta correctamente, si no toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/resolve-alias",children:"RESOLVE ALIAS"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"694"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var r=a(667294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);