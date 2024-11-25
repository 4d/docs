"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85845"],{219464:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-section","title":"WP Get section","description":"WP Get section ( targetObj ) | (wpDoc ; indiceSeccion ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-section.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-section","permalink":"/docs/es/WritePro/commands/wp-get-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-section.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-section","title":"WP Get section","slug":"/WritePro/commands/wp-get-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get position","permalink":"/docs/es/WritePro/commands/wp-get-position"},"next":{"title":"WP Get sections","permalink":"/docs/es/WritePro/commands/wp-get-sections"}}'),c=i("785893"),s=i("250065");let r={id:"wp-get-section",title:"WP Get section",slug:"/WritePro/commands/wp-get-section",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"WP Get section"})," ( ",(0,c.jsx)(n.em,{children:"targetObj"})," ) | (",(0,c.jsx)(n.em,{children:"wpDoc"})," ; ",(0,c.jsx)(n.em,{children:"indiceSeccion"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"targetObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Rango o elemento"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"wpDoc"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"indiceSeccion"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\xcdndice de secci\xf3n"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Secci\xf3n 4D Write Pro"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"WP Get section"})," devuelve la primera secci\xf3n intersectada por el rango ",(0,c.jsx)(n.em,{children:"targetObj"})," o elemento, o al ",(0,c.jsx)(n.em,{children:"indiceSeccion"})," especificado del documento ",(0,c.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Con la primera sintaxis (utilizando el par\xe1metro ",(0,c.jsx)(n.em,{children:"targetObj"}),"), el comando devuelve la primera secci\xf3n intersectada por el rango o el elemento. Puedes pasar en ",(0,c.jsx)(n.em,{children:"targetObj"}),":\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"un rango, o"}),"\n",(0,c.jsx)(n.li,{children:"un elemento (tabla / fila / p\xe1rrafo / cuerpo / caja de texto / encabezado / pie de p\xe1gina). No puede pasar una subsecci\xf3n, ni una imagen anclada (se devuelve un error en este caso)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Si el rango o elemento pertenece a un encabezado o a un pie de p\xe1gina, ",(0,c.jsx)(n.strong,{children:"WP Get section"})," devuelve la secci\xf3n a la que est\xe1 conectado el encabezado o pie de p\xe1gina. Si el rango o elemento es o pertenece a una caja de texto, ",(0,c.jsx)(n.strong,{children:"WP Get section"})," siempre devuelve la primera secci\xf3n, excepto si est\xe1 anclado a una secci\xf3n (en cuyo caso se devuelve la secci\xf3n)."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Con la segunda sintaxis (utilizando el par\xe1metro ",(0,c.jsx)(n.em,{children:"wpDoc"}),"), el comando devuelve la secci\xf3n correspondiente a la secci\xf3n ",(0,c.jsx)(n.em,{children:"indiceSeccion"})," (el valor de ",(0,c.jsx)(n.em,{children:"indiceSeccion"})," debe ser >=1).",(0,c.jsx)(n.br,{}),"\nSi no se define ninguna secci\xf3n para el ",(0,c.jsx)(n.em,{children:"indiceSeccion"})," especificado, el comando devuelve un objeto indefinido (no se devuelve ning\xfan error)."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"})," utilice el comando ",(0,c.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})," para obtener una subsecci\xf3n de una secci\xf3n o de un rango."]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"Desea obtener la referencia de la primera secci\xf3n:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $section : Object\n\xa0\xa0// obtiene la primera secci\xf3n\n\xa0$section:=WP Get section(wpDoc;1)\n"})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-sections",children:"WP Get sections"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var t=i(667294);let c={},s=t.createContext(c);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);