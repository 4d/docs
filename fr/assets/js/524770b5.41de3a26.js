"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36685"],{945831:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/soap-declaration","title":"SOAP DECLARATION","description":"SOAP DECLARATION ( variable ; type ; entr\xe9e_sortie {; alias} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/soap-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/soap-declaration","permalink":"/docs/fr/commands/soap-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-declaration.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"soap-declaration","title":"SOAP DECLARATION","slug":"/commands/soap-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Server)","permalink":"/docs/fr/category/web-services-server"},"next":{"title":"SOAP Get info","permalink":"/docs/fr/commands/soap-get-info"}}'),t=s("785893"),l=s("250065");let d={id:"soap-declaration",title:"SOAP DECLARATION",slug:"/commands/soap-declaration",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Utilisation de types XML",id:"utilisation-de-types-xml",level:5},{value:"M\xe9thode COMPILER_WEB",id:"m\xe9thode-compiler_web",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",types:"types",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," ( ",(0,t.jsx)(n.em,{children:"variable"})," ; ",(0,t.jsx)(n.em,{children:"type"})," ; entr\xe9e_sortie {; ",(0,t.jsx)(n.em,{children:"alias"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"variable"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Variable r\xe9f\xe9ren\xe7ant un argument SOAP entrant ou sortant"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type 4D vers lequel pointe l\u2019argument"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"entr\xe9e_sortie"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"1 = Entr\xe9e SOAP, 2 = Sortie SOAP"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"alias"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom publi\xe9 pour cet argument lors des \xe9changes SOAP"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," permet de d\xe9clarer explicitement le type des param\xe8tres utilis\xe9s dans une m\xe9thode 4D publi\xe9e comme Web Service."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsqu\u2019une m\xe9thode est publi\xe9e en tant que Web Service, les param\xe8tres standard ",(0,t.jsx)(n.em,{children:"$0"}),", ",(0,t.jsx)(n.em,{children:"$1"}),"... ",(0,t.jsx)(n.em,{children:"$n"})," sont utilis\xe9s pour d\xe9crire les param\xe8tres du Web Service aupr\xe8s du monde ext\xe9rieur (notamment dans le fichier WSDL). Le protocole SOAP exigeant que les param\xe8tres soient explicitement nomm\xe9s, 4D utilise par d\xe9faut les noms \u201CFourD_arg0, FourD_arg1 ... FourD_argn\u201D."]}),"\n",(0,t.jsx)(n.p,{children:"Ce fonctionnement par d\xe9faut peut toutefois s\u2019av\xe9rer probl\xe9matique pour les raisons suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Il n\u2019est pas possible de d\xe9clarer ",(0,t.jsx)(n.em,{children:"$0"})," ou ",(0,t.jsx)(n.em,{children:"$1"}),", ",(0,t.jsx)(n.em,{children:"$2"}),", etc. en tant que tableau. Il est donc n\xe9cessaire d\u2019utiliser des pointeurs, mais dans ce cas il reste \xe0 conna\xeetre le type des valeurs pour la g\xe9n\xe9ration du fichier WSDL."]}),"\n",(0,t.jsx)(n.li,{children:"Il peut \xeatre utile ou n\xe9cessaire de personnaliser les noms des param\xe8tres (entrants et sortants)."}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez vouloir utiliser des param\xe8tres tels que des structures XML et des r\xe9f\xe9rences DOM."}),"\n",(0,t.jsx)(n.li,{children:"Il peut \xe9galement \xeatre n\xe9cessaire de retourner des valeurs d'une taille sup\xe9rieure \xe0 32 Ko (limite des arguments de type Texte dans les bases de donn\xe9es en mode non Unicode)."}),"\n",(0,t.jsxs)(n.li,{children:["Enfin, ce fonctionnement rend impossible le retour de plus d\u2019une valeur par appel (dans ",(0,t.jsx)(n.em,{children:"$0"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," permet de s\u2019affranchir de ces limites. Vous pouvez ex\xe9cuter cette commande pour chaque param\xe8tre entrant et sortant et lui assigner un nom et un type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," M\xeame si la commande ",(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," est utilis\xe9e, il est n\xe9cessaire de d\xe9clarer les variables et tableaux 4D dans la m\xe9thode Compiler_Web \xe0 l\u2019aide les commandes du th\xe8me \u201CCompilateur\u201D."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"variable"})," la variable 4D \xe0 r\xe9f\xe9rencer dans l\u2019appel du Web Service."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention"}),", vous pouvez r\xe9f\xe9rencer uniquement des variables process ou les arguments des m\xe9thodes 4D (",(0,t.jsx)(n.em,{children:"$0"})," \xe0 ",(0,t.jsx)(n.em,{children:"$n"}),"). Les variables locales et interprocess ne peuvent pas \xeatre utilis\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, seuls des arguments de type Texte pouvant \xeatre utilis\xe9s, les r\xe9ponses du serveur SOAP sont en principe limit\xe9es \xe0 32 Ko dans les bases de donn\xe9es en mode non Unicode. Il est toutefois possible de retourner des arguments SOAP d\u2019une taille sup\xe9rieure \xe0 32 Ko, en utilisant des BLOBs. Pour cela, il suffit de d\xe9clarer les arguments en type BLOB avant d\u2019appeler la commande ",(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," (cf. exemple 4)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"C\xf4t\xe9 client, si vous souscrivez \xe0 ce type de Web Service avec 4D, l\u2019assistant Web Services g\xe9n\xe9rera naturellement une variable de type Texte dans la m\xe9thode proxy. Pour pouvoir l\u2019utiliser, il vous suffit de retyper cette variable de retour en BLOB dans la m\xe9thode proxy."}),"\n",(0,t.jsxs)(n.li,{children:["Cette commande ne prend pas en charge les objets blob (de type 4D.Blob). Veuillez vous reporter \xe0 la section ",(0,t.jsx)(n.em,{children:"Passer des blobs et objets blob \xe0 des commandes 4D"})," sur developer.4d.com."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"type"})," le type 4D correspondant. La plupart des types de variables et de tableaux 4D peuvent \xeatre employ\xe9s. Vous pouvez utiliser les constantes ci-dessous, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Types champs et variables"}),", ainsi que, pour les types XML, deux constantes du th\xe8me ",(0,t.jsx)(n.em,{children:"Web Services (Serveur)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boolean array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"22"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Date array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"17"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"15"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is BLOB"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is Boolean"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is date"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is integer"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is longint"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is real"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is string var"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is text"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is time"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LongInt array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"16"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Real array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"14"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"String array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"21"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"18"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is DOM reference"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"37"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.br,{})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is XML"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"36"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"entr\xe9e_sortie"})," une valeur indiquant si le param\xe8tre trait\xe9 est \u201Centrant\u201D (c\u2019est-\xe0-dire correspondant \xe0 une valeur re\xe7ue par la m\xe9thode) ou \u201Csortant\u201D (c\u2019est-\xe0-dire correspondant \xe0 une valeur retourn\xe9e par la m\xe9thode). Vous pouvez utiliser les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me \u201C",(0,t.jsx)(n.em,{children:"Web Services (Serveur)"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP input"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP output"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"utilisation-de-types-xml",children:"Utilisation de types XML"}),"\n",(0,t.jsx)(n.p,{children:'Vous pouvez d\xe9clarer des variables de type "structure XML" et "r\xe9f\xe9rence DOM", aussi bien en entr\xe9e qu\u2019en sortie, via les constantes Is XML et Is DOM reference. Lorsque des param\xe8tres de ce type sont d\xe9finis, aucun traitement ni encodage ne leur est appliqu\xe9, les donn\xe9es sont transmises telles quelles (cf. exemple 5).'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Param\xe8tres sortants :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Is XML indique que le param\xe8tre contient une structure XML,"}),"\n",(0,t.jsxs)(n.li,{children:["Is DOM reference indique que le param\xe8tre contient la r\xe9f\xe9rence DOM d\u2019une structure XML. Dans ce cas, l\u2019insertion de la structure XML dans le message SOAP \xe9quivaut \xe0 l\u2019ex\xe9cution de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Dans le cas de r\xe9f\xe9rences DOM utilis\xe9es en param\xe8tres sortants, il est recommand\xe9 d\u2019utiliser des r\xe9f\xe9rences globales, cr\xe9\xe9es par exemple au d\xe9marrage et closes \xe0 la fermeture de l\u2019application. En effet, une r\xe9f\xe9rence DOM cr\xe9\xe9e au sein du Web Service lui-m\xeame ne peut pas \xeatre referm\xe9e avec ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-close-xml",children:"DOM CLOSE XML"})," sinon le Web Service ne retourne plus rien. Les appels multiples au Web Service impliquent alors la cr\xe9ation d\u2019autant de r\xe9f\xe9rences DOM non referm\xe9es, ce qui peut provoquer une saturation de la m\xe9moire."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Param\xe8tres entrants :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Is XML indique que le param\xe8tre doit recevoir un argument XML envoy\xe9 par le client SOAP."}),"\n",(0,t.jsx)(n.li,{children:"Is DOM reference indique que le param\xe8tre doit recevoir la r\xe9f\xe9rence DOM d\u2019une structure XML correspondant \xe0 l\u2019argument XML envoy\xe9 par le client SOAP."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['Modification de la WSDL : Les structures XML seront d\xe9clar\xe9es par 4D du type "anyType" (ind\xe9termin\xe9) dans la WSDL. Si vous souhaitez typer pr\xe9cis\xe9ment une structure XML, vous devez sauvegarder le fichier WSDL et ajouter manuellement le sch\xe9ma de donn\xe9es souhait\xe9 dans la section ',(0,t.jsx)(n.types,{children:" de la WSDL."})]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"m\xe9thode-compiler_web",children:"M\xe9thode COMPILER_WEB"}),"\n",(0,t.jsxs)(n.p,{children:["Les arguments SOAP entrants r\xe9f\xe9renc\xe9s \xe0 l\u2019aide de variables 4D (et non via les arguments des m\xe9thodes 4D) doivent \xeatre pr\xe9alablement d\xe9clar\xe9s dans la m\xe9thode projet COMPILER_WEB. En effet, l\u2019utilisation de variables process dans les m\xe9thodes Web Services n\xe9cessite leur d\xe9claration avant l\u2019appel de la m\xe9thode. La m\xe9thode projet COMPILER_WEB est appel\xe9e, si elle existe, \xe0 chaque requ\xeate SOAP accept\xe9e. Par d\xe9faut, la m\xe9thode COMPILER_WEB n\u2019existe pas. Vous devez la cr\xe9er explicitement.",(0,t.jsx)(n.br,{}),"\nA noter que la m\xe9thode COMPILER_WEB est \xe9galement appel\xe9e par le serveur Web de 4D lors de la r\xe9ception de requ\xeates Web \u201Cclassiques\u201D de type POST (cf. section ",(0,t.jsx)(n.em,{children:"URLs et actions de formulaires"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"alias"})," le nom de l\u2019argument tel qu\u2019il doit appara\xeetre dans la WSDL et dans les \xe9changes SOAP. ",(0,t.jsx)(n.strong,{children:"Attention"}),", ce nom doit \xeatre unique dans l\u2019appel RPC (param\xe8tres entrants et sortants confondus), sinon seule la derni\xe8re d\xe9claration sera prise en compte par 4D."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," ",(0,t.jsx)(n.strong,{children:":"})," Les noms des arguments ne doivent pas d\xe9buter par un chiffre ni contenir d\u2019espaces. En outre, pour \xe9viter tout risque d\u2019incompatibilit\xe9, il est recommand\xe9 de ne pas utiliser de caract\xe8res \xe9tendus (tels que des caract\xe8res accentu\xe9s)."]}),"\n",(0,t.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,t.jsx)(n.em,{children:"alias"})," est omis, 4D utilisera par d\xe9faut le nom de la variable ou FourD_argN pour les arguments des m\xe9thodes 4D (",(0,t.jsx)(n.em,{children:"$0"})," \xe0 ",(0,t.jsx)(n.em,{children:"$n"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La commande ",(0,t.jsx)(n.strong,{children:"SOAP DECLARATION"})," doit \xeatre incluse dans la m\xe9thode publi\xe9e comme Web Service. Il n\u2019est pas possible de l\u2019appeler d\u2019une autre m\xe9thode."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple sp\xe9cifie un nom de param\xe8tre :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Dans la m\xe9thode COMPILER_WEB\n\xa0var $1 : Integer\n\xa0\n\xa0\xa0//Dans la m\xe9thode du service Web\n\xa0SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")\n\xa0\xa0//Lors de la g\xe9n\xe9ration du fichier WSDL et des appels SOAP, le libell\xe9 zipcode sera utilis\xe9 au lieu de fourD_arg1\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple permet de r\xe9cup\xe9rer un tableau de codes postaux sous forme d\u2019entiers longs :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Dans la m\xe9thode COMPILER_WEB\n\xa0ARRAY LONGINT(tab_codes;0)\n\xa0\n\xa0\xa0//Dans la m\xe9thode du service Web\n\xa0SOAP DECLARATION(tab_codes;LongInt array;SOAP input;"in_tab_codes")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple permet de r\xe9f\xe9rencer deux valeurs de retour sans sp\xe9cifier de nom d\u2019argument :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SOAP DECLARATION(ret1;Is longint;SOAP output)\n\xa0SOAP DECLARATION(ret2;Is longint;SOAP output)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple permet au serveur SOAP de 4D de retourner un argument d'une taille sup\xe9rieure \xe0 32 Ko dans les bases de donn\xe9es en mode non Unicode :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $0 : Blob\n\xa0SOAP DECLARATION($0;Is text;SOAP output)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Notez le type Is text (et non Is BLOB). Cette astuce permet un formatage correct de l\u2019argument."}),"\n",(0,t.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple illustre l'effet des diff\xe9rents types de d\xe9clarations :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Contact])\n\xa0\n\xa0\xa0//Construction d\u2019une structure XML \xe0 partir de la s\xe9lection de Contacts et stockage du XML dans un BLOB\n\xa0var ws_vx_xmlBlob : Blob\n\xa0getContactsXML(->ws_vx_xmlBlob)\n\xa0\xa0//R\xe9cup\xe9ration de la structure XML dans une variable texte\n\xa0var ws_vt_xml : Text\n\xa0ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)\n\xa0\xa0//R\xe9cup\xe9ration d\u2019une r\xe9f\xe9rence DOM vers la structure XML\n\xa0var ws_vt_refXML : Text\n\xa0ws_vt_refXML:=DOM Parse XML variable(ws_vt_xml)\n\xa0\n\xa0\xa0//Test des diff\xe9rentes d\xe9clarations\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")\n\xa0\xa0//Le XML est converti en Base64 par 4D\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")\n\xa0\xa0//Le XML est converti en texte par 4D (< > deviennent des entit\xe9s)\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"contactsXML")\n\xa0\xa0//Le XML est pass\xe9 en texte XML\n\xa0\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"contactsBlob")\n\xa0\xa0//Le XML est pass\xe9 en BLOB XML\n\xa0\n\xa0SOAP DECLARATION(ws_vt_refXML;Is DOM reference;SOAP output;"contactByRef")\n\xa0\xa0//Le XML est pass\xe9 en tant que r\xe9f\xe9rence\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/is-data-file-locked",children:"Is data file locked"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/soap-get-info",children:"SOAP Get info"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"782"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},l=r.createContext(t);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);