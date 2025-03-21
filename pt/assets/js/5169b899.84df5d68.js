"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59328"],{616901:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","description":"OBJECT GET SCROLL POSITION ( { ;} objeto ; vPosicao {; hPosicao*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-scroll-position.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scroll-position","permalink":"/docs/pt/commands/object-get-scroll-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scroll-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","slug":"/commands/object-get-scroll-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET RGB COLORS","permalink":"/docs/pt/commands/object-get-rgb-colors"},"next":{"title":"OBJECT GET SCROLLBAR","permalink":"/docs/pt/commands/object-get-scrollbar"}}'),t=s("785893"),r=s("250065");let i={id:"object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",slug:"/commands/object-get-scroll-position",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"OBJECT GET SCROLL POSITION"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"vPosicao"})," {; ",(0,t.jsx)(o.em,{children:"hPosicao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se especificar, objeto \xe9 um nome de objeto (string) se omitir, objeto \xe9 uma vari\xe1vel, um campo ou uma tabela."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome de objeto (se * \xe9 especificado) ou vari\xe1vel ou campo ou tabela (se * \xe9 omitido)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"vPosicao"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"N\xfamero da primeira linha exibido ou deslocamento vertical em pixels (imagens)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"hPosicao"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"N\xfamero da primeira coluna exibido ou rolagem horizontal em pixels (imagens)"})]})]})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["OBJECT GET SCROLL POSITION devolve, nos par\xe2metros ",(0,t.jsx)(o.em,{children:"vPosi\xe7\xe3o"})," e ",(0,t.jsx)(o.em,{children:"hPosi\xe7\xe3o"}),", informa\xe7\xe3o relacionada com a posi\xe7\xe3o das barras de rolagem do objeto de formul\xe1rio designado pelos par\xe2metros ",(0,t.jsx)(o.em,{children:"*"})," e ",(0,t.jsx)(o.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Se voc\xea passar o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro objeto \xe9 o nome do objeto do subformul\xe1rio, lista hier\xe1rquica, \xe1rea de rolagem, list box ou tipo imagem (nesse caso, passe uma string no objeto). Se voc\xea n\xe3o passa esse par\xe2metro, voc\xea indica que o par\xe2metro objeto \xe9 uma tabela (formul\xe1rio lista ou subformul\xe1rio de tabela) ou uma vari\xe1vel (ListRef ou lista hier\xe1rquica, imagem ou vari\xe1vel list box ) ou um campo."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota:"})," com objetos tipo subformul\xe1rio, s\xf3 a sintaxe usando um ",(0,t.jsx)(o.em,{children:"*"})," \xe9 compat\xedvel."]}),"\n",(0,t.jsxs)(o.p,{children:["Se ",(0,t.jsx)(o.em,{children:"objeto"})," designa um objeto de tipo lista (subformul\xe1rio, formul\xe1rio lista, lista hier\xe1rquica, \xe1rea de rolagem ou list box), vPosicao, retorna o n\xfamero da primeira linha exibida no objeto. hPosicao (list box apenas) retorna o n\xfamero da primeira coluna que \xe9 completamente vis\xedvel na parte esquerda da list box. Com outros tipos de objetos, esse par\xe2metro retorna 0."]}),"\n",(0,t.jsxs)(o.p,{children:["Se ",(0,t.jsx)(o.em,{children:"objeto"})," designa uma imagem (vari\xe1vel ou campo), ",(0,t.jsx)(o.em,{children:"vPosi\xe7\xe3o"})," retorna o movimento vertical e ",(0,t.jsx)(o.em,{children:"hPosition"})," o movimento horizontal da imagem. Esses valores s\xe3o expressos em pixels com respeito a origem da imagem no sistema de coordenadas local."]}),"\n",(0,t.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})}),"\n",(0,t.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1114"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return a},a:function(){return i}});var n=s(667294);let t={},r=n.createContext(t);function i(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);