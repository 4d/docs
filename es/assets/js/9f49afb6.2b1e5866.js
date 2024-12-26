"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49215"],{337726:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/qr-blob-to-report","title":"QR BLOB TO REPORT","description":"QR BLOB TO REPORT ( area ; BLOB )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-blob-to-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-blob-to-report","permalink":"/docs/es/commands/qr-blob-to-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-blob-to-report.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-blob-to-report","title":"QR BLOB TO REPORT","slug":"/commands/qr-blob-to-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Quick Report","permalink":"/docs/es/category/quick-report"},"next":{"title":"QR Count columns","permalink":"/docs/es/commands/qr-count-columns"}}'),t=r("785893"),s=r("250065");let d={id:"qr-blob-to-report",title:"QR BLOB TO REPORT",slug:"/commands/qr-blob-to-report",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB que contiene el informe"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando QR BLOB TO REPORT coloca el informe contenido en el ",(0,t.jsx)(n.em,{children:"blob"})," en el \xe1rea de informe r\xe1pido pasada en ",(0,t.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," incorrecto, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"blob"})," es incorrecto, se genera el error -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente c\xf3digo muestra en el \xe1rea MiArea, un archivo de informe llamado \u201Creport.4qr\u201D ubicado junto a la estructura de la base. El archivo de informe pudo haber sido creado con una versi\xf3n anterior:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $doc : Blob\n\xa0var MiArea : Integer\n\xa0DOCUMENT TO BLOB("report.4qr";$doc)\n\xa0QR BLOB TO REPORT(MiArea;$doc)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"La siguiente instrucci\xf3n recupera el informe r\xe1pido almacenado en Campo4 y lo muestra en MiArea:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QR BLOB TO REPORT(MiArea;[Tabla 1]Campo4)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-report-to-blob",children:"QR REPORT TO BLOB"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"771"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var o=r(667294);let t={},s=o.createContext(t);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);