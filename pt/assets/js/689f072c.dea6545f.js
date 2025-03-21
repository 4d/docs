"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33197"],{808060:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>s,metadata:()=>d,assets:()=>i,toc:()=>l,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/old","title":"Old","description":"Old ( campo ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/old.md","sourceDirName":"commands-legacy","slug":"/commands/old","permalink":"/docs/pt/20-R7/commands/old","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fold.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"old","title":"Old","slug":"/commands/old","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MODIFY RECORD","permalink":"/docs/pt/20-R7/commands/modify-record"},"next":{"title":"REJECT","permalink":"/docs/pt/20-R7/commands/reject"}}'),n=a("785893"),r=a("250065");let s={id:"old",title:"Old",slug:"/commands/old",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Old"})," ( ",(0,n.jsx)(o.em,{children:"campo"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"campo"}),(0,n.jsx)(o.td,{children:"Field"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Campo ao qual devolver o valor anterior"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"any"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Valor original do campo"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando Old devolve o valor armazenado em ",(0,n.jsx)(o.em,{children:"campo"})," antes de que se tenha atribu\xeddo um valor por programa\xe7\xe3o ou modificado durante a entrada de dados."]}),"\n",(0,n.jsx)(o.p,{children:"Cada vez que mudar o registro atual para uma tabela, 4D cria e mant\xe9m em mem\xf3ria um duplicado da \u201Cimagem\u201D do novo registro atual no momento em que \xe9 carregado na mem\xf3ria (por raz\xf5es de otimiza\xe7\xe3o, 4D faz caso omisso de campo de tipo Texto, Imagem e BLOB.) Quando modificar um registro, trabalha com a imagem atual do registro, n\xe3o com seu duplicado. Esta imagem \xe9 apagada quando mudar novamente o registro atual."}),"\n",(0,n.jsxs)(o.p,{children:["Old devolve o valor da imagem duplicada. Em outras palavras, para um registro existente, devolve ol valor do campo tal como est\xe1 guardado no disco. Se um registro \xe9 novo, Old devolve o valor vazio por padr\xe3o de acordo ao tipo de ",(0,n.jsx)(o.em,{children:"campo"}),". Por exemplo, se ",(0,n.jsx)(o.em,{children:"campo"})," \xe9 um campo Alfa, Old devolve uma string vazia. Se ",(0,n.jsx)(o.em,{children:"campo"})," \xe9 de tipo num\xe9rico, Old retorna zero (0), etc."]}),"\n",(0,n.jsxs)(o.p,{children:["Old funciona com ",(0,n.jsx)(o.em,{children:"campo"})," se o campo tiver sido modificado por um m\xe9todo ou pelo usu\xe1rio durante a entrada de dados. Old pode ser aplicada a todos os tipos de campo."]}),"\n",(0,n.jsx)(o.p,{children:"Para restaurar o valor original de um campo, atribua-lhe o valor retornado por Old."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": por raz\xf5es t\xe9cnicas, Old n\xe3o pode ser passada como par\xe2metro a outros comandos com campos tipo imagem e BLOB. \xc9 necess\xe1rio passar o valor por uma vari\xe1vel intermedi\xe1ria. Por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0//N\xe3o escreva (causa erro de sintaxe):\n\xa0$tamano :=BLOB size(Old([Tabela]Blob))\xa0//INCORRETO\n\xa0\xa0//Escreva:\n\xa0$antBLOB:=Old([Tabela]Blob)\n\xa0$tamano :=BLOB size($antBLOB)\xa0//CORRETO\n"})}),"\n",(0,n.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modified",children:"Modified"})}),"\n",(0,n.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"35"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return s}});var d=a(667294);let n={},r=d.createContext(n);function s(e){let o=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),d.createElement(r.Provider,{value:o},e.children)}}}]);