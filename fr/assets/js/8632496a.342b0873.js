"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27249"],{948050:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/ob-set-null","title":"OB SET NULL","description":"OB SET NULL ( objet ; propri\xe9t\xe9 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-set-null.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-null","permalink":"/docs/fr/commands/ob-set-null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-null.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-set-null","title":"OB SET NULL","slug":"/commands/ob-set-null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET ARRAY","permalink":"/docs/fr/commands/ob-set-array"},"next":{"title":"OB Values","permalink":"/docs/fr/commands/ob-values"}}'),t=r("785893"),l=r("250065");let d={id:"ob-set-null",title:"OB SET NULL",slug:"/commands/ob-set-null",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB SET NULL"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 laquelle appliquer la valeur null"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB SET NULL"})," permet de stocker la valeur ",(0,t.jsx)(n.strong,{children:"null"})," dans l\u2019objet de langage d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),".doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,t.jsx)(n.em,{children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 dans laquelle stocker la valeur ",(0,t.jsx)(n.strong,{children:"null"}),". Si la propri\xe9t\xe9 existe d\xe9j\xe0 dans ",(0,t.jsx)(n.em,{children:"objet"}),", sa valeur sera mise \xe0 jour. Si elle n\u2019existe pas, elle est cr\xe9\xe9e. Attention, le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:'On souhaite mettre la valeur null dans la propri\xe9t\xe9 "\xe2ge" de L\xe9a :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"nom";"L\xe9a";"\xe2ge";4)\n\xa0\xa0\xa0\xa0\xa0// $ref = {"nom":"L\xe9a","\xe2ge":4}\n\xa0...\n\xa0OB SET NULL($ref ;"\xe2ge")\n\xa0\xa0\xa0\xa0\xa0// $ref = {"nom":"L\xe9a","\xe2ge":null}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/null",children:"Null"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-get-property-names",children:"OB GET PROPERTY NAMES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-set",children:"OB SET"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1233"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);