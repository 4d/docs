"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33084"],{912284:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets 4D natifs est bas\xe9e sur le principe classique des paires \\"propri\xe9t\xe9/valeur\\". La syntaxe de ces objets s\u2019inspire du JSON :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/fr/20-R6/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"Num\xe9rique (R\xe9el, Entier, Entier long)","permalink":"/docs/fr/20-R6/Concepts/number"},"next":{"title":"Picture","permalink":"/docs/fr/20-R6/Concepts/picture"}}'),t=s("785893"),i=s("250065");let o={id:"object",title:"Object"},l=void 0,a={},d=[{value:"Instanciation",id:"instanciation",level:2},{value:"Commande <code>New object</code>",id:"commande-new-object",level:3},{value:"Op\xe9rateur <code>{}</code>",id:"op\xe9rateur-",level:3},{value:"Objet standard ou partag\xe9",id:"objet-standard-ou-partag\xe9",level:3},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Valeur Null",id:"valeur-null",level:3},{value:"Valeur Undefined",id:"valeur-undefined",level:3},{value:"Pointeurs",id:"pointeurs",level:3},{value:"Op\xe9rateurs sur les objets",id:"op\xe9rateurs-sur-les-objets",level:2},{value:"Resources",id:"resources",level:2},{value:"Exemples",id:"exemples",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Les variables, champs ou expressions de type objet peuvent contenir des donn\xe9es de divers types. La structure des objets 4D natifs est bas\xe9e sur le principe classique des paires "propri\xe9t\xe9/valeur". La syntaxe de ces objets s\u2019inspire du JSON :'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Un nom de propri\xe9t\xe9 est toujours un texte, par exemple "Nom". Il doit suivre ',(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/identifiers#proprietes-des-objets",children:"des r\xe8gles sp\xe9cifiques"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Une valeur de propri\xe9t\xe9 peut \xeatre du type suivant :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Num\xe9rique (r\xe9el, entier long, etc.)"}),"\n",(0,t.jsx)(n.li,{children:"text"}),"\n",(0,t.jsx)(n.li,{children:"Null"}),"\n",(0,t.jsx)(n.li,{children:"boolean"}),"\n",(0,t.jsxs)(n.li,{children:["pointeur (stock\xe9 en tant que tel, \xe9valu\xe9 en utilisant la commande ",(0,t.jsx)(n.code,{children:"JSON Stringify"})," ou lors de la copie),"]}),"\n",(0,t.jsx)(n.li,{children:"Date (type date ou cha\xeene au format date ISO)"}),"\n",(0,t.jsx)(n.li,{children:"Objet(1) (les objets peuvent \xeatre imbriqu\xe9s sur plusieurs niveaux)"}),"\n",(0,t.jsx)(n.li,{children:"Image(2)"}),"\n",(0,t.jsx)(n.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["(1) Les ",(0,t.jsx)(n.strong,{children:"objets non streamables"})," tels que les objets ORDA (",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ORDA/dsmapping#entity",children:"entit\xe9s"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/API/FileHandleClass",children:"file handles"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/API/WebServerClass",children:"serveur web"}),"... ne peuvent pas \xeatre stock\xe9s dans des ",(0,t.jsx)(n.strong,{children:"champs objets"}),". Une erreur est retourn\xe9e si vous essayez de le faire ; toutefois, ils sont enti\xe8rement pris en charge dans les ",(0,t.jsx)(n.strong,{children:"variables objets"})," en m\xe9moire."]}),"\n",(0,t.jsx)(n.p,{children:"(2) Lorsqu'elles sont expos\xe9es sous forme de texte dans le d\xe9bogueur ou export\xe9es en JSON, les propri\xe9t\xe9s d'objet de type image indiquent \"[object Picture]\"."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"N'oubliez pas que les noms de propri\xe9t\xe9s font la diff\xe9rence entre les majuscules et les minuscules."})}),"\n",(0,t.jsxs)(n.p,{children:["Vous g\xe9rez les variables, champs ou expressions de type Objet en utilisant la ",(0,t.jsx)(n.a,{href:"#proprietes",children:"notation Objet"})," ou les commandes disponibles dans le th\xe8me ",(0,t.jsx)(n.strong,{children:"Objets (Langage)"}),". A noter que des commandes sp\xe9cifiques du th\xe8me ",(0,t.jsx)(n.strong,{children:"Recherches et tris"})," telles que ",(0,t.jsx)(n.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,t.jsx)(n.code,{children:"QUERY SELECTION BY ATTRIBUTE"})," ou ",(0,t.jsx)(n.code,{children:"ORDER BY ATTRIBUTE"})," peuvent \xeatre utilis\xe9es pour traiter des champs objets."]}),"\n",(0,t.jsx)(n.p,{children:"Chaque valeur de propri\xe9t\xe9 accessible par la notation objet est consid\xe9r\xe9e comme une expression. Vous pouvez utiliser ces valeurs partout o\xf9 des expressions 4D sont attendues :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dans le code 4D, soit \xe9crites dans les m\xe9thodes (\xe9diteur de code) soit externalis\xe9es (formules, fichiers balis\xe9s trait\xe9s par la commande ",(0,t.jsx)(n.code,{children:"PROCESS 4D TAGS"})," ou le serveur Web, fichiers d'export, documents 4D Write Pro, etc.),"]}),"\n",(0,t.jsx)(n.li,{children:"Dans les zones d'expressions du d\xe9bogueur et l'explorateur d'ex\xe9cution,"}),"\n",(0,t.jsx)(n.li,{children:"Dans la liste de propri\xe9t\xe9s de l'\xe9diteur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de donn\xe9es, couleur de fond, style ou couleur de police)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instanciation",children:"Instanciation"}),"\n",(0,t.jsx)(n.p,{children:"Les objets doivent avoir \xe9t\xe9 instanci\xe9s, sinon toute tentative de lecture ou de modification de leurs propri\xe9t\xe9s g\xe9n\xe8re une erreur de syntaxe."}),"\n",(0,t.jsx)(n.p,{children:"L'instanciation d'un objet peut se faire de l'une des mani\xe8res suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["en utilisant la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1471.html",children:(0,t.jsx)(n.code,{children:"New object"})}),","]}),"\n",(0,t.jsxs)(n.li,{children:["en utilisant l'op\xe9rateur ",(0,t.jsx)(n.code,{children:"{}"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Plusieurs commandes et fonctions 4D retournent des objets, par exemple ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html",children:(0,t.jsx)(n.code,{children:"Get database measures"})})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/API/FileClass#file",children:(0,t.jsx)(n.code,{children:"File"})}),". Dans ce cas, il n'est pas n\xe9cessaire d'instancier explicitement l'objet, le langage 4D le fait pour vous."]})}),"\n",(0,t.jsxs)(n.h3,{id:"commande-new-object",children:["Commande ",(0,t.jsx)(n.code,{children:"New object"})]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1471.html",children:(0,t.jsx)(n.code,{children:"New object"})})," cr\xe9e un nouvel objet vide ou pr\xe9rempli et renvoie sa r\xe9f\xe9rence."]}),"\n",(0,t.jsx)(n.p,{children:"Exemples :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $obVar : Object //d\xe9claration d\'une variable 4D de type objet\n $obVar:=New object //instantiation d\'un objet et assignation \xe0 la variable 4D\n\n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instanciation et assignation d\'un objet pr\xe9-rempli\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"op\xe9rateur-",children:["Op\xe9rateur ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n",(0,t.jsxs)(n.p,{children:["L'op\xe9rateur ",(0,t.jsx)(n.code,{children:"{}"})," vous permet de cr\xe9er un ",(0,t.jsx)(n.strong,{children:"objet litt\xe9ral"}),". Un objet litt\xe9ral est une liste de z\xe9ro ou plusieurs paires de noms de propri\xe9t\xe9s et de valeurs associ\xe9es d'un objet, entre accolades et s\xe9par\xe9es par des points-virgules (",(0,t.jsx)(n.code,{children:"{}"}),"). La syntaxe d'objet litt\xe9rale permet de cr\xe9er des objets vides ou remplis."]}),"\n",(0,t.jsxs)(n.p,{children:["Toute valeur de propri\xe9t\xe9 \xe9tant consid\xe9r\xe9e comme une expression, vous pouvez cr\xe9er des sous-objets en utilisant ",(0,t.jsx)(n.code,{children:"{}"})," dans les valeurs de propri\xe9t\xe9s.  Vous pouvez \xe9galement cr\xe9er et r\xe9f\xe9rencer des ",(0,t.jsx)(n.strong,{children:"collections litt\xe9rales"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Exemples :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $o ; $o2 ; $o3 : Object //d\xe9claration des variables objet\n $o := {} // instanciation d\'un objet vide \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instanciation d\'un objet\n 		// avec les propri\xe9t\xe9s {"a":"foo","b":42,"c":{}, d":false})\n\n	// m\xeames propri\xe9t\xe9s en utilisant les variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez m\xe9langer les syntaxes ",(0,t.jsx)(n.code,{children:"New object"})," et litt\xe9rale :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$o:={\\\n	ob1: {age: 42}; \\\n	ob2: New object("message"; "Hello"); \\\n	form1: Formula(return This.ob1.age+10); \\\n	form2 : Formula(ALERT($1)); \\\n	col: [1; 2; 3; 4; 5; 6]\\\n	}\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // affiche Hello\n$col:=$o.col[5] //6\n'})}),"\n",(0,t.jsx)(n.h3,{id:"objet-standard-ou-partag\xe9",children:"Objet standard ou partag\xe9"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez cr\xe9er deux types d'objets :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["des objets standard (non-partag\xe9s), en utilisant la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.fr.html",children:(0,t.jsx)(n.code,{children:"New object"})})," ou la syntaxe d'objet litt\xe9ral (",(0,t.jsx)(n.code,{children:"{}"}),"). Ces objets peuvent \xeatre modifi\xe9s sans contr\xf4le d'acc\xe8s sp\xe9cifique mais ne peuvent pas \xeatre partag\xe9s entre les process."]}),"\n",(0,t.jsxs)(n.li,{children:["des objets partag\xe9s, en utilisant la commande ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.fr.html",children:(0,t.jsx)(n.code,{children:"New shared object"})}),". Le contenu de ces objets peut \xeatre partag\xe9 entre les process, y compris des process (thread) pr\xe9emptifs. L'acc\xe8s \xe0 ces objets doit \xeatre contr\xf4l\xe9 via des structures ",(0,t.jsx)(n.code,{children:"Use...End use"}),".\nPour plus d'informations, consultez la section ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/shared",children:"Objets et collections partag\xe9s"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n",(0,t.jsx)(n.p,{children:"Vous acc\xe9dez aux valeurs des propri\xe9t\xe9s de l'objet \xe0 travers une cha\xeene de tokens. On peut acc\xe9der aux propri\xe9t\xe9s des objets de deux mani\xe8res :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['en utilisant un symbole "point" :\n',(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"object.propertyName"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'     employee.name:="Dupont"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["en utilisant une cha\xeene entre crochets :\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'object["propertyName"]'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Exemples :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //or also:\n     $property:="name"\n	 $vName:=employee[$property]\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Comme la valeur d'une propri\xe9t\xe9 d'objet peut elle-m\xeame \xeatre un objet ou une collection, vous pouvez utiliser une s\xe9quence de symboles pour acc\xe9der aux sous-propri\xe9t\xe9s, par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,t.jsx)(n.p,{children:"La notation objet est utilisable avec tout \xe9l\xe9ment de langage qui contient ou retourne un objet, c'est-\xe0-dire :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"les objets"})," eux-m\xeames (stock\xe9s dans des variables, des champs, des propri\xe9t\xe9s d'objets, des tableaux d'objets ou des \xe9l\xe9ments de collection).\nExemples :"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //variable\n $addr:=[Emp]data_obj.address //champ\n $city:=$addr.city //propri\xe9t\xe9 d'un objet\n $pop:=$aObjCountries{2}.population //tableau d'objets\n $val:=$myCollection[3].subvalue //\xe9l\xe9ment de collection\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"les commandes 4D"})," qui retournent des objets.\nVoici un exemple :"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"     $measures:=Get database measures.DB.tables\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"les m\xe9thodes projet"})," ou ",(0,t.jsx)(n.strong,{children:"les fonctions"})," qui retournent des objets.\nVoici un exemple :"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"les collections"}),"\nExemple:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"     myColl.length //taille de la collection\n"})}),"\n",(0,t.jsx)(n.h3,{id:"valeur-null",children:"Valeur Null"}),"\n",(0,t.jsxs)(n.p,{children:["Lors de l'utilisation des objets, la valeur ",(0,t.jsx)(n.strong,{children:"null"})," est prise en charge par la commande ",(0,t.jsx)(n.strong,{children:"Null"}),". Cette commande peut \xeatre utilis\xe9e pour assigner ou comparer la valeur null aux propri\xe9t\xe9s de l'objet, par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/null-undefined",children:"Null et Undefined"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"valeur-undefined",children:"Valeur Undefined"}),"\n",(0,t.jsx)(n.p,{children:"L'\xe9valuation d'une propri\xe9t\xe9 d'objet peut parfois produire une valeur ind\xe9finie (undefined). Attribuer une valeur undefined \xe0 une propri\xe9t\xe9 d'objet existante r\xe9initialise ou efface sa valeur. L'affectation d'une valeur ind\xe9finie \xe0 une propri\xe9t\xe9 d'objet inexistante ne fait rien."}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/null-undefined",children:"Null et Undefined"})]}),"\n",(0,t.jsx)(n.h3,{id:"pointeurs",children:"Pointeurs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note pr\xe9liminaire :"})," Les objets \xe9tant toujours pass\xe9s par r\xe9f\xe9rence, l'utilisation de pointeurs n'est g\xe9n\xe9ralement pas n\xe9cessaire. En passant un objet, 4D utilise automatiquement, en interne, un m\xe9canisme similaire \xe0 un pointeur pour minimiser la m\xe9moire n\xe9cessaire, pour vous permettre de modifier le param\xe8tre et de retourner les modifications. Par cons\xe9quent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'acc\xe9der aux valeurs de propri\xe9t\xe9s via des pointeurs."]}),"\n",(0,t.jsx)(n.p,{children:'La notation objet pour les pointeurs est semblable \xe0 la notation objet standard, \xe0 la seule diff\xe9rence que le symbole "point" doit \xeatre omis.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Acc\xe8s direct :"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"pointeurObjet->nomPropri\xe9t\xe9"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Acc\xe8s par le nom :"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'pointeurObjet->["nomPropri\xe9t\xe9"]'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,t.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-objets",children:"Op\xe9rateurs sur les objets"}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser des op\xe9rateurs de comparaison avec des ",(0,t.jsx)(n.strong,{children:"r\xe9f\xe9rences d'objet"}),", ce qui signifie que vous pouvez \xe9valuer si deux ou plusieurs r\xe9f\xe9rences pointent vers la m\xeame instance d'un objet."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $o1:={a: 42} //r\xe9f\xe9rence \xe0 une instance\nvar $o2:={a: 42} //r\xe9f\xe9rence \xe0 une instance diff\xe9rente\nvar $o3:=$o1 //r\xe9f\xe9rence \xe0 la m\xeame instance\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sur la base du code ci-dessus, la table de comparaison est :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Syntaxe"}),(0,t.jsx)(n.th,{children:"Retourne"}),(0,t.jsx)(n.th,{children:"Expression"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Egalit\xe9"}),(0,t.jsx)(n.td,{children:"objectRef = objectRef"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"$o1 = $o3"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"$o1 = $o2"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,t.jsx)(n.td,{children:"objectRef # objectRef"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"$o1 # $o3"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"$o1 # $o2"}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.p,{children:["Les objets utilisent des ",(0,t.jsx)(n.em,{children:"ressources"}),", telles que des documents, des verrous d'entit\xe9s et, bien s\xfbr, de la m\xe9moire. Ces ressources sont conserv\xe9es aussi longtemps que les objets en ont besoin. G\xe9n\xe9ralement, vous n'avez pas \xe0 vous en soucier, 4D lib\xe8re automatiquement toutes les ressources rattach\xe9es \xe0 un objet lorsqu'il d\xe9tecte que l'objet lui-m\xeame n'est plus r\xe9f\xe9renc\xe9 par aucune variable ou autre objet."]}),"\n",(0,t.jsxs)(n.p,{children:["Par exemple, lorsqu'il n'y a plus de r\xe9f\xe9rences \xe0 une entit\xe9 sur laquelle vous avez mis un verrou avec ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/API/EntityClass#lock",children:(0,t.jsx)(n.code,{children:"$entity.lock()"})}),", 4D lib\xe9rera la m\xe9moire mais rel\xe2chera aussi automatiquement le verrou associ\xe9, un appel \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/API/EntityClass#unlock",children:(0,t.jsx)(n.code,{children:"$entity.unlock()"})})," est inutile."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous voulez lib\xe9rer imm\xe9diatement toutes les ressources occup\xe9es par un objet sans avoir \xe0 attendre que 4D le fasse automatiquement (\xe0 la fin de l'ex\xe9cution de la m\xe9thode pour les variables locales par exemple), vous avez juste \xe0 ",(0,t.jsx)(n.strong,{children:"nullifier toutes ses r\xe9f\xe9rences"}),". Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\n$doc:=WP Import document("large_novel.4wp")\n	... // faire quelque chose avec $doc\n$doc:=Null // lib\xe9rer les ressources occup\xe9es par $doc\n	... // continuer l\'ex\xe9cution avec davantage de m\xe9moire libre\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsx)(n.p,{children:'L\'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste enti\xe8rement prise en charge.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ecriture et lecture de propri\xe9t\xe9s d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  // En utilisant la notation objet\n var $myObj : Object //d\xe9clare un objet variable 4D\n $myObj:={} //cr\xe9e un objet litt\xe9ral et l\'assigne \xe0 la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n \n  // Utilisation de la notation commande\n var $myObj2 : Object //d\xe9clare un objet variable 4D\n OB SET($myObj2;"age";42) //cr\xe9e un objet et ajoute la propri\xe9t\xe9 age\n $age:=OB Get($myObj2;"age") //42\n \n  // Bien s\xfbr, les deux notations peuvent \xeatre m\xe9lang\xe9es\n var $myObj3 : Object\n OB SET($myObj3; age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cr\xe9ation de propri\xe9t\xe9s et affectation de valeurs, y compris d'autres objets :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //cr\xe9e la propri\xe9t\xe9 city avec la valeur "London"\n $Emp.city:="Paris" //modifie la propri\xe9t\xe9 city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //cr\xe9e la propri\xe9t\xe9 phone avec un autre objet comme valeur\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lire une valeur dans un sous-objet est tr\xe8s simple avec la notation objet :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Vous pouvez acc\xe9der aux propri\xe9t\xe9s en tant que cha\xeenes en utilisant l'op\xe9rateur ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modification de la propri\xe9t\xe9 city\n  //cette syntaxe est utile pour cr\xe9er des propri\xe9t\xe9s \xe0 l\'aide de variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\nEnd for\n  // cr\xe9e 4 propri\xe9t\xe9s vides "address1...address4" dans l\'objet $Emp\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);