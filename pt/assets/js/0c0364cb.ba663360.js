"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6930"],{397964:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>a,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/object-is-styled-text","title":"OBJECT Is styled text","description":"OBJECT Is styled text ( { ;} objeto* ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-is-styled-text.md","sourceDirName":"commands-legacy","slug":"/commands/object-is-styled-text","permalink":"/docs/pt/commands/object-is-styled-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-is-styled-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-is-styled-text","title":"OBJECT Is styled text","slug":"/commands/object-is-styled-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get visible","permalink":"/docs/pt/commands/object-get-visible"},"next":{"title":"OBJECT MOVE","permalink":"/docs/pt/commands/object-move"}}'),n=s("785893"),d=s("250065");let i={id:"object-is-styled-text",title:"OBJECT Is styled text",slug:"/commands/object-is-styled-text",displayed_sidebar:"docs"},r=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let t={br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"OBJECT Is styled text"})," ( {* ;} ",(0,n.jsx)(t.em,{children:"objeto"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe2metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"*"}),(0,n.jsx)(t.td,{children:"Operador"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objeto"}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsxs)(t.td,{children:["Nome de objeto (se especificado *) ou",(0,n.jsx)(t.br,{}),"Campo ou vari\xe1vel (se omitido *)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resultado"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"True se o objeto \xe9 um texto multi estilo, False em caso contr\xe1rio"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["O comando ",(0,n.jsx)(t.strong,{children:"OBJECT Is styled text"})," devolve ",(0,n.jsx)(t.strong,{children:"True"}),' se a op\xe7\xe3o "Multiestilo" est\xe1 selecionada para o(s) objeto(s) designado(s) pelos par\xe2metros ',(0,n.jsx)(t.em,{children:"objeto"})," e ",(0,n.jsx)(t.em,{children:"*"})," ."]}),"\n",(0,n.jsxs)(t.p,{children:['A op\xe7\xe3o "Multiestilo" permite utilizar \xe1reas de texto enriquecido incluindo varia\xe7\xf5es de estilo individuais. Para obter mais informa\xe7\xe3o, consulte a se\xe7\xe3o ',(0,n.jsx)(t.em,{children:"Multiestilo (\xe1rea Rich text)"})," no manual de ",(0,n.jsx)(t.em,{children:"Desenho"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:['Os objetos multiestilo se podem administrar por programa\xe7\xe3o utilizando os comandos do tema "',(0,n.jsx)(t.em,{children:"Texto multi estilo"}),'":']}),"\n",(0,n.jsxs)(t.p,{children:["Ao passar o par\xe2metro opcional ",(0,n.jsx)(t.em,{children:"*"})," se indica que o par\xe2metro ",(0,n.jsx)(t.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(t.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passa uma referencia de campo ou vari\xe1vel em lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Nota:"})," o comando ",(0,n.jsx)(t.strong,{children:"OBJECT Is styled text"})," devolve ",(0,n.jsx)(t.strong,{children:"True"})," quando se aplica a uma \xe1rea 4D Write Pro."]}),"\n",(0,n.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:'Um formul\xe1rio cont\xe9m um campo representado por dois objetos diferentes, um dos objetos tem a propriedade "Multi-estilo" marcada, e o outro n\xe3o. Voc\xea pode escrever:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$Style:=OBJECT Is styled text(*;"Styled_text")\n\xa0\xa0// devolve True ( se a op\xe7\xe3o "Multi-estilo" est\xe1 selecionada)\n\xa0\n\xa0$Style:=OBJECT Is styled text(*;"Plain_text")\n\xa0\xa0// devolve False (se a op\xe7\xe3o "Multi-estilo" n\xe3o est\xe1 selecionada)\n'})}),"\n",(0,n.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Texto multi estilo"})}),"\n",(0,n.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"N\xfamero do comando"}),(0,n.jsx)(t.td,{children:"1261"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Thread-seguro"}),(0,n.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return i}});var o=s(667294);let n={},d=o.createContext(n);function i(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);