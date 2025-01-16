"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21127"],{930269:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/display-record","title":"DISPLAY RECORD","description":"DISPLAY RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-record.md","sourceDirName":"commands-legacy","slug":"/commands/display-record","permalink":"/docs/pt/20-R7/commands/display-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"display-record","title":"DISPLAY RECORD","slug":"/commands/display-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE RECORD","permalink":"/docs/pt/20-R7/commands/delete-record"},"next":{"title":"DUPLICATE RECORD","permalink":"/docs/pt/20-R7/commands/duplicate-record"}}'),s=n("785893"),d=n("250065");let t={id:"display-record",title:"DISPLAY RECORD",slug:"/commands/display-record",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"DISPLAY RECORD"})," {( ",(0,s.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabela"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabela para qual exibir o registro atual, ou tabela Padr\xe3o, se omitido"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando DISPLAY RECORD mostra o registro atual de ",(0,s.jsx)(r.em,{children:"tabela"}),", utilizando o formul\xe1rio de entrada atual. O registro se mostra at\xe9 que um evento provoque um redesenho da janela. Tal evento pode ser a execu\xe7\xe3o de um comando ADD RECORD, o regresso ao formul\xe1rio de entrada, ou a barra de menus. DISPLAY RECORD n\xe3o faz nada se n\xe3o houver registro atual."]}),"\n",(0,s.jsx)(r.p,{children:"DISPLAY RECORD \xe9 utilizado com freq\xfc\xeancia para mostrar mensagens de progresso personalizados. Tamb\xe9m pode ser utilizado para gerar uma apresenta\xe7\xe3o de slides."}),"\n",(0,s.jsx)(r.p,{children:"Se existir um m\xe9todo de formul\xe1rio, se gerar\xe1 um evento On Load."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Advert\xeancia"}),": N\xe3o chame DISPLAY RECORD desde um processo de conex\xe3o Web, porque o comando ser\xe1 executado na m\xe1quina do servidor Web de 4D e n\xe3o na m\xe1quina do cliente do navegador Web."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"O exemplo a seguir mostra uma s\xe9rie de registros como uma apresenta\xe7\xe3o de slides"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ALL RECORDS([Demo])\xa0// Sele\xe7\xe3o de todos os registros\n\xa0FORM SET INPUT([Demo];"Mostrar")\xa0// Designa\xe7\xe3o do formul\xe1rio a utilizar\n\xa0For($vlRecord;1;Records in selection([Demo]))\xa0// Loop atrav\xe9s de todos os registros\n\xa0\xa0\xa0\xa0DISPLAY RECORD([Demo])\xa0// Mostrar um registro\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;180)\xa0// 3 segundos de pausa\n\xa0\xa0\xa0\xa0NEXT RECORD([Demo])\xa0// Passar ao seguinte registro\n\xa0End for\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/message",children:"MESSAGE"})}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"105"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return t}});var o=n(667294);let s={},d=o.createContext(s);function t(e){let r=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);