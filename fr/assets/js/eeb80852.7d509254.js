"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"object",title:"Object"},s=void 0,i={unversionedId:"Concepts/object",id:"version-20-R3/Concepts/object",title:"Object",description:'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets 4D natifs est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur". La syntaxe de ces objets s\u2019inspire du JSON :',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/fr/Concepts/object",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"Num\xe9rique (R\xe9el, Entier, Entier long)",permalink:"/docs/fr/Concepts/number"},next:{title:"Picture",permalink:"/docs/fr/Concepts/picture"}},p={},u=[{value:"Instanciation",id:"instanciation",level:2},{value:"Commande <code>New object</code>",id:"commande-new-object",level:3},{value:"Op\xe9rateur <code>{}</code>",id:"op\xe9rateur-",level:3},{value:"Objet standard ou partag\xe9",id:"objet-standard-ou-partag\xe9",level:3},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Valeur Null",id:"valeur-null",level:3},{value:"Valeur Ind\xe9finie",id:"valeur-ind\xe9finie",level:3},{value:"Pointeurs",id:"pointeurs",level:3},{value:"Resources",id:"resources",level:2},{value:"Exemples",id:"exemples",level:2}],c={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets 4D natifs est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur". La syntaxe de ces objets s\u2019inspire du JSON :'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Un nom de propri\xe9t\xe9 est toujours un texte, par exemple "Nom". Il doit suivre des ',(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/identifiers#object-properties"}),"r\xe8gles sp\xe9cifiques"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Une valeur de propri\xe9t\xe9 peut \xeatre du type suivant :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Num\xe9rique (r\xe9el, entier long, etc.)"),(0,a.kt)("li",{parentName:"ul"},"text"),(0,a.kt)("li",{parentName:"ul"},"Null"),(0,a.kt)("li",{parentName:"ul"},"boolean"),(0,a.kt)("li",{parentName:"ul"},"Pointeur (stock\xe9 tel quel, \xe9valu\xe9 \xe0 l\u2019aide de la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON Stringify")," ou lors d\u2019une copie),"),(0,a.kt)("li",{parentName:"ul"},"Date (type date ou cha\xeene au format date ISO)"),(0,a.kt)("li",{parentName:"ul"},"Objet(1) (les objets peuvent \xeatre imbriqu\xe9s sur plusieurs niveaux)"),(0,a.kt)("li",{parentName:"ul"},"Image(2)"),(0,a.kt)("li",{parentName:"ul"},"collection")))),(0,a.kt)("p",null,"(1) Les objets ORDA tels que les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/ORDA/dsmapping#entity"}),"entit\xe9s")," ou les ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/ORDA/dsmapping#entity-selection"}),"s\xe9lections d'entit\xe9s")," ne peuvent pas \xeatre stock\xe9s dans les ",(0,a.kt)("strong",{parentName:"p"},"champs objet"),"; ils sont n\xe9anmoins enti\xe8rement pris en charge dans les ",(0,a.kt)("strong",{parentName:"p"},"variables objet")," en m\xe9moire."),(0,a.kt)("p",null,"(2)Lorsqu'elles sont expos\xe9es sous forme de texte dans le d\xe9bogueur ou export\xe9es en JSON, les propri\xe9t\xe9s d'objet de type image indiquent \"","[objet Image]",'".'),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"N'oubliez pas que les noms de propri\xe9t\xe9s font la diff\xe9rence entre les majuscules et les minuscules.")),(0,a.kt)("p",null,"Vous g\xe9rez les variables, les champs ou les expressions de type Objet en utilisant la ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/object#syntax-basics"}),"notation objet")," ou les commandes disponibles dans le th\xe8me ",(0,a.kt)("strong",{parentName:"p"},"Objets (langage)"),". A noter que des commandes sp\xe9cifiques du th\xe8me ",(0,a.kt)("strong",{parentName:"p"},"Recherches"),", telles que ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY BY ATTRIBUTE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"QUERY SELECTION BY ATTRIBUTE")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY ATTRIBUTE")," peuvent \xeatre utilis\xe9es pour traiter des champs objets."),(0,a.kt)("p",null,"Chaque valeur de propri\xe9t\xe9 accessible par la notation objet est consid\xe9r\xe9e comme une expression. Vous pouvez utiliser ces valeurs partout o\xf9 des expressions 4D sont attendues :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dans le code 4D, soit \xe9crites dans les m\xe9thodes (\xe9diteur de code) soit externalis\xe9es (formules, fichiers balis\xe9s trait\xe9s par la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," ou le serveur Web, fichiers d'export, documents 4D Write Pro, etc.),"),(0,a.kt)("li",{parentName:"ul"},"Dans les zones d'expressions du d\xe9bogueur et l'explorateur d'ex\xe9cution,"),(0,a.kt)("li",{parentName:"ul"},"Dans la liste de propri\xe9t\xe9s de l'\xe9diteur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de donn\xe9es, couleur de fond, style ou couleur de police).")),(0,a.kt)("h2",r({},{id:"instanciation"}),"Instanciation"),(0,a.kt)("p",null,"Les objets doivent avoir \xe9t\xe9 instanci\xe9s, sinon toute tentative de lecture ou de modification de leurs propri\xe9t\xe9s g\xe9n\xe8re une erreur de syntaxe."),(0,a.kt)("p",null,"L'instanciation d'un objet peut se faire de l'une des mani\xe8res suivantes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xe0 l'aide de la commande ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New object")),","),(0,a.kt)("li",{parentName:"ul"},"en utilisant l'op\xe9rateur ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," .")),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Plusieurs commandes et fonctions 4D renvoient des objets, par exemple ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"Get database measures"))," ou ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/API/FileClass#file"}),(0,a.kt)("inlineCode",{parentName:"a"},"File")),". Dans ce cas, il n'est pas n\xe9cessaire d'instancier explicitement l'objet, le langage 4D le fait pour vous.")),(0,a.kt)("h3",r({},{id:"commande-new-object"}),"Commande ",(0,a.kt)("inlineCode",{parentName:"h3"},"New object")),(0,a.kt)("p",null,"La commande ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New object"))," cr\xe9e un nouvel objet vide ou pr\xe9-rempli et renvoie sa r\xe9f\xe9rence."),(0,a.kt)("p",null,"Exemples :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $obVar : Object //d\xe9claration d\'une variable 4D de type objet\n $obVar:=New object //instantiation d\'un objet et assignation \xe0 la vairable 4D\n\n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instantiation et assignation d\'un objet pr\xe9-rempli\n')),(0,a.kt)("h3",r({},{id:"op\xe9rateur-"}),"Op\xe9rateur ",(0,a.kt)("inlineCode",{parentName:"h3"},"{}")),(0,a.kt)("p",null,"L'op\xe9rateur ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," permet de cr\xe9er un ",(0,a.kt)("strong",{parentName:"p"},"objet litt\xe9ral"),". Un objet litt\xe9ral est une liste de z\xe9ro ou plusieurs paires de noms de propri\xe9t\xe9s et de valeurs associ\xe9es d'un objet, entre accolades et s\xe9par\xe9es par des points-virgules (",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"). La syntaxe d'objet litt\xe9rale permet de cr\xe9er des objets vides ou remplis."),(0,a.kt)("p",null,"Toute valeur de propri\xe9t\xe9 \xe9tant consid\xe9r\xe9e comme une expression, vous pouvez cr\xe9er des sous-objets en utilisant ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," dans les valeurs de propri\xe9t\xe9.  Vous pouvez \xe9galement cr\xe9er et r\xe9f\xe9rencer des ",(0,a.kt)("strong",{parentName:"p"},"collections litt\xe9rales"),"."),(0,a.kt)("p",null,"Exemples :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $o ; $o2 ; $o3 : Object //d\xe9claration des variables objet\n $o := {} // instanciation d\'un objet vide \n $o2 := {a : "foo" ; b : 42 ; c : {} ; d : ($toto) ? true : false } // instantiation d\'un objet\n        // avec les propri\xe9t\xe9s {"a":"foo","b":42,"c":{},"d":false})\n\n    // les m\xeames propri\xe9t\xe9s en utilisant des variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n')),(0,a.kt)("p",null,"Vous pouvez m\xe9langer les syntaxes ",(0,a.kt)("inlineCode",{parentName:"p"},"New object")," et litt\xe9rale :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$o:={\\\n    ob1: {age: 42}; \\\n    ob2: New object("message"; "Hello"); \\\n    form1: Formula(return This.ob1.age+10); \\\n    form2 : Formula(ALERT($1)); \\\n    col: [1; 2; 3; 4; 5; 6]\\\n    }\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // Hello\n$col:=$o.col[5] //6\n')),(0,a.kt)("h3",r({},{id:"objet-standard-ou-partag\xe9"}),"Objet standard ou partag\xe9"),(0,a.kt)("p",null,"Vous pouvez cr\xe9er deux types d'objets :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"des objets standard (non partag\xe9s), \xe0 l'aide de la commande ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New object"))," ou de la syntaxe litt\xe9rale des objets (",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"). Ces objets peuvent \xeatre modifi\xe9s sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9s entre les process."),(0,a.kt)("li",{parentName:"ul"},"des objets partag\xe9s, en utilisant la commande ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"New shared object")),". Le contenu de ces objets peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces objets doit \xeatre contr\xf4l\xe9 via des structures ",(0,a.kt)("inlineCode",{parentName:"li"},"Use...End use"),". Pour plus d'informations, consultez la section ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/fr/Concepts/shared"}),"Objets et collections partag\xe9s"),".")),(0,a.kt)("h2",r({},{id:"propri\xe9t\xe9s"}),"Propri\xe9t\xe9s"),(0,a.kt)("p",null,"Object notation can be used to access object property values through a chain of tokens. Avec la notation objet, il est possible d'acc\xe9der aux propri\xe9t\xe9s d'objets (aussi appel\xe9es attributs d'objets) de deux fa\xe7ons :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'using a "dot" symbol: > object.propertyName')),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     employee.name:="Smith"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using a string within square brackets: > object",'["propertyName"]')),(0,a.kt)("p",null,"Exemples :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     $vName:=employee["name"]\n     //ou :\n     $property:="name"\n     $vName:=employee[$property]\n\n')),(0,a.kt)("p",null,"Comme la valeur d'une propri\xe9t\xe9 d'objet peut elle-m\xeame \xeatre un objet ou une collection, la notation objet requiert une s\xe9quence de symboles pour acc\xe9der aux sous-propri\xe9t\xe9s, par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $vAge:=employee.children[2].age\n")),(0,a.kt)("p",null,"La notation objet est utilisable avec tout \xe9l\xe9ment de langage qui contient ou retourne un objet, c'est-\xe0-dire :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"objets")," eux-m\xeames (stock\xe9s dans des variables, champs, propri\xe9t\xe9s d'objets, tableaux d'objets ou \xe9l\xe9ments de collections). Exemples :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     $age:=$myObjVar.employee.age //variable\n $addr:=[Emp]data_obj.address //champ\n $city:=$addr.city //propri\xe9t\xe9 d'un objet\n $pop:=$aObjCountries{2}.population //tableau d'objets\n $val:=$myCollection[3].subvalue //\xe9l\xe9ment de collection\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"commandes 4D")," qui retournent des objets. Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     $measures:=Lire mesures base.DB.tables\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"m\xe9thodes projet")," qui retournent des objets. Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10 ; "b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avec les ",(0,a.kt)("strong",{parentName:"li"},"collections")," Exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     myColl.length //taille de la collection\n")),(0,a.kt)("h3",r({},{id:"valeur-null"}),"Valeur Null"),(0,a.kt)("p",null,"Lorsque la notation objet est utilis\xe9e, la valeur ",(0,a.kt)("strong",{parentName:"p"},"null")," est prise en charge via la commande ",(0,a.kt)("strong",{parentName:"p"},"Null"),". Cette commande peut \xeatre utilis\xe9e pour affecter ou comparer la valeur null aux propri\xe9t\xe9s d'objets ou aux \xe9l\xe9ments de collections, par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," myObject.address.zip:=Null\n If(myColl[2]=Null)\n")),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/null-undefined"}),"Null and Undefined"),"."),(0,a.kt)("h3",r({},{id:"valeur-ind\xe9finie"}),"Valeur Ind\xe9finie"),(0,a.kt)("p",null,"L'\xe9valuation d'une propri\xe9t\xe9 d'objet peut parfois produire une valeur ind\xe9finie (undefined). En r\xe8gle g\xe9n\xe9rale, lorsque le code tente de lire ou d'affecter des expressions ind\xe9finies, 4D g\xe9n\xe8re des erreurs, hormis dans les cas d\xe9crits ci-dessous :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling ",(0,a.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page89.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," with them:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable\n      //$val=0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La lecture de la propri\xe9t\xe9 ",(0,a.kt)("strong",{parentName:"li"},"length")," d'une collection ind\xe9finie renvoie 0 :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     var $c : Collection //variable created but no collection is defined\n     $size:=$c.length //$size = 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.')),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     mymethod($o.a) //pass an undefined parameter\n\n      //In mymethod method\n     #Declare ($myText : Text) //parameter type is text\n      // $myText contains ""\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une expression de condition est automatiquement convertie \xe0 Faux lorsque son \xe9valuation donne Ind\xe9finie avec les mots-cl\xe9s Si et Au cas ou :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,a.kt)("p",null,"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objet, collection, pointeur : Null"),(0,a.kt)("li",{parentName:"ul"},"Image : image vide"),(0,a.kt)("li",{parentName:"ul"},"Bool\xe9en : False"),(0,a.kt)("li",{parentName:"ul"},'Cha\xeene : ""'),(0,a.kt)("li",{parentName:"ul"},"Num\xe9rique : 0"),(0,a.kt)("li",{parentName:"ul"},'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'),(0,a.kt)("li",{parentName:"ul"},"Heure : 0 (nombre de ms)"),(0,a.kt)("li",{parentName:"ul"},"Ind\xe9fini, Null : pas de changement")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien.")),(0,a.kt)("p",null,"Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Ind\xe9finie en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Bool"),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n")),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Concepts/null-undefined"}),"Null and Undefined")),(0,a.kt)("h3",r({},{id:"pointeurs"}),"Pointeurs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note :")," Les objets \xe9tant toujours pass\xe9s par r\xe9f\xe9rence, l'utilisation de pointeurs n'est g\xe9n\xe9ralement pas n\xe9cessaire. En passant un objet, 4D utilise automatiquement, en interne, un m\xe9canisme similaire \xe0 un pointeur pour minimiser la m\xe9moire n\xe9cessaire, pour vous permettre de modifier le param\xe8tre et de retourner les modifications. Par cons\xe9quent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'acc\xe9der aux valeurs de propri\xe9t\xe9s via des pointeurs."),(0,a.kt)("p",null,'La notation objet pour les pointeurs est semblable \xe0 la notation objet standard, \xe0 la seule diff\xe9rence que le symbole "point" doit \xeatre omis.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Acc\xe8s direct :"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointeurObjet->nomPropri\xe9t\xe9"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Acc\xe8s par le nom :"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pointeurObjet->",'[nomPropri\xe9t\xe9"]')))),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"})," var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n")),(0,a.kt)("h2",r({},{id:"resources"}),"Resources"),(0,a.kt)("p",null,"Objects use ",(0,a.kt)("em",{parentName:"p"},"resources")," such a documents, entity locks, and of course, memory. These resources are retained as long as objects need them. Usually, you do not have to worry about them, 4D automatically releases all resources attached to an object when it detects that the object itself is no longer referenced by any variable or other object."),(0,a.kt)("p",null,"For instance, when there is no more references to an entity on which you have set a lock with ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/API/EntityClass#lock"}),(0,a.kt)("inlineCode",{parentName:"a"},"$entity.lock()")),", 4D will free the memory but also automatically release the associated lock, a call to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/API/EntityClass#unlock"}),(0,a.kt)("inlineCode",{parentName:"a"},"$entity.unlock()"))," is useless."),(0,a.kt)("p",null,"If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to ",(0,a.kt)("strong",{parentName:"p"},"nullify all its references"),". Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\n$doc:=WP Import document("large_novel.4wp")\n    ... // do something with $doc\n$doc:=Null  // free resources occupied by $doc\n    ... // continue execution with more free memory\n\n')),(0,a.kt)("h2",r({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,'L\'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste enti\xe8rement prise en charge.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ecriture et lecture de propri\xe9t\xe9s d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Using the object notation\n var $myObj : Object //declares a 4D variable object\n $myObj:={} //creates an object literal and assigns it to the variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Using the command notation\n var $myObj2 : Object //declares a 4D variable object\n OB SET($myObj2;"age";42) //creates an object and adds the age property\n $age:=OB Get($myObj2;"age") //42\n\n  // Of course, both notations can be mixed\n var $myObj3 : Object\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cr\xe9ation de propri\xe9t\xe9s et affectation de valeurs, y compris d'autres objets :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //creates the city property and sets its value to "London"\n $Emp.city:="Paris" //modifies the city property\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //creates the phone property and sets its value to an object\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lire une valeur dans un sous-objet est tr\xe8s simple avec la notation objet :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can access properties as strings using the ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")," operator")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $Emp["city"]:="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // creates 4 empty properties "address1...address4" in the $Emp object\n')))}d.isMDXComponent=!0}}]);