"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9888"],{941009:function(e,n,o){o.r(n),o.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-set-text-orientation","title":"OBJECT SET TEXT ORIENTATION","description":"OBJECT SET TEXT ORIENTATION ( { ;} objeto ; orientacao* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-text-orientation.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-text-orientation","permalink":"/docs/pt/commands/object-set-text-orientation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-text-orientation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-text-orientation","title":"OBJECT SET TEXT ORIENTATION","slug":"/commands/object-set-text-orientation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SUBFORM CONTAINER VALUE","permalink":"/docs/pt/commands/object-set-subform-container-value"},"next":{"title":"OBJECT SET THREE STATES CHECKBOX","permalink":"/docs/pt/commands/object-set-three-states-checkbox"}}'),r=o("785893"),s=o("250065");let i={id:"object-set-text-orientation",title:"OBJECT SET TEXT ORIENTATION",slug:"/commands/object-set-text-orientation",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"orientacao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,r.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orientacao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de orienta\xe7\xe3o do objeto"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," modifica a orienta\xe7\xe3o do conte\xfado do objeto ou dos objetos designados pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"})," para o processo atual."]}),"\n",(0,r.jsxs)(n.p,{children:['A propriedade "Orienta\xe7\xe3o", dispon\xedvel no editor de formul\xe1rios, realiza rota\xe7\xf5es de \xe1reas de texto de maneira permanente em seus formul\xe1rios. A diferen\xe7a desta propriedade, o comando ',(0,r.jsx)(n.strong,{children:"OBJECT SET TEXT ORIENTATION"})," aplica a rota\xe7\xe3o ao conte\xfado do objeto, mas n\xe3o ao objeto em si. Para obter mais informa\xe7\xe3o, consulte o Manual de ",(0,r.jsx)(n.em,{children:"Desenho"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro objeto \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel em lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente).",(0,r.jsx)(n.br,{}),"\nS\xf3 os textos est\xe1ticos, assim como as vari\xe1veis e campos n\xe3o edit\xe1veis podem girar. Se aplicar este comando a um objeto que n\xe3o seja compat\xedvel com a orienta\xe7\xe3o de texto, o comando n\xe3o faz nada."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"orientacao"}),', passe a orienta\xe7\xe3o absoluta que deseja atribuir ao objeto. Deve utilizar uma das seguintes constantes, do tema "',(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Orientation 0\xb0"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Sem rota\xe7\xe3o (valor por padr\xe3o)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Orientation 180\xb0"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"180"}),(0,r.jsx)(n.td,{children:"Orienta\xe7\xe3o do texto a 180\xb0 no sentido hor\xe1rio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Orientation 90\xb0 left"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"270"}),(0,r.jsx)(n.td,{children:"Orienta\xe7\xe3o do texto a 90\xb0 no sentido anti hor\xe1rio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Orientation 90\xb0 right"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"90"}),(0,r.jsx)(n.td,{children:"Orienta\xe7\xe3o do texto a 90\xb0 no sentido hor\xe1rio"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": s\xf3 s\xe3o admitidos os \xe2ngulos correspondentes a estes valores. Se passar qualquer outro valor, ser\xe1 ignorado."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Deseja aplicar uma orienta\xe7\xe3o de 270\xb0 a uma vari\xe1vel em seu formul\xe1rio:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET ENTERABLE(*;"myVar";False)\n\xa0\xa0// Obrigat\xf3rio se a vari\xe1vel \xe9 edit\xe1vel\n\xa0OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90\xb0 left)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-get-text-orientation",children:"OBJECT Get text orientation"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1284"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var t=o(667294);let r={},s=t.createContext(r);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);