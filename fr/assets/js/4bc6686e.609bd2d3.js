"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29383"],{823359:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-print-option","title":"GET PRINT OPTION","description":"GET PRINT OPTION ( option ; valeur1 {; valeur2} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-print-option.md","sourceDirName":"commands-legacy","slug":"/commands/get-print-option","permalink":"/docs/fr/commands/get-print-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-print-option","title":"GET PRINT OPTION","slug":"/commands/get-print-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get print marker","permalink":"/docs/fr/commands/get-print-marker"},"next":{"title":"Get print preview","permalink":"/docs/fr/commands/get-print-preview"}}'),i=s("785893"),t=s("250065");let o={id:"get-print-option",title:"GET PRINT OPTION",slug:"/commands/get-print-option",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET PRINT OPTION"})," ( ",(0,i.jsx)(n.em,{children:"option"})," ; ",(0,i.jsx)(n.em,{children:"valeur1"})," {; ",(0,i.jsx)(n.em,{children:"valeur2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"option"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro d\u2019option ou Code d'option PDF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur1"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valeur 1 de l\u2019option"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valeur2"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valeur 2 de l\u2019option"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"GET PRINT OPTION"})," retourne la ou les valeur(s) courante(s) d\u2019une option d\u2019impression."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"option"})," vous permet de d\xe9signer l\u2019option \xe0 lire. Vous pouvez passer soit une constante du th\xe8me ",(0,i.jsx)(n.em,{children:"Options d'impression"})," (entier long), soit un code d'option PDF (cha\xeene)."]}),"\n",(0,i.jsx)(n.p,{children:"Les constantes d'option sont les suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Paper option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Si vous passez uniquement ",(0,i.jsx)(n.em,{children:"valeur1"}),", il contient le nom du papier. Si vous passez les deux param\xe8tres, ",(0,i.jsx)(n.em,{children:"valeur1"})," contient la largeur du papier et ",(0,i.jsx)(n.em,{children:"valeur2"})," contient la hauteur du papier. La largeur et la hauteur sont exprim\xe9es en points. Utilisez la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"})," pour conna\xeetre le nom, la hauteur et la largeur de tous les formats de papier propos\xe9s par l\u2019imprimante."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Orientation option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : 1=Portrait, 2=Paysage. Si une option d\u2019orientation diff\xe9rente est utilis\xe9e, ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"})," retourne 0 dans ",(0,i.jsx)(n.em,{children:"valeur1"}),".",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Versions 64 bits"})," : Cette option peut \xeatre appel\xe9e au sein d'une t\xe2che d'impression, ce qui signifie que vous pouvez passer du mode portrait au mode paysage et inversement dans la m\xeame t\xe2che d'impression."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scale option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : valeur d'\xe9chelle en pourcentage. Attention, certaines imprimantes ne permettent pas de modifier l\u2019\xe9chelle. Si vous passez une valeur invalide, la propri\xe9t\xe9 est remise \xe0 100% au moment de l'impression."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number of copies option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : nombre de copies \xe0 imprimer"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Paper source option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:["(Windows uniqument) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : num\xe9ro correspondant \xe0 l\u2019indice, dans le tableau des bacs retourn\xe9 par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),", du bac papier \xe0 utiliser. Cette option est utilisable sous Windows uniquement."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Color option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsxs)(n.td,{children:["(Windows uniquement) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : code indiquant le mode de prise en charge de la couleur : 1=Noir et blanc (monochrome), 2=Couleur.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Versions 64 bits"})," : Cette option n'est pas prise en charge dans les versions 64 bits de 4D (obsol\xe8te)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Destination option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"}),": code indiquant le type de destination de l\u2019impression : 1=Imprimante, 2=Fichier (PC)/PS (Mac), 3=Fichier PDF, 5=Ecran (option du pilote macOS)",(0,i.jsx)(n.br,{}),"Si ",(0,i.jsx)(n.em,{children:"valeur1"})," est diff\xe9rent de 1 ou de 5, ",(0,i.jsx)(n.em,{children:"valeur2"})," contient un chemin d\u2019acc\xe8s pour le document r\xe9sultant. Ce chemin sera utilis\xe9 jusqu\u2019\xe0 ce qu\u2019un autre chemin soit sp\xe9cifi\xe9. Si un fichier du m\xeame nom existe d\xe9j\xe0 \xe0 l\u2019emplacement de destination, il est remplac\xe9. Avec ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-print-option",children:"GET PRINT OPTION"}),", si la valeur courante n\u2019est pas dans la liste pr\xe9d\xe9finie, ",(0,i.jsx)(n.em,{children:"valeur1"})," contient -1 et la variable syst\xe8me OK vaut 1. Si une erreur se produit, ",(0,i.jsx)(n.em,{children:"valeur1"})," et la variable syst\xe8me OK valent 0.",(0,i.jsx)(n.br,{}),"Note (s",(0,i.jsx)(n.strong,{children:"ous Windows) :"})," Pour imprimer un PDF sous Windows, vous devez appeler ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"(Generic PDF driver) et d\xe9finir la destination d'impression 2 (Fichier) ou 3 (Fichier PDF). La destination d'impression 3 vous permet d'\xe9crire du code multi-plate-forme. De plus, si le pilote PDF Creator a \xe9t\xe9 install\xe9 et si une imprimante standard a \xe9t\xe9 s\xe9lectionn\xe9e, lorsque les valeurs (9;3;chemin) sont pass\xe9es, 4D lance automatiquement une impression PDF \"silencieuse\" et prend en compte les codes d'options \xe9ventuellement pass\xe9s (\xe0 noter que si vous passez une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"valeur2"})," ou omettez ce param\xe8tre, une bo\xeete de dialogue d\u2019enregistrement de fichier appara\xeet au moment de l\u2019impression). A l'issue de l'impression, les param\xe9trages courants sont restaur\xe9s."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Double sided option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"11"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"}),": 0=Recto ou standard, 1=Recto-verso. Si ",(0,i.jsx)(n.em,{children:"valeur1"}),"=1, ",(0,i.jsx)(n.em,{children:"valeur2"})," contient la reliure \xe0 appliquer : 0=Reliure \xe0 gauche (valeur par d\xe9faut), 1=Reliure en haut."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spooler document name option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"12"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : nom du document d\u2019impression, qui appara\xeet dans la liste des documents du serveur d\u2019impression. Le nom d\xe9fini par cette instruction sera utilis\xe9 pour tous les documents d\u2019impression de la session tant qu\u2019un nouveau nom ou une cha\xeene vide ne sera pas pass\xe9(e). Pour utiliser ou r\xe9tablir le fonctionnement standard (utilisation du nom de la m\xe9thode dans le cas d\u2019une m\xe9thode, nom de la table pour un enregistrement, etc.), passez une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"valeur1"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mac spool file format option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsxs)(n.td,{children:["(Mac uniquement) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : 0=impression en mode PDF (valeur par d\xe9faut), 1=impression en mode Postscript.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Notes :"})," ",(0,i.jsx)(n.br,{}),"- Cette option n\u2019a pas d\u2019effet sous Windows.",(0,i.jsx)(n.br,{}),"- Sous macOS, les impressions sont effectu\xe9es par d\xe9faut en mode PDF. Or, le pilote d\u2019impression PDF ne prend pas en charge les images PICT encapsulant des informations Postscript \u2014 ces images sont g\xe9n\xe9r\xe9es notamment par des logiciels de dessin vectoriel. Pour r\xe9soudre ce probl\xe8me, cette option permet de modifier le mode d\u2019impression sous macOS pour la session courante. Attention, l'impression en mode Postscript peut entra\xeener des effets de bords ind\xe9sirables.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Versions 64 bits :"})," Cette option n'est pas prise en charge ; elle est remplac\xe9e par l'utilisation de l'option Driver PDF g\xe9n\xe9rique de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hide printing progress option"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"14"}),(0,i.jsxs)(n.td,{children:["(Mac 32 bits uniquement) ",(0,i.jsx)(n.em,{children:"valeur1"})," uniquement : 1=masquer toutes les fen\xeatres de progression d'impression, 0=afficher les fen\xeatres de progression d'impression (fonctionnement par d\xe9faut). Cette option est particuli\xe8rement utile dans le cadre des impressions en PDF sous macOS.",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Note :"})," Il existe d\xe9j\xe0 une option d\u2019affichage Progression de l\u2019impression accessible via la bo\xeete de dialogue des Propri\xe9t\xe9s de la base (page Interface). Toutefois, elle est globale \xe0 l\u2019application et ne masque pas toutes les fen\xeatres sous macOS."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Un code d\u2019option PDF est constitu\xe9 de deux parties, ",(0,i.jsx)(n.em,{children:"TypeOption"})," et ",(0,i.jsx)(n.em,{children:"NomOption"}),', assembl\xe9es sous la forme "',(0,i.jsx)(n.em,{children:"TypeOption:NomOption"}),'".']}),"\n",(0,i.jsxs)(n.p,{children:["La commande retourne dans les param\xe8tres ",(0,i.jsx)(n.em,{children:"valeur1"})," et (facultativement) ",(0,i.jsx)(n.em,{children:"valeur2"})," la ou les valeur(s) courante(s) de l\u2019",(0,i.jsx)(n.em,{children:"option"})," sp\xe9cifi\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour plus d'informations sur les options, les codes d'option PDF et les valeurs possibles, reportez-vous \xe0 la description de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A noter les sp\xe9cificit\xe9s suivantes de la commande ",(0,i.jsx)(n.strong,{children:"GET PRINT OPTION"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 1 (Paper option) : retourne le nom du papier courant dans ",(0,i.jsx)(n.em,{children:"valeur1"})," si ",(0,i.jsx)(n.em,{children:"valeur2"})," est omis. Si ",(0,i.jsx)(n.em,{children:"valeur2"})," est pass\xe9, la commande retourne respectivement la largeur et la hauteur du papier dans ",(0,i.jsx)(n.em,{children:"valeur1"})," et ",(0,i.jsx)(n.em,{children:"valeur2"}),". Utilisez la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"})," pour conna\xeetre le nom, la hauteur et la largeur de tous les formats de papier propos\xe9s par l\u2019imprimante."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 2 (Orientation option) : retourne 1 (Portrait) ou 2 (Paysage). Si une option d\u2019orientation diff\xe9rente est utilis\xe9e, valeur1 prend la valeur 0."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 5 (Paper source option) : retourne dans ",(0,i.jsx)(n.em,{children:"valeur1"})," l\u2019indice, dans le tableau des bacs retourn\xe9 par la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),", du bac papier utilis\xe9 (",(0,i.jsx)(n.em,{children:"valeur2"})," doit \xeatre omis).",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Note :"})," Cette option est utilisable sous Windows uniquement."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 8 (Color option) : retourne dans ",(0,i.jsx)(n.em,{children:"valeur1"})," un code indiquant le mode de prise en charge de la couleur : 1=Noir et blanc (monochrome), 2=Couleur.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Note :"})," Cette option est utilisable sous Windows uniquement."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 9 (Destination option) : si la valeur courante n\u2019est pas dans la liste pr\xe9d\xe9finie, ",(0,i.jsx)(n.em,{children:"valeur1"})," contient -1 et la variable syst\xe8me OK vaut 1. Si une erreur se produit, ",(0,i.jsx)(n.em,{children:"valeur1"})," et la variable syst\xe8me OK valent 0. Si ",(0,i.jsx)(n.em,{children:"valeur1"})," contient une valeur pr\xe9d\xe9finie diff\xe9rente de 1 ou de 5, ",(0,i.jsx)(n.em,{children:"valeur2"})," contient le chemin d\u2019acc\xe8s du fichier imprim\xe9."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 11 (Double sided option) : retourne 0 (Standard ou Recto, valeur par d\xe9faut) ou 1 (Recto-verso) dans ",(0,i.jsx)(n.em,{children:"valeur1"}),". Si ",(0,i.jsx)(n.em,{children:"valeur1"})," vaut 1, ",(0,i.jsx)(n.em,{children:"valeur2"})," peut retourner une des valeurs suivantes : 0=Reliure \xe0 gauche (par d\xe9faut), 1=Reliure en haut.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Note :"})," Cette option est utilisable sous Windows uniquement."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"option"})," = 12 (Spooler document name option) : retourne dans ",(0,i.jsx)(n.em,{children:"valeur1"})," le nom du document d\u2019impression courant, s\u2019il a \xe9t\xe9 d\xe9fini au pr\xe9alable. Sinon, une cha\xeene vide est retourn\xe9e."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," La commande ",(0,i.jsx)(n.strong,{children:"GET PRINT OPTION"})," prend principalement en charge les imprimantes PostScript. Elle peut \xeatre utilis\xe9e avec d'autres types d'imprimantes, telles que PCL ou Ink, mais dans ce cas il est possible que certaines options ne soient pas disponibles."]}),"\n",(0,i.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, sinon elle prend la valeur 0."}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"734"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let i={},t=r.createContext(i);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);