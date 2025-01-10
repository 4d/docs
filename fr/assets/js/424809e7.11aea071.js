"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89664"],{107686:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"Concepts/components","title":"Composants","description":"Un composant 4D est un ensemble d\u2019objets 4D repr\xe9sentant une ou plusieurs fonctionnalit\xe9(s), qu\u2019il est possible d\u2019installer dans diff\xe9rentes bases. Par exemple, vous pouvez d\xe9velopper un composant 4D de courrier \xe9lectronique g\xe9rant tous les aspects de l\u2019envoi, la r\xe9ception et le stockage d\u2019emails au sein des bases 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/components.md","sourceDirName":"Concepts","slug":"/Concepts/components","permalink":"/docs/fr/18/Concepts/components","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"components","title":"Composants"},"sidebar":"docs","previous":{"title":"Modes interpr\xe9t\xe9 et compil\xe9","permalink":"/docs/fr/18/Concepts/interpreted-compiled"},"next":{"title":"Plug-ins","permalink":"/docs/fr/18/Concepts/plug-ins"}}'),a=n("785893"),i=n("250065");let o={id:"components",title:"Composants"},r=void 0,l={},d=[{value:"D\xe9finitions",id:"d\xe9finitions",level:2},{value:"Protection des composants : la compilation",id:"protection-des-composants--la-compilation",level:3},{value:"Partage des m\xe9thodes projet",id:"partage-des-m\xe9thodes-projet",level:2},{value:"Passage de variables",id:"passage-de-variables",level:2},{value:"Acc\xe8s aux tables de la base h\xf4te",id:"acc\xe8s-aux-tables-de-la-base-h\xf4te",level:2},{value:"Port\xe9e des commandes du langage",id:"port\xe9e-des-commandes-du-langage",level:2},{value:"Commandes non utilisables",id:"commandes-non-utilisables",level:3},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Utilisation de formulaires",id:"utilisation-de-formulaires",level:2},{value:"Utilisation de tables et de champs",id:"utilisation-de-tables-et-de-champs",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Utilisation de ressources",id:"utilisation-de-ressources",level:2},{value:"Aide en ligne des composants",id:"aide-en-ligne-des-composants",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Un composant 4D est un ensemble d\u2019objets 4D repr\xe9sentant une ou plusieurs fonctionnalit\xe9(s), qu\u2019il est possible d\u2019installer dans diff\xe9rentes bases. Par exemple, vous pouvez d\xe9velopper un composant 4D de courrier \xe9lectronique g\xe9rant tous les aspects de l\u2019envoi, la r\xe9ception et le stockage d\u2019emails au sein des bases 4D."}),"\n",(0,a.jsxs)(s.p,{children:["La cr\xe9ation et l\u2019installation des composants 4D s\u2019effectuent directement depuis 4D. Sch\xe9matiquement, les composants sont g\xe9r\xe9s comme des ",(0,a.jsx)(s.a,{href:"/docs/fr/18/Concepts/plug-ins",children:"plug-ins"}),". Les principes sont les suivants :"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Un composant est un simple fichier de structure (compil\xe9 ou non compil\xe9) d\u2019architecture standard ou sous forme de package (cf. paragraphe Extension .4dbase)."}),"\n",(0,a.jsx)(s.li,{children:"Pour installer un composant dans une base, il suffit de le copier dans le dossier \u201CComponents\u201D de la base, plac\xe9 \xe0 c\xf4t\xe9 du fichier de structure ou \xe0 c\xf4t\xe9 de l'application 4D ex\xe9cutable."}),"\n",(0,a.jsx)(s.li,{children:"Un composant peut appeler la plupart des \xe9l\xe9ments 4D : des m\xe9thodes projet, des formulaires projet, des barres de menus, des listes \xe0 choix multiples, des images issues de la biblioth\xe8que, etc. Il ne peut pas appeler des m\xe9thodes base et des triggers."}),"\n",(0,a.jsx)(s.li,{children:"Il n\u2019est pas possible d\u2019exploiter des tables standard ou des fichiers de donn\xe9es dans les composants 4D. En revanche, un composant peut cr\xe9er et/ou utiliser des tables, des champs et des fichiers de donn\xe9es via les m\xe9canismes des bases externes. Les bases externes sont des bases 4D ind\xe9pendantes manipul\xe9es via les commandes SQL."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"d\xe9finitions",children:"D\xe9finitions"}),"\n",(0,a.jsx)(s.p,{children:"Les m\xe9canismes de gestion des composants dans 4D n\xe9cessitent la mise en oeuvre des concepts et de la terminologie suivants :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Base matrice :"})," base de donn\xe9es 4D utilis\xe9e pour d\xe9velopper le composant. La base matrice est une base standard, sans attribut sp\xe9cifique. Une base matrice constitue un seul composant. La base matrice est destin\xe9e \xe0 \xeatre copi\xe9e, compil\xe9e ou non, dans le dossier Components de l'application 4D ou de la base devant utiliser le composant (la base h\xf4te)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Base h\xf4te :"})," base dans laquelle est install\xe9 et utilis\xe9 un composant."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Composant :"})," base matrice, compil\xe9e ou non, copi\xe9e dans le dossier Components de l'application 4D ou de la base h\xf4te et dont le contenu est utilis\xe9 dans les bases h\xf4tes."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Il est \xe0 noter qu\u2019une base peut donc \xeatre \xe0 la fois \u201Cmatrice\u201D et \u201Ch\xf4te\u201D, c\u2019est-\xe0-dire qu\u2019une base matrice peut elle-m\xeame utiliser un ou plusieurs composants. En revanche, une base utilis\xe9e comme composant ne peut pas elle-m\xeame utiliser un composant : un seul niveau de composant est charg\xe9."}),"\n",(0,a.jsx)(s.h3,{id:"protection-des-composants--la-compilation",children:"Protection des composants : la compilation"}),"\n",(0,a.jsx)(s.p,{children:"Par d\xe9faut, toutes les m\xe9thodes projet d\u2019une base matrice install\xe9e comme composant sont virtuellement visibles depuis la base h\xf4te. En particulier :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Les m\xe9thodes projet partag\xe9es sont accessibles dans la Page M\xe9thodes de l\u2019Explorateur et peuvent \xeatre appel\xe9es dans les m\xe9thodes de la base h\xf4te. Leur contenu peut \xeatre s\xe9lectionn\xe9 et copi\xe9 dans la zone de pr\xe9visualisation de l\u2019Explorateur. Elles peuvent \xe9galement \xeatre visualis\xe9es dans le d\xe9bogueur. Il n\u2019est toutefois pas possible de les ouvrir dans l\u2019\xe9diteur de m\xe9thodes ni de les modifier."}),"\n",(0,a.jsx)(s.li,{children:"Les autres m\xe9thodes projet de la base matrice n\u2019apparaissent pas dans l\u2019Explorateur mais peuvent \xe9galement \xeatre visualis\xe9es dans le d\xe9bogueur de la base h\xf4te."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Pour prot\xe9ger efficacement les m\xe9thodes projet d\u2019un composant, il vous suffit simplement de compiler la base matrice et de la fournir sous forme de fichier .4dc (base compil\xe9e ne contenant pas le code interpr\xe9t\xe9). Lorsqu\u2019une base matrice compil\xe9e est install\xe9e comme composant :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Les m\xe9thodes projet partag\xe9es sont accessibles dans la Page M\xe9thodes de l\u2019Explorateur et peuvent \xeatre appel\xe9es dans les m\xe9thodes de la base h\xf4te. En revanche, leur contenu n\u2019appara\xeet pas dans la zone de pr\xe9visualisation ni dans le d\xe9bogueur."}),"\n",(0,a.jsx)(s.li,{children:"Les autres m\xe9thodes projet de la base matrice n\u2019apparaissent jamais."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"partage-des-m\xe9thodes-projet",children:"Partage des m\xe9thodes projet"}),"\n",(0,a.jsx)(s.p,{children:"Toutes les m\xe9thodes projet d\u2019une base matrice sont par d\xe9finition incluses dans le composant (la base est le composant), ce qui signifie qu\u2019elles peuvent \xeatre appel\xe9es et ex\xe9cut\xe9es par le composant."}),"\n",(0,a.jsxs)(s.p,{children:["En revanche, par d\xe9faut ces m\xe9thodes projet ne seront ni visibles ni appelables par la base h\xf4te. Vous devez explicitement d\xe9signer dans la base matrice les m\xe9thodes que vous souhaitez partager avec la base h\xf4te. Ces m\xe9thodes projet peuvent \xeatre appel\xe9es dans le code la base h\xf4te (mais elles ne pourront pas \xeatre modifi\xe9es dans l\u2019\xe9diteur de m\xe9thodes de la base h\xf4te). Ces m\xe9thodes constituent les ",(0,a.jsx)(s.strong,{children:"points d\u2019entr\xe9e"})," dans le composant."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note :"})," A l\u2019inverse, pour des raisons de s\xe9curit\xe9, par d\xe9faut un composant ne peut pas ex\xe9cuter de m\xe9thode projet appartenant \xe0 la base h\xf4te. Dans certains cas, vous pourrez avoir besoin d\u2019autoriser un composant \xe0 acc\xe9der \xe0 des m\xe9thodes projet de votre base h\xf4te. Pour cela, vous devez explicitement d\xe9signer les m\xe9thodes projet de la base h\xf4te que vous souhaitez rendre accessibles aux composants."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(149437).Z+"",width:"592",height:"146"})}),"\n",(0,a.jsx)(s.h2,{id:"passage-de-variables",children:"Passage de variables"}),"\n",(0,a.jsx)(s.p,{children:"Les composants et les bases h\xf4tes ne partagent pas de variables locales, process ou interprocess. Le seul moyen d\u2019acc\xe9der aux variables du composant depuis la base h\xf4te et inversement est d\u2019utiliser des pointeurs."}),"\n",(0,a.jsx)(s.p,{children:"Exemple utilisant un tableau :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"//Dans la base h\xf4te :\n    ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//Dans le composant, la m\xe9thode projet UneM\xe9thode contient : \n     APPEND TO ARRAY($1->;2)\n"})}),"\n",(0,a.jsx)(s.p,{children:"Exemples utilisant des variables :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:" C_TEXT(myvariable)\n component_method1(->myvariable)\n C_POINTER($p)\n $p:=component_method2(...)\n"})}),"\n",(0,a.jsx)(s.p,{children:"L\u2019utilisation de pointeurs pour faire communiquer les composants et la base h\xf4te n\xe9cessite de prendre en compte les sp\xe9cificit\xe9s suivantes :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["La commande ",(0,a.jsx)(s.code,{children:"Pointeur vers"})," ne retournera pas un pointeur vers une variable de la base h\xf4te si elle est appel\xe9e depuis un composant et inversement."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"L\u2019architecture des composants autorise la coexistence, au sein d\u2019une m\xeame base interpr\xe9t\xe9e, de composants interpr\xe9t\xe9s et compil\xe9s (\xe0 l\u2019inverse, seuls des composants compil\xe9s peuvent \xeatre utilis\xe9s dans une base compil\xe9e). L\u2019usage de pointeurs dans ce cas doit respecter le principe suivant : l\u2019interpr\xe9teur peut d\xe9pointer un pointeur construit en mode compil\xe9 mais \xe0 l\u2019inverse, en mode compil\xe9, il n\u2019est pas possible de d\xe9pointer un pointeur construit en mode interpr\xe9t\xe9. L\u2019usage de pointeurs dans ce cas doit respecter le principe suivant : l\u2019interpr\xe9teur peut d\xe9pointer un pointeur construit en mode compil\xe9 mais \xe0 l\u2019inverse, en mode compil\xe9, il n\u2019est pas possible de d\xe9pointer un pointeur construit en mode interpr\xe9t\xe9."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Si le composant C d\xe9finit la variable ",(0,a.jsx)(s.code,{children:"mavarC"}),", le composant I peut acc\xe9der \xe0 la valeur de cette variable en utilisant le pointeur ",(0,a.jsx)(s.code,{children:"->mavarC"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Si le composant I d\xe9finit la variable ",(0,a.jsx)(s.code,{children:"mavarI"}),", le composant C ne peut pas acc\xe9der \xe0 cette variable en utilisant le pointeur ",(0,a.jsx)(s.code,{children:"->mavarI"}),". Cette syntaxe provoque une erreur d\u2019ex\xe9cution."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["La comparaison de pointeurs via la commande ",(0,a.jsx)(s.code,{children:"RESOUDRE POINTEUR"})," est d\xe9conseill\xe9e avec les composants car le principe de cloisonnement des variables autorise la coexistence de variables de m\xeame nom mais au contenu radicalement diff\xe9rente dans un composant et la base h\xf4te (ou un autre composant). Le type de la variable peut m\xeame \xeatre diff\xe9rent dans les deux contextes. Si les pointeurs ",(0,a.jsx)(s.code,{children:"monptr1"})," et ",(0,a.jsx)(s.code,{children:"monptr2"})," pointent chacun sur une variable, la comparaison suivante produira un r\xe9sultat erron\xe9 :"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"     RESOLVE POINTER(monptr1;vNomVar1;vnumtable1;vnumchamp1)\n      RESOLVE POINTER(monptr2;vNomVar2;vnumtable2;vnumchamp2)\n      If(vNomVar1=vNomVar2)\n       //Ce test retourne Vrai alors que les variables sont diff\xe9rentes\n"})}),"\n",(0,a.jsx)(s.p,{children:"Dans ce cas, il est n\xe9cessaire d\u2019utiliser la comparaison de pointeurs :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"     If(monptr1=monptr2) //Ce test retourne Faux\n"})}),"\n",(0,a.jsx)(s.h2,{id:"acc\xe8s-aux-tables-de-la-base-h\xf4te",children:"Acc\xe8s aux tables de la base h\xf4te"}),"\n",(0,a.jsx)(s.p,{children:"Bien que les composants ne puissent pas utiliser de tables, les pointeurs permettent \xe0 la base h\xf4te et au composant de communiquer dans ce cas. Par exemple, voici une m\xe9thode pouvant \xeatre appel\xe9e depuis un composant :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'// appeler une m\xe9thode composant\nmethCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Dans le composant, le code de la m\xe9thode ",(0,a.jsx)(s.code,{children:"methCreateRec"})," :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"C_POINTER($1) //Pointeur vers une table de la base h\xf4te\nC_POINTER($2) //Pointeur vers un champ de la base h\xf4te\nC_TEXT($3) // Valeur \xe0 ins\xe9rer\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"port\xe9e-des-commandes-du-langage",children:"Port\xe9e des commandes du langage"}),"\n",(0,a.jsxs)(s.p,{children:["Hormis les ",(0,a.jsx)(s.a,{href:"#unusable-commands",children:"Commandes non utilisables"}),", un composant peut utiliser toute commande du langage 4D."]}),"\n",(0,a.jsxs)(s.p,{children:["Lorsqu\u2019elles sont appel\xe9es depuis un composant, les commandes s\u2019ex\xe9cutent dans le contexte du composant, \xe0 l\u2019exception de la commande ",(0,a.jsx)(s.code,{children:"EXECUTE METHOD"})," qui utilise le contexte de la m\xe9thode d\xe9sign\xe9e par la commande. A noter \xe9galement que les commandes de lecture du th\xe8me \u201CUtilisateurs et groupes\u201D sont utilisables depuis un composant mais lisent les utilisateurs et les groupes de la base h\xf4te (un composant n\u2019a pas d\u2019utilisateurs et groupes propres)."]}),"\n",(0,a.jsxs)(s.p,{children:["Les commandes ",(0,a.jsx)(s.code,{children:"EXECUTE METHOD"})," et ",(0,a.jsx)(s.code,{children:"Get database parameter"})," constituent aussi une exception \xe0 ce principe : leur port\xe9e est globale \xe0 la base. Lorsque ces commandes sont appel\xe9es depuis un composant, elles s\u2019appliquent \xe0 la base h\xf4te."]}),"\n",(0,a.jsxs)(s.p,{children:["Par ailleurs, des dispositions sp\xe9cifiques sont d\xe9finies pour les commandes ",(0,a.jsx)(s.code,{children:"Structure file"})," et ",(0,a.jsx)(s.code,{children:"Get 4D folder"})," lorsqu\u2019elles sont utilis\xe9es dans le cadre des composants."]}),"\n",(0,a.jsxs)(s.p,{children:["La commande ",(0,a.jsx)(s.code,{children:"COMPONENT LIST"})," permet de conna\xeetre la liste des composants charg\xe9s par la base h\xf4te."]}),"\n",(0,a.jsx)(s.h3,{id:"commandes-non-utilisables",children:"Commandes non utilisables"}),"\n",(0,a.jsx)(s.p,{children:"Les commandes suivantes ne sont pas compatibles avec une utilisation dans le cadre d\u2019un composant car elles modifient le fichier de structure \u2014 ouvert en lecture. Leur ex\xe9cution dans un composant provoque l\u2019erreur -10511, \u201CLa commande NomCommande ne peut pas \xeatre appel\xe9e depuis un composant\u201D :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"ON EVENT CALL"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"Method called on event"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"SET PICTURE TO LIBRARY"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"REMOVE PICTURE FROM LIBRARY"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"SAVE LIST"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"ARRAY TO LIST"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"EDIT FORM"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"CREATE USER FORM"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"DELETE USER FORM"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"CHANGE PASSWORD"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"EDIT ACCESS"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"Set group properties"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"Set user properties"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"DELETE USER"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"CHANGE LICENSES"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"BLOB TO USERS"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"SET PLUGIN ACCESS"})}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["La commande ",(0,a.jsx)(s.code,{children:"Table du formulaire courant"})," retourne ",(0,a.jsx)(s.code,{children:"Nil"})," lorsqu\u2019elle est appel\xe9e dans le contexte d\u2019un formulaire projet. Par cons\xe9quent, elle ne peut pas \xeatre utilis\xe9e dans un composant."]}),"\n",(0,a.jsxs)(s.li,{children:["Les commandes SQL de d\xe9finition de donn\xe9es (",(0,a.jsx)(s.code,{children:"CREATE TABLE"}),", ",(0,a.jsx)(s.code,{children:"DROP TABLE"}),", etc.) ne peuvent pas \xeatre utilis\xe9es dans les composants. Elles sont n\xe9anmoins prises en charge avec des bases de donn\xe9es externes (voir la commande SQL ",(0,a.jsx)(s.code,{children:"CREATE DATABASE"}),")."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,a.jsxs)(s.p,{children:["Une ",(0,a.jsx)(s.a,{href:"/docs/fr/18/Concepts/error-handling",children:"m\xe9thode de gestion d'erreurs"})," install\xe9e par la commande ",(0,a.jsx)(s.code,{children:"ON ERR CALL"})," s'applique \xe0 la base en cours d'ex\xe9cution uniquement. En cas d'erreur g\xe9n\xe9r\xe9e par un composant, la m\xe9thode d'appel sur erreur de la base h\xf4te n'est pas appel\xe9e, et inversement."]}),"\n",(0,a.jsx)(s.h2,{id:"utilisation-de-formulaires",children:"Utilisation de formulaires"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'Seuls les "formulaires projet" (formulaires non associ\xe9s \xe0 une table en particulier) peuvent \xeatre exploit\xe9s directement dans un composant. Seuls les "formulaires projet" (formulaires non associ\xe9s \xe0 une table en particulier) peuvent \xeatre exploit\xe9s directement dans un composant.'}),"\n",(0,a.jsx)(s.li,{children:"Un composant peut faire appel \xe0 des formulaires table de la base h\xf4te. A noter qu\u2019il est n\xe9cessaire dans ce cas d\u2019utiliser des pointeurs plut\xf4t que des noms de table entre [] pour d\xe9signer les formulaires dans le code du composant."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note :"})," Si un composant utilise la commande ",(0,a.jsx)(s.code,{children:"ADD RECORD"}),", le formulaire Entr\xe9e courant de la base h\xf4te sera affich\xe9, dans le contexte de la base h\xf4te. Par cons\xe9quent, si le formulaire comporte des variables, le composant n\u2019y aura pas acc\xe8s."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Vous pouvez publier des formulaires de composants comme sous-formulaires dans les bases h\xf4tes. Avec ce principe, vous pouvez notamment d\xe9velopper des composants proposant des objets graphiques. Par exemple, les Widgets propos\xe9s par 4D sont bas\xe9s sur l\u2019emploi de sous-formulaires en composants."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"utilisation-de-tables-et-de-champs",children:"Utilisation de tables et de champs"}),"\n",(0,a.jsxs)(s.p,{children:["Un composant ne peut pas utiliser les tables et les champs d\xe9finis dans la structure 4D de la base matrice. En revanche, il peut cr\xe9er et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont cr\xe9\xe9es et g\xe9r\xe9es via le langage SQL. En revanche, il peut cr\xe9er et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Utiliser une base externe signifie d\xe9signer temporairement cette base comme base courante, c\u2019est-\xe0-dire comme base cible des requ\xeates SQL ex\xe9cut\xe9es par 4D. Les bases externes sont cr\xe9\xe9es \xe0 l'aide de la commande SQL ",(0,a.jsx)(s.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(s.p,{children:"Le code suivant est inclus dans un composant et effectue trois actions \xe9l\xe9mentaires avec une base de donn\xe9es externe :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"cr\xe9ation de la base de donn\xe9es externe si elle n'existe pas d\xe9j\xe0,"}),"\n",(0,a.jsx)(s.li,{children:"ajout de donn\xe9es dans la base de donn\xe9es externe,"}),"\n",(0,a.jsx)(s.li,{children:"lecture de donn\xe9es depuis la base de donn\xe9es externe."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Cr\xe9ation de la base de donn\xe9es externe :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) stocke les donn\xe9es dans un r\xe9pertoire autoris\xe9\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n'})}),"\n",(0,a.jsx)(s.p,{children:"Ecriture dans la base de donn\xe9es externe :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:" $Ptr_1:=$2 // r\xe9cup\xe9ration des donn\xe9es de la base h\xf4te via des pointeurs\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,a.jsx)(s.p,{children:"Lecture dans une base de donn\xe9es externe :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:" $Ptr_1:=$2 // acc\xe8s aux donn\xe9es de la base h\xf4te via des pointeurs\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Debut SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n Fin SQL\n"})}),"\n",(0,a.jsx)(s.h2,{id:"utilisation-de-ressources",children:"Utilisation de ressources"}),"\n",(0,a.jsx)(s.p,{children:"Les composants peuvent utiliser des ressources. Si le composant est d\u2019architecture .4dbase (architecture conseill\xe9e), le dossier Resources doit \xeatre plac\xe9 \xe0 l\u2019int\xe9rieur de ce dossier."}),"\n",(0,a.jsx)(s.p,{children:"Les m\xe9canismes automatiques sont op\xe9rationnels : les fichiers XLIFF pr\xe9sents dans le dossier Resources d\u2019un composant seront charg\xe9s par ce composant."}),"\n",(0,a.jsx)(s.p,{children:"Dans une base de donn\xe9es h\xf4te contenant un ou plusieurs composants, chaque composant ainsi que les bases de donn\xe9es h\xf4te ont leur propre \xabcha\xeene de ressources\xbb Dans une base de donn\xe9es h\xf4te contenant un ou plusieurs composants, chaque composant ainsi que les bases de donn\xe9es h\xf4te ont leur propre \xabcha\xeene de ressources\xbb In a host database containing one or more components, each component as well as the host databases has its own \u201Cresources string.\u201D Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database."}),"\n",(0,a.jsx)(s.h2,{id:"aide-en-ligne-des-composants",children:"Aide en ligne des composants"}),"\n",(0,a.jsx)(s.p,{children:"Un m\xe9canisme sp\xe9cifique a \xe9t\xe9 mis en place afin de permettre aux d\xe9veloppeurs d\u2019ajouter des aides en ligne \xe0 leurs composants. Le principe est semblable \xe0 celui propos\xe9 pour les bases de donn\xe9es 4D :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"L\u2019aide du composant doit \xeatre fournie sous le forme d\u2019un fichier suffix\xe9 .htm, .html ou (Windows uniquement) .chm,"}),"\n",(0,a.jsx)(s.li,{children:"Le fichier d\u2019aide doit \xeatre plac\xe9 \xe0 c\xf4t\xe9 du fichier de structure du composant et porter le m\xeame nom que le fichier de structure,"}),"\n",(0,a.jsx)(s.li,{children:"L\u2019aide est alors automatiquement charg\xe9e dans le menu Aide de l\u2019application avec le libell\xe9 \u201CAide de...\u201D suivi du nom du fichier d\u2019aide."}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},149437:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return o}});var t=n(667294);let a={},i=t.createContext(a);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);