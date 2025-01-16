"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36597"],{902259:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-horizontal-alignment","title":"OBJECT SET HORIZONTAL ALIGNMENT","description":"OBJECT SET HORIZONTAL ALIGNMENT ( { ;} objeto ; alinhamento* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-horizontal-alignment.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-horizontal-alignment","permalink":"/docs/pt/20-R7/commands/object-set-horizontal-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-horizontal-alignment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-horizontal-alignment","title":"OBJECT SET HORIZONTAL ALIGNMENT","slug":"/commands/object-set-horizontal-alignment","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET HELP TIP","permalink":"/docs/pt/20-R7/commands/object-set-help-tip"},"next":{"title":"OBJECT SET INDICATOR TYPE","permalink":"/docs/pt/20-R7/commands/object-set-indicator-type"}}'),i=t("785893"),o=t("250065");let r={id:"object-set-horizontal-alignment",title:"OBJECT SET HORIZONTAL ALIGNMENT",slug:"/commands/object-set-horizontal-alignment",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET HORIZONTAL ALIGNMENT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"alinhamento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"alinhamento"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"C\xf3digo de alinhamento"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando ",(0,i.jsx)(n.strong,{children:"OBJECT SET HORIZONTAL ALIGNMENT"})," permite determinar o tipo de alinhamento aplicado ao objeto ou aos objetos designados pelos par\xe2metros ",(0,i.jsx)(n.em,{children:"objeto"})," e ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, n\xe3o passe uma string, mas a refer\xeancia de um campo ou de vari\xe1vel (campo ou vari\xe1vel de tipo objeto unicamente)."]}),"\n",(0,i.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,i.jsx)(n.em,{children:"alinhamento"})," uma das constantes do tema ",(0,i.jsx)(n.em,{children:"Propriedades dos objetos"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align center"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align default"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align left"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align right"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk justify"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Dispon\xedvel para \xe1reas 4D Write Pro e \xe1reas de introdu\xe7\xe3o de texto"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"}),' a constante wk justify est\xe1 dispon\xedvel no tema "',(0,i.jsx)(n.em,{children:"4D Write Pro"}),'".']}),"\n",(0,i.jsx)(n.p,{children:"Os objetos de formul\xe1rio aos quais pode aplicar este comando s\xe3o os seguintes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\xc1reas de rolagem"}),"\n",(0,i.jsx)(n.li,{children:"Combo boxes"}),"\n",(0,i.jsx)(n.li,{children:"Textos est\xe1ticos"}),"\n",(0,i.jsx)(n.li,{children:"\xc1reas de grupos"}),"\n",(0,i.jsx)(n.li,{children:"Menus suspensos/Listas suspensas"}),"\n",(0,i.jsx)(n.li,{children:"Campos"}),"\n",(0,i.jsx)(n.li,{children:"Vari\xe1veis"}),"\n",(0,i.jsx)(n.li,{children:"List box"}),"\n",(0,i.jsx)(n.li,{children:"Colunas de list box"}),"\n",(0,i.jsx)(n.li,{children:"Cabe\xe7alhos de list box"}),"\n",(0,i.jsx)(n.li,{children:"Rodap\xe9s de list box"}),"\n",(0,i.jsxs)(n.li,{children:["\xe1reas ",(0,i.jsx)(n.em,{children:"Refer\xeancia 4D Write Pro"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-get-horizontal-alignment",children:"OBJECT Get horizontal alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-get-vertical-alignment",children:"OBJECT Get vertical alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-vertical-alignment",children:"OBJECT SET VERTICAL ALIGNMENT"})]}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"706"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);