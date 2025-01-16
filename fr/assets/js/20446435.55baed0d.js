"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77618"],{678116:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/user-in-group","title":"User in group","description":"User in group ( nomUtilisateur ; groupe ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/user-in-group.md","sourceDirName":"commands-legacy","slug":"/commands/user-in-group","permalink":"/docs/fr/commands/user-in-group","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuser-in-group.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"user-in-group","title":"User in group","slug":"/commands/user-in-group","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set user properties","permalink":"/docs/fr/commands/set-user-properties"},"next":{"title":"USERS TO BLOB","permalink":"/docs/fr/commands/users-to-blob"}}'),t=r("785893"),i=r("250065");let d={id:"user-in-group",title:"User in group",slug:"/commands/user-in-group",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User in group"})," ( ",(0,t.jsx)(n.em,{children:"nomUtilisateur"})," ; ",(0,t.jsx)(n.em,{children:"groupe"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomUtilisateur"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'utilisateur (compte)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupe"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du groupe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai = utilisateur est dans groupe Faux = utilisateur n'est pas dans groupe"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"User in group"})," retourne Vrai si ",(0,t.jsx)(n.em,{children:"nomUtilisateur"})," appartient au ",(0,t.jsx)(n.em,{children:"groupe"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande attend comme param\xe8tre ",(0,t.jsx)(n.em,{children:"nomUtilisateur"})," un nom de compte utilisateur (elle ne prend pas en charge les alias d'utilisateurs). Si vous avez d\xe9fini des alias d'utilisateurs dans votre application, passez le param\xe8tre 4D user account \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/current-user",children:"Current user"})," pour vous assurer qu'elle retourne un nom de compte utilisateur (voir exemple)."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant recherche des factures. Si l'utilisateur courant est dans le groupe Administration, il pourra acc\xe9der aux formulaires qui affichent des informations confidentielles. Sinon, des formulaires standard sont affich\xe9s :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Factures];[Factures]Prix>100)\n\xa0If(User in group(Current user(4D user account);"Administration"))\n\xa0\xa0//Le param\xe8tre Compte utilisateur 4D\xa0est n\xe9cessaire si vous\n\xa0\xa0//utilisez des alias d\'utilisateurs 4D dans votre application\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"Confidentiel_Sortie")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Factures];"Conf_Saisie")\n\xa0Else\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"Sortie_Standard")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Factures];"Entr\xe9e_Standard")\n\xa0End if\n\xa0MODIFY SELECTION([Factures];*)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/current-user",children:"Current user"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"338"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);