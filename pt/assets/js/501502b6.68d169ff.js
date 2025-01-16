"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15826"],{730420:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>i,toc:()=>l,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/is-record-loaded","title":"Is record loaded","description":"Is record loaded {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-record-loaded.md","sourceDirName":"commands-legacy","slug":"/commands/is-record-loaded","permalink":"/docs/pt/20-R7/commands/is-record-loaded","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-record-loaded.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-record-loaded","title":"Is record loaded","slug":"/commands/is-record-loaded","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is new record","permalink":"/docs/pt/20-R7/commands/is-new-record"},"next":{"title":"Modified record","permalink":"/docs/pt/20-R7/commands/modified-record"}}'),n=r("785893"),s=r("250065");let t={id:"is-record-loaded",title:"Is record loaded",slug:"/commands/is-record-loaded",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Is record loaded"})," {( ",(0,n.jsx)(o.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela do registro \xe9 examinada ou tabela padr\xe3o se o par\xe2metro for omitido"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Boolean"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"True se o registro \xe9 carregado, de outra maneira \xe9 False"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"Is record loaded"})," devolve ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/true",title:"True",children:"True"})," se o registro atual de ",(0,n.jsx)(o.em,{children:"tabela"})," \xe9 carregado no processo atual."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"4D Server"}),': Em princ\xedpio, quando tabelas estiverem linkadas por rela\xe7\xf5es autom\xe1ticas, os registros atuais de tabelas relacionadas s\xe3o carregados automaticamente (ver [#title id="1"/]). Entretanto, por raz\xf5es de otimiza\xe7\xe3o, 4D Server s\xf3 carrega os registros quando necess\xe1rio, por exemplo quando lendo ou atribuindo um campo ao registro relacionado. Como resultado disso, no contexto do comando ',(0,n.jsx)(o.strong,{children:"Is record loaded"}),", ser\xe1 retornado False em modo remoto (retorna True em modo local)."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:"Ao inv\xe9s de utilizar as a\xe7\xf5es autom\xe1ticas \u201CSeguinte registro\u201D ou \u201CRegistro anterior\u201D, pode escrever os m\xe9todos de objeto para esses bot\xf5es para melhorar sua opera\xe7\xe3o. O bot\xe3o \u201CSeguinte\u201D mostra o come\xe7o da sele\xe7\xe3o se o usu\xe1rio estiver ao princ\xedpio da sele\xe7\xe3o e o bot\xe3o \u201CAnterior\u201D mostra o final da sele\xe7\xe3o quando o usu\xe1rio estiver ao come\xe7o da sele\xe7\xe3o"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de objeto do bot\xe3o \u201CAnterior\u201D (sem a\xe7\xe3o autom\xe1tica)\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0PREVIOUS RECORD([Grupo])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Grupo])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Grupo];Records in selection([Grupo]))\n\xa0\xa0//Ir ao \xfaltimo registro da sele\xe7\xe3o\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// M\xe9todo de objeto do bot\xe3o \u201CSeguinte\u201D (sem a\xe7\xe3o autom\xe1tica)\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0NEXT RECORD([Grupo])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Grupo])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Grupos];1)\n\xa0\xa0//Ir ao primeiro registro da sele\xe7\xe3o\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"669"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return t}});var d=r(667294);let n={},s=d.createContext(n);function t(e){let o=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(s.Provider,{value:o},e.children)}}}]);