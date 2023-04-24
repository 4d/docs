"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"object",title:"Object"},s=void 0,i={unversionedId:"Concepts/object",id:"version-19-R8/Concepts/object",title:"Object",description:'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets "natifs" 4D est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur" (aussi appel\xe9es "attribut/valeur). La syntaxe de ces objets s\u2019inspire du JSON :',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/fr/19-R8/Concepts/object",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/19-R8/Concepts/number"},next:{title:"Picture",permalink:"/docs/fr/19-R8/Concepts/picture"}},u={},p=[{value:"Initialisation",id:"initialisation",level:2},{value:"Objet standard ou partag\xe9",id:"objet-standard-ou-partag\xe9",level:3},{value:"Principes de syntaxe",id:"principes-de-syntaxe",level:2},{value:"Propri\xe9t\xe9s des objets",id:"propri\xe9t\xe9s-des-objets",level:3},{value:"Pointeurs",id:"pointeurs",level:3},{value:"Valeur Null",id:"valeur-null",level:3},{value:"Valeur Ind\xe9finie",id:"valeur-ind\xe9finie",level:3},{value:"Exemples",id:"exemples",level:2}],d={toc:p};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets "natifs" 4D est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur" (aussi appel\xe9es "attribut/valeur). La syntaxe de ces objets s\u2019inspire du JSON :'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Un nom de propri\xe9t\xe9 est toujours un texte, par exemple "Nom". Il doit suivre des ',(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R8/Concepts/identifiers#object-properties"}),"r\xe8gles sp\xe9cifiques"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Une valeur de propri\xe9t\xe9 peut \xeatre du type suivant :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Num\xe9rique (r\xe9el, entier long, etc.)"),(0,a.kt)("li",{parentName:"ul"},"text"),(0,a.kt)("li",{parentName:"ul"},"Null"),(0,a.kt)("li",{parentName:"ul"},"boolean"),(0,a.kt)("li",{parentName:"ul"},"Pointeur (stock\xe9 tel quel, \xe9valu\xe9 \xe0 l\u2019aide de la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON Stringify")," ou lors d\u2019une copie),"),(0,a.kt)("li",{parentName:"ul"},"Date (type date ou cha\xeene au format date ISO)"),(0,a.kt)("li",{parentName:"ul"},"Objet(1) (les objets peuvent \xeatre imbriqu\xe9s sur plusieurs niveaux)"),(0,a.kt)("li",{parentName:"ul"},"Image(2)"),(0,a.kt)("li",{parentName:"ul"},"collection")))),(0,a.kt)("p",null,"(1) Les objets ORDA tels que les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R8/ORDA/dsmapping#entity"}),"entit\xe9s")," ou les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R8/ORDA/dsmapping#entity-selection"}),"s\xe9lections d'entit\xe9s")," ne peuvent pas \xeatre stock\xe9s dans les ",(0,a.kt)("strong",{parentName:"p"},"champs objet"),"; ils sont n\xe9anmoins enti\xe8rement pris en charge dans les ",(0,a.kt)("strong",{parentName:"p"},"variables objet")," en m\xe9moire."),(0,a.kt)("p",null,"(2)Lorsqu'elles sont expos\xe9es sous forme de texte dans le d\xe9bogueur ou export\xe9es en JSON, les propri\xe9t\xe9s d'objet de type image indiquent \"","[objet Image]",'".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attention :")," N'oubliez pas que les noms d'attributs tiennent compte des majuscules/minuscules."),(0,a.kt)("p",null,"Vous g\xe9rez les variables, les champs ou les expressions de type Objet \xe0 l'aide de la ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/19-R8/Concepts/object#syntax-basics"}),"notation objet")," ou des commandes classiques du th\xe8me ",(0,a.kt)("strong",{parentName:"p"},"Objets (langage)"),". A noter que des commandes sp\xe9cifiques du th\xe8me ",(0,a.kt)("strong",{parentName:"p"},"Requ\xeates"),", telles que ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY BY ATTRIBUTE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY SELECTION BY ATTRIBUTE")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY ATTRIBUTE")," peuvent \xeatre utilis\xe9es pour traiter des champs objets."),(0,a.kt)("p",null,"Chaque valeur de propri\xe9t\xe9 accessible par la notation objet est consid\xe9r\xe9e comme une expression. Vous pouvez utiliser ces valeurs partout o\xf9 des expressions 4D sont attendues :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dans le code 4D, soit \xe9crites dans les m\xe9thodes (\xe9diteur de code) soit externalis\xe9es (formules, fichiers balis\xe9s trait\xe9s par la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," ou le serveur Web, fichiers d'export, documents 4D Write Pro, etc.),"),(0,a.kt)("li",{parentName:"ul"},"Dans les zones d'expressions du d\xe9bogueur et l'explorateur d'ex\xe9cution,"),(0,a.kt)("li",{parentName:"ul"},"Dans la liste de propri\xe9t\xe9s de l'\xe9diteur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de donn\xe9es, couleur de fond, style ou couleur de police).")),(0,a.kt)("h2",r({},{id:"initialisation"}),"Initialisation"),(0,a.kt)("p",null,"Les objets doivent \xeatre initialis\xe9s \xe0 l'aide, par exemple, de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"New object"),", sinon une erreur de syntaxe sera g\xe9n\xe9r\xe9e \xe0 la suite d'une lecture ou d'une modification de leurs propri\xe9t\xe9s."),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_OBJECT($obVar) ////cr\xe9ation d'une variable 4D de type objet\n $obVar:=New object //initialisation de l'objet et assignation \xe0 la variable 4D\n")),(0,a.kt)("h3",r({},{id:"objet-standard-ou-partag\xe9"}),"Objet standard ou partag\xe9"),(0,a.kt)("p",null,"Vous pouvez cr\xe9er deux types d'objets :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"standard (non partag\xe9s), \xe0 l'aide de la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"New object"),". Ces objets peuvent \xeatre modifi\xe9s sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9s entre les process."),(0,a.kt)("li",{parentName:"ul"},"partag\xe9s, \xe0 l'aide de la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"New shared object"),". Le contenu de ces objets peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces objets doit \xeatre contr\xf4l\xe9 via des structures ",(0,a.kt)("inlineCode",{parentName:"li"},"Use...End use"),". Pour plus d'informations, veuillez vous reporter \xe0 la page ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/19-R8/Concepts/shared"}),"Objets partag\xe9s et collections partag\xe9es"),".")),(0,a.kt)("h2",r({},{id:"principes-de-syntaxe"}),"Principes de syntaxe"),(0,a.kt)("p",null,"La notation objet est utilis\xe9e pour acc\xe9der aux valeurs de propri\xe9t\xe9s d'objets via des s\xe9quences de symboles et de propri\xe9t\xe9s r\xe9f\xe9renc\xe9es (tokens)."),(0,a.kt)("h3",r({},{id:"propri\xe9t\xe9s-des-objets"}),"Propri\xe9t\xe9s des objets"),(0,a.kt)("p",null,"Avec la notation objet, il est possible d'acc\xe9der aux propri\xe9t\xe9s d'objets (aussi appel\xe9es attributs d'objets) de deux fa\xe7ons :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'using a "dot" symbol: > object.propertyName')),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     employee.name:="Smith"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using a string within square brackets: > object",'["propertyName"]')),(0,a.kt)("p",null,"Exemples :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     $vName:=employee["name"]\n     //ou :\n     $property:="name"\n     $vName:=employee[$property]\n\n')),(0,a.kt)("p",null,"Comme la valeur d'une propri\xe9t\xe9 d'objet peut elle-m\xeame \xeatre un objet ou une collection, la notation objet requiert une s\xe9quence de symboles pour acc\xe9der aux sous-propri\xe9t\xe9s, par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $vAge:=employee.children[2].age\n")),(0,a.kt)("p",null,"La notation objet est utilisable avec tout \xe9l\xe9ment de langage qui contient ou retourne un objet, c'est-\xe0-dire :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"objets")," eux-m\xeames (stock\xe9s dans des variables, champs, propri\xe9t\xe9s d'objets, tableaux d'objets ou \xe9l\xe9ments de collections). Exemples :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     $age:=$myObjVar.employee.age //variable\n $addr:=[Emp]data_obj.address //champ\n $city:=$addr.city //propri\xe9t\xe9 d'un objet\n $pop:=$aObjCountries{2}.population //tableau d'objets\n $val:=$myCollection[3].subvalue //\xe9l\xe9ment de collection\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"commandes 4D")," qui retournent des objets. Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     $measures:=Lire mesures base.DB.tables\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"m\xe9thodes projet")," qui retournent des objets. Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"collections"),". Exemple:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     myColl.length //taille de la collection\n")),(0,a.kt)("h3",r({},{id:"pointeurs"}),"Pointeurs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Les objets \xe9tant toujours pass\xe9s par r\xe9f\xe9rence, l'utilisation de pointeurs n'est g\xe9n\xe9ralement pas n\xe9cessaire. En passant un objet, 4D utilise automatiquement, en interne, un m\xe9canisme similaire \xe0 un pointeur pour minimiser la m\xe9moire n\xe9cessaire, pour vous permettre de modifier le param\xe8tre et de retourner les modifications. Par cons\xe9quent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'acc\xe9der aux valeurs de propri\xe9t\xe9s via des pointeurs."),(0,a.kt)("p",null,'La notation objet pour les pointeurs est semblable \xe0 la notation objet standard, \xe0 la seule diff\xe9rence que le symbole "point" doit \xeatre omis.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Acc\xe8s direct :"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointeurObjet->nomPropri\xe9t\xe9"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Acc\xe8s par le nom :"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointeurObjet->",'[nomPropri\xe9t\xe9"]')))),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n")),(0,a.kt)("h3",r({},{id:"valeur-null"}),"Valeur Null"),(0,a.kt)("p",null,"Lorsque la notation objet est utilis\xe9e, la valeur ",(0,a.kt)("strong",{parentName:"p"},"null")," est prise en charge via la commande ",(0,a.kt)("strong",{parentName:"p"},"Null"),". Cette commande peut \xeatre utilis\xe9e pour affecter ou comparer la valeur null aux propri\xe9t\xe9s d'objets ou aux \xe9l\xe9ments de collections, par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," myObject.address.zip:=Null\n If(myColl[2]=Null)\n")),(0,a.kt)("p",null,"Pour plus d'informations, veuillez vous reporter \xe0 la description de la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Null"),"."),(0,a.kt)("h3",r({},{id:"valeur-ind\xe9finie"}),"Valeur Ind\xe9finie"),(0,a.kt)("p",null,"L'\xe9valuation d'une propri\xe9t\xe9 d'objet peut parfois produire une valeur ind\xe9finie (undefined). En r\xe8gle g\xe9n\xe9rale, lorsque le code tente de lire ou d'affecter des expressions ind\xe9finies, 4D g\xe9n\xe8re des erreurs, hormis dans les cas d\xe9crits ci-dessous :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La lecture d'une propri\xe9t\xe9 d'un objet ou d'une valeur ind\xe9fini(e) retourne Ind\xe9fini ; l'affectation d'une valeur ind\xe9finie \xe0 des variables (hors tableaux) a le m\xeame effet qu'appeler ",(0,a.kt)("inlineCode",{parentName:"li"},"CLEAR VARIABLE")," avec elles :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     C_OBJET($o)\n C_ENTIER Long($val)\n $val:=10 //$val=10\n $val:=$o.a //$o.a est ind\xe9fini (pas d'erreur), et affecter cette valeur efface la variable\n  //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La lecture de la propri\xe9t\xe9 ",(0,a.kt)("strong",{parentName:"li"},"length")," d'une collection ind\xe9finie renvoie 0 :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     C_COLLECTION($c) //variable cr\xe9\xe9e mais pas de collection d\xe9finie\n $size:=$c.length //$size = 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.')),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     C_OBJECT($o)\n mymethod($o.a) //passage d\'un param\xe8tre ind\xe9fini\n\n  //Dans la m\xe9thode mymethod\n C_TEXT($1) //Param\xe8tre de type texte\n  // $1 contient ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une expression de condition est automatiquement convertie \xe0 Faux lorsque son \xe9valuation donne Ind\xe9finie avec les mots-cl\xe9s Si et Au cas ou :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     C_OBJECT($o)\n     If($o.a) // faux\n     End if\n     Case of\n        :($o.a) // faux\n     End case\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :"),(0,a.kt)("li",{parentName:"ul"},"Objet, collection, pointeur : Null"),(0,a.kt)("li",{parentName:"ul"},"Image : image vide"),(0,a.kt)("li",{parentName:"ul"},"Bool\xe9en : False"),(0,a.kt)("li",{parentName:"ul"},'Cha\xeene : ""'),(0,a.kt)("li",{parentName:"ul"},"Num\xe9rique : 0"),(0,a.kt)("li",{parentName:"ul"},'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'),(0,a.kt)("li",{parentName:"ul"},"Heure : 0 (nombre de ms)"),(0,a.kt)("li",{parentName:"ul"},"Ind\xe9fini, Null : pas de changement")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     C_OBJECT($o)\n $o:=New object("a";2)\n $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien.")),(0,a.kt)("p",null,"Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Ind\xe9finie en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n")),(0,a.kt)("h2",r({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,'L\'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste enti\xe8rement prise en charge.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ecriture et lecture de propri\xe9t\xe9s d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Utilisation de la notation objet\n C_OBJECT($myObj) //d\xe9claration d\'une variable objet 4D\n $myObj:=New object //cr\xe9ation d\'un objet et affectation \xe0 la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Utilisation de la syntaxe par commande\n C_OBJECT($myObj2) //d\xe9claration d\'une variable objet 4D\n OB SET($myObj2;"age";42) //cr\xe9ation d\'un objet et cr\xe9ation de la propri\xe9t\xe9 age\n $age:=OB Get($myObj2;"age") //42\n\n  // Bien entendu, les deux notations peuvent \xeatre utilis\xe9es simultan\xe9ment\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cr\xe9ation de propri\xe9t\xe9s et affectation de valeurs, y compris d'autres objets :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //cr\xe9e la propri\xe9t\xe9 city avec la valeur "London"\n $Emp.city:="Paris" //modifie la propri\xe9t\xe9 city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //cr\xe9e la propri\xe9t\xe9 phone avec un autre objet comme valeur\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lire une valeur dans un sous-objet est tr\xe8s simple avec la notation objet :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vous pouvez acc\xe9der aux propri\xe9t\xe9s d'objets via des cha\xeenes gr\xe2ce \xe0 l'op\xe9rateur ","[ ]")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $Emp["city"]:="Berlin" //modification de la propri\xe9t\xe9 city\n  //cette syntaxe est utile pour cr\xe9er des propri\xe9t\xe9s \xe0 l\'aide de variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+Chaine($i)]:=""\nEnd for\n  // cr\xe9e 4 propri\xe9t\xe9s vides "address1...address4" dans l\'objet $Emp\n')))}c.isMDXComponent=!0}}]);