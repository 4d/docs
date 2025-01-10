"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1954"],{151303:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-get-drop-column","title":"QR Get drop column","description":"QR Get drop column ( area ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-drop-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-drop-column","permalink":"/docs/es/commands/qr-get-drop-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-drop-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-drop-column","title":"QR Get drop column","slug":"/commands/qr-get-drop-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get document property","permalink":"/docs/es/commands/qr-get-document-property"},"next":{"title":"QR GET HEADER AND FOOTER","permalink":"/docs/es/commands/qr-get-header-and-footer"}}'),d=r("785893"),s=r("250065");let o={id:"qr-get-drop-column",title:"QR Get drop column",slug:"/commands/qr-get-drop-column",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR Get drop column"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Espacio de soltar"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando QR Get drop column devuelve un valor dependiendo de d\xf3nde se efect\xfae una acci\xf3n soltar:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"si el valor es negativo, indica un n\xfamero de columna (por ejemplo, -3 indica que una acci\xf3n soltar se realiz\xf3 en la columna n\xfamero 3)"}),"\n",(0,d.jsx)(n.li,{children:"si el valor es positivo, indica que la acci\xf3n de soltar se realiz\xf3 en un separador situado delante de la columna (por ejemplo, 3 indica que un soltar se efect\xfao en la columna 2). Recuerde que la acci\xf3n de soltar no se tiene que lleva a cabo antes de una columna existente."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,d.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-delete-column",children:"QR DELETE COLUMN"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"747"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let d={},s=t.createContext(d);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);