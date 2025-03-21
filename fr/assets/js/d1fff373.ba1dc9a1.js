"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10529"],{4277:function(e,s,r){r.r(s),r.d(s,{default:()=>c,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/set-user-properties","title":"Set user properties","description":"Set user properties ( r\xe9fUtilisateur ; nom ; d\xe9marrage ; motDePasse ; nbUtilisations ; derni\xe8reUtilisation {; adh\xe9sions {; groupePropri\xe9taire}} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-user-properties","permalink":"/docs/fr/commands/set-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-user-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-user-properties","title":"Set user properties","slug":"/commands/set-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET USER ALIAS","permalink":"/docs/fr/commands/set-user-alias"},"next":{"title":"User in group","permalink":"/docs/fr/commands/user-in-group"}}'),t=r("785893"),i=r("250065");let d={id:"set-user-properties",title:"Set user properties",slug:"/commands/set-user-properties",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function u(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Set user properties"})," ( ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"})," ; ",(0,t.jsx)(s.em,{children:"nom"})," ; ",(0,t.jsx)(s.em,{children:"d\xe9marrage"})," ; ",(0,t.jsx)(s.em,{children:"motDePasse"})," ; ",(0,t.jsx)(s.em,{children:"nbUtilisations"})," ; ",(0,t.jsx)(s.em,{children:"derni\xe8reUtilisation"})," {; ",(0,t.jsx)(s.em,{children:"adh\xe9sions"})," {; ",(0,t.jsx)(s.em,{children:"groupePropri\xe9taire"}),"}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"r\xe9fUtilisateur"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique du compte de l'utilisateur ou -1 pour l'ajout d'un utilisateur affili\xe9 au Super_Utilisateur ou -2 pour l'ajout d'un utilisateur affili\xe9 \xe0 l'Administrateur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Unique ID number of added user account (if any)"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nom"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nouveau nom de l'utilisateur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"d\xe9marrage"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom de la nouvelle m\xe9thode de d\xe9marrage"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"motDePasse"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nouveau mot de passe (non crypt\xe9) ou * pour ne pas modifier le mot de passe"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nbUtilisations"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nouveau nombre d'utilisations de la base"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"derni\xe8reUtilisation"}),(0,t.jsx)(s.td,{children:"Date"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nouvelle date de derni\xe8re utilisation de la base"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"adh\xe9sions"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ros de r\xe9f\xe9rence des groupes auxquels l'utilisateur appartient"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"groupePropri\xe9taire"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence du groupe propri\xe9taire de l\u2019utilisateur"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence unique du nouvel utilisateur"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Set user properties"})," vous permet de modifier et de mettre \xe0 jour les propri\xe9t\xe9s d'un compte actif d'utilisateur existant dont le num\xe9ro de r\xe9f\xe9rence est pass\xe9 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"}),", ou d'ajouter un nouvel utilisateur."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous modifiez les propri\xe9t\xe9s d'un utilisateur existant, vous devez passer le num\xe9ro de r\xe9f\xe9rence qui vous est renvoy\xe9 par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Pour ajouter un nouvel utilisateur, il faut passer -1 \xe0 ",(0,t.jsx)(s.em,{children:"r\xe9fUtilisateur"})," (voir les notes ci-dessous pour les bases binaires)."]}),"\n",(0,t.jsxs)(s.p,{children:["Si l'utilisateur a bien \xe9t\xe9 cr\xe9\xe9 ou modifi\xe9, ",(0,t.jsx)(s.strong,{children:"Set user properties"})," retourne son num\xe9ro de r\xe9f\xe9rence unique d'utilisateur.",(0,t.jsx)(s.br,{}),"\nSi vous ne passez pas un num\xe9ro de r\xe9f\xe9rence d'utilisateur valide, ",(0,t.jsx)(s.strong,{children:"Set user properties"})," ne fait rien et retourne 0."]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous appelez cette commande, vous passez le nouveau nom, la nouvelle m\xe9thode de d\xe9marrage, le nouveau mot de passe, le nouveau nombre d'utilisations et la nouvelle date de derni\xe8re utilisation pour l'utilisateur dans les param\xe8tres ",(0,t.jsx)(s.em,{children:"nom"}),", ",(0,t.jsx)(s.em,{children:"d\xe9marrage"}),", ",(0,t.jsx)(s.em,{children:"motDePasse"}),", ",(0,t.jsx)(s.em,{children:"nbUtilisation"})," et ",(0,t.jsx)(s.em,{children:"derni\xe8reUtilisation"}),". Vous passez un mot de passe non crypt\xe9 dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"motDePasse"}),". 4D cryptera ce mot de passe avant de le sauvegarder dans le compte de l'utilisateur.",(0,t.jsx)(s.br,{}),"\nSi le nouveau nom d'utilisateur pass\xe9 dans ",(0,t.jsx)(s.em,{children:"nom"})," n'est pas unique (un utilisateur de m\xeame nom existe d\xe9j\xe0), la commande ne fait rien et l'erreur -9979 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Les param\xe8tres ",(0,t.jsx)(s.em,{children:"nbUtilisation"})," et ",(0,t.jsx)(s.em,{children:"derni\xe8reUtilisation"})," sont utilis\xe9s uniquement dans les bases binaires. lls sont ignor\xe9s dans les bases projets."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne voulez pas modifier toutes les propri\xe9t\xe9s de l'utilisateur (\xe0 part son groupe, voir ci-dessous), appelez au pr\xe9alable ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"})," et passez les valeurs retourn\xe9es dans celles que vous ne voulez pas modifier. Si vous ne voulez pas modifier le mot de passe de l'utilisateur, passez * dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"motDePasse"}),". Cela vous permet de changer les autres propri\xe9t\xe9s du compte de l\u2019utilisateur, sans changer le mot de passe de ce compte."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"adh\xe9sions"}),", les adh\xe9sions de l'utilisateur restent inchang\xe9es. Si vous ne passez pas ce param\xe8tre en cas d'ajout d'un utilisateur, il ne fera partie d'aucun groupe."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"adh\xe9sions"}),", vous modifiez toutes les adh\xe9sions pour l'utilisateur. Avant d'appeler cette commande, vous devez remplir le tableau ",(0,t.jsx)(s.em,{children:"adh\xe9sions"})," avec les num\xe9ros de r\xe9f\xe9rence uniques des groupes dont l'utilisateur devra faire partie."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"(Bases binaires uniquement)"})," Si vous passez le param\xe8tre facultatif ",(0,t.jsx)(s.em,{children:"groupePropri\xe9taire"}),", vous indiquez le num\xe9ro de r\xe9f\xe9rence du groupe \u201Cpropri\xe9taire\u201D de l\u2019utilisateur, c\u2019est-\xe0-dire le groupe propri\xe9taire par d\xe9faut des objets cr\xe9\xe9s par cet utilisateur. Pour annuler les adh\xe9sions d'un utilisateur, passez un tableau vide dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"adh\xe9sion"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Notes pour les bases binaires :"})," Les valeurs des r\xe9f\xe9rences des groupes et des utilisateurs sont fonction de la personne qui les cr\xe9e (Super Utilisateur, Administrateur, ou propri\xe9taire du groupe affili\xe9). Pour plus d'informations, veuillez consulter le paragraphe ",(0,t.jsx)(s.em,{children:"Plages de r\xe9f\xe9rences des groupes et des utilisateurs"}),". Si vous voulez ajouter un nouvel utilisateur affili\xe9 au Super_Utilisateur, passez -1 dans r\xe9fUtilisateur. Si vous voulez ajouter un nouvel utilisateur affili\xe9 \xe0 l'Administrateur, passez -2 dans r\xe9fUtilisateur."]}),"\n",(0,t.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous n'avez pas les privil\xe8ges d'acc\xe8s pour appeler ",(0,t.jsx)(s.strong,{children:"Set user properties"})," ou si le syst\xe8me de mots de passe est d\xe9j\xe0 ouvert par un autre process, une erreur de privil\xe8ge d'acc\xe8s est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs install\xe9e par ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/delete-user",children:"DELETE USER"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/validate-password",children:"Validate password"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"612"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);