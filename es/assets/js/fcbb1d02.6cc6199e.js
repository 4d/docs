"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53224"],{64617:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-footer","title":"WP DELETE FOOTER","description":"WP DELETE FOOTER ( wpSection )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-delete-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-footer","permalink":"/docs/es/WritePro/commands/wp-delete-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-footer","title":"WP DELETE FOOTER","slug":"/WritePro/commands/wp-delete-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE BOOKMARK","permalink":"/docs/es/WritePro/commands/wp-delete-bookmark"},"next":{"title":"WP DELETE HEADER","permalink":"/docs/es/WritePro/commands/wp-delete-header"}}'),i=t("785893"),o=t("250065");let s={id:"wp-delete-footer",title:"WP DELETE FOOTER",slug:"/WritePro/commands/wp-delete-footer",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP DELETE FOOTER"})," ( ",(0,i.jsx)(n.em,{children:"wpSection"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpSection"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Secci\xf3n o subsecci\xf3n 4D Write Pro"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP DELETE FOOTER"})," elimina el elemento del pie de p\xe1gina asociado a la secci\xf3n o subsecci\xf3n definida por el par\xe1metro ",(0,i.jsx)(n.em,{children:"wpSection"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Si no existe un elemento de pie de p\xe1gina para la secci\xf3n o subsecci\xf3n, el comando no hace nada."}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Desea eliminar el pie de p\xe1gina de las p\xe1ginas de la izquierda de una secci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Recupere la referencia en la primera secci\xf3n\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupere la referencia en la subsecci\xf3n izquierda de la primera secci\xf3n\n\xa0$subsection:=WP Get subsection($section;wk left page)\n\xa0\n\xa0\xa0//Elimina el pie de p\xe1gina\n\xa0WP DELETE FOOTER($subsection)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);