"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48932"],{291578:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-footer","title":"WP Get footer","description":"WP Get footer ( objRango ) | (wpDoc ; indiceSeccion {; tipoSubSeccion} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-footer","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-footer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-footer","title":"WP Get footer","slug":"/WritePro/commands/wp-get-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get elements","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-elements"},"next":{"title":"WP Get formulas","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-formulas"}}'),i=r("785893"),s=r("250065");let o={id:"wp-get-footer",title:"WP Get footer",slug:"/WritePro/commands/wp-get-footer",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Get footer"})," ( ",(0,i.jsx)(n.em,{children:"objRango"})," ) | (",(0,i.jsx)(n.em,{children:"wpDoc"})," ; ",(0,i.jsx)(n.em,{children:"indiceSeccion"})," {; ",(0,i.jsx)(n.em,{children:"tipoSubSeccion"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objRango"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Rango 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpDoc"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indiceSeccion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\xcdndice de secci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tipoSubSeccion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Subtipo de la secci\xf3n (wk primera p\xe1gina, wk p\xe1gina de la izquierda, o wk p\xe1gina de la derecha)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Pie 4D Write Pro"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP Get footer"})," devuelve el pie de p\xe1gina asociado al rango ",(0,i.jsx)(n.em,{children:"objRango"})," o al ",(0,i.jsx)(n.em,{children:"indiceSeccion"})," especificado del documento ",(0,i.jsx)(n.em,{children:"wpDoc"}),". Si no se encuentra ning\xfan pie de p\xe1gina con respecto a los par\xe1metros, el comando devuelve ",(0,i.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Con la primera sintaxis (utilizando el par\xe1metro ",(0,i.jsx)(n.em,{children:"objRango"}),"), el comando devuelve el pie de la primera p\xe1gina en el rango o la secci\xf3n/subsecci\xf3n pasada en par\xe1metro. Si una subsecci\xf3n est\xe1 activa en la p\xe1gina, el comando devuelve el pie de la subsecci\xf3n activa, por lo que siempre devuelve el pie de p\xe1gina visible."]}),"\n",(0,i.jsxs)(n.li,{children:["Con la segunda sintaxis (utilizando el par\xe1metro ",(0,i.jsx)(n.em,{children:"wpDoc"}),"), el comando devuelve el pie de la secci\xf3n ",(0,i.jsx)(n.em,{children:"indiceSeccion"})," especificada (el valor ",(0,i.jsx)(n.em,{children:"indiceSeccion"})," debe ser >=1).",(0,i.jsx)(n.br,{}),"\nSi se pasa el par\xe1metro ",(0,i.jsx)(n.em,{children:"tipoSubSeccion"}),", el comando devuelve el pie de p\xe1gina asociado al tipo de subsecci\xf3n especificado. Puede pasar una de las siguientes constantes en el par\xe1metro ",(0,i.jsx)(n.em,{children:"tipoSubSeccion"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk first page"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk left page"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk right page"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Si no se especifica ",(0,i.jsx)(n.em,{children:"tipoSubSeccion"}),", se devolver\xe1 el pie de p\xe1gina de la secci\xf3n principal. En este caso, si una subsecci\xf3n est\xe1 activa, el objeto de pie de p\xe1gina de la secci\xf3n principal no est\xe1 ",(0,i.jsx)(n.em,{children:"definido"})," (el pie de p\xe1gina de la secci\xf3n principal s\xf3lo est\xe1 disponible si no hay ninguna subsecci\xf3n wk first page o wk left page activa)."]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea copiar el pie de la primera p\xe1gina de un documento 4D Write Pro en los pies de todas las p\xe1ginas de otro documento 4D Write Pro:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object\n\xa0\n\xa0$footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page)\xa0//obtiene el pie de la primera p\xe1gina de la secci\xf3n 1\n\xa0$rangeSource:=WP Text range($footerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$footerTarget:=WP Get footer([Docs]MyWPDoc;1)\xa0//todas las p\xe1ginas de la secci\xf3n 1\n\xa0$rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Utilizar un \xe1rea 4D Write Pro"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-delete-footer",children:"WP DELETE FOOTER"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-frame",children:"WP Get frame"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);