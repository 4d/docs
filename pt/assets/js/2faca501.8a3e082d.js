"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63973"],{490094:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/mouse-position","title":"MOUSE POSITION","description":"MOUSE POSITION ( mouseX ; mouseY ; botaoMouse {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/mouse-position.md","sourceDirName":"commands-legacy","slug":"/commands/mouse-position","permalink":"/docs/pt/commands/mouse-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmouse-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"mouse-position","title":"MOUSE POSITION","slug":"/commands/mouse-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Macintosh option down","permalink":"/docs/pt/commands/macintosh-option-down"},"next":{"title":"PLAY","permalink":"/docs/pt/commands/play"}}'),d=n("785893"),t=n("250065");let r={id:"mouse-position",title:"MOUSE POSITION",slug:"/commands/mouse-position",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"MOUSE POSITION"})," ( ",(0,d.jsx)(o.em,{children:"mouseX"})," ; ",(0,d.jsx)(o.em,{children:"mouseY"})," ; ",(0,d.jsx)(o.em,{children:"botaoMouse"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"mouseX"}),(0,d.jsx)(o.td,{children:"Real"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Coordenadas horizontais do mouse"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"mouseY"}),(0,d.jsx)(o.td,{children:"Real"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Coordenadas verticais do mouse"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"botaoMouse"}),(0,d.jsx)(o.td,{children:"Integer"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Estado do bot\xe3o do mouse: 0=bot\xe3o sem pressionar; 1=bot\xe3o pressionado; 2= bot\xe3o direito pressionado; 3=dois bot\xf5es pressionados"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"*"}),(0,d.jsx)(o.td,{children:"Operador"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Se especificado, sistema global de coordenadas \xe9 usado, se omitido, sistema de coordenadas locais \xe9 usado"})]})]})]}),"\n",(0,d.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(o.p,{children:"O comando MOUSE POSITION retorna o estado atual do mouse."}),"\n",(0,d.jsxs)(o.p,{children:["As coordenadas horizontal e vertical s\xe3o retornadas em ",(0,d.jsx)(o.em,{children:"mouseX"})," e ",(0,d.jsx)(o.em,{children:"mouseY"}),". Se passar o par\xe2metro ",(0,d.jsx)(o.em,{children:"*"})," , as coordenadas s\xe3o expressas em rela\xe7\xe3o \xe0 tela (modo macOS e Windows SDI) ou a janela da aplica\xe7\xe3o (modo Windows MDI). Se omitir o par\xe2metro *, s\xe3o expressas em rela\xe7\xe3o \xe0 janela do formul\xe1rio atual (se houver) do processo atual."]}),"\n",(0,d.jsxs)(o.p,{children:["O par\xe2metro ",(0,d.jsx)(o.em,{children:"botaoMouse"})," retorna o estado dos bot\xf5es, como foi descrito anteriormente."]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota"}),": os valores 2 e 3 podem ser retornados em Mac OS X a partir da vers\xe3o 10.2.5 apenas."]}),"\n",(0,d.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(o.p,{children:["Ver o exemplo do comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/pop-up-menu",children:"Pop up menu"}),"."]}),"\n",(0,d.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"/docs/pt/commands/caps-lock-down",children:"Caps lock down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/macintosh-command-down",children:"Macintosh command down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/macintosh-control-down",children:"Macintosh control down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/macintosh-option-down",children:"Macintosh option down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/on-event-call",children:"ON EVENT CALL"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/shift-down",children:"Shift down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/windows-alt-down",children:"Windows Alt down"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/windows-ctrl-down",children:"Windows Ctrl down"})]}),"\n",(0,d.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"468"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return r}});var s=n(667294);let d={},t=s.createContext(d);function r(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);