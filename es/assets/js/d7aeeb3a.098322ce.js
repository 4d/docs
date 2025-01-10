"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12719"],{278779:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/open-administration-window","title":"OPEN ADMINISTRATION WINDOW","description":"OPEN ADMINISTRATION WINDOW","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-administration-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-administration-window","permalink":"/docs/es/commands/open-administration-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-administration-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-administration-window","title":"OPEN ADMINISTRATION WINDOW","slug":"/commands/open-administration-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/es/commands/notify-resources-folder-modification"},"next":{"title":"OPEN DATA FILE","permalink":"/docs/es/commands/open-data-file"}}'),t=i("785893"),a=i("250065");let d={id:"open-administration-window",title:"OPEN ADMINISTRATION WINDOW",slug:"/commands/open-administration-window",displayed_sidebar:"docs"},r=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OPEN ADMINISTRATION WINDOW"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando OPEN ADMINISTRATION WINDOW muestra la ventana de administraci\xf3n del servidor en el equipo que lo ejecuta. La ventana de administraci\xf3n de 4D Server permite visualizar los par\xe1metros actuales y efectuar varias operaciones de mantenimiento (ver la Gu\xeda de referencia de 4D). A partir de la versi\xf3n 11 de 4D Server, esta ventana puede mostrarse desde un equipo cliente:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(207308).Z+"",width:"1028",height:"694"})}),"\n",(0,t.jsx)(n.p,{children:"Este comando debe llamarse en el contexto de una aplicaci\xf3n 4D conectada o de un 4D Server. No hace nada si:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"se llama en una aplicaci\xf3n 4D en modo local,"}),"\n",(0,t.jsxs)(n.li,{children:["es ejecutado por un usuario diferente al Dise\xf1ador o al Administrador (en este caso, se genera el error -9991, ver la secci\xf3n ",(0,t.jsx)(n.em,{children:"Errores de la base de datos"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este es el c\xf3digo de un bot\xf3n de administraci\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Application type=4D local mode)\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D remote mode)\n\xa0\xa0\xa0\xa0OPEN ADMINISTRATION WINDOW\n\xa0\xa0// ...\n\xa0End if\n\xa0If(Application type=4D Server)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0OPEN SECURITY CENTER\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"Si el comando ha sido ejecutado correctamente, la variable sistema OK toma el valor 1. En caso contrario, toma el valor 0."}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/open-security-center",children:"OPEN SECURITY CENTER"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1047"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},207308:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pict12004.es-b4b92b27777db28b99f14c5e966ea92d.png"},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return d}});var s=i(667294);let t={},a=s.createContext(t);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);