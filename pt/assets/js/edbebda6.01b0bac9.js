"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9729"],{285613:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/get-window-rect","title":"GET WINDOW RECT","description":"GET WINDOW RECT ( esquerda ; superior ; direita ; inferior {; janela} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-window-rect.md","sourceDirName":"commands-legacy","slug":"/commands/get-window-rect","permalink":"/docs/pt/commands/get-window-rect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-window-rect.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-window-rect","title":"GET WINDOW RECT","slug":"/commands/get-window-rect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Frontmost window","permalink":"/docs/pt/commands/frontmost-window"},"next":{"title":"Get window title","permalink":"/docs/pt/commands/get-window-title"}}'),s=d("785893"),o=d("250065");let a={id:"get-window-rect",title:"GET WINDOW RECT",slug:"/commands/get-window-rect",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," ( ",(0,s.jsx)(n.em,{children:"esquerda"})," ; ",(0,s.jsx)(n.em,{children:"superior"})," ; ",(0,s.jsx)(n.em,{children:"direita"})," ; ",(0,s.jsx)(n.em,{children:"inferior"})," {; ",(0,s.jsx)(n.em,{children:"janela"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"esquerda"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada esquerda da \xe1rea de conte\xfado da janela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"superior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada superior da \xe1rea de conte\xfado da janela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"direita"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada direita da \xe1rea de conte\xfado da janela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inferior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada inferior da \xe1rea de conte\xfado da janela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"janela"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia de janela; ou janela do primeiro plano do processo atual, se omitido; ou janela MDI se for -1 (Windows)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando GET WINDOW RECT devolve as coordenadas globais da janela cujo n\xfamero de refer\xeancia se passa em janela. Se a janela n\xe3o existir, as vari\xe1veis dos par\xe2metros n\xe3o modificam."}),"\n",(0,s.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,s.jsx)(n.em,{children:"janela"}),", GET WINDOW RECT se aplica a janela do primeiro plano do processo atual."]}),"\n",(0,s.jsx)(n.p,{children:"As coordenadas retornadas s\xe3o expressadas em rela\xe7\xe3o ao canto superior esquerdo da \xe1rea de conte\xfado da janela de aplica\xe7\xe3o (em modo Windows MDI) ou da tela principal (MacOS e modo Windows SDI). As coordenadas devolvem o ret\xe2ngulo correspondente \xe0 \xe1rea de conte\xfado da janela (excluindo as barras de t\xedtulos e as margens)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": em windows, se passa -1 em ",(0,s.jsx)(n.em,{children:"janela"}),", GET WINDOW RECT devolve as coordenadas da janela de aplica\xe7\xe3o (janela MDI). Estas coordenadas correspondem a \xe1rea de conte\xfado da janela (excluindo barras de menus e margens). Neste caso em modo SDI, ",(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," devolve (0;0;0;0) como coordenadas."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Ver o exemplo do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/window-list",children:"WINDOW LIST"}),".."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"443"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return a}});var r=d(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);