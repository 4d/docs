"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79685"],{135947:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/asserted","title":"Asserted","description":"Asserted ( expressaoBool {; mensagemTexto} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/asserted.md","sourceDirName":"commands-legacy","slug":"/commands/asserted","permalink":"/docs/pt/20-R7/commands/asserted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fasserted.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"asserted","title":"Asserted","slug":"/commands/asserted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ASSERT","permalink":"/docs/pt/20-R7/commands/assert"},"next":{"title":"FILTER EVENT","permalink":"/docs/pt/20-R7/commands/filter-event"}}'),d=n("785893"),o=n("250065");let a={id:"asserted",title:"Asserted",slug:"/commands/asserted",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Asserted"})," ( ",(0,d.jsx)(s.em,{children:"expressaoBool"})," {; ",(0,d.jsx)(s.em,{children:"mensagemTexto"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"expressaoBool"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Express\xe3o Booleana"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"mensagemText"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"texto da mensagem de erro"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Resultado"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Resultado da avalia\xe7\xe3o de expressaoBool"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando Asserted tem um funcionamento similar ao do comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/assert",children:"ASSERT"}),", com a diferen\xe7a de que retorna um valor que \xe9 o resultado da avalia\xe7\xe3o do par\xe2metro ",(0,d.jsx)(s.em,{children:"expressaoBool"}),". Permite utilizar uma asser\xe7\xe3o durante a avalia\xe7\xe3o de uma condi\xe7\xe3o (ver o exemplo). Para maior informa\xe7\xe3o sobre o funcionamento das asser\xe7\xf5es e os par\xe2metros deste comando, consulte a descri\xe7\xe3o do comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/assert",children:"ASSERT"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Asserted aceita uma express\xe3o Booleana como par\xe2metro e retorna o resultado da avalia\xe7\xe3o desta express\xe3o. Se a express\xe3o \xe9 falsa e se as asser\xe7\xf5es est\xe3o ativas (ver o comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-assert-enabled",children:"SET ASSERT ENABLED"}),"), \xe9 gerado o erro -10518, exatamente que para o comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/assert",children:"ASSERT"}),". Se as asser\xe7\xf5es est\xe3o inativas, Asserted retorna o resultado da express\xe3o que foi passada sem disparar um erro."]}),"\n",(0,d.jsxs)(s.p,{children:["Nota: Como o comando ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/assert",children:"ASSERT"}),", Asserted funciona em modo interpretado e compilado."]}),"\n",(0,d.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(s.p,{children:"Inserir uma asser\xe7\xe3o na avalia\xe7\xe3o de uma express\xe3o:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0READ WRITE([Tabela 1])\n\xa0LOAD RECORD([Tabela 1])\n\xa0If(Asserted(Not(Locked([Tabela 1]))))\n\xa0\xa0// Este c\xf3digo desencadeia o erro -10518 se o registro est\xe1 bloqueado\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,d.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/assert",children:"ASSERT"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-assert-enabled",children:"Get assert enabled"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-assert-enabled",children:"SET ASSERT ENABLED"})]}),"\n",(0,d.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"1132"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2713"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return a}});var r=n(667294);let d={},o=r.createContext(d);function a(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);