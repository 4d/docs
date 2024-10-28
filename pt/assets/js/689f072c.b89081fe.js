"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83166],{328930:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var d=a(474848),r=a(28453);const n={id:"old",title:"Old",slug:"/commands/old",displayed_sidebar:"docs"},s=void 0,t={id:"commands-legacy/old",title:"Old",description:"Old ( campo ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/old.md",sourceDirName:"commands-legacy",slug:"/commands/old",permalink:"/docs/pt/commands/old",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fold.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"old",title:"Old",slug:"/commands/old",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"MODIFY RECORD",permalink:"/docs/pt/commands/modify-record"},next:{title:"REJECT",permalink:"/docs/pt/commands/reject"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Old"})," ( ",(0,d.jsx)(o.em,{children:"campo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"campo"}),(0,d.jsx)(o.td,{children:"Field"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Campo ao qual devolver o valor anterior"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Resultado"}),(0,d.jsx)(o.td,{children:"Expression"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Valor original do campo"})]})]})]}),"\n",(0,d.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["O comando Old devolve o valor armazenado em ",(0,d.jsx)(o.em,{children:"campo"})," antes de que se tenha atribu\xeddo um valor por programa\xe7\xe3o ou modificado durante a entrada de dados."]}),"\n",(0,d.jsx)(o.p,{children:"Cada vez que mudar o registro atual para uma tabela, 4D cria e mant\xe9m em mem\xf3ria um duplicado da \u201cimagem\u201d do novo registro atual no momento em que \xe9 carregado na mem\xf3ria (por raz\xf5es de otimiza\xe7\xe3o, 4D faz caso omisso de campo de tipo Texto, Imagem e BLOB.) Quando modificar um registro, trabalha com a imagem atual do registro, n\xe3o com seu duplicado. Esta imagem \xe9 apagada quando mudar novamente o registro atual."}),"\n",(0,d.jsxs)(o.p,{children:["Old devolve o valor da imagem duplicada. Em outras palavras, para um registro existente, devolve ol valor do campo tal como est\xe1 guardado no disco. Se um registro \xe9 novo, Old devolve o valor vazio por padr\xe3o de acordo ao tipo de ",(0,d.jsx)(o.em,{children:"campo"}),". Por exemplo, se ",(0,d.jsx)(o.em,{children:"campo"})," \xe9 um campo Alfa, Old devolve uma string vazia. Se ",(0,d.jsx)(o.em,{children:"campo"})," \xe9 de tipo num\xe9rico, Old retorna zero (0), etc."]}),"\n",(0,d.jsxs)(o.p,{children:["Old funciona com ",(0,d.jsx)(o.em,{children:"campo"})," se o campo tiver sido modificado por um m\xe9todo ou pelo usu\xe1rio durante a entrada de dados. Old pode ser aplicada a todos os tipos de campo."]}),"\n",(0,d.jsx)(o.p,{children:"Para restaurar o valor original de um campo, atribua-lhe o valor retornado por Old."}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota"}),": por raz\xf5es t\xe9cnicas, Old n\xe3o pode ser passada como par\xe2metro a outros comandos com campos tipo imagem e BLOB. \xc9 necess\xe1rio passar o valor por uma vari\xe1vel intermedi\xe1ria. Por exemplo:"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0//N\xe3o escreva (causa erro de sintaxe):\n\xa0$tamano :=BLOB size(Old([Tabela]Blob))\xa0//INCORRETO\n\xa0\xa0//Escreva:\n\xa0$antBLOB:=Old([Tabela]Blob)\n\xa0$tamano :=BLOB size($antBLOB)\xa0//CORRETO\n"})}),"\n",(0,d.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"/docs/pt/commands/modified",children:"Modified"})})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>t});var d=a(296540);const r={},n=d.createContext(r);function s(e){const o=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(n.Provider,{value:o},e.children)}}}]);