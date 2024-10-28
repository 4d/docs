"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77695],{609179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=s(474848),r=s(28453);const t={id:"set-print-option",title:"SET PRINT OPTION",slug:"/commands/set-print-option",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/set-print-option",title:"SET PRINT OPTION",description:"SET PRINT OPTION ( option ; valeur1 {; valeur2} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-print-option.md",sourceDirName:"commands-legacy",slug:"/commands/set-print-option",permalink:"/docs/fr/commands/set-print-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-print-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-print-option",title:"SET PRINT OPTION",slug:"/commands/set-print-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PRINT MARKER",permalink:"/docs/fr/commands/set-print-marker"},next:{title:"SET PRINT PREVIEW",permalink:"/docs/fr/commands/set-print-preview"}},l={},a=[{value:"Description",id:"description",level:4},{value:"options et valeurs",id:"options-et-valeurs",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET PRINT OPTION"})," ( ",(0,i.jsx)(n.em,{children:"option"})," ; ",(0,i.jsx)(n.em,{children:"valeur1"})," {; ",(0,i.jsx)(n.em,{children:"valeur2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro d\u2019option ou Code d'option PDF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur1"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valeur 1 de l\u2019option"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur2"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valeur 2 de l\u2019option"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET PRINT OPTION"})," permet de modifier par programmation la valeur d\u2019une option d\u2019impression. Chaque option d\xe9finie \xe0 l\u2019aide de cette commande est appliqu\xe9e aux ",(0,i.jsx)(n.a,{href:"https://developer.4d.com/docs/fr/settings/compatibility/",children:"param\xe8tres courants de l'impression 4D"})," tant qu\u2019aucune autre commande modifiant les param\xe8tres d\u2019impression (",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-settings",children:"PRINT SETTINGS"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," sans le param\xe8tre ",(0,i.jsx)(n.em,{children:">"}),", etc.) n\u2019est appel\xe9e. Si une t\xe2che d'impression a \xe9t\xe9 ouverte (ex : avec ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/open-printing-job",children:"OPEN PRINTING JOB"}),"), l'option est d\xe9finie pour la t\xe2che et n'est pas modifiable tant que la t\xe2che n'est pas termin\xe9e (\xe0 l'exception de Orientation option, voir ci-dessous) ."]}),"\n",(0,i.jsx)(n.h5,{id:"options-et-valeurs",children:"options et valeurs"}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"option"})," vous permet de d\xe9signer l\u2019option \xe0 modifier. Vous pouvez passer une des constantes pr\xe9d\xe9finies du th\xe8me \u201c",(0,i.jsx)(n.em,{children:"Options d'impression"}),"\u201d list\xe9es ci-dessous. Passez dans les param\xe8tres ",(0,i.jsx)(n.em,{children:"valeur1"})," et (facultativement) ",(0,i.jsx)(n.em,{children:"valeur2"})," la ou les nouvelle(s) valeur(s) de l\u2019",(0,i.jsx)(n.em,{children:"option"})," sp\xe9cifi\xe9e. Le nombre et la nature des valeurs \xe0 passer d\xe9pend du type d\u2019option sp\xe9cifi\xe9e."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Paper option"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Si vous passez uniquement ",(0,i.jsx)(n.em,{children:"valeur1"}),", il contient le nom du papier. Si vous passez les deux param\xe8tres, ",(0,i.jsx)(n.em,{children:"valeur1"})," contient la largeur du papier et ",(0,i.jsx)(n.em,{children:"valeur2"})," contient la hauteur du papier. La largeur et la hauteur sont exprim\xe9es en pixels \xe9cran. Utilisez la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"})," pour conna\xeetre le nom, la hauteur et la largeur de tous les formats de papier propos\xe9s par l\u2019imprimante."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Orientation option"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : 1=Portrait, 2=Paysage. Si une option d\u2019orientation diff\xe9rente est utilis\xe9e, ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"})," retourne 0 dans ",(0,i.jsx)(n.em,{children:"valeur1"}),". Cette option peut \xeatre appel\xe9e au sein d'une t\xe2che d'impression, ce qui signifie que vous pouvez passer du mode portrait au mode paysage et inversement dans la m\xeame t\xe2che d'impression."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scale option"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : valeur d'\xe9chelle en pourcentage. Attention, certaines imprimantes ne permettent pas de modifier l\u2019\xe9chelle. Si vous passez une valeur invalide, la propri\xe9t\xe9 est remise \xe0 100% au moment de l'impression."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number of copies option"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : nombre de copies \xe0 imprimer"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Paper source option"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:["(Windows uniqument) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : num\xe9ro correspondant \xe0 l\u2019indice, dans le tableau des bacs retourn\xe9 par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),", du bac papier \xe0 utiliser. Cette option est utilisable sous Windows uniquement."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Destination option"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"}),": code indiquant le type de destination de l\u2019impression : 1=Imprimante, 2=Fichier (PC)/PS (Mac), 3=Fichier PDF, 5=Ecran (option du pilote OS X)",(0,i.jsx)(n.br,{}),"Si ",(0,i.jsx)(n.em,{children:"valeur1"})," est diff\xe9rent de 1 ou de 5, ",(0,i.jsx)(n.em,{children:"valeur2"})," contient un chemin d\u2019acc\xe8s pour le document r\xe9sultant. Ce chemin sera utilis\xe9 jusqu\u2019\xe0 ce qu\u2019un autre chemin soit sp\xe9cifi\xe9. Si un fichier du m\xeame nom existe d\xe9j\xe0 \xe0 l\u2019emplacement de destination, il est remplac\xe9. Avec ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),", si la valeur courante n\u2019est pas dans la liste pr\xe9d\xe9finie, ",(0,i.jsx)(n.em,{children:"valeur1"})," contient -1 et la variable syst\xe8me OK vaut 1. Si une erreur se produit, ",(0,i.jsx)(n.em,{children:"valeur1"})," et la variable syst\xe8me OK valent 0.",(0,i.jsx)(n.br,{}),"Note (s",(0,i.jsx)(n.strong,{children:"ous Windows) :"})," Pour imprimer un PDF sous Windows, vous devez appeler ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"(Generic PDF driver) et d\xe9finir la destination d'impression 2 (Fichier) ou 3 (Fichier PDF). La destination d'impression 3 vous permet d'\xe9crire du code multi-plate-forme."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Double sided option"}),(0,i.jsx)(n.td,{children:"11"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"}),": 0=Recto ou standard, 1=Recto-verso. Si ",(0,i.jsx)(n.em,{children:"valeur1"}),"=1, ",(0,i.jsx)(n.em,{children:"valeur2"})," contient la reliure \xe0 appliquer : 0=Reliure \xe0 gauche (valeur par d\xe9faut), 1=Reliure en haut."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spooler document name option"}),(0,i.jsx)(n.td,{children:"12"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : nom du document d\u2019impression, qui appara\xeet dans la liste des documents du serveur d\u2019impression. Le nom d\xe9fini par cette instruction sera utilis\xe9 pour tous les documents d\u2019impression de la session tant qu\u2019un nouveau nom ou une cha\xeene vide ne sera pas pass\xe9(e). Pour utiliser ou r\xe9tablir le fonctionnement standard (utilisation du nom de la m\xe9thode dans le cas d\u2019une m\xe9thode, nom de la table pour un enregistrement, etc.), passez une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"valeur1"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Page range option"}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"}),"=num\xe9ro de la premi\xe8re page \xe0 imprimer (valeur par d\xe9faut 1) et (optionnel) ",(0,i.jsx)(n.em,{children:"valeur2"}),"=num\xe9ro de la derni\xe8re page \xe0 imprimer (valeur par d\xe9faut -1 = fin du document)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Legacy printing layer option"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsxs)(n.td,{children:["(Windows uniquement) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : 1=s\xe9lectionner l'ancienne couche d'impression GDI pour toutes les t\xe2ches d'impression suivantes, 0=s\xe9lectionner la couche d'impression D2D (d\xe9faut). Ce s\xe9lecteur est principalement destin\xe9, dans les applications 4D sous Windows, \xe0 permettre aux plug-ins d'ancienne g\xe9n\xe9ration d'imprimer dans des t\xe2ches d'impression 4D."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print preview option"}),(0,i.jsx)(n.td,{children:"18"}),(0,i.jsxs)(n.td,{children:["(Uniquement pour Windows) ",(0,i.jsx)(n.em,{children:"valeur1"})," : Format \xe0 utiliser pour les aper\xe7us avant impression sous Windows. Valeurs disponibles : kp preview automatic (par d\xe9faut) : Utiliser l'imprimante et la visionneuse XPS si elles sont disponibles, sinon utiliser l'imprimante ou la visionneuse PDF si elles sont disponibles, sinon g\xe9n\xe9rer une erreur.. kp preview XPS : Utiliser l'imprimante et la visionneuse XPS si elle est disponible, sinon g\xe9n\xe9rer une erreur. kp preview PDF : Utiliser l'imprimante et la visionneuse PDF si elles sont disponibles, sinon g\xe9n\xe9rer une erreur. ",(0,i.jsx)(n.em,{children:"valeur2"})," (ne peut \xeatre utilis\xe9 qu'avec ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),".): Format d'aper\xe7u avant impression utilis\xe9 sous Windows (peut diff\xe9rer de la valeur1 en fonction de la configuration). Valeurs disponibles : kp preview none : Aucun format disponible. kp preview XPS : Imprimante et visionneuse XPS utilis\xe9es. kp preview PDF : Imprimante et visionneuse PDF utilis\xe9es."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Une fois fix\xe9e \xe0 l\u2019aide de cette commande, une option d\u2019impression sera conserv\xe9e durant toute la session pour l\u2019application 4D enti\xe8re. Elle sera utilis\xe9e par les commandes ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-record",children:"PRINT RECORD"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/qr-report",children:"QR REPORT"})," et par toutes les impressions de 4D, y compris en mode D\xe9veloppement."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Il est imp\xe9ratif d\u2019utiliser le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:">"})," avec les commandes ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-record",children:"PRINT RECORD"})," et ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/page-break",children:"PAGE BREAK"})," afin de ne pas r\xe9initialiser les options d\u2019impression d\xe9finies \xe0 l\u2019aide de la commande ",(0,i.jsx)(n.strong,{children:"SET PRINT OPTION"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET PRINT OPTION"})," prend principalement en charge les imprimantes PostScript. Elle peut \xeatre utilis\xe9e avec d'autres types d'imprimantes, telles que PCL ou Ink, mais dans ce cas il est possible que certaines options ne soient pas disponibles."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["La valeur de l'option Orientation option peut \xeatre modifi\xe9e \xe0 l'int\xe9rieur d'une m\xeame t\xe2che d'impression. A noter que l'option doit \xeatre d\xe9finie avant la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/page-break",children:"PAGE BREAK"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Personnes])\n\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;1)\xa0//portrait\n\xa0\xa0\xa0\xa0Print form([Personnes];"Form_Vert")\n\xa0\n\xa0\xa0\xa0\xa0SET PRINT OPTION(Orientation option;2)\xa0//paysage\n\xa0\xa0\xa0\xa0PAGE BREAK\xa0//doit \xeatre imp\xe9rativement appel\xe9 APRES l\'option\n\xa0\xa0\xa0\xa0Print form([Personnes];"Form_Hor")\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, sinon elle prend la valeur 0."}),"\n",(0,i.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,i.jsxs)(n.p,{children:["Si la valeur pass\xe9e pour une ",(0,i.jsx)(n.em,{children:"option"})," est invalide ou si elle n'est pas disponible sur l'imprimante, la commande retourne une erreur (que vous pouvez intercepter \xe0 l\u2019aide d\u2019une m\xe9thode de gestion d\u2019erreur install\xe9e par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),") et la valeur courante de l\u2019option est inchang\xe9e."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Options d'impression"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(296540);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);