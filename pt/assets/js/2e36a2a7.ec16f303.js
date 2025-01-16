"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55329"],{169252:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-footer","title":"WP New footer","description":"WP New footer ( wpSe\xe7\xe3o ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-footer","permalink":"/docs/pt/20-R7/WritePro/commands/wp-new-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-footer","title":"WP New footer","slug":"/WritePro/commands/wp-new-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP NEW BOOKMARK","permalink":"/docs/pt/20-R7/WritePro/commands/wp-new-bookmark"},"next":{"title":"WP New header","permalink":"/docs/pt/20-R7/WritePro/commands/wp-new-header"}}'),t=n("785893"),s=n("250065");let d={id:"wp-new-footer",title:"WP New footer",slug:"/WritePro/commands/wp-new-footer",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"WP New footer"})," ( ",(0,t.jsx)(o.em,{children:"wpSe\xe7\xe3o"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"wpSe\xe7\xe3o"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se\xe7\xe3o ou subse\xe7\xe3o 4D Write Pro"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultado"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Cabe\xe7alho 4D Write Pro"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"WP New footer"})," cria e devolve um rodap\xe9 associado \xe0 se\xe7\xe3o ou subse\xe7\xe3o definida pelo pa\xe2metro ",(0,t.jsx)(o.em,{children:"wpSection"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"Se um elemento de rodap\xe9 j\xe1 estive definido para a se\xe7\xe3o ou subse\xe7\xe3o, um objeto indefinido \xe9 devolvido e se gera um erro."}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Deseja criar um rodap\xe9 para as p\xe1ginas da esquerda de uma se\xe7\xe3o:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0var $section;$subsection;$footer : Object\n\xa0\xa0//Recupera a primeira se\xe7\xe3o\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Recupera a refer\xeancia na subse\xe7\xe3o esquerda da primeira se\xe7\xe3o\n\xa0$subsection:=WP Get subsection($section;wk left page)\n\xa0\n\xa0\xa0//Se a subse\xe7\xe3o existir, configureo rodap\xe9\n\xa0If($subsection#Null)\n\xa0\xa0\xa0\xa0$footer:=WP New footer($subsection)\n\xa0End if\n"})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-delete-footer",children:"WP DELETE FOOTER"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new-header",children:"WP New header"})]})]})}function p(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var r=n(667294);let t={},s=r.createContext(t);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);