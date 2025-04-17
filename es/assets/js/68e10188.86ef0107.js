"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68770"],{411136:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>a,toc:()=>o,contentTitle:()=>s});var d=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-header","title":"WP Get header","description":"WP Get header ( objRango ) | (wpDoc ; indiceSeccion {; tipoSubSeccion} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-header","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-header.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-header","title":"WP Get header","slug":"/WritePro/commands/wp-get-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get frame","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-frame"},"next":{"title":"WP Get links","permalink":"/docs/es/20-R8/WritePro/commands/wp-get-links"}}'),t=r("785893"),i=r("250065");let c={id:"wp-get-header",title:"WP Get header",slug:"/WritePro/commands/wp-get-header",displayed_sidebar:"docs"},s=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Get header"})," ( ",(0,t.jsx)(n.em,{children:"objRango"})," ) | (",(0,t.jsx)(n.em,{children:"wpDoc"})," ; ",(0,t.jsx)(n.em,{children:"indiceSeccion"})," {; ",(0,t.jsx)(n.em,{children:"tipoSubSeccion"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objRango"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Rango 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpDoc"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"indiceSeccion"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\xcdndice de secci\xf3n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tipoSubSeccion"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tipo de subsecci\xf3n (wk first page, wk left page o wk right page)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Encabezado 4D Write Pro"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP Get header"})," devuelve el encabezado asociado al rango ",(0,t.jsx)(n.em,{children:"objRango"})," o al ",(0,t.jsx)(n.em,{children:"indiceSeccion"})," del documento ",(0,t.jsx)(n.em,{children:"wpDoc"}),". Si no se encuentra ning\xfan encabezado con respecto a los par\xe1metros, el comando devuelve ",(0,t.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Con la primera sintaxis (utilizando el par\xe1metro ",(0,t.jsx)(n.em,{children:"objRango"}),"), el comando devuelve el encabezado de la primera p\xe1gina en el rango o secci\xf3n/subsecci\xf3n pasada en par\xe1metro. Si una subsecci\xf3n est\xe1 activa en la p\xe1gina, el comando devuelve el encabezado de la subsecci\xf3n activa, por lo que siempre devuelve el encabezado visible."]}),"\n",(0,t.jsxs)(n.li,{children:["Con la segunda sintaxis (utilizando el par\xe1metro ",(0,t.jsx)(n.em,{children:"wpDoc"}),"), el comando devuelve el encabezado de la secci\xf3n ",(0,t.jsx)(n.em,{children:"indiceSeccion"})," especificada (el valor ",(0,t.jsx)(n.em,{children:"indiceSeccion"})," debe ser >=1).",(0,t.jsx)(n.br,{}),"\nSi se pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"tipoSubSeccion"}),", el comando devuelve el encabezado asociado al tipo de subsecci\xf3n especificado. Puede pasar una de las siguientes constantes en el par\xe1metro ",(0,t.jsx)(n.em,{children:"tipoSubSeccion"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk first page"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk left page"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk right page"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si no se especifica el ",(0,t.jsx)(n.em,{children:"tipoSubSeccion"}),", se devolver\xe1 el encabezado de la secci\xf3n principal. En este caso, si una subsecci\xf3n est\xe1 activa, el objeto de encabezado de la secci\xf3n principal est\xe1 ",(0,t.jsx)(n.em,{children:"indefinido"})," (el encabezado de la secci\xf3n principal s\xf3lo est\xe1 disponible si no hay ninguna subsecci\xf3n wk first page o wk left page activa)."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted desea copiar el encabezado de la primera p\xe1gina de un documento 4D Write Pro a los encabezados de todas las p\xe1ginas de otro documento 4D Write Pro:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object\n\xa0\n\xa0$headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page)\xa0//obtener el encabezado de la primera p\xe1gina de la secci\xf3n 1\n\xa0$rangeSource:=WP Text range($headerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$headerTarget:=WP Get header([Docs]MyWPDoc;1)\xa0//todas las p\xe1ginas de la secci\xf3n 1\n\xa0$rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Utilizar un \xe1rea 4D Write Pro"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER "}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-new-header",children:"WP New header"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return c}});var d=r(667294);let t={},i=d.createContext(t);function c(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);