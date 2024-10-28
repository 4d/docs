"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54766],{612592:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var s=r(474848),t=r(28453);const i={id:"user-in-group",title:"User in group",slug:"/commands/user-in-group",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/user-in-group",title:"User in group",description:"User in group ( nomUtilisateur ; groupe ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/user-in-group.md",sourceDirName:"commands-legacy",slug:"/commands/user-in-group",permalink:"/docs/fr/commands/user-in-group",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuser-in-group.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"user-in-group",title:"User in group",slug:"/commands/user-in-group",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Set user properties",permalink:"/docs/fr/commands/set-user-properties"},next:{title:"USERS TO BLOB",permalink:"/docs/fr/commands/users-to-blob"}},a={},u=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User in group"})," ( ",(0,s.jsx)(n.em,{children:"nomUtilisateur"})," ; ",(0,s.jsx)(n.em,{children:"groupe"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomUtilisateur"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom de l'utilisateur (compte)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"groupe"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom du groupe"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai = utilisateur est dans groupe Faux = utilisateur n'est pas dans groupe"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La fonction ",(0,s.jsx)(n.strong,{children:"User in group"})," retourne Vrai si ",(0,s.jsx)(n.em,{children:"nomUtilisateur"})," appartient au ",(0,s.jsx)(n.em,{children:"groupe"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande attend comme param\xe8tre ",(0,s.jsx)(n.em,{children:"nomUtilisateur"})," un nom de compte utilisateur (elle ne prend pas en charge les alias d'utilisateurs). Si vous avez d\xe9fini des alias d'utilisateurs dans votre application, passez le param\xe8tre 4D user account \xe0 la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/current-user",children:"Current user"})," pour vous assurer qu'elle retourne un nom de compte utilisateur (voir exemple)."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant recherche des factures. Si l'utilisateur courant est dans le groupe Administration, il pourra acc\xe9der aux formulaires qui affichent des informations confidentielles. Sinon, des formulaires standard sont affich\xe9s :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Factures];[Factures]Prix>100)\n\xa0If(User in group(Current user(4D user account);"Administration"))\n\xa0\xa0//Le param\xe8tre Compte utilisateur 4D\xa0est n\xe9cessaire si vous\n\xa0\xa0//utilisez des alias d\'utilisateurs 4D dans votre application\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"Confidentiel_Sortie")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Factures];"Conf_Saisie")\n\xa0Else\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Factures];"Sortie_Standard")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Factures];"Entr\xe9e_Standard")\n\xa0End if\n\xa0MODIFY SELECTION([Factures];*)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/current-user",children:"Current user"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(296540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);