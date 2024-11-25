"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22742"],{630290:function(e,n,l){l.r(n),l.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>c,assets:()=>u,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"Concepts/arrays","title":"Tableaux","description":"Un tableau est une s\xe9rie ordonn\xe9e de variables de m\xeame type. Chaque variable est appel\xe9e un \xe9l\xe9ment du tableau. La taille du tableau doit \xeatre d\xe9finie au moment de sa cr\xe9ation ; vous pouvez ensuite la modifier aussi souvent que n\xe9cessaire en ajoutant, ins\xe9rant, ou supprimant des \xe9l\xe9ments, ou en appelant de nouveau la commande que vous avez utilis\xe9e pour cr\xe9er le tableau. Les \xe9l\xe9ments sont num\xe9rot\xe9s de 1 \xe0 N, o\xf9 N est la taille du tableau. Un tableau a toujours un \xe9l\xe9ment z\xe9ro. Les tableaux sont des variables 4D. Comme toute variable, un tableau a une port\xe9e et suit les r\xe8gles du langage 4D, bien qu\'il existe quelques diff\xe9rences sp\xe9cifiques.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Concepts/arrays.md","sourceDirName":"Concepts","slug":"/Concepts/arrays","permalink":"/docs/fr/20-R6/Concepts/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"arrays","title":"Tableaux"},"sidebar":"docs","previous":{"title":"Variables","permalink":"/docs/fr/20-R6/Concepts/variables"},"next":{"title":"Methods","permalink":"/docs/fr/20-R6/Concepts/methods"}}'),s=l("785893"),t=l("250065");let r={id:"arrays",title:"Tableaux"},i=void 0,u={},d=[{value:"Cr\xe9er des tableaux",id:"cr\xe9er-des-tableaux",level:2},{value:"Affecter des valeurs dans un tableau",id:"affecter-des-valeurs-dans-un-tableau",level:2},{value:"Affecter un tableau \xe0 un autre",id:"affecter-un-tableau-\xe0-un-autre",level:3},{value:"Utiliser l&#39;\xe9l\xe9ment z\xe9ro d&#39;un tableau",id:"utiliser-l\xe9l\xe9ment-z\xe9ro-dun-tableau",level:2},{value:"Tableaux \xe0 deux dimensions",id:"tableaux-\xe0-deux-dimensions",level:2},{value:"Tableaux et m\xe9moire",id:"tableaux-et-m\xe9moire",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Un ",(0,s.jsx)(n.strong,{children:"tableau"})," est une s\xe9rie ordonn\xe9e de ",(0,s.jsx)(n.strong,{children:"variables"})," de m\xeame type. Chaque variable est appel\xe9e un ",(0,s.jsx)(n.strong,{children:"\xe9l\xe9ment"})," du tableau. La taille du tableau doit \xeatre d\xe9finie au moment de sa cr\xe9ation ; vous pouvez ensuite la modifier aussi souvent que n\xe9cessaire en ajoutant, ins\xe9rant, ou supprimant des \xe9l\xe9ments, ou en appelant de nouveau la commande que vous avez utilis\xe9e pour cr\xe9er le tableau. Les \xe9l\xe9ments sont num\xe9rot\xe9s de 1 \xe0 N, o\xf9 N est la taille du tableau. Un tableau a toujours un ",(0,s.jsx)(n.a,{href:"#using-the-element-zero-of-an-array",children:"\xe9l\xe9ment z\xe9ro"}),". Les tableaux sont des variables 4D. Comme toute variable, un tableau a une port\xe9e et suit les r\xe8gles du langage 4D, bien qu'il existe quelques diff\xe9rences sp\xe9cifiques."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["G\xe9n\xe9ralement, il est recommand\xe9 d'utiliser des ",(0,s.jsx)(n.strong,{children:"collections"})," plut\xf4t que des ",(0,s.jsx)(n.strong,{children:"tableaux"}),". Les collections sont plus souples et fournissent un large \xe9ventail de m\xe9thodes sp\xe9cifiques. Pour plus d'informations, veuillez consutler la section ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/collection",children:"Collection"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9er-des-tableaux",children:"Cr\xe9er des tableaux"}),"\n",(0,s.jsxs)(n.p,{children:["Vous cr\xe9ez un tableau au moyen de l'une des commandes de d\xe9claration du th\xe8me \"Tableaux\". Chaque commande de d\xe9claration de tableau peut cr\xe9er ou redimensionner des tableaux \xe0 une ou \xe0 deux dimensions. Pour plus d'informations sur les tableaux \xe0 deux dimensions, reportez-vous \xe0 la section ",(0,s.jsx)(n.a,{href:"#two-dimensional-arrays",children:"Tableaux \xe0 deux dimensions"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Cette ligne de code cr\xe9e (d\xe9clare) un tableau d'entiers de 10 \xe9l\xe9ments :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" ARRAY INTEGER(aiAnArray;10)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensuite, cette ligne de code redimensionne le m\xeame tableau \xe0 20 \xe9l\xe9ments :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;20)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enfin, cette ligne de code redimensionne le m\xeame tableau \xe0 0 \xe9l\xe9ment :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;0)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"affecter-des-valeurs-dans-un-tableau",children:"Affecter des valeurs dans un tableau"}),"\n",(0,s.jsx)(n.p,{children:"Vous r\xe9f\xe9rencez les \xe9l\xe9ments d'un tableau en utilisant des accolades ({\u2026} ). Un nombre entre accolades donne acc\xe8s \xe0 l'adresse d'un \xe9l\xe9ment particulier. L'exemple ci-dessous place cinq noms dans le tableau nomm\xe9 atNoms et les affiche ensuite dans une fen\xeatre d'alerte :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notez la syntaxe atNoms{$vlElem}. Au lieu de sp\xe9cifier un nombre litt\xe9ral comme atNoms{3}, vous pouvez utiliser une variable num\xe9rique indiquant \xe0 quel \xe9l\xe9ment d'un tableau vous acc\xe9dez. Si vous utilisez les it\xe9rations permises par les structures r\xe9p\xe9titives (",(0,s.jsx)(n.code,{children:"For...End for"}),", ",(0,s.jsx)(n.code,{children:"Repeat...Until"})," or ",(0,s.jsx)(n.code,{children:"While...End while"}),"), vous pouvez acc\xe9der \xe0 tout ou partie des \xe9l\xe9ments d'un tableau avec tr\xe8s peu de code."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important :"})," Veillez \xe0 ne pas confondre l'op\xe9rateur d'affectation (:=) avec l'op\xe9rateur de comparaison \xe9gal (=). L'affectation et la comparaison sont deux op\xe9rations totalement diff\xe9rentes."]}),"\n",(0,s.jsx)(n.h3,{id:"affecter-un-tableau-\xe0-un-autre",children:"Affecter un tableau \xe0 un autre"}),"\n",(0,s.jsxs)(n.p,{children:["Contrairement \xe0 ce que vous pouvez faire avec des variables de type Texte ou Cha\xeene, vous ne pouvez pas affecter un tableau \xe0 un autre tableau. Pour copier (affecter) un tableau \xe0 un autre, utilisez la fonction ",(0,s.jsx)(n.code,{children:"COPY ARRAY"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"utiliser-l\xe9l\xe9ment-z\xe9ro-dun-tableau",children:"Utiliser l'\xe9l\xe9ment z\xe9ro d'un tableau"}),"\n",(0,s.jsx)(n.p,{children:"Un tableau a toujours un \xe9l\xe9ment z\xe9ro. M\xeame si l'\xe9l\xe9ment z\xe9ro n'est pas affich\xe9 lorsqu'un tableau est utilis\xe9 pour remplir un objet de formulaire, vous pouvez l'utiliser sans r\xe9serve(*) dans le langage."}),"\n",(0,s.jsx)(n.p,{children:"Voici un autre exemple : vous souhaitez initialiser un objet de formulaire avec une valeur texte mais sans d\xe9finir de valeur par d\xe9faut. Vous pouvez utiliser l'\xe9l\xe9ment z\xe9ro du tableau :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // m\xe9thode pour une combo box ou une liste d\xe9roulante\n// li\xe9e au tableau de variables atName\nCase of\n:(Form event code=On Load)\n// Initialise le tableau (comme indiqu\xe9 ci-dessus)\n// Mais utilise l\'\xe9l\xe9ment z\xe9ro\n		ARRAY TEXT(atName;5)\n		atName{0}:=Veuillez s\xe9lectionner un \xe9l\xe9ment"\n		atName{1}:="Text1"\n		atName{2}:="Text2"\n		atName{3}:="Text3"\n		atName{4}:="Text4"\n		atName{5}:="Text5"\n	// Positionne le tableau sur l\'\xe9l\xe9ment 0\n		atName: = 0\nEnd case\n'})}),"\n",(0,s.jsx)(n.p,{children:"(*) Cependant, il y a une exception : dans un tableau de type List Box, l'\xe9l\xe9ment z\xe9ro est utilis\xe9 en interne pour stocker la valeur pr\xe9c\xe9dente d'un \xe9l\xe9ment en cours d'\xe9dition, il n'est donc pas possible de l'utiliser dans ce contexte particulier."}),"\n",(0,s.jsx)(n.h2,{id:"tableaux-\xe0-deux-dimensions",children:"Tableaux \xe0 deux dimensions"}),"\n",(0,s.jsx)(n.p,{children:"Chaque commande de d\xe9claration de tableau permet de cr\xe9er ou de redimensionner des tableaux \xe0 une ou \xe0 deux dimensions. Voici un exemple :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" ARRAY TEXT(atTopics;100;50) // Cr\xe9er un tableau texte compos\xe9 de 100 lignes de 50 colonnes\n"})}),"\n",(0,s.jsx)(n.p,{children:"Les tableaux \xe0 deux dimensions sont essentiellement des objets de langage ; vous ne pouvez ni les afficher ni les imprimer."}),"\n",(0,s.jsx)(n.p,{children:"Dans l'exemple pr\xe9d\xe9dent :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"atTopics est un tableau \xe0 deux dimensions"}),"\n",(0,s.jsx)(n.li,{children:"atTopics{8}{5} est le 5e \xe9l\xe9ment (5e colonne...) de la 8e rang\xe9e"}),"\n",(0,s.jsx)(n.li,{children:"atTopics{20} est la 20e ligne et est elle-m\xeame un tableau \xe0 une dimension"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Size of array(atTopics)"})," retourne 100, qui est le nombre de lignes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Size of array(atTopics{17})"})," retourne 50, qui est le nombre de colonnes de la 17e ligne"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dans l'exemple suivant, un pointeur vers chaque champ de chaque table de la base est stock\xe9 dans un tableau \xe0 deux dimensions :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Cr\xe9er autant de lignes (vides et sans colonnes) qu\'il y a de tables\n  $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) //Tableau 2D avec N lignes et z\xe9ro colonnes\n  // Pour chaque table\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Get last field number($vlTable)\n  // Donner la valeur des \xe9l\xe9ments\n             $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  // Ins\xe9rer une colonne dans la ligne de la table en cours\n              INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  // Affecter la "celulle" avec le pointeur\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n'})}),"\n",(0,s.jsx)(n.p,{children:"Dans la mesure o\xf9 le tableau \xe0 deux dimensions a \xe9t\xe9 initialis\xe9, vous pouvez obtenir ainsi les pointeurs vers les champs d'une table de votre choix :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"  // Obtenir les pointeurs vers les champs pour la table affich\xe9e \xe0 l'\xe9cran :\n COPY ARRAY(\u25CAapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Initialiser les champs bool\xe9ens et date\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Comme le montre cet exemple, les lignes des tableaux \xe0 deux dimensions peuvent \xeatre ou non de la m\xeame taille."]}),"\n",(0,s.jsx)(n.h2,{id:"tableaux-et-m\xe9moire",children:"Tableaux et m\xe9moire"}),"\n",(0,s.jsx)(n.p,{children:"A la diff\xe9rence des donn\xe9es que vous stockez sur disque lorsque vous utilisez des tables ou des enregistrements, un tableau r\xe9side toujours en m\xe9moire dans son int\xe9gralit\xe9."}),"\n",(0,s.jsx)(n.p,{children:"Par exemple, si tous les codes postaux am\xe9ricains \xe9taient saisis dans une table [Codes Postaux], celle-ci contiendrait environ 100 000 enregistrements. De plus, cette table comporterait plusieurs champs : le code postal lui-m\xeame ainsi que la ville, le comt\xe9 et l'\xe9tat correspondants. Si vous ne s\xe9lectionnez que les codes postaux de Californie, 4D cr\xe9e la s\xe9lection d'enregistrements correspondante \xe0 l'int\xe9rieur de la table [Codes Postaux], et ensuite ne charge les enregistrements que lorsque vous en avez besoin (par exemple, pour les afficher ou les imprimer). En d'autres termes, vous travaillez avec une s\xe9rie ordonn\xe9e de valeurs (du m\xeame type pour chaque champ) partiellement charg\xe9e du disque en m\xe9moire."}),"\n",(0,s.jsx)(n.p,{children:"Proc\xe9der de la m\xeame mani\xe8re avec les tableaux serait laborieux, pour les raisons suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pour maintenir les quatre types d'information (code postal, ville, comt\xe9, \xe9tat), vous auriez besoin de quatre grands tableaux en m\xe9moire."}),"\n",(0,s.jsx)(n.li,{children:"Comme un tableau r\xe9side en m\xe9moire dans son int\xe9gralit\xe9, vous seriez oblig\xe9 de garder tous les codes postaux en m\xe9moire pendant toute la session de travail, m\xeame si les donn\xe9es n'\xe9taient pas utilis\xe9es en permanence."}),"\n",(0,s.jsx)(n.li,{children:"Toujours parce qu'un tableau r\xe9side en m\xe9moire dans son int\xe9gralit\xe9, les quatre tableaux devraient \xeatre charg\xe9s ou sauvegard\xe9s sur le disque \xe0 chaque fois que vous d\xe9marreriez ou quitteriez l'application, quand bien m\xeame les donn\xe9es ne seraient d'aucune utilit\xe9 pour la session de travail."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Conclusion :"})," Les tableaux ont pour r\xf4le de manipuler une certaine quantit\xe9 de donn\xe9es pendant une p\xe9riode br\xe8ve. En contrepartie, comme ils r\xe9sident en m\xe9moire, ils sont d'une utilisation rapide et facile."]}),"\n",(0,s.jsx)(n.p,{children:"Cependant, dans certaines circonstances, vous pouvez avoir besoin de tableaux contenant des centaines ou des milliers d'\xe9l\xe9ments. Voici les formules \xe0 appliquer pour calculer la quantit\xe9 de m\xe9moire utilis\xe9e pour chaque type de tableau :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type de Tableau"}),(0,s.jsx)(n.th,{children:"Calcul de la quantit\xe9 de m\xe9moire en octets"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 12 + somme de la taille de chaque blob"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"(31+nombre d'\xe9l\xe9ments)/8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque objet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque image"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 8 + somme de la taille de chaque pointeur"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 20 + (somme de la taille de chaque texte) * 2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Deux dimensions"}),(0,s.jsx)(n.td,{children:"(1+nombre d'\xe9l\xe9ments) * 16 + somme de la taille de chaque tableau"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La taille d'un texte en m\xe9moire se calcule par la formule ((Longueur + 1) * 2)"}),"\n",(0,s.jsx)(n.li,{children:"Quelques octets suppl\xe9mentaires sont requis pour le rep\xe9rage de l'\xe9l\xe9ment, le nombre d'\xe9l\xe9ments et le tableau lui-m\xeame."}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return r}});var a=l(667294);let s={},t=a.createContext(s);function r(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);