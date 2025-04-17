"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62481"],{167417:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-sheet-options","title":"VP SET SHEET OPTIONS","description":"VP SET SHEET OPTIONS ( vpAreaName Object { ; sheet : Integer}  )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-set-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-sheet-options","permalink":"/docs/pt/ViewPro/commands/vp-set-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-sheet-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-sheet-options","title":"VP SET SHEET OPTIONS"},"sidebar":"docs","previous":{"title":"VP SET SHEET NAME","permalink":"/docs/pt/ViewPro/commands/vp-set-sheet-name"},"next":{"title":"VP SET SHOW PRINT LINES","permalink":"/docs/pt/ViewPro/commands/vp-set-show-print-lines"}}'),t=o("785893"),i=o("250065");let r={id:"vp-set-sheet-options",title:"VP SET SHEET OPTIONS"},a=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET SHEET OPTIONS"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,t.jsx)(n.em,{children:"sheetOptions"})," : Object { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer}  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetOptions"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Op\xe7\xe3o(\xf5es) de folha a definir"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.code,{children:"VP SET SHEET OPTIONS"})," permite definir v\xe1rias op\xe7\xf5es de planilha da \xe1rea ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe o nome da \xe1rea 4D View Pro em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe um objeto que contenha defini\xe7\xf5es para as op\xe7\xf5es a serem definidas no par\xe2metro ",(0,t.jsx)(n.em,{children:"sheetOptions"}),". Para ver a lista completa das op\xe7\xf5es dispon\xedveis, veja par\xe1grafo ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/configuring#sheet-options",children:"Op\xe7\xf5es de folha"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"sheet"}),", pode designar uma planilha espec\xedfica (a contagem come\xe7a em 0). Se omitido, a planilha atual ser\xe1 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Pretende proteger todas as c\xe9lulas exceto o intervalo C5:D10:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Ativar a prote\xe7\xe3o na planilha atual\nvar $options : Object\n  \n$options:=New object\n$options.isProtected:=True\nVP SET SHEET OPTIONS("ViewProArea";$options)\n  \n// marcar as c\xe9lulas C5:D10 como \'unlocked\'\nVP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"\xc9 necess\xe1rio proteger o documento enquanto os usu\xe1rios podem redimensionar linhas e colunas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n// Activate protection\n$options.isProtected:=True\n$options.protectionOptions:=New object\n// Allow user to resize rows\n$options.protectionOptions.allowResizeRows=True;\n// Allow user to resize columns\n$options.protectionOptions.allowResizeColumns=True;\n    \n// Aplicar prote\xe7\xe3o na planilha atual\nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea deseja personalizar as cores das guias da planilha, das linhas congeladas, das linhas de grade, do plano de fundo da sele\xe7\xe3o e da borda da sele\xe7\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n   \n$options:=New object\n// Customize color of Sheet 1 tab\n$options.sheetTabColor:="Black"\n$options.gridline:=New object("color";"Purple")\n$options.selectionBackColor:="rgb(255,128,0,0.4)"\n$options.selectionBorderColor:="Yellow"\n$options.frozenlineColor:="Gold"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;0)\n \n// Customize color of Sheet 2 tab\n$options.sheetTabColor:="red"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;1)\n \n// Customize color of Sheet 3 tab\n$options.sheetTabColor:="blue"\n  \nVP SET SHEET OPTIONS("ViewProArea";$options;2)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Resultados:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(181832).Z+"",width:"880",height:"274"})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Pretende ocultar as linhas da grelha, bem como os cabe\xe7alhos das linhas e das colunas."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n$options.gridline:=New object()\n$options.gridline.showVerticalGridline:=False\n$options.gridline.showHorizontalGridline:=False\n$options.rowHeaderVisible:=False\n$options.colHeaderVisible:=False\n  \nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Resultados:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(395897).Z+"",width:"612",height:"422"})}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/configuring#sheet-options",children:"4D View Pro sheet options"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-sheet-options",children:"VP Get sheet options"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},181832:function(e,n,o){o.d(n,{Z:function(){return s}});let s=o.p+"assets/images/cmd_vpSetSheetOptions1-96730ac48f5cd59db7184fac7e74ffe7.PNG"},395897:function(e,n,o){o.d(n,{Z:function(){return s}});let s=o.p+"assets/images/cmd_vpSetSheetOptions2-596c33f630f32c68dc3da440cbd1349f.PNG"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return r}});var s=o(667294);let t={},i=s.createContext(t);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);