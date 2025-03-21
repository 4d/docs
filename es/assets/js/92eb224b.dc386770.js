"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40433"],{492603:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>t,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"commands-legacy/log-file","title":"Log File","description":"Log File  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/log-file.md","sourceDirName":"commands-legacy","slug":"/commands/log-file","permalink":"/docs/es/commands/log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"log-file","title":"Log File","slug":"/commands/log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTEGRATE MIRROR LOG FILE","permalink":"/docs/es/commands/integrate-mirror-log-file"},"next":{"title":"LOG FILE TO JSON","permalink":"/docs/es/commands/log-file-to-json"}}'),s=i("785893"),a=i("250065");let r={id:"log-file",title:"Log File",slug:"/commands/log-file",displayed_sidebar:"docs"},o=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log File"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre completo del archivo historial de la base"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando Log File devuelve el nombre largo (es decir la ruta de acceso completa del archivo, incluyendo su nombre) del archivo historial actual de la base abierta."}),"\n",(0,s.jsx)(n.p,{children:"Si la base funciona sin un archivo historial, el comando devuelve una cadena vac\xeda y la variable sistema OK toma el valor 0."}),"\n",(0,s.jsx)(n.p,{children:"Si la base funciona con un archivo historial, la variable sistema OK toma el valor 1. La ruta de acceso devuelta por el comando se expresa con la sintaxis de la plataforma actual."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Advertencia:"})," si ejecuta este comando desde un equipo 4D Client, s\xf3lo devuelve el nombre del archivo historial, no el nombre largo."]}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si la base funciona sin archivo de historial, la variable sistema OK toma el valor 0; de lo contrario, toma el valor 1."}),"\n",(0,s.jsx)(n.li,{children:"Si por alguna raz\xf3n el archivo de historial se vuelve inaccesible durante la sesi\xf3n de trabajo, se genera el error 1274 y 4D Server no permitir\xe1 a los usuarios modificar o escribir datos. Cuando el archivo de historial se vuelve accesible de nuevo, es necesario hacer un backup."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/select-log-file",children:"SELECT LOG FILE"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"928"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var l=i(667294);let s={},a=l.createContext(s);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);