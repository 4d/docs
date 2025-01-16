"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7599"],{582131:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/get-group-properties","title":"GET GROUP PROPERTIES","description":"GET GROUP PROPERTIES ( r\xe9fGroupe ; nom ; propri\xe9taire {; membres} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-properties","permalink":"/docs/fr/commands/get-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-properties","title":"GET GROUP PROPERTIES","slug":"/commands/get-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP LIST","permalink":"/docs/fr/commands/get-group-list"},"next":{"title":"Get plugin access","permalink":"/docs/fr/commands/get-plugin-access"}}'),t=s("785893"),i=s("250065");let d={id:"get-group-properties",title:"GET GROUP PROPERTIES",slug:"/commands/get-group-properties",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," ( ",(0,t.jsx)(r.em,{children:"r\xe9fGroupe"})," ; ",(0,t.jsx)(r.em,{children:"nom"})," ; ",(0,t.jsx)(r.em,{children:"propri\xe9taire"})," {; ",(0,t.jsx)(r.em,{children:"membres"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"r\xe9fGroupe"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence du groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nom"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nom du groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"propri\xe9taire"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence du propri\xe9taire du groupe"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"membres"}),(0,t.jsx)(r.td,{children:"Integer array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Membres du groupe"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," retourne les propri\xe9t\xe9s du groupe dont le num\xe9ro de r\xe9f\xe9rence est pass\xe9 dans ",(0,t.jsx)(r.em,{children:"r\xe9fGroupe"}),". Vous passez le num\xe9ro de r\xe9f\xe9rence du groupe retourn\xe9 par la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous ne passez pas un num\xe9ro de r\xe9f\xe9rence valide, ",(0,t.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," renvoie des param\xe8tres vides."]}),"\n",(0,t.jsxs)(r.p,{children:["Apr\xe8s l'appel de la commande, vous r\xe9cup\xe9rez le nom du groupe dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"nom"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Bases binaires uniquement)"})," Le propri\xe9taire du groupe est retourn\xe9 dans le param\xe8tre propri\xe9taire. Ce param\xe8tre retourne toujours 0 dans les bases projets."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"membres"}),", ce tableau contiendra les num\xe9ros de r\xe9f\xe9rence uniques des utilisateurs qui appartiennent au groupe."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note pour les bases binaires :"})," Les valeurs des r\xe9f\xe9rences des groupes et des utilisateurs sont fonction de la personne qui les cr\xe9e (Super Utilisateur, Administrateur, ou propri\xe9taire du groupe affili\xe9). Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(r.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(r.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler la commande ",(0,t.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," ou si le syst\xe8me de Mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"613"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifie les variables"}),(0,t.jsx)(r.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return d}});var n=s(667294);let t={},i=n.createContext(t);function d(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);