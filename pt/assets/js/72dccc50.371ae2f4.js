"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44558],{802568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"delete-string",title:"Delete string",slug:"/commands/delete-string",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/delete-string",title:"Delete string",description:"Delete string ( fonte ; posi\xe7ao ; numCaracteres ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-string.md",sourceDirName:"commands-legacy",slug:"/commands/delete-string",permalink:"/docs/pt/commands/delete-string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"delete-string",title:"Delete string",slug:"/commands/delete-string",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Convert to text",permalink:"/docs/pt/commands/convert-to-text"},next:{title:"GET TEXT KEYWORDS",permalink:"/docs/pt/commands/get-text-keywords"}},o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Delete string"})," ( ",(0,s.jsx)(n.em,{children:"fonte"})," ; ",(0,s.jsx)(n.em,{children:"posi\xe7ao"})," ; ",(0,s.jsx)(n.em,{children:"numCaracteres"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fonte"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Cadeia da qual vai apagar caracteres"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"posi\xe7ao"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Primeiro caractere a apagar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numCaracteres"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de caracteres a apagar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Cadeia resultante"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Delete string apaga ",(0,s.jsx)(n.em,{children:"numCaracteres"})," de ",(0,s.jsx)(n.em,{children:"fonte"}),", a partir de ",(0,s.jsx)(n.em,{children:"posi\xe7ao"}),", e devolve a cadeia resultante."]}),"\n",(0,s.jsxs)(n.p,{children:["Delete string devolve a mesma cadeia que ",(0,s.jsx)(n.em,{children:"fonte"})," quando:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"fonte"})," for uma cadeia vazia"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"posi\xe7ao"})," for maior que o comprimento de ",(0,s.jsx)(n.em,{children:"fonte"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"numCaracteres"})," for igual a zero (0)\nSe ",(0,s.jsx)(n.em,{children:"posi\xe7ao"})," for inferior a um, os caracteres s\xe3o apagados a partir do in\xedcio da cadeia."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"posi\xe7ao"})," mais ",(0,s.jsx)(n.em,{children:"numCaracteres"})," for igual ou maior que o comprimento de fonte, os caracteres s\xe3o apagados a partir de ",(0,s.jsx)(n.em,{children:"posi\xe7ao"})," at\xe9 o final de ",(0,s.jsx)(n.em,{children:"fonte"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["O exemplo abaixo ilustra o uso de Delete string. Os resultados s\xe3o atribu\xeddos \xe0 vari\xe1vel ",(0,s.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Delete string("Lamborghini";6;6)\xa0// vtResult obtiene "Lambo"\n\xa0vtResult:=Delete string("Indentation";6;2)\xa0// vtResult obt\xe9m "Indention"\n\xa0vtResult:=Delete string(var;3;32000)\xa0// vtResult \xe9 igual aos dois primeiros caracteres de var\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/change-string",children:"Change string"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/insert-string",children:"Insert string"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/replace-string",children:"Replace string"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);