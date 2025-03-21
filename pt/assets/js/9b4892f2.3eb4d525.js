"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58011"],{513588:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/flush-cache","title":"FLUSH CACHE","description":"FLUSH CACHE {( tamanho|* )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/flush-cache.md","sourceDirName":"commands-legacy","slug":"/commands/flush-cache","permalink":"/docs/pt/20-R7/commands/flush-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"flush-cache","title":"FLUSH CACHE","slug":"/commands/flush-cache","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache info","permalink":"/docs/pt/20-R7/commands/cache-info"},"next":{"title":"Get adjusted blobs cache priority","permalink":"/docs/pt/20-R7/commands/get-adjusted-blobs-cache-priority"}}'),r=s("785893"),t=s("250065");let d={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let a={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"FLUSH CACHE"})," {( tamanho|* )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tamanho|*"}),(0,r.jsx)(a.td,{children:"Real, Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"*para completamente liberar a mem\xf3ria cache, ou n\xfameros de bytes a liberar em cache"})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(a.p,{children:"O comando FLUSH CACHE salva imediatamente os buffers de dados em disco. Todas as altera\xe7\xf5es que foram feitas no banco de dados s\xe3o armazenados no disco."}),"\n",(0,r.jsx)(a.p,{children:"Como padr\xe3o, a mem\xf3ria cache atual \xe9 deixada sem mexer, ou seja, os dados continuam a ser usados para acessos de leitura subsequentes De maneira opcional, pode passar um par\xe2metro para modificar seus conte\xfados:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["passe ",(0,r.jsx)(a.em,{children:"*"})," para salvar a cache e liberar a mem\xf3ria cache inteira."]}),"\n",(0,r.jsxs)(a.li,{children:["passe um valor ",(0,r.jsx)(a.em,{children:"tamanho"})," para salvar a cache e liberar apenas o n\xfamero de bytes ",(0,r.jsx)(a.em,{children:"tamanho"})," da cache."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," Passar um par\xe2metro a este comando \xe9 reservado para prop\xf3sitos de teste. Por raz\xf5es de performance, n\xe3o \xe9 recomendado liberar a cache no ambiente de produ\xe7\xe3o."]}),"\n",(0,r.jsxs)(a.p,{children:["Geralmente n\xe3o precisa chamar este comando, j\xe1 que 4D salva modifica\xe7\xf5es de dados regularmente. A op\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"Flush Cache every X Seconds (Minutes) em"})," ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R7/settings/database",children:"Database page"})," das configura\xe7\xf5es de banco de dados, que especifica qu\xe3o frequente vai salvar, \xe9 tipicamente usado para controlar o esvaziamento da cache.N\xf3s recomendamos usar o valor padr\xe3o de 20 segundos. Note que o par\xe2metro Cache flush periodicity pode ser estabelecido e lido usando os comandos ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," e ",(0,r.jsx)(a.a,{href:"/docs/pt/20-R7/commands/get-database-parameter",children:"Get database parameter"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/pt/20-R7/commands/get-database-parameter",children:"Get database parameter"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,r.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero do comando"}),(0,r.jsx)(a.td,{children:"297"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Thread-seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return o},a:function(){return d}});var n=s(667294);let r={},t=n.createContext(r);function d(e){let a=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);