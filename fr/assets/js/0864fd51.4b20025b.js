"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84907"],{561466:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/keystroke","title":"Keystroke","description":"Keystroke  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/keystroke.md","sourceDirName":"commands-legacy","slug":"/commands/keystroke","permalink":"/docs/fr/commands/keystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkeystroke.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"keystroke","title":"Keystroke","slug":"/commands/keystroke","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is editing text","permalink":"/docs/fr/commands/is-editing-text"},"next":{"title":"File and Folder","permalink":"/docs/fr/category/file-and-folder"}}'),t=r("785893"),a=r("250065");let l={id:"keystroke",title:"Keystroke",slug:"/commands/keystroke",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Keystroke"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Caract\xe8re saisi par l'utilisateur"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Keystroke"})," retourne le caract\xe8re tap\xe9 par l'utilisateur dans un champ ou une zone saisissable."]}),"\n",(0,t.jsxs)(n.p,{children:["En g\xe9n\xe9ral, vous appelez ",(0,t.jsx)(n.strong,{children:"Keystroke"})," dans une m\xe9thode formulaire ou objet, lors de la gestion des \xe9v\xe9nements formulaire On Before Keystroke et On After Keystroke. Pour d\xe9tecter les \xe9v\xe9nements de frappe clavier, utilisez la commande ",(0,t.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous voulez remplacer un caract\xe8re saisi par l'utilisateur par un autre, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT :"})," Si vous voulez effectuer des op\xe9rations \u201C\xe0 la vol\xe9e\u201D en fonction de la valeur courante de la zone saisissable en cours de modification ainsi que du caract\xe8re \xe0 saisir, rappelez-vous que le texte affich\xe9 \xe0 l'\xe9cran n'est pas encore la valeur du champ ou de la variable. La valeur saisie dans une variable ou un champ ne lui est affect\xe9e que lorsque la zone est valid\xe9e (si l'utilisateur appuie sur la touche Tabulation, clique sur un bouton, etc.). En cons\xe9quence, pensez \xe0 placer les valeurs saisies dans une variable temporaire et \xe0 travailler avec celle-ci, ou utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-edited-text",children:"Get edited text"}),". Vous devez proc\xe9der ainsi si vous souhaitez conna\xeetre la valeur courante du texte pour effectuer des actions sp\xe9ciales."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser la commande ",(0,t.jsx)(n.strong,{children:"Keystroke"})," pour :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"effectuer un filtrage personnalis\xe9 des caract\xe8res"}),"\n",(0,t.jsx)(n.li,{children:"cr\xe9er un filtre de saisie non disponible en standard, par exemple dans les filtres de saisie"}),"\n",(0,t.jsx)(n.li,{children:"impl\xe9menter des zones de recherche ou de pr\xe9-saisie dynamiques."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous ne pouvez pas utiliser la fonction ",(0,t.jsx)(n.strong,{children:"Keystroke"})," dans les sous-formulaires."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["R\xe9f\xe9rez-vous aux exemples de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Lorsque vous traitez un \xe9v\xe9nement On Before Keystroke, vous g\xe9rez la modification de la zone de texte courante (celle qui contient le curseur), et non la \u201Cvaleur future\u201D de la source de donn\xe9es (champ ou variable) de cette zone. La m\xe9thode G\xe9rer frappe clavier d\xe9crite ci-dessous vous permet de placer dans une seconde variable les caract\xe8res saisis dans une zone de texte. Vous pouvez alors utiliser cette variable pour effectuer diff\xe9rentes actions pendant la saisie des caract\xe8res dans la zone. Vous passez comme premier param\xe8tre un pointeur vers la source des donn\xe9es de la zone, et comme second param\xe8tre un pointeur vers cette seconde variable. La m\xe9thode renvoie la nouvelle valeur de la zone de texte dans la seconde variable et retourne Vrai si cette valeur est diff\xe9rente de ce qu'elle \xe9tait avant la saisie du dernier caract\xe8re."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet G\xe9rer frappe clavier\n\xa0\xa0// G\xe9rer frappe clavier ( Pointeur ; Pointeur ) -> Bool\xe9en\n\xa0\xa0// G\xe9rer frappe clavier ( -> zoneSource ; -> valeurCourante ) -> Est-ce une nouvelle valeur\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $vtNouvValeur : Text\n\xa0\n\xa0\xa0// R\xe9cup\xe9rer le texte s\xe9lectionn\xe9 dans la zone saisissable\n\xa0GET HIGHLIGHT($1->;$vlD\xe9but;$vlFin)\n\xa0\xa0// Commencer \xe0 travailler avec la valeur courante\n\xa0$vtNouvValeur:=$2->\n\xa0\xa0// Selon la touche appuy\xe9e ou le caract\xe8re saisi, effectuer les actions appropri\xe9es\n\xa0Case of\n\xa0\n\xa0\xa0// La touche Retour arri\xe8re a \xe9t\xe9 enfonc\xe9e\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Backspace key)\n\xa0\xa0// Supprimer les caract\xe8res s\xe9lectionn\xe9s ou le caract\xe8re \xe0 gauche du curseur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNouvValeur:=Substring($vtNouvValeur;1;$vlD\xe9but-1-Num($vlD\xe9but=$vlFin))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Substring($vtNouvValeur;$vlFin)\n\xa0\n\xa0\xa0// Un caract\xe8re acceptable a \xe9t\xe9 saisi\n\xa0\xa0\xa0\xa0:(Position(Keystroke;"abcdefghjiklmnopqrstuvwxyz -0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlD\xe9but#$vlFin)\n\xa0\xa0// Un ou plusieurs caract\xe8res sont s\xe9lectionn\xe9s, la frappe clavier va les effacer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNouvValeur:=Substring($vtNouvValeur;1;$vlD\xe9but-1)+Keystroke+Substring($vtNouvValeur;$vlFin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// La s\xe9lection de texte est le curseur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// Le curseur est actuellement au d\xe9but du texte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlD\xe9but<=1)\n\xa0\xa0// Insertion du caract\xe8re au d\xe9but du texte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNouvValeur:=Keystroke+$vtNouvValeur\n\xa0\xa0// Le curseur est actuellement \xe0 la fin du texte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlD\xe9but>=Length($vtNouvValeur))\n\xa0\xa0// Ajouter le caract\xe8re \xe0 la fin du texte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNouvValeur:=$vtNouvValeur+Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Le curseur se trouve dans le texte, ins\xe9rer le nouveau caract\xe8re\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNouvValeur:=Substring($vtNouvValeur;1;$vlD\xe9but-1)+Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Substring($vtNouvValeur;$vlD\xe9but)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0// Une touche fl\xe8che a \xe9t\xe9 enfonc\xe9e\n\xa0\xa0// Ne rien faire, mais valider la frappe clavier\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Left arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Right arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Up arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Down arrow key)\n\xa0\xa0`\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Il ne faut pas accepter des caract\xe8res autres que des lettres, chiffres, espaces et tirets\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0End case\n\xa0\xa0// Est-ce que la valeur est maintenant diff\xe9rente ?\n\xa0$0:=($vtNouvValeur#$2->)\n\xa0\xa0// Retourner la valeur pour la gestion de la prochaine frappe clavier\n\xa0$2->:=$vtNouvValeur\n'})}),"\n",(0,t.jsx)(n.p,{children:"Une fois que vous avez ajout\xe9 cette m\xe9thode projet \xe0 votre application, vous pouvez l'utiliser ainsi :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la zone saisissable MonObjet\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MonObjet:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MonObjetCach\xe9:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(G\xe9rer frappe clavier(->MonObjet;->MonObjetCach\xe9))\n\xa0\xa0// Effectuer des actions appropri\xe9es par rapport \xe0 la valeur stock\xe9e dans MonObjetCach\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.p,{children:"Examinons par exemple le formulaire suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(77805).Z+"",width:"290",height:"322"})}),"\n",(0,t.jsxs)(n.p,{children:["Il est compos\xe9 des objets suivants : une zone saisissable ",(0,t.jsx)(n.em,{children:"vaRecherche"}),", une zone non-saisissable ",(0,t.jsx)(n.em,{children:"vaMessage"})," et une zone de d\xe9filement ",(0,t.jsx)(n.em,{children:"taRecherche"}),". Lorsque l'utilisateur saisit des caract\xe8res dans ",(0,t.jsx)(n.em,{children:"vaRecherche"}),", la m\xe9thode objet effectue une recherche sur la table [Codes postaux] permettant d'afficher des villes am\xe9ricaines en saisissant seulement les premiers caract\xe8res de leur nom. Voici la m\xe9thode objet de ",(0,t.jsx)(n.em,{children:"vaRecherche"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la zone saisissable vaRecherche\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaRecherche:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaR\xe9sultat:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMessage:="Saisissez les premiers caract\xe8res de la ville que vous cherchez."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(taRecherche)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(G\xe9rer frappe clavier(->vaRecherche;->vaR\xe9sultat))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vaR\xe9sultat#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Codes postaux];[Codes postaux]Ville=vaR\xe9sultat+"@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES OFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISTINCT VALUES([Codes postaux]Ville;taRecherche)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES ON\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlR\xe9sultat:=Size of array(taRecherche)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlR\xe9sultat=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMessage:="Aucune ville trouv\xe9e."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlR\xe9sultat=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMessage:="Une ville trouv\xe9e."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMessage:=String($vlR\xe9sultat)+" villes trouv\xe9es."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(taRecherche;1;Size of array(taRecherche))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMessage:="Saisissez les premi\xe8res lettres de la ville que vous cherchez."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici le formulaire en ex\xe9cution :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(72973).Z+"",width:"290",height:"322"})}),"\n",(0,t.jsx)(n.p,{children:"A l'aide des possibilit\xe9s de communication interprocess de 4D, vous pouvez construire une interface dans laquelle les recherches se construisent dans des palettes flottantes communiquant avec les process dans lesquels les enregistrements sont affich\xe9s ou modifi\xe9s."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-edited-text",children:"Get edited text"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"390"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},77805:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},72973:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},a=s.createContext(t);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);