"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63894"],{653221:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>u,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/set-group-properties","title":"Set group properties","description":"Set group properties ( r\xe9fGroupe ; nom ; propri\xe9taire {; membres} )  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-properties","permalink":"/docs/fr/commands/set-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-properties.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-group-properties","title":"Set group properties","slug":"/commands/set-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET GROUP ACCESS","permalink":"/docs/fr/commands/set-group-access"},"next":{"title":"SET PLUGIN ACCESS","permalink":"/docs/fr/commands/set-plugin-access"}}'),t=s("785893"),i=s("250065");let o={id:"set-group-properties",title:"Set group properties",slug:"/commands/set-group-properties",displayed_sidebar:"docs"},d=void 0,u={},l=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Set group properties"})," ( ",(0,t.jsx)(r.em,{children:"r\xe9fGroupe"})," ; ",(0,t.jsx)(r.em,{children:"nom"})," ; ",(0,t.jsx)(r.em,{children:"propri\xe9taire"})," {; ",(0,t.jsx)(r.em,{children:"membres"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"r\xe9fGroupe"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique du groupe activ\xe9 ou -1 pour ajouter un groupe de Super_Utilisateur -2 pour ajouter un groupe d'Administrateur"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Unique ID number of added group (if any)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nom"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nouveau nom de groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"propri\xe9taire"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique de l'utilisateur ou le propri\xe9taire du nouveau groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"membres"}),(0,t.jsx)(r.td,{children:"Integer array"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nouveaux membres du groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"R\xe9sultat"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique du nouveau groupe"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Set group properties"})," vous permet de modifier et de mettre \xe0 jour les propri\xe9t\xe9s d'un groupe existant dont vous passez le num\xe9ro de r\xe9f\xe9rence unique dans ",(0,t.jsx)(r.em,{children:"r\xe9fGroupe"}),", ou d'ajouter un nouveau groupe."]}),"\n",(0,t.jsxs)(r.p,{children:["Pour modifier les propri\xe9t\xe9s d'un groupe existant, vous devez passer son num\xe9ro de r\xe9f\xe9rence tel que retourn\xe9 dans la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous voulez ajouter un nouveau groupe, passez -1 dans ",(0,t.jsx)(r.em,{children:"r\xe9fGroupe"})," (voir \xe9galement la note ci-dessous pour les bases binaires)."]}),"\n",(0,t.jsx)(r.p,{children:"Si le groupe a bien \xe9t\xe9 cr\xe9\xe9, son num\xe9ro de r\xe9f\xe9rence unique est retourn\xe9 dans r\xe9fGroupe."}),"\n",(0,t.jsxs)(r.p,{children:["Si vous ne passez pas -1, -2 ou un num\xe9ro de r\xe9f\xe9rence de groupe valide dans r\xe9fGroupe, ",(0,t.jsx)(r.strong,{children:"Set group properties"})," ne fait rien et retourne 0."]}),"\n",(0,t.jsxs)(r.p,{children:["Passez le nouveau nom du groupe dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"nom"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Bases binaires uniquement) :"})," Passez le num\xe9ro de r\xe9f\xe9rence du nouveau propri\xe9taire du groupe dans le param\xe8tre propri\xe9taire. Ce param\xe8tre est ignor\xe9 dans les bases projets."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous ne voulez pas modifier toutes les propri\xe9t\xe9s du groupe (\xe0 part ses membres, voir ci-dessous), passez les valeurs retourn\xe9es par ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-properties",children:"GET GROUP PROPERTIES"})," dans les param\xe8tres que vous voulez laisser inchang\xe9s."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"membres"}),", la liste courante des membres du groupe reste inchang\xe9e. Si vous ne le faites pas lors d'une cr\xe9ation d'un groupe, le groupe n'aura pas de membres."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"membres"}),", vous modifiez toute la liste des membres pour ce groupe. Avant d'appeler cette routine, vous devez remplir le tableau ",(0,t.jsx)(r.em,{children:"membres"})," avec les num\xe9ros de r\xe9f\xe9rence uniques des utilisateurs et des groupes devant appartenir au groupe."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous voulez enlever tous les membres d'un groupe, passez un tableau vide dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"membres"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes pour les bases binaires :"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Les valeurs des r\xe9f\xe9rences des groupes et des utilisateurs sont fonction de la personne qui les cr\xe9e (Super Utilisateur, Administrateur, ou propri\xe9taire du groupe affili\xe9). Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(r.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),". Si vous voulez ajouter un groupe affili\xe9 au Super_Utilisateur, il faut passer -1 \xe0 r\xe9fGroupe. Si vous voulez ajouter un groupe affili\xe9 \xe0 l'Administrateur, il faut passer -2 \xe0 r\xe9fGroupe."]}),"\n",(0,t.jsxs)(r.li,{children:["Le propri\xe9taire d'un groupe n'est pas automatiquement d\xe9fini comme membre du groupe qu'il poss\xe8de. C'est \xe0 vous de l'y inclure explicitement, \xe0 l'aide du param\xe8tre ",(0,t.jsx)(r.em,{children:"membres"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(r.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler la commande ",(0,t.jsx)(r.strong,{children:"Set group properties"})," ou si le syst\xe8me de mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"})]}),"\n",(0,t.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"614"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifie les variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return o}});var n=s(667294);let t={},i=n.createContext(t);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);