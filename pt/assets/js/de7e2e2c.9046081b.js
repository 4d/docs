"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1466"],{390871:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/get-printed-height","title":"Get printed height","description":"Get printed height  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-printed-height.md","sourceDirName":"commands-legacy","slug":"/commands/get-printed-height","permalink":"/docs/pt/commands/get-printed-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printed-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-printed-height","title":"Get printed height","slug":"/commands/get-printed-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PRINTABLE MARGIN","permalink":"/docs/pt/commands/get-printable-margin"},"next":{"title":"Is in print preview","permalink":"/docs/pt/commands/is-in-print-preview"}}'),i=t("785893"),s=t("250065");let d={id:"get-printed-height",title:"Get printed height",slug:"/commands/get-printed-height",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Get printed height"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Posi\xe7\xe3o do marcador"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando Get printed height devolve a altura global (em p\xedxels) da se\xe7\xe3o impressa pelo comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["O valor devolvido estar\xe1 entre 0 (a borda superior da p\xe1gina) e a altura total devolvida pelo comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/get-printable-area",children:"GET PRINTABLE AREA"})," (o tamanho m\xe1ximo da \xe1rea de impress\xe3o)."]}),"\n",(0,i.jsxs)(n.p,{children:["Se imprime uma nova se\xe7\xe3o utilizando o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/print-form",children:"Print form"})," , a altura da nova se\xe7\xe3o se adiciona a este valor. Se a \xe1rea de impress\xe3o dispon\xedvel for insuficiente para conter esta se\xe7\xe3o, \xe9 gerado uma nova p\xe1gina e o valor devolvido \xe9 0."]}),"\n",(0,i.jsxs)(n.p,{children:["As margens de impress\xe3o direita e esquerda n\xe3o influem no valor devolvido, diferente das margens inferior e superior (as quais podem ser definidas utilizando o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})," )."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," para maior informa\xe7\xe3o sobre gest\xe3o de impress\xe3o e terminologia em 4D, consulte a descri\xe7\xe3o do comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/commands/get-printable-area",children:"GET PRINTABLE AREA"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})]}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"702"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);