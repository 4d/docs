"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76346"],{141197:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-bookmark","title":"WP DELETE BOOKMARK","description":"WP DELETE BOOKMARK ( docWP ; nomSignet )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-delete-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-bookmark","permalink":"/docs/fr/20-R7/WritePro/commands/wp-delete-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-bookmark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-bookmark","title":"WP DELETE BOOKMARK","slug":"/WritePro/commands/wp-delete-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/fr/20-R7/WritePro/commands/wp-compute-formulas"},"next":{"title":"WP DELETE FOOTER","permalink":"/docs/fr/20-R7/WritePro/commands/wp-delete-footer"}}'),t=r("785893"),s=r("250065");let i={id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," ( ",(0,t.jsx)(n.em,{children:"docWP"})," ; ",(0,t.jsx)(n.em,{children:"nomSignet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docWP"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomSignet"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du signet \xe0 supprimer"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["la commande ",(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," supprime de ",(0,t.jsx)(n.em,{children:"docWP"})," le signet nomm\xe9 ",(0,t.jsx)(n.em,{children:"nomSignet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si le signet ",(0,t.jsx)(n.em,{children:"nomSignet"})," n'existe pas dans ",(0,t.jsx)(n.em,{children:"docWP"}),", la commande ne fait rien."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez renommer un signet existant. Pour cela, vous devez cr\xe9er un nouveau signet bas\xe9 sur la m\xeame plage puis supprimer l'ancien :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP CREATE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var o=r(667294);let t={},s=o.createContext(t);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);