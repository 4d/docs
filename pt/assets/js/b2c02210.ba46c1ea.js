"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97765"],{15410:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/get-printable-area","title":"GET PRINTABLE AREA","description":"GET PRINTABLE AREA ( altura {; largura} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-printable-area.md","sourceDirName":"commands-legacy","slug":"/commands/get-printable-area","permalink":"/docs/pt/20-R7/commands/get-printable-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printable-area.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-printable-area","title":"GET PRINTABLE AREA","slug":"/commands/get-printable-area","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get print preview","permalink":"/docs/pt/20-R7/commands/get-print-preview"},"next":{"title":"GET PRINTABLE MARGIN","permalink":"/docs/pt/20-R7/commands/get-printable-margin"}}'),t=r("785893"),s=r("250065");let d={id:"get-printable-area",title:"GET PRINTABLE AREA",slug:"/commands/get-printable-area",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET PRINTABLE AREA"})," ( ",(0,t.jsx)(n.em,{children:"altura"})," {; ",(0,t.jsx)(n.em,{children:"largura"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"altura"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Altura da \xe1rea de impress\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"largura"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Largura da \xe1rea de impress\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando GET PRINTABLE AREA devolve o tamanho em p\xedxels da \xe1rea de impress\xe3o nos par\xe2metros ",(0,t.jsx)(n.em,{children:"altura"})," e ",(0,t.jsx)(n.em,{children:"largura"})," ou tamanho. Este tamanho depende dos par\xe2metros de impress\xe3o atuais, a orienta\xe7\xe3o do papel, etc."]}),"\n",(0,t.jsx)(n.p,{children:"O tamanho devolvido n\xe3o varia de uma p\xe1gina a outra (depois de um salto de p\xe1gina, por exemplo)."}),"\n",(0,t.jsxs)(n.p,{children:["Associado ao comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-printed-height",children:"Get printed height"}),", este comando \xe9 \xfatil para conhecer o n\xfamero de p\xedxels dispon\xedveis para a impress\xe3o ou para centrar um objeto na p\xe1gina."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," para maior informa\xe7\xe3o sobre gest\xe3o de impress\xe3o e terminologia em 4D, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Para saber o tamanho total da p\xe1gina, pode:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["adicionar as margens oferecidas pelo comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"})," aos valores devolvidos por este comando."]}),"\n",(0,t.jsx)(n.li,{children:"ou utilizar a seguinte sintaxe:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET PRINTABLE MARGIN(0;0;0;0)\xa0// Definir a margem do papel\n\xa0GET PRINTABLE AREA(hPapel;wPapel)\xa0//Tamanho do papel\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/print-form",children:"Print form"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"703"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var a=r(667294);let t={},s=a.createContext(t);function d(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);