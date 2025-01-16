"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31144"],{167293:function(e,t,o){o.r(t),o.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>i});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-footer","title":"WP DELETE FOOTER","description":"WP DELETE FOOTER ( wpSe\xe7\xe3o )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-delete-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-footer","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-footer","title":"WP DELETE FOOTER","slug":"/WritePro/commands/wp-delete-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE BOOKMARK","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-bookmark"},"next":{"title":"WP DELETE HEADER","permalink":"/docs/pt/20-R7/WritePro/commands/wp-delete-header"}}'),r=o("785893"),s=o("250065");let d={id:"wp-delete-footer",title:"WP DELETE FOOTER",slug:"/WritePro/commands/wp-delete-footer",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP DELETE FOOTER"})," ( ",(0,r.jsx)(t.em,{children:"wpSe\xe7\xe3o"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpSe\xe7\xe3o"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Se\xe7\xe3o ou subse\xe7\xe3o 4D Write Pro"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.strong,{children:"WP DELETE FOOTER"})," elimina o elemento do rodap\xe9 associado \xe0 se\xe7\xe3o ou subse\xe7\xe3o definida pelo par\xe2metro ",(0,r.jsx)(t.em,{children:"wpSection"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Se n\xe3o existir um elemento de rodap\xe9 para a se\xe7\xe3o ou subse\xe7\xe3o, o comando n\xe3o faz nada."}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"Se quiser eliminar o rodap\xe9 das p\xe1ginas da esquerda de uma se\xe7\xe3o:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//Recupere a refer\xeancia na primeira se\xe7\xe3o\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupere a refer\xeancia na subse\xe7\xe3o esquerda da primeira se\xe7\xe3o\n\xa0$subsection:=WP Get subsection($section;wk left page)\n\xa0\n\xa0\xa0//Elimina o rodap\xe9\n\xa0WP DELETE FOOTER($subsection)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return d}});var n=o(667294);let r={},s=n.createContext(r);function d(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);