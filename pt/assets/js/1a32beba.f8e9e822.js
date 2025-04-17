"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90870"],{196144:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/displayed-line-number","title":"Displayed line number","description":"Displayed line number  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/displayed-line-number.md","sourceDirName":"commands-legacy","slug":"/commands/displayed-line-number","permalink":"/docs/pt/20-R8/commands/displayed-line-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplayed-line-number.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"displayed-line-number","title":"Displayed line number","slug":"/commands/displayed-line-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISPLAY SELECTION","permalink":"/docs/pt/20-R8/commands/display-selection"},"next":{"title":"End selection","permalink":"/docs/pt/20-R8/commands/end-selection"}}'),s=r("785893"),a=r("250065");let i={id:"displayed-line-number",title:"Displayed line number",slug:"/commands/displayed-line-number",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Displayed line number"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xba da linha sendo exibida"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando Displayed line number funciona unicamente no contexto do evento de formul\xe1rio On Display Detail. Retorna o n\xfamero da linha que estiver sendo processada enquanto uma lista de registros \xe9 mostrada em tela. Se Displayed line number for chamada quando n\xe3o se mostra uma lista, retorna 0."}),"\n",(0,s.jsxs)(n.p,{children:["Se a linha mostrada n\xe3o estiver vazia (quando estiver associada a um registro), o valor retornado por Displayed line number \xe9 id\xeantico ao valor retornado por ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/selected-record-number",title:"Selected record number",children:"Selected record number"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Do mesmo jeito que ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/selected-record-number",children:"Selected record number"}),", Displayed line number come\xe7a em 1. Este comando \xe9 \xfatil quando deseja aplicar um processo a cada linha de um formul\xe1rio listado ou de um list-box mostrado em tela, incluindo as linhas vazias."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo lhe permite aplicar uma cor alternativa em um formul\xe1rio listado mostrado em tela, inclusive para as linhas sem registros:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9todo de formul\xe1rio listado\n\xa0If(Form event code=On Display Detail)\n\xa0\xa0\xa0\xa0If(Displayed line number% 2=0)\n\xa0\xa0//Negro sobre branco para o texto das linhas pares\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET RGB COLORS([Tabela 1]Campo1;-1;0x00FFFFFF)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0//Negro sobre azul claro para as linhas \xedmpares\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET RGB COLORS([Tabela 1]Campo1;-1;0x00E0E0FF)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(893389).Z+"",width:"504",height:"300"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/selected-record-number",children:"Selected record number"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"897"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},893389:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/pict32598.en-6df373e0b05a0ed1bff4a74a52054d9d.png"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var d=r(667294);let s={},a=d.createContext(s);function i(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);