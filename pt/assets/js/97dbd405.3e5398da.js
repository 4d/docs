"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21024"],{267481:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/relate-many","title":"RELATE MANY","description":"RELATE MANY ( tabela1 | campo1 )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/relate-many.md","sourceDirName":"commands-legacy","slug":"/commands/relate-many","permalink":"/docs/pt/commands/relate-many","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-many.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"relate-many","title":"RELATE MANY","slug":"/commands/relate-many","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OLD RELATED ONE","permalink":"/docs/pt/commands/old-related-one"},"next":{"title":"RELATE MANY SELECTION","permalink":"/docs/pt/commands/relate-many-selection"}}'),n=s("785893"),r=s("250065");let t={id:"relate-many",title:"RELATE MANY",slug:"/commands/relate-many",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"RELATE MANY"})," ( tabela1 | campo1 )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(a.tbody,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"tabela1 | campo1"}),(0,n.jsx)(a.td,{children:"Tabela, Campo"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Tabela para estabelecer todas as rela\xe7\xf5es Um a Muitos, ou campo UM"})]})})]}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"RELATE MANY tem duas sintaxes."}),"\n",(0,n.jsxs)(a.p,{children:["A primeira sintaxe, RELATE MANY(tabela1), estabelece todas as rela\xe7\xf5es Um a Muitos para ",(0,n.jsx)(a.em,{children:"tabela1"}),". Muda a sele\xe7\xe3o atual para cada tabela que tenha uma rela\xe7\xe3o Um a Muitos com ",(0,n.jsx)(a.em,{children:"tabela1"}),". As sele\xe7\xf5es atuais nas tabelas Muitos dependem do valor atual de cada campo relacionado na tabela Um. Cada vez que este comando for executado, as sele\xe7\xf5es atuais das tabelas Muitos s\xe3o modificadas."]}),"\n",(0,n.jsxs)(a.p,{children:["A segunda sintaxe, RELATE MANY(campo1), estabelece a rela\xe7\xe3o Um a Muitos para ",(0,n.jsx)(a.em,{children:"campo1"}),". Modifica a sele\xe7\xe3o atual para cada tabela que tenha uma rela\xe7\xe3o com ",(0,n.jsx)(a.em,{children:"campo1"}),". Isto significa que os registros relacionados se torna sele\xe7\xe3o atual da tabela Muitos."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": Se a sele\xe7\xe3o atual da tabela Um est\xe1 vazia no momento da execu\xe7\xe3o de RELATE MANY, o comando n\xe3o faz nada"]}),"\n",(0,n.jsx)(a.h3,{id:""}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,n.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(a.p,{children:"No seguinte exemplo, tr\xeas tabelas est\xe3o relacionadas com rela\xe7\xf5es autom\xe1ticas. As duas tabelas [Pessoas] e [Partes] tem uma rela\xe7\xe3o Muitos a Um com a tabela [Empresas]."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(354129).Z+"",width:"543",height:"276"})}),"\n",(0,n.jsx)(a.p,{children:"Este \xe9 o formul\xe1rio para a tabela [Empresas] que mostrar\xe1 os registros relacionados das tabelas [Pessoas] e [Partes]."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(406443).Z+"",width:"801",height:"485"})}),"\n",(0,n.jsx)(a.p,{children:"Quando s\xe3o mostrados os formul\xe1rios para Pessoas e Partes, os registros relacionados para as tabelas [Pessoas] e [Partes] se carregam e se transformam as sele\xe7\xf5es atuais destas tabelas."}),"\n",(0,n.jsx)(a.p,{children:"Por outra parte, os registros relacionados n\xe3o s\xe3o carregados se um registro da tabela [Empresas] for selecionado por programa\xe7\xe3o. Neste caso, deve utilizar o comando RELATE MANY"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Quando o comando RELATE MANY \xe9 aplicado a uma sele\xe7\xe3o vazia, o comando n\xe3o \xe9 executado e a sele\xe7\xe3o para a tabela Muitos n\xe3o muda."}),"\n",(0,n.jsx)(a.li,{children:"Para que o comando funcione, os campos chave estrangeira (campos Muitos) devem estar indexados."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Por exemplo, o m\xe9todo a seguir realiza um loop para cada registro da tabela [Empresas]. Para cada empresa, aparece uma caixa de alerta. A caixa de alerta mostra o n\xfamero de pessoas na empresa (o n\xfamero de registros relacionados na tabela [Pessoas]), e o n\xfamero de partes que fornecem (o n\xfamero de registros na tabela [Partes] que est\xe3o relacionados). No exemplo, o argumento para o comando ",(0,n.jsx)(a.a,{href:"/docs/pt/commands/alert",children:"ALERT"})," \xe9 impresso em varias linhas por claridade."]}),"\n",(0,n.jsx)(a.p,{children:"Note que \xe9 necess\xe1rio o comando RELATE MANY, mesmo que as rela\xe7\xf5es sejam autom\xe1ticas."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0ALL RECORDS([Empresas])\xa0// Selecionar todos os registros na tabela\n\xa0ORDER BY([Empresas];[Empresas]Nome)\xa0// Ordenar os registros em ordem alfab\xe9tica\n\xa0For($i;1;Records in table([Empresas]))\xa0// Loop uma vez para cada registro\n\xa0\xa0\xa0\xa0RELATE MANY([Empresas]Nome)\xa0// Selecionar os registros relacionados\n\xa0\xa0\xa0\xa0ALERT("Company: "+[Empresas]Nome+Char(13)+"Pessoas na empresa: "\n\xa0\xa0\xa0\xa0+String(Records in selection([Personas]))+Char(13)+\n\xa0\xa0\xa0\xa0"N\xfamero de partes que s\xe3o fornecidas: "+String(Records in selection([Partes])))\n\xa0\xa0\xa0\xa0NEXT RECORD([Empresas])\xa0// Ir ao seguinte registro\n\xa0End for\n'})}),"\n",(0,n.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/pt/commands/old-related-many",children:"OLD RELATED MANY"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/pt/commands/relate-one",children:"RELATE ONE"})]}),"\n",(0,n.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"262"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,n.jsx)(a.td,{})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},354129:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict2286855.fr-d70e4f5dcaaca401891de48e2f80cc18.png"},406443:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/pict2287703.fr-b606aae28294d3c413593928bc5eed2f.png"},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return t}});var o=s(667294);let n={},r=o.createContext(n);function t(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);