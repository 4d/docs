"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31769"],{36702:function(e,s,o){o.r(s),o.d(s,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/hide-process","title":"HIDE PROCESS","description":"HIDE PROCESS ( processo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/hide-process.md","sourceDirName":"commands-legacy","slug":"/commands/hide-process","permalink":"/docs/pt/commands/hide-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"hide-process","title":"HIDE PROCESS","slug":"/commands/hide-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Frontmost process","permalink":"/docs/pt/commands/frontmost-process"},"next":{"title":"SHOW PROCESS","permalink":"/docs/pt/commands/show-process"}}'),r=o("785893"),t=o("250065");let d={id:"hide-process",title:"HIDE PROCESS",slug:"/commands/hide-process",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"HIDE PROCESS"})," ( ",(0,r.jsx)(s.em,{children:"processo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"processo"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de processo ou processo a ocultar"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["HIDE PROCESS oculta todas as janelas que pertencem ao ",(0,r.jsx)(s.em,{children:"processo"}),". Todos os elementos de interface de ",(0,r.jsx)(s.em,{children:"processo"})," se ocultam at\xe9 o seguinte ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/show-process",title:"SHOW PROCESS",children:"SHOW PROCESS"}),". A barra de menus do processo tamb\xe9m se oculta. Isso significa que a abertura de uma janela enquanto o processo est\xe1 oculto n\xe3o provocar\xe1 nenhuma mudan\xe7a na visualiza\xe7\xe3o em tela. Se o processo j\xe1 estiver oculto, o comando n\xe3o tem nenhum efeito."]}),"\n",(0,r.jsxs)(s.p,{children:["A \xfanica exce\xe7\xe3o a esta regra \xe9 a janela do depurador. Se a janela do depurador for mostrada quando ",(0,r.jsx)(s.em,{children:"processo"})," \xe9 um processo oculto, ",(0,r.jsx)(s.em,{children:"processo"})," \xe9 mostrado e passa ao primeiro plano do processo."]}),"\n",(0,r.jsxs)(s.p,{children:["Se n\xe3o quer que um ",(0,r.jsx)(s.em,{children:"processo"})," se mostre quando for criado, HIDE PROCESS deve ser o primeiro comando no m\xe9todo de processo. Os processos Usu\xe1rio/Menus personalizados e os processos de gest\xe3o da cach\xea n\xe3o podem ser ocultados utilizando este comando."]}),"\n",(0,r.jsx)(s.p,{children:"Ainda que um processo esteja oculto, o processo est\xe1 ainda em execu\xe7\xe3o."}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"O exemplo a seguir oculta todas as janelas que pertencem ao processo atual:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0HIDE PROCESS(Current process)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/process-state",children:"Process state"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/show-process",children:"SHOW PROCESS"})]}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"324"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return c},a:function(){return d}});var n=o(667294);let r={},t=n.createContext(r);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);