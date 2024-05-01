"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66752],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},515147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9"},o=void 0,p={unversionedId:"Concepts/interpreted-compiled",id:"version-20-R5/Concepts/interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9",description:"4D applications can work in interpreted or compiled mode:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/fr/Concepts/interpreted-compiled",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"interpreted-compiled",title:"Modes interpr\xe9t\xe9 et compil\xe9"},sidebar:"docs",previous:{title:"Gestion des erreurs",permalink:"/docs/fr/Concepts/error-handling"},next:{title:"Composants",permalink:"/docs/fr/Concepts/components"}},s={},u=[{value:"Diff\xe9rences entre le code interpr\xe9t\xe9 et le code compil\xe9",id:"diff\xe9rences-entre-le-code-interpr\xe9t\xe9-et-le-code-compil\xe9",level:2},{value:"Utiliser les directives du compilateur avec l&#39;interpr\xe9teur",id:"utiliser-les-directives-du-compilateur-avec-linterpr\xe9teur",level:2},{value:"Utiliser des pointeurs pour \xe9viter les retypages",id:"utiliser-des-pointeurs-pour-\xe9viter-les-retypages",level:2}],c={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D applications can work in ",(0,r.kt)("strong",{parentName:"p"},"interpreted")," or ",(0,r.kt)("strong",{parentName:"p"},"compiled")," mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En mode interpr\xe9t\xe9, les d\xe9clarations sont lues et traduites en langage machine lorsqu'elles sont ex\xe9cut\xe9es. Vous pouvez ajouter ou modifier le code l\xe0 o\xf9 vous le souhaitez, l'application se met \xe0 jour automatiquement."),(0,r.kt)("li",{parentName:"ul"},"En mode compil\xe9, toutes les m\xe9thodes sont lues et traduites une seule fois, lors de la compilation. Par la suite, l'application contient uniquement des instructions au niveau de l'assemblage, il n'est donc plus possible de modifier le code.")),(0,r.kt)("p",null,"Les avantages procur\xe9s par le compilateur sont les suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Speed"),": Your application can run from 3 to 1,000 times faster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code checking"),": Your application is scanned for the consistency of code. Les conflits de logique et de syntaxe sont d\xe9tect\xe9s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Protection"),": Once your application is compiled, you can delete the interpreted code. Alors, l'application compil\xe9e dispose des m\xeames fonctionnalit\xe9s que la base originale, \xe0 la diff\xe9rence pr\xe8s que la structure et les m\xe9thodes ne peuvent plus \xeatre visualis\xe9es ni modifi\xe9es d\xe9lib\xe9r\xe9ment ou par inadvertance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stand-alone double-clickable applications"),": compiled applications can also be transformed into stand-alone applications with their own icon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Preemptive mode"),": only compiled code can be executed in preemptive processes.")),(0,r.kt)("h2",a({},{id:"diff\xe9rences-entre-le-code-interpr\xe9t\xe9-et-le-code-compil\xe9"}),"Diff\xe9rences entre le code interpr\xe9t\xe9 et le code compil\xe9"),(0,r.kt)("p",null,"Bien que l'application fonctionnera de la m\xeame mani\xe8re en modes interpr\xe9t\xe9 et compil\xe9, il est important de connaitre les diff\xe9rences que l'on peut rencontrer pendant la saisie du code qui sera compil\xe9. L'interpr\xe9teur de 4D est g\xe9n\xe9ralement plus souple que le compilateur."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Compil\xe9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Interpr\xe9t\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vous ne devez pas avoir une m\xe9thode qui aurait le m\xeame nom qu\u2019une variable."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Aucune erreur n'est g\xe9n\xe9r\xe9e, mais la m\xe9thode est prioritaire")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"All variables must by typed, either through a declaration (using ",(0,r.kt)("inlineCode",{parentName:"td"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"#Declare"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"Function")," keywords), or by the compiler at compilation time."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Les variables peuvent \xeatre typ\xe9es \xe0 la vol\xe9e (non recommand\xe9)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vous ne pouvez pas modifier le type d'une variable ou d'un tableau."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La modification du type d'une variable ou d'un tableau est possible (non recommand\xe9)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vous ne pouvez pas convertir un tableau simple en tableau \xe0 deux dimensions, et vice-versa."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Possible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Although the compiler will type the variable for you, you should specify the data type of a variable by using declarations where the data type is ambiguous, such as in a form."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Undefined")," function always returns False for variables. Les variables sont toujours d\xe9finies."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'Si vous avez coch\xe9 la propri\xe9t\xe9 "Peut \xeatre ex\xe9cut\xe9e dans un process pr\xe9emptif" pour la m\xe9thode, le code ne doit pas appeler de commandes thread-unsafe ou d\'autres m\xe9thodes thread-unsafe.'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Les propri\xe9t\xe9s du process pr\xe9emptif sont ignor\xe9es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,r.kt)("inlineCode",{parentName:"td"},"IDLE")," command is necessary to call 4D in specific loops"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Il est toujours possible d'interrompre 4D")))),(0,r.kt)("h2",a({},{id:"utiliser-les-directives-du-compilateur-avec-linterpr\xe9teur"}),"Utiliser les directives du compilateur avec l'interpr\xe9teur"),(0,r.kt)("p",null,"Les directives de compilateur ne sont pas requises pour les applications non compil\xe9es. L'interpr\xe9teur type automatiquement chaque variable selon son utilisation dans la d\xe9claration, et une variable peut \xeatre retyp\xe9e librement dans le projet d'application."),(0,r.kt)("p",null,"Gr\xe2ce \xe0 cet aspect flexible, il est possible qu'une application agisse diff\xe9remment en modes interpr\xe9t\xe9 et compil\xe9."),(0,r.kt)("p",null,"Par exemple, si vous \xe9crivez :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var MyInt : Integer\n")),(0,r.kt)("p",null,"et ailleurs dans l'application, vous \xe9crivez :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyInt")," is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted ",(0,r.kt)("em",{parentName:"p"},"prior")," to the assignment statement."),(0,r.kt)("p",null,"L'interpr\xe9teur 4D utilise des directives de compilateur pour typer les variables. Lorsque l'interpr\xe9teur rencontre une directive de compilateur, il type la variable en fonction de la directive. Si une d\xe9claration ult\xe9rieure tente d'affecter une valeur incorrecte (ex : affecter une valeur alphanum\xe9rique \xe0 une variable num\xe9rique), l'affectation n'aura pas lieu et g\xe9n\xe9rera une erreur."),(0,r.kt)("p",null,"L'ordre d'apparition des deux d\xe9clarations importe peu au compilateur, car il scanne d'abord le projet dans son int\xe9gralit\xe9 pour les directives du compilateur. En revanche, l'interpr\xe9teur n'est pas syst\xe9matique. Il interpr\xe8te les d\xe9clarations dans leur ordre d'ex\xe9cution. Cet ordre peut \xe9videmment changer d'une session \xe0 l'autre, en fonction de ce que fait l'utilisateur. C'est pourquoi il est important de concevoir votre projet afin que vos directives de compilateur s'ex\xe9cutent avant n'importe quelle d\xe9claration contenant des variables d\xe9clar\xe9es."),(0,r.kt)("h2",a({},{id:"utiliser-des-pointeurs-pour-\xe9viter-les-retypages"}),"Utiliser des pointeurs pour \xe9viter les retypages"),(0,r.kt)("p",null,"Il n\u2019est pas possible de retyper une variable. Il est, en revanche, tout \xe0 fait possible de faire pointer un pointeur successivement sur des variables de type diff\xe9rent. Par exemple, le code suivant s'applique aussi bien dans le mode interpr\xe9t\xe9 que dans le mode compil\xe9 :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $p : Pointer\nvar $name : Text\nvar $age : Integer\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //text target for the pointer\n$p->:="Wesson" //assigns a text value\n\n$p:=->$age  \n// new target of different type for the pointer\n$p->:=55 //assigns a number value\n')),(0,r.kt)("p",null,"Imaginez une fonction qui retourne la longueur (nombre de caract\xe8res) de valeurs de tout type."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (how many characters)\n  // $vp = pointer to flexible variable type, numeric, text, time, boolean\n\n#DECLARE($vp : Pointer) -> $length : Integer\nvar $result : Text  \n$result:=String($vp->)\n$length:=Length($result)\n")),(0,r.kt)("p",null,"La m\xe9thode peut alors \xeatre appel\xe9e :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n')))}d.isMDXComponent=!0}}]);