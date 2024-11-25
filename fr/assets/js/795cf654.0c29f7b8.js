"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26247"],{487929:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/new-list","title":"New list","description":"New list  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-list.md","sourceDirName":"commands-legacy","slug":"/commands/new-list","permalink":"/docs/fr/commands/new-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-list","title":"New list","slug":"/commands/new-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load list","permalink":"/docs/fr/commands/load-list"},"next":{"title":"SAVE LIST","permalink":"/docs/fr/commands/save-list"}}'),i=n("785893"),r=n("250065");let l={id:"new-list",title:"New list",slug:"/commands/new-list",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"New list"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"New list"})," cr\xe9e une nouvelle liste hi\xe9rarchique vide en m\xe9moire et retourne son num\xe9ro de r\xe9f\xe9rence unique."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"ATTENTION :"})," Les listes hi\xe9rarchiques r\xe9sident en m\xe9moire. Une fois que vous en avez termin\xe9 avec une liste hi\xe9rarchique, il est important que vous l'effaciez \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/clear-list",children:"CLEAR LIST"}),". Ainsi, vous lib\xe9rez la m\xe9moire occup\xe9e par la liste hi\xe9rarchique dont vous n'avez plus besoin."]}),"\n",(0,i.jsx)(s.p,{children:"D'autres commandes vous permettent de cr\xe9er des listes hi\xe9rarchiques :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/copy-list",children:"Copy list"})," cr\xe9e une nouvelle liste en dupliquant une liste existante."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/load-list",children:"Load list"})," cr\xe9e une nouvelle liste en chargeant une \xe9num\xe9ration cr\xe9\xe9e (manuellement ou par programmation) dans l'\xe9diteur d'\xe9num\xe9rations du mode D\xe9veloppement."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/blob-to-list",children:"BLOB to list"})," cr\xe9e une nouvelle liste \xe0 partir du contenu d'un BLOB dans lequel une liste avait \xe9t\xe9 pr\xe9alablement stock\xe9e."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Une fois que vous avez cr\xe9\xe9 une liste hi\xe9rarchique \xe0 l'aide de la commande ",(0,i.jsx)(s.strong,{children:"New list"}),", vous pouvez :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Ajouter des \xe9l\xe9ments \xe0 la liste \xe0 l'aide des commandes ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"})," et ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/insert-in-list",children:"INSERT IN LIST"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Supprimer des \xe9l\xe9ments de cette liste \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/delete-from-list",children:"DELETE FROM LIST"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/blob-to-list",children:"BLOB to list"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/clear-list",children:"CLEAR LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/copy-list",children:"Copy list"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/delete-from-list",children:"DELETE FROM LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/insert-in-list",children:"INSERT IN LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/load-list",children:"Load list"})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var t=n(667294);let i={},r=t.createContext(i);function l(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);