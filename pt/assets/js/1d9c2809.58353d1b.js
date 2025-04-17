"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2503"],{318132:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-group-access","title":"Get group access","description":"Get group access : Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-access","permalink":"/docs/pt/commands/get-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-access.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-group-access","title":"Get group access","slug":"/commands/get-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get default user","permalink":"/docs/pt/commands/get-default-user"},"next":{"title":"GET GROUP LIST","permalink":"/docs/pt/commands/get-group-list"}}'),r=n("785893"),o=n("250065");let c={id:"get-group-access",title:"Get group access",slug:"/commands/get-group-access",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Get group access"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Resultado"}),(0,r.jsx)(s.td,{children:"Collection"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Cole\xe7\xe3o de nomes de grupos ao qual o usu\xe1rio pertence"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"Get group access"})," devolve \xe0s filia\xe7\xf5es da conta de usu\xe1rio 4D para a sess\xe3o atual. Se o usu\xe1rio n\xe3o pertencer a nenhum grupo na sess\xe3o, se devolver uma cole\xe7\xe3o vazia."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Valor devolvido"})}),"\n",(0,r.jsx)(s.p,{children:"Cole\xe7\xe3o de strings: nomes de grupos aos que pertence a conta de usu\xe1rio 4D."}),"\n",(0,r.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:'Se qusier verificar se o usu\xe1rio atual pertence ao grupo "plugins":'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0$groups:=Get group access\n\xa0If($groups.countValues("plugins")#0)\xa0//o usu\xe1rio pertence ao grupo\n\xa0\xa0\xa0\xa0...\xa0//\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/set-group-access",children:"SET GROUP ACCESS"})}),"\n",(0,r.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1738"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return c}});var t=n(667294);let r={},o=t.createContext(r);function c(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);