"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77587"],{483764:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/on-server-open-connection-database-method","title":"On Server Open Connection database method","description":"On Server Open Connection($user Integer ; $toIgnore Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-server-open-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-open-connection-database-method","permalink":"/docs/fr/20-R8/commands/on-server-open-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-open-connection-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-server-open-connection-database-method","title":"On Server Open Connection database method","slug":"/commands/on-server-open-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Close Connection database method","permalink":"/docs/fr/20-R8/commands/on-server-close-connection-database-method"},"next":{"title":"On Server Shutdown database method","permalink":"/docs/fr/20-R8/commands/on-server-shutdown-database-method"}}'),t=r("785893"),o=r("250065");let i={id:"on-server-open-connection-database-method",title:"On Server Open Connection database method",slug:"/commands/on-server-open-connection-database-method",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Quand la M\xe9thode base Sur ouverture connexion serveur est-elle appel\xe9e ?",id:"quand-la-m\xe9thode-base-sur-ouverture-connexion-serveur-est-elle-appel\xe9e-",level:2},{value:"Comment la m\xe9thode base est-elle appel\xe9e ?",id:"comment-la-m\xe9thode-base-est-elle-appel\xe9e-",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"On Server Open Connection($user : Integer ; $id : Integer ; $toIgnore : Integer) -> $status : Boolean"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$user"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'utilisateur utilis\xe9 en interne par 4D Server pour identifier les utilisateurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$id"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de connexion utilis\xe9 en interne par 4D Server pour identifier une connexion"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$toIgnore"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Obsol\xe8te : Retourne toujours 0 (mais doit \xeatre d\xe9clar\xe9)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$status"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"0 ou omis = connexion accept\xe9e, autre valeur = connexion refus\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"quand-la-m\xe9thode-base-sur-ouverture-connexion-serveur-est-elle-appel\xe9e-",children:"Quand la M\xe9thode base Sur ouverture connexion serveur est-elle appel\xe9e ?"}),"\n",(0,t.jsxs)(n.p,{children:["La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," est appel\xe9e une fois sur la machine serveur chaque fois qu\u2019un poste 4D distant d\xe9marre un process de connexion. La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," n\u2019est appel\xe9e que par 4D Server, \xe0 l\u2019exclusion de tout autre environnement 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," est appel\xe9e \xe0 chaque fois que :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un 4D distant se connecte (d\xe9marrage du process principal)"}),"\n",(0,t.jsx)(n.li,{children:"un 4D distant ouvre l\u2019environnement D\xe9veloppement (d\xe9marrage du process de d\xe9veloppement)"}),"\n",(0,t.jsxs)(n.li,{children:['un 4D distant d\xe9marre un process global (dont le nom de ne commence pas par "$") qui n\xe9cessite la cr\xe9ation d\'un process coop\xe9ratif sur le serveur ',(0,t.jsx)(n.strong,{children:"(*)"}),". Ce process peut \xeatre cr\xe9\xe9 avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/new-process",children:"New process"}),", une commande de menu ou la bo\xeete de dialogue \u201CEx\xe9cuter une m\xe9thode\u201D ."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans chaque cas, plusieurs process d\xe9marrent. Un sur la machine client, et un ou deux autres sur la machine serveur (suivant les besoins). Sur la machine client, le process ex\xe9cute le code et envoie les requ\xeates \xe0 4D Server. Sur la machine serveur, le ",(0,t.jsx)(n.strong,{children:"process 4D Client"})," (process pr\xe9emptif) g\xe8re l\u2019environnement de base de donn\xe9es du process client (c.-\xe0-d. les s\xe9lections courantes et le verrouillage des enregistrements pour le process utilisateur) et r\xe9pond aux requ\xeates envoy\xe9es par le process ex\xe9cut\xe9 sur la machine cliente. Le ",(0,t.jsx)(n.strong,{children:"process base 4D Client"})," (process coop\xe9ratif) est charg\xe9 de contr\xf4ler le process 4D Client correspondant."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"(*)"})," A compter de 4D v13, pour des raisons d'optimisation les process serveurs (process pr\xe9emptif pour les acc\xe8s au moteur de la base et process coop\xe9ratif pour l\u2019acc\xe8s au langage) ne sont cr\xe9\xe9s qu\u2019en cas de n\xe9cessit\xe9 lors de l\u2019ex\xe9cution du code c\xf4t\xe9 client. Par exemple, voici le d\xe9tail d\u2019une s\xe9quence de code 4D s\u2019ex\xe9cutant dans un nouveau process client :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// le process global commence sans nouveau process sur le serveur, comme un process local.\n\xa0CREATE RECORD([Table_1])\n\xa0[Table_1])champ1_1:="Hello world"\n\xa0SAVE RECORD([Table_1])\xa0// cr\xe9ation ici du process pr\xe9emptif sur le serveur\n\xa0\xa0//pas d\'appel de Sur ouverture connexion serveur\n\xa0$serverTime:=Current time(*)\xa0// cr\xe9ation ici du process coop\xe9ratif sur le serveur\n\xa0\xa0// appel de Sur ouverture connexion serveur\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important"})," ",(0,t.jsx)(n.strong,{children:":"})," Les connexions Web et les connexions SQL ne provoquent ",(0,t.jsx)(n.strong,{children:"pas"})," l'ex\xe9cution de la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"}),". Lorsqu\u2019un navigateur Web se connecte \xe0 4D Server, la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-web-authentication-database-method",children:"On Web Authentication database method"})," (si elle existe) et/ou la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-web-connection-database-method",children:"On Web Connection database method"})," sont appel\xe9es. Lorsque 4D Server re\xe7oit une requ\xeate SQL, la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-sql-authentication-database-method",children:"On SQL Authentication database method"})," (si elle existe) est appel\xe9e. Pour plus d\u2019informations, reportez-vous \xe0 la description de ces m\xe9thodes base dans le manuel Langage de 4D."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important"})," ",(0,t.jsx)(n.strong,{children:":"})," Lors du d\xe9marrage d\u2019une proc\xe9dure stock\xe9e, la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," n\u2019est ",(0,t.jsx)(n.strong,{children:"pas"})," appel\xe9e. Les ",(0,t.jsx)(n.em,{children:"Proc\xe9dures stock\xe9es"})," sont des process serveur et non des process 4D Client. Elles ex\xe9cutent du code sur la machine serveur mais ne r\xe9pondent pas aux requ\xeates \xe9chang\xe9es par 4D Client (ou d\u2019autres clients) et 4D Server."]}),"\n",(0,t.jsx)(n.h2,{id:"comment-la-m\xe9thode-base-est-elle-appel\xe9e-",children:"Comment la m\xe9thode base est-elle appel\xe9e ?"}),"\n",(0,t.jsxs)(n.p,{children:["La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," est ex\xe9cut\xe9e sur le poste serveur dans le process 4D Client qui a provoqu\xe9 l\u2019appel de la m\xe9thode."]}),"\n",(0,t.jsxs)(n.p,{children:["Si, par exemple, un 4D distant se connecte \xe0 une base 4D Server en mode interpr\xe9t\xe9, il d\xe9marre le process utilisateur, le process de d\xe9veloppement ainsi que (par d\xe9faut) le process d'inscription du client. La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," est donc ex\xe9cut\xe9e trois fois de suite. La premi\xe8re fois dans le process principal, la deuxi\xe8me fois dans le process d'inscription du client et la troisi\xe8me fois dans le process de d\xe9veloppement. Si les trois process sont respectivement les 6e, 7e et 8e process d\xe9marr\xe9s sur la machine serveur, et si vous appelez ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/current-process",children:"Current process"})," dans la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"}),", le premier ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/current-process",children:"Current process"})," retourne 6, le deuxi\xe8me 7 et le troisi\xe8me 8."]}),"\n",(0,t.jsxs)(n.p,{children:["Notez que la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," s\u2019ex\xe9cute sur le poste serveur, \xe0 l'int\xe9rieur du process 4D Client sur le serveur. Elle ignore tout du process ex\xe9cut\xe9 sur le client. En outre, au moment o\xf9 la m\xe9thode est appel\xe9e, le process 4D Client n\u2019est pas encore nomm\xe9 (",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/process-info",children:"Process info"})," ne retournera pas, \xe0 ce moment, le nom du process 4D Client)."]}),"\n",(0,t.jsxs)(n.p,{children:["La ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," n\u2019a pas acc\xe8s \xe0 la table des variables process du process ex\xe9cut\xe9 sur le client. Cette table r\xe9side sur le poste client, pas sur le serveur."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," acc\xe8de \xe0 une variable process, elle travaille avec une table de variables process particuli\xe8re, cr\xe9\xe9e dynamiquement pour le process 4D Client."]}),"\n",(0,t.jsxs)(n.p,{children:["4D Server passe trois param\xe8tres de type Entier long \xe0 la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," et attend un r\xe9sultat Entier long. La m\xe9thode doit donc \xeatre explicitement d\xe9clar\xe9e avec trois param\xe8tres Entier long ainsi qu'un retour de fonction Entier long :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0#DECLARE($user: Integer; $id: Integer; $toIgnore : Integer) -> $result : Integer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne retournez pas de valeur dans ",(0,t.jsx)(n.em,{children:"$result"})," et donc laissez la variable ind\xe9finie ou initialis\xe9e \xe0 z\xe9ro, 4D Server estime que la m\xe9thode base accepte la connexion. Si vous n\u2019acceptez pas la connexion, retournez une valeur non nulle dans ",(0,t.jsx)(n.em,{children:"$result"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Le tableau ci-dessous d\xe9taille les informations fournies par les trois param\xe8tres pass\xe9s \xe0 la m\xe9thode base :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Param\xe8tre"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$user"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'utilisateur utilis\xe9 en interne par 4D Server pour identifier les utilisateurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$id"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de connexion utilis\xe9 en interne par 4D Server pour identifier une connexion"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$toIgnore"}),(0,t.jsx)(n.td,{children:"Obsol\xe8te : Retourne toujours 0 (mais doit \xeatre d\xe9clar\xe9)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Ces num\xe9ros de r\xe9f\xe9rence ne sont pas directement utilisables en tant que \xab sources d\u2019information \xbb \xe0 passer, par exemple, comme param\xe8tres \xe0 une commande 4D. Ils vous fournissent un moyen d\u2019identifier de mani\xe8re unique un process 4D Client entre la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," et la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"}),". La combinaison de ces valeurs est unique \xe0 tout moment d\u2019une session 4D Server. Si vous stockez cette information dans une table ou un tableau interprocess, les deux m\xe9thodes base peuvent \xe9changer des informations. Dans l\u2019exemple pr\xe9sent\xe9 \xe0 la fin de cette section, les deux m\xe9thodes base utilisent cette information pour stocker l\u2019heure et la date du d\xe9but et de la fin d\u2019une connexion dans le m\xeame enregistrement d\u2019une table."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019exemple suivant montre comment maintenir un historique des connexions \xe0 la base de donn\xe9es en utilisant la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," et la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"}),". La table [Server Log] (ci-dessous) sert \xe0 garder la trace des process de connexion :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(771759).Z+"",width:"148",height:"239"})}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019information stock\xe9e dans cette table est g\xe9r\xe9e par la ",(0,t.jsx)(n.strong,{children:"On Server Open Connection database method"})," et la ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"})," list\xe9es ci-dessous :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode base Sur ouverture connexion serveur\n\xa0#DECLARE($user: Integer; $id: Integer; $toIgnore : Integer) -> $result : Integer\n\xa0\xa0// Cr\xe9er un enregistrement [Server Log]\n\xa0CREATE RECORD([Server Log])\n\xa0[Server Log]Log ID:=Sequence number([Server Log])\n\xa0\xa0// Enregistrer l\u2019historique Date et Heure\n\xa0[Server Log]Log Date:=Current date\n\xa0[Server Log]Log Time:=Current time\n\xa0\xa0// Enregistrer l\u2019information sur la connexion\n\xa0[Server Log]User ID:=$user\n\xa0[Server Log]Connection ID:=$id\n\xa0SAVE RECORD([Server Log])\n\xa0\xa0\xa0\xa0// Ne retourne pas d\u2019erreur, pour continuer la connexion\n\xa0$result:=0\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode base Sur fermeture connexion serveur\n\xa0#DECLARE($user: Integer; $id: Integer; $toIgnore : Integer)\n\xa0\xa0// Chercher l\u2019enregistrement [Server Log]\n\xa0QUERY([Server Log];[Server Log]User ID=$user;*)\n\xa0QUERY([Server Log];\xa0&\xa0;[Server Log]Connection ID=$id;*)\n\xa0QUERY([Server Log];\xa0&\xa0;[Server Log]Process ID=0)\n\xa0\xa0// Enregistrer date et heure de d\xe9connexion\n\xa0[Server Log]Exit Date:=Current date\n\xa0[Server Log]Exit Time:=Current time\n\xa0\xa0// Enregistrer informations process\n\xa0[Server Log]Process ID:=Current process\n\xa0PROCESS PROPERTIES([Server Log]Process ID;$vsProcName;$vlProcState;$vlProcTime)\n\xa0[Server Log]Process Name:=$vsProcName\n\xa0SAVE RECORD([Server Log])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Voici quelques entr\xe9es dans [Server Log] montrant plusieurs connexions distantes :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.img,{src:r(476743).Z+"",width:"802",height:"502"})})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"L\u2019exemple suivant interdit toute nouvelle connexion entre 2 et 4 heures du matin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode base Sur ouverture connexion serveur\n\xa0#DECLARE($user: Integer; $id: Integer; $toIgnore : Integer) -> $result : Integer\n\xa0\n\xa0If((?02:00:00?<=Current time)&(Current time\n"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"16001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},771759:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},476743:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict69174.fr-9ee355284e399d760f45e132f823666d.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);