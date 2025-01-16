"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49449"],{412086:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/add-record","title":"ADD RECORD","description":"ADD RECORD ( {;}{*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/add-record.md","sourceDirName":"commands-legacy","slug":"/commands/add-record","permalink":"/docs/fr/commands/add-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"add-record","title":"ADD RECORD","slug":"/commands/add-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCEPT","permalink":"/docs/fr/commands/accept"},"next":{"title":"CANCEL","permalink":"/docs/fr/commands/cancel"}}'),t=s("785893"),i=s("250065");let l={id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADD RECORD"})," ( {",(0,t.jsx)(n.em,{children:"laTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle ajouter des donn\xe9es ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cacher les barres de d\xe9filement"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Cette commande est apparue dans les premi\xe8res versions de 4D et reste toujours utile pour cr\xe9er des prototypes ou effectuer des d\xe9veloppements simples. Toutefois, pour construire des interfaces modernes et personnalis\xe9es, il est d\xe9sormais recommand\xe9 d'utiliser des formulaires g\xe9n\xe9riques bas\xe9s sur la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"})," qui fournit des fonctionnalit\xe9s avanc\xe9es et un meilleur contr\xf4le du flux de donn\xe9es."]})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"ADD RECORD"})," permet \xe0 l'utilisateur de cr\xe9er un nouvel enregistrement dans ",(0,t.jsx)(n.em,{children:"laTable"})," ou dans la table par d\xe9faut si ce param\xe8tre est omis."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADD RECORD"})," cr\xe9e un nouvel enregistrement pour ",(0,t.jsx)(n.em,{children:"laTable"}),", en fait l'enregistrement courant pour le process courant et l'affiche dans le formulaire entr\xe9e courant. En mode Application, une fois que l'utilisateur a valid\xe9 le nouvel enregistrement, la s\xe9lection courante est r\xe9duite \xe0 ce seul enregistrement."]}),"\n",(0,t.jsx)(n.p,{children:"L'\xe9cran suivant pr\xe9sente un formulaire typiquement utilis\xe9 pour la saisie de donn\xe9es :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(593797).Z+"",width:"673",height:"467"})}),"\n",(0,t.jsx)(n.p,{children:"Le formulaire est affich\xe9 dans la fen\xeatre se trouvant au premier plan du process. Elle comporte des barres de d\xe9filement et une case de contr\xf4le de taille. Si vous passez le param\xe8tre optionnel ast\xe9risque (*), les barres de d\xe9filement n'apparaissent pas et la fen\xeatre du formulaire ne peut \xeatre r\xe9duite :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(916265).Z+"",width:"690",height:"479"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADD RECORD"})," affiche le formulaire jusqu'\xe0 ce que l'utilisateur valide ou annule l'enregistrement. Si l'utilisateur ajoute plusieurs enregistrements, la commande doit \xeatre appel\xe9e pour chaque nouvel enregistrement."]}),"\n",(0,t.jsxs)(n.p,{children:["L'enregistrement est sauvegard\xe9 si l'utilisateur clique sur un bouton du type Valider ou appuie sur la touche Entr\xe9e, ou encore si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})," est ex\xe9cut\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["L'enregistrement n'est pas sauvegard\xe9 si l'utilisateur clique sur un bouton du type ",(0,t.jsx)(n.strong,{children:"Annuler"})," ou appuie sur la touche d'annulation (",(0,t.jsx)(n.strong,{children:"Echap"})," sous Windows, ",(0,t.jsx)(n.strong,{children:"Esc"})," sous Mac OS), ou encore si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})," est ex\xe9cut\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande ne n\xe9cessite pas que ",(0,t.jsx)(n.em,{children:"laTable"})," soit en mode lecture/\xe9criture. Elle peut \xeatre utilis\xe9e m\xeame lorsque la table est en mode lecture seulement (cf. section ",(0,t.jsx)(n.em,{children:"Verrouillage d'enregistrements"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s un appel \xe0 ",(0,t.jsx)(n.strong,{children:"ADD RECORD"}),", la variable syst\xe8me OK prend la valeur 1 si l'enregistrement est valid\xe9 et 0 s'il est annul\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," M\xeame lorsqu'il est annul\xe9, l'enregistrement reste en m\xe9moire et peut \xeatre sauvegard\xe9 avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})," si celle-ci est ex\xe9cut\xe9e avant que le pointeur d'enregistrement courant ne soit modifi\xe9."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant est une boucle souvent utilis\xe9e pour cr\xe9er des enregistrements dans une base :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET INPUT([Clients];\"SaisieClients\")\xa0// D\xe9signer le formulaire entr\xe9e de la table [Clients]\n\xa0Repeat\xa0// Boucle jusqu'\xe0 ce que l'utilisateur annule\n\xa0\xa0\xa0\xa0ADD RECORD([Clients];*)\xa0// Ajouter un enregistrement dans la table [Clients]\n\xa0Until(OK=0)\xa0// Jusqu'\xe0 ce que l'utilisateur annule\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant permet de rechercher un client dans la base. Le d\xe9roulement de la m\xe9thode d\xe9pend du r\xe9sultat de la recherche. Si aucun client n'a \xe9t\xe9 trouv\xe9, l'utilisateur est autoris\xe9 \xe0 cr\xe9er un nouveau client \xe0 l'aide de la commande ",(0,t.jsx)(n.strong,{children:"ADD RECORD"}),". Si au moins un client a \xe9t\xe9 trouv\xe9, le premier enregistrement est affich\xe9 pour modification, \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/modify-record",children:"MODIFY RECORD"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0READ WRITE([Clients])\n\xa0FORM SET INPUT([Clients];"Entr\xe9e1")\xa0// D\xe9signer le formulaire entr\xe9e\n\xa0vlClientNo:=Num(Request("Saisissez un num\xe9ro de client :")\xa0// On r\xe9cup\xe8re le num\xe9ro du client\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Clients];[Clients]ClientNo=vlClientNo)\xa0// Recherche du client\n\xa0\xa0\xa0\xa0If(Records in selection([Clients])=0)\xa0// Si aucun client n\'a \xe9t\xe9 trouv\xe9\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ADD RECORD([Clients])\xa0//Ajout d\'un nouveau client\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Locked([Clients])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MODIFY RECORD([Clients])\xa0//Modifier l\'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UNLOAD RECORD([Clients])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Cet enregistrement est en train d\'\xeatre modifi\xe9.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si l'enregistrement est valid\xe9 et 0 s'il est annul\xe9."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-record",children:"CREATE RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/modify-record",children:"MODIFY RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"56"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},593797:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2804768.fr-fe30c91c49b7a3508503abb58e1f91ed.png"},916265:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2804770.fr-3d23df4abf82345466990555f385a049.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);