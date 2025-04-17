"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14559"],{178124:function(e,o,a){a.r(o),a.d(o,{default:()=>l,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>i,contentTitle:()=>m});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-bookmark","title":"WP NEW BOOKMARK","description":"WP NEW BOOKMARK ( objFaixa ; nomeBookm )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-new-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-bookmark","permalink":"/docs/pt/WritePro/commands/wp-new-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-bookmark.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-new-bookmark","title":"WP NEW BOOKMARK","slug":"/WritePro/commands/wp-new-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New","permalink":"/docs/pt/WritePro/commands/wp-new"},"next":{"title":"WP New footer","permalink":"/docs/pt/WritePro/commands/wp-new-footer"}}'),r=a("785893"),s=a("250065");let t={id:"wp-new-bookmark",title:"WP NEW BOOKMARK",slug:"/WritePro/commands/wp-new-bookmark",displayed_sidebar:"docs"},m=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"WP NEW BOOKMARK"})," ( ",(0,r.jsx)(o.em,{children:"objFaixa"})," ; ",(0,r.jsx)(o.em,{children:"nomeBookm"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objFaixa"}),(0,r.jsx)(o.td,{children:"Object"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"faixa 4D Write Pro"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nomeBookm"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome da Bookmark a criar"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"WP NEW BOOKMARK"})," [#/descv]cria uma nova bookmark ou marcador de p\xe1gina chamado ",(0,r.jsx)(o.em,{children:"nomeBookm"})," baseado na ",(0,r.jsx)(o.em,{children:"FaixaObj"})," 4D Write Pro na faixa do documento pai. [#/descv]"]}),"\n",(0,r.jsxs)(o.p,{children:["Bookmarks s\xe3o refer\xeancias nomeadas \xe0 faixas, que permitem que acesse e reutilise partes espec\xedficas do documento, por exemplo, como modelos. Para saber mais, veja ",(0,r.jsx)(o.em,{children:"Comandos de Bookmark"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"targetObj"}),", pode passar:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"uma faixa ou"}),"\n",(0,r.jsx)(o.li,{children:"um elemento (cabe\xe7alho / rodap\xe9 / corpo / tabela / fila/ imagem inline / par\xe1grafo)"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": Se passar um elemento em ",(0,r.jsx)(o.em,{children:"targetObj"}),", a bookmark vai conter apenas o elemento especificado."]}),"\n",(0,r.jsxs)(o.p,{children:["Em ",(0,r.jsx)(o.em,{children:"nomeBookm"}),", passe o nome para a nova bookmark. O nome da bookmark deve seguir as regras de nomes HTML/CSS, ou seja, deve conter apenas caracteres alfanum\xe9ricos (caracteres inv\xe1lidos, como espa\xe7os, s\xe3o automaticamente removidos). Nomes de bookmarks devem ser \xfanicos dentro do documento. Se uma bookmark com o mesmo nome j\xe1 existir no documento, ela ser\xe1 sobreescrita."]}),"\n",(0,r.jsx)(o.p,{children:"\xc9 poss\xedvel criar tantas bookmarks quantas desejadas dentro do mesmo documento. Bookmarks m\xfaltiplas podem ser criadas usando exatamente a mesma range. Quando criada, uma bookmark \xe9 automaticamente armazenada no documento pai e salv com o documento.."}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Pode criar uma nova bookmark referenciando o texto selecionado atual no documento. Pode escrever:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $range : Object\n\xa0$range:=WP Selection range(*;"WPDocument")\n\xa0WP NEW BOOKMARK($range;"my_bookmark")\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser renomear uma bookmark existente, precisa criar uma nova bookmark com a mesma faixa, e ent\xe3o apagar a antiga:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP NEW BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"})]})]})}function l(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return m},a:function(){return t}});var n=a(667294);let r={},s=n.createContext(r);function t(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function m(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);