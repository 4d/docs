"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72425"],{489236:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/semaphore","title":"Semaphore","description":"Semaphore ( s\xe9maphore {; nbTicks} ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/semaphore.md","sourceDirName":"commands-legacy","slug":"/commands/semaphore","permalink":"/docs/fr/commands/semaphore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsemaphore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"semaphore","title":"Semaphore","slug":"/commands/semaphore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New signal","permalink":"/docs/fr/commands/new-signal"},"next":{"title":"SET PROCESS VARIABLE","permalink":"/docs/fr/commands/set-process-variable"}}'),t=n("785893"),a=n("250065");let i={id:"semaphore",title:"Semaphore",slug:"/commands/semaphore",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Semaphore"})," ( ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," {; ",(0,t.jsx)(s.em,{children:"nbTicks"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"s\xe9maphore"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"S\xe9maphore \xe0 tester et \xe0 positionner"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nbTicks"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Temps d\u2019attente maximum"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"s\xe9maphore a \xe9t\xe9 correctement cr\xe9\xe9 (Faux) ou s\xe9maphore \xe9tait d\xe9j\xe0 cr\xe9\xe9 (Vrai)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Un s\xe9maphore est un drapeau visible par chaque poste client ou chaque process sur un m\xeame poste. Un s\xe9maphore a simplement pour r\xf4le d'exister ou de ne pas exister. Chaque m\xe9thode ex\xe9cut\xe9e par un utilisateur peut tester la pr\xe9sence d'un s\xe9maphore. Un s\xe9maphore ne peut \xeatre effac\xe9 que par le poste client ou le process qui l'a cr\xe9\xe9. En cr\xe9ant et en testant des s\xe9maphores, vous permettez aux m\xe9thodes de communiquer entre les postes clients et les process. Les s\xe9maphores ne servent pas \xe0 prot\xe9ger l'acc\xe8s aux enregistrements \u2014 cette gestion est effectu\xe9e automatiquement par 4D et 4D Server. Les s\xe9maphores ont pour but d'\xe9viter que plusieurs utilisateurs ou process effectuent la m\xeame op\xe9ration en m\xeame temps."}),"\n",(0,t.jsxs)(s.p,{children:["La fonction ",(0,t.jsx)(s.strong,{children:"Semaphore"})," retourne Vrai et ne fait rien si ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," existe. Si ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," n'existe pas, ",(0,t.jsx)(s.strong,{children:"Semaphore"})," le cr\xe9e et retourne Faux. Un seul utilisateur \xe0 la fois peut cr\xe9er un s\xe9maphore. Si ",(0,t.jsx)(s.strong,{children:"Semaphore"})," retourne Faux, cela indique que ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," n'existait pas, mais cela signifie \xe9galement que ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," a \xe9t\xe9 cr\xe9\xe9 et positionn\xe9 dans le process d'o\xf9 l'appel a \xe9t\xe9 effectu\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Semaphore"})," retourne Faux si le ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," n'existait pas. La fonction retourne \xe9galement Faux si le s\xe9maphore avait \xe9t\xe9 d\xe9j\xe0 positionn\xe9 par le process d'o\xf9 l'appel a \xe9t\xe9 effectu\xe9."]}),"\n",(0,t.jsx)(s.p,{children:'Un s\xe9maphore est limit\xe9 \xe0 255 caract\xe8res, m\xe9tacaract\xe8re ($) inclus. Si vous passez une cha\xeene plus longue, elle est tronqu\xe9e. Attention, 4D tient compte de la casse des caract\xe8res en ce qui concerne les noms de s\xe9maphores (le programme consid\xe8re par exemple que "MonS\xe9maphore" est diff\xe9rent de "mons\xe9maphore").'}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"nbTicks"})," vous permet de sp\xe9cifier un d\xe9lai d\u2019attente en ticks (1 tick = 1/60\xe8me de seconde) si ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," est d\xe9j\xe0 positionn\xe9. Dans ce cas, avant de retourner Vrai, la fonction attend, dans la limite du temps fix\xe9, que ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," se lib\xe8re (auquel cas elle retourne Faux). Si le d\xe9lai expire sans que ",(0,t.jsx)(s.em,{children:"s\xe9maphore"})," ait \xe9t\xe9 lib\xe9r\xe9, ",(0,t.jsx)(s.strong,{children:"Semaphore"})," retourne Vrai."]}),"\n",(0,t.jsx)(s.p,{children:"Il y a deux types de s\xe9maphores dans 4D : les s\xe9maphores locaux et les s\xe9maphores globaux."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Un s\xe9maphore local est visible par tous les process d'un m\xeame poste et seulement sur ce poste. Vous d\xe9clarez un s\xe9maphore local en pr\xe9fixant son nom avec le signe dollar ($). Les s\xe9maphores locaux permettent de contr\xf4ler des op\xe9rations entre les diff\xe9rents process ex\xe9cut\xe9s sur le m\xeame poste. Par exemple, un s\xe9maphore local peut \xeatre utilis\xe9 pour g\xe9rer les acc\xe8s \xe0 un tableau interprocess appel\xe9 par tous les process d'une base de donn\xe9es mono-utilisateur ou d'un poste client."}),"\n",(0,t.jsx)(s.li,{children:"Un s\xe9maphore global est visible par tous les utilisateurs et tous les process. Les s\xe9maphores globaux permettent de contr\xf4ler des op\xe9rations entre les postes clients d'une base multi-utilisateurs."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Le principe de fonctionnement des s\xe9maphores globaux et locaux est identique. Leur diff\xe9rence r\xe9side uniquement dans leur port\xe9e, c'est-\xe0-dire leur visibilit\xe9. En client-serveur, les s\xe9maphores globaux sont visibles pour tous les process de tous les postes clients et du serveur. Un s\xe9maphore local n'est visible que pour les process du poste sur lequel il a \xe9t\xe9 cr\xe9\xe9."}),"\n",(0,t.jsx)(s.p,{children:"Avec 4D, les s\xe9maphores globaux et locaux ont la m\xeame port\xe9e car il n'y a qu'un seul utilisateur. Cependant, si votre base est utilis\xe9e dans les deux environnements, n'h\xe9sitez pas \xe0 employer des s\xe9maphores globaux et locaux, en fonction de vos besoins."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Les s\xe9maphores locaux sont recommand\xe9s lorsque l'usage d'un s\xe9maphore est n\xe9cessaire pour g\xe9rer un aspect local \xe0 un client de l'application, comme par exemple l'interface ou un tableau de valeurs interprocess. L'utilisation d'un s\xe9maphore global provoquerait dans ce cas non seulement des \xe9changes r\xe9seau inutiles, mais en plus pourrait affecter inutilement d'autres postes clients. Le s\xe9maphore local \xe9vitera ces effets ind\xe9sirables."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(s.p,{children:"Le code type d'utilisation d'un s\xe9maphore est le suivant :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0While(Semaphore("MonSemaphore";300))\n\xa0\xa0\xa0\xa0IDLE\n\xa0End while\n\xa0\xa0// placer ici le code prot\xe9g\xe9 par le s\xe9maphore\n\xa0CLEAR SEMAPHORE("MonSemaphore")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(s.p,{children:"Dans l'exemple suivant, vous souhaitez emp\xeacher que deux utilisateurs effectuent simultan\xe9ment une mise \xe0 jour globale des prix dans une table [Produits]. Pour cela, des s\xe9maphores sont utilis\xe9s :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0If(Semaphore("MAJPrix"))\xa0// Essai de cr\xe9ation du s\xe9maphore\n\xa0\xa0\xa0\xa0ALERT("Un autre utilisateur est d\xe9j\xe0 en train de mettre \xe0 jour les prix. Essayez plus tard.")\n\xa0Else\n\xa0\xa0\xa0\xa0MAJdesPrix\xa0// M\xe9thode de mise \xe0 jour des prix\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("MAJPrix"))\xa0// Effacer le s\xe9maphore\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(s.p,{children:"L'exemple suivant illustre l'utilisation d'un s\xe9maphore local. Dans une base comportant plusieurs process, vous souhaitez maintenir une liste de \"Choses \xe0 faire\". Vous envisagez de la maintenir \xe0 jour dans un tableau interprocess et non dans une table. Vous devez emp\xeacher les acc\xe8s simultan\xe9s \xe0 l'aide d'un s\xe9maphore. Dans ce cas, il vous suffit d'utiliser un s\xe9maphore local car la liste \"Choses \xe0 faire\" est pour votre utilisation personnelle."}),"\n",(0,t.jsx)(s.p,{children:"Le tableau interprocess est initialis\xe9 dans la m\xe9thode base Sur ouverture :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT(<>ListeAFaire;0)\xa0// La liste de choses \xe0 faire est vide\n"})}),"\n",(0,t.jsx)(s.p,{children:'Voici la m\xe9thode utilis\xe9e pour ajouter des \xe9l\xe9ments \xe0 la "liste des choses \xe0 faire" :'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet AJOUTER LISTE A FAIRE\n\xa0\xa0// AJOUTER LISTE A FAIRE (Texte)\n\xa0\xa0// AJOUTER LISTE A FAIRE (El\xe9ment la liste \xe0 faire)\n\xa0\n\xa0var $1 : Text\xa0// Param\xe8tre pass\xe9 \xe0 la commande\n\xa0If(Not(Semaphore("$Acc\xe8sListe";300)))\xa0// Attendre 5 secondes si un s\xe9maphore existe d\xe9j\xe0\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(<>ListeAFaire)+1\n\xa0\xa0\xa0\xa0INSERT IN ARRAY(<>ListeAFaire;$vlElem)\n\xa0\xa0\xa0\xa0<>ListeAFaire{$vlElem}:=$1\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("$Acc\xe8sListe")\xa0// Effacer le s\xe9maphore\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.p,{children:"Vous pouvez appeler cette m\xe9thode depuis n'importe quel process."}),"\n",(0,t.jsx)(s.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(s.p,{children:"Cette m\xe9thode permet de ne pas ex\xe9cuter une m\xe9thode si le s\xe9maphore est pos\xe9 ; la m\xe9thode informe la m\xe9thode d'appel avec un code d'erreur et un texte en clair."}),"\n",(0,t.jsx)(s.p,{children:"Syntaxe :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0$L_Erreur:=Semaphore_proof(->$T_Text_error)\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// Structure de protection par s\xe9maphore\n\xa0var $0 : Integer\n\xa0var $1 : Pointer\xa0// message d'erreur\n\xa0\n\xa0\xa0\xa0// D\xe9but de la m\xe9thode\n\xa0var $L_MyError : Integer\n\xa0$L_MyError:=1\n\xa0\n\xa0var $T_Sema_local : Text\n\xa0$T_Sema_local:=\"$tictac\"\n\xa0\n\xa0If(Semaphore($T_Sema_local;300))\n\xa0\xa0\xa0\xa0\xa0\xa0// On a attendu 300 ticks mais le s\xe9maphore\n\xa0\xa0\xa0\xa0\xa0\xa0// n'a pas \xe9t\xe9 lib\xe9r\xe9 par celui qui l'avait pos\xe9 :\n\xa0\xa0\xa0\xa0\xa0\xa0// on arrive ici\n\xa0\xa0\xa0\xa0$L_MyError:=-1\n\xa0\n\xa0Else\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Cette m\xe9thode n'est ex\xe9cut\xe9e que par un process \xe0 la fois\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Nous avons pos\xe9 le s\xe9maphore en m\xeame temps que nous entrions\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// il n'y a que nous qui pouvons le supprimer\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Faire quelque chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0// Finir en effa\xe7ant le s\xe9maphore\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE($T_Sema_local)\n\xa0End if\n\xa0\n\xa0var $T_Message : Text\n\xa0If($L_MyError=-1)\n\xa0\xa0\xa0\xa0$T_Message:=\"Le s\xe9maphore \"+$T_Sema_local+\" a bloqu\xe9 l'acc\xe8s \xe0 la suite du code\"\n\xa0Else\n\xa0\xa0\xa0\xa0$T_Message:=\"OK\"\n\xa0End if\n\xa0\n\xa0$0:=$L_MyError\n\xa0$1->:=$T_Message\xa0\xa0// la m\xe9thode d'appel re\xe7oit un code d'erreur et une explication en clair\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"S\xe9maphores et signaux"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/test-semaphore",children:"Test semaphore"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"143"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var r=n(667294);let t={},a=r.createContext(t);function i(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);