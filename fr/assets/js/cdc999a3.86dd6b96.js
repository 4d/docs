"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73131"],{415440:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/current-client-authentication","title":"Current client authentication","description":"Current client authentication {( domaine ; protocole )} : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/current-client-authentication.md","sourceDirName":"commands-legacy","slug":"/commands/current-client-authentication","permalink":"/docs/fr/commands/current-client-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-client-authentication.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-client-authentication","title":"Current client authentication","slug":"/commands/current-client-authentication","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count screens","permalink":"/docs/fr/commands/count-screens"},"next":{"title":"Current machine","permalink":"/docs/fr/commands/current-machine"}}'),r=t("785893"),s=t("250065");let d={id:"current-client-authentication",title:"Current client authentication",slug:"/commands/current-client-authentication",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Niveau de s\xe9curit\xe9 de l&#39;authentification",id:"niveau-de-s\xe9curit\xe9-de-lauthentification",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Current client authentication"})," {( ",(0,r.jsx)(n.em,{children:"domaine"})," ; ",(0,r.jsx)(n.em,{children:"protocole"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"domaine"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom du domaine"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"protocole"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:'"Kerberos", "NTLM" ou cha\xeene vide'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom d'utilisateur de session retourn\xe9 par Windows"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Current client authentication"})," envoie au serveur Active Directory de Windows une requ\xeate d'authentification du client courant et, en cas de succ\xe8s, retourne le nom d'utilisateur Windows de ce client (identifiant de session). Si l'authentification \xe9choue, une cha\xeene vide est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande peut \xeatre utilis\xe9e uniquement dans le contexte d'une impl\xe9mentation SSO sous Windows avec 4D Server. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,r.jsx)(n.em,{children:"Authentification unique (SSO) sous Windows"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["G\xe9n\xe9ralement, le client et le serveur doivent \xeatre g\xe9r\xe9s par le m\xeame serveur Active Directory. Cependant, des configurations sp\xe9cifiques peuvent \xeatre prises en charge, comme d\xe9crit dans le paragraphe ",(0,r.jsx)(n.em,{children:"Configuration requise pour le SSO"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"La cha\xeene retourn\xe9e par la commande doit \xeatre pass\xe9e \xe0 votre module d'identification 4D. Vous pouvez ainsi d\xe9terminer automatiquement les droits d'acc\xe8s du client en fonction de son identifiant de session Windows. Si vous d\xe9finissez un \"Utilisateur par d\xe9faut\", vous pouvez impl\xe9menter une interface dans laquelle l'utilisateur n'a pas de ressaisir son identifiant -- la bo\xeete de dialogue d'identification de l'utilisateur de 4D Server n'appara\xeet pas (voir exemple)."}),"\n",(0,r.jsx)(n.p,{children:"Optionnellement, la commande peut retourner deux param\xe8tres de type texte :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"domaine"})," : nom du domaine auquel appartient le client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"protocole"}),' : nom du protocole utilis\xe9 par Windows pour authentifier l\'utilisateur. Il peut contenir "Kerberos" ou "NTLM", en fonction des ressources disponibles. Si l\'authentification a \xe9chou\xe9, une cha\xeene vide ("") est retourn\xe9e.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ces param\xe8tres peuvent \xeatre utilis\xe9s pour accepter ou rejeter les connexions si vous souhaitez filtrer les acc\xe8s en fonction du domaine du client ou du protocole utilis\xe9."}),"\n",(0,r.jsx)(n.h5,{id:"niveau-de-s\xe9curit\xe9-de-lauthentification",children:"Niveau de s\xe9curit\xe9 de l'authentification"}),"\n",(0,r.jsxs)(n.p,{children:["Le niveau de s\xe9curit\xe9 de l'authentification (c'est-\xe0-dire le degr\xe9 de confiance que vous pouvez avoir dans le nom d'utilisateur r\xe9cup\xe9r\xe9 par la commande) d\xe9pend de la mani\xe8re dont l'utilisateur a \xe9t\xe9 identifi\xe9. Les valeurs retourn\xe9es dans les diff\xe9rents param\xe8tres de la commande ",(0,r.jsx)(n.strong,{children:"Current client authentication"})," vous permettent de savoir quelles informations ont \xe9t\xe9 utilis\xe9es pour l'identification et donc, le niveau de s\xe9curit\xe9 :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Nom d'utilisateur"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"domaine"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"protocole"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Commentaire"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vide"}),(0,r.jsx)(n.td,{children:"Vide"}),(0,r.jsx)(n.td,{children:"Vide"}),(0,r.jsx)(n.td,{children:"La commande n'a pas pu r\xe9cup\xe9rer d'information d'authentification relatives \xe0 l'utilisateur connect\xe9."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Valeur re\xe7ue"}),(0,r.jsx)(n.td,{children:"Vide"}),(0,r.jsx)(n.td,{children:"NTLM"}),(0,r.jsx)(n.td,{children:"La valeur re\xe7ue est le nom d'utilisateur local, d\xe9fini sur la machine locale."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Valeur re\xe7ue"}),(0,r.jsx)(n.td,{children:"Valeur re\xe7ue"}),(0,r.jsx)(n.td,{children:"NTLM"}),(0,r.jsxs)(n.td,{children:["Le nom d'utilisateur retourn\xe9 a \xe9t\xe9 authentifi\xe9 via le protocole NTLM dans le domaine retourn\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"domaine"}),". Dans ce cas, vous devez contr\xf4ler le domaine afin d'augmenter le niveau de s\xe9curit\xe9. Comme certaines architectures comportent une for\xeat de domaines, vous devez en particulier v\xe9rifier que le domaine dans lequel l'utilisateur a \xe9t\xe9 identifi\xe9 est bien le domaine souhait\xe9."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Valeur re\xe7ue"}),(0,r.jsx)(n.td,{children:"Valeur re\xe7ue"}),(0,r.jsx)(n.td,{children:"Kerberos"}),(0,r.jsx)(n.td,{children:"Le nom d'utilisateur retourn\xe9 a \xe9t\xe9 authentifi\xe9 avec le protocole Kerberos dans le domaine souhait\xe9. Cette configuration constitue le niveau de s\xe9curit\xe9 le plus \xe9lev\xe9."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Pour plus d'informations sur les configurations, veuillez vous reporter au paragraphe ",(0,r.jsx)(n.em,{children:"Configuration requise pour le SSO"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Dans votre base 4D Server, vous avez con\xe7u un syst\xe8me de contr\xf4le d'acc\xe8s bas\xe9 sur la fonctionnalit\xe9 des utilisateurs et des groupes de 4D. Vous souhaitez configurer votre application de mani\xe8re \xe0 ce que les utilisateurs 4D distants sous Windows puissent se connecter directement \xe0 4D Server (sans qu'aucune bo\xeete de dialogue de mot de passe ne s'affiche), tout en \xe9tant connect\xe9s avec leurs propres droits d'acc\xe8s."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:['Dans la page "S\xe9curit\xe9" de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base, d\xe9signez un "Utilisateur par d\xe9faut" :',(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:t(348392).Z+"",width:"472",height:"27"}),(0,r.jsx)(n.br,{}),"\nAvec ce param\xe9trage, aucune bo\xeete de dialogue d'identification n'est affich\xe9e pour les utilisateurs 4D distants qui se connectent au serveur -- tous les clients sont connect\xe9s par d\xe9faut en tant que \"Bob\"."]}),"\n",(0,r.jsxs)(n.li,{children:["Dans la ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),", ajoutez le code suivant afin d'authentifier l'utilisateur aupr\xe8s de l'Active Directory:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode base Sur ouverture connexion serveur\n\xa0var $0;$1;$2;$3 : Integer\n\xa0$login:=Current client authentication($domain;$protocol)\n\xa0If($login #\"\")\xa0//un nom d'utilisateur a bien \xe9t\xe9 retourn\xe9\n\xa0\xa0//appelez votre m\xe9thode d'identification personnalis\xe9e\n\xa0\xa0\xa0\xa0$0:=CheckCredentials($login)\n\xa0\xa0//elle doit retourner 0 en cas de succ\xe8s, -1 en cas d'erreur\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=-1\xa0//rejeter la connexion\n\xa0End if\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cet exemple constitue un sc\xe9nario de base, qui doit \xeatre adapt\xe9 \xe0 vos solutions. La m\xe9thode d'identification personnalis\xe9e de l'utilisateur 4D (CheckCredentials dans l'exemple ci-dessus) peut \xeatre bas\xe9e sur l'une des impl\xe9mentations suivantes :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"r\xe9plication de l'Active Directory dans les noms d'utilisateurs et groupes de 4D, permettant une correspondance automatique,"}),"\n",(0,r.jsx)(n.li,{children:"utilisation d'une table [Utilisateurs] personnalis\xe9e,"}),"\n",(0,r.jsx)(n.li,{children:"utilisation des fonctions LDAP afin de r\xe9cup\xe9rer les droits d'acc\xe8s de l'utilisateur."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1355"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},348392:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var i=t(667294);let r={},s=i.createContext(r);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);