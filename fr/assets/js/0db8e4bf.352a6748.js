"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11966"],{408276:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-body","title":"WP Get body","description":"WP Get body ( docWP ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-body.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-body","permalink":"/docs/fr/20-R7/WritePro/commands/wp-get-body","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-body","title":"WP Get body","slug":"/WritePro/commands/wp-get-body","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP GET ATTRIBUTES","permalink":"/docs/fr/20-R7/WritePro/commands/wp-get-attributes"},"next":{"title":"WP GET BOOKMARKS","permalink":"/docs/fr/20-R7/WritePro/commands/wp-get-bookmarks"}}'),o=r("785893"),s=r("250065");let d={id:"wp-get-body",title:"WP Get body",slug:"/WritePro/commands/wp-get-body",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP Get body"})," ( ",(0,o.jsx)(t.em,{children:"docWP"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Param\xe8tre"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"docWP"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Document 4D Write Pro"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"R\xe9sultat"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Corps de 4D Write Pro"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["La commande ",(0,o.jsx)(t.strong,{children:"WP Get body"})," retourne la partie corps (",(0,o.jsx)(t.em,{children:"body"}),") du document 4D Write Pro ",(0,o.jsx)(t.em,{children:"docWP"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Cet \xe9l\xe9ment peut ensuite \xeatre pass\xe9 aux commandes :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-select",children:"WP SELECT"})," pour s\xe9lectionner le corps du document."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})," pour d\xe9finir le corps en tant que plage."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," et ",(0,o.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," pour g\xe9rer les attributs du corps du document."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(t.p,{children:"Vous voulez copier le corps d'un document 4D Write Pro dans un autre document 4D Write Pro :"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object\n\xa0\n\xa0$bodySource:=WP Get body([TEMPLATES]WPtemplate)\n\xa0$rangeSource:=WP Text range($bodySource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$bodyTarget:=WP Get body([Docs]MyWPDoc)\n\xa0$rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return d}});var n=r(667294);let o={},s=n.createContext(o);function d(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);