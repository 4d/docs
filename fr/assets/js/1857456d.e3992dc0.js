/*! For license information please see 1857456d.e3992dc0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1015],{691127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(474848),s=t(28453);const i={id:"interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9"},l=void 0,o={id:"Concepts/interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9",description:"Les applications 4D fonctionnent en mode interpr\xe9t\xe9 ou en mode compil\xe9 :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/fr/18/Concepts/interpreted-compiled",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9"},sidebar:"docs",previous:{title:"Gestion des erreurs",permalink:"/docs/fr/18/Concepts/error-handling"},next:{title:"Composants",permalink:"/docs/fr/18/Concepts/components"}},a={},d=[{value:"Diff\xe9rences entre le code interpr\xe9t\xe9 et le code compil\xe9",id:"diff\xe9rences-entre-le-code-interpr\xe9t\xe9-et-le-code-compil\xe9",level:2},{value:"Utiliser les directives du compilateur avec l&#39;interpr\xe9teur",id:"utiliser-les-directives-du-compilateur-avec-linterpr\xe9teur",level:2},{value:"Utiliser des pointeurs pour \xe9viter les retypages",id:"utiliser-des-pointeurs-pour-\xe9viter-les-retypages",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Les applications 4D fonctionnent en mode ",(0,r.jsx)(n.strong,{children:"interpr\xe9t\xe9"})," ou en mode ",(0,r.jsx)(n.strong,{children:"compil\xe9"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"En mode interpr\xe9t\xe9, les d\xe9clarations sont lues et traduites en langage machine lorsqu'elles sont ex\xe9cut\xe9es. Vous pouvez ajouter ou modifier le code l\xe0 o\xf9 vous le souhaitez, l'application se met \xe0 jour automatiquement."}),"\n",(0,r.jsx)(n.li,{children:"En mode compil\xe9, toutes les m\xe9thodes sont lues et traduites une seule fois, lors de la compilation. Par la suite, l'application contient uniquement des instructions au niveau de l'assemblage, il n'est donc plus possible de modifier le code."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les avantages procur\xe9s par le compilateur sont les suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vitesse :"})," votre base de donn\xe9es s'ex\xe9cute de 3 \xe0 1000 fois plus vite."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"V\xe9rification du code"})," : la coh\xe9rence interne du code de votre application de base de donn\xe9es est enti\xe8rement contr\xf4l\xe9e. Les conflits de logique et de syntaxe sont d\xe9tect\xe9s."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Protection :"})," une fois votre base compil\xe9e, vous pouvez en supprimer le code interpr\xe9t\xe9. Alors, la base compil\xe9e dispose des m\xeames fonctionnalit\xe9s que la base originale, \xe0 la diff\xe9rence pr\xe8s que la structure et les m\xe9thodes ne peuvent plus \xeatre visualis\xe9es ni modifi\xe9es d\xe9lib\xe9r\xe9ment ou par inadvertance."]}),"\n",(0,r.jsx)(n.li,{children:'**Application ind\xe9pendantes "double-cliquables" **: une base compil\xe9e peut \xe9galement \xeatre transform\xe9e en application ind\xe9pendante (sous Windows, des fichiers ".EXE") comportant sa propre ic\xf4ne.'}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ex\xe9cution en mode pr\xe9emptif"})," : seul le code compil\xe9 peut \xeatre ex\xe9cut\xe9 dans un process pr\xe9emptif."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"diff\xe9rences-entre-le-code-interpr\xe9t\xe9-et-le-code-compil\xe9",children:"Diff\xe9rences entre le code interpr\xe9t\xe9 et le code compil\xe9"}),"\n",(0,r.jsx)(n.p,{children:"Bien que l'application fonctionnera de la m\xeame mani\xe8re en modes interpr\xe9t\xe9 et compil\xe9, il est important de connaitre les diff\xe9rences que l'on peut rencontrer pendant la saisie du code qui sera compil\xe9. L'interpr\xe9teur de 4D est g\xe9n\xe9ralement plus souple que le compilateur."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Compil\xe9"}),(0,r.jsx)(n.th,{children:"Interpr\xe9t\xe9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vous ne devez pas avoir une m\xe9thode qui aurait le m\xeame nom qu\u2019une variable."}),(0,r.jsx)(n.td,{children:"Aucune erreur n'est g\xe9n\xe9r\xe9e, mais la m\xe9thode est prioritaire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Toutes les variables doivent \xeatre typ\xe9es, soit via une directive de compilateur (ex : ",(0,r.jsx)(n.code,{children:"C_ENTIER LONG"}),"), soit via le compilateur au moment de la compilation."]}),(0,r.jsx)(n.td,{children:"Les variables peuvent \xeatre typ\xe9es \xe0 la vol\xe9e (non recommand\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vous ne pouvez pas modifier le type d'une variable ou d'un tableau."}),(0,r.jsx)(n.td,{children:"La modification du type d'une variable ou d'un tableau est possible (non recommand\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vous ne pouvez pas convertir un tableau simple en tableau \xe0 deux dimensions, et vice-versa."}),(0,r.jsx)(n.td,{children:"Possible"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bien que le compilateur d\xe9duise le type des variables si n\xe9cessaire, il est conseill\xe9 de d\xe9clarer le type des variables \xe0 l'aide des directives de compilation lorsque le type de donn\xe9es est ambigu, en particulier dans un formulaire."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["La fonction ",(0,r.jsx)(n.code,{children:"Indefinie"})," retournera toujours Faux. Les variables sont toujours d\xe9finies."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'Si vous avez coch\xe9 la propri\xe9t\xe9 "Peut \xeatre ex\xe9cut\xe9e dans un process pr\xe9emptif" pour la m\xe9thode, le code ne doit pas appeler de commandes thread-unsafe ou d\'autres m\xe9thodes thread-unsafe.'}),(0,r.jsx)(n.td,{children:"Les propri\xe9t\xe9s du process pr\xe9emptif sont ignor\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["La commande ",(0,r.jsx)(n.code,{children:"APPELER 4D"})," est n\xe9cessaire pour appeler des boucles sp\xe9cifiques"]}),(0,r.jsx)(n.td,{children:"Il est toujours possible d'interrompre 4D"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"utiliser-les-directives-du-compilateur-avec-linterpr\xe9teur",children:"Utiliser les directives du compilateur avec l'interpr\xe9teur"}),"\n",(0,r.jsx)(n.p,{children:"Les directives de compilateur ne sont pas requises pour les bases non compil\xe9es. L'interpr\xe9teur type automatiquement chaque variable selon son utilisation dans la d\xe9claration, et une variable peut \xeatre retyp\xe9e librement dans la base."}),"\n",(0,r.jsx)(n.p,{children:"Gr\xe2ce \xe0 cet aspect flexible, il est possible qu'une base agisse diff\xe9remment en modes interpr\xe9t\xe9 et compil\xe9."}),"\n",(0,r.jsx)(n.p,{children:"Par exemple, si vous \xe9crivez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_ENTIER LONG(MyInt)\n"})}),"\n",(0,r.jsx)(n.p,{children:"et ailleurs dans la base, vous \xe9crivez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"MyInt:=3.1416\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Dans cet exemple, ",(0,r.jsx)(n.code,{children:"MyInt"})," se voit assigner la m\xeame valeur (3) dans les modes interpr\xe9t\xe9 et compil\xe9, \xe9tant donn\xe9 que la directive du compilateur est interpr\xe9t\xe9e ",(0,r.jsx)(n.em,{children:"avant"})," la d\xe9claration d'affectation."]}),"\n",(0,r.jsx)(n.p,{children:"L'interpr\xe9teur 4D utilise des directives de compilateur pour typer les variables. Lorsque l'interpr\xe9teur rencontre une directive de compilateur, il type la variable en fonction de la directive. Si une d\xe9claration ult\xe9rieure tente d'affecter une valeur incorrecte (ex : affecter une valeur alphanum\xe9rique \xe0 une variable num\xe9rique), l'affectation n'aura pas lieu et g\xe9n\xe9rera une erreur."}),"\n",(0,r.jsx)(n.p,{children:"L'ordre d'apparition des deux d\xe9clarations importe peu au compilateur, car il scanne d'abord la base dans son int\xe9gralit\xe9 pour les directives du compilateur. En revanche, l'interpr\xe9teur n'est pas syst\xe9matique. Il interpr\xe8te les d\xe9clarations dans leur ordre d'ex\xe9cution. Cet ordre peut \xe9videmment changer d'une session \xe0 l'autre, en fonction de ce que fait l'utilisateur. C'est pourquoi il est important de concevoir votre base de donn\xe9es afin que vos directives de compilateur s'ex\xe9cutent avant n'importe quelle d\xe9claration contenant des variables d\xe9clar\xe9es."}),"\n",(0,r.jsx)(n.h2,{id:"utiliser-des-pointeurs-pour-\xe9viter-les-retypages",children:"Utiliser des pointeurs pour \xe9viter les retypages"}),"\n",(0,r.jsx)(n.p,{children:"Il n\u2019est pas possible de retyper une variable. Il est, en revanche, tout \xe0 fait possible de faire pointer un pointeur successivement sur des variables de type diff\xe9rent. Par exemple, le code suivant s'applique aussi bien dans le mode interpr\xe9t\xe9 que dans le mode compil\xe9 :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //texte cible pour le pointeur\n$p->:="Wesson" //assigne une valeur texte\n\n$p:=->$age  \n// nouvelle cible de type diff\xe9rent pour le pointeur\n$p->:=55 //assigne une valeur num\xe9rique\n'})}),"\n",(0,r.jsx)(n.p,{children:"Imaginez une fonction qui retourne la longueur (nombre de caract\xe8res) de valeurs de tout type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // Calc_Length (combien de caract\xe8res)\n  // $1 = pointeur vers un type de variable flexible, num\xe9rique, text, heure, bool\xe9en\n\nC_POINTER($1)\nC_TEXT($result)  \nC_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n"})}),"\n",(0,r.jsx)(n.p,{children:"La m\xe9thode peut alors \xeatre appel\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length(->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);