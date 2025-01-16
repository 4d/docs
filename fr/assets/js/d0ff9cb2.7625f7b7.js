"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87140"],{356966:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-bookmark-range","title":"WP Bookmark range","description":"WP Bookmark range ( docWP ; nomSignet ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-bookmark-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-bookmark-range","permalink":"/docs/fr/20-R7/WritePro/commands/wp-bookmark-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-bookmark-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-bookmark-range","title":"WP Bookmark range","slug":"/WritePro/commands/wp-bookmark-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Add picture","permalink":"/docs/fr/20-R7/WritePro/commands/wp-add-picture"},"next":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/fr/20-R7/WritePro/commands/wp-compute-formulas"}}'),o=r("785893"),s=r("250065");let a={id:"wp-bookmark-range",title:"WP Bookmark range",slug:"/WritePro/commands/wp-bookmark-range",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Bookmark range"})," ( ",(0,o.jsx)(n.em,{children:"docWP"})," ; ",(0,o.jsx)(n.em,{children:"nomSignet"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"docWP"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Document 4D Write Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomSignet"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nom du signet dont vous souhaitez r\xe9cup\xe9rer la plage"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Plage du signet"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"WP Bookmark range"})," \xe9tait nomm\xe9e ",(0,o.jsx)(n.strong,{children:"WP Get bookmark range"})," dans les versions pr\xe9c\xe9dentes de 4D Write Pro. Elle a \xe9t\xe9 renomm\xe9e pour plus de clart\xe9."]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.strong,{children:"WP Bookmark range"})," retourne un objet de type plage (objPlage) contenant la plage associ\xe9e au signet nomm\xe9 ",(0,o.jsx)(n.em,{children:"nomSignet"})," dans le document ",(0,o.jsx)(n.em,{children:"docWP"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si le signet ",(0,o.jsx)(n.em,{children:"nomSignet"})," n'existe pas dans ",(0,o.jsx)(n.em,{children:"docWP"}),", un objet plage objPlage vide est retourn\xe9."]}),"\n",(0,o.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:'Vous souhaitez faire appara\xeetre la plage associ\xe9e au signet "MyBookmark" dans votre document :'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Bookmark range(WParea;"MyBookmark")\n\xa0WP SELECT(WParea;$wpRange)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(667294);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);