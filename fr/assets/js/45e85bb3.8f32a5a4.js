"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51708"],{14578:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/blob-to-users","title":"BLOB TO USERS","description":"BLOB TO USERS ( utilisateurs )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-users.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-users","permalink":"/docs/fr/20-R7/commands/blob-to-users","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-users.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-users","title":"BLOB TO USERS","slug":"/commands/blob-to-users","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Utilisateurs et groupes","permalink":"/docs/fr/20-R7/commands/theme/Users-and-Groups"},"next":{"title":"CHANGE CURRENT USER","permalink":"/docs/fr/20-R7/commands/change-current-user"}}'),r=n("785893"),i=n("250065");let l={id:"blob-to-users",title:"BLOB TO USERS",slug:"/commands/blob-to-users",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"BLOB TO USERS"})," ( ",(0,r.jsx)(s.em,{children:"utilisateurs"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"utilisateurs"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"BLOB (crypt\xe9) contenant des comptes utilisateurs cr\xe9\xe9s et sauvegard\xe9s par l'Administrateur"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"BLOB TO USERS"})," remplace les comptes utilisateurs et les groupes pr\xe9sents dans le BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"})," dans la base courante. Le BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"})," est crypt\xe9 et doit imp\xe9rativement avoir \xe9t\xe9 cr\xe9\xe9 par la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/users-to-blob",children:"USERS TO BLOB"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Seuls l\u2019Administrateur et le Super_Utilisateur de la base peuvent ex\xe9cuter cette commande. Si un autre utilisateur tente de l\u2019ex\xe9cuter, la commande ne fait rien et une erreur de privil\xe8ge (-9949) est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(s.p,{children:"Les cons\xe9quences de cette commande sont diff\xe9rentes, selon qu'elle est ex\xe9cut\xe9e depuis une base binaire ou une base projet :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Base projet"})}),"\n",(0,r.jsxs)(s.p,{children:["Cette commande est utilis\xe9e \xe0 des fins de compatibilit\xe9, pour d\xe9placer les utilisateurs et groupes sauvegard\xe9s ant\xe9rieurement d'un fichier BLOB vers le fichier ",(0,r.jsx)(s.em,{children:"directory.json"})," de la base. Tous les utilisateurs et groupes d\xe9j\xe0 d\xe9finis dans le fichier ",(0,r.jsx)(s.em,{children:"directory.json"})," sont remplac\xe9s par le contenu du BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"}),', \xe0 l\'exception du "Super_Utilisateur" et de l\'"Administrateur".']}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Base binaire"})}),"\n",(0,r.jsxs)(s.p,{children:["Cette commande provoque le remplacement des comptes et groupes cr\xe9\xe9s par l'Administrateur \xe9ventuellement existant dans la base. Si le BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"})," contient des donn\xe9es valide, la commande effectue les op\xe9rations suivantes :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"tous les groupes et utilisateurs d\xe9finis dans la base dont le num\xe9ro de r\xe9f\xe9rence est n\xe9gatif (groupes et utilisateurs cr\xe9\xe9s par l'Administrateur) sont supprim\xe9s de la structure,"}),"\n",(0,r.jsxs)(s.li,{children:["tous les groupes et utilisateurs pr\xe9sents dans le BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"})," sont ajout\xe9s dans la structure."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," Les fichiers d\u2019utilisateurs et groupes (extension .4UG) cr\xe9\xe9s par la commande de menu ",(0,r.jsx)(s.strong,{children:"Enregistrer les groupes & utilisateurs..."})," dans une version de 4D ant\xe9rieure peuvent \xeatre charg\xe9s dans 4D via ces instructions (une version trop ancienne peut toutefois n\xe9cessiter de passer par des versions interm\xe9diaires) :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0DOCUMENT TO BLOB(mondoc;blob)\n\xa0BLOB TO USERS(blob)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"Si la commande est ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/users-to-blob",children:"USERS TO BLOB"})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"850"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifie les variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var t=n(667294);let r={},i=t.createContext(r);function l(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);