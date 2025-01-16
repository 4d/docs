"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27576"],{747840:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/set-document-position","title":"SET DOCUMENT POSITION","description":"SET DOCUMENT POSITION ( docRef ; offset {; ancre} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-document-position.md","sourceDirName":"commands-legacy","slug":"/commands/set-document-position","permalink":"/docs/fr/20-R7/commands/set-document-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-document-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-document-position","title":"SET DOCUMENT POSITION","slug":"/commands/set-document-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select folder","permalink":"/docs/fr/20-R7/commands/select-folder"},"next":{"title":"SET DOCUMENT PROPERTIES","permalink":"/docs/fr/20-R7/commands/set-document-properties"}}'),r=s("785893"),d=s("250065");let i={id:"set-document-position",title:"SET DOCUMENT POSITION",slug:"/commands/set-document-position",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET DOCUMENT POSITION"})," ( ",(0,r.jsx)(n.em,{children:"docRef"})," ; ",(0,r.jsx)(n.em,{children:"offset"})," {; ",(0,r.jsx)(n.em,{children:"ancre"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"docRef"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Position dans fichier (exprim\xe9e en octets)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ancre"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"1 = Par rapport au d\xe9but du fichier 2 = Par rapport \xe0 la fin du fichier 3 = Par rapport \xe0 la position courante"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande ne fonctionne qu'avec un document d\xe9j\xe0 ouvert, dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"docRef"}),".d\xe9finit la position que vous passez dans ",(0,r.jsx)(n.em,{children:"offset"})," comme \xe9tant celle \xe0 laquelle la prochaine lecture (",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),") ou \xe9criture (",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/send-packet",children:"SEND PACKET"}),") aura lieu."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"ancre"}),", la position est d\xe9finie par rapport au d\xe9but du document. Sinon, vous pouvez passer dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"ancre"})," une des valeurs list\xe9es ci-dessus."]}),"\n",(0,r.jsxs)(n.p,{children:["En fonction de l'",(0,r.jsx)(n.em,{children:"ancre"})," d\xe9finie, vous pouvez passer des valeurs positives ou n\xe9gatives dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"offset"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-document-position",children:"Get document position"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"482"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);