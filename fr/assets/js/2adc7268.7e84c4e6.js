"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80622"],{217127:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/save-list","title":"SAVE LIST","description":"SAVE LIST ( liste ; nomListe )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/save-list.md","sourceDirName":"commands-legacy","slug":"/commands/save-list","permalink":"/docs/fr/20-R8/commands/save-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"save-list","title":"SAVE LIST","slug":"/commands/save-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New list","permalink":"/docs/fr/20-R8/commands/new-list"},"next":{"title":"SELECT LIST ITEMS BY POSITION","permalink":"/docs/fr/20-R8/commands/select-list-items-by-position"}}'),i=s("785893"),r=s("250065");let d={id:"save-list",title:"SAVE LIST",slug:"/commands/save-list",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SAVE LIST"})," ( ",(0,i.jsx)(n.em,{children:"liste"})," ; ",(0,i.jsx)(n.em,{children:"nomListe"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"liste"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomListe"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom de la liste tel qu'il doit appara\xeetre dans l'\xe9diteur d'\xe9num\xe9rations en mode D\xe9veloppement"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SAVE LIST"})," sauvegarde la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans ",(0,i.jsx)(n.em,{children:"liste"}),", sous le nom que vous avez pass\xe9 dans ",(0,i.jsx)(n.em,{children:"nomListe"}),". La liste est stock\xe9e en tant qu'\xe9num\xe9ration dans l'\xe9diteur d'\xe9num\xe9rations du mode D\xe9veloppement."]}),"\n",(0,i.jsx)(n.p,{children:"Si une \xe9num\xe9ration de m\xeame nom existe d\xe9j\xe0, son contenu est remplac\xe9."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," : Cette commande ne peut pas \xeatre utilis\xe9e dans une structure charg\xe9e en ",(0,i.jsx)(n.strong,{children:"lecture seule"}),", telle qu'un projet .4dz ou un composant."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/load-list",children:"Load list"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"384"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);