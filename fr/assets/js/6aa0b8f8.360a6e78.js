"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78151"],{381452:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets \\"natifs\\" 4D est bas\xe9e sur le principe classique des paires \\"propri\xe9t\xe9/valeur\\" (aussi appel\xe9es \\"attribut/valeur). La syntaxe de ces objets s\u2019inspire du JSON :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/fr/19/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"Num\xe9rique (R\xe9el, Entier, Entier long)","permalink":"/docs/fr/19/Concepts/number"},"next":{"title":"Picture","permalink":"/docs/fr/19/Concepts/picture"}}'),r=s("785893"),t=s("250065");let l={id:"object",title:"Object"},o=void 0,a={},d=[{value:"Initialisation",id:"initialisation",level:2},{value:"Objet standard ou partag\xe9",id:"objet-standard-ou-partag\xe9",level:3},{value:"Principes de syntaxe",id:"principes-de-syntaxe",level:2},{value:"Propri\xe9t\xe9s des objets",id:"propri\xe9t\xe9s-des-objets",level:3},{value:"Pointeurs",id:"pointeurs",level:3},{value:"Valeur Null",id:"valeur-null",level:3},{value:"Valeur Undefined",id:"valeur-undefined",level:3},{value:"Exemples",id:"exemples",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets "natifs" 4D est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur" (aussi appel\xe9es "attribut/valeur). La syntaxe de ces objets s\u2019inspire du JSON :'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['Un nom de propri\xe9t\xe9 est toujours un texte, par exemple "Nom". Il doit suivre des ',(0,r.jsx)(n.a,{href:"/docs/fr/19/Concepts/identifiers#object-properties",children:"r\xe8gles sp\xe9cifiques"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Une valeur de propri\xe9t\xe9 peut \xeatre du type suivant :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Num\xe9rique (r\xe9el, entier long, etc.)"}),"\n",(0,r.jsx)(n.li,{children:"text"}),"\n",(0,r.jsx)(n.li,{children:"Null"}),"\n",(0,r.jsx)(n.li,{children:"boolean"}),"\n",(0,r.jsxs)(n.li,{children:["Pointeur (stock\xe9 tel quel, \xe9valu\xe9 \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.code,{children:"JSON Stringify"})," ou lors d\u2019une copie),"]}),"\n",(0,r.jsx)(n.li,{children:"Date (type date ou cha\xeene au format date ISO)"}),"\n",(0,r.jsx)(n.li,{children:"Objet(1) (les objets peuvent \xeatre imbriqu\xe9s sur plusieurs niveaux)"}),"\n",(0,r.jsx)(n.li,{children:"Image(2)"}),"\n",(0,r.jsx)(n.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Les ",(0,r.jsx)(n.strong,{children:"objets non rationalisables"})," tels que les objets ORDA (",(0,r.jsx)(n.a,{href:"/docs/fr/19/ORDA/dsmapping#entity",children:"Entities"}),", ",(0,r.jsx)(n.a,{href:"/docs/fr/19/ORDA/dsmapping#entity-selection",children:"Entity selections"}),", etc. , ",(0,r.jsx)(n.a,{href:"/docs/fr/19/API/WebServerClass",children:"web server"}),"... ne peuvent pas \xeatre stock\xe9s dans des ",(0,r.jsx)(n.strong,{children:"champs objet"}),". Une erreur est retourn\xe9e si vous essayez de le faire ; toutefois, ils sont enti\xe8rement pris en charge dans les ",(0,r.jsx)(n.strong,{children:"variables objets"})," en m\xe9moire."]}),"\n",(0,r.jsx)(n.p,{children:"(2) Lorsqu'elles sont expos\xe9es sous forme de texte dans le d\xe9bogueur ou export\xe9es en JSON, les propri\xe9t\xe9s d'objet de type image indiquent \"[object Picture]\"."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," N'oubliez pas que les noms d'attributs tiennent compte des majuscules/minuscules."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous g\xe9rez les variables, les champs ou les expressions de type Objet \xe0 l'aide de la ",(0,r.jsx)(n.a,{href:"/docs/fr/19/Concepts/object#syntax-basics",children:"notation objet"})," ou des commandes classiques du th\xe8me ",(0,r.jsx)(n.strong,{children:"Objets (langage)"}),". A noter que des commandes sp\xe9cifiques du th\xe8me ",(0,r.jsx)(n.strong,{children:"Recherches"}),", telles que ",(0,r.jsx)(n.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,r.jsx)(n.code,{children:"QUERY SELECTION BY ATTRIBUTE"})," ou ",(0,r.jsx)(n.code,{children:"ORDER BY ATTRIBUTE"})," peuvent \xeatre utilis\xe9es pour traiter des champs objets."]}),"\n",(0,r.jsx)(n.p,{children:"Chaque valeur de propri\xe9t\xe9 accessible par la notation objet est consid\xe9r\xe9e comme une expression. Vous pouvez utiliser ces valeurs partout o\xf9 des expressions 4D sont attendues :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Dans le code 4D, soit \xe9crites dans les m\xe9thodes (\xe9diteur de m\xe9thodes) soit externalis\xe9es (formules, fichiers d'\xe9tiquettes trait\xe9s par la commande ",(0,r.jsx)(n.code,{children:"PROCESS 4D TAGS"})," ou le Serveur Web, fichiers d'export, documents 4D Write Pro, etc.),"]}),"\n",(0,r.jsx)(n.li,{children:"Dans les zones d'expressions du d\xe9bogueur et l'explorateur d'ex\xe9cution,"}),"\n",(0,r.jsx)(n.li,{children:"Dans la liste de propri\xe9t\xe9s de l'\xe9diteur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de donn\xe9es, couleur de fond, style ou couleur de police)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"initialisation",children:"Initialisation"}),"\n",(0,r.jsxs)(n.p,{children:["Les objets doivent \xeatre initialis\xe9s \xe0 l'aide, par exemple, de la commande ",(0,r.jsx)(n.code,{children:"New object"}),", sinon une erreur de syntaxe sera g\xe9n\xe9r\xe9e \xe0 la suite d'une lecture ou d'une modification de leurs propri\xe9t\xe9s."]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" C_OBJECT($obVar) ////cr\xe9ation d'une variable 4D de type objet\n $obVar:=New object //initialisation de l'objet et assignation \xe0 la variable 4D\n"})}),"\n",(0,r.jsx)(n.h3,{id:"objet-standard-ou-partag\xe9",children:"Objet standard ou partag\xe9"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez cr\xe9er deux types d'objets :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["standard (non partag\xe9s), \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"New object"}),". Ces objets peuvent \xeatre modifi\xe9s sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9s entre les process."]}),"\n",(0,r.jsxs)(n.li,{children:["partag\xe9s, \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"New shared object"}),". Le contenu de ces objets peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces objets doit \xeatre contr\xf4l\xe9 via des structures ",(0,r.jsx)(n.code,{children:"Use...End use"}),". Pour plus d'informations, veuillez vous reporter \xe0 la page ",(0,r.jsx)(n.a,{href:"/docs/fr/19/Concepts/shared",children:"Objets partag\xe9s et collections partag\xe9es"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"principes-de-syntaxe",children:"Principes de syntaxe"}),"\n",(0,r.jsx)(n.p,{children:"La notation objet est utilis\xe9e pour acc\xe9der aux valeurs de propri\xe9t\xe9s d'objets via des s\xe9quences de symboles et de propri\xe9t\xe9s r\xe9f\xe9renc\xe9es (tokens)."}),"\n",(0,r.jsx)(n.h3,{id:"propri\xe9t\xe9s-des-objets",children:"Propri\xe9t\xe9s des objets"}),"\n",(0,r.jsx)(n.p,{children:"Avec la notation objet, il est possible d'acc\xe9der aux propri\xe9t\xe9s d'objets (aussi appel\xe9es attributs d'objets) de deux fa\xe7ons :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'\xe0 l\'aide du symbole "point" : > objet.NomPropri\xe9t\xe9'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xe0 l'aide d'une cha\xeene entre crochets : > objet[\"NomPropri\xe9t\xe9\"]"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Exemples :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //ou :\n     $property:="name"\n     $vName:=employee[$property]\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Comme la valeur d'une propri\xe9t\xe9 d'objet peut elle-m\xeame \xeatre un objet ou une collection, la notation objet requiert une s\xe9quence de symboles pour acc\xe9der aux sous-propri\xe9t\xe9s, par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,r.jsx)(n.p,{children:"La notation objet est utilisable avec tout \xe9l\xe9ment de langage qui contient ou retourne un objet, c'est-\xe0-dire :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["avec les ",(0,r.jsx)(n.strong,{children:"objets"})," eux-m\xeames (stock\xe9s dans des variables, champs, propri\xe9t\xe9s d'objets, tableaux d'objets ou \xe9l\xe9ments de collections). Exemples :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //variable\n $addr:=[Emp]data_obj.address //champ\n $city:=$addr.city //propri\xe9t\xe9 d'un objet\n $pop:=$aObjCountries{2}.population //tableau d'objets\n $val:=$myCollection[3].subvalue //\xe9l\xe9ment de collection\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["avec les ",(0,r.jsx)(n.strong,{children:"commandes 4D"})," qui retournent des objets. Voici un exemple :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     $measures:=Lire mesures base.DB.tables\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["avec les ",(0,r.jsx)(n.strong,{children:"m\xe9thodes projet"})," qui retournent des objets. Voici un exemple :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["avec les ",(0,r.jsx)(n.strong,{children:"collections"})," Exemple :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     myColl.length //taille de la collection\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pointeurs",children:"Pointeurs"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les objets \xe9tant toujours pass\xe9s par r\xe9f\xe9rence, l'utilisation de pointeurs n'est g\xe9n\xe9ralement pas n\xe9cessaire. En passant un objet, 4D utilise automatiquement, en interne, un m\xe9canisme similaire \xe0 un pointeur pour minimiser la m\xe9moire n\xe9cessaire, pour vous permettre de modifier le param\xe8tre et de retourner les modifications. Par cons\xe9quent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'acc\xe9der aux valeurs de propri\xe9t\xe9s via des pointeurs."]}),"\n",(0,r.jsx)(n.p,{children:'La notation objet pour les pointeurs est semblable \xe0 la notation objet standard, \xe0 la seule diff\xe9rence que le symbole "point" doit \xeatre omis.'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Acc\xe8s direct :"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"pointeurObjet->nomPropri\xe9t\xe9"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Acc\xe8s par le nom :"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'pointeurObjet->[nomPropri\xe9t\xe9"]'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,r.jsx)(n.h3,{id:"valeur-null",children:"Valeur Null"}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque la notation objet est utilis\xe9e, la valeur ",(0,r.jsx)(n.strong,{children:"null"})," est prise en charge via la commande ",(0,r.jsx)(n.strong,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e pour affecter ou comparer la valeur null aux propri\xe9t\xe9s d'objets ou aux \xe9l\xe9ments de collections, par exemple :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous reporter \xe0 la description de la commande ",(0,r.jsx)(n.code,{children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"valeur-undefined",children:"Valeur Undefined"}),"\n",(0,r.jsx)(n.p,{children:"L'\xe9valuation d'une propri\xe9t\xe9 d'objet peut parfois produire une valeur ind\xe9finie (undefined). En r\xe8gle g\xe9n\xe9rale, lorsque le code tente de lire ou d'affecter des expressions ind\xe9finies, 4D g\xe9n\xe8re des erreurs, hormis dans les cas d\xe9crits ci-dessous :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La lecture d'une propri\xe9t\xe9 d'un objet ou d'une valeur ind\xe9fini(e) retourne Ind\xe9fini ; l'affectation d'une valeur ind\xe9finie \xe0 des variables (hors tableaux) a le m\xeame effet qu'appeler ",(0,r.jsx)(n.code,{children:"CLEAR VARIABLE"})," avec elles :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     C_OBJET($o)\n C_ENTIER Long($val)\n $val:=10 //$val=10\n $val:=$o.a //$o.a est ind\xe9fini (pas d'erreur), et affecter cette valeur efface la variable\n  //$val=0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La lecture de la propri\xe9t\xe9 ",(0,r.jsx)(n.strong,{children:"length"})," d'une collection ind\xe9finie renvoie 0 :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     C_COLLECTION($c) //variable cr\xe9\xe9e mais pas de collection d\xe9finie\n $size:=$c.length //$size = 0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Une valeur ind\xe9finie pass\xe9e en param\xe8tre \xe0 une m\xe9thode projet est automatiquement convertie en 0 ou en "" en fonction de la d\xe9claration du type du param\xe8tre.'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n mymethod($o.a) //passage d\'un param\xe8tre ind\xe9fini\n\n  //Dans la m\xe9thode mymethod\n C_TEXT($1) //Param\xe8tre de type texte\n  // $1 contient ""\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une expression de condition est automatiquement convertie \xe0 Faux lorsqu'elle est \xe9valu\xe9e undefined avec les mots-cl\xe9s If et Case of :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     C_OBJECT($o)\n     If($o.a) // faux\n     End if\n     Case of\n        :($o.a) // faux\n     End case\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur, selon son type :"}),"\n",(0,r.jsx)(n.li,{children:"Objet, collection, pointeur : Null"}),"\n",(0,r.jsx)(n.li,{children:"Image : image vide"}),"\n",(0,r.jsx)(n.li,{children:"Bool\xe9en : False"}),"\n",(0,r.jsx)(n.li,{children:'Cha\xeene : ""'}),"\n",(0,r.jsx)(n.li,{children:"Num\xe9rique : 0"}),"\n",(0,r.jsx)(n.li,{children:'Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""'}),"\n",(0,r.jsx)(n.li,{children:"Heure : 0 (nombre de ms)"}),"\n",(0,r.jsx)(n.li,{children:"Ind\xe9fini, Null : pas de changement"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n $o:=New object("a";2)\n $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque des expressions d'un type donn\xe9 sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhait\xe9 m\xeame en cas de valeur Ind\xe9finie en les encadrant avec la commande de transtypage 4D appropri\xe9e : ",(0,r.jsx)(n.code,{children:"String"}),", ",(0,r.jsx)(n.code,{children:"Num"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", ",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Bool"}),". Ces commandes retournent une valeur vide du type sp\xe9cifi\xe9 lorsque l'expression est \xe9valu\xe9e \xe0 Ind\xe9finie. Par exemple :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //pour \xeatre s\xfbr d'obtenir une valeur texte m\xeame si ind\xe9finie\n  //afin d'\xe9viter des erreurs dans le code\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsx)(n.p,{children:'L\'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste enti\xe8rement prise en charge.'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ecriture et lecture de propri\xe9t\xe9s d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  // Utilisation de la notation objet\n C_OBJECT($myObj) //d\xe9claration d\'une variable objet 4D\n $myObj:=New object //cr\xe9ation d\'un objet et affectation \xe0 la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Utilisation de la syntaxe par commande\n C_OBJECT($myObj2) //d\xe9claration d\'une variable objet 4D\n OB SET($myObj2;"age";42) //cr\xe9ation d\'un objet et cr\xe9ation de la propri\xe9t\xe9 age\n $age:=OB Get($myObj2;"age") //42\n\n  // Bien entendu, les deux notations peuvent \xeatre utilis\xe9es simultan\xe9ment\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cr\xe9ation de propri\xe9t\xe9s et affectation de valeurs, y compris d'autres objets :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //cr\xe9e la propri\xe9t\xe9 city avec la valeur "London"\n $Emp.city:="Paris" //modifie la propri\xe9t\xe9 city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //cr\xe9e la propri\xe9t\xe9 phone avec un autre objet comme valeur\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lire une valeur dans un sous-objet est tr\xe8s simple avec la notation objet :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Vous pouvez acc\xe9der aux propri\xe9t\xe9s d'objets via des cha\xeenes gr\xe2ce \xe0 l'op\xe9rateur [ ]"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modification de la propri\xe9t\xe9 city\n  //cette syntaxe est utile pour cr\xe9er des propri\xe9t\xe9s \xe0 l\'aide de variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+Chaine($i)]:=""\nEnd for\n  // cr\xe9e 4 propri\xe9t\xe9s vides "address1...address4" dans l\'objet $Emp\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);