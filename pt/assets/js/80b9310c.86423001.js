"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25531"],{802888:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","description":"GET FIELD ENTRY PROPERTIES ( pontCampo|numTabela {; numCampo}; lista ; obrigat\xf3rio ; n\xe3oEdit\xe1vel ; n\xe3oModific\xe1vel )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-entry-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-entry-properties","permalink":"/docs/pt/commands/get-field-entry-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-entry-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","slug":"/commands/get-field-entry-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get external data path","permalink":"/docs/pt/commands/get-external-data-path"},"next":{"title":"GET FIELD PROPERTIES","permalink":"/docs/pt/commands/get-field-properties"}}'),t=o("785893"),s=o("250065");let i={id:"get-field-entry-properties",title:"GET FIELD ENTRY PROPERTIES",slug:"/commands/get-field-entry-properties",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET FIELD ENTRY PROPERTIES"})," ( pontCampo|numTabela {; ",(0,t.jsx)(n.em,{children:"numCampo"}),"}; ",(0,t.jsx)(n.em,{children:"lista"})," ; ",(0,t.jsx)(n.em,{children:"obrigat\xf3rio"})," ; ",(0,t.jsx)(n.em,{children:"n\xe3oEdit\xe1vel"})," ; ",(0,t.jsx)(n.em,{children:"n\xe3oModific\xe1vel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pontCampo|numTabela"}),(0,t.jsx)(n.td,{children:"Ponteiro, Inteiro longo"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ponteiro de campo ou n\xfamero da tabela"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCampo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de campo se o n\xfamero da tabela for passado como primeiro par\xe2metro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Lista associada ao campo ou string vazia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"obrigat\xf3rio"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = Obrigat\xf3rio, False = Opcional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"n\xe3oEdit\xe1vel"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True=n\xe3o edit\xe1vel, False = Edit\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"n\xe3oModific\xe1vel"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = n\xe3o modific\xe1vel, False = modific\xe1vel"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando GET FIELD ENTRY PROPERTIES retorna as propriedades de entrada de dados para o campo especificado por ",(0,t.jsx)(n.em,{children:"numTabela"})," e ",(0,t.jsx)(n.em,{children:"numCampo"})," ou por ",(0,t.jsx)(n.em,{children:"pontCampo"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pode passar:"}),"\n",(0,t.jsxs)(n.p,{children:["* n\xfameros de tabela e de campo em ",(0,t.jsx)(n.em,{children:"numTabela"})," e ",(0,t.jsx)(n.em,{children:"numCamp"}),", ou",(0,t.jsx)(n.br,{}),"\n* um ponteiro ao campo em ",(0,t.jsx)(n.em,{children:"pontCampo."}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": este comando retorna as propriedades definidas a n\xedvel da janela de estrutura da banco. Propriedades similares podem ser definidas a n\xedvel dos formul\xe1rios."]}),"\n",(0,t.jsx)(n.p,{children:"Quando tiver executado o comando:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"list"})," ",(0,t.jsx)(n.em,{children:"a"})," retorna o nome da lista associada ao campo (se houver). \xc9 poss\xedvel associar uma lista aos seguintes tipos de campos: String, Texto, Real, Inteiro, Inteiro longo, Data, Hora e Booleano.",(0,t.jsx)(n.br,{}),'\nSe nenhuma lista estiver associada ao campo ou se o tipo do campo n\xe3o permitir a asocia\xe7\xe3o de listas, uma string vazia ("") \xe9 retornada.']}),"\n",(0,t.jsxs)(n.li,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"obrigat\xf3rio"})," retorna True se o campo for \u201CObligatorio\u201D; do contr\xe1rio False. O atributo obrigat\xf3rio pode ser associado a todo tipo de campos, exceto BLOB."]}),"\n",(0,t.jsxs)(n.li,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"n\xe3oEdit\xe1vel"})," retorna True se o campo disp\xf4r do atributo \u201C",(0,t.jsx)(n.em,{children:"n\xe3oEdit\xe1vel"}),"\u201D, do contr\xe1rio False. Un campo n\xe3o edit\xe1vel unicamente pode ser lido, n\xe3o aceita entrada de dados. O atributo \u201Cn\xe3o edit\xe1vel\u201D pode ser associado a campos de todos os tipos, exceto para os tipos BLOB."]}),"\n",(0,t.jsxs)(n.li,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"n\xe3oModific\xe1vel"})," retorna True se o campo for \u201Cn\xe3o modific\xe1vel\u201D, do contr\xe1rio False. Un campo n\xe3o modific\xe1vel aceita apenas uma entrada e n\xe3o pode ser modificado depois disso. O atributo \u201CN\xe3o modific\xe1vel\u201D pode ser definido para todos os tipos de campos, exceto para BLOB."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-table-properties",children:"GET TABLE PROPERTIES"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var r=o(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);