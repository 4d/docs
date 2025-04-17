"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95989"],{195357:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"Concepts/number","title":"Number (Real, Integer)","description":"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/fr/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"number","title":"Number (Real, Integer)"},"sidebar":"docs","previous":{"title":"Null et Undefined","permalink":"/docs/fr/Concepts/null-undefined"},"next":{"title":"Object","permalink":"/docs/fr/Concepts/object"}}'),t=s("785893"),i=s("250065");let d={id:"number",title:"Number (Real, Integer)"},l=void 0,o={},a=[{value:"Constantes litt\xe9rales num\xe9riques",id:"constantes-litt\xe9rales-num\xe9riques",level:2},{value:"Op\xe9rateurs sur les nombres",id:"op\xe9rateurs-sur-les-nombres",level:2},{value:"Modulo",id:"modulo",level:3},{value:"Division enti\xe8re",id:"division-enti\xe8re",level:3},{value:"Comparaison des r\xe9els",id:"comparaison-des-r\xe9els",level:3},{value:"Priorit\xe9",id:"priorit\xe9",level:3},{value:"Op\xe9rateurs sur les bits",id:"op\xe9rateurs-sur-les-bits",level:2},{value:"Notes",id:"notes",level:4},{value:"Exemples",id:"exemples",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les champs, variables ou expression de type R\xe9el. Les nombres de type R\xe9el sont compris dans l'intervalle \xb11.7e\xb1308 (13 chiffres significatifs)."}),"\n",(0,t.jsxs)(n.li,{children:["Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka ",(0,t.jsx)(n.em,{children:"Long"})," or ",(0,t.jsx)(n.em,{children:"Longint"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:[(0,t.jsxs)(n.p,{children:["Usually when working with Integers, you handle ",(0,t.jsx)(n.em,{children:"Long"})," values (4-byte Integer). However, there are two cases where Integers are stored as ",(0,t.jsx)(n.em,{children:"Shorts"})," values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Database fields with ",(0,t.jsx)(n.code,{children:"Integer"})," type,"]}),"\n",(0,t.jsxs)(n.li,{children:["Elements of arrays declared with ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/array-integer",children:(0,t.jsx)(n.code,{children:"ARRAY INTEGER"})}),"."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["These legacy data types are automatically converted in ",(0,t.jsx)(n.em,{children:"Longs"})," when used in the 4D Language."]})]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez assigner tout nombre d'un type num\xe9rique \xe0 un nombre d'un autre type num\xe9rique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si n\xe9cessaire. Notez cependant que lorsqu'une valeur est situ\xe9e en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. You can mix number data types in expressions."}),"\n",(0,t.jsx)(n.h2,{id:"constantes-litt\xe9rales-num\xe9riques",children:"Constantes litt\xe9rales num\xe9riques"}),"\n",(0,t.jsx)(n.p,{children:"Une constante litt\xe9rale num\xe9rique s\u2019\xe9crit comme un nombre r\xe9el. Voici quelques exemples de constantes num\xe9riques :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'Le s\xe9parateur d\xe9cimal est par d\xe9faut le point (.), quelle que soit la langue du syst\xe8me. Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" dans la Page M\xe9thodes des Pr\xe9f\xe9rences, vous devez utiliser le s\xe9parateur d\xe9fini dans votre syst\xe8me.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Les nombres n\xe9gatifs s\u2019\xe9crivent pr\xe9c\xe9d\xe9s du signe moins (-). Par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,t.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-nombres",children:"Op\xe9rateurs sur les nombres"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Syntaxe"}),(0,t.jsx)(n.th,{children:"Retourne"}),(0,t.jsx)(n.th,{children:"Expression"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Addition"}),(0,t.jsx)(n.td,{children:"Nombre + Nombre"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"2 + 3"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Soustraction"}),(0,t.jsx)(n.td,{children:"Nombre - Nombre"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"3 \u2013 2"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Multiplication"}),(0,t.jsx)(n.td,{children:"Number * Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"5 * 2"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Division"}),(0,t.jsx)(n.td,{children:"Number / Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"5 / 2"}),(0,t.jsx)(n.td,{children:"2.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Division enti\xe8re"}),(0,t.jsx)(n.td,{children:"Nombre \\ Nombre"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"5 \\ 2"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modulo"}),(0,t.jsx)(n.td,{children:"Nombre % Nombre"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"5 % 2"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Exponentiation"}),(0,t.jsx)(n.td,{children:"Nombre ^ Nombre"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"2 ^ 3"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Egalit\xe9"}),(0,t.jsx)(n.td,{children:"Nombre = Nombre"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"10 = 10"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"10 = 11"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,t.jsx)(n.td,{children:"Nombre # Nombre"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"10 #11"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"10 # 10"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,t.jsx)(n.td,{children:"Nombre > Nombre"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"11 > 10"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"10 > 11"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,t.jsx)(n.td,{children:"Nombre < Nombre"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"10 < 11"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"11 < 10"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,t.jsx)(n.td,{children:"Nombre >= Nombre"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"11 >= 10"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"10 >= 11"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,t.jsx)(n.td,{children:"Number <= Number"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"10 <= 11"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"11 <= 10"}),(0,t.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"modulo",children:"Modulo"}),"\n",(0,t.jsx)(n.p,{children:"L'op\xe9rateur modulo % divise le premier nombre par le second et retourne le reste de la division enti\xe8re. Voici quelques exemples :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste."}),"\n",(0,t.jsx)(n.li,{children:"10 % 3 retourne 1 car le reste est 1."}),"\n",(0,t.jsx)(n.li,{children:"10,5 % 2 retourne 0 car le reste n'est pas un nombre entier."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["L'op\xe9rateur modulo % retourne des valeurs significatives avec des nombres appartenant \xe0 la cat\xe9gorie des entiers longs (de \u20132^31 \xe0 +2^31 moins 1). To calculate the modulo with numbers outside of this range, use the ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/mod",children:(0,t.jsx)(n.code,{children:"Mod"})})," command."]})}),"\n",(0,t.jsx)(n.h3,{id:"division-enti\xe8re",children:"Division enti\xe8re"}),"\n",(0,t.jsx)(n.p,{children:"L'op\xe9rateur division enti\xe8re \\ retourne des valeurs significatives avec des nombres entiers uniquement."}),"\n",(0,t.jsx)(n.h3,{id:"comparaison-des-r\xe9els",children:"Comparaison des r\xe9els"}),"\n",(0,t.jsxs)(n.p,{children:["To compare two reals for equality, the 4D language actually compares the absolute value of the difference with ",(0,t.jsx)(n.em,{children:"epsilon"}),". See the ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-real-comparison-level",children:(0,t.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})})," command."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for ",(0,t.jsx)(n.em,{children:"epsilon"})," and does not take the ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-real-comparison-level",children:(0,t.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})})," setting into account."]})}),"\n",(0,t.jsx)(n.h3,{id:"priorit\xe9",children:"Priorit\xe9"}),"\n",(0,t.jsx)(n.p,{children:"L'ordre dans lequel une expression est \xe9valu\xe9e s'appelle la priorit\xe9. 4D applique strictement une r\xe8gle de priorit\xe9 de gauche \xe0 droite. L'ordre alg\xe9brique n'est pas appliqu\xe9. Par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,t.jsx)(n.p,{children:"retourne 35 car l'expression est \xe9valu\xe9e comme 3 + 4, qui donne 7, multipli\xe9 par 5, ce qui donne 35."}),"\n",(0,t.jsx)(n.p,{children:"Les parenth\xe8ses doivent \xeatre utilis\xe9es pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,t.jsx)(n.p,{children:"retourne 23 car l'expression (4 * 5) est \xe9valu\xe9e en premier lieu. Le r\xe9sultat (20) est alors ajout\xe9 \xe0 3, ce qui donne le r\xe9sultat final 23."}),"\n",(0,t.jsx)(n.p,{children:"Des parenth\xe8ses peuvent \xeatre incluses dans d'autres parenth\xe8ses. Assurez-vous qu'il y ait une parenth\xe8se fermante pour chaque parenth\xe8se ouverte. Une parenth\xe8se manquante ou plac\xe9e \xe0 un mauvais endroit peut soit donner un r\xe9sultat erron\xe9, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenth\xe8ses. Le compilateur interpr\xe8tera toute parenth\xe8se manquante ou superflue comme une erreur de syntaxe."}),"\n",(0,t.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-bits",children:"Op\xe9rateurs sur les bits"}),"\n",(0,t.jsx)(n.p,{children:"The bitwise operators operates on (Long) Integers expressions or values."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"While using the bitwise operators, you must think about a Long value as an array of 32 bits. Les bits sont num\xe9rot\xe9s de 0 \xe0 31, de droite \xe0 gauche."}),"\n",(0,t.jsxs)(n.p,{children:["Comme un bit peut valoir 0 (z\xe9ro) ou 1, vous pouvez \xe9galement consid\xe9rer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Bool\xe9en. A bit equal to 1 means ",(0,t.jsx)(n.strong,{children:"True"})," and a bit equal to 0 means ",(0,t.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. Le tableau suivant fournit la liste des op\xe9rateurs sur les bits et leur syntaxe :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Op\xe9rateur"}),(0,t.jsx)(n.th,{children:"Syntaxe"}),(0,t.jsx)(n.th,{children:"Retourne"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ET"}),(0,t.jsx)(n.td,{children:"&"}),(0,t.jsx)(n.td,{children:"Long & Long"}),(0,t.jsx)(n.td,{children:"E. long"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (inclusif)"}),(0,t.jsx)(n.td,{children:"&#124"}),(0,t.jsx)(n.td,{children:"long | E. long"}),(0,t.jsx)(n.td,{children:"E. long"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (exclusif)"}),(0,t.jsx)(n.td,{children:"^ &#124"}),(0,t.jsx)(n.td,{children:"Long ^ | Long"}),(0,t.jsx)(n.td,{children:"E. long"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,t.jsx)(n.td,{children:"<<"}),(0,t.jsx)(n.td,{children:"E. long << E. long"}),(0,t.jsx)(n.td,{children:"long (voir note n\xb01)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,t.jsx)(n.td,{children:"> >"}),(0,t.jsx)(n.td,{children:"E. long >> E. long"}),(0,t.jsx)(n.td,{children:"long (voir note n\xb01)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,t.jsx)(n.td,{children:"?+"}),(0,t.jsx)(n.td,{children:"long ?+ E. E. long"}),(0,t.jsx)(n.td,{children:"long (voir note n\xb02)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,t.jsx)(n.td,{children:"?-"}),(0,t.jsx)(n.td,{children:"long ??"}),(0,t.jsx)(n.td,{children:"long (voir note n\xb02)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tester bit"}),(0,t.jsx)(n.td,{children:"??"}),(0,t.jsx)(n.td,{children:"long ^| E. E. long"}),(0,t.jsx)(n.td,{children:"Bool\xe9en (voir note n\xb02)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.code,{children:"Left Bit Shift"})," and ",(0,t.jsx)(n.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31. Notez qu'un d\xe9calage de 0 retourne une valeur inchang\xe9e et qu'un d\xe9calage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second op\xe9rande, le r\xe9sultat sera non significatif."]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.code,{children:"Bit Set"}),", ",(0,t.jsx)(n.code,{children:"Bit Clear"})," and ",(0,t.jsx)(n.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31, sinon le r\xe9sultat de l'expression sera non significatif."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Le tableau suivant dresse la liste des op\xe9rateurs sur les bits et de leurs effets :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ET"}),(0,t.jsx)(n.td,{children:"Chaque bit r\xe9sultant est le ET logique des bits dans les deux op\xe9randes. Chaque bit r\xe9sultant est le ET logique des bits dans les deux op\xe9randes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (inclusif)"}),(0,t.jsxs)(n.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,t.jsx)(n.li,{children:"1 | 1 --\x3e 1"}),(0,t.jsx)(n.li,{children:"0 | 1 --\x3e 1"}),(0,t.jsx)(n.li,{children:"1 | 0 --\x3e 1"}),(0,t.jsx)(n.li,{children:"0 | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (exclusif)"}),(0,t.jsxs)(n.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,t.jsx)(n.li,{children:"1 ^ | 1 --\x3e 0"}),(0,t.jsx)(n.li,{children:"0 ^ | 1 --\x3e 1"}),(0,t.jsx)(n.li,{children:"1 ^ | 0 --\x3e 1"}),(0,t.jsx)(n.li,{children:"0 ^ | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,t.jsxs)(n.td,{children:["La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la gauche du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. Les bits auparavant situ\xe9s \xe0 gauche sont perdus et les nouveaux bits situ\xe9s \xe0 droite ont la valeur 0. ",(0,t.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,t.jsxs)(n.td,{children:["La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la droite du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. The bits on the right are lost and the new bits on the left are set to 0.",(0,t.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,t.jsx)(n.td,{children:"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,t.jsx)(n.td,{children:"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tester bit"}),(0,t.jsx)(n.td,{children:"Retourne Vrai si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 1. Retourne Faux si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 0."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"exemples",children:"Exemples"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Exemple"}),(0,t.jsx)(n.th,{children:"R\xe9sultat"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ET"}),(0,t.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,t.jsx)(n.td,{children:"0x0000FF00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (inclusif)"}),(0,t.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,t.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OU (exclusif)"}),(0,t.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,t.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,t.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,t.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,t.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,t.jsx)(n.td,{children:"0x000000FF"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,t.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,t.jsx)(n.td,{children:"0x00010000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,t.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,t.jsx)(n.td,{children:"0x00000000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tester bit"}),(0,t.jsx)(n.td,{children:"0x00010000 ?? 16"}),(0,t.jsx)(n.td,{children:"True"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);