"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41507"],{614619:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-selection-range","title":"WP Selection range","description":"WP Selection range ( { ;} wpArea* ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-selection-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-selection-range","permalink":"/docs/pt/WritePro/commands/wp-selection-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-selection-range.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-selection-range","title":"WP Selection range","slug":"/WritePro/commands/wp-selection-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SELECT","permalink":"/docs/pt/WritePro/commands/wp-select"},"next":{"title":"WP SET ATTRIBUTES","permalink":"/docs/pt/WritePro/commands/wp-set-attributes"}}'),t=n("785893"),a=n("250065");let i={id:"wp-selection-range",title:"WP Selection range",slug:"/WritePro/commands/wp-selection-range",displayed_sidebar:"docs"},s=void 0,d={},c=[{value:"Compatibilidade",id:"compatibilidade",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Selection range"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"wpArea"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Operador"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Se especificado, wpArea \xe9 um nome de objeto de formul\xe1rio (string). Se omitido, wpArea \xe9 um campo de objeto ou vari\xe1vel"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"wpArea"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nome de objeto de formul\xe1rio (se * \xe9 especificado) ou vari\xe1vel de objeto 4D Write Pro ou campo (se * for omitido)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Faixa de objeto"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(r.h2,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Selection range"})," era chamada ",(0,t.jsx)(r.strong,{children:"WP Get selection"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeada para ter mais claridade."]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O novo comando ",(0,t.jsx)(r.strong,{children:"WP Selection range"})," devolve um novo objeto de faixa de texto (faixaObj) baseado no texto selecionado atualmente na \xe1rea ",(0,t.jsx)(r.em,{children:"wpArea"})," de 4D Write Pro."]}),"\n",(0,t.jsxs)(r.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(r.em,{children:"*"}),", indica que ",(0,t.jsx)(r.em,{children:"wpArea"})," \xe9 um nome de objeto de formul\xe1rio (string). Se n\xe3o passar este par\xe2metro, indica que ",(0,t.jsx)(r.em,{children:"wpArea"})," \xe9 uma vari\xe1vel ou campo objeto 4D Write Pro. Se n\xe3o for passada uma \xe1rea 4D Write Pro no par\xe2metro ",(0,t.jsx)(r.em,{children:"wpArea"}),", se devolve uma faixaObj vazio."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota"}),": este comando s\xf3 pode ser utilizada se ",(0,t.jsx)(r.em,{children:"wpArea"})," estiver associada com um objeto de formul\xe1rio (ou seja, \xe9 mostrada no formul\xe1rio)."]}),"\n",(0,t.jsxs)(r.p,{children:["Se for selecionada uma imagem ancorada (imagem em uma localiza\xe7\xe3o fixa) em ",(0,t.jsx)(r.em,{children:"wpArea"}),", ",(0,t.jsx)(r.strong,{children:"WP Selection range"})," devolve um objeto de refer\xeancia de imagem e n\xe3o um objeto de faixa (para saber mais, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-add-picture",children:"WP Add picture"}),". Do contr\xe1rio, ",(0,t.jsx)(r.strong,{children:"WP Selection range"})," devolve um novo objRange. Para saber mais, consulte ",(0,t.jsx)(r.em,{children:"Comandos de sele\xe7\xe3o de faixa"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"Se quiser obter o texto selecionado de uma \xe1rea 4D Write Pro:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n'})}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var o=n(667294);let t={},a=o.createContext(t);function i(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);