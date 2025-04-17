"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13871"],{261995:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>a});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-bookmarks","title":"WP GET BOOKMARKS","description":"WP GET BOOKMARKS ( docWP ; arrayNomMarcadores )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-get-bookmarks.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-bookmarks","permalink":"/docs/es/WritePro/commands/wp-get-bookmarks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-bookmarks.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-bookmarks","title":"WP GET BOOKMARKS","slug":"/WritePro/commands/wp-get-bookmarks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get body","permalink":"/docs/es/WritePro/commands/wp-get-body"},"next":{"title":"WP Get breaks","permalink":"/docs/es/WritePro/commands/wp-get-breaks"}}'),s=n("785893"),t=n("250065");let d={id:"wp-get-bookmarks",title:"WP GET BOOKMARKS",slug:"/WritePro/commands/wp-get-bookmarks",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WP GET BOOKMARKS"})," ( ",(0,s.jsx)(r.em,{children:"docWP"})," ; ",(0,s.jsx)(r.em,{children:"arrayNomMarcadores"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"docWP"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrayNomMarcadores"}),(0,s.jsx)(r.td,{children:"Array texto"}),(0,s.jsx)(r.td,{children:"\uD83E\uDC58"}),(0,s.jsx)(r.td,{children:"Array de nombres de marcadores"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["El comando ",(0,s.jsx)(r.strong,{children:"WP GET BOOKMARKS"})," devuelve un array que contiene los nombres de todos los marcadores definidos en ",(0,s.jsx)(r.em,{children:"docWP"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Despu\xe9s de ejecutar el comando, ",(0,s.jsx)(r.em,{children:"arrayNomMarcadores"})," se llena con todos los nombres de marcadores en el documento. En el array, los nombres est\xe1n ordenados por posici\xf3n de marcador dentro del documento.",(0,s.jsx)(r.br,{}),"\nSi varios marcadores comienzan en la misma posici\xf3n, se ordenan por orden alfab\xe9tico."]}),"\n",(0,s.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"Usted quieres saber el n\xfamero de marcadores definidos en su documento:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return d}});var o=n(667294);let s={},t=o.createContext(s);function d(e){let r=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);