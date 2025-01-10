"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6213"],{769949:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/wa-get-preference","title":"WA GET PREFERENCE","description":"WA GET PREFERENCE ( { ;} objeto ; seletor ; valor* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-preference","permalink":"/docs/pt/commands/wa-get-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-preference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-preference","title":"WA GET PREFERENCE","slug":"/commands/wa-get-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get page title","permalink":"/docs/pt/commands/wa-get-page-title"},"next":{"title":"WA GET URL FILTERS","permalink":"/docs/pt/commands/wa-get-url-filters"}}'),s=r("785893"),d=r("250065");let a={id:"wa-get-preference",title:"WA GET PREFERENCE",slug:"/commands/wa-get-preference",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA GET PREFERENCE"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"seletor"})," ; ",(0,s.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"seletor"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Prefer\xeancia a obter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valor"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor atual da prefer\xeancia"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando WA GET PREFERENCE permite obter o valor atual de uma prefer\xeancia na \xe1rea web designada pelos par\xe2metros ",(0,s.jsx)(n.em,{children:"*"})," e ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(n.em,{children:"seletor"})," a prefer\xeancia a ler. Pode passar uma das seguintes constantes, que se encontram no tema ",(0,s.jsx)(n.em,{children:"Web Area"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable contextual menu"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Autoriza a visualiza\xe7\xe3o do menu contextual padr\xe3o na \xe1rea web. Por padr\xe3o (qualquer motor) = False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable URL drop"}),(0,s.jsx)(n.td,{children:"101"}),(0,s.jsxs)(n.td,{children:["Muda o \xedcone drop e chama o evento ",(0,s.jsx)(n.em,{children:"On Window Opening Denied"})," quando URLs ou arquivos s\xe3o soltados na area Web. Padr\xe3o (qualquer motor) = False"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable Web inspector"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"Permite a visualiza\xe7\xe3o do inspetor web na \xe1rea. Padr\xe3o (qualquer motor) = False."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(n.em,{children:"valor"})," uma vari\xe1vel que receber\xe1 o valor atual da prefer\xeancia. O tipo da vari\xe1vel depende da prefer\xeancia. A vari\xe1vel ",(0,s.jsx)(n.em,{children:"valor"})," sempre \xe9 de tipo Booleano: cont\xe9m ",(0,s.jsx)(n.strong,{children:"True"})," se a prefer\xeancia estiver ativa e se n\xe3o ",(0,s.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/wa-set-preference",children:"WA SET PREFERENCE"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1042"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let s={},d=t.createContext(s);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);