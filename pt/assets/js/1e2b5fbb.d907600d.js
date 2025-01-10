"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97833"],{330537:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/dec","title":"Dec","description":"Dec ( numero ) : Real","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dec.md","sourceDirName":"commands-legacy","slug":"/commands/dec","permalink":"/docs/pt/commands/dec","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdec.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dec","title":"Dec","slug":"/commands/dec","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cos","permalink":"/docs/pt/commands/cos"},"next":{"title":"Euro converter","permalink":"/docs/pt/commands/euro-converter"}}'),d=r("785893"),s=r("250065");let c={id:"dec",title:"Dec",slug:"/commands/dec",displayed_sidebar:"docs"},o=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Dec"})," ( ",(0,d.jsx)(n.em,{children:"numero"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numero"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero cuja parte decimal \xe9 retornada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Parte decimal do n\xfamero"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["Dec retorna a parte decimal de ",(0,d.jsx)(n.em,{children:"numero"}),". O valor retornado \xe9 sempre positivo ou zero."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["O exemplo a seguir utiliza um valor monet\xe1rio expresso como um n\xfamero real, e extrai a parte de d\xf3lares e a parte de centavos. Se vrQuantidade \xe9 7,31, logo ",(0,d.jsx)(n.em,{children:"vlDolares"})," vale 7 e ",(0,d.jsx)(n.em,{children:"vlCents"})," 31:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0vlDolares:=Int(vrQuantidade)\xa0// Obter os d\xf3lares\n\xa0vlCents:=Dec(vrQuantidade)*100\xa0// Obter a parte decimal\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/int",children:"Int"})}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var t=r(667294);let d={},s=t.createContext(d);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);