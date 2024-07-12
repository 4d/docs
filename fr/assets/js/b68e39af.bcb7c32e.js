/*! For license information please see b68e39af.bcb7c32e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19667],{95333:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(474848),i=s(28453);const r={id:"branching",title:"Structures conditionnelles"},l=void 0,o={id:"Concepts/branching",title:"Structures conditionnelles",description:"If...Else...End if",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/cf_branching.md",sourceDirName:"Concepts",slug:"/Concepts/branching",permalink:"/docs/fr/18/Concepts/branching",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcf_branching.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"branching",title:"Structures conditionnelles"},sidebar:"docs",previous:{title:"Conditions et boucles",permalink:"/docs/fr/18/Concepts/control-flow"},next:{title:'Structures r\xe9p\xe9titives (ou "boucles")',permalink:"/docs/fr/18/Concepts/looping"}},c={},a=[{value:"If...Else...End if",id:"ifelseend-if",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Case of...Else...End case",id:"case-ofelseend-case",level:2},{value:"Exemple",id:"exemple-1",level:3}];function u(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"ifelseend-if",children:"If...Else...End if"}),"\n",(0,t.jsxs)(n.p,{children:["La syntaxe de la structure conditionnelle ",(0,t.jsx)(n.code,{children:"If...Else...End if"})," est la suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(Boolean_Expression)\n    instruction(s)\n Else\n    instruction(s)\nEnd if\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A noter que l'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"Else"})," est optionnel, vous pouvez \xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(Boolean_Expression)\n    instruction(s)\n End if\n"})}),"\n",(0,t.jsxs)(n.p,{children:["La structure ",(0,t.jsx)(n.code,{children:"If...Else...End if"})," permet \xe0 votre m\xe9thode de choisir dans une alternative, en fonction du r\xe9sultat, TRUE ou FALSE, d\u2019un test (une expression bool\xe9enne). Si l\u2019expression bool\xe9enne est TRUE, les instructions qui suivent imm\xe9diatement le test sont ex\xe9cut\xe9es. Si l\u2019expression bool\xe9enne est FALSE, les instructions suivant la ligne Else sont ex\xe9cut\xe9es. Le ",(0,t.jsx)(n.code,{children:"Else"})," est optionnel ; lorsqu\u2019il est omis, c\u2019est la premi\xe8re ligne d\u2019instructions suivant le ",(0,t.jsx)(n.code,{children:"End if"})," (s\u2019il y en a une) qui est ex\xe9cut\xe9e."]}),"\n",(0,t.jsx)(n.p,{children:"A noter que l'expression bool\xe9enne est toujours \xe9valu\xe9e en totalit\xe9. Examinons en particulier le test suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(MethodA & MethodB)\n    ...\n End if\n"})}),"\n",(0,t.jsxs)(n.p,{children:["L'expression n'est TRUE que si les deux m\xe9thodes sont TRUE. Or, m\xeame si ",(0,t.jsx)(n.em,{children:"MethodA"})," retourne FALSE, 4D \xe9valuera quand m\xeame ",(0,t.jsx)(n.em,{children:"MethodB"}),", ce qui repr\xe9sente une perte de temps inutile. Dans ce cas, il est pr\xe9f\xe9rable d'utiliser une structure du type :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(MethodA)\n    If(MethodB)\n       ...\n    End if\n End if\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Le r\xe9sultat est \xe9quivalent et ",(0,t.jsx)(n.em,{children:"MethodB"})," n'est \xe9valu\xe9e que si n\xe9cessaire."]}),"\n",(0,t.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  // Ask the user to enter a name\n $Find:=Request(Type a name)\n If(OK=1)\n    QUERY([People];[People]LastName=$Find)\n Else\n    ALERT("You did not enter a name.")\n End if\n End if\n End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Astuce :"})," Il n'est pas obligatoire que des instructions soient ex\xe9cut\xe9es dans chaque branche de l'alternative. Lorsque vous d\xe9veloppez un algorithme, ou lorsque vous poursuivez un but pr\xe9cis, rien ne vous emp\xeache d'\xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(Expression_bool\xe9enne)\n Else\n    instruction(s)\n End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"ou :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(Expression_bool\xe9enne)\n    instruction(s)\n Else\n End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"case-ofelseend-case",children:"Case of...Else...End case"}),"\n",(0,t.jsxs)(n.p,{children:["La syntaxe de la structure conditionnelle ",(0,t.jsx)(n.code,{children:"Case of...Else...End case"})," est la suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    :(Expression_bool\xe9enne)\n       statement(s)\n       .\n       .\n       .\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A noter que l'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"Else"})," est optionnel, vous pouvez \xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    :(Expression_bool\xe9enne)\n       statement(s)\n       .\n       .\n       .\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n End case\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Tout comme la structure ",(0,t.jsx)(n.code,{children:"If...Else...End if"}),", la structure ",(0,t.jsx)(n.code,{children:"Case of...Else...End case"})," permet \xe9galement \xe0 votre m\xe9thode de choisir parmi plusieurs s\xe9quences d\u2019instructions. A la diff\xe9rence de la structure ",(0,t.jsx)(n.code,{children:"If...Else...End"}),", la structure ",(0,t.jsx)(n.code,{children:"Case of...Else...End case"})," peut tester un nombre illimit\xe9 d\u2019expressions bool\xe9ennes et ex\xe9cuter la s\xe9quence d\u2019instructions correspondant \xe0 la valeur TRUE."]}),"\n",(0,t.jsxs)(n.p,{children:["Chaque expression bool\xe9enne d\xe9bute par le caract\xe8re deux points (",(0,t.jsx)(n.code,{children:":"}),"). La combinaison de deux points et d\u2019une expression bool\xe9enne est appel\xe9e un cas. Par exemple, la ligne suivante est un cas :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:":(bValidate=1)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Seules les instructions suivant le premier cas TRUE (et ce, jusqu\u2019au cas suivant) seront ex\xe9cut\xe9es. Si aucun des cas n\u2019est TRUE, aucune instruction n\u2019est ex\xe9cut\xe9e (s'il n'y a pas d'\xe9l\xe9ment ",(0,t.jsx)(n.code,{children:"Else"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez placer une instruction Else apr\xe8s le dernier cas. Si tous les cas sont FALSE, les instructions suivant le ",(0,t.jsx)(n.code,{children:"Else"})," seront ex\xe9cut\xe9es."]}),"\n",(0,t.jsx)(n.h3,{id:"exemple-1",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple teste une variable num\xe9rique et affiche une bo\xeete de dialogue d\u2019alerte comportant un simple mot :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ... Case of\n    :(vResult=1) //Tester si le chiffre est 1\n       ALERT("One.") //Si le chiffre est 1, afficher une alerte\n    :(vResult=2) //Tester si le chiffre est 2\n       ALERT("Two.") //Si le chiffre est 2, afficher une alerte\n    :(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n //d\xe9claration(s)\n End case //Si le chiffre est 2, afficher une alerte\n    :(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n //statement(s)\n End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A titre de comparaison, voici la version avec ",(0,t.jsx)(n.code,{children:"If...Else...End if"})," de la m\xeame m\xe9thode :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Test if the number is 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    Else\n       If(vResult=3) //Test if the number is 3\n          ALERT("Three.") //If it is 3, display an alert\n       Else //If it is not 1, 2, or 3, display an alert\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") If(vResult=1) //Tester si le chiffre est 1\n    ALERT("One.") //Si le chiffre est 1, afficher une alerte\n Else\n    If(vResult=2) //Tester si le chiffre est 2\n       ALERT("Two.") //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 2, afficher une alerte\n    Else\n    If(vResult=3) //Tester si le chiffre est 3\n       ALERT("Three.") //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si le chiffre est 3, afficher une alerte\n    Else //Si le chiffre n\'est pas 1, 2 ou 3, afficher une alerte\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Rappelez-vous qu\u2019avec une structure de type ",(0,t.jsx)(n.code,{children:"Case of...Else...End case"}),", seul le premier cas TRUE rencontr\xe9 est ex\xe9cut\xe9. M\xeame si d\u2019autres cas sont TRUE, seules les instructions suivant le premier cas TRUE seront prises en compte."]}),"\n",(0,t.jsx)(n.p,{children:"Par cons\xe9quent, lorsque vous testez dans la m\xeame m\xe9thode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais ex\xe9cut\xe9s. Par exemple, si vous souhaitez traiter le cas simple (vResult=1) et le cas complexe (vResult=1) & (vCondition#2) et que vous structurez la m\xe9thode de la mani\xe8re suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"... les instructions associ\xe9es au cas complexe ne seront jamais ex\xe9cut\xe9es. En effet, pour que ce cas soit TRUE, ses deux conditions bool\xe9ennes doivent l\u2019\xeatre. Or, la premi\xe8re condition est celle du cas simple situ\xe9 pr\xe9c\xe9demment. Lorsqu'elle est TRUE, le cas simple est ex\xe9cut\xe9 et 4D sort de la structure conditionnelle, sans \xe9valuer le cas complexe. Pour que ce type de m\xe9thode fonctionne, vous devez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' Case of\n    :(vResult=1) //Test if the number is 1\n       ALERT("One.") //If it is 1, display an alert\n    :(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    :(vResult=3) //Test if the number is 3\n       ALERT("Three.") //If it is 3, display an alert\n    Else //If it is not 1, 2, or 3, display an alert\n       ALERT("It was not one, two, or three.")\n End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Astuce :"})," Il n'est pas obligatoire que des instructions soient ex\xe9cut\xe9es dans toutes les alternatives. Lorsque vous d\xe9veloppez un algorithme, ou lorsque vous poursuivez un but pr\xe9cis, rien ne vous emp\xeache d'\xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    :(Expression_bool\xe9enne)\n    :(Expression_bool\xe9enne)\n      ...\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n"})}),"\n",(0,t.jsx)(n.p,{children:"ou :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    :(Expression_bool\xe9enne)\n    :(Expression_bool\xe9enne)\n        instruction(s)\n       ...\n\n    :(Expression_bool\xe9enne)\n       instruction(s)\n    Else\n       instruction(s)\n End case\n"})}),"\n",(0,t.jsx)(n.p,{children:"ou :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" Case of\n    Else\n       instruction(s)\n End case\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,n,s)=>{var t=s(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,r={},a=null,u=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:a,ref:u,props:r,_owner:o.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(296540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);