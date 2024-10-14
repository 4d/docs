"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81211],{430650:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>A,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=s(474848),t=s(28453);const a={id:"string",title:"String"},A=void 0,d={id:"Concepts/string",title:"String",description:'String ("Cha\xeene") est un terme g\xe9n\xe9rique utilis\xe9 pour :',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/dt_string.md",sourceDirName:"Concepts",slug:"/Concepts/string",permalink:"/docs/fr/19/Concepts/string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_string.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Pointer",permalink:"/docs/fr/19/Concepts/pointer"},next:{title:"Time",permalink:"/docs/fr/19/Concepts/time"}},c={},i=[{value:"Constantes litt\xe9rales de type cha\xeene",id:"constantes-litt\xe9rales-de-type-cha\xeene",level:2},{value:"S\xe9quences d\u2019\xe9chappement",id:"s\xe9quences-d\xe9chappement",level:3},{value:"Op\xe9rateurs sur les cha\xeenes",id:"op\xe9rateurs-sur-les-cha\xeenes",level:2},{value:"Comparaisons de cha\xeenes",id:"comparaisons-de-cha\xeenes",level:2},{value:"Le joker (@)",id:"le-joker-",level:3},{value:"Mots-cl\xe9s",id:"mots-cl\xe9s",level:3},{value:"Symboles d&#39;indice de cha\xeene",id:"symboles-dindice-de-cha\xeene",level:2},{value:"Note avanc\xe9e sur la r\xe9f\xe9rence \xe0 des caract\xe8res invalides",id:"note-avanc\xe9e-sur-la-r\xe9f\xe9rence-\xe0-des-caract\xe8res-invalides",level:3},{value:"Exemple",id:"exemple",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'String ("Cha\xeene") est un terme g\xe9n\xe9rique utilis\xe9 pour :'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les variables ou champs de type Texte : un champ, une variable ou une expression de type Texte peut contenir de 0 \xe0 2 Go de texte."}),"\n",(0,r.jsx)(n.li,{children:"Les variables ou champs de type alphanum\xe9rique : un champ alphanum\xe9rique peut contenir de 0 \xe0 255 caract\xe8res (la limite est fix\xe9e lors de la d\xe9finition du champ)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constantes-litt\xe9rales-de-type-cha\xeene",children:"Constantes litt\xe9rales de type cha\xeene"}),"\n",(0,r.jsx)(n.p,{children:'Une constante litt\xe9rale de type cha\xeene est incluse entre des guillemets droits ("\u2026"). En voici quelques exemples :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"Ajouter Enregistrements"\n"Aucun enregistrement trouv\xe9."\n"Facture"\n'})}),"\n",(0,r.jsx)(n.p,{children:'Une cha\xeene vide est sp\xe9cifi\xe9e par la succession de deux guillemets ("").'}),"\n",(0,r.jsx)(n.h3,{id:"s\xe9quences-d\xe9chappement",children:"S\xe9quences d\u2019\xe9chappement"}),"\n",(0,r.jsx)(n.p,{children:"Les s\xe9quences d\u2019\xe9chappement suivantes peuvent \xeatre utilis\xe9es dans les cha\xeenes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"S\xe9quence d\u2019\xe9chappement"}),(0,r.jsx)(n.th,{children:"Caract\xe8re remplac\xe9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\n"}),(0,r.jsx)(n.td,{children:"LF (Retour ligne)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\t"}),(0,r.jsx)(n.td,{children:"HT (Tabulation)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\r"}),(0,r.jsx)(n.td,{children:"CR (Retour chariot)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\\\"}),(0,r.jsx)(n.td,{children:"\\ (Barre oblique invers\xe9e)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'\\"'}),(0,r.jsx)(n.td,{children:'" (Guillemets)'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Le caract\xe8re \\ est utilis\xe9 comme s\xe9parateur dans les chemins d\u2019acc\xe8s sous Windows. Vous devez donc saisir un double \\ lorsque vous souhaitez ins\xe9rer une barre oblique invers\xe9e devant un caract\xe8re utilis\xe9 dans une des s\xe9quences d\u2019\xe9chappement reconnues par 4D (ex : \u201cC:\\MesDocuments\\Nouveaux.txt\u201d)."]}),"\n",(0,r.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-cha\xeenes",children:"Op\xe9rateurs sur les cha\xeenes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Concat\xe9nation"}),(0,r.jsx)(n.td,{children:"Cha\xeene + Cha\xeene"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"abc" + "def"'}),(0,r.jsx)(n.td,{children:'"abcdef"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9p\xe9tition"}),(0,r.jsx)(n.td,{children:"Cha\xeene * Nombre"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"ab" * 3'}),(0,r.jsx)(n.td,{children:'"ababab"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Egalit\xe9"}),(0,r.jsx)(n.td,{children:"Cha\xeene = Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" = "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" = "abd"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,r.jsx)(n.td,{children:"Cha\xeene # Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" # "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" # "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Cha\xeene > Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abd" > "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" > "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Cha\xeene < Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" < "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" < "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Cha\xeene >= Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abd" >= "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" >= "abd"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Cha\xeene <= Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" <= "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abd" <= "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Contient mot-cl\xe9"}),(0,r.jsx)(n.td,{children:"Cha\xeene % Cha\xeene"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"Alpha Bravo" % "Bravo"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"Alpha Bravo" % "ravo"'}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"comparaisons-de-cha\xeenes",children:"Comparaisons de cha\xeenes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Les cha\xeenes sont toujours compar\xe9es caract\xe8re par caract\xe8re (hormis en cas de recherche par ",(0,r.jsx)(n.a,{href:"/docs/fr/19/Concepts/string#keywords",children:"mot-cl\xe9"}),", cf. ci-dessous)."]}),"\n",(0,r.jsxs)(n.li,{children:['Lors d\'une comparaison de cha\xeenes, 4D ne tient pas compte de la casse des caract\xe8res ; par exemple, "a"="A" retourne ',(0,r.jsx)(n.code,{children:"VRAI"}),". Pour savoir si des caract\xe8res sont en majuscules ou en minuscules, vous devez comparer leurs codes de caract\xe8res. Par exemple, l'expression suivante retourne ",(0,r.jsx)(n.code,{children:"FAUX"})," :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Character code("A")=Character code("a") // 65 n\'est pas \xe9gal \xe0 97\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Lorsque des cha\xeenes de caract\xe8res sont compar\xe9es, les caract\xe8res diacritiques sont compar\xe9s en utilisant la table de comparaison des caract\xe8res syst\xe8me de votre ordinateur. Par exemple, les expressions suivantes retournent ",(0,r.jsx)(n.code,{children:"VRAI"})," :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "n"="\xf1"\n     "n"="\xd1"\n     "A"="\xe5"\n      // etc\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les comparaisons de cha\xeene tiennent compte des sp\xe9cificit\xe9s du langage ",(0,r.jsx)(n.strong,{children:"d\xe9fini pour le fichier de donn\xe9es 4D"})," (qui n'est pas toujours identique au langage d\xe9fini pour le syst\xe8me)."]}),"\n",(0,r.jsx)(n.h3,{id:"le-joker-",children:"Le joker (@)"}),"\n",(0,r.jsxs)(n.p,{children:["Le langage 4D prend en charge ",(0,r.jsx)(n.strong,{children:"@"})," en tant que joker. Ce caract\xe8re peut \xeatre utilis\xe9 dans toute comparaison de cha\xeenes. Ainsi, par exemple, l'expression suivante est \xe9valu\xe9e \xe0 ",(0,r.jsx)(n.code,{children:"TRUE"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Le joker doit \xeatre utilis\xe9 dans le second op\xe9rande (la cha\xeene qui se trouve \xe0 droite de l'op\xe9rateur). L'expression suivante est \xe9valu\xe9e \xe0 ",(0,r.jsx)(n.code,{children:"FAUX"})," car le joker est alors consid\xe9r\xe9 en tant que caract\xe8re :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'    "abc@"="abcdefghij"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Le joker signifie \u201cun ou plusieurs caract\xe8res sinon rien\u201d. Les expressions suivantes sont \xe9valu\xe9es \xe0 ",(0,r.jsx)(n.code,{children:"VRAI"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "abcdefghij"="abcdefghij@"\n     "abcdefghij"="@abcdefghij"\n     "abcdefghij"="abcd@efghij"\n     "abcdefghij"="@abcdefghij@"\n     "abcdefghij"="@abcde@fghij@"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["En revanche, dans tous les cas, lorsque deux jokers cons\xe9cutifs sont plac\xe9s dans une comparaison de cha\xeenes, celle-ci sera \xe9valu\xe9e \xe0 ",(0,r.jsx)(n.code,{children:"FAUX"}),". L'expression suivante est \xe0 ",(0,r.jsx)(n.code,{children:"FAUX"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@@fg"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Lorsque l'op\xe9rateur de comparaison est ou contient un symbole < ou >, seule la comparaison avec un seul joker situ\xe9 en fin d'op\xe9rande est prise en charge :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "abcd"<="abc@" //Comparaison valide\n "abcd"<="abc@ef" //Comparaison non valide\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Si vous souhaitez effectuer des comparaisons ou des recherches utilisant @ en tant que caract\xe8re (et non en tant que joker), vous devez utiliser l'instruction ",(0,r.jsx)(n.code,{children:"Code de caractere(Arobase)"}),". Imaginons par exemple que vous souhaitiez savoir si une cha\xeene se termine par le caract\xe8re @. L\u2019expression suivante (si $vaValeur n'est pas vide) retourne toujours ",(0,r.jsx)(n.code,{children:"VRAI"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'($vsValue[[Length($vsValue)]]="@")\n'})}),"\n",(0,r.jsx)(n.p,{children:"L'expression suivante sera correctement \xe9valu\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"(Code de caractere($vaValeur[[Longueur($vaValeur)]])#64)  \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Une option 4D du mode D\xe9veloppement vous permet de param\xe9trer le mode d\u2019interpr\xe9tation du caract\xe8re @ lorsque celui-ci est inclus dans une cha\xeene de caract\xe8res."]}),"\n",(0,r.jsx)(n.h3,{id:"mots-cl\xe9s",children:"Mots-cl\xe9s"}),"\n",(0,r.jsxs)(n.p,{children:["A la diff\xe9rence des autres comparaisons de cha\xeene, les recherches par mots-cl\xe9s recherchent des \u201cmots\u201d dans des \u201ctextes\u201d : les mots sont \xe9valu\xe9s individuellement et dans leur globalit\xe9. L\u2019op\xe9rateur ",(0,r.jsx)(n.strong,{children:"%"})," retournera toujours ",(0,r.jsx)(n.code,{children:"Faux"})," si la recherche porte sur plusieurs mots ou une partie de mot (par exemple une syllabe). Les \u201cmots\u201d sont des cha\xeenes de caract\xe8res encadr\xe9es par des \u201cs\xe9parateurs\u201d, qui sont les espaces, les caract\xe8res de ponctuation et les tirets. Une apostrophe, comme dans \u201caujourd'hui\u201d, est g\xe9n\xe9ralement consid\xe9r\xe9e comme partie du mot, mais sera ignor\xe9e dans certains cas (cf. r\xe8gles ci-dessous). Les nombres peuvent \xeatre recherch\xe9s car ils sont \xe9valu\xe9s dans leur ensemble (incluant les symboles d\xe9cimaux). Les autres symboles (monnaie, temp\xe9rature, etc.) seront ignor\xe9s."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "Alpha Bravo Charlie"%"Bravo" // Retourne Vrai\n "Alpha Bravo Charlie"%"vo" // Retourne Faux\n "Alpha Bravo Charlie"%"Alpha Bravo" // Retourne Faux\n "Alpha,Bravo,Charlie"%"Alpha" // Retourne Vrai\n "Software and Computers"%"comput@" // Retourne Vrai\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["4D utilise la biblioth\xe8que ICU pour comparer des cha\xeenes de caract\xe8res (en utilisant les op\xe9rateurs ",(0,r.jsx)(n.code,{children:"<>=#"}),") et d\xe9tecter des mots-cl\xe9s. Pour plus d'informations sur les r\xe8gles mises en \u0153uvre, veuillez vous reporter \xe0 l'adresse suivante : ",(0,r.jsx)(n.a,{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries",children:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Dans la version japonaise, au lieu de ICU, 4D utilise Mecab par d\xe9faut pour la d\xe9tection des mots-cl\xe9s."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"symboles-dindice-de-cha\xeene",children:"Symboles d'indice de cha\xeene"}),"\n",(0,r.jsx)(n.p,{children:"Les symboles d'indice de cha\xeene sont les suivants : [[...]]"}),"\n",(0,r.jsx)(n.p,{children:"Ces symboles sont utilis\xe9s pour d\xe9signer un caract\xe8re particulier dans une cha\xeene. Cette syntaxe vous permet de r\xe9f\xe9rencer un caract\xe8re dans un champ ou une variable de type Alpha ou Texte."}),"\n",(0,r.jsx)(n.p,{children:"Lorsque les symboles d'indice de cha\xeene sont plac\xe9s \xe0 gauche de l'op\xe9rateur d'affectation (:=), un caract\xe8re est affect\xe9 \xe0 la position r\xe9f\xe9renc\xe9e dans la cha\xeene. Par exemple, en postulant que la cha\xeene vsNom n'est pas une cha\xeene vide, le code suivant passe le premier caract\xe8re de la cha\xeene vsNom en majuscule :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If(vsNom#"")\n    vsNom[[1]]:=Uppercase(vsNom[[1]])\nEnd if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Lorsque les symboles d'indice de cha\xeene apparaissent dans une expression, ils retournent le caract\xe8re auquel ils font r\xe9f\xe9rence sous la forme d'une cha\xeene d'un caract\xe8re. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//L\'exemple suivant teste si le dernier caract\xe8re de vtText est le caract\xe8re "@"\n If(vtText#"")\n    If(Character code(Substring(vtText;Length(vtText);1))=At sign)\n  //...\n    End if\n End if\n\n  //En utilisant la syntaxe des caract\xe8res d\'indice de cha\xeene, vous \xe9cririez plus simplement :\n If(vtText#"")\n    If(Character code(vtText[[Length(vtText)]])=At sign)\n  // ...\n    End if\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"note-avanc\xe9e-sur-la-r\xe9f\xe9rence-\xe0-des-caract\xe8res-invalides",children:"Note avanc\xe9e sur la r\xe9f\xe9rence \xe0 des caract\xe8res invalides"}),"\n",(0,r.jsx)(n.p,{children:"Lorsque vous utilisez les symboles d'indice de cha\xeene, il est de votre responsabilit\xe9 de vous r\xe9f\xe9rer \xe0 des caract\xe8res existant dans la cha\xeene, de la m\xeame mani\xe8re que pour les \xe9l\xe9ments d'un tableau. Si, par exemple, vous r\xe9f\xe9rencez le 20e caract\xe8re d'une cha\xeene, cette cha\xeene doit contenir au moins 20 caract\xe8res."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ne pas respecter cette condition en mode interpr\xe9t\xe9 n'est pas signal\xe9 comme une erreur par 4D."}),"\n",(0,r.jsx)(n.li,{children:"Ne pas respecter cette condition en mode compil\xe9 (sans options) peut entra\xeener une \"corruption\" de la m\xe9moire, si, par exemple, vous \xe9crivez un caract\xe8re au-del\xe0 de la fin d'une cha\xeene ou d'un texte."}),"\n",(0,r.jsx)(n.li,{children:"Ne pas respecter cette condition en mode compil\xe9 est signal\xe9 lorsque le contr\xf4le d'ex\xe9cution est activ\xe9. Si, par exemple, vous ex\xe9cutez le code suivant :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'//Ne pas faire \xe7a !\n vsAnyText:=""\n vsAnyText[[1]]:="A"\n'})}),"\n",(0,r.jsx)(n.p,{children:"L'alerte suivante s'affichera en mode compil\xe9 :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt-text",src:s(956788).A+"",width:"642",height:"332"})}),"\n",(0,r.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"La m\xe9thode projet suivante ajoute une lettre capitale \xe0 tous les mots du texte pass\xe9 en param\xe8tre et retourne le texte modifi\xe9 :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  // M\xe9thode projet de passage en capitale\n  // PasserEnCap ( Texte ) -> Texte\n  // PasserEnCap ( Texte source ) -> Texte avec des lettres capitales\n\n $0:=$1\n $vlLen:=Length($0)\n If($vlLen>0)\n    $0[[1]]:=Uppercase($0[[1]])\n    For($vlChar;1;$vlLen-1)\n       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)\n          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])\n       End if\n    End for\n End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Une fois cette m\xe9thode plac\xe9e dans la base, la ligne :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'ALERT(Capitalize_text("Bonjour, mon nom est Jean Bon et je me pr\xe9sente aux pr\xe9sidentielles !"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"affiche l'alerte suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt-text",src:s(256953).A+"",width:"512",height:"282"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},256953:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},956788:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Syntax_Error.en-9839a6b23f8e4a167fb902c93d5e8c08.png"},28453:(e,n,s)=>{s.d(n,{R:()=>A,x:()=>d});var r=s(296540);const t={},a=r.createContext(t);function A(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:A(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);