"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93065"],{635268:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-delete-column","title":"QR DELETE COLUMN","description":"QR DELETE COLUMN ( area ; numColumna )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-delete-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-delete-column","permalink":"/docs/es/20-R7/commands/qr-delete-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-delete-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-delete-column","title":"QR DELETE COLUMN","slug":"/commands/qr-delete-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Count columns","permalink":"/docs/es/20-R7/commands/qr-count-columns"},"next":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/es/20-R7/commands/qr-delete-offscreen-area"}}'),d=r("785893"),t=r("250065");let l={id:"qr-delete-column",title:"QR DELETE COLUMN",slug:"/commands/qr-delete-column",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR DELETE COLUMN"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"numColumna"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numColumna"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de columna"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando QR DELETE COLUMN borra del ",(0,d.jsx)(n.em,{children:"area"})," la columna cuyo n\xfamero se pas\xf3 en ",(0,d.jsx)(n.em,{children:"numColumna"}),". Este comando no aplica a los informes de tablas cruzadas."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,d.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,d.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,d.jsx)(n.em,{children:"numcolumn"}),"a es incorrecto, se genera el error -9852."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo se asegura de que el informe sea listado y borra la tercera columna:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(QR Get report kind(MyArea)=qr list report)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MiArea;3)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-insert-column",children:"QR INSERT COLUMN"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"749"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var s=r(667294);let d={},t=s.createContext(d);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);