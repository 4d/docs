"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88373"],{891658:function(e,s,a){a.r(s),a.d(s,{metadata:()=>n,contentTitle:()=>r,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/set-assert-enabled","title":"SET ASSERT ENABLED","description":"SET ASSERT ENABLED ( asser\xe7\xf5es {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-assert-enabled.md","sourceDirName":"commands-legacy","slug":"/commands/set-assert-enabled","permalink":"/docs/pt/commands/set-assert-enabled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-assert-enabled.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-assert-enabled","title":"SET ASSERT ENABLED","slug":"/commands/set-assert-enabled","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ON EVENT CALL","permalink":"/docs/pt/commands/on-event-call"},"next":{"title":"throw","permalink":"/docs/pt/commands/throw"}}'),o=a("785893"),t=a("250065");let d={id:"set-assert-enabled",title:"SET ASSERT ENABLED",slug:"/commands/set-assert-enabled",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SET ASSERT ENABLED"})," ( ",(0,o.jsx)(s.em,{children:"asser\xe7\xf5es"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"asser\xe7\xf5es"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"TRUE = Ativa asser\xe7\xf5es FALSE = desativa asser\xe7\xf5es"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Se omitido = comando aplica a todos os processos (existidos ou que ser\xe3o criados) se passado, o comando = aplica apenas ao processo atual."})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando SET ASSERT ENABLED \xe9 utilizado para desativar ou reativar as asser\xe7\xf5es inseridas no c\xf3digo 4D da aplica\xe7\xe3o. Para maior informa\xe7\xe3o sobre asser\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/assert",children:"ASSERT"}),"."]}),"\n",(0,o.jsx)(s.p,{children:'Automaticamente, as asser\xe7\xf5es adicionadas no programa est\xe3o ativas. Este comando \xe9 \xfatil para desativ\xe1-las j\xe1 que sua avalia\xe7\xe3o pode ser problem\xe1tica em termos de tempo de execu\xe7\xe3o e voc\xea tamb\xe9m poderia querer ocult\xe1-las do usu\xe1rio final da aplica\xe7\xe3o. Em geral, o comando SET ASSERT ENABLEDpode ser utilizado no m\xe9todo banco On Startup para ativar o desativar asser\xe7\xf5es em fun\xe7\xe3o de se a aplica\xe7\xe3o est\xe1 em modo "Provaa" ou em modo "Produ\xe7\xe3o".'}),"\n",(0,o.jsxs)(s.p,{children:["Normalmente, o comando SET ASSERT ENABLED afeta todos os processos da aplica\xe7\xe3o. Para limitar o efeito do comando ao processo atual unicamente, passe o par\xe2metro ",(0,o.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Por favor considere que quando as asser\xe7\xf5es est\xe3o desativadas, as express\xf5es passadas aos comandos ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/assert",children:"ASSERT"})," n\xe3o s\xe3o avaliadas. As linhas de c\xf3digo que chamam a ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/assert",children:"ASSERT"})," n\xe3o t\xeam mais efeito no funcionamento da aplica\xe7\xe3o, nem en termos de comportamento nem em termos de rendimento."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Desativa\xe7\xe3o de asser\xe7\xf5es"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0SET ASSERT ENABLED(False)\n\xa0ASSERT(TestMethod)\xa0// TestMethod n\xe3o ser\xe1 chamada j\xe1 que as asser\xe7\xf5es est\xe3o desativadas\n"})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/assert",children:"ASSERT"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/asserted",children:"Asserted"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-assert-enabled",children:"Get assert enabled"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1131"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return r},a:function(){return d}});var n=a(667294);let o={},t=n.createContext(o);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);