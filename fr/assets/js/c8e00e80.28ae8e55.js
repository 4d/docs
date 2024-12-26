"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25037"],{136379:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/on-sql-authentication-database-method","title":"On SQL Authentication database method","description":"$1, $2, $3 -> On SQL Authentication database method -> $0","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-sql-authentication-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-sql-authentication-database-method","permalink":"/docs/fr/commands/on-sql-authentication-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-sql-authentication-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-sql-authentication-database-method","title":"On SQL Authentication database method","slug":"/commands/on-sql-authentication-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Startup database method","permalink":"/docs/fr/commands/on-server-startup-database-method"},"next":{"title":"On Startup database method","permalink":"/docs/fr/commands/on-startup-database-method"}}'),a=t("785893"),r=t("250065");let d={id:"on-sql-authentication-database-method",title:"On SQL Authentication database method",slug:"/commands/on-sql-authentication-database-method",displayed_sidebar:"docs"},i=void 0,o={},l=[];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"$1, $2, $3 -> On SQL Authentication database method -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nom d\u2019utilisateur"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Mot de passe"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"(Facultatif) Adresse IP du client \xe0 l\u2019origine de la requ\xeate"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$0"}),(0,a.jsx)(n.td,{children:"Bool\xe9en"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Vrai = requ\xeate accept\xe9e, Faux = requ\xeate rejet\xe9e"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:""}),"\n",(0,a.jsxs)(n.p,{children:["La ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," permet de filtrer les requ\xeates adress\xe9es au serveur SQL int\xe9gr\xe9 de 4D. Le filtrage peut \xeatre effectu\xe9 sur la base du nom, du mot de passe ainsi que (facultativement) de l\u2019adresse IP de l\u2019utilisateur. Le d\xe9veloppeur peut utiliser sa propre table d\u2019utilisateurs ou celle des utilisateurs 4D pour \xe9valuer les identifiants de connexion. Une fois la connexion authentifi\xe9e, la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"})," doit \xeatre appel\xe9e afin de contr\xf4ler les acc\xe8s de la requ\xeate au sein de la base 4D."]}),"\n",(0,a.jsxs)(n.p,{children:["Lorsqu\u2019elle existe, la ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," est automatiquement appel\xe9e par 4D ou 4D Server \xe0 chaque connexion externe au serveur SQL. Le syst\xe8me interne de gestion des utilisateurs de 4D n\u2019est alors pas sollicit\xe9. La connexion n'est accept\xe9e que si la m\xe9thode base retourne ",(0,a.jsx)(n.strong,{children:"Vrai"})," dans $0 et si la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"})," a \xe9t\xe9 ex\xe9cut\xe9e avec succ\xe8s. Si l'une des deux conditions n'est pas remplie, la requ\xeate est rejet\xe9e."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," L\u2019instruction ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/sql-login",children:"SQL LOGIN"}),"(SQL_INTERNAL;$utilisateur;$motdepasse) ne d\xe9clenche pas l\u2019appel de la ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," car il s\u2019agit dans ce cas d\u2019une connexion interne."]}),"\n",(0,a.jsx)(n.p,{children:"La m\xe9thode base re\xe7oit jusqu\u2019\xe0 trois param\xe8tres de type Texte, pass\xe9s par 4D ($1, $2 et $3), et retourne un bool\xe9en, $0. Voici la description de ces param\xe8tres :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Param\xe8tres"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Type"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Description"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"Nom d\u2019utilisateur"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"Mot de passe"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Texte"}),(0,a.jsx)(n.td,{children:"(Facultatif) Adresse IP du client \xe0 l\u2019origine de la requ\xeate(*)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$0"}),(0,a.jsx)(n.td,{children:"Bool\xe9en"}),(0,a.jsx)(n.td,{children:"Vrai = requ\xeate accept\xe9e, Faux = requ\xeate rejet\xe9e"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["(*) 4D retourne les adresses IPv4 dans un format hybride IPv6 comprenant un pr\xe9fixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, reportez-vous \xe0 la section ",(0,a.jsx)(n.em,{children:"Prise en charge d\u2019IP v6"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Vous devez d\xe9clarer ces param\xe8tres de la mani\xe8re suivante :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode base Sur authentification SQL\n\xa0var $1;$2;$3 : Text\n\xa0var $0 : Boolean\n\xa0...\xa0// Code pour la m\xe9thode\n"})}),"\n",(0,a.jsx)(n.p,{children:"Le mot de passe ($2) est re\xe7u en texte standard."}),"\n",(0,a.jsxs)(n.p,{children:["Vous devez contr\xf4ler les identifiants de la connexion SQL dans la ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"}),". Par exemple, vous pouvez contr\xf4ler le nom et le mot de passe \xe0 l\u2019aide d\u2019une table d\u2019utilisateurs personnalis\xe9e. Si les identifiants sont valides, passez Vrai dans $0. Sinon, passez ",(0,a.jsx)(n.strong,{children:"Faux"})," dans $0, dans ce cas la connexion est rejet\xe9e."]}),"\n",(0,a.jsxs)(n.p,{children:["Si vous avez pass\xe9 ",(0,a.jsx)(n.strong,{children:"Vrai"})," dans $0, vous devez ensuite appeler avec succ\xe8s la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"})," dans la ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," pour que la requ\xeate soit accept\xe9e et que 4D ouvre une session SQL pour l\u2019utilisateur.",(0,a.jsx)(n.br,{}),"\nL\u2019utilisation de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"})," permet de mettre en place un syst\xe8me d'authentification virtuelle ayant comme double avantage le contr\xf4le des actions au sein de la connexion et le masquage pour l\u2019ext\xe9rieur des identifiants de la connexion dans la session SQL 4D."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Si la ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"})," n\u2019existe pas, la connexion est \xe9valu\xe9e \xe0 l\u2019aide du syst\xe8me int\xe9gr\xe9 de gestion des utilisateurs de 4D s\u2019il est actif, c\u2019est-\xe0-dire si un mot de passe a \xe9t\xe9 attribu\xe9 au Super_Utilisateur. Si le syst\xe8me n'est pas actif, les utilisateurs sont connect\xe9s avec les droits du Super_Utilisateur (acc\xe8s libre)."]}),"\n",(0,a.jsxs)(n.p,{children:["Cet exemple de ",(0,a.jsx)(n.strong,{children:"On SQL Authentication database method"}),' v\xe9rifie que la demande de connexion provient du r\xe9seau interne, valide les identifiants puis affecte les droits d\u2019utilisateur "sql_user" pour la session SQL.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $1;$2;$3 : Text\n\xa0var $0 : Boolean\n\xa0\xa0//$1 : utilisateur\n\xa0\xa0//$2 : mot de passe\n\xa0\xa0//{$3 : Adresse IP du client}\n\xa0ON ERR CALL("SQL_error")\n\xa0If(checkInternalIP($3))\n\xa0\xa0//La m\xe9thode checkInternalIP v\xe9rifie que l\u2019adresse IP est interne\n\xa0\xa0\xa0\xa0If($1="victor")\xa0&\xa0($2="hugo")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE CURRENT USER("sql_user";"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=False\n\xa0End if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);