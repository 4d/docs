"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38571],{623437:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var s=o(474848),d=o(28453);const t={id:"sax-add-xml-comment",title:"SAX ADD XML COMMENT",slug:"/commands/sax-add-xml-comment",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/sax-add-xml-comment",title:"SAX ADD XML COMMENT",description:"SAX ADD XML COMMENT ( documento ; comentario )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-comment.md",sourceDirName:"commands-legacy",slug:"/commands/sax-add-xml-comment",permalink:"/docs/pt/commands/sax-add-xml-comment",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-comment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sax-add-xml-comment",title:"SAX ADD XML COMMENT",slug:"/commands/sax-add-xml-comment",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAX ADD XML CDATA",permalink:"/docs/pt/commands/sax-add-xml-cdata"},next:{title:"SAX ADD XML DOCTYPE",permalink:"/docs/pt/commands/sax-add-xml-doctype"}},a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX ADD XML COMMENT"})," ( ",(0,s.jsx)(n.em,{children:"documento"})," ; ",(0,s.jsx)(n.em,{children:"comentario"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documento"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comentario"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Coment\xe1rio a ser adicionado"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SAX ADD XML COMMENT adiciona um ",(0,s.jsx)(n.em,{children:"comentario"})," no documento XML referenciado por ",(0,s.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Um coment\xe1rio XML \xe9 um texto cujo conte\xfado n\xe3o ser\xe1 analisado pelo int\xe9rprete XML. Os coment\xe1rios XML devem estar entre os caracteres ."}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"A instru\xe7\xe3o abaixo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vComentario:="Criado por 4D"\n\xa0SAX ADD XML COMMENT($DocRef;vComent\xe1rio)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... escrever\xe1 a seguinte linha no documento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,s.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsx)(n.p,{children:"No caso de um erro, o comando devolve um erro que pode ser interceptado usando um m\xe9todo de gest\xe3o de erros."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/sax-add-xml-doctype",children:"SAX ADD XML DOCTYPE"})})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var s=o(296540);const d={},t=s.createContext(d);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);