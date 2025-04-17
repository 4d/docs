"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92871"],{262125:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/close-document","title":"CLOSE DOCUMENT","description":"CLOSE DOCUMENT ( docRef )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/close-document.md","sourceDirName":"commands-legacy","slug":"/commands/close-document","permalink":"/docs/fr/20-R8/commands/close-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"close-document","title":"CLOSE DOCUMENT","slug":"/commands/close-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Append document","permalink":"/docs/fr/20-R8/commands/append-document"},"next":{"title":"Convert path POSIX to system","permalink":"/docs/fr/20-R8/commands/convert-path-posix-to-system"}}'),d=s("785893"),r=s("250065");let c={id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ( ",(0,d.jsx)(n.em,{children:"docRef"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"docRef"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du document"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ferme le document sp\xe9cifi\xe9 par ",(0,d.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Fermer un document est le seul moyen de s'assurer que les donn\xe9es \xe9crites dans le fichier sont sauvegard\xe9es. Vous devez fermer tous les documents ouverts par les commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/create-document",children:"Create document"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/append-document",children:"Append document"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"L'exemple suivant permet \xe0 l'utilisateur de cr\xe9er un nouveau document, \xe9crit la cha\xeene \u201CBonjour\u201D, puis le referme :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var vDoc : Time\n\xa0vDoc:=Create document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;"Bonjour")\xa0// Ecrire un mot dans le document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\xa0// Fermer le document\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/append-document",children:"Append document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/create-document",children:"Create document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-document",children:"Open document"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"267"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(667294);let d={},r=t.createContext(d);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);