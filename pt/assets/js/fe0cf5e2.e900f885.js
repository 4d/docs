"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95732"],{400734:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/is-new-record","title":"Is new record","description":"Is new record {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-new-record.md","sourceDirName":"commands-legacy","slug":"/commands/is-new-record","permalink":"/docs/pt/commands/is-new-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-new-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-new-record","title":"Is new record","slug":"/commands/is-new-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO RECORD","permalink":"/docs/pt/commands/goto-record"},"next":{"title":"Is record loaded","permalink":"/docs/pt/commands/is-record-loaded"}}'),d=r("785893"),s=r("250065");let t={id:"is-new-record",title:"Is new record",slug:"/commands/is-new-record",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Is new record"})," {( ",(0,d.jsx)(n.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabela"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabela do registro a ser examinado ou tabela Padr\xe3o se o par\xe2metro \xe9 omitido"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Verdadeiro se o registro est\xe1 sendo criado, ou ent\xe3o Falso"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando Is new record devolve ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," quando o registro atual de ",(0,d.jsx)(n.em,{children:"tabela"})," estiver sendo criado e ainda n\xe3o foi guardado no processo atual."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota de compatibilidade"}),": \xc9 poss\xedvel obter a mesma informa\xe7\xe3o utilizando o comando existente ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/record-number",title:"Record Number",children:"Record Number"}),", e provando se devolve -3. Entretanto, recomendamos utilizar Is new record em lugar de ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/record-number",title:"Record Number",children:"Record Number"})," nesse caso. De fato, o comando Is new record certifica que haja uma melhor compatibilidade com as futuras vers\xf5es de 4D."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"4D Server"}),": Este comando devolve um resultado diferente no contexto do evento de formul\xe1rio On Validate dependendo se foi executado em 4D (mono-posto) ou 4D Client. Em vers\xe3o mono-posto, o comando devolve ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," (o registro se considera como criado). Em vers\xe3o cliente/servidor, o comando devolve ",(0,d.jsx)(n.em,{children:"True"})," porque nesse caso, o registro j\xe1 foi criado no servidor mas a informa\xe7\xe3o n\xe3o foi enviada ainda ao cliente."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"As duas instru\xe7\xf5es a seguir s\xe3o id\xeanticas. A segunda \xe9 recomendada para que o c\xf3digo seja compat\xedvel com as pr\xf3ximas vers\xf5es de 4D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Record number([Tabela])=-3)\xa0//N\xe3o \xe9 recomendada\n\xa0\xa0// ...\n\xa0End if\n\xa0\n\xa0If(Is new record([Tabela]))\xa0//Recomendada\n\xa0\xa0// ...\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/modified-record",children:"Modified record"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/record-number",children:"Record number"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"668"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var o=r(667294);let d={},s=o.createContext(d);function t(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);