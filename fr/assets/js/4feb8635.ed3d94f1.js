"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87168],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=o,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return t?n.createElement(g,u(u({ref:r},p),{},{components:t})):n.createElement(g,u({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var l=2;l<a;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},481355:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>p});t(667294);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const u={id:"basics",title:"D\xe9bogage"},s=void 0,i={unversionedId:"Debugging/basics",id:"version-20-R5/Debugging/basics",title:"D\xe9bogage",description:"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/fr/Debugging/basics",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"basics",title:"D\xe9bogage"},sidebar:"docs",previous:{title:"Compilation",permalink:"/docs/fr/Project/compiler"},next:{title:"D\xe9bogueur",permalink:"/docs/fr/Debugging/debugger"}},l={},p=[{value:"Types d&#39;erreurs",id:"types-derreurs",level:2},{value:"Erreurs de saisie",id:"erreurs-de-saisie",level:3},{value:"Erreurs de syntaxe",id:"erreurs-de-syntaxe",level:3},{value:"Erreurs dans l&#39;Environnement",id:"erreurs-dans-lenvironnement",level:3},{value:"Erreurs de conception ou de logique",id:"erreurs-de-conception-ou-de-logique",level:3},{value:"Erreurs d&#39;ex\xe9cution",id:"erreurs-dex\xe9cution",level:3},{value:"Fen\xeatre d&#39;erreur de syntaxe",id:"fen\xeatre-derreur-de-syntaxe",level:2},{value:"D\xe9bogueur",id:"d\xe9bogueur",level:2},{value:"Ruptures/sauts",id:"rupturessauts",level:2}],d={toc:p};function c(e){var{components:r}=e,u=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,u,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !"),(0,n.kt)("p",null,"L'environnement de d\xe9veloppement 4D fournit plusieurs outils de d\xe9bogage pour tous les types d'erreurs."),(0,n.kt)("h2",o({},{id:"types-derreurs"}),"Types d'erreurs"),(0,n.kt)("h3",o({},{id:"erreurs-de-saisie"}),"Erreurs de saisie"),(0,n.kt)("p",null,"Les fautes de frappe sont d\xe9tect\xe9es par l'\xe9diteur de m\xe9thode. Elles sont affich\xe9es en rouge et des informations compl\xe9mentaires sont fournies en bas de la fen\xeatre. Voici une erreur de frappe :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"break-point",src:t(640624).Z,width:"1824",height:"980"})),(0,n.kt)("p",null,"Ces erreurs de frappe provoquent g\xe9n\xe9ralement des erreurs de syntaxe (dans l'image ci-dessus, le nom de la table est inconnu). Vous obtenez la description de l'erreur lorsque vous validez la ligne de code. Lorsque cela se produit, corrigez l'erreur de frappe et tapez Entr\xe9e pour valider la correction."),(0,n.kt)("h3",o({},{id:"erreurs-de-syntaxe"}),"Erreurs de syntaxe"),(0,n.kt)("p",null,"Certaines erreurs ne peuvent \xeatre d\xe9tect\xe9es que lorsque vous ex\xe9cutez la m\xe9thode. The ",(0,n.kt)("a",o({parentName:"p"},{href:"#syntax-error-window"}),"Syntax Error Window")," appears when an error occurs during code execution. Par exemple :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:t(918799).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"Expand the ",(0,n.kt)("strong",{parentName:"p"},"Details")," area to display the last error and its number."),(0,n.kt)("h3",o({},{id:"erreurs-dans-lenvironnement"}),"Erreurs dans l'Environnement"),(0,n.kt)("p",null,"Il peut arriver que la m\xe9moire soit insuffisante pour cr\xe9er une BLOB. Ou, lorsque vous acc\xe9dez \xe0 un document sur le disque, il se peut que ce document n'existe pas ou qu'il soit d\xe9j\xe0 ouvert par une autre application. Ces erreurs dans l'Environnementa ne sont pas directement dues \xe0 votre code ou \xe0 la fa\xe7on dont vous l'avez \xe9crit. Most of the time, these errors are easy to treat with an ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/Concepts/error-handling"}),"error catching method")," installed using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," command."),(0,n.kt)("h3",o({},{id:"erreurs-de-conception-ou-de-logique"}),"Erreurs de conception ou de logique"),(0,n.kt)("p",null,"Ce sont g\xe9n\xe9ralement les types d'erreurs les plus difficiles \xe0 trouver. \xc0 l'exception des erreurs de frappe, tous les types d'erreurs \xe9num\xe9r\xe9s ci-dessus sont, dans une certaine mesure, couverts par l'expression \"erreur de conception ou de logique\". Use the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/Debugging/debugger"}),"Debugger")," to detect them. Par exemple :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("em",{parentName:"li"},"syntax error")," may occur when you try to use a variable that is not yet initialized."),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("em",{parentName:"li"},"environmental error")," can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.")),(0,n.kt)("p",null,"Les erreurs de conception ou de logique comprennent \xe9galement des situations telles que :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A record is not properly updated because, while calling ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE RECORD"),", you forgot to first test whether or not the record was locked."),(0,n.kt)("li",{parentName:"ul"},"Une m\xe9thode ne fait pas exactement ce que vous attendez, car la pr\xe9sence d'un param\xe8tre facultatif n'est pas test\xe9e.")),(0,n.kt)("p",null,"Parfois, le morceau de code qui affiche l'erreur peut \xeatre diff\xe9rent du code qui est en fait \xe0 l'origine du probl\xe8me."),(0,n.kt)("h3",o({},{id:"erreurs-dex\xe9cution"}),"Erreurs d'ex\xe9cution"),(0,n.kt)("p",null,"En mode Application, vous pouvez obtenir des erreurs que vous ne voyez pas en mode interpr\xe9t\xe9. Voici un exemple :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"runtime-error",src:t(848602).Z,width:"662",height:"472"})),(0,n.kt)("p",null,"Pour trouver rapidement l'origine du probl\xe8me, rouvrez la version interpr\xe9t\xe9e du fichier de structure, ouvrez la m\xe9thode et allez \xe0 la ligne correspondante."),(0,n.kt)("h2",o({},{id:"fen\xeatre-derreur-de-syntaxe"}),"Fen\xeatre d'erreur de syntaxe"),(0,n.kt)("p",null,"La fen\xeatre d'erreur de syntaxe appara\xeet automatiquement lorsque l'ex\xe9cution d'une m\xe9thode est interrompue. Cela peut se produire lorsque :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"une erreur emp\xeache la poursuite de l'ex\xe9cution du code"),(0,n.kt)("li",{parentName:"ul"},"the method produces a false assertion (see the ",(0,n.kt)("inlineCode",{parentName:"li"},"ASSERT")," command)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:t(918799).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"La zone de texte sup\xe9rieure affiche un message d\xe9crivant l'erreur. La zone de texte inf\xe9rieure montre la ligne qui \xe9tait en cours d'ex\xe9cution lorsque l'erreur s'est produite ; la zone o\xf9 l'erreur s'est produite est mise en \xe9vidence. La section D\xe9tails d\xe9velopp\xe9e contient la \"pile\" des erreurs li\xe9es au processus."),(0,n.kt)("p",null,"La fen\xeatre d'erreur de syntaxe propose plusieurs options :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Edit"),": Stops all method execution. 4D bascule en mode D\xe9veloppement et la m\xe9thode comportant l'erreur s'ouvre dans l'\xe9diteur de code, ce qui vous permet de la corriger. Utilisez cette option lorsque vous reconnaissez imm\xe9diatement l'erreur et que vous pouvez la corriger sans autre forme de proc\xe8s.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trace"),": Enters Trace/Debugger mode. The ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/Debugging/debugger"}),"Debugger")," window is displayed. If the current line has only executed partially, you may have to click the ",(0,n.kt)("strong",{parentName:"p"},"Trace")," button several times.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Continue"),": Execution continues. La ligne contenant l'erreur peut \xeatre partiellement ex\xe9cut\xe9e, selon l'endroit o\xf9 se trouve l'erreur. Continuez avec prudence : l'erreur peut emp\xeacher le reste de votre m\xe9thode de s'ex\xe9cuter correctement. We recommend clicking ",(0,n.kt)("strong",{parentName:"p"},"Continue")," only if the error is in a trivial call (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"SET WINDOW TITLE"),") that does not prevent executing and testing the rest of your code."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the ",(0,n.kt)("strong",{parentName:"p"},"Continue")," button into an ",(0,n.kt)("strong",{parentName:"p"},"Ignore")," button. Hold down ",(0,n.kt)("strong",{parentName:"p"},"Alt")," (Windows) or ",(0,n.kt)("strong",{parentName:"p"},"Option")," (macOS) key and click the ",(0,n.kt)("strong",{parentName:"p"},"Continue")," button the first time it appears. The button label changes to ",(0,n.kt)("strong",{parentName:"p"},"Ignore")," if the dialog is called again for the same error.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Abort"),": Stops method execution and returns to the state before the method started executing:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Si une m\xe9thode formulaire ou m\xe9thode objet s'ex\xe9cute en r\xe9ponse \xe0 un \xe9v\xe9nement, elle est arr\xeat\xe9e et vous revenez au formulaire."),(0,n.kt)("li",{parentName:"ul"},"Si la m\xe9thode est ex\xe9cut\xe9e \xe0 partir de l'environnement de l'application, vous revenez \xe0 cet environnement."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copy"),": Copies the debugging information into the clipboard. L'info d\xe9crit l'environnement interne de l'erreur (num\xe9ro, composant interne, etc.). Elles sont format\xe9es sous forme de texte tabul\xe9.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Save..."),": Saves the contents of the syntax error window and the call chain in a ",(0,n.kt)("inlineCode",{parentName:"p"},".txt")," file."))),(0,n.kt)("h2",o({},{id:"d\xe9bogueur"}),"D\xe9bogueur"),(0,n.kt)("p",null,"A common beginner mistake in dealing with error detection is to click ",(0,n.kt)("strong",{parentName:"p"},"Abort")," in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Ne faites pas \xe7a ! You will save plenty of time and energy by always using the ",(0,n.kt)("strong",{parentName:"p"},"Debugger"),"."),(0,n.kt)("p",null,"Le d\xe9bogueur vous permet d'avancer lentement dans les m\xe9thodes. Il affiche toutes les informations dont vous avez besoin pour comprendre pourquoi une erreur s'est produite. Une fois que vous avez ces informations, vous savez comment corriger l'erreur."),(0,n.kt)("p",null,"Une autre raison d'utiliser le d\xe9bogueur est le d\xe9veloppement du code. Il peut arriver que vous \xe9criviez un algorithme plus complexe que d'habitude. Malgr\xe9 tous les sentiments d'accomplissement, vous ne pouvez pas \xeatre totalement s\xfbr que votre codage est 100% correct. Instead of running it \"blind\", you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," command at the beginning of your code, then execute it step by step to keep an eye on what happens."),(0,n.kt)("h2",o({},{id:"rupturessauts"}),"Ruptures/sauts"),(0,n.kt)("p",null,'Dans le processus de d\xe9bogage, vous pouvez avoir besoin de sauter le tra\xe7age de certaines parties du code jusqu\'\xe0 une certaine ligne. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.'),(0,n.kt)("p",null,"These needs are covered by ",(0,n.kt)("strong",{parentName:"p"},"breakpoints")," and ",(0,n.kt)("strong",{parentName:"p"},"command catching")," features. Ils peuvent \xeatre configur\xe9s \xe0 partir de l'\xe9diteur de code, du d\xe9bogueur ou de l'explorateur d'ex\xe9cution."))}c.isMDXComponent=!0},848602:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},918799:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},640624:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"}}]);