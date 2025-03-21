"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13421"],{688331:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","description":"LISTBOX SET HEADERS HEIGHT ( { ;} objeto ; altura {; unidade*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-headers-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-headers-height","permalink":"/docs/pt/commands/listbox-set-headers-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-headers-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","slug":"/commands/listbox-set-headers-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/pt/commands/listbox-set-grid-color"},"next":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/pt/commands/listbox-set-hierarchy"}}'),d=s("785893"),r=s("250065");let i={id:"listbox-set-headers-height",title:"LISTBOX SET HEADERS HEIGHT",slug:"/commands/listbox-set-headers-height",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"altura"})," {; ",(0,d.jsx)(n.em,{children:"unidade"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"altura"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Alto da linha"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"unidade"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Unidade de valor de altura: 0 ou se omitido = pixeles, 1 = linhas"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," modifica por programa\xe7\xe3o a altura da linha de cabe\xe7alho do list box designado pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"objeto"})," e ",(0,d.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passado o par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,d.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,d.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,d.jsx)(n.p,{children:"Pode designar indiferentemente o list box ou todo o cabe\xe7alho do list box."}),"\n",(0,d.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(n.em,{children:"altura"})," a altura a definir. Por defeito, se omitido o par\xe2metro unidade, esta altura se expressa em pixeles. Para definir uma unidade diferente, pode passar uma das seguintes constantes (do tema ",(0,d.jsx)(n.em,{children:"List box"}),"), no par\xe2metro ",(0,d.jsx)(n.em,{children:"unidade"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk lines"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"A altura designa um n\xfamero de linhas. 4D calcula a altura de uma linha em fun\xe7\xe3o da fonte."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk pixels"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"A altura \xe9 o n\xfamero de pixels (por padr\xe3o)."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Cabe\xe7alhos devem respeitar a altura m\xednima estabelecida pelo sistema. Esta altura \xe9 de 24 pixels em Windows e 17 pixels em Mac OS. Se quiser passar um valor menor no parametro ",(0,d.jsx)(n.em,{children:"altura"}),", a altura m\xednima \xe9 aplicada."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": para obter mais informa\xe7\xe3o sobre o c\xe1lculo das alturas de linhas, consulte o manual de ",(0,d.jsx)(n.em,{children:"Desenho"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-headers-height",children:"LISTBOX Get headers height"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1143"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);