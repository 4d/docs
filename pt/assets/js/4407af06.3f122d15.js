"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15077"],{638985:function(e,r,o){o.r(r),o.d(r,{metadata:()=>n,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-bookmarks","title":"WP GET BOOKMARKS","description":"WP GET BOOKMARKS ( docWP ; arrayNomeMarcadores )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-bookmarks.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-bookmarks","permalink":"/docs/pt/WritePro/commands/wp-get-bookmarks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-bookmarks.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-bookmarks","title":"WP GET BOOKMARKS","slug":"/WritePro/commands/wp-get-bookmarks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get body","permalink":"/docs/pt/WritePro/commands/wp-get-body"},"next":{"title":"WP Get breaks","permalink":"/docs/pt/WritePro/commands/wp-get-breaks"}}'),s=o("785893"),t=o("250065");let d={id:"wp-get-bookmarks",title:"WP GET BOOKMARKS",slug:"/WritePro/commands/wp-get-bookmarks",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"WP GET BOOKMARKS"})," ( ",(0,s.jsx)(r.em,{children:"docWP"})," ; ",(0,s.jsx)(r.em,{children:"arrayNomeMarcadores"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"docWP"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrayNomeMarcadores"}),(0,s.jsx)(r.td,{children:"Array texto"}),(0,s.jsx)(r.td,{children:"\uD83E\uDC58"}),(0,s.jsx)(r.td,{children:"Array de nome de marcadores"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"WP GET BOOKMARKS"})," devolve um array que cont\xe9m os nomes de todos os marcadores definidos em ",(0,s.jsx)(r.em,{children:"docWP"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Depois de executar o comando, ",(0,s.jsx)(r.em,{children:"arrayNomMarcadores"})," \xe9 preenchido com todos os nomes de marcadores no documento. No array, os nomes est\xe3o ordenados por posi\xe7\xe3o de marcador dentro do documento."]}),"\n",(0,s.jsx)(r.p,{children:"Se v\xe1rios marcadores come\xe7arem na mesma posi\xe7\xe3o, s\xe3o ordenados em ordem alfab\xe9tica."}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"Se quiser saber o n\xfamero de marcadores definidos em seu documento:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"})]})]})}function l(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return a},a:function(){return d}});var n=o(667294);let s={},t=n.createContext(s);function d(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);