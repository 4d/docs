"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2148"],{282439:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>o,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/screen-coordinates","title":"SCREEN COORDINATES","description":"SCREEN COORDINATES ( esquerda ; superior ; direita ; inferior  {; tela {; areaTela}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/screen-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/screen-coordinates","permalink":"/docs/pt/20-R7/commands/screen-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"screen-coordinates","title":"SCREEN COORDINATES","slug":"/commands/screen-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN FONT PICKER","permalink":"/docs/pt/20-R7/commands/open-font-picker"},"next":{"title":"SCREEN DEPTH","permalink":"/docs/pt/20-R7/commands/screen-depth"}}'),s=r("785893"),a=r("250065");let t={id:"screen-coordinates",title:"SCREEN COORDINATES",slug:"/commands/screen-coordinates",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," ( ",(0,s.jsx)(n.em,{children:"esquerda"})," ; ",(0,s.jsx)(n.em,{children:"superior"})," ; ",(0,s.jsx)(n.em,{children:"direita"})," ; ",(0,s.jsx)(n.em,{children:"inferior"}),"  {; ",(0,s.jsx)(n.em,{children:"tela"})," {; ",(0,s.jsx)(n.em,{children:"areaTela"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"esquerda"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada esquerda da \xe1rea da tela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"superior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada superior da \xe1rea da tela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"direita"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada direita da \xe1rea da tela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inferior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada inferior da \xe1rea da tela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tela"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero da tela, ou tela principal se omitida"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"areaTela"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tela inteira (padr\xe3o)ou ent\xe3o \xe1rea de trabalho"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SCREEN COORDINATES devolve nos par\xe2metros ",(0,s.jsx)(n.em,{children:"esquerda"}),", ",(0,s.jsx)(n.em,{children:"acima"}),", ",(0,s.jsx)(n.em,{children:"direita,"})," e ",(0,s.jsx)(n.em,{children:"abaixo"})," as coordenadas da tela especificada por ",(0,s.jsx)(n.em,{children:"IDtela"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se omitir o par\xe2metro ",(0,s.jsx)(n.em,{children:"IDtela"}),", o comando devolve as coordenadas da tela principal."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"areaTela"})," lhe permite especificar se deseja as coordenadas para toda a \xe1rea da tela (predeterminado) ou apenas para a \xe1rea utiliz\xe1vel dispon\xedvel. H\xe1 dois seletores dispon\xedveis:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Screen size"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"As coordenadas de toda a tela. (valor padr\xe3o)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Screen work area"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"As coordenadas da \xe1rea de tela dispon\xedvel que podem ser usadas (ou seja, n\xe3o est\xe3o ocupadas pela barra de tarefas de Windows ou a barra de menus e o dock de masOS)."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"As imagens abaixo demostram as diferen\xe7as entre o tamanho da tela e a \xe1rea de trabalho:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(376424).Z+"",width:"730",height:"201"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se a barra de tarefas ou o dock se ocultarem automaticamente, ",(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," sempre devolver\xe1 o tamanho completo da tela."]}),"\n",(0,s.jsxs)(n.li,{children:["Se oferecer um valor n\xe3o v\xe1lido em ",(0,s.jsx)(n.em,{children:"IDtela"}),", se devolve um zero para todas as coordenadas."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/count-screens",children:"Count screens"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/menu-bar-screen",children:"Menu bar screen"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/screen-depth",children:"SCREEN DEPTH"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"438"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},376424:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/pict4800387.en-09828b7fbc78891e9652bec39c1f7008.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var d=r(667294);let s={},a=d.createContext(s);function t(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);