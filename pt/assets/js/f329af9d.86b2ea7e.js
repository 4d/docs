"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53302"],{468916:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","description":"SPELL ADD TO USER DICTIONARY ( palavras )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-add-to-user-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-add-to-user-dictionary","permalink":"/docs/pt/commands/spell-add-to-user-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-add-to-user-dictionary.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","slug":"/commands/spell-add-to-user-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Spell Checker","permalink":"/docs/pt/category/spell-checker"},"next":{"title":"SPELL CHECK TEXT","permalink":"/docs/pt/commands/spell-check-text"}}'),s=n("785893"),d=n("250065");let o={id:"spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",slug:"/commands/spell-add-to-user-dictionary",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"SPELL ADD TO USER DICTIONARY"})," ( ",(0,s.jsx)(r.em,{children:"palavras"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"palavras"}),(0,s.jsx)(r.td,{children:"Text, Text array"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Palavra ou lista de palavras para agregar ao dicion\xe1rio do usu\xe1rio"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"SPELL ADD TO USER DICTIONARY"})," agrega uma ou mais palavras ao dicion\xe1rio usu\xe1rio atual."]}),"\n",(0,s.jsxs)(r.p,{children:["O dicion\xe1rio usu\xe1rio \xe9 um dicion\xe1rio que cont\xe9m palavras agregadas pelo usu\xe1rio ao dicion\xe1rio atual. Este dicion\xe1rio \xe9 um arquivo chamado ",(0,s.jsx)(r.em,{children:"UserDictionaryxxx.dic"})," (donde ",(0,s.jsx)(r.em,{children:"xxx"})," representa o ID do dicion\xe1rio atual) que se cria automaticamente na pasta 4D atual. Existe um dicion\xe1rio usu\xe1rio por cada dicion\xe1rio atual utilizado."]}),"\n",(0,s.jsxs)(r.p,{children:["Pode passar em ",(0,s.jsx)(r.em,{children:"palavras"})," uma cadeia texto ou um array texto com as palavras a adicionar ao dicion\xe1rio usu\xe1rio. Se uma das palavras j\xe1 est\xe1 no dicion\xe1rio, ser\xe1 ignorada pelo comando."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"Adi\xe7\xe3o de nomes pr\xf3prios ao dicion\xe1rio de usu\xe1rio:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTwords;0)\n\xa0APPEND TO ARRAY($arrTwords;"4D")\n\xa0APPEND TO ARRAY($arrTwords;"Wakanda")\n\xa0APPEND TO ARRAY($arrTwords;"Clichy")\n\xa0SPELL ADD TO USER DICTIONARY($arrTwords)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/pt/commands/spell-check-text",children:"SPELL CHECK TEXT"})}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"1214"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var a=n(667294);let s={},d=a.createContext(s);function o(e){let r=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:r},e.children)}}}]);