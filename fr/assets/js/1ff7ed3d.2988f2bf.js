"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82761],{634379:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(474848),i=s(28453);const a={id:"relate-one",title:"RELATE ONE",slug:"/commands/relate-one",displayed_sidebar:"docs"},l=void 0,r={id:"commands-legacy/relate-one",title:"RELATE ONE",description:"RELATE ONE ( tableN | champN {; discriminant} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-one.md",sourceDirName:"commands-legacy",slug:"/commands/relate-one",permalink:"/docs/fr/commands/relate-one",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"relate-one",title:"RELATE ONE",slug:"/commands/relate-one",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"RELATE MANY SELECTION",permalink:"/docs/fr/commands/relate-many-selection"},next:{title:"RELATE ONE SELECTION",permalink:"/docs/fr/commands/relate-one-selection"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RELATE ONE"})," ( tableN | champN {; ",(0,t.jsx)(n.em,{children:"discriminant"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableN | champN"}),(0,t.jsx)(n.td,{children:"Table, Champ"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table pour laquelle d\xe9finir tous les liens automatiques ou Champ avec lien manuel partant vers la table 1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discriminant"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Champ discriminant de la table 1"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RELATE ONE"})," accepte deux syntaxes."]}),"\n",(0,t.jsxs)(n.p,{children:["La premi\xe8re syntaxe de la commande, ",(0,t.jsx)(n.strong,{children:"RELATE ONE"}),"(tableN), active tous les liens aller automatiques (de N vers 1) pour la table ",(0,t.jsx)(n.em,{children:"tableN"})," dans le process courant. Cela signifie que pour chaque champ de la ",(0,t.jsx)(n.em,{children:"tableN"})," d'o\xf9 part un lien aller automatique, la commande s\xe9lectionnera l'enregistrement li\xe9 dans chaque table li\xe9e. Cela peut donc modifier l'enregistrement courant dans la (les) table(s) li\xe9e(s) du process courant."]}),"\n",(0,t.jsxs)(n.p,{children:["La seconde syntaxe, ",(0,t.jsx)(n.strong,{children:"RELATE ONE"}),"(champN{;discriminant}), recherche l'enregistrement li\xe9 au champ ",(0,t.jsx)(n.em,{children:"champN"}),". Il n'est pas n\xe9cessaire que le lien soit automatique. S'il existe, ",(0,t.jsx)(n.strong,{children:"RELATE ONE"})," charge en m\xe9moire l'enregistrement li\xe9, et en fait l'enregistrement et la s\xe9lection courants de la table \xe0 laquelle il appartient."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"discriminant"})," doit \xeatre un champ de la table li\xe9e. Il peut \xeatre uniquement de type Alpha, Texte, num\xe9rique, Date, Heure ou Bool\xe9en. En particulier, il ne peut pas \xeatre de type Image ou Blob. Si ",(0,t.jsx)(n.em,{children:"champN"})," est sp\xe9cifi\xe9, et si plus d'un enregistrement est trouv\xe9 dans la table li\xe9e, ",(0,t.jsx)(n.strong,{children:"RELATE ONE"})," affiche une liste des enregistrements qui correspondent \xe0 la valeur de ",(0,t.jsx)(n.em,{children:"champN"}),", permettant \xe0 l'utilisateur de s\xe9lectionner un enregistrement. Dans cette liste, la colonne de gauche affiche les valeurs des champs li\xe9s, la colonne de droite affiche les valeurs de ",(0,t.jsx)(n.em,{children:"discriminant"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["G\xe9n\xe9ralement, plusieurs enregistrements sont trouv\xe9s lorsque ",(0,t.jsx)(n.em,{children:"champN"})," se termine par le caract\xe8re Joker (@). S'il n'y en a qu'un seul, la liste de s\xe9lection n'appara\xeet pas."]}),"\n",(0,t.jsx)(n.p,{children:"Dans l'\xe9cran ci-dessous, un enregistrement est en train d'\xeatre saisi et une liste de s\xe9lection s'affiche au premier plan."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(106366).A+"",width:"985",height:"488"})}),"\n",(0,t.jsx)(n.p,{children:"La commande suivante a fait appara\xeetre la liste de s\xe9lection :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Personnes]Soci\xe9t\xe9;[Soci\xe9t\xe9s]R\xe9gion)\n"})}),"\n",(0,t.jsx)(n.p,{children:"L'utilisateur a saisi SARL@ pour visualiser la liste de toutes les soci\xe9t\xe9s dont le nom commence par SARL, ainsi que leur r\xe9gion."}),"\n",(0,t.jsxs)(n.p,{children:["Sp\xe9cifier un champ dans ",(0,t.jsx)(n.em,{children:"discriminant"})," est la m\xeame op\xe9ration que celle qui consiste \xe0 d\xe9finir un champ discriminant dans la bo\xeete de dialogue de d\xe9finition des propri\xe9t\xe9s d'un lien en mode D\xe9veloppement. Pour plus d'informations sur la d\xe9finition d'un champ discriminant, reportez-vous au manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"})," de 4D."]}),"\n",(0,t.jsx)(n.h5,{id:""}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande ne prend pas en charge les champs de type Objet."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Dans l'exemple suivant, la table [Factures] est reli\xe9e \xe0 la table [Clients] par deux liens manuels. Un lien part du champ [Factures]AuNomDe et va vers le champ [Clients]Num\xe9ro, l'autre lien va de [Factures]Exp\xe9dierA \xe0 [Clients]Num\xe9ro."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(722801).A+"",width:"318",height:"237"})}),"\n",(0,t.jsx)(n.p,{children:'Voici le formulaire de la table [Factures] affichant les informations "AuNomDe" et "Exp\xe9dierA".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(793055).A+"",width:"682",height:"460"})}),"\n",(0,t.jsx)(n.p,{children:"Comme les deux liens pointent vers la m\xeame table, [Clients], l'information qu'ils r\xe9cup\xe8rent doit \xeatre affich\xe9e dans des variables. Si le formulaire contenait les champs de [Clients], seules les valeurs issues du second lien seraient affich\xe9es."}),"\n",(0,t.jsx)(n.p,{children:"Les deux m\xe9thodes suivantes sont les m\xe9thodes objet des champs [Factures]Exp\xe9dierA et [Factures]AuNomDe. Voici la m\xe9thode objet du champ [Factures]AuNomDe :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Factures]AuNomDe;[Clients]Adresse)\n\xa0vAdresse1:=[Clients]Adresse\n\xa0vVille1:=[Clients]Ville\n\xa0vPays1:=[Clients]Pays\n\xa0vCP1:=[Clients]Code postal\n"})}),"\n",(0,t.jsx)(n.p,{children:"Voici la m\xe9thode objet du champ [Factures]Exp\xe9dierA :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Factures]Exp\xe9dierA;[Clients]Adresse)\n\xa0vAdresse2:=[Clients]Adresse\n\xa0vVille2:=[Clients]Ville\n\xa0vPays2:=[Clients]Pays\n\xa0vCP2:=[Clients]Code postal\n"})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsxs)(n.p,{children:["Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e et si les enregistrements li\xe9s ont bien \xe9t\xe9 charg\xe9s, la variable syst\xe8me OK prend la valeur 1. Si l'utilisateur a cliqu\xe9 sur le bouton ",(0,t.jsx)(n.strong,{children:"Annuler"})," dans la bo\xeete de dialogue de choix d'enregistrement (qui appara\xeet si l'enregistrement li\xe9 avait \xe9t\xe9 modifi\xe9), la variable OK prend la valeur 0."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/old-related-one",children:"OLD RELATED ONE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/relate-many",children:"RELATE MANY"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},106366:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pict2287719.fr-399d829c096a99183874a96601323aa6.png"},722801:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pict2287721.fr-9ea32891204cb168b1bc5627d017b81b.png"},793055:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pict2287723.fr-4d64bec54477eb4008da155f220d60c9.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(296540);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);