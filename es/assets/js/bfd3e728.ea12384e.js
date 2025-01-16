"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65445"],{448317:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/qr-set-totals-spacing","title":"QR SET TOTALS SPACING","description":"QR SET TOTALS SPACING ( area ; subtotal ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-totals-spacing.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-totals-spacing","permalink":"/docs/es/commands/qr-set-totals-spacing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-spacing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-totals-spacing","title":"QR SET TOTALS SPACING","slug":"/commands/qr-set-totals-spacing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET TOTALS DATA","permalink":"/docs/es/commands/qr-set-totals-data"},"next":{"title":"Record Locking","permalink":"/docs/es/category/record-locking"}}'),t=s("785893"),a=s("250065");let i={id:"qr-set-totals-spacing",title:"QR SET TOTALS SPACING",slug:"/commands/qr-set-totals-spacing",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET TOTALS SPACING"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"subtotal"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subtotal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero del subtotal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0=sin espacio, 32000=inserta un salto de p\xe1gina, >0=espacio a\xf1adido en la parte superior del nivel de ruptura, <0=aumento proporcional"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando QR SET TOTALS SPACING define un espacio debajo de la l\xednea de subtotal. Aplica \xfanicamente al modo listado."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"subtotal"})," es el nivel del subtotal (o de ruptura) a modificar."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," define el valor del espacio:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"valor"})," es igual a 0, no se a\xf1ade ning\xfan espacio."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"valor"})," es igual a 32000, se a\xf1ade un salto de p\xe1gina."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"valor"})," es un valor positivo, expresa el espacio a a\xf1adir en p\xedxeles."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"valor"})," es un valor negativo, expresa el espacio como un porcentaje de la l\xednea de subtotal. Por ejemplo, el valor -100 definir\xe1 un espacio debajo de la l\xednea del subtotal correspondiente al 100% de la altura de la l\xednea."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si el espacio debajo de la l\xednea de subtotal \u201Cempuja\u201D a la l\xednea a la siguiente p\xe1gina, no se insertar\xe1 espacio sobre la l\xednea en esa p\xe1gina."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"subtotal"}),", es incorrecto, se genera el error -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-get-totals-spacing",children:"QR GET TOTALS SPACING"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"761"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);