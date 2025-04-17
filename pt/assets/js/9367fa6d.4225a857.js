"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50389"],{241589:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-pointer","title":"Get pointer","description":"Get pointer ( nomeVar ) : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/get-pointer","permalink":"/docs/pt/20-R8/commands/get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-pointer","title":"Get pointer","slug":"/commands/get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD","permalink":"/docs/pt/20-R8/commands/execute-method"},"next":{"title":"INVOKE ACTION","permalink":"/docs/pt/20-R8/commands/invoke-action"}}'),s=r("785893"),o=r("250065");let i={id:"get-pointer",title:"Get pointer",slug:"/commands/get-pointer",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get pointer"})," ( ",(0,s.jsx)(n.em,{children:"nomeVar"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeVar"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome da vari\xe1vel processo ou interprocesso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Ponteiro a vari\xe1vel processo ou interprocesso"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"Get pointer"})," devolve um ponteiro at\xe9 uma vari\xe1vel processo ou interprocesso cujo nome se passa em ",(0,s.jsx)(n.em,{children:"nomVar"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Para levar um ponteiro at\xe9 um campo, utilize ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/field",children:"Field"}),". Para levar um ponteiro at\xe9 uma tabela, utilize ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/table",children:"Table"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," pode passar express\xf5es como, por exemplo, ",(0,s.jsx)(n.em,{children:'NomArr+"{3}"'}),", assim como elementos de array 2D ",(0,s.jsx)(n.em,{children:'(NomArr+"{3}{5}")'})," para ",(0,s.jsx)(n.strong,{children:"Get pointer"}),".",(0,s.jsx)(n.br,{}),"\nEntretanto, n\xe3o pode passar elementos de vari\xe1vel ",(0,s.jsx)(n.em,{children:'(NomArr+"{miVar}")'}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Em um formul\xe1rio, voc\xea constr\xf3i uma matriz de 5 x 10 de vari\xe1veis edit\xe1veis chamadas v1, v2... v50. Para inicializar todas estas vari\xe1veis, voc\xea escreve:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0For($vlVar;1;50)\n\xa0\xa0\xa0\xa0$vpVar:=Get pointer("v"+String($vlVar))\n\xa0\xa0\xa0\xa0$vpVar->:=""\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Usando ponteiros para elementos de arrays bi-dimensionais:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$pt:=Get pointer("a{1}{2}")\n\xa0\xa0//$pt=->a{1}{2}\n\xa0$pt2:=Get pointer("atCities"+"{2}{6}")\n\xa0\xa0//$pt2=->atCities{2}{6}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/table",children:"Table"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"304"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);