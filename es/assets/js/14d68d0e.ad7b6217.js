"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30867"],{181827:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-page-count","title":"WP Get page count","description":"WP Get page count ( targetObj ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-page-count.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-page-count","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-page-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-page-count.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-page-count","title":"WP Get page count","slug":"/WritePro/commands/wp-get-page-count","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get links","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-links"},"next":{"title":"WP Get position","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-position"}}'),s=t("785893"),r=t("250065");let i={id:"wp-get-page-count",title:"WP Get page count",slug:"/WritePro/commands/wp-get-page-count",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get page count"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de p\xe1ginas en el documento"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP Get page count"})," devuelve el n\xfamero total de p\xe1ginas definido en el ",(0,s.jsx)(n.em,{children:"objRango"})," pasado en par\xe1metro."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"objRango"}),", puede pasar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"una secci\xf3n / subsecci\xf3n, o"}),"\n",(0,s.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["El comando devuelve el n\xfamero de p\xe1ginas de ",(0,s.jsx)(n.em,{children:"objRango"}),". Si pasa una subsecci\xf3n, se devuelve el n\xfamero de p\xe1ginas de la secci\xf3n padre."]}),"\n",(0,s.jsxs)(n.p,{children:["La misma configuraci\xf3n de visualizaci\xf3n que para el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-print",children:"WP PRINT"})," se usa con ",(0,s.jsx)(n.strong,{children:"WP Get page count"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"encabezados: visible"}),"\n",(0,s.jsx)(n.li,{children:"pies de p\xe1gina: visible"}),"\n",(0,s.jsx)(n.li,{children:"expresiones: computadas y mostradas"}),"\n",(0,s.jsx)(n.li,{children:"modo de p\xe1gina: p\xe1gina o borrador"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"objRango"}),' se muestra en un \xe1rea de formulario 4D Write Pro, aseg\xfarese de que la configuraci\xf3n de visualizaci\xf3n del \xe1rea coincida con la configuraci\xf3n de visualizaci\xf3n del comando para obtener informaci\xf3n coherente. Tenga en cuenta tambi\xe9n que si estas configuraciones son diferentes en el \xe1rea, 4D Write Pro tendr\xe1n que "clonar" el documento para calcular el dise\xf1o en cada llamada del comando, lo que puede llevar mucho tiempo. Por motivos de rendimiento, en este caso, se recomienda construir el documento fuera de l\xednea y copiarlo en el \xe1rea de objetos de formulario solo cuando se complete la compilaci\xf3n.']}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:'Usted quiere saber el n\xfamero total de p\xe1ginas de documentos 4D Write Pro almacenados en el campo "Manual" dentro de la selecci\xf3n actual de elementos. Puede escribir:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $pageCount : Integer\n\xa0var $totalCount : Integer\n\xa0FIRST RECORD([Items])\n\xa0While(Not(End selection([Items]))\n\xa0\xa0\xa0\xa0$pageCount:=WP Get page count([Items]Manual)\n\xa0\xa0\xa0\xa0$totalCount:=$totalCount+$pageCount\n\xa0\xa0\xa0\xa0NEXT RECORD([Items])\n\xa0End while\n\xa0ALERT("N\xfamero total de p\xe1ginas del manual: "+String($totalCount))\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(667294);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);