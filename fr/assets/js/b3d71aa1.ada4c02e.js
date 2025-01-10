"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50040"],{139737:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/modified-record","title":"Modified record","description":"Modified record {( laTable )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modified-record.md","sourceDirName":"commands-legacy","slug":"/commands/modified-record","permalink":"/docs/fr/commands/modified-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modified-record","title":"Modified record","slug":"/commands/modified-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is record loaded","permalink":"/docs/fr/commands/is-record-loaded"},"next":{"title":"POP RECORD","permalink":"/docs/fr/commands/pop-record"}}'),i=r("785893"),s=r("250065");let t={id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified record"})," {( ",(0,i.jsx)(n.em,{children:"laTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"laTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table de laquelle tester si l'enregistrement courant a \xe9t\xe9 modifi\xe9 ou Table par d\xe9faut si param\xe8tre omis"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"L'enregistrement a \xe9t\xe9 modifi\xe9 (Vrai) ou L'enregistrement n'a pas \xe9t\xe9 modifi\xe9 (Faux)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified record"})," retourne Vrai si l'enregistrement courant de ",(0,i.jsx)(n.em,{children:"laTable"})," a \xe9t\xe9 modifi\xe9 et non encore stock\xe9. Sinon, elle retourne Faux. Cette fonction vous permet de d\xe9terminer rapidement s'il faut stocker l'enregistrement. Dans les formulaires entr\xe9e, vous pouvez effectuer le test avant d'aller \xe0 l'enregistrement suivant."]}),"\n",(0,i.jsx)(n.p,{children:"A noter que cette fonction retourne toujours Vrai dans les contextes suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"l'enregistrement courant est un nouvel enregistrement,"}),"\n",(0,i.jsxs)(n.li,{children:["apr\xe8s l'ex\xe9cution des commandes ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/push-record",children:"PUSH RECORD"})," et ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/pop-record",children:"POP RECORD"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["d\xe8s qu'une valeur a \xe9t\xe9 affect\xe9e \xe0 un champ de l'enregistrement, m\xeame s'il s'agit d'une valeur identique \xe0 la pr\xe9c\xe9dente. Par exemple, ",(0,i.jsx)(n.strong,{children:"Modified record"})," retourne Vrai apr\xe8s l'ex\xe9cution de l'instruction suivante :"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0[Table_1]Champ_1:=[Table_1]Champ_1  \n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant montre une utilisation typique de ",(0,i.jsx)(n.strong,{children:"Modified record"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0If(Modified record([Clients]))\n\xa0\xa0\xa0\xa0SAVE RECORD([Clients])\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/modified",children:"Modified"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/old",children:"Old"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"314"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var d=r(667294);let i={},s=d.createContext(i);function t(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);