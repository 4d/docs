"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54244"],{237411:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/verify-data-file","title":"VERIFY DATA FILE","description":"VERIFY DATA FILE ( cheminStructure ; cheminDonn\xe9es ; objets ; options ; m\xe9thode {; tabTables {; tabChamps}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/verify-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/verify-data-file","permalink":"/docs/fr/commands/verify-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify-data-file","title":"VERIFY DATA FILE","slug":"/commands/verify-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VERIFY CURRENT DATA FILE","permalink":"/docs/fr/commands/verify-current-data-file"},"next":{"title":"Version type","permalink":"/docs/fr/commands/version-type"}}'),i=r("785893"),t=r("250065");let d={id:"verify-data-file",title:"VERIFY DATA FILE",slug:"/commands/verify-data-file",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VERIFY DATA FILE"})," ( ",(0,i.jsx)(n.em,{children:"cheminStructure"})," ; ",(0,i.jsx)(n.em,{children:"cheminDonn\xe9es"})," ; ",(0,i.jsx)(n.em,{children:"objets"})," ; ",(0,i.jsx)(n.em,{children:"options"})," ; ",(0,i.jsx)(n.em,{children:"m\xe9thode"})," {; ",(0,i.jsx)(n.em,{children:"tabTables"})," {; ",(0,i.jsx)(n.em,{children:"tabChamps"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cheminStructure"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s du fichier de structure de la base \xe0 v\xe9rifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cheminDonn\xe9es"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s du fichier de donn\xe9es de la base \xe0 v\xe9rifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objets"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objets \xe0 v\xe9rifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Options de v\xe9rification"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"m\xe9thode"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom de la m\xe9thode 4D de r\xe9troappel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tabTables"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ros des tables \xe0 v\xe9rifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tabChamps"}),(0,i.jsx)(n.td,{children:"2D Integer array, 2D Integer array, 2D Real array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ros des index \xe0 v\xe9rifier"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"VERIFY DATA FILE"})," effectue une v\xe9rification structurelle des objets contenus dans le fichier de donn\xe9es 4D d\xe9sign\xe9 par ",(0,i.jsx)(n.em,{children:"cheminStructure"})," et ",(0,i.jsx)(n.em,{children:"cheminDonn\xe9es"}),".Pour plus d\u2019informations sur le processus de v\xe9rification des donn\xe9es, reportez-vous au manuel Mode D\xe9veloppement."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"cheminStructure"})," d\xe9signe le fichier de structure (compil\xe9 ou non) associ\xe9 au fichier de donn\xe9es \xe0 v\xe9rifier. Il peut s\u2019agir du fichier de structure ouvert ou de tout autre fichier de structure. Vous devez passer un chemin d\u2019acc\xe8s complet, exprim\xe9 avec la syntaxe du syst\xe8me d\u2019exploitation. Vous pouvez \xe9galement passer une cha\xeene vide, dans ce cas une bo\xeete de dialogue standard d\u2019ouverture de fichiers appara\xeet, permettant \xe0 l\u2019utilisateur de d\xe9signer le fichier de structure \xe0 utiliser."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"cheminDonn\xe9es"})," d\xe9signe un fichier de donn\xe9es 4D (.4DD). Il doit correspondre au fichier de structure d\xe9fini par le param\xe8tre ",(0,i.jsx)(n.em,{children:"cheminStructure"}),". Attention, vous pouvez d\xe9signer le fichier de structure courant mais le fichier de donn\xe9es ne doit pas \xeatre le fichier courant (ouvert). Pour v\xe9rifier le fichier de donn\xe9es ouvert, utilisez la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"}),". Si vous tentez de v\xe9rifier le fichier de donn\xe9es courant avec la commande ",(0,i.jsx)(n.strong,{children:"VERIFY DATA FILE"}),", une erreur est g\xe9n\xe9r\xe9e.",(0,i.jsx)(n.br,{}),"\nLe fichier de donn\xe9es d\xe9sign\xe9 est ouvert en lecture seulement. Vous devez veiller \xe0 ce qu\u2019aucune application n\u2019acc\xe8de \xe0 ce fichier en \xe9criture, sinon les r\xe9sultats de la v\xe9rification pourront \xeatre fauss\xe9s.",(0,i.jsx)(n.br,{}),"\nVous pouvez passer dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"cheminDonn\xe9es"})," une cha\xeene vide, un nom de fichier ou un chemin d\u2019acc\xe8s complet, exprim\xe9 dans la syntaxe du syst\xe8me d\u2019exploitation. Si vous passez une cha\xeene vide, la bo\xeete de dialogue standard d\u2019ouverture de fichier appara\xeet, permettant \xe0 l\u2019utilisateur de d\xe9signer le fichier \xe0 v\xe9rifier (\xe0 noter dans ce cas qu\u2019il n\u2019est pas possible de s\xe9lectionner le fichier de donn\xe9es courant). Si vous passez uniquement un nom de fichier de donn\xe9es, 4D le recherchera au m\xeame niveau que le fichier de structure d\xe9fini."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"objets"})," permet de d\xe9signer le(s) type(s) d\u2019objets \xe0 v\xe9rifier. Deux types d\u2019objets peuvent \xeatre v\xe9rifi\xe9s : les enregistrements et les index. Utilisez les constantes suivantes, plac\xe9s dans le th\xe8me ",(0,i.jsx)(n.em,{children:"Maintenance fichier de donn\xe9es"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Verify all"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Verify indexes"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"Cette option contr\xf4le la coh\xe9rence physique des index, sans lien avec les donn\xe9es. Elle signale des cl\xe9s invalides mais ne permet pas de d\xe9tecter les cl\xe9s dupliqu\xe9es (deux index pointant vers le m\xeame enregistrement). Ce type d'erreur ne peut \xeatre d\xe9tect\xe9 qu'avec l'option Verify all."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Verify records"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pour v\xe9rifier les enregistrements et les index, passez le cumul ",(0,i.jsx)(n.em,{children:"V\xe9rifier enregistrements"}),"+",(0,i.jsx)(n.em,{children:"V\xe9rifier index"}),". La valeur 0 (z\xe9ro) permet \xe9galement d\u2019obtenir le m\xeame r\xe9sultat. L\u2019option Verify all effectue la v\xe9rification interne la plus compl\xe8te. Cette v\xe9rification est compatible avec la cr\xe9ation d\u2019un historique."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"})," permet de d\xe9finir les options de v\xe9rification. Les options suivantes sont disponibles, accessibles via des constantes du th\xe8me ",(0,i.jsx)(n.em,{children:"Maintenance fichier de donn\xe9es"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Do not create log file"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"16384"}),(0,i.jsx)(n.td,{children:"En principe, la commande cr\xe9e un fichier d\u2019historique au format xml (reportez-vous \xe0 la fin de la description de la commande). Vous pouvez annuler ce fonctionnement en passant cette option."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Timestamp log file name"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"262144"}),(0,i.jsx)(n.td,{children:"Lorsque cette option est pass\xe9e, le nom du fichier d'historique g\xe9n\xe9r\xe9 contiendra la date et l'heure de sa cr\xe9ation, par cons\xe9quent il ne remplacera aucun fichier d'historique \xe9ventuellement d\xe9j\xe0 g\xe9n\xe9r\xe9. Par d\xe9faut, si cette option n'est pas pass\xe9e, le nom du fichier n'est pas horodat\xe9, et chaque nouveau fichier g\xe9n\xe9r\xe9 remplace le pr\xe9c\xe9dent."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pour cr\xe9er l\u2019historique, passez 0 dans ",(0,i.jsx)(n.em,{children:"options"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"m\xe9thode"})," permet de d\xe9finir une m\xe9thode de r\xe9tro-appel qui sera r\xe9guli\xe8rement appel\xe9e durant la v\xe9rification. Si vous passez une cha\xeene vide ou un nom de m\xe9thode non valide, ce param\xe8tre est ignor\xe9 (aucune m\xe9thode n\u2019est appel\xe9e). Lorsqu\u2019elle est appel\xe9e, la m\xe9thode re\xe7oit jusqu\u2019\xe0 5 param\xe8tres en fonction des objets v\xe9rifi\xe9s et du type d\u2019\xe9v\xe9nement \xe0 l\u2019origine de l\u2019appel (cf. tableau des appels). Vous devez imp\xe9rativement d\xe9clarer ces param\xe8tres dans la m\xe9thode :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"$1"}),(0,i.jsx)(n.th,{children:"Entier long"}),(0,i.jsx)(n.th,{children:"Type de message (cf. tableau)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$2"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"Type d\u2019objet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$3"}),(0,i.jsx)(n.td,{children:"Texte"}),(0,i.jsx)(n.td,{children:"Message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$4"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$5"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Le tableau suivant d\xe9crit le contenu des param\xe8tres en fonction du type d\u2019\xe9v\xe9nement :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Ev\xe9nement"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"$1 (Entier long)"})}),(0,i.jsxs)(n.th,{children:[(0,i.jsx)(n.strong,{children:"$2 ("})," ",(0,i.jsx)(n.strong,{children:"Entier"}),"   ",(0,i.jsx)(n.strong,{children:"long)"})]}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"$3 (Texte)"})}),(0,i.jsxs)(n.th,{children:[(0,i.jsx)(n.strong,{children:"$4 ("})," ",(0,i.jsx)(n.strong,{children:"Entier"}),"   ",(0,i.jsx)(n.strong,{children:"long)"})]}),(0,i.jsxs)(n.th,{children:[(0,i.jsx)(n.strong,{children:"$5 ("})," ",(0,i.jsx)(n.strong,{children:"Entier"}),"   ",(0,i.jsx)(n.strong,{children:"long)"})]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Message"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Progression"}),(0,i.jsx)(n.td,{children:"Pourcentage"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"r\xe9alis\xe9 (0-100)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"V\xe9rification termin\xe9e(*)"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Type d\u2019objet(**)"}),(0,i.jsx)(n.td,{children:"Message OK"}),(0,i.jsx)(n.td,{children:"Table ou index"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"test"}),(0,i.jsx)(n.td,{children:"num\xe9ro"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Erreur"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Type d\u2019objet(**)"}),(0,i.jsx)(n.td,{children:"Texte d\u2019erreur"}),(0,i.jsx)(n.td,{children:"Table ou index"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"num\xe9ro"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Fin d\u2019ex\xe9cution"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"DONE"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Warning"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Type d'objet(**)"}),(0,i.jsx)(n.td,{children:"Texte d'erreur"}),(0,i.jsx)(n.td,{children:"Table ou index"}),(0,i.jsx)(n.td,{children:"R\xe9serv\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"num\xe9ro"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) L'\xe9v\xe9nement ",(0,i.jsx)(n.em,{children:"V\xe9rification termin\xe9e"})," ($1=2) n'est jamais renvoy\xe9 lorsque le mode de v\xe9rification est Verify all. Il n'est utilis\xe9 qu'en mode Verify records ou Verify indexes."]}),"\n",(0,i.jsxs)(n.p,{children:["(**) ",(0,i.jsx)(n.em,{children:"Type d\u2019objet"}),' : Lorsqu\u2019un objet est v\xe9rifi\xe9, un message "termin\xe9" ($1=2), erreur ($1=3) ou warning ($1=5) peut \xeatre envoy\xe9. Le type d\u2019objet retourn\xe9 dans $2 peut \xeatre l\u2019un des suivants :']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"0 = ind\xe9termin\xe9"}),"\n",(0,i.jsx)(n.li,{children:"4 = enregistrement"}),"\n",(0,i.jsx)(n.li,{children:"8 = index"}),"\n",(0,i.jsx)(n.li,{children:"16 = objet structure (contr\xf4le pr\xe9liminaire du fichier de donn\xe9es)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Cas particulier"})," : lorsque $4 = 0 pour $1 = 2, 3 ou 5, le message ne concerne pas une table mais le fichier de donn\xe9es dans son ensemble."]}),"\n",(0,i.jsx)(n.p,{children:"La m\xe9thode de r\xe9tro-appel doit \xe9galement retourner une valeur dans $0 (Entier long), permettant de contr\xf4ler l\u2019ex\xe9cution de l\u2019op\xe9ration :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"si $0 = 0, l\u2019op\xe9ration continue normalement"}),"\n",(0,i.jsx)(n.li,{children:"si $0 = -128, l\u2019op\xe9ration est stopp\xe9e sans erreur g\xe9n\xe9r\xe9e"}),"\n",(0,i.jsx)(n.li,{children:"si $0 = autre valeur, l\u2019op\xe9ration est stopp\xe9e et la valeur pass\xe9e dans $0 est retourn\xe9e en tant que num\xe9ro d\u2019erreur. Cette erreur peut \xeatre intercept\xe9e par une m\xe9thode d\u2019appel sur erreur."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Il n'est pas possible d'interrompre l'ex\xe9cution via $0 apr\xe8s que l'\xe9v\xe9nement ",(0,i.jsx)(n.em,{children:"Fin d'ex\xe9cution"})," ($4=1) a \xe9t\xe9 g\xe9n\xe9r\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"Deux tableaux facultatifs peuvent \xe9galement \xeatre utilis\xe9s par la commande :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le tableau ",(0,i.jsx)(n.em,{children:"tabTables"})," contient les num\xe9ros des tables dont les enregistrements doivent \xeatre v\xe9rifi\xe9s. Il permet de limiter la v\xe9rification \xe0 certaines tables. Si ce param\xe8tre n\u2019est pas pass\xe9 ou si le tableau est vide et que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objets"})," contient Verify records, toutes les tables sont v\xe9rifi\xe9es."]}),"\n",(0,i.jsxs)(n.li,{children:["Le tableau ",(0,i.jsx)(n.em,{children:"tabChamps"})," contient les num\xe9ros des champs index\xe9s dont les index doivent \xeatre v\xe9rifi\xe9s. Si ce param\xe8tre n\u2019est pas pass\xe9 ou si le tableau est vide et que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objets"})," contient Verify indexes, tous les index sont v\xe9rifi\xe9s. La commande ignore les champs non index\xe9s. Si un champ contient plusieurs index, tous les index sont v\xe9rifi\xe9s. Si un champ fait partie d\u2019un index composite, la totalit\xe9 de l\u2019index est v\xe9rifi\xe9e.",(0,i.jsx)(n.br,{}),"\nVous devez passer un tableau 2D dans ",(0,i.jsx)(n.em,{children:"tabChamps"}),". Pour chaque ligne du tableau :",(0,i.jsx)(n.br,{}),"\n- l\u2019\xe9l\xe9ment {0} contient le num\xe9ro de la table,",(0,i.jsx)(n.br,{}),"\n- les autres \xe9l\xe9ments {1...n} contiennent les num\xe9ros des champs."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, la commande ",(0,i.jsx)(n.strong,{children:"VERIFY DATA FILE"})," cr\xe9e un fichier d'historique au format xml (si vous n'avez pas pass\xe9 l'option Do not create log file, cf. param\xe8tre ",(0,i.jsx)(n.em,{children:"options"}),"). Son nom est bas\xe9 sur celui du fichier de structure de la base et il est plac\xe9 dans le dossier ",(0,i.jsx)(n.strong,{children:"Logs"})," de cette base. Par exemple, pour un fichier de structure nomm\xe9 \u201CmyDB.4db\u201D, le fichier d\u2019historique sera nomm\xe9 \u201CmyDB_Verify_Log.xml\u201D.",(0,i.jsx)(n.br,{}),"\nSi vous avez pass\xe9 l'option Timestamp log file name, le nom du fichier d'historique inclut la date et l'heure de sa cr\xe9ation sous la forme \"AAAA-MM-JJ HH-MM-SS\", ce qui donne par exemple : \u201CmyDB_Verify_Log_2015-09-27 15-20-35.xml\u201D. Ce principe permet d'\xe9viter que chaque nouveau fichier d'historique \xe9crase le pr\xe9c\xe9dent, mais pourra n\xe9cessiter ult\xe9rieurement une action manuelle afin de supprimer les fichiers superflus.",(0,i.jsx)(n.br,{}),"\nQuelle que soit l'option s\xe9lectionn\xe9e, d\xe8s lors qu'un fichier d'historique est g\xe9n\xe9r\xe9, son chemin est retourn\xe9 dans la variable syst\xe8me ",(0,i.jsx)(n.em,{children:"Document"})," \xe0 l'issue de l'ex\xe9cution de la commande."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification simple des donn\xe9es et des index :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomStruct;$NomData;Verify indexes+Verify records;Ne pas cr\xe9er d\u2019historique;"")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification compl\xe8te avec historique :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomStruct;$NomData;Verify all;0;"")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification des enregistrements uniquement :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomStruct;$NomData;Verify records;0;"")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification des enregistrements des tables 3 et 7 uniquement :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($tnumTables;2)\n\xa0$tnumTables{1}:=3\n\xa0$tnumTables{2}:=7\n\xa0VERIFY DATA FILE($NomStruct;$NomData;Verify records;0;"FollowScan";$tnumTables)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification d\u2019index sp\xe9cifiques (index du champ 1 de la table 4 et index des champs 2 et 3 de la table 5) :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($tnumTables;0)\xa0//non utilis\xe9 mais obligatoire\n\xa0ARRAY LONGINT($tindex;2;0)\xa0//2 lignes (colonnes ajout\xe9es ensuite)\n\xa0$tindex{1}{0}:=4\xa0// num\xe9ro de table dans l\u2019\xe9l\xe9ment 0\n\xa0APPEND TO ARRAY($tindex{1};1)\xa0// num\xe9ro du 1er champ \xe0 v\xe9rifier\n\xa0$tindex{2}{0}:=5\xa0// num\xe9ro de table dans l\u2019\xe9l\xe9ment 0\n\xa0APPEND TO ARRAY($tindex{2};2)\xa0// num\xe9ro du 1er champ \xe0 v\xe9rifier\n\xa0APPEND TO ARRAY($tindex{2};3)\xa0// num\xe9ro du 2e champ \xe0 v\xe9rifier\n\xa0VERIFY DATA FILE($NomStruct;$NomData;Verify indexes;0;"FollowScan";$tnumTables;$tindex)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,i.jsx)(n.p,{children:"V\xe9rification du fichier de donn\xe9es, cr\xe9ation et affichage du fichier d'historique :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE(Structure file;Data file;Tout v\xe9rifier;0;"")\n\xa0SHOW ON DISK(File(Fichier log v\xe9rification).platformPath)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(n.p,{children:"Si la m\xe9thode de r\xe9tro-appel pass\xe9e n\u2019existe pas, la v\xe9rification n\u2019est pas effectu\xe9e, une erreur est g\xe9n\xe9r\xe9e et la variable OK prend la valeur 0. Si un fichier d'historique a \xe9t\xe9 g\xe9n\xe9r\xe9, son chemin complet est retourn\xe9 dans la variable syst\xe8me Document."}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"939"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);