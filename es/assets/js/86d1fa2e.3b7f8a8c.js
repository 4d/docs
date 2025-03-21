"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39171"],{448211:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-bookmark","title":"WP DELETE BOOKMARK","description":"WP DELETE BOOKMARK ( docWP ; nombk )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-delete-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-bookmark","permalink":"/docs/es/WritePro/commands/wp-delete-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-bookmark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-delete-bookmark","title":"WP DELETE BOOKMARK","slug":"/WritePro/commands/wp-delete-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP COMPUTE FORMULAS","permalink":"/docs/es/WritePro/commands/wp-compute-formulas"},"next":{"title":"WP DELETE FOOTER","permalink":"/docs/es/WritePro/commands/wp-delete-footer"}}'),t=r("785893"),a=r("250065");let d={id:"wp-delete-bookmark",title:"WP DELETE BOOKMARK",slug:"/WritePro/commands/wp-delete-bookmark",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," ( ",(0,t.jsx)(n.em,{children:"docWP"})," ; ",(0,t.jsx)(n.em,{children:"nombk"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docWP"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombk"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del marcador a eliminar"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WP DELETE BOOKMARK"})," elimina el marcador llamado ",(0,t.jsx)(n.em,{children:"nombk"})," de ",(0,t.jsx)(n.em,{children:"docWP"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si el marcador ",(0,t.jsx)(n.em,{children:"nombk"})," no existe en ",(0,t.jsx)(n.em,{children:"docWP"}),", el comando no hace nada."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted quiere cambiar el nombre de un marcador existente. Para ello, es necesario crear un nuevo marcador con el mismo rango y luego, eliminar el anterior:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var o=r(667294);let t={},a=o.createContext(t);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);