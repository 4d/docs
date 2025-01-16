"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5231"],{48680:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/qr-run","title":"QR RUN","description":"QR RUN ( area )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-run.md","sourceDirName":"commands-legacy","slug":"/commands/qr-run","permalink":"/docs/es/commands/qr-run","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-run.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-run","title":"QR RUN","slug":"/commands/qr-run","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR REPORT TO BLOB","permalink":"/docs/es/commands/qr-report-to-blob"},"next":{"title":"QR SET AREA PROPERTY","permalink":"/docs/es/commands/qr-set-area-property"}}'),a=r("785893"),t=r("250065");let d={id:"qr-run",title:"QR RUN",slug:"/commands/qr-run",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"QR RUN"})," ( ",(0,a.jsx)(n.em,{children:"area"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"area"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia del \xe1rea a ejecutar"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando QR RUN provoca la ejecuci\xf3n del informe r\xe1pido designado por el par\xe1metro ",(0,a.jsx)(n.em,{children:"area."})," El informe se genera con sus par\xe1metros actuales, incluyendo su tipo de salida. Puede utilizar el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/qr-set-destination",children:"QR SET DESTINATION"})," para modificar el tipo de salida."]}),"\n",(0,a.jsxs)(n.p,{children:["El informe se ejecuta en la tabla a la que pertenece el \xe1rea. Cuando ",(0,a.jsx)(n.em,{children:"area"})," designa un \xe1rea fuera de la pantalla, es necesario especificar la tabla a utilizar v\xeda el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/qr-set-report-table",children:"QR SET REPORT TABLE"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,a.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4D Server:"})," este comando puede ejecutarse en 4D Server como parte de un procedimiento almacenado. En este contexto, aseg\xfarese de que no aparezca ninguna caja de di\xe1logo en el equipo servidor (excepto para los requisitos espec\xedficos). Para ello, es necesario llamar al comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/qr-set-destination",children:"QR SET DESTINATION"}),' con el par\xe1metro "*". En caso de un problema de la impresora (sin papel, impresora desconectada, etc), no se genera ning\xfan mensaje de error.']}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"746"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let a={},t=s.createContext(a);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);