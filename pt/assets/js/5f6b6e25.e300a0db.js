"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61433"],{566485:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","description":"GET HIGHLIGHTED RECORDS ( {tabela ;} nomConjunto )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-highlighted-records.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlighted-records","permalink":"/docs/pt/commands/get-highlighted-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlighted-records.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","slug":"/commands/get-highlighted-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FIRST RECORD","permalink":"/docs/pt/commands/first-record"},"next":{"title":"GOTO SELECTED RECORD","permalink":"/docs/pt/commands/goto-selected-record"}}'),r=n("785893"),t=n("250065");let d={id:"get-highlighted-records",title:"GET HIGHLIGHTED RECORDS",slug:"/commands/get-highlighted-records",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"GET HIGHLIGHTED RECORDS"})," ( {",(0,r.jsx)(o.em,{children:"tabela"})," ;} ",(0,r.jsx)(o.em,{children:"nomConjunto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabela"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabela para a qual os registros selecionados ser\xe3o lidos. Se omitido, a tabela do formul\xe1rio atual"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nomConjunto"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Conjunto onde os nomes selecionados ser\xe3o armazenados"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando GET HIGHLIGHTED RECORDS guarda, no conjunto designado pelo par\xe2metro ",(0,r.jsx)(o.em,{children:"nomConjunto,"})," os registros selecionados (ou seja, os registros selecionados pelo usu\xe1rio no formul\xe1rio listado) da ",(0,r.jsx)(o.em,{children:"tabela"})," passada como par\xe2metro. Se o par\xe2metro ",(0,r.jsx)(o.em,{children:"tabela"})," for omitido, \xe9 utilizada a tabela do formul\xe1rio ou do subformul\xe1rio atual."]}),"\n",(0,r.jsxs)(o.p,{children:["Em modo Desenho ou durante a execu\xe7\xe3o dos comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"})," /",(0,r.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"}),", este comando pode ser substitu\xeddo chamando o conjunto sistema UserSet mantendo automaticamente por 4D. Entretanto, como este comando permite atribuir a tabela da qual recuperar os registros selecionados, o comando GET HIGHLIGHTED RECORDS tamb\xe9m pode administrar as sele\xe7\xf5es de registros em subformul\xe1rios. Neste caso, as sele\xe7\xf5es de subformul\xe1rios podem vir de diferentes tabelas. Para maior informa\xe7\xe3o sobre o conjunto UserSet, consulte a se\xe7\xe3o ",(0,r.jsx)(o.em,{children:"Conjuntos"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"O comando GET HIGHLIGHTED RECORDS tamb\xe9m pode ser chamado fora do contexto de um formul\xe1rio; entretanto, o conjunto retornado est\xe1 vazio."}),"\n",(0,r.jsxs)(o.p,{children:["O conjunto designado por ",(0,r.jsx)(o.em,{children:"nomConjunto"})," pode ser local/cliente, processo ou interprocesso."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": Em formul\xe1rios inclu\xeddos, o comando GET HIGHLIGHTED RECORDS retorna um conjunto vazio se o subformul\xe1rio n\xe3o tiver a propriedade de sele\xe7\xe3o ",(0,r.jsx)(o.strong,{children:"V\xe1rias linhas"}),". Neste caso, para conhecer a linha selecionada, deve utilizar o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/selected-record-number",children:"Selected record number"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Este m\xe9todo indica quantos registros est\xe3o selecionados no subformul\xe1rio que mostra os registros da tabela [CDs]:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0GET HIGHLIGHTED RECORDS([CDs];"$highlight")\n\xa0ALERT(String(Records in set("$highlight"))"+"registros selecionados.")\n\xa0CLEAR SET("$highlight")\n'})}),"\n",(0,r.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(o.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0."}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/highlight-records",children:"HIGHLIGHT RECORDS"})}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"902"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},t=s.createContext(r);function d(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);