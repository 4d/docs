"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46990"],{619049:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/method-set-access-mode","title":"METHOD SET ACCESS MODE","description":"METHOD SET ACCESS MODE ( modo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-set-access-mode.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-access-mode","permalink":"/docs/pt/commands/method-set-access-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-access-mode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-set-access-mode","title":"METHOD SET ACCESS MODE","slug":"/commands/method-set-access-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD RESOLVE PATH","permalink":"/docs/pt/commands/method-resolve-path"},"next":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/pt/commands/method-set-attribute"}}'),o=t("785893"),d=t("250065");let r={id:"method-set-access-mode",title:"METHOD SET ACCESS MODE",slug:"/commands/method-set-access-mode",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," ( ",(0,o.jsx)(n.em,{children:"modo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"modo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Modo de acesso aos objetos bloqueados"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," permite definir o comportamento de 4D quando intenta acessar em escritura a um objeto que j\xe1 foi carregado em modifica\xe7\xe3o por outro usu\xe1rio ou processo . O alcance deste comando \xe9 a sess\xe3o atual."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"modo"}),", passe uma das seguintes constantes do tema ",(0,o.jsx)(n.em,{children:"Design Object Access"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"On object locked abort"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"A carga do objeto se aborta (funcionamento por defeito)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"On object locked confirm"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"4D mostra uma caixa de di\xe1logo permitindo-lhe eleger entre intentar novamente o abortar. Em modo remoto, esta op\xe7\xe3o n\xe3o \xe9 suportada (a carga se abandona)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"On object locked retry"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"4D tenta carregar o objeto at\xe9 que seja liberado"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1191"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let o={},d=s.createContext(o);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);