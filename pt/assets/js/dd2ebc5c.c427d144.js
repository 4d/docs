"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54378"],{881239:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-get-grid-colors","title":"LISTBOX GET GRID COLORS","description":"LISTBOX GET GRID COLORS ( { ;} objeto ; corH ; corV* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-grid-colors.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-grid-colors","permalink":"/docs/pt/commands/listbox-get-grid-colors","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-grid-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-grid-colors","title":"LISTBOX GET GRID COLORS","slug":"/commands/listbox-get-grid-colors","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET GRID","permalink":"/docs/pt/commands/listbox-get-grid"},"next":{"title":"LISTBOX Get headers height","permalink":"/docs/pt/commands/listbox-get-headers-height"}}'),s=r("785893"),t=r("250065");let d={id:"listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",slug:"/commands/listbox-get-grid-colors",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX GET GRID COLORS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"corH"})," ; ",(0,s.jsx)(n.em,{children:"corV"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"corH"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de cor RGB para as linhas horizontais"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"corV"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de cor RGB para as linhas verticais"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"LISTBOX GET GRID COLORS"})," devolve a cor das linhas horizontais e verticais que eles comp\xf5em a grade do objeto list box designado pelo objeto de par\xe2metros ",(0,s.jsx)(n.em,{children:"objeto"})," e ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passado o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"corH"})," e ",(0,s.jsx)(n.em,{children:"corV"}),", o comando devolve os valores das cores RGB. O formato de cor depende do tipo de par\xe2metro que passou em ",(0,s.jsx)(n.em,{children:"hCor e"})," ",(0,s.jsx)(n.em,{children:"vCor"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Se passar um texto, a cor se expressar\xe1 como um texto CSS (formato "#rrggbb")'}),"\n",(0,s.jsx)(n.li,{children:"Se passar um inteiro longo, a cor se expressar\xe1 como um inteiro longo de 4 bytes (formato 0x00rrggbb)."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1200"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var o=r(667294);let s={},t=o.createContext(s);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);