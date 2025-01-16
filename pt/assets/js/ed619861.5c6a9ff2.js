"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19781"],{736663:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-get-scrollbar","title":"OBJECT GET SCROLLBAR","description":"OBJECT GET SCROLLBAR ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scrollbar","permalink":"/docs/pt/20-R7/commands/object-get-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scrollbar","title":"OBJECT GET SCROLLBAR","slug":"/commands/object-get-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLL POSITION","permalink":"/docs/pt/20-R7/commands/object-get-scroll-position"},"next":{"title":"OBJECT GET SHORTCUT","permalink":"/docs/pt/20-R7/commands/object-get-shortcut"}}'),s=n("785893"),t=n("250065");let d={id:"object-get-scrollbar",title:"OBJECT GET SCROLLBAR",slug:"/commands/object-get-scrollbar",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT GET SCROLLBAR"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"horizontal"})," ; ",(0,s.jsx)(o.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel ou um campo."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se* for especificado) ou vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"horizontal"}),(0,s.jsx)(o.td,{children:"Boolean, Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"True = exibido, False = escondido"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"vertical"}),(0,s.jsx)(o.td,{children:"Boolean, Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"True = dispon\xedvel, False = escondido"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando OBJECT GET SCROLLBAR se utiliza para mostrar ou ocultar as barras de deslocamento horizontal e/ou vertical no objeto designado pelos par\xe2metros ",(0,s.jsx)(o.em,{children:"objeto"})," e ",(0,s.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto \xfanicamente) ao inv\xe9s de uma cadeia."]}),"\n",(0,s.jsxs)(o.p,{children:["Nos par\xe2metros ",(0,s.jsx)(o.em,{children:"horizontal"})," e ",(0,s.jsx)(o.em,{children:"vertical"}),", pode passar vari\xe1veis de tipo Booleano ou inteiro longo:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Quando passe vari\xe1veis Booleanas, o valor devolvido reflete o estado ",(0,s.jsx)(o.strong,{children:"atual"})," da barra de deslocamento:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido como oculta, o par\xe2metro recebe False,"}),"\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido como vis\xedvel, o par\xe2metro recebe True,"}),"\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido em modo autom\xe1tico, o par\xe2metro recebe True ou False dependendo do estado de visualiza\xe7\xe3o atual do objeto."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["Quando passe vari\xe1veis inteiros longos, o valor devolvido reflete a visibilidade definida para a barra de deslocamento:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido como oculta, o par\xe2metro recebe 0,"}),"\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido como vis\xedvel, o par\xe2metro recebe 1,"}),"\n",(0,s.jsx)(o.li,{children:"Se a barra de deslocamento foi definido em modo autom\xe1tico, o par\xe2metro recebe 2.\nEste comando pode ser utilizado com os seguintes objetos de formul\xe1rio:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:"campos e vari\xe1veis objeto texto ou imagen"}),"\n",(0,s.jsx)(o.li,{children:"list boxes,"}),"\n",(0,s.jsx)(o.li,{children:"listas hier\xe1rquicas,"}),"\n",(0,s.jsx)(o.li,{children:"sub formul\xe1rios."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para obter mais informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1076"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var r=n(667294);let s={},t=r.createContext(s);function d(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);