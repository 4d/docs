"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50459"],{411632:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-user-list","title":"GET USER LIST","description":"GET USER LIST ( nomsUtil ; r\xe9fUtil )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-user-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-list","permalink":"/docs/fr/commands/get-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-user-list","title":"GET USER LIST","slug":"/commands/get-user-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get plugin access","permalink":"/docs/fr/commands/get-plugin-access"},"next":{"title":"GET USER PROPERTIES","permalink":"/docs/fr/commands/get-user-properties"}}'),t=r("785893"),i=r("250065");let d={id:"get-user-list",title:"GET USER LIST",slug:"/commands/get-user-list",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET USER LIST"})," ( ",(0,t.jsx)(s.em,{children:"nomsUtil"})," ; ",(0,t.jsx)(s.em,{children:"r\xe9fUtil"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nomsUtil"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Noms des utilisateurs tels qu'ils apparaissent dans l'\xe9diteur de Mots de passe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"r\xe9fUtil"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Num\xe9ros de r\xe9f\xe9rence uniques pour chaque utilisateur"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"GET USER LIST"})," remplit les tableaux ",(0,t.jsx)(s.em,{children:"nomsUtil"})," et ",(0,t.jsx)(s.em,{children:"r\xe9fsUtil"})," avec les noms et les num\xe9ros de r\xe9f\xe9rence uniques des utilisateurs tels qu'ils apparaissent dans la fen\xeatre des Mots de passe de 4D."]}),"\n",(0,t.jsxs)(s.p,{children:["Le tableau ",(0,t.jsx)(s.em,{children:"nomsUtil"})," est rempli avec les noms des utilisateurs, y compris ceux dont le compte est supprim\xe9 (les utilisateurs dont le nom appara\xeet en vert dans la fen\xeatre des mots de passe)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Utilisez la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/is-user-deleted",children:"Is user deleted"})," pour savoir si un compte utilisateur est supprim\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Le tableau ",(0,t.jsx)(s.em,{children:"r\xe9fsUtil"}),", synchronis\xe9 avec ",(0,t.jsx)(s.em,{children:"nomsUtil"}),", est rempli avec les num\xe9ros de r\xe9f\xe9rence uniques des utilisateurs."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note concernant les bases binaires :"})," Les valeurs des r\xe9f\xe9rences des groupes et utilisateurs d\xe9pendent de la personne qui les cr\xe9e (Super utilisateur, Administrateur ou propri\xe9taire du goupe affili\xe9). Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(s.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler la commande ",(0,t.jsx)(s.strong,{children:"GET USER LIST"})," ou si le syst\xe8me des Mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"609"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);