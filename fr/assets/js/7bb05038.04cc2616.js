"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88914"],{22626:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/delete-user","title":"DELETE USER","description":"DELETE USER ( r\xe9fUtilisateur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-user.md","sourceDirName":"commands-legacy","slug":"/commands/delete-user","permalink":"/docs/fr/commands/delete-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-user.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-user","title":"DELETE USER","slug":"/commands/delete-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current user","permalink":"/docs/fr/commands/current-user"},"next":{"title":"EDIT ACCESS","permalink":"/docs/fr/commands/edit-access"}}'),t=r("785893"),i=r("250065");let d={id:"delete-user",title:"DELETE USER",slug:"/commands/delete-user",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DELETE USER"})," ( ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"r\xe9fUtilisateur"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro d'identification de l'utilisateur \xe0 supprimer"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"DELETE USER"})," supprime l'utilisateur dont le num\xe9ro est pass\xe9 dans ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"}),". Vous devez passer un num\xe9ro valide d'utilisateur, retourn\xe9 par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si le compte de l'utilisateur n'existe pas ou a d\xe9j\xe0 \xe9t\xe9 supprim\xe9, une erreur -9979 est gen\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Seuls le Super_Utilisateur et l'Administrateur peuvent supprimer des utilisateurs. Il n'est pas possible \xe0 l'Administrateur de supprimer un utilisateur cr\xe9\xe9 par le Super_Utilisateur."}),"\n",(0,t.jsxs)(s.p,{children:["Les utilisateurs supprim\xe9s n'apparaissent plus dans l'\xe9diteur d'utilisateurs affich\xe9 lorsque vous appelez ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/edit-access",children:"EDIT ACCESS"})," ni en mode D\xe9veloppement. A noter que les num\xe9ros des utilisateurs supprim\xe9s peuvent \xeatre r\xe9attribu\xe9s lors de la cr\xe9ation de nouveaux comptes."]}),"\n",(0,t.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler ",(0,t.jsx)(s.strong,{children:"DELETE USER"})," ou si un autre process acc\xe8de d\xe9j\xe0 au syst\xe8me de mots de passe, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"615"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);