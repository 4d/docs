"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18414"],{97634:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"Concepts/components","title":"Composants","description":"Un composant 4D est un ensemble d\u2019objets 4D repr\xe9sentant une ou plusieurs fonctionnalit\xe9(s), qu\u2019il est possible d\u2019installer dans diff\xe9rentes applications. Par exemple, vous pouvez d\xe9velopper un composant 4D de courrier \xe9lectronique g\xe9rant tous les aspects de l\u2019envoi, la r\xe9ception et le stockage d\u2019emails au sein des applications 4D.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/components.md","sourceDirName":"Concepts","slug":"/Concepts/components","permalink":"/docs/fr/19/Concepts/components","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"components","title":"Composants"},"sidebar":"docs","previous":{"title":"Modes interpr\xe9t\xe9 et compil\xe9","permalink":"/docs/fr/19/Concepts/interpreted-compiled"},"next":{"title":"Plug-ins","permalink":"/docs/fr/19/Concepts/plug-ins"}}'),o=n("785893"),r=n("250065");let i={id:"components",title:"Composants"},a=void 0,l={},d=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"D\xe9finitions",id:"d\xe9finitions",level:3},{value:"Principes",id:"principes",level:3},{value:"Port\xe9e des commandes du langage",id:"port\xe9e-des-commandes-du-langage",level:2},{value:"Commandes non utilisables",id:"commandes-non-utilisables",level:3},{value:"Partage des m\xe9thodes projet",id:"partage-des-m\xe9thodes-projet",level:2},{value:"Passage de variables",id:"passage-de-variables",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Acc\xe8s aux tables du projet h\xf4te",id:"acc\xe8s-aux-tables-du-projet-h\xf4te",level:2},{value:"Utilisation de tables et de champs",id:"utilisation-de-tables-et-de-champs",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Utilisation de formulaires",id:"utilisation-de-formulaires",level:2},{value:"Utilisation de ressources",id:"utilisation-de-ressources",level:2},{value:"Ex\xe9cution du code d&#39;initialisation",id:"ex\xe9cution-du-code-dinitialisation",level:2},{value:"Protection des composants : la compilation",id:"protection-des-composants--la-compilation",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Un composant 4D est un ensemble d\u2019objets 4D repr\xe9sentant une ou plusieurs fonctionnalit\xe9(s), qu\u2019il est possible d\u2019installer dans diff\xe9rentes applications. Par exemple, vous pouvez d\xe9velopper un composant 4D de courrier \xe9lectronique g\xe9rant tous les aspects de l\u2019envoi, la r\xe9ception et le stockage d\u2019emails au sein des applications 4D."}),"\n",(0,o.jsx)(s.h2,{id:"pr\xe9sentation",children:"Pr\xe9sentation"}),"\n",(0,o.jsx)(s.h3,{id:"d\xe9finitions",children:"D\xe9finitions"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Projet utilis\xe9 comme matrice"})," : Projet 4D utilis\xe9 pour le d\xe9veloppement du composant. C'est un projet standard, sans attribut sp\xe9cifique. Il constitue un seul composant."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Projet h\xf4te :"})," projet dans lequel un composant est install\xe9 et utilis\xe9."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Composant"})," : Projet utilis\xe9 comme matrice, compil\xe9 ou non, copi\xe9 dans le dossier ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Project/architecture",children:(0,o.jsx)(s.code,{children:"Components"})})," de l'application h\xf4te et dont le contenu est utilis\xe9 dans l'application h\xf4te."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"principes",children:"Principes"}),"\n",(0,o.jsxs)(s.p,{children:["La cr\xe9ation et l\u2019installation des composants 4D s\u2019effectuent directement depuis 4D. Sch\xe9matiquement, les composants sont g\xe9r\xe9s comme des ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Concepts/plug-ins",children:"plug-ins"}),". Les principes sont les suivants :"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Un composant consiste en un fichier de projet 4D classique."}),"\n",(0,o.jsxs)(s.li,{children:["Pour installer un composant, il suffit de le copier dans le dossier ",(0,o.jsxs)(s.a,{href:"/docs/fr/19/Project/architecture",children:[(0,o.jsx)(s.code,{children:"Components"})," du projet"]}),". Vous pouvez utiliser des alias ou des raccourcis."]}),"\n",(0,o.jsx)(s.li,{children:'Un projet peut \xeatre \xe0 la fois une "matrice" et un "h\xf4te", c\'est-\xe0-dire qu\'un projet utilis\xe9 comme matrice peut lui-m\xeame utiliser un ou plusieurs composants. En revanche, une base utilis\xe9e comme composant ne peut pas elle-m\xeame utiliser un composant : un seul niveau de composant est charg\xe9.'}),"\n",(0,o.jsx)(s.li,{children:"Un composant peut appeler la plupart des \xe9l\xe9ments 4D : des m\xe9thodes projet, des formulaires projet, des barres de menus, des listes \xe0 choix multiples, etc. Il ne peut pas appeler des m\xe9thodes base et des triggers."}),"\n",(0,o.jsx)(s.li,{children:"Il n\u2019est pas possible d\u2019exploiter des tables standard ou des fichiers de donn\xe9es dans les composants 4D. En revanche, un composant peut cr\xe9er et/ou utiliser des tables, des champs et des fichiers de donn\xe9es via les m\xe9canismes des bases externes. Les bases externes sont des bases 4D ind\xe9pendantes manipul\xe9es via les commandes SQL."}),"\n",(0,o.jsx)(s.li,{children:"Un projet h\xf4te fonctionnant en mode interpr\xe9t\xe9 peut utiliser des composants interpr\xe9t\xe9s ou compil\xe9s. Un projet h\xf4te fonctionnant en mode compil\xe9 ne peut pas utiliser de composants interpr\xe9t\xe9s. Dans ce cas, seuls les composants compil\xe9s peuvent \xeatre utilis\xe9s."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"port\xe9e-des-commandes-du-langage",children:"Port\xe9e des commandes du langage"}),"\n",(0,o.jsxs)(s.p,{children:["Hormis les ",(0,o.jsx)(s.a,{href:"#unusable-commands",children:"Commandes non utilisables"}),", un composant peut utiliser toute commande du langage 4D."]}),"\n",(0,o.jsxs)(s.p,{children:["Lorsqu\u2019elles sont appel\xe9es depuis un composant, les commandes s\u2019ex\xe9cutent dans le contexte du composant, \xe0 l\u2019exception de la commande ",(0,o.jsx)(s.code,{children:"EXECUTE METHOD"})," ou ",(0,o.jsx)(s.code,{children:"EXECUTE FORMULA"})," qui utilise le contexte de la m\xe9thode d\xe9sign\xe9e par la commande. A noter \xe9galement que les commandes de lecture du th\xe8me \u201CUtilisateurs et groupes\u201D sont utilisables depuis un composant mais lisent les utilisateurs et les groupes du projet h\xf4te (un composant n\u2019a pas d\u2019utilisateurs et groupes propres)."]}),"\n",(0,o.jsxs)(s.p,{children:["Les commandes ",(0,o.jsx)(s.code,{children:"EXECUTE METHOD"})," et ",(0,o.jsx)(s.code,{children:"Get database parameter"})," constituent aussi une exception \xe0 ce principe : leur port\xe9e est globale \xe0 l'application. Lorsque ces commandes sont appel\xe9es depuis un composant, elles s\u2019appliquent au projet d'application h\xf4te."]}),"\n",(0,o.jsxs)(s.p,{children:["Par ailleurs, des dispositions sp\xe9cifiques sont d\xe9finies pour les commandes ",(0,o.jsx)(s.code,{children:"Structure file"})," et ",(0,o.jsx)(s.code,{children:"Get 4D folder"})," lorsqu\u2019elles sont utilis\xe9es dans le cadre des composants."]}),"\n",(0,o.jsxs)(s.p,{children:["La commande ",(0,o.jsx)(s.code,{children:"COMPONENT LIST"})," permet de conna\xeetre la liste des composants charg\xe9s par le projet h\xf4te."]}),"\n",(0,o.jsx)(s.h3,{id:"commandes-non-utilisables",children:"Commandes non utilisables"}),"\n",(0,o.jsx)(s.p,{children:"Les commandes suivantes ne sont pas compatibles avec une utilisation dans le cadre d\u2019un composant car elles modifient le fichier de structure \u2014 ouvert en lecture. Leur ex\xe9cution dans un composant provoque l\u2019erreur -10511, \u201CLa commande NomCommande ne peut pas \xeatre appel\xe9e depuis un composant\u201D :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"ON EVENT CALL"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"Method called on event"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"SET PICTURE TO LIBRARY"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"REMOVE PICTURE FROM LIBRARY"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"SAVE LIST"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"ARRAY TO LIST"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"EDIT FORM"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"CREATE USER FORM"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"DELETE USER FORM"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"CHANGE PASSWORD"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"EDIT ACCESS"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"Set group properties"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"Set user properties"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"DELETE USER"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"CHANGE LICENSES"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"BLOB TO USERS"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"SET PLUGIN ACCESS"})}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["La commande ",(0,o.jsx)(s.code,{children:"Table du formulaire courant"})," retourne ",(0,o.jsx)(s.code,{children:"Nil"})," lorsqu\u2019elle est appel\xe9e dans le contexte d\u2019un formulaire projet. Par cons\xe9quent, elle ne peut pas \xeatre utilis\xe9e dans un composant."]}),"\n",(0,o.jsxs)(s.li,{children:["Les commandes SQL de d\xe9finition de donn\xe9es (",(0,o.jsx)(s.code,{children:"CREATE TABLE"}),", ",(0,o.jsx)(s.code,{children:"DROP TABLE"}),", etc.) ne peuvent pas \xeatre utilis\xe9es dans les composants. Elles sont n\xe9anmoins prises en charge avec des bases de donn\xe9es externes (voir la commande SQL ",(0,o.jsx)(s.code,{children:"CREATE DATABASE"}),")."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"partage-des-m\xe9thodes-projet",children:"Partage des m\xe9thodes projet"}),"\n",(0,o.jsx)(s.p,{children:"Toutes les m\xe9thodes projet d\u2019un projet utilis\xe9 comme matrice sont par d\xe9finition incluses dans le composant (le projet est le composant), ce qui signifie qu\u2019elles peuvent \xeatre appel\xe9es et ex\xe9cut\xe9es par le composant."}),"\n",(0,o.jsxs)(s.p,{children:["En revanche, par d\xe9faut ces m\xe9thodes projet ne seront ni visibles ni appelables par le projet h\xf4te. Vous devez explicitement d\xe9signer, dans le projet utilis\xe9 comme matrice, les m\xe9thodes que vous souhaitez partager avec le projet h\xf4te. Ces m\xe9thodes projet peuvent \xeatre appel\xe9es dans le code de le projet h\xf4te (mais elles ne pourront pas \xeatre modifi\xe9es dans l\u2019\xe9diteur de m\xe9thodes de le projet h\xf4te). Ces m\xe9thodes constituent les ",(0,o.jsx)(s.strong,{children:"points d\u2019entr\xe9e"})," dans le composant."]}),"\n",(0,o.jsx)(s.p,{children:"A l\u2019inverse, pour des raisons de s\xe9curit\xe9, par d\xe9faut un composant ne peut pas ex\xe9cuter de m\xe9thode projet appartenant au projet h\xf4te. Dans certains cas, vous pourrez avoir besoin d\u2019autoriser un composant \xe0 acc\xe9der \xe0 des m\xe9thodes projet de votre projet h\xf4te. In certain cases, you may need to allow a component to access the project methods of your host project."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(626785).Z+"",width:"592",height:"146"})}),"\n",(0,o.jsxs)(s.p,{children:["Une fois que les m\xe9thodes projets h\xf4tes sont disponibles pour les composants, vous pouvez ex\xe9cuter une m\xe9thode h\xf4te depuis l'int\xe9rieur d'un composant \xe0 l'aide des commandes ",(0,o.jsx)(s.code,{children:"EXECUTE FORMULA"})," ou ",(0,o.jsx)(s.code,{children:"EXECUTE METHOD"}),". Par exemple :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'// M\xe9thode h\xf4te\ncomponent_method("host_method_name")\n'})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"// component_method\n C_TEXT($1)\n EXECUTE METHOD($1)\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Vous pouvez compiler ou effectuer une v\xe9rification syntaxique dans une base h\xf4te interpr\xe9t\xe9e qui contient des composants interpr\xe9t\xe9s si elle n'appelle pas de m\xe9thodes du composant interpr\xe9t\xe9. Dans le cas contraire, une bo\xeete de dialogue d'avertissement appara\xeet lorsque vous tentez de lancer la compilation ou un contr\xf4le syntaxique et il n'est pas possible d'effectuer l'op\xe9ration. N'oubliez pas qu'une m\xe9thode interpr\xe9t\xe9e peut appeler une m\xe9thode compil\xe9e, mais pas l'inverse, sauf en utilisant les commandes ",(0,o.jsx)(s.code,{children:"EXECUTE METHOD"})," et ",(0,o.jsx)(s.code,{children:"EXECUTE FORMULA"})," ."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"passage-de-variables",children:"Passage de variables"}),"\n",(0,o.jsx)(s.p,{children:"Les composants et les projets h\xf4tes ne partagent pas de variables locales, process ou interprocess. La seule fa\xe7on de modifier les variables de composants du projet h\xf4te et vice versa est d'utiliser des pointeurs."}),"\n",(0,o.jsx)(s.p,{children:"Exemple utilisant un tableau :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"//Dans le projet h\xf4te :\n    ARRAY INTEGER(MyArray;10)\n    AMethod(->MyArray)\n\n//Dans le composant, la m\xe9thode projet UneM\xe9thode contient : \n     APPEND TO ARRAY($1->;2)\n"})}),"\n",(0,o.jsx)(s.p,{children:"Exemples utilisant des variables :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"C_TEXT(myvariable)\ncomponent_method1(->myvariable)\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"C_POINTER($p)\n$p:=component_method2(...)\n"})}),"\n",(0,o.jsx)(s.p,{children:"Sans pointeur, un composant peut toujours acc\xe9der \xe0 la valeur d'une variable de base h\xf4te (mais pas \xe0 la variable elle-m\xeame) et vice versa :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'//Dans la base h\xf4te\nC_TEXT($input_t)\n$input_t:="DoSomething"\ncomponent_method($input_t)\n// component_method obtient "DoSomething" in $1 (mais pas la variable $input_t)\n'})}),"\n",(0,o.jsx)(s.p,{children:"L\u2019utilisation de pointeurs pour faire communiquer les composants et le projet h\xf4te n\xe9cessite de prendre en compte les sp\xe9cificit\xe9s suivantes :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["La commande ",(0,o.jsx)(s.code,{children:"Get pointer"})," ne retournera pas un pointeur vers une variable du projet h\xf4te si elle est appel\xe9e depuis un composant et inversement."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"L'architecture des composants permet la coexistence, au sein du m\xeame projet interpr\xe9t\xe9, de composants \xe0 la fois interpr\xe9t\xe9s et compil\xe9s (inversement, seuls des composants compil\xe9s peuvent \xeatre utilis\xe9s dans un projet compil\xe9). L\u2019usage de pointeurs dans ce cas doit respecter le principe suivant : l\u2019interpr\xe9teur peut d\xe9pointer un pointeur construit en mode compil\xe9 mais \xe0 l\u2019inverse, en mode compil\xe9, il n\u2019est pas possible de d\xe9pointer un pointeur construit en mode interpr\xe9t\xe9. Illustrons ce principe par l\u2019exemple suivant : soient deux composants, C (compil\xe9) et I (interpr\xe9t\xe9) install\xe9s dans le m\xeame projet h\xf4te."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Si le composant C d\xe9finit la variable ",(0,o.jsx)(s.code,{children:"mavarC"}),", le composant I peut acc\xe9der \xe0 la valeur de cette variable en utilisant le pointeur ",(0,o.jsx)(s.code,{children:"->mavarC"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Si le composant I d\xe9finit la variable ",(0,o.jsx)(s.code,{children:"mavarI"}),", le composant C ne peut pas acc\xe9der \xe0 cette variable en utilisant le pointeur ",(0,o.jsx)(s.code,{children:"->mavarI"}),". Cette syntaxe provoque une erreur d\u2019ex\xe9cution."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["La comparaison de pointeurs via la commande ",(0,o.jsx)(s.code,{children:"RESOLVE POINTER"})," est d\xe9conseill\xe9e avec les composants car le principe de cloisonnement des variables autorise la coexistence de variables de m\xeame nom mais au contenu radicalement diff\xe9rent dans un composant et le projet h\xf4te (ou un autre composant). Le type de la variable peut m\xeame \xeatre diff\xe9rent dans les deux contextes. Si les pointeurs ",(0,o.jsx)(s.code,{children:"monptr1"})," et ",(0,o.jsx)(s.code,{children:"monptr2"})," pointent chacun sur une variable, la comparaison suivante produira un r\xe9sultat erron\xe9 :"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"     RESOLVE POINTER(monptr1;vNomVar1;vnumtable1;vnumchamp1)\n      RESOLVE POINTER(monptr2;vNomVar2;vnumtable2;vnumchamp2)\n      If(vNomVar1=vNomVar2)\n       //Ce test retourne Vrai alors que les variables sont diff\xe9rentes\n"})}),"\n",(0,o.jsx)(s.p,{children:"Dans ce cas, il est n\xe9cessaire d\u2019utiliser la comparaison de pointeurs :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"     If(monptr1=monptr2) //Ce test retourne Faux\n"})}),"\n",(0,o.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,o.jsxs)(s.p,{children:["Une ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Concepts/error-handling",children:"m\xe9thode de gestion d'erreurs"})," install\xe9e par la commande ",(0,o.jsx)(s.code,{children:"ON ERR CALL"})," s'applique \xe0 l'application en cours d'ex\xe9cution uniquement. En cas d'erreur g\xe9n\xe9r\xe9e par un composant, la m\xe9thode d'appel sur erreur ",(0,o.jsx)(s.code,{children:"ON ERR CALL"})," du projet h\xf4te n'est pas appel\xe9e, et inversement."]}),"\n",(0,o.jsx)(s.h2,{id:"acc\xe8s-aux-tables-du-projet-h\xf4te",children:"Acc\xe8s aux tables du projet h\xf4te"}),"\n",(0,o.jsx)(s.p,{children:"Bien que les composants ne puissent pas utiliser de tables, les pointeurs permettent au projet h\xf4te et au composant de communiquer. Par exemple, voici une m\xe9thode pouvant \xeatre appel\xe9e depuis un composant :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'// appeler une m\xe9thode composant\nmethCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Dans le composant, le code de la m\xe9thode ",(0,o.jsx)(s.code,{children:"methCreateRec"})," :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"C_POINTER($1) //Pointeur vers une table du projet h\xf4te\nC_POINTER($2) //Pointeur vers un champ du projet h\xf4te\nC_TEXT($3) // Valeur \xe0 ins\xe9rer\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Dans le contexte d'un composant, 4D suppose qu'une r\xe9f\xe9rence \xe0 un formulaire table est une r\xe9f\xe9rence au formulaire table h\xf4te (car les composants ne peuvent pas avoir de tables)"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"utilisation-de-tables-et-de-champs",children:"Utilisation de tables et de champs"}),"\n",(0,o.jsxs)(s.p,{children:["Un composant ne peut pas utiliser les tables et les champs d\xe9finis dans la structure 4D du projet utilis\xe9 comme matrice. En revanche, il peut cr\xe9er et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont cr\xe9\xe9es et g\xe9r\xe9es via le langage SQL. En revanche, il peut cr\xe9er et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Utiliser une base externe signifie d\xe9signer temporairement cette base comme base courante, c\u2019est-\xe0-dire comme base cible des requ\xeates SQL ex\xe9cut\xe9es par 4D. Les bases externes sont cr\xe9\xe9es \xe0 l'aide de la commande SQL ",(0,o.jsx)(s.code,{children:"CREATE DATABASE"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(s.p,{children:"Le code suivant est inclus dans un composant et effectue trois actions \xe9l\xe9mentaires avec une base de donn\xe9es externe :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"cr\xe9ation de la base de donn\xe9es externe si elle n'existe pas d\xe9j\xe0,"}),"\n",(0,o.jsx)(s.li,{children:"ajout de donn\xe9es dans la base de donn\xe9es externe,"}),"\n",(0,o.jsx)(s.li,{children:"lecture de donn\xe9es depuis la base de donn\xe9es externe."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Cr\xe9ation de la base de donn\xe9es externe :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) stocke les donn\xe9es dans un r\xe9pertoire autoris\xe9\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n'})}),"\n",(0,o.jsx)(s.p,{children:"Ecriture dans la base de donn\xe9es externe :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:" $Ptr_1:=$2 // r\xe9cup\xe8re des donn\xe9es depuis le projet h\xf4te via des pointeurs\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,o.jsx)(s.p,{children:"Lecture dans une base de donn\xe9es externe :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:" $Ptr_1:=$2 // acc\xe8de aux donn\xe9es du projet h\xf4te via des pointeurs\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n"})}),"\n",(0,o.jsx)(s.h2,{id:"utilisation-de-formulaires",children:"Utilisation de formulaires"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Seuls les "formulaires projet" (formulaires non associ\xe9s \xe0 une table en particulier) peuvent \xeatre exploit\xe9s directement dans un composant. Tous les formulaires projet pr\xe9sents dans le projet matrice peuvent \xeatre utilis\xe9s par le composant.'}),"\n",(0,o.jsx)(s.li,{children:"Un composant peut faire appel \xe0 des formulaires table du projet h\xf4te. A noter qu\u2019il est n\xe9cessaire dans ce cas d\u2019utiliser des pointeurs plut\xf4t que des noms de table entre [] pour d\xe9signer les formulaires dans le code du composant."}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Si un composant utilise la commande ",(0,o.jsx)(s.code,{children:"ADD RECORD"}),", le formulaire Entr\xe9e courant du projet h\xf4te sera affich\xe9, dans le contexte du projet h\xf4te. Par cons\xe9quent, si le formulaire comporte des variables, le composant n\u2019y aura pas acc\xe8s."]}),"\n"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Vous pouvez publier des formulaires de composants comme sous-formulaires dans les projets h\xf4tes. Avec ce principe, vous pouvez notamment d\xe9velopper des composants proposant des objets graphiques. Par exemple, les Widgets propos\xe9s par 4D sont bas\xe9s sur l\u2019emploi de sous-formulaires en composants."}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Dans le contexte d'un composant, tout formulaire projet r\xe9f\xe9renc\xe9 doit appartenir au composant. Par exemple, \xe0 l'int\xe9rieur d'un composant, le fait de r\xe9f\xe9rencer un formulaire projet h\xf4te \xe0 l'aide de ",(0,o.jsx)(s.code,{children:"DIALOG"})," ou de ",(0,o.jsx)(s.code,{children:"Open form window"})," d\xe9clenchera une erreur."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"utilisation-de-ressources",children:"Utilisation de ressources"}),"\n",(0,o.jsx)(s.p,{children:"Les composants peuvent utiliser des ressources situ\xe9es dans le dossier Ressources du composant."}),"\n",(0,o.jsx)(s.p,{children:"Les m\xe9canismes automatiques sont op\xe9rationnels : les fichiers XLIFF pr\xe9sents dans le dossier Resources d\u2019un composant seront charg\xe9s par ce composant."}),"\n",(0,o.jsx)(s.p,{children:"Dans un projet h\xf4te contenant un ou plusieurs composants, chaque composant ainsi que les projets h\xf4tes ont leur propre \xabcha\xeene de ressources\xbb Les ressources sont r\xe9parties entre les diff\xe9rents projets : il n'est pas possible d'acc\xe9der aux ressources du composant A \xe0 partir du composant B ou du projet h\xf4te."}),"\n",(0,o.jsx)(s.h2,{id:"ex\xe9cution-du-code-dinitialisation",children:"Ex\xe9cution du code d'initialisation"}),"\n",(0,o.jsx)(s.p,{children:"Un composant peut ex\xe9cuter automatiquement du code 4D lors de l'ouverture ou de la fermeture de la base h\xf4te, par exemple pour charger et/ou sauvegarder les pr\xe9f\xe9rences ou les \xe9tats utilisateur li\xe9s au fonctionnement de la base h\xf4te."}),"\n",(0,o.jsxs)(s.p,{children:["L'ex\xe9cution du code d'initialisation ou de fermeture se fait au moyen de la m\xe9thode base ",(0,o.jsx)(s.code,{children:"On Host Database Event"}),"."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Pour des raisons de s\xe9curit\xe9, vous devez autoriser explicitement l'ex\xe9cution de la m\xe9thode base ",(0,o.jsx)(s.code,{children:"On Host Database Event"})," dans la base h\xf4te afin de pouvoir l'appeler. Pour ce faire, vous devez cocher l'option ",(0,o.jsx)(s.strong,{children:'Ex\xe9cuter la m\xe9thode "Sur \xe9v\xe9nement base h\xf4te" des composants'})," dans la page S\xe9curit\xe9 des Param\xe8tres."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"protection-des-composants--la-compilation",children:"Protection des composants : la compilation"}),"\n",(0,o.jsx)(s.p,{children:"Par d\xe9faut, toutes les m\xe9thodes projet d\u2019un projet utilis\xe9 comme matrice et install\xe9 comme composant sont virtuellement visibles depuis le projet h\xf4te. En particulier :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Les m\xe9thodes projet partag\xe9es sont accessibles dans la Page M\xe9thodes de l\u2019Explorateur et peuvent \xeatre appel\xe9es dans les m\xe9thodes du projet h\xf4te. Leur contenu peut \xeatre s\xe9lectionn\xe9 et copi\xe9 dans la zone de pr\xe9visualisation de l\u2019Explorateur. Elles peuvent \xe9galement \xeatre visualis\xe9es dans le d\xe9bogueur. Il n\u2019est toutefois pas possible de les ouvrir dans l\u2019\xe9diteur de m\xe9thodes ni de les modifier."}),"\n",(0,o.jsx)(s.li,{children:"Les autres m\xe9thodes projet du projet utilis\xe9 comme matrice n\u2019apparaissent pas dans l\u2019Explorateur mais peuvent \xe9galement \xeatre visualis\xe9es dans le d\xe9bogueur du projet h\xf4te."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Pour prot\xe9ger efficacement les m\xe9thodes projet d'un composant, il suffit de compiler le projet utilis\xe9 comme matrice et de le fournir sous la forme d'un fichier .4dz. Lorsqu\u2019un projet compil\xe9 utilis\xe9 comme matrice est install\xe9 comme composant :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Les m\xe9thodes projet partag\xe9es se trouvent dans la Page M\xe9thodes de l\u2019Explorateur et peuvent \xeatre appel\xe9es dans les m\xe9thodes du projet h\xf4te. En revanche, leur contenu n\u2019appara\xeet pas dans la zone de pr\xe9visualisation ni dans le d\xe9bogueur."}),"\n",(0,o.jsx)(s.li,{children:"Les autres m\xe9thodes projet du projet utilis\xe9 comme matrice n\u2019apparaissent jamais."}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},626785:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return i}});var t=n(667294);let o={},r=t.createContext(o);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);