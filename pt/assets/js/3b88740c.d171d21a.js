"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25086"],{927096:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-frame","title":"WP Get frame","description":"WP Get frame ( { ;} wpArea {; textBoxID*} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-get-frame.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-frame","permalink":"/docs/pt/WritePro/commands/wp-get-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-frame.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-frame","title":"WP Get frame","slug":"/WritePro/commands/wp-get-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get formulas","permalink":"/docs/pt/WritePro/commands/wp-get-formulas"},"next":{"title":"WP Get header","permalink":"/docs/pt/WritePro/commands/wp-get-header"}}'),o=r("785893"),d=r("250065");let s={id:"wp-get-frame",title:"WP Get frame",slug:"/WritePro/commands/wp-get-frame",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Get frame"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"wpArea"})," {; ",(0,o.jsx)(n.em,{children:"textBoxID"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, wpArea \xe9 um nome de objeto de formul\xe1rio (string). Se omitido, wpArea \xe9 um campo de objeto ou vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wpArea"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto de formul\xe1rio (se * for especificado) ou vari\xe1vel ou campo de objeto 4D Write Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"textBoxID"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"\uD83E\uDC58"}),(0,o.jsx)(n.td,{children:"ID of the text box (only filled if a text box has the focus)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"o Frame onde o cursor est\xe1 atualmente estabelecido"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"WP Get frame"})," devolve o marco no qual se encontra atualmente o cursor na \xe1rea 4D Write Pro ",(0,o.jsx)(n.em,{children:"wpArea"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional *, indica que ",(0,o.jsx)(n.em,{children:"wpArea \xe9"})," um nome de objeto de formul\xe1rio (string). Se n\xe3o passar este par\xe2metro, indica que ",(0,o.jsx)(n.em,{children:"wpArea"})," \xe9 uma vari\xe1vel ou um campo objeto 4D Write Pro."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": Este comando pode ser usado se ",(0,o.jsx)(n.em,{children:"wpArea"})," for associado com um objeto formul\xe1rio (ou seja, \xe9 exibido no formul\xe1rio/p\xe1gina atual)."]}),"\n",(0,o.jsxs)(n.p,{children:["O valor devolvido pode ser comparado com uma das constantes abaixo do tema ",(0,o.jsx)(n.em,{children:"Constantes 4D Write Pro"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk body"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"Body frame da sess\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section default footer"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"10"}),(0,o.jsx)(n.td,{children:"Rodap\xe9 principal da se\xe7\xe3o (dispon\xedvel s\xf3 se n\xe3o houver rodap\xe9 de sub-se\xe7\xe3o ativo)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section default header"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"9"}),(0,o.jsx)(n.td,{children:"Cabe\xe7alho principal da se\xe7\xe3o (dispon\xedvel s\xf3 se n\xe3o houver cabe\xe7alho de subse\xe7\xe3o ativo)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section first footer"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:"Rodap\xe9 da primeira p\xe1gina da se\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section first header"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:"Cabe\xe7alho da primeira p\xe1gina da se\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section left footer"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"6"}),(0,o.jsx)(n.td,{children:"Rodap\xe9 das p\xe1ginas esquerdas da se\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section left header"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"5"}),(0,o.jsxs)(n.td,{children:["Cabe\xe7alho das p\xe1ginas esquerdas da se\xe7\xe3o",(0,o.jsx)(n.br,{})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section right footer"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"8"}),(0,o.jsxs)(n.td,{children:["Rodap\xe9 das p\xe1ginas direitas da se\xe7\xe3o",(0,o.jsx)(n.br,{})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk current section right header"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"7"}),(0,o.jsx)(n.td,{children:"Cabe\xe7alho das p\xe1ginas direitas da se\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk text box"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"11"}),(0,o.jsx)(n.td,{children:"caixa de texto"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Se o cursor estiver no momento em um elemento caixa de texto, a id do elemento da caixa de texto \xe9 devolvida no par\xe2metro textBoxID. Em todos os outros casos, este par\xe2metro se devolve vazio."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser ter certeza de que o usu\xe0rio tenha colocado o cursor em um marco cabe\xe7alho ou rodap\xe9:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $frameGet Integer\n\n$frameGet: :=WP Get frame(*;"WParea")\n\xa0If($frameGet=wk body)|($frameGet=wk text box)\n\xa0\xa0\xa0\xa0ALERT("Please select a footer or a header.")\n\xa0End if\n\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-set-frame",children:"WP SET FRAME"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var t=r(667294);let o={},d=t.createContext(o);function s(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);