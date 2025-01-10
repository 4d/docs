"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82336"],{329394:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/test-semaphore","title":"Test semaphore","description":"Test semaphore ( s\xe9maphore ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/test-semaphore.md","sourceDirName":"commands-legacy","slug":"/commands/test-semaphore","permalink":"/docs/fr/commands/test-semaphore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftest-semaphore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"test-semaphore","title":"Test semaphore","slug":"/commands/test-semaphore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PROCESS VARIABLE","permalink":"/docs/fr/commands/set-process-variable"},"next":{"title":"VARIABLE TO VARIABLE","permalink":"/docs/fr/commands/variable-to-variable"}}'),t=s("785893"),o=s("250065");let d={id:"test-semaphore",title:"Test semaphore",slug:"/commands/test-semaphore",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Test semaphore"})," ( ",(0,t.jsx)(n.em,{children:"s\xe9maphore"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9maphore"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du s\xe9maphore \xe0 tester"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai = le s\xe9maphore existe, Faux = le s\xe9maphore n\u2019existe pas"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Test semaphore"})," permet de tester l\u2019existence d\u2019un s\xe9maphore."]}),"\n",(0,t.jsxs)(n.p,{children:["A la diff\xe9rence de la fonction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/semaphore",children:"Semaphore"}),", ",(0,t.jsx)(n.strong,{children:"Test semaphore"})," ne cr\xe9e pas le s\xe9maphore s\u2019il n\u2019existe pas.",(0,t.jsx)(n.br,{}),"\nSi le s\xe9maphore existe, la fonction retourne ",(0,t.jsx)(n.strong,{children:"Vrai"}),", s\u2019il n\u2019existe pas elle retourne ",(0,t.jsx)(n.strong,{children:"Faux"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' Attention, 4D tient compte de la casse des caract\xe8res en ce qui concerne les noms de s\xe9maphores (le programme consid\xe8re par exemple que "MonS\xe9maphore" est diff\xe9rent de "mons\xe9maphore").']}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple permet de conna\xeetre l\u2019\xe9tat d\u2019un traitement (en l\u2019occurrence, la modification d\u2019un code) sans modifier le s\xe9maphore :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Open window(x1;x2;y1;y2;-Palette window)\n\xa0Repeat\n\xa0\xa0\xa0\xa0If(Test semaphore("Code d\u2019encryptage"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Code d\'encryptage en cours de modification.")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO XY($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("Modification du code d\'encryptage autoris\xe9e.")\n\xa0\xa0\xa0\xa0End if\n\xa0Until(StopInfo)\n\xa0CLOSE WINDOW\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/semaphore",children:"Semaphore"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"652"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);