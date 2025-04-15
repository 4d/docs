"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67171"],{413278:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/get-relation-properties","title":"GET RELATION PROPERTIES","description":"GET RELATION PROPERTIES ( pontCampo ; tabelaUm ; numCampo {; discriminante {; autoUm {; autoMuitos}}} )GET RELATION PROPERTIES ( numTabela ; numCampo ; tabelaUm ; campoUmo {; discriminante {; autoUm {; autoMuitos}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-relation-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-relation-properties","permalink":"/docs/pt/commands/get-relation-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-relation-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-relation-properties","title":"GET RELATION PROPERTIES","slug":"/commands/get-relation-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/pt/commands/get-missing-table-names"},"next":{"title":"GET TABLE PROPERTIES","permalink":"/docs/pt/commands/get-table-properties"}}'),t=r("785893"),s=r("250065");let a={id:"get-relation-properties",title:"GET RELATION PROPERTIES",slug:"/commands/get-relation-properties",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"pontCampo"})," ; ",(0,t.jsx)(n.em,{children:"tabelaUm"})," ; ",(0,t.jsx)(n.em,{children:"numCampo"})," {; ",(0,t.jsx)(n.em,{children:"discriminante"})," {; ",(0,t.jsx)(n.em,{children:"autoUm"})," {; ",(0,t.jsx)(n.em,{children:"autoMuitos"}),"}}} )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"numTabela"})," ; ",(0,t.jsx)(n.em,{children:"numCampo"})," ; ",(0,t.jsx)(n.em,{children:"tabelaUm"})," ; ",(0,t.jsx)(n.em,{children:"campoUmo"})," {; ",(0,t.jsx)(n.em,{children:"discriminante"})," {; ",(0,t.jsx)(n.em,{children:"autoUm"})," {; ",(0,t.jsx)(n.em,{children:"autoMuitos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pontCampo|numTabela"}),(0,t.jsx)(n.td,{children:"Ponteiro, Inteiro longo"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ponteiro de campo ou n\xfamero da tabela"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCampo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de campo se o n\xfamero da tabela for passado como primeiro par\xe2metro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tabela"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xba de tabela ou 0 se nenhuma rela\xe7\xe3o tiver sido definido para o campo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Campo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de campo ou 0 se nenhuma rela\xe7\xe3o for definida para o campo."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discriminante"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de campo discriminante ou 0 se nenhum campo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoUm"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = rela\xe7\xe3o Um autom\xe1tica, False = Rela\xe7\xe3o Um manual"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoMuitos"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = rela\xe7\xe3o Um para Muitos autom\xe1tica, False = Rela\xe7\xe3o Um para Muitos manual"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando GET RELATION PROPERTIES retorna as propriedades da rela\xe7\xe3o (se houver) que come\xe7a do campo fonte definido por ",(0,t.jsx)(n.em,{children:"numTabela"})," e ",(0,t.jsx)(n.em,{children:"numCamp"}),"o ou por ",(0,t.jsx)(n.em,{children:"pontCampo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pode passar:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["N\xfameros de tabela e de campo en ",(0,t.jsx)(n.em,{children:"numTabela"})," e ",(0,t.jsx)(n.em,{children:"numCampo"}),","]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ou um ponteiro ao campo em ",(0,t.jsx)(n.em,{children:"pontCampo"}),".\nQuando o comando tiver sido executado:"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Os par\xe2metros ",(0,t.jsx)(n.em,{children:"tabelaUm e campoUm"})," contem respectivamente o n\xfamero da tabela e do campo aos quais aponta a rela\xe7\xe3o (do campo fonte). Se nenhuma rela\xe7\xe3o come\xe7a a partir do campo, este par\xe2metro retorna 0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"escolha"})," cont\xe9m o n\xfamero do campo escolhido (da tabela objetivo) definido dentro desta rela\xe7\xe3o. Se n\xe3o for definido um campo escolhido nessa rela\xe7\xe3o, ou se nenhuma rela\xe7\xe3o parte do campo fonte, este par\xe2metro retorna 0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Os par\xe2metro ",(0,t.jsx)(n.em,{children:"autoUm e autoMuitos"})," retornam ",(0,t.jsx)(n.em,{children:"True"})," se, respectivamente, as op\xe7\xf5es \u201CRela\xe7\xe3o um a muitos autom\xe1tica\u201D e \u201CRela\xe7\xe3o muitos a um autom\xe1tica\u201D forem selecionadas para esta rela\xe7\xe3o; do contr\xe1rio, retornam ",(0,t.jsx)(n.em,{children:"False"}),".\n",(0,t.jsx)(n.strong,{children:"Nota"}),": os par\xe2metros ",(0,t.jsx)(n.em,{children:"autoUm"})," e ",(0,t.jsx)(n.em,{children:"autoMuitos"})," tamb\xe9m devolver\xe3o ",(0,t.jsx)(n.em,{children:"True"})," se nenhuma rela\xe7\xe3o parte do campo fonte (nesse caso retornam valores n\xe3o significativos.). O valor dos par\xe2metros t",(0,t.jsx)(n.em,{children:"abelaUno e campUno"})," permitem assegurar de que uma rela\xe7\xe3o existe."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-table-properties",children:"GET TABLE PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"686"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var o=r(667294);let t={},s=o.createContext(t);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);