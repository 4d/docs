"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2191"],{874500:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-header","title":"WP DELETE HEADER","description":"WP DELETE HEADER ( wpSection )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-delete-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-header","permalink":"/docs/fr/WritePro/commands/wp-delete-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-header.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-delete-header","title":"WP DELETE HEADER","slug":"/WritePro/commands/wp-delete-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE FOOTER","permalink":"/docs/fr/WritePro/commands/wp-delete-footer"},"next":{"title":"WP DELETE PICTURE","permalink":"/docs/fr/WritePro/commands/wp-delete-picture"}}'),s=t("785893"),i=t("250065");let o={id:"wp-delete-header",title:"WP DELETE HEADER",slug:"/WritePro/commands/wp-delete-header",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP DELETE HEADER"})," ( ",(0,s.jsx)(n.em,{children:"wpSection"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpSection"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Section ou sous-section 4D Write Pro"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP DELETE HEADER"})," supprime l'\xe9l\xe9ment en-t\xeate associ\xe9 \xe0 la section ou \xe0 la sous-section d\xe9finie par le param\xe8tre ",(0,s.jsx)(n.em,{children:"wpSection"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"S'il n'existe pas d'\xe9l\xe9ment en-t\xeate associ\xe9 \xe0 la section ou \xe0 la sous-section, la commande ne fait rien."}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez supprimer l'en-t\xeate des pages de droite d'une section :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $section;$subsection;$header : Object\n\xa0\xa0//R\xe9cup\xe8re la r\xe9f\xe9rence de la premi\xe8re section\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//R\xe9cup\xe8re la r\xe9f\xe9rence de la sous-section droite de la premi\xe8re section\n\xa0$subsection:=WP Get subsection($section;wk right page)\n\xa0\n\xa0\xa0//Supprime l'en-t\xeate\n\xa0WP DELETE HEADER($subsection)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-new-header",children:"WP New header"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);