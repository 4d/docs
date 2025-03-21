"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22135"],{660919:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-header","title":"WP New header","description":"WP New header ( wpSection ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-header","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-header","title":"WP New header","slug":"/WritePro/commands/wp-new-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New footer","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-footer"},"next":{"title":"WP New style sheet","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-style-sheet"}}'),t=r("785893"),c=r("250065");let i={id:"wp-new-header",title:"WP New header",slug:"/WritePro/commands/wp-new-header",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP New header"})," ( ",(0,t.jsx)(n.em,{children:"wpSection"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpSection"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Secci\xf3n o subsecci\xf3n 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Encabezado 4D Write Pro"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP New header"})," crea y devuelve el encabezado asociado a la secci\xf3n o subsecci\xf3n definida por el par\xe1metro ",(0,t.jsx)(n.em,{children:"wpSection"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ya se ha definido un elemento de encabezado para la secci\xf3n o subsecci\xf3n, se devuelve un objeto ",(0,t.jsx)(n.em,{children:"indefinido"})," y se genera un error."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Desea crear un encabezado para las p\xe1ginas correctas de una secci\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Recupera la primera secci\xf3n\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupera la subsecci\xf3n de la primera secci\xf3n\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//Si la subsecci\xf3n existe, configura el encabezado\n\xa0If($subsection#Null)\n\xa0\xa0\xa0\xa0$header:=WP New header($subsection)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER "}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},c=s.createContext(t);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);