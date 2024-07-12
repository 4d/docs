/*! For license information please see 51e86e37.bc87d371.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62499],{567622:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(474848),t=n(28453);const o={id:"basics",title:"D\xe9bogage"},u=void 0,i={id:"Debugging/basics",title:"D\xe9bogage",description:"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/fr/20/Debugging/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"basics",title:"D\xe9bogage"},sidebar:"docs",previous:{title:"Balises de transformation",permalink:"/docs/fr/20/Tags/tags"},next:{title:"D\xe9bogueur",permalink:"/docs/fr/20/Debugging/debugger"}},d={},l=[{value:"Types d&#39;erreurs",id:"types-derreurs",level:2},{value:"Erreurs de saisie",id:"erreurs-de-saisie",level:3},{value:"Erreurs de syntaxe",id:"erreurs-de-syntaxe",level:3},{value:"Erreurs dans l&#39;Environnement",id:"erreurs-dans-lenvironnement",level:3},{value:"Erreurs de conception ou de logique",id:"erreurs-de-conception-ou-de-logique",level:3},{value:"Erreurs d&#39;ex\xe9cution",id:"erreurs-dex\xe9cution",level:3},{value:"Fen\xeatre d&#39;erreur de syntaxe",id:"fen\xeatre-derreur-de-syntaxe",level:2},{value:"D\xe9bogueur",id:"d\xe9bogueur",level:2},{value:"Ruptures/sauts",id:"rupturessauts",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !"}),"\n",(0,s.jsx)(r.p,{children:"L'environnement de d\xe9veloppement 4D fournit plusieurs outils de d\xe9bogage pour tous les types d'erreurs."}),"\n",(0,s.jsx)(r.h2,{id:"types-derreurs",children:"Types d'erreurs"}),"\n",(0,s.jsx)(r.h3,{id:"erreurs-de-saisie",children:"Erreurs de saisie"}),"\n",(0,s.jsx)(r.p,{children:"Les fautes de frappe sont d\xe9tect\xe9es par l'\xe9diteur de m\xe9thode. Elles sont affich\xe9es en rouge et des informations compl\xe9mentaires sont fournies en bas de la fen\xeatre. Voici une erreur de frappe :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"break-point",src:n(837688).A+"",width:"1824",height:"980"})}),"\n",(0,s.jsx)(r.p,{children:"Ces erreurs de frappe provoquent g\xe9n\xe9ralement des erreurs de syntaxe (dans l'image ci-dessus, le nom de la table est inconnu). Vous obtenez la description de l'erreur lorsque vous validez la ligne de code. Lorsque cela se produit, corrigez l'erreur de frappe et tapez Entr\xe9e pour valider la correction."}),"\n",(0,s.jsx)(r.h3,{id:"erreurs-de-syntaxe",children:"Erreurs de syntaxe"}),"\n",(0,s.jsxs)(r.p,{children:["Certaines erreurs ne peuvent \xeatre d\xe9tect\xe9es que lorsque vous ex\xe9cutez la m\xe9thode. La ",(0,s.jsx)(r.a,{href:"#syntax-error-window",children:"fen\xeatre d'erreur de syntaxe"})," appara\xeet lorsqu'une erreur se produit pendant l'ex\xe9cution du code. Par exemple :"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"syntax-error",src:n(137740).A+"",width:"642",height:"552"})}),"\n",(0,s.jsxs)(r.p,{children:["Agrandissez la zone ",(0,s.jsx)(r.strong,{children:"D\xe9tails"})," pour afficher la derni\xe8re erreur et son num\xe9ro."]}),"\n",(0,s.jsx)(r.h3,{id:"erreurs-dans-lenvironnement",children:"Erreurs dans l'Environnement"}),"\n",(0,s.jsxs)(r.p,{children:["Il peut arriver que la m\xe9moire soit insuffisante pour cr\xe9er une BLOB. Ou, lorsque vous acc\xe9dez \xe0 un document sur le disque, il se peut que ce document n'existe pas ou qu'il soit d\xe9j\xe0 ouvert par une autre application. Ces erreurs dans l'Environnementa ne sont pas directement dues \xe0 votre code ou \xe0 la fa\xe7on dont vous l'avez \xe9crit. La plupart du temps, ces erreurs sont faciles \xe0 traiter avec une ",(0,s.jsx)(r.a,{href:"/docs/fr/20/Concepts/error-handling",children:"m\xe9thode de capture d'erreur"})," install\xe9e \xe0 l'aide de la commande ",(0,s.jsx)(r.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"erreurs-de-conception-ou-de-logique",children:"Erreurs de conception ou de logique"}),"\n",(0,s.jsxs)(r.p,{children:["Ce sont g\xe9n\xe9ralement les types d'erreurs les plus difficiles \xe0 trouver. \xc0 l'exception des erreurs de frappe, tous les types d'erreurs \xe9num\xe9r\xe9s ci-dessus sont, dans une certaine mesure, couverts par l'expression \"erreur de conception ou de logique\". Utilisez le ",(0,s.jsx)(r.a,{href:"/docs/fr/20/Debugging/debugger",children:"d\xe9bogueur"})," pour les d\xe9tecter. Par exemple :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Une ",(0,s.jsx)(r.em,{children:"erreur de syntaxe"})," peut se produire lorsque vous essayez d'utiliser une variable qui n'est pas encore initialis\xe9e."]}),"\n",(0,s.jsxs)(r.li,{children:["Une ",(0,s.jsx)(r.em,{children:"erreur au niveau de l'Environnement"})," peut se produire lorsque vous essayez d'ouvrir un document, parce que le nom de ce document est re\xe7u par une sous-routine qui n'a pas obtenu la bonne valeur comme param\xe8tre."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Les erreurs de conception ou de logique comprennent \xe9galement des situations telles que :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Un enregistrement n'est pas correctement mis \xe0 jour parce que, en appelant ",(0,s.jsx)(r.code,{children:"SAVE RECORD"}),", vous avez oubli\xe9 de tester d'abord si l'enregistrement \xe9tait verrouill\xe9 ou non."]}),"\n",(0,s.jsx)(r.li,{children:"Une m\xe9thode ne fait pas exactement ce que vous attendez, car la pr\xe9sence d'un param\xe8tre facultatif n'est pas test\xe9e."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Parfois, le morceau de code qui affiche l'erreur peut \xeatre diff\xe9rent du code qui est en fait \xe0 l'origine du probl\xe8me."}),"\n",(0,s.jsx)(r.h3,{id:"erreurs-dex\xe9cution",children:"Erreurs d'ex\xe9cution"}),"\n",(0,s.jsx)(r.p,{children:"En mode Application, vous pouvez obtenir des erreurs que vous ne voyez pas en mode interpr\xe9t\xe9. Voici un exemple :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"runtime-error",src:n(272398).A+"",width:"662",height:"472"})}),"\n",(0,s.jsx)(r.p,{children:"Pour trouver rapidement l'origine du probl\xe8me, rouvrez la version interpr\xe9t\xe9e du fichier de structure, ouvrez la m\xe9thode et allez \xe0 la ligne correspondante."}),"\n",(0,s.jsx)(r.h2,{id:"fen\xeatre-derreur-de-syntaxe",children:"Fen\xeatre d'erreur de syntaxe"}),"\n",(0,s.jsx)(r.p,{children:"La fen\xeatre d'erreur de syntaxe appara\xeet automatiquement lorsque l'ex\xe9cution d'une m\xe9thode est interrompue. Cela peut se produire lorsque :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"une erreur emp\xeache la poursuite de l'ex\xe9cution du code"}),"\n",(0,s.jsxs)(r.li,{children:["la m\xe9thode produit une fausse assertion (voir la commande ",(0,s.jsx)(r.code,{children:"ASSERT"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"syntax-error",src:n(137740).A+"",width:"642",height:"552"})}),"\n",(0,s.jsx)(r.p,{children:"La zone de texte sup\xe9rieure affiche un message d\xe9crivant l'erreur. La zone de texte inf\xe9rieure montre la ligne qui \xe9tait en cours d'ex\xe9cution lorsque l'erreur s'est produite ; la zone o\xf9 l'erreur s'est produite est mise en \xe9vidence. La section D\xe9tails d\xe9velopp\xe9e contient la \"pile\" des erreurs li\xe9es au processus."}),"\n",(0,s.jsx)(r.p,{children:"La fen\xeatre d'erreur de syntaxe propose plusieurs options :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Modifier"})," : arr\xeate l'ex\xe9cution de toutes les m\xe9thodes. 4D bascule en mode D\xe9veloppement et la m\xe9thode comportant l'erreur s'ouvre dans l'\xe9diteur de code, ce qui vous permet de la corriger. Utilisez cette option lorsque vous reconnaissez imm\xe9diatement l'erreur et que vous pouvez la corriger sans autre forme de proc\xe8s."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Trace"})," : Acc\xe8de au mode Trace/Debugger. La fen\xeatre du ",(0,s.jsx)(r.a,{href:"/docs/fr/20/Debugging/debugger",children:"d\xe9bogueur"})," s'affiche. Si la ligne en cours n'a \xe9t\xe9 ex\xe9cut\xe9e que partiellement, vous devrez peut-\xeatre cliquer plusieurs fois sur le bouton ",(0,s.jsx)(r.strong,{children:"Trace"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Continuer"})," : L'ex\xe9cution se poursuit. La ligne contenant l'erreur peut \xeatre partiellement ex\xe9cut\xe9e, selon l'endroit o\xf9 se trouve l'erreur. Continuez avec prudence : l'erreur peut emp\xeacher le reste de votre m\xe9thode de s'ex\xe9cuter correctement. Nous vous recommandons de cliquer sur ",(0,s.jsx)(r.strong,{children:"Continuer"})," uniquement si l'erreur se trouve dans un appel trivial (tel que ",(0,s.jsx)(r.code,{children:"SET WINDOW TITLE"}),") qui n'emp\xeache pas d'ex\xe9cuter et de tester le reste de votre code."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Astuce : pour ignorer une erreur qui se r\xe9p\xe8te (par exemple, dans les boucles), vous pouvez transformer le bouton ",(0,s.jsx)(r.strong,{children:"Continuer"})," en bouton ",(0,s.jsx)(r.strong,{children:"Ignorer"}),". Maintenez la touche ",(0,s.jsx)(r.strong,{children:"Alt"})," (Windows) ou ",(0,s.jsx)(r.strong,{children:"Option"})," (macOS) enfonc\xe9e et cliquez sur le bouton ",(0,s.jsx)(r.strong,{children:"Continuer"})," la premi\xe8re fois qu'il appara\xeet. L'\xe9tiquette du bouton devient ",(0,s.jsx)(r.strong,{children:"Ignorer"})," si la bo\xeete de dialogue est appel\xe9e \xe0 nouveau pour la m\xeame erreur."]}),"\n"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Abandonner"})," : Stoppe l'ex\xe9cution de la m\xe9thode et revient \xe0 l'\xe9tat ant\xe9rieur au d\xe9but de l'ex\xe9cution de la m\xe9thode :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Si une m\xe9thode formulaire ou m\xe9thode objet s'ex\xe9cute en r\xe9ponse \xe0 un \xe9v\xe9nement, elle est arr\xeat\xe9e et vous revenez au formulaire."}),"\n",(0,s.jsx)(r.li,{children:"Si la m\xe9thode est ex\xe9cut\xe9e \xe0 partir de l'environnement de l'application, vous revenez \xe0 cet environnement."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Copier"})," : Copie les informations de d\xe9bogage dans le presse-papiers. L'info d\xe9crit l'environnement interne de l'erreur (num\xe9ro, composant interne, etc.). Elles sont format\xe9es sous forme de texte tabul\xe9."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Enregistrer..."})," : Enregistre le contenu de la fen\xeatre d'erreur syntaxique et de la cha\xeene d'appel dans un fichier ",(0,s.jsx)(r.code,{children:".txt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"d\xe9bogueur",children:"D\xe9bogueur"}),"\n",(0,s.jsxs)(r.p,{children:["Une erreur courante des d\xe9butants en mati\xe8re de d\xe9tection des erreurs consiste \xe0 cliquer sur ",(0,s.jsx)(r.strong,{children:"Abandonner"})," dans la fen\xeatre d'erreur de syntaxe, \xe0 revenir \xe0 l'\xe9diteur de code et \xe0 essayer de comprendre ce qui se passe en regardant le code. Ne faites pas \xe7a ! Vous \xe9conomiserez beaucoup de temps et d'\xe9nergie en utilisant toujours le ",(0,s.jsx)(r.strong,{children:"D\xe9bogueur"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Le d\xe9bogueur vous permet d'avancer lentement dans les m\xe9thodes. Il affiche toutes les informations dont vous avez besoin pour comprendre pourquoi une erreur s'est produite. Une fois que vous avez ces informations, vous savez comment corriger l'erreur."}),"\n",(0,s.jsxs)(r.p,{children:["Une autre raison d'utiliser le d\xe9bogueur est le d\xe9veloppement du code. Il peut arriver que vous \xe9criviez un algorithme plus complexe que d'habitude. Malgr\xe9 tous les sentiments d'accomplissement, vous ne pouvez pas \xeatre totalement s\xfbr que votre codage est 100% correct. Au lieu de l'ex\xe9cuter \"\xe0 l'aveugle\", vous pouvez utiliser la commande ",(0,s.jsx)(r.code,{children:"TRACE"})," au d\xe9but de votre code, puis l'ex\xe9cuter pas \xe0 pas pour garder un \u0153il sur ce qui se passe."]}),"\n",(0,s.jsx)(r.h2,{id:"rupturessauts",children:"Ruptures/sauts"}),"\n",(0,s.jsx)(r.p,{children:"Dans le processus de d\xe9bogage, vous pouvez avoir besoin de sauter le tra\xe7age de certaines parties du code jusqu'\xe0 une certaine ligne. Ou bien, vous pouvez vouloir tracer le code lorsqu'une expression donn\xe9e a une certaine valeur (par exemple \"$myVar > 1000\"), ou chaque fois qu'une commande 4D sp\xe9cifique est appel\xe9e."}),"\n",(0,s.jsxs)(r.p,{children:["Ces besoins sont couverts par les fonctions ",(0,s.jsx)(r.strong,{children:"points d'arr\xeat"})," et ",(0,s.jsx)(r.strong,{children:"points d'arr\xeat sur commande"}),". Ils peuvent \xeatre configur\xe9s \xe0 partir de l'\xe9diteur de code, du d\xe9bogueur ou de l'explorateur d'ex\xe9cution."]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,o={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)u.call(r,s)&&!d.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:a,props:o,_owner:i.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},272398:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},137740:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},837688:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},28453:(e,r,n)=>{n.d(r,{R:()=>u,x:()=>i});var s=n(296540);const t={},o=s.createContext(t);function u(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);