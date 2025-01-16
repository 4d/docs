"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90430"],{4979:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>d,metadata:()=>o,assets:()=>m,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-bookmark","title":"WP DELETE BOOKMARK","description":"WP DELETE BOOKMARK ( wpDoc ; nomBK )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-delete-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-bookmark","permalink":"/docs/pt/WritePro/commands/wp-delete-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-bookmark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-delete-bookmark","title":"WP DELETE BOOKMARK","slug":"/WritePro/commands/wp-delete-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/pt/WritePro/commands/wp-compute-formulas"},"next":{"title":"WP DELETE FOOTER","permalink":"/docs/pt/WritePro/commands/wp-delete-footer"}}'),t=r("785893"),a=r("250065");let d={id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},s=void 0,m={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," ( ",(0,t.jsx)(n.em,{children:"wpDoc"})," ; ",(0,t.jsx)(n.em,{children:"nomBK"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wpDoc"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomBK"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome de bookmark a apagar"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," elimina o marcador chamado ",(0,t.jsx)(n.em,{children:"nombk de"})," ",(0,t.jsx)(n.em,{children:"docWP"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se o marcador ",(0,t.jsx)(n.em,{children:"nombk"})," n\xe3o existir em ",(0,t.jsx)(n.em,{children:"docWP"}),", o comando n\xe3o faz nada."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser renomear uma bookmark existente, precisa criar uma nova bookmark com a mesma faixa, e ent\xe3o apagar a antiga:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var o=r(667294);let t={},a=o.createContext(t);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);