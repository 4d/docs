"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41228],{904666:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=n(474848),a=n(28453);const t={id:"open-settings-window",title:"OPEN SETTINGS WINDOW",slug:"/commands/open-settings-window",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/open-settings-window",title:"OPEN SETTINGS WINDOW",description:"OPEN SETTINGS WINDOW ( s\xe9lecteur {; acc\xe8s {; typePropri\xe9t\xe9s}} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-settings-window.md",sourceDirName:"commands-legacy",slug:"/commands/open-settings-window",permalink:"/docs/fr/commands/open-settings-window",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-settings-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"open-settings-window",title:"OPEN SETTINGS WINDOW",slug:"/commands/open-settings-window",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OPEN SECURITY CENTER",permalink:"/docs/fr/commands/open-security-center"},next:{title:"PLUGIN LIST",permalink:"/docs/fr/commands/plugin-list"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Cl\xe9s de chemins (mode standard)",id:"cl\xe9s-de-chemins-mode-standard",level:5},{value:"Cl\xe9s de chemins (mode Propri\xe9t\xe9s utilisateur)",id:"cl\xe9s-de-chemins-mode-propri\xe9t\xe9s-utilisateur",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4}];function o(e){const s={code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"OPEN SETTINGS WINDOW"})," ( ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"})," {; ",(0,r.jsx)(s.em,{children:"acc\xe8s"})," {; ",(0,r.jsx)(s.em,{children:"typePropri\xe9t\xe9s"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s\xe9lecteur"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Cl\xe9 d\xe9signant un th\xe8me ou une page de la bo\xeete de dialogue des Pr\xe9f\xe9rences ou des Propri\xe9t\xe9s de la base"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"acc\xe8s"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vrai=Verrouiller les autres pages de la bo\xeete de dialogue, Faux ou omis=Laisser actives les autres pages de la bo\xeete de dialogue"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"typePropri\xe9t\xe9s"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"0 ou omis = Propri\xe9t\xe9s structure (mode standard), 1 = Propri\xe9t\xe9s utilisateur, 2 = Propri\xe9t\xe9s utilisateur pour donn\xe9es"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"OPEN SETTINGS WINDOW"})," provoque l\u2019ouverture de la bo\xeete de dialogue des Pr\xe9f\xe9rences 4D ou des Propri\xe9t\xe9s de la base courante et l\u2019affichage des param\xe8tres ou de la page correspondant \xe0 la cl\xe9 pass\xe9e dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"})," doit contenir une \u201ccl\xe9\u201d d\xe9signant la bo\xeete de dialogue et la page \xe0 ouvrir. Cette cl\xe9 est construite de la mani\xe8re suivante : ",(0,r.jsx)(s.em,{children:"/Dialogue{/Page{/Param\xe8tres}}"}),". ",(0,r.jsx)(s.em,{children:"Dialogue"}),' indique la bo\xeete de dialogue \xe0 afficher : vous pouvez passer "4D" (Pr\xe9f\xe9rences) ou "Database" (Propri\xe9t\xe9s de la base). Par exemple, pour d\xe9signer la page Compilateur des Propri\xe9t\xe9s de la base, ',(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),' doit contenir "',(0,r.jsx)(s.em,{children:"/Database/Compiler"}),'". La liste des cl\xe9s est fournie ci-dessous. Si vous passez uniquement une barre oblique ("/") dans ',(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),", la commande affiche la premi\xe8re page de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"acc\xe8s"})," vous permet de contr\xf4ler les actions de l\u2019utilisateur dans la bo\xeete de dialogue des Pr\xe9f\xe9rences ou des Propri\xe9t\xe9s de la base en verrouillant les autres pages. Typiquement, vous pouvez souhaiter laisser l\u2019utilisateur personnaliser certains param\xe8tres, mais \xe9viter que les autres puissent \xeatre modifi\xe9s. Dans ce cas, passez Vrai dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"acc\xe8s"})," : seule la page d\xe9sign\xe9e par le param\xe8tre ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"})," sera active et modifiable, l\u2019acc\xe8s \xe0 toutes les autres pages sera verrouill\xe9 (les clics sur les boutons de la barre de navigation seront sans effet). Si vous passez Faux ou omettez le param\xe8tre ",(0,r.jsx)(s.em,{children:"acc\xe8s"}),", toutes les pages de la bo\xeete de dialogue seront accessibles sans restriction."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"typePropri\xe9t\xe9s"}),' est pris en compte dans les bases configur\xe9es en mode "Propri\xe9t\xe9s utilisateur" uniquement (dans ce mode, des "propri\xe9t\xe9s utilisateur" ou des "propri\xe9t\xe9s utilisateur pour le fichier de donn\xe9es" personnalis\xe9es sont g\xe9n\xe9r\xe9es dans un fichier externe et utilis\xe9es \xe0 la place des propri\xe9t\xe9s standard, cf. section ',(0,r.jsx)(s.em,{children:"Utiliser des propri\xe9t\xe9s utilisateur"})," dans le manuel ",(0,r.jsx)(s.em,{children:"Mode D\xe9veloppement"}),'). Dans ce contexte, ce param\xe8tre vous permet d\u2019indiquer si vous souhaitez acc\xe9der \xe0 la bo\xeete de dialogue des "propri\xe9t\xe9s structure", des "propri\xe9t\xe9s utilisateur" ou des \'"propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es". Vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me ',(0,r.jsx)(s.em,{children:"Environnement 4D"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Structure settings"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:['Acc\xe8s aux "propri\xe9t\xe9s structure" (valeur par d\xe9faut si le param\xe8tre est omis). Dans ce mode, les valeurs de ',(0,r.jsx)(s.em,{children:"s\xe9lecteur"})," utilisables sont identiques \xe0 celles du mode standard."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"User settings"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsxs)(s.td,{children:['Acc\xe8s aux "propri\xe9t\xe9s utilisateur". Dans ce mode, seules certaines cl\xe9s sont utilisables dans le param\xe8tre ',(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"User settings for data"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsxs)(s.td,{children:['Acc\xe8s aux "propri\xe9t\xe9s utilisateur pour donn\xe9es", c\'est-\xe0-dire les propri\xe9t\xe9s utilisateur stock\xe9es au m\xeame niveau que le fichier de donn\xe9es. Dans ce mode, seules certaines cl\xe9s peuvent \xeatre utilis\xe9es avec le param\xe8tre ',(0,r.jsx)(s.em,{children:"s\xe9lecteur"})," (m\xeame sous-ensemble que les propri\xe9t\xe9s utilisateur)."]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Si vous passez une cl\xe9 invalide, la premi\xe8re page de la bo\xeete de dialogue des Propri\xe9t\xe9s de la base est affich\xe9e."}),"\n",(0,r.jsx)(s.h5,{id:"cl\xe9s-de-chemins-mode-standard",children:"Cl\xe9s de chemins (mode standard)"}),"\n",(0,r.jsxs)(s.p,{children:["Voici la liste des cl\xe9s utilisables dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),' en mode standard, c\'est-\xe0-dire avec les "propri\xe9t\xe9s structure" :']}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"/4D"}),"\n",(0,r.jsx)(s.em,{children:"/4D/General"}),"\n",(0,r.jsx)(s.em,{children:"/4D/Structure"}),"\n",(0,r.jsx)(s.em,{children:"/4D/Form editor"}),"\n",(0,r.jsx)(s.em,{children:"/4D/Method editor"}),"\n",(0,r.jsx)(s.em,{children:"/4D/Shortcuts"}),"\n",(0,r.jsx)(s.em,{children:"/Database"}),"\n",(0,r.jsx)(s.em,{children:"/Database/General"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Mover"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Interface"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Interface/Developper"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Interface/User"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Interface/Shortcuts"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Compiler"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Database"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Database/Data storage"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Database/Memory and cpu"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Database/International"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup/Scheduler"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup/Configuration"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup/Backup and restore"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Client-Server"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Client-Server/Network"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Config"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Options 1"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Options 2"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Log format"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Webservices"}),"\n",(0,r.jsx)(s.em,{children:"/Database/SQL"}),"\n",(0,r.jsx)(s.em,{children:"/Database/php"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Compatibility"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Security"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," La commande continue de fonctionner avec les cl\xe9s d\xe9finies pour les versions 11.x et pr\xe9c\xe9dentes de 4D, la correspondance est \xe9tablie automatiquement par le programme 4D. Il est toutefois conseill\xe9 de remplacer les anciens appels par les cl\xe9s d\xe9crites ci-dessus."]}),"\n",(0,r.jsx)(s.h5,{id:"cl\xe9s-de-chemins-mode-propri\xe9t\xe9s-utilisateur",children:"Cl\xe9s de chemins (mode Propri\xe9t\xe9s utilisateur)"}),"\n",(0,r.jsxs)(s.p,{children:["Voici la liste des cl\xe9s utilisables dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"s\xe9lecteur"}),' en mode "propri\xe9t\xe9s utilisateur" :']}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"/Database"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Interface"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Database/Memory and cpu"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Client-Server"}),"\n*",(0,r.jsx)(s.em,{children:"/Database/Client-Server/Network"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Config"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Options 1"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Options 2"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Log format"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Web/Webservices"}),"\n",(0,r.jsx)(s.em,{children:"/Database/SQL"}),"\n",(0,r.jsx)(s.em,{children:"/Database/php"})]}),"\n",(0,r.jsx)(s.p,{children:'Cl\xe9s suppl\xe9mentaires en mode "Propri\xe9t\xe9s utilisateur pour fichier de donn\xe9es" :'}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"/Database/Backup"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup/Scheduler"})," ",(0,r.jsx)(s.em,{children:"/Database/Backup/Configuration"}),"\n",(0,r.jsx)(s.em,{children:"/Database/Backup/Backup and restore"})]}),"\n",(0,r.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(s.p,{children:"Ouverture de la page \u201cM\xe9thodes\u201d des Pr\xe9f\xe9rences 4D :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/4D/Method editor")\n'})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(s.p,{children:"Acc\xe8s aux param\xe9trages des raccourcis clavier dans les Propri\xe9t\xe9s de la base avec verrouillage des autres propri\xe9t\xe9s :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(s.p,{children:"Ouverture des Propri\xe9t\xe9s de la base sur la premi\xe8re page des Propri\xe9t\xe9s de la base :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/")\n'})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(s.p,{children:'Acc\xe8s \xe0 la page Interface des Propri\xe9t\xe9s de la base en mode "Propri\xe9t\xe9s utilisateur" :'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface";False;1)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"Si la bo\xeete de dialogue des pr\xe9f\xe9rences/propri\xe9t\xe9s est valid\xe9e, la variable syst\xe8me OK retourne 1 ; si elle est annul\xe9e, OK retourne 0."})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(296540);const a={},t=r.createContext(a);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);