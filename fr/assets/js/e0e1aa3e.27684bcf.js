"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77684"],{374473:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/ldap-login","title":"LDAP LOGIN","description":"LDAP LOGIN ( url ; login ; motDePasse {; digest} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ldap-login.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-login","permalink":"/docs/fr/commands/ldap-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-login.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ldap-login","title":"LDAP LOGIN","slug":"/commands/ldap-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/docs/fr/category/ldap"},"next":{"title":"LDAP LOGOUT","permalink":"/docs/fr/commands/ldap-logout"}}'),t=s("785893"),i=s("250065");let d={id:"ldap-login",title:"LDAP LOGIN",slug:"/commands/ldap-login",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LDAP LOGIN"})," ( ",(0,t.jsx)(n.em,{children:"url"})," ; ",(0,t.jsx)(n.em,{children:"login"})," ; ",(0,t.jsx)(n.em,{children:"motDePasse"})," {; ",(0,t.jsx)(n.em,{children:"digest"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"URL du serveur LDAP auquel se connecter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"login"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Compte de l'utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"motDePasse"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mot de passe de l\u2019utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"digest"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0 = envoyer mot de passe en digest MD5 (d\xe9faut), 1 = envoyer mot de passe sans encryptage"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LDAP LOGIN"})," ouvre une connexion en lecture seule sur le serveur LDAP d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(n.em,{children:"url"})," avec les identifiants ",(0,t.jsx)(n.em,{children:"login"})," et ",(0,t.jsx)(n.em,{children:"motDePasse"})," fournis. Si elle est accept\xe9e par le serveur, cette connexion sera utilis\xe9e pour toutes les recherches LDAP effectu\xe9es par la suite dans le process courant, jusqu'\xe0 ce que la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ldap-logout",children:"LDAP LOGOUT"})," soit ex\xe9cut\xe9e (ou que le process soit termin\xe9)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"url"}),", passez l'URL complet du serveur LDAP auquel se connecter, incluant le ",(0,t.jsx)(n.em,{children:"scheme"})," et le port (389 by default). Ce param\xe8tre doit \xeatre conforme \xe0 la ",(0,t.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2255.txt",children:"rfc2255"}),".",(0,t.jsx)(n.br,{}),"\nVous pouvez ouvrir une connexion s\xe9curis\xe9e via TLS en passant un ",(0,t.jsx)(n.em,{children:"url"}),' qui d\xe9bute par "ldaps" et qui utilise un num\xe9ro de port sp\xe9cifique (par exemple "ldaps://svr.ldap.acme.com:1389"). Le serveur LDAP doit g\xe9n\xe9ralement disposer d\'un certificat SSL (c\'est le cas pour MS Active Directory). Il est fortement recommand\xe9 d\'utiliser une connexion TLS lorsque le mot de passe est transmis en texte brut (voir ci-dessous).']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez une cha\xeene vide dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"url"}),", la commande tentera de se connecter au serveur LDAP par d\xe9faut disponible sur le domaine (cette fonction est destin\xe9e uniquement aux besoins li\xe9s aux tests, pour des raisons de performances elle ne doit pas \xeatre utilis\xe9e en production)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"login"}),", passez le compte utilisateur sur le serveur LDAP et dans ",(0,t.jsx)(n.em,{children:"motDePasse"}),", passez le mot de passe du compte. Le ",(0,t.jsx)(n.em,{children:"login"})," peut prendre l'une des formes suivantes, en fonction de la configuration du serveur LDAP :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'un Distinguished Name (DN), par exemple "CN=John Smith,OU=users,DC=example,DC=com"'}),"\n",(0,t.jsx)(n.li,{children:'un nom d\'utilisateur (CN), par exemple "CN=John Smith"'}),"\n",(0,t.jsxs)(n.li,{children:['une adresse email, par exemple "',(0,t.jsx)(n.a,{href:"mailto:johnsmith@4d.fr",children:"johnsmith@4d.fr"}),'"']}),"\n",(0,t.jsx)(n.li,{children:'un SAM-Account-Name, par exemple "jsmith".'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Notez que les valeurs admises pour le ",(0,t.jsx)(n.em,{children:"login"})," sont li\xe9es au mode de transmission du mot de passe, d\xe9fini par le param\xe8tre ",(0,t.jsx)(n.em,{children:"digest"}),". Par exemple, dans une configuration par d\xe9faut de MS Active Directory :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lorsque le mode de transmission est LDAP password MD5, la seule valeur accept\xe9e pour une connexion utilisateur est le SAM-Account-Name."}),"\n",(0,t.jsxs)(n.li,{children:["Lorsque le mode de transmission est LDAP password plain text (texte brut), le param\xe8tre ",(0,t.jsx)(n.em,{children:"login"}),' peut contenir soit un DN, un CN ou une adresse email. Un SAM-Account-Name peut \xeatre utilis\xe9 s\'il est pr\xe9c\xe9d\xe9 du nom de domaine (par exemple "dc-acme.com/jsmith").']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"digest"}),' vous permet de modifier le mode de transmission du mot de passe sur le r\xe9seau. Vous pouvez utiliser une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"LDAP"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LDAP password MD5"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"(D\xe9faut) Envoi du mot de passe encrypt\xe9 en MD5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LDAP password plain text"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Envoi du mot de passe sans encryptage (connexion TLS recommand\xe9e)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, le ",(0,t.jsx)(n.em,{children:"motDePasse"})," est transmis en digest MD5. Passez LDAP password plain text si n\xe9cessaire, par exemple si vous voulez utiliser des cha\xeene de ",(0,t.jsx)(n.em,{children:"login"})," diff\xe9rentes avec le serveur LDAP. Dans un environnement de production, il est fortement recommand\xe9 dans ce cas de recourir \xe0 une connexion TLS dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," L'authentification avec un mot de passe vide vous permet d'activer le mode de connexion anonyme (s'il est autoris\xe9 par le serveur LDAP). Cependant, des erreurs pourront \xeatre g\xe9n\xe9r\xe9es si vous essayez d'effectuer des op\xe9rations non autoris\xe9es dans ce mode sp\xe9cifique."]}),"\n",(0,t.jsx)(n.p,{children:"Si les param\xe8tres de connexion sont valides, une connexion au serveur LDAP est ouverte dans le process 4D. Vous pouvez alors rechercher et r\xe9cup\xe9rer des informations \xe0 l'aide des commandes LDAP."}),"\n",(0,t.jsxs)(n.p,{children:["N'oubliez pas d'appeler la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ldap-logout",children:"LDAP LOGOUT"})," lorsque la connexion au serveur LDAP n'est plus n\xe9cessaire."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous voulez vous connecter \xe0 un serveur LDAP et effectuer une recherche :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")\n\xa0$vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";\u201Dcn=John Doe";LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\xa0//ne pas oublier de se d\xe9connecter\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple tente de se connecter \xe0 une application :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ON ERR CALL("ErrHdlr")\xa0//gestion d\'erreurs\n\xa0errOccured:=False\n\xa0errMsg:=""\n\xa0If(ppBindMode=1)\xa0//si mot de passe transmis en mode par d\xe9faut\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)\n\xa0Else\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)\n\xa0End if\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not(errOccurred))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Vous \xeates connect\xe9 au serveur LDAP. ")\n\xa0\n\xa0\xa0\xa0\xa0:(errOccurred)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Erreurs dans les param\xe8tres")\n\xa0End case\n\xa0\n\xa0LDAP LOGOUT\n\xa0ON ERR CALL("")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"LDAP"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ldap-logout",children:"LDAP LOGOUT"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1326"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);