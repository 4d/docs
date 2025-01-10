"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49411"],{386435:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/set-printable-margin","title":"SET PRINTABLE MARGIN","description":"SET PRINTABLE MARGIN ( esquerda ; superior ; direita ; inferior )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-printable-margin.md","sourceDirName":"commands-legacy","slug":"/commands/set-printable-margin","permalink":"/docs/pt/commands/set-printable-margin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-printable-margin.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-printable-margin","title":"SET PRINTABLE MARGIN","slug":"/commands/set-printable-margin","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PRINT PREVIEW","permalink":"/docs/pt/commands/set-print-preview"},"next":{"title":"Subtotal","permalink":"/docs/pt/commands/subtotal"}}'),i=n("785893"),d=n("250065");let t={id:"set-printable-margin",title:"SET PRINTABLE MARGIN",slug:"/commands/set-printable-margin",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"SET PRINTABLE MARGIN"})," ( ",(0,i.jsx)(r.em,{children:"esquerda"})," ; ",(0,i.jsx)(r.em,{children:"superior"})," ; ",(0,i.jsx)(r.em,{children:"direita"})," ; ",(0,i.jsx)(r.em,{children:"inferior"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Par\xe2metro"}),(0,i.jsx)(r.th,{children:"Tipo"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"esquerda"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Margem esquerda"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"superior"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Margem superior"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"direita"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Margem direita"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"inferior"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Margem inferior"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(r.p,{children:["O comando SET PRINTABLE MARGIN[#descv]permite atribuir os valores de varias margens de impress\xe3o utilizando os comandos ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," e ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Pode passar um dos seguintes valores nos par\xe2metros ",(0,i.jsx)(r.em,{children:"esquerda"}),", ",(0,i.jsx)(r.em,{children:"superior"}),", ",(0,i.jsx)(r.em,{children:"direita"})," e ",(0,i.jsx)(r.em,{children:"inferior"}),":"]}),"\n",(0,i.jsxs)(r.p,{children:["* 0 = utilizar as margens do papel",(0,i.jsx)(r.br,{}),"\n* -1 = utilizar as margens da impressora",(0,i.jsx)(r.br,{}),"\n* valor > 0 = margem em p\xedxels (recorde que 1 p\xedxel em 72 dpi representa aproximadamente 0.4 mm)"]}),"\n",(0,i.jsxs)(r.p,{children:["Os valores dos par\xe2metros ",(0,i.jsx)(r.em,{children:"direita"})," e ",(0,i.jsx)(r.em,{children:"inferior"})," s\xe3o relativos \xe0s bordas direita e inferior do papel."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Nota"}),": para maior informa\xe7\xe3o sobre gest\xe3o de impress\xe3o e terminologia em 4D, consulte a descri\xe7\xe3o do comando ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Por padr\xe3o, 4D baseia suas impress\xf5es nas margens da impressora. Una vez se executa o comando SET PRINTABLE MARGIN, os par\xe2metros modificados se conservar\xe3o no mesmo processo para toda a sess\xe3o."}),"\n",(0,i.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(r.p,{children:"O exemplo a seguir lhe permite obter o tamanho da margem morta:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:"\xa0SET PRINTABLE MARGIN(-1;-1;-1;-1)\xa0//Define a margem da impressora\n\xa0GET PRINTABLE MARGIN($l;$t;$r;$b)\n\xa0\xa0//$l, $t, $r e $b correspondem \xe0s margens mortas da folha\n"})}),"\n",(0,i.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(r.p,{children:"O exemplo a seguir lhe permite obter o tamanho do papel:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:"\xa0SET PRINTABLE MARGIN(0;0;0;0)\xa0//Define a margem do papel\n\xa0GET PRINTABLE AREA($altura;$largura)\n\xa0\xa0//Para A4: $altura=842 ; $largura=595 p\xedxels\n"})}),"\n",(0,i.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/pt/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/pt/commands/get-printed-height",children:"Get printed height"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"})]}),"\n",(0,i.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"N\xfamero do comando"}),(0,i.jsx)(r.td,{children:"710"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread-seguro"}),(0,i.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return t}});var s=n(667294);let i={},d=s.createContext(i);function t(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);