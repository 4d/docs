"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36829"],{11514:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/beep","title":"BEEP","description":"BEEP","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/beep.md","sourceDirName":"commands-legacy","slug":"/commands/beep","permalink":"/docs/pt/commands/beep","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbeep.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"beep","title":"BEEP","slug":"/commands/beep","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Interface do usu\xe1rio","permalink":"/docs/pt/commands/theme/User-Interface"},"next":{"title":"Caps lock down","permalink":"/docs/pt/commands/caps-lock-down"}}'),t=o("785893"),d=o("250065");let r={id:"beep",title:"BEEP",slug:"/commands/beep",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"BEEP"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando BEEP faz com que o PC ou Macintosh gerem um beep. Seu computador (em Windows ou Macintosh) pode emitir um som diferente a um beep, dependendo do som selecionado no painel de controle de som."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Advert\xeancia"}),": n\xe3o chame BEEP desde um processo de conex\xe3o Web, porque o beep ser\xe1 produzido na m\xe1quina servidor Web 4D e n\xe3o a m\xe1quina do navegador Web."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"No exemplo abaixo, se uma pesquisa n\xe3o encontrar nenhum registro, um bip \xe9 emitido, e aparece uma mensagem de alerta:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Clientes];[Clientes]Nome=$vsNomeaBuscar)\n\xa0If(Records in selection([Clientes])=0)\n\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0ALERT("N\xe3o h\xe1 nenhum cliente com esse nome.")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/play",children:"PLAY"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"151"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return r}});var s=o(667294);let t={},d=s.createContext(t);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);