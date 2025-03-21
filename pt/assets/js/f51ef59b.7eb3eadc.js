"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66806"],{373807:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-header","title":"WP DELETE HEADER","description":"WP DELETE HEADER  ( wpSecao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-delete-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-header","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-header","title":"WP DELETE HEADER","slug":"/WritePro/commands/wp-delete-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE FOOTER","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-footer"},"next":{"title":"WP DELETE PICTURE","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-picture"}}'),o=t("785893"),s=t("250065");let d={id:"wp-delete-header",title:"WP DELETE HEADER",slug:"/WritePro/commands/wp-delete-header",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP DELETE HEADER"}),"  ( ",(0,o.jsx)(n.em,{children:"wpSecao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wpSecao"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se\xe7\xe3o ou subse\xe7\xe3o 4D Write Pro"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"WP DELETE HEADER"}),"  elimina o elemento do cabe\xe7alho associado \xe0 se\xe7\xe3o ou subse\xe7\xe3o definida pelo par\xe2metro ",(0,o.jsx)(n.em,{children:"wpSection"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Se n\xe3o existir um elemento de cabe\xe7alho para a se\xe7\xe3o ou subse\xe7\xe3o, o comando n\xe3o faz nada."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser eliminar o cabe\xe7alho das p\xe1ginas corretas de uma se\xe7\xe3o:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Recupera a refer\xeancia na primeira se\xe7\xe3o\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupera a refer\xeancia na subse\xe7\xe3o da esquerda da primeira se\xe7\xe3o\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//Elimina o cabe\xe7alho\n\xa0WP DELETE HEADER($subsection)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new-header",children:"WP New header"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);