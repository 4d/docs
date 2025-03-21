"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69378"],{543097:function(e,A,t){t.r(A),t.d(A,{default:()=>l,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-set-visible","title":"OBJECT SET VISIBLE","description":"OBJECT SET VISIBLE ( { ;} objeto ; visivel* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-visible.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-visible","permalink":"/docs/pt/20-R7/commands/object-set-visible","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-visible.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-visible","title":"OBJECT SET VISIBLE","slug":"/commands/object-set-visible","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET VERTICAL ALIGNMENT","permalink":"/docs/pt/20-R7/commands/object-set-vertical-alignment"},"next":{"title":"Objects (Language)","permalink":"/docs/pt/20-R7/commands/theme/Objects-Language"}}'),n=t("785893"),o=t("250065");let r={id:"object-set-visible",title:"OBJECT SET VISIBLE",slug:"/commands/object-set-visible",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function i(e){let A={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"OBJECT SET VISIBLE"})," ( {* ;} ",(0,n.jsx)(A.em,{children:"objeto"})," ; ",(0,n.jsx)(A.em,{children:"visivel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(A.table,{children:[(0,n.jsx)(A.thead,{children:(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.th,{children:"Par\xe2metro"}),(0,n.jsx)(A.th,{children:"Tipo"}),(0,n.jsx)(A.th,{}),(0,n.jsx)(A.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(A.tbody,{children:[(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"*"}),(0,n.jsx)(A.td,{children:"Operador"}),(0,n.jsx)(A.td,{children:"\u2192"}),(0,n.jsx)(A.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"objeto"}),(0,n.jsx)(A.td,{children:"any"}),(0,n.jsx)(A.td,{children:"\u2192"}),(0,n.jsx)(A.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"visivel"}),(0,n.jsx)(A.td,{children:"Boolean"}),(0,n.jsx)(A.td,{children:"\u2192"}),(0,n.jsx)(A.td,{children:"True para vis\xedvel, False para invis\xedvel"})]})]})]}),"\n",(0,n.jsx)(A.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(A.p,{children:["O comando OBJECT SET VISIBLE mostra ou oculta os objetos especificados por ",(0,n.jsx)(A.em,{children:"objeto"}),"."]}),"\n",(0,n.jsxs)(A.p,{children:["Se passa o par\xe2metro opcional ",(0,n.jsx)(A.em,{children:"*"}),", indica que o par\xe2metro ",(0,n.jsx)(A.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(A.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, \xe9 passada uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto unicamente) ao inv\xe9s de um string.Para mais informa\xe7\xf5es sobre nomes de objetos, consulte a se\xe7\xe3o"]}),"\n",(0,n.jsxs)(A.p,{children:["Se passa ",(0,n.jsx)(A.em,{children:"vis\xedvel"})," igual a ",(0,n.jsx)(A.a,{href:"/docs/pt/20-R7/commands/true",title:"TRUE",children:"TRUE"}),", os objetos s\xe3o mostrados. Se passa ",(0,n.jsx)(A.em,{children:"vis\xedvel"})," igual a ",(0,n.jsx)(A.a,{href:"/docs/pt/20-R7/commands/false",title:"FALSE",children:"FALSE"}),", os objetos s\xe3o ocultados."]}),"\n",(0,n.jsx)(A.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(A.p,{children:"Este \xe9 um formul\xe1rio t\xedpico no ambiente Desenho:"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:t(771609).Z+"",width:"459",height:"236"})}),"\n",(0,n.jsxs)(A.p,{children:["Os objetos na \xe1rea de grupo ",(0,n.jsx)(A.strong,{children:"Informa\xe7\xe3o do empregador"})," cada um tem um nome de objeto que cont\xeam a express\xe3o \u201Cempregador\u201D (incluindo a \xe1rea de grupo). Quando a caixa de sele\xe7\xe3o ",(0,n.jsx)(A.strong,{children:"Empregado atualmente"}),"  est\xe1 selecionada, os objetos devem ser vis\xedveis; quando a caixa n\xe3o est\xe1 selecionada, os objetos devem ser invis\xedveis.",(0,n.jsx)(A.br,{}),"\nEste \xe9 o m\xe9todo de objeto da caixa de sele\xe7\xe3o:"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-4d",children:'\xa0&NBSP;&NBSP;\xa0// M\xe9todo de objeto de Caixa de sele\xe7\xe3o cbEmpregadoAtualmente\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0cbEmpregadoAtualmente:=1\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Ocultar ou mostrar todos os objetos cujo nome contem "emp"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"@emp@";cbEmpregadoAtualmente&NBSP;#&NBSP;0)\n\xa0\xa0// Mas sempre conservar a caixa de sele\xe7\xe3o vis\xedvel\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(cbEmpregadoAtualmente;True)\n\xa0End case\n'})}),"\n",(0,n.jsx)(A.p,{children:"Portanto, em execu\xe7\xe3o, o formul\xe1rio se v\xea dessa maneira:"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:t(932790).Z+"",width:"469",height:"251"})}),"\n",(0,n.jsx)(A.p,{children:"ou:"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:t(662922).Z+"",width:"467",height:"247"})}),"\n",(0,n.jsx)(A.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.a,{href:"/docs/pt/20-R7/commands/object-get-visible",children:"OBJECT Get visible"}),(0,n.jsx)(A.br,{}),"\n",(0,n.jsx)(A.a,{href:"/docs/pt/20-R7/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})]}),"\n",(0,n.jsx)(A.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(A.table,{children:[(0,n.jsx)(A.thead,{children:(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.th,{}),(0,n.jsx)(A.th,{})]})}),(0,n.jsxs)(A.tbody,{children:[(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"N\xfamero do comando"}),(0,n.jsx)(A.td,{children:"603"})]}),(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"Thread-seguro"}),(0,n.jsx)(A.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:A}={...(0,o.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},771609:function(e,A,t){t.d(A,{Z:function(){return s}});let s="data:image/png;base64,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"},932790:function(e,A,t){t.d(A,{Z:function(){return s}});let s="data:image/png;base64,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"},662922:function(e,A,t){t.d(A,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,A,t){t.d(A,{Z:function(){return a},a:function(){return r}});var s=t(667294);let n={},o=s.createContext(n);function r(e){let A=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:A},e.children)}}}]);