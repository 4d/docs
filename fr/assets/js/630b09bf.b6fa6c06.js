"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85625"],{330155:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-user-properties","title":"GET USER PROPERTIES","description":"GET USER PROPERTIES ( r\xe9fUtilisateur ; nom ; d\xe9marrage ; motDePasse ; nbUtilisations ; derni\xe8reUtilisation {; adh\xe9sions {; groupePropri\xe9taire}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-properties","permalink":"/docs/fr/commands/get-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-user-properties","title":"GET USER PROPERTIES","slug":"/commands/get-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER LIST","permalink":"/docs/fr/commands/get-user-list"},"next":{"title":"Is user deleted","permalink":"/docs/fr/commands/is-user-deleted"}}'),t=s("785893"),i=s("250065");let d={id:"get-user-properties",title:"GET USER PROPERTIES",slug:"/commands/get-user-properties",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET USER PROPERTIES"})," ( ",(0,t.jsx)(r.em,{children:"r\xe9fUtilisateur"})," ; ",(0,t.jsx)(r.em,{children:"nom"})," ; ",(0,t.jsx)(r.em,{children:"d\xe9marrage"})," ; ",(0,t.jsx)(r.em,{children:"motDePasse"})," ; ",(0,t.jsx)(r.em,{children:"nbUtilisations"})," ; ",(0,t.jsx)(r.em,{children:"derni\xe8reUtilisation"})," {; ",(0,t.jsx)(r.em,{children:"adh\xe9sions"})," {; ",(0,t.jsx)(r.em,{children:"groupePropri\xe9taire"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"r\xe9fUtilisateur"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique de l'utilisateur"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nom"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nom de l'utilisateur"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"d\xe9marrage"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nom de la m\xe9thode de d\xe9marrage"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"motDePasse"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"*** obsol\xe8te (cha\xeene vide)  ***"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nbUtilisations"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nombre d'utilisations de la base"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"derni\xe8reUtilisation"}),(0,t.jsx)(r.td,{children:"Date"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Date de la derni\xe8re utilisation de la base"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"adh\xe9sions"}),(0,t.jsx)(r.td,{children:"Integer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Num\xe9ros de r\xe9f\xe9rence des groupes auxquels l'utilisateur appartient"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupePropri\xe9taire"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence du groupe propri\xe9taire de l\u2019utilisateur"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET USER PROPERTIES"})," retourne les informations concernant l'utilisateur dont le num\xe9ro de r\xe9f\xe9rence est pass\xe9 dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"r\xe9fUtilisateur"}),". Vous devez passer le num\xe9ro de r\xe9f\xe9rence retourn\xe9 par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si le compte d'utilisateur n'existe pas ou a \xe9t\xe9 supprim\xe9, l'erreur -9979 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),". Sinon, vous pouvez appeler la fonction ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/is-user-deleted",children:"Is user deleted"})," pour tester le compte de l'utilisateur avant d'appeler ",(0,t.jsx)(r.strong,{children:"GET USER PROPERTIES"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Apr\xe8s l'appel, vous r\xe9cup\xe9rez le nom, la m\xe9thode de d\xe9marrage, le nombre d'utilisations et la date de la derni\xe8re utilisation de la base dans les param\xe8tres ",(0,t.jsx)(r.em,{children:"nom"}),", ",(0,t.jsx)(r.em,{children:"d\xe9marrage"}),", ",(0,t.jsx)(r.em,{children:"nbUtilisation"})," et ",(0,t.jsx)(r.em,{children:"derni\xe8reUtilisation"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Les param\xe8tres ",(0,t.jsx)(r.em,{children:"nbUtilisation"})," et derni\xe8reUtilisation sont utilis\xe9s uniquement dans les bases binaires. Ils retournent toujours, respectivement, 0 et 00/00/00 dans les bases projets."]}),"\n",(0,t.jsxs)(r.li,{children:["Le param\xe8tre ",(0,t.jsx)(r.em,{children:"motDePasse"})," est obsol\xe8te (il retourne toujours une cha\xeene vide). Si vous souhaitez contr\xf4ler le mot de passe d'un utilisateur, utilisez la fonction ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/validate-password",children:"Validate password"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"adh\xe9sion"}),", vous r\xe9cup\xe9rez le num\xe9ro de r\xe9f\xe9rence unique du groupe auquel l'utilisateur appartient."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Bases binaires uniquement)"})," Vous pouvez passer le param\xe8tre optionnel groupePropri\xe9taire pour lire le num\xe9ro de r\xe9f\xe9rence du groupe \"propri\xe9taire\" de l'utilisateur, c'est-\xe0-dire le groupe propri\xe9taire par d\xe9faut des objets cr\xe9\xe9s par cet utilisateur."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," Le tableau groupePropri\xe9taire retourne toujours la valeur 0 dans les bases projets."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note pour les bases binaires :"})," Les valeurs des r\xe9f\xe9rences des groupes et des utilisateurs sont fonction de la personne qui les cr\xe9e (Super Utilisateur, Administrateur, ou propri\xe9taire du groupe affili\xe9). Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(r.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(r.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler la commande ",(0,t.jsx)(r.strong,{children:"GET USER PROPERTIES"})," ou si le syst\xe8me de Mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/set-user-properties",children:"Set user properties"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/validate-password",children:"Validate password"})]}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"611"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifie les variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return l},a:function(){return d}});var n=s(667294);let t={},i=n.createContext(t);function d(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);