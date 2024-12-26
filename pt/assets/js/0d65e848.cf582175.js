"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18221"],{423691:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/svg-show-element","title":"SVG SHOW ELEMENT","description":"SVG SHOW ELEMENT ( { ;} objetoImagem ; id {; margem*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/svg-show-element.md","sourceDirName":"commands-legacy","slug":"/commands/svg-show-element","permalink":"/docs/pt/commands/svg-show-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-show-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"svg-show-element","title":"SVG SHOW ELEMENT","slug":"/commands/svg-show-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG SET ATTRIBUTE","permalink":"/docs/pt/commands/svg-set-attribute"},"next":{"title":"Secured Protocol","permalink":"/docs/pt/category/secured-protocol"}}'),s=n("785893"),r=n("250065");let d={id:"svg-show-element",title:"SVG SHOW ELEMENT",slug:"/commands/svg-show-element",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"SVG SHOW ELEMENT"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objetoImagem"})," ; ",(0,s.jsx)(o.em,{children:"id"})," {; ",(0,s.jsx)(o.em,{children:"margem"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado, objetoImagem \xe9 um nome de objeto (string). Se omitido, objetoImagem \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objetoPicture"}),(0,s.jsx)(o.td,{children:"Picture"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se * for especificado) ou vari\xe1vel ou campo (se * for otimido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"id"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Atributo ID do elemento a exibir"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"margem"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Margem de visbilidade (em pixels por padr\xe3o)"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando SVG SHOW ELEMENT move o documento SVG ",(0,s.jsx)(o.em,{children:"objetoImagem"}),' para mostrar o elemento cujo atributo "id" \xe9 especificado pelo par\xe2metro ',(0,s.jsx)(o.em,{children:"id"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objetoImagem"})," \xe9 um nome de objeto (string). Neste caso, o comando \xe9 aplicado a imagem renderizada anexa ao objeto. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objetoImagem"})," \xe9 um campo ou uma vari\xe1vel e se passar uma refer\xeancia de vari\xe1vel (vari\xe1vel objeto unicamente) ou de campo ao inv\xe9s de uma string. Neste caso, o comando se aplica as imagens renderizadas de todos os objetos que utilizam a vari\xe1vel ou o campo (mas n\xe3o a imagem renderizada inicial)."]}),"\n",(0,s.jsxs)(o.p,{children:["O comando move o documento SVG para que todo o objeto, cujos limites est\xe3o definidos por seu ret\xe2ngulo de delimita\xe7\xe3o, seja vis\xedvel. O par\xe2metro ",(0,s.jsx)(o.em,{children:"margem"})," \xe9 utilizado para configurar a amplitude do movimento ao especificar a dist\xe2ncia que deve separar o objeto que \xe9 mostrado desde as bordas do documento. Em outras palavras, o ret\xe2ngulo aumentar\xe1 em ",(0,s.jsx)(o.em,{children:"margem"})," p\xedxels de largura e de altura. Por padr\xe3o, o valor de deslocamento \xe9 de 4 p\xedxeles."]}),"\n",(0,s.jsx)(o.p,{children:'Este comando apenas tem efeito em modo de visualiza\xe7\xe3o "top left" (com barras de rolagem).'}),"\n",(0,s.jsxs)(o.p,{children:["Se este comando n\xe3o for executado no contexto de um formul\xe1rio ou se for passado um ",(0,s.jsx)(o.em,{children:"objetoImagem"})," inv\xe1lido, a vari\xe1vel OK toma o valor 0. Se o comando for executado corretamente, toma o valor 1."]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1108"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return d}});var t=n(667294);let s={},r=t.createContext(s);function d(e){let o=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);