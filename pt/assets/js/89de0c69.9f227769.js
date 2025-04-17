"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13395"],{552345:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/wa-set-preference","title":"WA SET PREFERENCE","description":"WA SET PREFERENCE ( { ;} objeto ; seletor ; valor* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-set-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-preference","permalink":"/docs/pt/20-R8/commands/wa-set-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-preference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-set-preference","title":"WA SET PREFERENCE","slug":"/commands/wa-set-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PAGE CONTENT","permalink":"/docs/pt/20-R8/commands/wa-set-page-content"},"next":{"title":"WA SET URL FILTERS","permalink":"/docs/pt/20-R8/commands/wa-set-url-filters"}}'),t=r("785893"),d=r("250065");let a={id:"wa-set-preference",title:"WA SET PREFERENCE",slug:"/commands/wa-set-preference",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA SET PREFERENCE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"seletor"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"seletor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Prefer\xeancia a ser modificada"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor de prefer\xeancia (True=permitido; False = n\xe3o permitido)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando WA SET PREFERENCE permite fixar diferentes prefer\xeancias para o \xe1rea web designada pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"*"})," e ",(0,t.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,t.jsx)(n.em,{children:"seletor"})," a prefer\xeancia a modificar e em ",(0,t.jsx)(n.em,{children:"valor"})," o valor a atribuir. Pode passar em ",(0,t.jsx)(n.em,{children:"seletor"}),', uma das seguintes constantes, que se encontram no tema "',(0,t.jsx)(n.em,{children:"Web Area"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable contextual menu"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Autoriza a visualiza\xe7\xe3o do menu contextual padr\xe3o na \xe1rea web. Por padr\xe3o (qualquer motor) = False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable URL drop"}),(0,t.jsx)(n.td,{children:"101"}),(0,t.jsxs)(n.td,{children:["Muda o \xedcone drop e chama o evento ",(0,t.jsx)(n.em,{children:"On Window Opening Denied"})," quando URLs ou arquivos s\xe3o soltados na area Web. Padr\xe3o (qualquer motor) = False"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable Web inspector"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"Permite a visualiza\xe7\xe3o do inspetor web na \xe1rea. Padr\xe3o (qualquer motor) = False."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Para cada prefer\xeancia, passe ",(0,t.jsx)(n.strong,{children:"True"})," em valor para ativ\xe1-la e ",(0,t.jsx)(n.strong,{children:"False"})," para desativ\xe1-la."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Para ativar o URL solte-a na \xe1rea web 'myarea':"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//no m\xe9todo formul\xe1rio \n\nWA SET PREFERENCE( *;"myarea"; WA enable URL drop ; True)\n\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//no m\xe9todo objeto web area\n\xa0If(FORM Event.code=On Window Opening Denied)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/wa-get-preference",children:"WA GET PREFERENCE"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1041"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(667294);let t={},d=s.createContext(t);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);