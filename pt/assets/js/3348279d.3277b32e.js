"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94802"],{601764:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-set-scrollbar","title":"OBJECT SET SCROLLBAR","description":"OBJECT SET SCROLLBAR ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-scrollbar","permalink":"/docs/pt/commands/object-set-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-scrollbar","title":"OBJECT SET SCROLLBAR","slug":"/commands/object-set-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/pt/commands/object-set-scroll-position"},"next":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/pt/commands/object-set-shortcut"}}'),o=s("785893"),t=s("250065");let d={id:"object-set-scrollbar",title:"OBJECT SET SCROLLBAR",slug:"/commands/object-set-scrollbar",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT SET SCROLLBAR"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"horizontal"})," ; ",(0,o.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"horizontal"}),(0,o.jsx)(n.td,{children:"Boolean, Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"True = exibir, False = esconder"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vertical"}),(0,o.jsx)(n.td,{children:"Boolean, Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"True = exibir, False = esconder"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando OBJECT SET SCROLLBAR lhe permite mostrar ou ocultar as barras de rolagem horizontal ou vertical no objeto designado pelos par\xe2metros ",(0,o.jsx)(n.em,{children:"objeto"})," e ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, \xe9 passada uma refer\xeancia de uma vari\xe1vel ao inv\xe9s de uma cadeia. Para mais informa\xe7\xf5es sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,o.jsx)(n.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Passe nos par\xe2metros ",(0,o.jsx)(n.em,{children:"horizontal"})," e ",(0,o.jsx)(n.em,{children:"vertical"})," os valores booleanos indicando se as barras de rolagem correspondentes devem ser mostrados. Pode passar valores booleanos (True=mostrado, False=oculto), ou valores num\xe9ricos (0=oculto, 1=mostrado, 2=modo autom\xe1tico). O uso de valores num\xe9ricos lhe d\xe1 acesso ao modo autom\xe1tico, onde s\xf3 s\xe3o mostradas as barras de deslocamento quando for necess\xe1rio."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Objetos com barras de deslocamento"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Ocultar barra de deslocamento"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Mostrar barra de deslocamento"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Modo autom\xe1tico"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Campos e vari\xe1vel objeto texto"}),(0,o.jsx)(n.td,{children:"False ou 0"}),(0,o.jsx)(n.td,{children:"True ou 1"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.em,{children:"n\xe3o dispon\xedvel"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Campos e vari\xe1vel objeto texto"}),(0,o.jsx)(n.td,{children:"False ou 0"}),(0,o.jsx)(n.td,{children:"True ou 1"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"List boxes"}),(0,o.jsx)(n.td,{children:"False ou 0"}),(0,o.jsx)(n.td,{children:"True ou 1"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Listas hier\xe1rquicas"}),(0,o.jsx)(n.td,{children:"False ou 0"}),(0,o.jsx)(n.td,{children:"True ou 1"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Sub formul\xe1rios"}),(0,o.jsx)(n.td,{children:"False ou 0"}),(0,o.jsx)(n.td,{children:"True ou 1"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.em,{children:"n\xe3o dispon\xedvel"})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Por padr\xe3o, se mostram as barras de deslocamento."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," para obter mais informa\xe7\xe3o sobre o modo autom\xe1tico, consulte ",(0,o.jsx)(n.em,{children:"Barra de rolagem"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"843"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let o={},t=r.createContext(o);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);