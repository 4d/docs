"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12073"],{188064:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-sections","title":"WP Get sections","description":"WP Get sections ( targetObj ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-sections.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-sections","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-sections","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-sections.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-sections","title":"WP Get sections","slug":"/WritePro/commands/wp-get-sections","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get section","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-section"},"next":{"title":"WP Get style sheet","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-style-sheet"}}'),c=t("785893"),i=t("250065");let o={id:"wp-get-sections",title:"WP Get sections",slug:"/WritePro/commands/wp-get-sections",displayed_sidebar:"docs"},r=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"WP Get sections"})," ( ",(0,c.jsx)(n.em,{children:"targetObj"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"targetObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Rango o documento 4D Write Pro"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Colecci\xf3n de todas las secciones (principales) encontradas en targetObj"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"WP Get sections"})," devuelve una colecci\xf3n de todas las secciones definidas en el par\xe1metro ",(0,c.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["En el par\xe1metro ",(0,c.jsx)(n.em,{children:"targetObj"}),", puede pasar:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"un rango, o"}),"\n",(0,c.jsx)(n.li,{children:"un elemento (tabla / l\xednea / p\xe1rrafo / cuerpo / encabezado / pie / caja de texto / imagen), o"}),"\n",(0,c.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Si el rango o elemento pertenece a un encabezado o pie de p\xe1gina, ",(0,c.jsx)(n.strong,{children:"WP Get sections"})," devuelve la secci\xf3n a la que est\xe1 anclado el encabezado o pie de p\xe1gina."]}),"\n",(0,c.jsxs)(n.p,{children:["Para cajas de texto e im\xe1genes ancladas, ",(0,c.jsx)(n.strong,{children:"WP Get sections"})," devuelve:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"una colecci\xf3n que contiene una \xfanica secci\xf3n si el elemento est\xe1 anclado a una secci\xf3n,"}),"\n",(0,c.jsx)(n.li,{children:"una colecci\xf3n con todas las secciones si el elemento est\xe1 anclado a todas las secciones,"}),"\n",(0,c.jsx)(n.li,{children:"una colecci\xf3n vac\xeda si el elemento est\xe1 anclado a la vista anidada o a un n\xfamero de p\xe1gina."}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n acerca de secciones, consulte el p\xe1rrafo ",(0,c.jsx)(n.em,{children:"Manejo de encabezados, pies y secciones"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"Desea cambiar un atributo para la \xfaltima secci\xf3n del \xe1rea 4D Write Pro:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $colSections : Collection\n\xa0$colSections:=WP Get sections(wpDoc)\n\xa0WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-section",children:"WP Get section"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let c={},i=s.createContext(c);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);