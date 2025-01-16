"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41530"],{73822:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/ob-is-defined","title":"OB Is defined","description":"OB Is defined ( objeto {; propriedade} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-is-defined.md","sourceDirName":"commands-legacy","slug":"/commands/ob-is-defined","permalink":"/docs/pt/commands/ob-is-defined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-is-defined.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-is-defined","title":"OB Is defined","slug":"/commands/ob-is-defined","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Instance of","permalink":"/docs/pt/commands/ob-instance-of"},"next":{"title":"OB Is empty","permalink":"/docs/pt/commands/ob-is-empty"}}'),o=d("785893"),i=d("250065");let r={id:"ob-is-defined",title:"OB Is defined",slug:"/commands/ob-is-defined",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OB Is defined"})," ( ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"propriedade"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"Object, Campo Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Objeto estruturado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"propriedade"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se passar = propriedade a verificar, se omitir = verificar o objeto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsxs)(n.td,{children:["Se a propriedade se omite: True se objeto est\xe1 definido, caso contr\xe1rio False.",(0,o.jsx)(n.br,{}),"Se a propriedade passar: True se propriedade est\xe1 definida, caso contr\xe1rio False"]})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando",(0,o.jsx)(n.strong,{children:"OB Is defined"})," devolve ",(0,o.jsx)(n.strong,{children:"True"})," se ",(0,o.jsx)(n.em,{children:"objeto"})," ou ",(0,o.jsx)(n.em,{children:"propriedade"})," se definem e ",(0,o.jsx)(n.strong,{children:"False"})," em caso contr\xe1rio.deve ter sido criado com o comando ",(0,o.jsx)(n.em,{children:"C_OBJECT"})," ou designar um campo objeto 4D.."]}),"\n",(0,o.jsxs)(n.p,{children:["Por padr\xe3o, se omitir o par\xe2metro ",(0,o.jsx)(n.em,{children:"propriedade"}),", o comando comprova que ",(0,o.jsx)(n.em,{children:"objeto"})," esteja definido. Um objeto est\xe1 definido se seu conte\xfado foi inicializado."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": um objeto pode estar definido, por\xe9m vazio. Para saber se um objeto n\xe3o est\xe1 definido ou est\xe1 vazio, utilize o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-is-empty",children:"OB Is empty"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passar o par\xe2metro ",(0,o.jsx)(n.em,{children:"propriedade"}),", o comando comprova se existe esta propriedade em ",(0,o.jsx)(n.em,{children:"objeto"}),". Tenha em conta que o par\xe2metro ",(0,o.jsx)(n.em,{children:"propriedade"})," \xe9 sens\xedvel as mai\xfasculas e min\xfasculas."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Sintaxe provando a inicializa\xe7\xe3o de um objeto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0$def:=OB Is defined($object)\xa0// $def=false since $object n\xe3o est\xe1 incializado\n\xa0\n\xa0OB SET($object;"Name";"Martin")\n\xa0OB REMOVE($object;"Name")\n\xa0$def2:=OB Is defined($object)\xa0// $def2=true j\xe1 que $object est\xe1 vazio {} mas foi inicializado\n'})}),"\n",(0,o.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Prova da exist\xeancia de uma propriedade:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"name";"smith";"age";42)\n\xa0\xa0//...\n\xa0If(OB Is defined($ref;"age"))\n\xa0\xa0//...\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.p,{children:"Esta prova \xe9 equivalente a:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0If(OB Get type($Object;"name")#Is undefined)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/ob-is-empty",children:"OB Is empty"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1231"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return r}});var s=d(667294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);