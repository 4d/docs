"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79571"],{618929:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/ob-is-empty","title":"OB Is empty","description":"OB Is empty ( objet ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-is-empty.md","sourceDirName":"commands-legacy","slug":"/commands/ob-is-empty","permalink":"/docs/fr/20-R7/commands/ob-is-empty","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-is-empty.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-is-empty","title":"OB Is empty","slug":"/commands/ob-is-empty","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Is defined","permalink":"/docs/fr/20-R7/commands/ob-is-defined"},"next":{"title":"OB Is shared","permalink":"/docs/fr/20-R7/commands/ob-is-shared"}}'),i=s("785893"),d=s("250065");let r={id:"ob-is-empty",title:"OB Is empty",slug:"/commands/ob-is-empty",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OB Is empty"})," ( ",(0,i.jsx)(n.em,{children:"objet"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"Object, Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Vrai si objet est vide ou ind\xe9fini, sinon Faux"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OB Is empty"})," retourne ",(0,i.jsx)(n.strong,{children:"Vrai"})," si ",(0,i.jsx)(n.em,{children:"objet"})," est ind\xe9fini ou vide, et ",(0,i.jsx)(n.strong,{children:"Faux"})," si ",(0,i.jsx)(n.em,{children:"objet"})," est d\xe9fini (initialis\xe9) et contient au moins une propri\xe9t\xe9.doit avoir \xe9t\xe9 cr\xe9\xe9 via la commande ",(0,i.jsx)(n.em,{children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Voici les diff\xe9rents r\xe9sultats de la commande ainsi que de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-is-defined",children:"OB Is defined"}),", en fonction du contexte :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0$vide:=OB Is empty($ref)\xa0//Vrai\n\xa0$def:=OB Is defined($ref)\xa0//Faux\n\xa0\n\xa0OB SET($ref;"nom";"Susie";"age";4)\n\xa0\xa0\xa0\xa0\xa0//$ref="{"nom":"Susie","age":4}"\n\xa0$vide:=OB Is empty($ref)\xa0//Faux\n\xa0$def:=OB Is defined($ref)\xa0//Vrai\n\xa0\n\xa0OB REMOVE($ref;"nom")\n\xa0OB REMOVE($ref;"age")\n\xa0$vide:=OB Is empty($ref)\xa0//Vrai\n\xa0$def:=OB Is defined($ref)\xa0//Vrai\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-is-defined",children:"OB Is defined"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1297"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},d=t.createContext(i);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);