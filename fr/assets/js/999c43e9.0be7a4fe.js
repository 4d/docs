"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96178],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var s=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),i=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return s.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),c=r,v=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return n?s.createElement(v,a(a({ref:t},p),{},{components:n})):s.createElement(v,a({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},708556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});n(667294);var s=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={id:"methods",title:"Methods"},l=void 0,u={unversionedId:"Concepts/methods",id:"version-19/Concepts/methods",title:"Methods",description:"Une m\xe9thode est un morceau de code qui ex\xe9cute une ou plusieurs actions. Une m\xe9thode est compos\xe9e de plusieurs lignes d\u2019instructions. Une instruction ex\xe9cute une action, et peut \xeatre simple ou complexe. Cette ligne peut \xeatre aussi longue que vous voulez (elle peut comporter jusqu\u2019\xe0 32 000 caract\xe8res, ce qui est normalement suffisant pour la plupart des instructions).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/fr/19/Concepts/methods",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"methods",title:"Methods"},sidebar:"docs",previous:{title:"Tableaux",permalink:"/docs/fr/19/Concepts/arrays"},next:{title:"Param\xe8tres",permalink:"/docs/fr/19/Concepts/parameters"}},i={},p=[{value:"Types de m\xe9thodes",id:"types-de-m\xe9thodes",level:2},{value:"M\xe9thodes projet",id:"m\xe9thodes-projet",level:2},{value:"Sous-routines",id:"sous-routines",level:3},{value:"Objet formule",id:"objet-formule",level:3},{value:"M\xe9thodes de menu",id:"m\xe9thodes-de-menu",level:3},{value:"M\xe9thodes de gestion de process",id:"m\xe9thodes-de-gestion-de-process",level:3},{value:"M\xe9thodes de gestion d\u2019\xe9v\xe9nements et d&#39;erreurs",id:"m\xe9thodes-de-gestion-d\xe9v\xe9nements-et-derreurs",level:3},{value:"M\xe9thode projet r\xe9cursives",id:"m\xe9thode-projet-r\xe9cursives",level:2}],d={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,s.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Une m\xe9thode est un morceau de code qui ex\xe9cute une ou plusieurs actions. Une m\xe9thode est compos\xe9e de plusieurs lignes d\u2019instructions. Une instruction ex\xe9cute une action, et peut \xeatre simple ou complexe. Cette ligne peut \xeatre aussi longue que vous voulez (elle peut comporter jusqu\u2019\xe0 32 000 caract\xe8res, ce qui est normalement suffisant pour la plupart des instructions)."),(0,s.kt)("p",null,"La taille maximale d'une m\xe9thode est limit\xe9e \xe0 2 Go de texte ou \xe0 32 000 lignes de code."),(0,s.kt)("h2",r({},{id:"types-de-m\xe9thodes"}),"Types de m\xe9thodes"),(0,s.kt)("p",null,"Dans le langage 4D, il existe plusieurs cat\xe9gories de m\xe9thodes. La cat\xe9gorie d\xe9pend de la fa\xe7on dont on peut les appeler :"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,s.kt)("th",r({parentName:"tr"},{align:null}),"Contexte d'appel"),(0,s.kt)("th",r({parentName:"tr"},{align:null}),"Accepte des param\xe8tres"),(0,s.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",r({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"td"},"M\xe9thode")),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"\xc0 la demande, lorsque le nom de la m\xe9thode projet est appel\xe9 (voir ",(0,s.kt)("a",r({parentName:"td"},{href:"#calling-project-methods"}),"Appel de m\xe9thodes de projet"),")"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Oui"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Peut contenir du code pour ex\xe9cuter des actions personnalis\xe9es. Une fois que votre m\xe9thode projet est cr\xe9\xe9e, elle devient partie int\xe9grante du langage du projet.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",r({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"td"},"M\xe9thode objet (widget)")),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Automatique, lorsqu'un \xe9v\xe9nement implique l'objet auquel la m\xe9thode est associ\xe9e"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Non"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9 d'un objet formulaire (\xe9galement appel\xe9 widget)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",r({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"td"},"M\xe9thode formulaire")),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Automatique, lorsqu'un \xe9v\xe9nement implique le formulaire auquel la m\xe9thode est associ\xe9e"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Non"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9 d'un formulaire. Vous pouvez utiliser une m\xe9thode formulaire pour g\xe9rer les donn\xe9es et les objets, mais il est g\xe9n\xe9ralement plus simple et plus efficace d'utiliser une m\xe9thode objet dans ces cas de figure.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",r({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"td"},"Trigger")," (ou ",(0,s.kt)("em",{parentName:"td"},"m\xe9thode table"),")"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Automatique, chaque fois que vous manipulez les enregistrements d'une table (Ajouter, Supprimer, Modifier)"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Non"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Propri\xe9t\xe9 d'une table. Les triggers sont des m\xe9thodes qui peuvent \xe9viter les op\xe9rations 'ill\xe9gales' effectu\xe9es avec les enregistrements de votre base.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",r({parentName:"tr"},{align:null}),(0,s.kt)("strong",{parentName:"td"},"M\xe9thode base")),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Automatique, lorsqu'un \xe9v\xe9nement se produit sur la session de travail"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Oui (pr\xe9d\xe9fini)"),(0,s.kt)("td",r({parentName:"tr"},{align:null}),"Il existe 16 m\xe9thodes base dans 4D. Voir la section M\xe9thodes bases")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Le langage 4D prend \xe9galement en charge les ",(0,s.kt)("strong",{parentName:"p"},"fonctions de classe")," (Class functions), qui peuvent \xeatre appel\xe9es dans le contexte d'une instance d'objet. Les fonctions de classe peuvent \xeatre int\xe9gr\xe9es (par exemple ",(0,s.kt)("inlineCode",{parentName:"p"},"collection.orderBy()")," ou ",(0,s.kt)("inlineCode",{parentName:"p"},"entity.save()"),"), ou ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/Concepts/classes#function"}),"cr\xe9\xe9es par le d\xe9veloppeur 4D"),".")),(0,s.kt)("h2",r({},{id:"m\xe9thodes-projet"}),"M\xe9thodes projet"),(0,s.kt)("p",null,"Une m\xe9thode projet peut tenir les r\xf4les suivants, en fonction de la mani\xe8re dont elle est ex\xe9cut\xe9e et utilis\xe9e :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sous-routine"),(0,s.kt)("li",{parentName:"ul"},"Objet formule"),(0,s.kt)("li",{parentName:"ul"},"M\xe9thode de menu"),(0,s.kt)("li",{parentName:"ul"},"M\xe9thode de gestion de process"),(0,s.kt)("li",{parentName:"ul"},"M\xe9thode de gestion d\u2019\xe9v\xe9nements et d'erreurs")),(0,s.kt)("h3",r({},{id:"sous-routines"}),"Sous-routines"),(0,s.kt)("p",null,"Une sous-routine est une m\xe9thode projet qui peut \xeatre consid\xe9r\xe9e comme une m\xe9thode asservie. D\u2019autres m\xe9thodes lui demandent d\u2019effectuer des t\xe2ches. Une sous-routine qui retourne une valeur est appel\xe9e une fonction."),(0,s.kt)("p",null,"Lorsque vous cr\xe9ez une m\xe9thode projet, elle devient partie int\xe9grante du langage du projet dans lequel elle a \xe9t\xe9 cr\xe9\xe9e. Vous pouvez alors l'appeler \xe0 partir d'autres m\xe9thodes (m\xe9thode projet, m\xe9thode objet, etc.) de la m\xeame mani\xe8re que vous appelez les commandes int\xe9gr\xe9es de 4D. Une m\xe9thode projet utilis\xe9e de cette mani\xe8re est appel\xe9e une sous-routine."),(0,s.kt)("p",null,"L'utilisation de sous-routines procure les avantages suivants :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"R\xe9duction du code r\xe9p\xe9titif,"),(0,s.kt)("li",{parentName:"ul"},"Clarification des m\xe9thodes,"),(0,s.kt)("li",{parentName:"ul"},"Modification plus facile des m\xe9thodes,"),(0,s.kt)("li",{parentName:"ul"},"Cr\xe9ation de code modulaire")),(0,s.kt)("p",null,"Imaginons par exemple que vous travaillez sur un projet de clients. A mesure que vous construisez le projet, vous vous apercevez que vous r\xe9p\xe9tez souvent certaines t\xe2ches, telles que la recherche d\u2019un client et la modification de son enregistrement. Le code n\xe9cessaire \xe0 l\u2019accomplissement de cette op\xe9ration pourrait \xeatre :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // Recherche d'un client\n QUERY BY EXAMPLE([Clients])\n  // S\xe9lection du formulaire entr\xe9e\n FORM SET INPUT([Clients];\"Saisie de donn\xe9es\")\n  // Modification de l'enregistrement du client\n MODIFY RECORD([Clients])\n")),(0,s.kt)("p",null,"Si vous n\u2019utilisez pas de sous-routines, vous devrez \xe9crire ce code \xe0 chaque fois que vous voudrez modifier l\u2019enregistrement d\u2019un client. Si cette op\xe9ration est r\xe9alis\xe9e dans dix endroits diff\xe9rents de votre projet, vous devrez la r\xe9\xe9crire dix fois. Gr\xe2ce aux sous-routines, vous ne l\u2019\xe9crirez qu\u2019une seule fois en tout. C\u2019est le premier avantage des sous-routines : r\xe9duire la quantit\xe9 de code \xe0 \xe9crire."),(0,s.kt)("p",null,"Si le code ci-dessus \xe9tait une m\xe9thode projet appel\xe9e ",(0,s.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER"),", vous l\u2019ex\xe9cuteriez simplement en inscrivant son nom dans une autre m\xe9thode. Par exemple, pour modifier l\u2019enregistrement d\u2019un client puis l\u2019imprimer, vous n\u2019auriez qu\u2019\xe0 \xe9crire :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," MODIFY_CUSTOMER\n PRINT SELECTION([Customers])\n")),(0,s.kt)("p",null,"Cette possibilit\xe9 simplifie \xe9norm\xe9ment vos m\xe9thodes. Dans l\u2019exemple ci-dessus, il n\u2019est pas n\xe9cessaire de savoir comment fonctionne la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER"),", mais uniquement ce qu\u2019elle fait. C\u2019est le deuxi\xe8me avantage que vous pouvez tirer de l\u2019utilisation de sous-routines : la clarification de votre code. Ainsi, ces m\xe9thodes deviennent en quelque sorte des extensions du langage de 4D."),(0,s.kt)("p",null,"Si vous devez modifier votre mode de recherche des clients, comme dans notre exemple, il vous suffit de modifier une seule m\xe9thode, et non dix. C\u2019est un autre avantage des sous-routines : faciliter les modifications de votre code."),(0,s.kt)("p",null,"Avec les sous-routines, vous rendez votre code modulaire. Cela signifie simplement que vous dissociez votre code en modules (sous-routines), chacun d\u2019entre eux effectuant une t\xe2che logique. Examinez le code suivant, tir\xe9 d\u2019un projet de gestion de compte courant :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"})," FIND_CLEARED _CHECKS // Rechercher les ch\xe8ques \xe9mis\n RECONCILE_ACCOUNT // Rapprocher le compte\nPRINT_CHECK_BOOK_REPORT // Imprimer un relev\xe9\n")),(0,s.kt)("p",null,"M\xeame pour quelqu\u2019un qui ne conna\xeet pas le projet, le code est clair. Il n\u2019est pas n\xe9cessaire d\u2019examiner chaque sous-routine. Elles peuvent contenir de nombreuses lignes d\u2019instructions et effectuer des op\xe9rations complexes, mais l\u2019important est ce qu\u2019elles font. Nous vous conseillons de d\xe9couper votre code en t\xe2ches logiques, ou modules, \xe0 chaque fois que c\u2019est possible."),(0,s.kt)("h3",r({},{id:"objet-formule"}),"Objet formule"),(0,s.kt)("p",null,"Vous pouvez encapsuler vos m\xe9thodes projets dans les objets ",(0,s.kt)("strong",{parentName:"p"},"formule")," et les appeler \xe0 partir de vos objets."),(0,s.kt)("p",null,"Les commandes ",(0,s.kt)("inlineCode",{parentName:"p"},"Formula")," ou ",(0,s.kt)("inlineCode",{parentName:"p"},"Formula from string")," vous permettent de cr\xe9er des objets formule natifs que vous pouvez encapsuler dans des propri\xe9t\xe9s d'objets. Vous pouvez ainsi impl\xe9menter des m\xe9thodes d'objets personnalis\xe9es."),(0,s.kt)("p",null,"Pour ex\xe9cuter une m\xe9thode stock\xe9e dans une propri\xe9t\xe9 d'objet, utilisez l'op\xe9rateur ",(0,s.kt)("strong",{parentName:"p"},"( )")," apr\xe8s le nom de la propri\xe9t\xe9. Par exemple :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//myAlert\nALERT("Hello world!")\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"myAlert")," peut ensuite \xeatre encapsul\xe9 dans n'importe quel objet et peut \xeatre appel\xe9 :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //affiche "Hello world!"\n')),(0,s.kt)("p",null,"La syntaxe avec des crochets est \xe9galement prise en charge :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$o["custom_Alert"]() //affiche "Hello world!"\n')),(0,s.kt)("p",null,"Vous pouvez appeler votre formule en lui ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/Concepts/parameters"}),"passant des param\xe8tres")," $1, $2, etc., tout comme pour les m\xe9thodes projet de 4D :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//m\xe9thode fullName\nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n')),(0,s.kt)("p",null,"Vous pouvez encapsuler ",(0,s.kt)("inlineCode",{parentName:"p"},"fullName")," dans un objet :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n// \xe9quivalent \xe0 $result:=fullName("param1";"param2")\n')),(0,s.kt)("p",null,"Lorsqu'elles sont associ\xe9es \xe0 la fonction ",(0,s.kt)("inlineCode",{parentName:"p"},"This"),", ces m\xe9thodes objets vous permettent d'\xe9crire du code g\xe9n\xe9rique tr\xe8s puissant. Par exemple :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'//m\xe9thode fullName2 \nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n')),(0,s.kt)("p",null,"La m\xe9thode agit ensuite comme un nouvel attribut calcul\xe9 qui peut \xeatre ajout\xe9e aux autres attributs :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($o)\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //ajouter la m\xe9thode  \n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n')),(0,s.kt)("p",null,"A note que m\xeame si elle n'a pas de param\xe8tres, une m\xe9thode objet devant \xeatre ex\xe9cut\xe9e doit \xeatre appel\xe9e avec des parenth\xe8ses ( ). Appeler uniquement la propri\xe9t\xe9 retournera une nouvelle r\xe9f\xe9rence \xe0 la formule (elle ne sera pas ex\xe9cut\xe9e) :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$o:=$f.message //retourne l'objet formule en $o\n")),(0,s.kt)("h3",r({},{id:"m\xe9thodes-de-menu"}),"M\xe9thodes de menu"),(0,s.kt)("p",null,"Une m\xe9thode de menu est appel\xe9e lorsque la commande de menu personnalis\xe9 \xe0 laquelle elle est associ\xe9e est s\xe9lectionn\xe9e. Vous assignez la m\xe9thode \xe0 la commande de menu dans l\u2019\xe9diteur de menus de 4D. Lorsque l\u2019utilisateur s\xe9lectionne la commande de menu, la m\xe9thode est ex\xe9cut\xe9e. En cr\xe9ant des menus personnalis\xe9s qui appellent des m\xe9thodes de menu qui ex\xe9cutent des actions sp\xe9cifiques, vous cr\xe9ez des interfaces personnalis\xe9es pour vos applications de bureau."),(0,s.kt)("p",null,"Les commandes de menus personnalis\xe9s peuvent d\xe9clencher une ou plusieurs actions. Par exemple, une commande de menu de saisie d\u2019enregistrements peut appeler une m\xe9thode effectuant deux actions : afficher le formulaire entr\xe9e appropri\xe9 et appeler la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"AJOUTER ENREGISTREMENT")," jusqu\u2019\xe0 ce que l\u2019utilisateur annule la saisie de nouveaux enregistrements."),(0,s.kt)("p",null,"L\u2019automatisation de s\xe9quences d\u2019actions est une possibilit\xe9 tr\xe8s puissante du langage de programmation de 4D. A l\u2019aide des menus personnalis\xe9s, vous pouvez automatiser des s\xe9quences de t\xe2ches, vous permettez aux utilisateurs de naviguer plus facilement dans votre application."),(0,s.kt)("h3",r({},{id:"m\xe9thodes-de-gestion-de-process"}),"M\xe9thodes de gestion de process"),(0,s.kt)("p",null,"Une ",(0,s.kt)("strong",{parentName:"p"},"m\xe9thode projet")," est une m\xe9thode projet appel\xe9e lorsqu\u2019un process est d\xe9marr\xe9. Le process existera tant que la m\xe9thode sera en cours d'ex\xe9cution. A noter qu'une m\xe9thode de menu associ\xe9e \xe0 une commande de menu pour laquelle la propri\xe9t\xe9 ",(0,s.kt)("em",{parentName:"p"},"D\xe9marrer un nouveau process")," est s\xe9lectionn\xe9e, est aussi la m\xe9thode de gestion de process pour le process cr\xe9\xe9."),(0,s.kt)("h3",r({},{id:"m\xe9thodes-de-gestion-d\xe9v\xe9nements-et-derreurs"}),"M\xe9thodes de gestion d\u2019\xe9v\xe9nements et d'erreurs"),(0,s.kt)("p",null,"Une ",(0,s.kt)("strong",{parentName:"p"},"m\xe9thode de gestion d\u2019\xe9v\xe9nements")," est une m\xe9thode d\xe9di\xe9e \xe0 la gestion des \xe9v\xe9nements, qui s'ex\xe9cute dans un process diff\xe9rent de celui de la m\xe9thode de gestion des process. G\xe9n\xe9ralement, pour la gestion des \xe9v\xe9nements, vous pouvez laisser 4D faire le gros du travail. Par exemple, lors de la saisie de donn\xe9es, 4D d\xe9tecte les clics souris et les touches enfonc\xe9es, puis appelle les m\xe9thodes objet et formulaire correspondantes, vous permettant ainsi de pr\xe9voir dans ces m\xe9thodes les traitements appropri\xe9s aux \xe9v\xe9nements. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"APPELER SUR EVENEMENT"),"."),(0,s.kt)("p",null,"Une ",(0,s.kt)("strong",{parentName:"p"},"m\xe9thode de gestion d\u2019erreurs")," est une m\xe9thode projet d'interruption. Elle s'ex\xe9cute \xe0 l'int\xe9rieur du process dans lequel elle a \xe9t\xe9 install\xe9e \xe0 chaque fois qu'une erreur se produit. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,s.kt)("inlineCode",{parentName:"p"},"APPELER SUR ERREUR"),"."),(0,s.kt)("h2",r({},{id:"m\xe9thode-projet-r\xe9cursives"}),"M\xe9thode projet r\xe9cursives"),(0,s.kt)("p",null,"Des m\xe9thodes projet peuvent s'appeler les unes les autres. Par exemple :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Une m\xe9thode A peut appeler une m\xe9thode B, qui appelle A, donc A appelle B de nouveau, etc."),(0,s.kt)("li",{parentName:"ul"},"Une m\xe9thode peut s'appeler elle-m\xeame.")),(0,s.kt)("p",null,"Cela s'appelle la r\xe9cursivit\xe9. Le langage de 4D supporte pleinement la r\xe9cursivit\xe9."),(0,s.kt)("p",null,"Examinons l'exemple suivant : Supposons que vous disposiez d'une table ",(0,s.kt)("inlineCode",{parentName:"p"},"[Friends and Relatives]")," compos\xe9e de cet ensemble de champs extr\xeamement simplifi\xe9 :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[Amis et parents]Nom")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[Amis et parents]Enfant'Nom"))),(0,s.kt)("p",null,"Pour cet exemple, nous supposons que les valeurs des champs sont uniques (il n'existe pas deux personnes avec le m\xeame nom). A partir d'un nom, vous voulez \xe9crire la phrase \u201cUn de mes amis, Pierre, qui est le rejeton de Paul qui est le rejeton de Martine qui est le rejeton de Robert qui est le rejeton de Gertrude, fait cela pour gagner sa vie !\u201d :"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Vous pouvez proc\xe9der de la mani\xe8re suivante :")),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Saisissez le nom :";"John")\n Si(OK=1)\n    QUERY([Amis et parents];[Amis et parents]Nom=$vsNom)\n    If(Records in selection([Amis et parents])>0)\n       $vtHistoireCompl\xe8te:="Un de mes amis, "+$vsName\n       Repeat\n          QUERY([Amis et parents];[Amis et parents]Enfant\'Nom=$vsName)\n          $vlResultRecherche:=Records in selection([Amis et parents])\n          If($vlResultRecherche>0)\n             $vtHistoireCompl\xe8te:=$vtHistoireCompl\xe8te+" qui est le rejeton de "+[Amis et parents]Nom\n             $vsName:=[Amis et parents]Nom\n          End if\n       Until($vlResultRecherche=0)\n       $vtHistoireCompl\xe8te:=$vtHistoireCompl\xe8te+", fait cela pour gagner sa vie !"\n       ALERT($vtHistoireCompl\xe8te)\n    End if\n End if\n')),(0,s.kt)("ol",r({},{start:2}),(0,s.kt)("li",{parentName:"ol"},"Vous pouvez \xe9galement proc\xe9der ainsi :")),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Saisissez le nom :";"John")\n  If(OK=1)\n    QUERY([Amis et parents];[Amis et parents]Nom=$vsName)\n    If(Records in selection([Amis et parents])>0)\n       ALERT("Un de mes amis, "+G\xe9n\xe9alogie de($vsName)+", fait cela pour gagner sa vie !")\n    End if\n End if\n')),(0,s.kt)("p",null,"en utilisant la fonction r\xe9cursive ",(0,s.kt)("inlineCode",{parentName:"p"},"G\xe9n\xe9alogie de")," suivante :"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // M\xe9thode projet G\xe9n\xe9alogie de\n  // G\xe9n\xe9alogie de ( Cha\xeene ) -> Texte\n  // G\xe9n\xe9alogie de ( Nom ) -> Partie de la phrase\n\n $0:=$1\n QUERY([Amis et parents];[Amis et parents]Enfant\'Nom=$1)\nIf(Enregistrements trouves([Amis et parents])>0)\n    $0:=$0+" qui est le rejeton de "+G\xe9n\xe9alogie de([Amis et parents]Nom)\nEnd if\n')),(0,s.kt)("p",null,"Vous notez que la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"G\xe9n\xe9alogie de")," s'appelle elle-m\xeame."),(0,s.kt)("p",null,"La premi\xe8re mani\xe8re de proc\xe9der utilise un ",(0,s.kt)("strong",{parentName:"p"},"algorithme it\xe9ratif"),". La seconde mani\xe8re utilise un ",(0,s.kt)("strong",{parentName:"p"},"algorithme r\xe9cursif"),"."),(0,s.kt)("p",null,"Lorsque vous impl\xe9mentez du code pour traiter des cas comme celui d\xe9crit ci-dessus, vous aurez toujours le choix entre \xe9crire des m\xe9thodes utilisant des algorithmes it\xe9ratifs ou r\xe9cursifs. Typiquement, la r\xe9cursivit\xe9 fournit un code plus concis, plus facile \xe0 lire et \xe0 maintenir, mais elle est facultative."),(0,s.kt)("p",null,"Dans 4D, la r\xe9cursivit\xe9 est typiquement utilis\xe9e pour :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Traiter les enregistrements de tables li\xe9es les unes aux autres de la m\xeame mani\xe8re que d\xe9crit dans l'exemple ci-dessus."),(0,s.kt)("li",{parentName:"ul"},"Naviguer parmi les documents et les dossiers de votre disque \xe0 l'aide des commandes ",(0,s.kt)("inlineCode",{parentName:"li"},"LISTE DES DOSSIERS")," et ",(0,s.kt)("inlineCode",{parentName:"li"},"LISTE DES DOCUMENTS"),". Un dossier peut contenir des dossiers et des documents, les sous-dossiers peuvent eux-m\xeames contenir des dossiers et des documents, etc.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important :")," Les appels r\xe9cursifs doivent toujours se terminer \xe0 un moment donn\xe9. Dans l'exemple ci-dessus, la m\xe9thode ",(0,s.kt)("inlineCode",{parentName:"p"},"G\xe9n\xe9alogie de")," cesse de s'appeler elle-m\xeame lorsque la recherche ne trouve plus d'enregistrement. Sans ce test conditionnel, la m\xe9thode s'appellerait ind\xe9finiment et 4D pourrait au bout d'un certain temps retourner l'erreur \u201cLa pile est pleine\u201d car le programme n'aurait plus assez de place pour \"empiler\" les appels (ainsi que les param\xe8tres et les variables locales utilis\xe9s dans la m\xe9thode)."))}m.isMDXComponent=!0}}]);