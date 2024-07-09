/*! For license information please see fc158b52.32d242a3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90899],{946889:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(474848),t=s(28453);const i={id:"number",title:"Number (Real, Longint, Integer)"},l=void 0,d={id:"Concepts/number",title:"Number (Real, Longint, Integer)",description:"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/fr/20-R4/Concepts/number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"number",title:"Number (Real, Longint, Integer)"},sidebar:"docs",previous:{title:"Null et Undefined",permalink:"/docs/fr/20-R4/Concepts/null-undefined"},next:{title:"Object",permalink:"/docs/fr/20-R4/Concepts/object"}},o={},c=[{value:"Constantes litt\xe9rales num\xe9riques",id:"Constantes-litt\xe9rales-num\xe9riques",level:2},{value:"Op\xe9rateurs sur les nombres",id:"Op\xe9rateurs-sur-les-nombres",level:2},{value:"Modulo",id:"Modulo",level:3},{value:"Division enti\xe8re",id:"Division-enti\xe8re",level:3},{value:"Real comparison",id:"Real-comparison",level:3},{value:"Priorit\xe9",id:"Priorit\xe9",level:3},{value:"Op\xe9rateurs sur les bits",id:"Op\xe9rateurs-sur-les-bits",level:2},{value:"Notes",id:"Notes",level:4},{value:"Exemples",id:"Exemples",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les champs, variables ou expression de type R\xe9el. Les nombres de type R\xe9el sont compris dans l'intervalle \xb11.7e\xb1308 (13 chiffres significatifs)."}),"\n",(0,r.jsx)(n.li,{children:"Les champs, variables ou expression de type Entier long. Les nombres de type Entier long (4 octets) sont compris dans l'intervalle -2^31..(2^31)-1."}),"\n",(0,r.jsx)(n.li,{children:"Les champs, variables ou expression de type Entier. Les nombres de type Entier (2 octets) sont compris dans l'intervalle -32 768..32 767."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Lorsqu'elles sont utilis\xe9es dans le langage 4D, les valeurs des champs de type Entier sont automatiquement converties en Entier long."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez assigner tout nombre d'un type num\xe9rique \xe0 un nombre d'un autre type num\xe9rique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si n\xe9cessaire. Notez cependant que lorsqu'une valeur est situ\xe9e en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. Vous pouvez m\xe9langer tous les types de num\xe9riques au sein d'une m\xeame expression."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Dans ce manuel de r\xe9f\xe9rence du langage 4D, quel que soit le type pr\xe9cis des donn\xe9es, les param\xe8tres de type R\xe9el, Entier et Entier long dans les descriptions des commandes sont appel\xe9s num\xe9riques, sauf sp\xe9cification explicite."]}),"\n",(0,r.jsx)(n.h2,{id:"Constantes-litt\xe9rales-num\xe9riques",children:"Constantes litt\xe9rales num\xe9riques"}),"\n",(0,r.jsx)(n.p,{children:"Une constante litt\xe9rale num\xe9rique s\u2019\xe9crit comme un nombre r\xe9el. Voici quelques exemples de constantes num\xe9riques :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'Le s\xe9parateur d\xe9cimal est par d\xe9faut le point (.), quelle que soit la langue du syst\xe8me. Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" dans la Page M\xe9thodes des Pr\xe9f\xe9rences, vous devez utiliser le s\xe9parateur d\xe9fini dans votre syst\xe8me.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les nombres n\xe9gatifs s\u2019\xe9crivent pr\xe9c\xe9d\xe9s du signe moins (-). Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,r.jsx)(n.h2,{id:"Op\xe9rateurs-sur-les-nombres",children:"Op\xe9rateurs sur les nombres"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Addition"}),(0,r.jsx)(n.td,{children:"Nombre + Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"2 + 3"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Soustraction"}),(0,r.jsx)(n.td,{children:"Nombre - Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"3 \u2013 2"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Multiplication"}),(0,r.jsx)(n.td,{children:"Number * Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"5 * 2"}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Division"}),(0,r.jsx)(n.td,{children:"Number / Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"5 / 2"}),(0,r.jsx)(n.td,{children:"2.5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Division enti\xe8re"}),(0,r.jsx)(n.td,{children:"Nombre \\ Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"5 \\ 2"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modulo"}),(0,r.jsx)(n.td,{children:"Nombre % Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"5 % 2"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Exponentiation"}),(0,r.jsx)(n.td,{children:"Nombre ^ Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"2 ^ 3"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Egalit\xe9"}),(0,r.jsx)(n.td,{children:"Nombre = Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"10 = 10"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"10 = 11"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,r.jsx)(n.td,{children:"Nombre # Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"10 #11"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"10 # 10"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Nombre > Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"11 > 10"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"10 > 11"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Nombre < Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"10 < 11"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"11 < 10"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Nombre >= Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"11 >= 10"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"10 >= 11"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Nombre <= Nombre"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"10 <= 11"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"11 <= 10"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"Modulo",children:"Modulo"}),"\n",(0,r.jsx)(n.p,{children:"L'op\xe9rateur modulo % divise le premier nombre par le second et retourne le reste de la division enti\xe8re. Voici quelques exemples :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste."}),"\n",(0,r.jsx)(n.li,{children:"10 % 3 retourne 1 car le reste est 1."}),"\n",(0,r.jsx)(n.li,{children:"10,5 % 2 retourne 0 car le reste n'est pas un nombre entier."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["L'op\xe9rateur modulo % retourne des valeurs significatives avec des nombres appartenant \xe0 la cat\xe9gorie des entiers longs (de \u20132^31 \xe0 +2^31 moins 1). To calculate the modulo with numbers outside of this range, use the [",(0,r.jsx)(n.code,{children:"Mod"}),"(",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page98.html",children:"https://doc.4d.com/4dv20/help/command/en/page98.html"}),")] command."]})}),"\n",(0,r.jsx)(n.h3,{id:"Division-enti\xe8re",children:"Division enti\xe8re"}),"\n",(0,r.jsx)(n.p,{children:"L'op\xe9rateur division enti\xe8re \\ retourne des valeurs significatives avec des nombres entiers uniquement."}),"\n",(0,r.jsx)(n.h3,{id:"Real-comparison",children:"Real comparison"}),"\n",(0,r.jsxs)(n.p,{children:["To compare two reals for equality, the 4D language actually compares the absolute value of the difference with ",(0,r.jsx)(n.em,{children:"epsilon"}),". See the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page623.html",children:(0,r.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})})," command."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for ",(0,r.jsx)(n.em,{children:"epsilon"})," and does not take the ",(0,r.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})," setting into account."]})}),"\n",(0,r.jsx)(n.h3,{id:"Priorit\xe9",children:"Priorit\xe9"}),"\n",(0,r.jsx)(n.p,{children:"L'ordre dans lequel une expression est \xe9valu\xe9e s'appelle la priorit\xe9. 4D applique strictement une r\xe8gle de priorit\xe9 de gauche \xe0 droite. L'ordre alg\xe9brique n'est pas appliqu\xe9. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,r.jsx)(n.p,{children:"retourne 35 car l'expression est \xe9valu\xe9e comme 3 + 4, qui donne 7, multipli\xe9 par 5, ce qui donne 35."}),"\n",(0,r.jsx)(n.p,{children:"Les parenth\xe8ses doivent \xeatre utilis\xe9es pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,r.jsx)(n.p,{children:"retourne 23 car l'expression (4 * 5) est \xe9valu\xe9e en premier lieu. Le r\xe9sultat (20) est alors ajout\xe9 \xe0 3, ce qui donne le r\xe9sultat final 23."}),"\n",(0,r.jsx)(n.p,{children:"Des parenth\xe8ses peuvent \xeatre incluses dans d'autres parenth\xe8ses. Assurez-vous qu'il y ait une parenth\xe8se fermante pour chaque parenth\xe8se ouverte. Une parenth\xe8se manquante ou plac\xe9e \xe0 un mauvais endroit peut soit donner un r\xe9sultat erron\xe9, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenth\xe8ses. Le compilateur interpr\xe8tera toute parenth\xe8se manquante ou superflue comme une erreur de syntaxe."}),"\n",(0,r.jsx)(n.h2,{id:"Op\xe9rateurs-sur-les-bits",children:"Op\xe9rateurs sur les bits"}),"\n",(0,r.jsxs)(n.p,{children:["Les op\xe9rateurs sur les bits s'appliquent \xe0 des expressions ou valeurs de type ",(0,r.jsx)(n.strong,{children:"Entier long"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Si vous passez une valeur de type Entier ou R\xe9el \xe0 un op\xe9rateur sur les bits, 4D la convertit en Entier long avant de calculer le r\xe9sultat de l'expression."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Lorsque vous employez des op\xe9rateurs sur les bits, vous devez consid\xe9rer une valeur de type Entier long comme un tableau de 32 bits. Les bits sont num\xe9rot\xe9s de 0 \xe0 31, de droite \xe0 gauche."}),"\n",(0,r.jsxs)(n.p,{children:["Comme un bit peut valoir 0 (z\xe9ro) ou 1, vous pouvez \xe9galement consid\xe9rer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Bool\xe9en. Lorsque le bit vaut 1, la valeur est ",(0,r.jsx)(n.strong,{children:"Vrai"})," et lorsque le bit vaut 0, la valeur est ",(0,r.jsx)(n.strong,{children:"Faux"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Une expression utilisant un op\xe9rateur sur les bits retourne une valeur de type Entier long, \xe0 l'exception de l'op\xe9rateur Tester bit avec lequel l'expression retourn\xe9e est du type Bool\xe9en. Le tableau suivant fournit la liste des op\xe9rateurs sur les bits et leur syntaxe :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Op\xe9rateur"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ET"}),(0,r.jsx)(n.td,{children:"&"}),(0,r.jsx)(n.td,{children:"long & E. E. long"}),(0,r.jsx)(n.td,{children:"E. long"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (inclusif)"}),(0,r.jsx)(n.td,{children:"|"}),(0,r.jsx)(n.td,{children:"long | E. long"}),(0,r.jsx)(n.td,{children:"E. long"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (exclusif)"}),(0,r.jsx)(n.td,{children:"^ |"}),(0,r.jsx)(n.td,{children:"Long ^ | Long"}),(0,r.jsx)(n.td,{children:"E. long"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,r.jsx)(n.td,{children:"<<"}),(0,r.jsx)(n.td,{children:"E. Long << E. Long"}),(0,r.jsx)(n.td,{children:"long (voir note n\xb01)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,r.jsx)(n.td,{children:">>"}),(0,r.jsx)(n.td,{children:"E. Long >> E. Long"}),(0,r.jsx)(n.td,{children:"long (voir note n\xb01)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,r.jsx)(n.td,{children:"?+"}),(0,r.jsx)(n.td,{children:"long ?+ E. E. long"}),(0,r.jsx)(n.td,{children:"long (voir note n\xb02)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,r.jsx)(n.td,{children:"?-"}),(0,r.jsx)(n.td,{children:"long ??"}),(0,r.jsx)(n.td,{children:"long (voir note n\xb02)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tester bit"}),(0,r.jsx)(n.td,{children:"??"}),(0,r.jsx)(n.td,{children:"long ^| E. E. long"}),(0,r.jsx)(n.td,{children:"Bool\xe9en (voir note n\xb02)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Dans les op\xe9rations utilisant ",(0,r.jsx)(n.code,{children:"D\xe9caler bits \xe0 gauche"})," et ",(0,r.jsx)(n.code,{children:"D\xe9caler bits \xe0 droite"}),", le second op\xe9rande indique le nombre de d\xe9calages de bits du premier op\xe9rande \xe0 effectuer dans la valeur retourn\xe9e. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31. Notez qu'un d\xe9calage de 0 retourne une valeur inchang\xe9e et qu'un d\xe9calage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second op\xe9rande, le r\xe9sultat sera non significatif."]}),"\n",(0,r.jsxs)(n.li,{children:["Dans les op\xe9rations utilisant ",(0,r.jsx)(n.code,{children:"Mettre bit \xe0 1"}),", ",(0,r.jsx)(n.code,{children:"Mettre bit \xe0 0"})," et ",(0,r.jsx)(n.code,{children:"Tester bit"}),", le second op\xe9rande indique le num\xe9ro du bit sur lequel agir. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31, sinon le r\xe9sultat de l'expression sera non significatif."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Le tableau suivant dresse la liste des op\xe9rateurs sur les bits et de leurs effets :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ET"}),(0,r.jsxs)(n.td,{children:["Each resulting bit is the logical AND of the bits in the two operands. Here is the logical AND table:",(0,r.jsx)(n.li,{children:"1 & 1 --\x3e 1"}),(0,r.jsx)(n.li,{children:"0 & 1 --\x3e 0"}),(0,r.jsx)(n.li,{children:"1 & 0 --\x3e 0"}),(0,r.jsx)(n.li,{children:"0 & 0 --\x3e 0"}),"En d'autres termes, le bit r\xe9sultant est 1 si les deux bits d'op\xe9rande sont 1; sinon, le bit r\xe9sultant est 0."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (inclusif)"}),(0,r.jsxs)(n.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,r.jsx)(n.li,{children:"1 | 1 --\x3e 1"}),(0,r.jsx)(n.li,{children:"0 | 1 --\x3e 1"}),(0,r.jsx)(n.li,{children:"1 | 0 --\x3e 1"}),(0,r.jsx)(n.li,{children:"0 | 0 --\x3e 0"}),"En d'autres termes, le bit r\xe9sultant est 1 si au moins l'un des deux bits d'op\xe9rande est 1; sinon, le bit r\xe9sultant est 0."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (exclusif)"}),(0,r.jsxs)(n.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,r.jsx)(n.li,{children:"1 ^ | 1 --\x3e 0"}),(0,r.jsx)(n.li,{children:"0 ^ | 1 --\x3e 1"}),(0,r.jsx)(n.li,{children:"1 ^ | 0 --\x3e 1"}),(0,r.jsx)(n.li,{children:"0 ^ | 0 --\x3e 0"}),"En d'autres termes, le bit r\xe9sultant est 1 si seul l'un des deux bits d'op\xe9rande est 1; sinon, le bit r\xe9sultant est 0."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,r.jsx)(n.td,{children:"La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la gauche du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. Les bits auparavant situ\xe9s \xe0 gauche sont perdus et les nouveaux bits situ\xe9s \xe0 droite ont la valeur 0. Les bits auparavant situ\xe9s \xe0 gauche sont perdus et les nouveaux bits situ\xe9s \xe0 droite ont la valeur 0."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,r.jsxs)(n.td,{children:["La valeur r\xe9sultante est d\xe9finie sur la premi\xe8re valeur d'op\xe9rande, puis les bits r\xe9sultants sont d\xe9cal\xe9s vers la droite du nombre de positions indiqu\xe9 par le deuxi\xe8me op\xe9rande. The bits on the right are lost and the new bits on the left are set to 0.",(0,r.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,r.jsx)(n.td,{children:"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,r.jsx)(n.td,{children:"La valeur retourn\xe9e est la valeur du premier op\xe9rande dans lequel le bit dont le num\xe9ro est sp\xe9cifi\xe9 par le second op\xe9rande est positionn\xe9 \xe0 0. Les autres bits demeurent inchang\xe9s."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tester bit"}),(0,r.jsx)(n.td,{children:"Retourne Vrai si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 1. Retourne Faux si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 0."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"Exemples",children:"Exemples"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Exemple"}),(0,r.jsx)(n.th,{children:"R\xe9sultat"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ET"}),(0,r.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,r.jsx)(n.td,{children:"0x0000FF00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (inclusif)"}),(0,r.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,r.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU (exclusif)"}),(0,r.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,r.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 gauche"}),(0,r.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,r.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"D\xe9caler bits \xe0 droite"}),(0,r.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,r.jsx)(n.td,{children:"0x000000FF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 1"}),(0,r.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,r.jsx)(n.td,{children:"0x00010000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mettre bit \xe0 0"}),(0,r.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,r.jsx)(n.td,{children:"0x00000000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tester bit"}),(0,r.jsx)(n.td,{children:"0x00010000 ?? 16"}),(0,r.jsx)(n.td,{children:"True"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,a=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(296540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);