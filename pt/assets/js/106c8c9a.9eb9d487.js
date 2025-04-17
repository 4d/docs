"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92013"],{313601:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/spell-get-current-dictionary","title":"SPELL Get current dictionary","description":"SPELL Get current dictionary  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/spell-get-current-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-get-current-dictionary","permalink":"/docs/pt/commands/spell-get-current-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-get-current-dictionary.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"spell-get-current-dictionary","title":"SPELL Get current dictionary","slug":"/commands/spell-get-current-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL CHECKING","permalink":"/docs/pt/commands/spell-checking"},"next":{"title":"SPELL GET DICTIONARY LIST","permalink":"/docs/pt/commands/spell-get-dictionary-list"}}'),d=t("785893"),i=t("250065");let s={id:"spell-get-current-dictionary",title:"SPELL Get current dictionary",slug:"/commands/spell-get-current-dictionary",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SPELL Get current dictionary"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"ID do dicion\xe1rio utilizado para a corre\xe7\xe3o ortogr\xe1fica"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"SPELL Get current dictionary"})," devolve o n\xfamero de ID do dicion\xe1rio que est\xe1 sendo utilizado."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Queremos mostrar a linguagem do dicion\xe1rio atual:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Lista dos dicion\xe1rios carregados\n\xa0SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Names_at)\n\xa0$curLangCode:=SPELL Get current dictionary\n\xa0$countryName:=$Names_at{Find in array($IDs_al;$curLangCode)}\n\xa0\xa0// Mostrar mensagens\n\xa0ALERT("Dicion\xe1rio atual: "+$countryName)\xa0// Espanhol\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1205"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(667294);let d={},i=r.createContext(d);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);