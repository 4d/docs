"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42881],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?n.createElement(h,l(l({ref:r},u),{},{components:t})):n.createElement(h,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},464278:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});t(667294);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={id:"error-handling",title:"Error handling"},s=void 0,i={unversionedId:"Concepts/error-handling",id:"version-20-R4/Concepts/error-handling",title:"Error handling",description:"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l'ex\xe9cution, ainsi que pour l'analyse de leurs conditions.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/fr/20-R4/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Control flow",permalink:"/docs/fr/20-R4/Concepts/control-flow"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/fr/20-R4/Concepts/interpreted-compiled"}},d={},u=[{value:"Erreur ou statut",id:"erreur-ou-statut",level:2},{value:"Installer une m\xe9thode de gestion des erreurs",id:"installer-une-m\xe9thode-de-gestion-des-erreurs",level:2},{value:"Port\xe9e et composants",id:"port\xe9e-et-composants",level:3},{value:"G\xe9rer les erreurs dans une m\xe9thode",id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode",level:3},{value:"Exemple",id:"exemple",level:4},{value:"Utiliser une m\xe9thode de gestion des erreurs vide",id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide",level:3},{value:"Try(expression)",id:"tryexpression",level:2},{value:"Exemples",id:"exemples",level:3}],p={toc:u};function c(e){var{components:r}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l'ex\xe9cution, ainsi que pour l'analyse de leurs conditions."),(0,n.kt)("p",null,"La gestion des erreurs r\xe9pond \xe0 deux besoins principaux :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rechercher et corriger les \xe9ventuels bugs et erreurs dans votre code pendant la phase de d\xe9veloppement,"),(0,n.kt)("li",{parentName:"ul"},"d\xe9tecter et r\xe9cup\xe9rer des erreurs inattendues dans les applications d\xe9ploy\xe9es; vous pouvez notamment remplacer les bo\xeetes de dialogue d'erreur syst\xe8me (disque plein, fichier manquant, etc.) par votre propre interface.")),(0,n.kt)("p",null,"Basically, there are two ways to handle errors in 4D. You can ",(0,n.kt)("a",a({parentName:"p"},{href:"#installing-an-error-handling-method"}),"install an error-handling method"),", or write a ",(0,n.kt)("a",a({parentName:"p"},{href:"#tryexpression"}),(0,n.kt)("inlineCode",{parentName:"a"},"Try()")," keyword")," before pieces of code that call a function, method, or expression that can throw an error."),(0,n.kt)("admonition",a({},{title:"Bonne pratique",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Il est fortement recommand\xe9 d'installer une m\xe9thode globale de gestion des erreurs sur 4D Server, pour tout le code s'ex\xe9cutant sur le serveur. Lorsque 4D Server ne fonctionne pas ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R4/Admin/cli"}),"headless")," (c'est-\xe0-dire qu'il est lanc\xe9 avec sa ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R4/ServerWindow/overview"}),"fen\xeatre d'administration"),"), cette m\xe9thode permet d'\xe9viter l'affichage de bo\xeetes de dialogue sur la machine serveur. En mode headless, les erreurs sont enregistr\xe9es dans le fichier ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20-R4/Debugging/debugLogFiles#4ddebuglogtxt-standard"}),"4DDebugLog")," pour une analyse plus approfondie.")),(0,n.kt)("h2",a({},{id:"erreur-ou-statut"}),"Erreur ou statut"),(0,n.kt)("p",null,"De nombreuses fonctions de classe 4D, telles que ",(0,n.kt)("inlineCode",{parentName:"p"},"entity.save()")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", retournent un objet ",(0,n.kt)("em",{parentName:"p"},"status"),". Cet objet permet de stocker les erreurs \"pr\xe9visibles\" dans le contexte d'ex\xe9cution, telles qu'un mot de passe invalide, une entit\xe9 verrouill\xe9e, etc., qui ne stoppe pas l'ex\xe9cution du programme. Cette cat\xe9gorie d'erreurs peut \xeatre g\xe9r\xe9e par du code habituel."),(0,n.kt)("p",null,'D\'autres erreurs "impr\xe9visibles" peuvent inclure une erreur en \xe9criture sur le disque, une panne de r\xe9seau ou toute interruption inattendue. This category of errors generates exceptions and needs to be handled through an error-handling method or a ',(0,n.kt)("inlineCode",{parentName:"p"},"Try()")," keyword."),(0,n.kt)("h2",a({},{id:"installer-une-m\xe9thode-de-gestion-des-erreurs"}),"Installer une m\xe9thode de gestion des erreurs"),(0,n.kt)("p",null,"Dans 4D, toutes les erreurs peuvent \xeatre d\xe9tect\xe9es et trait\xe9es par des m\xe9thodes projet sp\xe9cifiques, appel\xe9es ",(0,n.kt)("strong",{parentName:"p"},"m\xe9thodes de gestion des erreurs")," (ou ",(0,n.kt)("strong",{parentName:"p"},"m\xe9thodes d'interception des erreurs"),")."),(0,n.kt)("p",null,"Une fois install\xe9s, les gestionnaires d'erreurs sont automatiquement appel\xe9s en mode interpr\xe9t\xe9 ou compil\xe9 en cas d'erreur dans l'application 4D ou l'un de ses composants. Un gestionnaire d'erreur diff\xe9rent peut \xeatre appel\xe9 en fonction du contexte d'ex\xe9cution (voir ci-dessous)."),(0,n.kt)("p",null,"Pour ",(0,n.kt)("em",{parentName:"p"},"installer")," une m\xe9thode projet de gestion des erreurs, il suffit d'appeler la commande ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," avec le nom de la m\xe9thode de projet et (en option) la port\xe9e comme param\xe8tres. Par exemple :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Installe une m\xe9thode locale de gestion des erreurs\n')),(0,n.kt)("p",null,"Pour arr\xeater d'intercepter les erreurs dans un contexte d'ex\xe9cution et rendre la main, appelez ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," avec une cha\xeene vide :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) //rend le contr\xf4le au process local\n')),(0,n.kt)("p",null,"La commande  ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page704.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Method called on error"))," permet de conna\xeetre le nom de la m\xe9thode install\xe9e par ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," pour le process courant. Cela est particuli\xe8rement utile dans le contexte du code g\xe9n\xe9rique car il vous permet de modifier temporairement puis de restaurer la m\xe9thode de capture d'erreur :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //Si le document ne peut pas \xeatre ouvert, une erreur est g\xe9n\xe9r\xe9e\n $ref:=Open document("MyDocument")\n  //R\xe9installation de la m\xe9thode pr\xe9c\xe9dente\n ON ERR CALL($methCurrent;ek local)\n\n')),(0,n.kt)("h3",a({},{id:"port\xe9e-et-composants"}),"Port\xe9e et composants"),(0,n.kt)("p",null,"Une m\xe9thode de gestion des erreurs peut \xeatre d\xe9finie pour diff\xe9rents contextes d'ex\xe9cution :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pour le ",(0,n.kt)("strong",{parentName:"li"},"process courant"),"- un gestionnaire d'erreurs local ne sera appel\xe9 que pour les erreurs survenues dans le process courant du projet courant,"),(0,n.kt)("li",{parentName:"ul"},"pour l'",(0,n.kt)("strong",{parentName:"li"},"ensemble de l'application"),"- un gestionnaire d'erreurs global sera appel\xe9 pour toutes les erreurs qui se sont produites dans le contexte d'ex\xe9cution de l'application du projet courant,"),(0,n.kt)("li",{parentName:"ul"},"depuis les ",(0,n.kt)("strong",{parentName:"li"},"composants"),"- ce gestionnaire d'erreurs est d\xe9fini dans un projet h\xf4te et sera appel\xe9 pour toutes les erreurs survenues dans chaque composant lorsqu'elles n'ont pas d\xe9j\xe0 \xe9t\xe9 intercept\xe9es par la m\xe9thode de gestion d'erreurs du composant.")),(0,n.kt)("p",null,"Exemples :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Installe une m\xe9thode de gestion des erreurs locale\nON ERR CALL("globalHandler";ek global) //Installe une m\xe9thode de gestion des erreurs globale\nON ERR CALL("componentHandler";ek erreurs des composants) //Installe une m\xe9thode de gestion des erreurs pour les composants\n')),(0,n.kt)("p",null,"Vous pouvez installer un gestionnaire d'erreurs global qui servira de \"fallback\" et des gestionnaires d'erreurs locaux sp\xe9cifiques pour certains process. Un gestionnaire d'erreur global est \xe9galement utile sur le serveur pour \xe9viter l'affichage de dialogues d'erreur sur le serveur lorsqu'il est ex\xe9cut\xe9 avec interface."),(0,n.kt)("p",null,"Vous pouvez d\xe9finir une seule m\xe9thode de gestion des erreurs pour l'ensemble de l'application ou diff\xe9rentes m\xe9thodes par module d'application. Toutefois, une seule m\xe9thode peut \xeatre install\xe9e par contexte d'ex\xe9cution et par projet."),(0,n.kt)("p",null,"Lorsqu'une erreur se produit, une seule m\xe9thode est appel\xe9e, comme le montre le sch\xe9ma suivant :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gestion des erreurs",src:t(421385).Z,width:"1195",height:"578"})),(0,n.kt)("h3",a({},{id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode"}),"G\xe9rer les erreurs dans une m\xe9thode"),(0,n.kt)("p",null,"Dans une m\xe9thode de gestion d'erreur personnalis\xe9e, vous avez acc\xe8s \xe0 plusieurs \xe9l\xe9ments d'information qui vous aideront \xe0 identifier l'erreur :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"des variables syst\xe8me d\xe9di\xe9es :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (entier long): Code d'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method")," (texte) : nom de la m\xe9thode ayant engendr\xe9 l'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (entier long) : Num\xe9ro de ligne de la m\xe9thode ayant g\xe9n\xe9r\xe9 l'erreur"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (texte) : formule du code 4D (texte brut) \xe0 l'origine de l'erreur.")))),(0,n.kt)("admonition",a({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"4D g\xe8re automatiquement un certain nombre de variables appel\xe9es ",(0,n.kt)("strong",{parentName:"p"},"variables syst\xe8me"),", r\xe9pondant \xe0 diff\xe9rents besoins. Voir le manuel ",(0,n.kt)("em",{parentName:"p"},"4D Language Reference"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"la commande ",(0,n.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Last errors"))," qui renvoie une collection de la pile actuelle des erreurs survenues dans l'application 4D. Vous pouvez \xe9galement utiliser la commande ",(0,n.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," qui renvoie les m\xeames informations sous forme de tableaux."),(0,n.kt)("li",{parentName:"ul"},"la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"Get call chain")," qui retourne une collection d'objets d\xe9crivant chaque \xe9tape de la cha\xeene d'appel de la m\xe9thode dans le process courant.")),(0,n.kt)("h4",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Voici un syst\xe8me de gestion des erreurs simple :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'//installer la m\xe9thode de gestion d\'erreur\nON ERR CALL("errorMethod")\n //... ex\xe9cuter le code\n ON ERR CALL("") //redonner le contr\xf4le \xe0 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// m\xe9thode projet errorMethod\n If(Error#1006) //ceci n\'est pas une interruption g\xe9n\xe9r\xe9e par l\'utilisateur\n    ALERT("L\'erreur "+String(Error)+" s\'est produite". Le code en question est : \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",a({},{id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide"}),"Utiliser une m\xe9thode de gestion des erreurs vide"),(0,n.kt)("p",null,"Si vous souhaitez cacher la boite de dialogue d'erreur standard, vous pouvez installer une m\xe9thode de gestion d'erreurs vide. La variable syst\xe8me ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," peut \xeatre test\xe9e dans n'importe quelle m\xe9thode, c'est-\xe0-dire en dehors de la m\xe9thode de gestion d'erreurs :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod existe mais est vide\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL.("")\n')),(0,n.kt)("h2",a({},{id:"tryexpression"}),"Try(expression)"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Try(expression)")," statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using ",(0,n.kt)("inlineCode",{parentName:"p"},"Try(expression)")," provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method."),(0,n.kt)("p",null,"The formal syntax of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Try(expression)")," statement is:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"\nTry (expression) : any | Undefined\n\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"expression")," can be any valid expression."),(0,n.kt)("p",null,"If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an ",(0,n.kt)("a",a({parentName:"p"},{href:"#installing-an-error-handling-method"}),"error-handling method")," was installed or not before the call to ",(0,n.kt)("inlineCode",{parentName:"p"},"Try()"),". If ",(0,n.kt)("em",{parentName:"p"},"expression")," returns a value, ",(0,n.kt)("inlineCode",{parentName:"p"},"Try()")," returns the last evaluated value, otherwise it returns ",(0,n.kt)("inlineCode",{parentName:"p"},"Undefined"),"."),(0,n.kt)("p",null,"You can handle the error(s) using the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Last errors"))," command. If ",(0,n.kt)("em",{parentName:"p"},"expression")," throws an error within a stack of ",(0,n.kt)("inlineCode",{parentName:"p"},"Try()")," calls, the execution flow stops and returns to the latest executed ",(0,n.kt)("inlineCode",{parentName:"p"},"Try()")," (the first found back in the call stack)."),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"If an ",(0,n.kt)("a",a({parentName:"p"},{href:"#installing-an-error-handling-method"}),"error-handling method")," is installed by ",(0,n.kt)("em",{parentName:"p"},"expression"),", it is called in case of error.")),(0,n.kt)("h3",a({},{id:"exemples"}),"Exemples"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You want to display the contents of a file if the file can be open without error, and if its contents can be read. Vous pouvez \xe9crire :")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $text : Text\nvar $file : 4D.File := File("/RESOURCES/myFile.txt")\nvar $fileHandle : 4D.FileHandle := Try($file.open())\nIf ($fileHandle # Null)\n  $text:=Try($fileHandle.readText()) || "Error reading the file"\nEnd if\n')),(0,n.kt)("ol",a({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"You want to handle the divide by zero error. In this case, you want to return 0 and throw an error:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'function divide( $p1: real; $p2: real)-> $result: real\n  if ($p2=0)\n     $result:=0 //only for clarity (0 is the default for reals)\n     throw(-12345; "Division by zero")\n  else\n    $result:=$p1/$p2\n  end if\n\nfunction test()\n  $result:=Try(divide($p1;$p2))\n  If (Last errors # null)\n    ALERT("Error")\n  End if\n\n')),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"You want to handle both ",(0,n.kt)("a",a({parentName:"li"},{href:"#error-or-status"}),"predictable and non-predictable")," errors:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $e:=ds.Employee.new()\n$e.name:="Smith"\n$status:=Try($e.save()) //catch predictable and non-predictable errors\nIf ($status.success)\n   ALERT( "Success")\nElse\n   ALERT( "Error: "+JSON Stringify($status.errors))\nEnd if\n\n')))}c.isMDXComponent=!0},421385:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"}}]);