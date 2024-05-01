"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37181],{603905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var r=s(667294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(s),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return s?r.createElement(k,a(a({ref:t},u),{},{components:s})):r.createElement(k,a({ref:t},u))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=s[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},637149:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});s(667294);var r=s(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}const a={id:"processes",title:"Processes et Workers"},l=void 0,i={unversionedId:"Develop/processes",id:"version-20-R4/Develop/processes",title:"Processes et Workers",description:"Le multit\xe2che dans 4D est la capacit\xe9 d'ex\xe9cuter plusieurs op\xe9rations simultan\xe9ment. Ces op\xe9rations sont appel\xe9es process. Les process multiples sont comme plusieurs utilisateurs sur le m\xeame ordinateur, chacun travaillant \xe0 sa propre t\xe2che. Cela signifie essentiellement que chaque m\xe9thode peut \xeatre ex\xe9cut\xe9e en tant que t\xe2che distincte de la base de donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Develop/processes.md",sourceDirName:"Develop",slug:"/Develop/processes",permalink:"/docs/fr/20-R4/Develop/processes",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Develop%2Fprocesses.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"processes",title:"Processes et Workers"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/fr/20-R4/API/ZipFolderClass"},next:{title:"Preemptive Processes",permalink:"/docs/fr/20-R4/Develop/preemptive-processes"}},p={},u=[{value:"Cr\xe9er et supprimer des process",id:"cr\xe9er-et-supprimer-des-process",level:2},{value:"\xc9l\xe9ments d&#39;un process",id:"\xe9l\xe9ments-dun-process",level:2},{value:"\xc9l\xe9ments de langage",id:"\xe9l\xe9ments-de-langage",level:3},{value:"\xc9l\xe9ments d&#39;interface",id:"\xe9l\xe9ments-dinterface",level:3},{value:"Process globaux et locaux",id:"process-globaux-et-locaux",level:2},{value:"4D Server",id:"4d-server",level:3},{value:"Process Workers",id:"process-workers",level:2},{value:"Utilisation des workers",id:"utilisation-des-workers",level:3},{value:"Identifier les process worker",id:"identifier-les-process-worker",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}],c={toc:u};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le multit\xe2che dans 4D est la capacit\xe9 d'ex\xe9cuter plusieurs op\xe9rations simultan\xe9ment. Ces op\xe9rations sont appel\xe9es ",(0,r.kt)("strong",{parentName:"p"},"process"),". Les process multiples sont comme plusieurs utilisateurs sur le m\xeame ordinateur, chacun travaillant \xe0 sa propre t\xe2che. Cela signifie essentiellement que chaque m\xe9thode peut \xeatre ex\xe9cut\xe9e en tant que t\xe2che distincte de la base de donn\xe9es."),(0,r.kt)("p",null,"Si vous \xe9crivez du code thread-safe, vous pouvez cr\xe9er des ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/20-R4/Develop/preemptive-processes"}),(0,r.kt)("strong",{parentName:"a"},"process pr\xe9emptifs"))," qui pourront tirer parti des ordinateurs multi-c\u0153urs dans vos applications compil\xe9es, pour une ex\xe9cution plus rapide."),(0,r.kt)("admonition",n({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"L'application 4D cr\xe9e des process pour ses propres besoins, par exemple le process Main pour g\xe9rer l'affichage des fen\xeatres de l'interface utilisateur, le process Design pour g\xe9rer les fen\xeatres et les \xe9diteurs de l'environnement de D\xe9veloppement (notez que tous deux sont des ",(0,r.kt)("a",n({parentName:"p"},{href:"#process-workers"}),"process workers"),"), le process Web Server, le process Cache Manager, le process Indexing ou le process On Event Manager.")),(0,r.kt)("h2",n({},{id:"cr\xe9er-et-supprimer-des-process"}),"Cr\xe9er et supprimer des process"),(0,r.kt)("p",null,"Il existe plusieurs fa\xe7ons de cr\xe9er un nouveau process :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ex\xe9cuter une m\xe9thode en mode D\xe9veloppement en s\xe9lectionnant la case \xe0 cocher ",(0,r.kt)("strong",{parentName:"li"},"Nouveau process")," dans la bo\xeete de dialogue d'ex\xe9cution de m\xe9thode. La m\xe9thode choisie dans ce dialogue est la m\xe9thode process."),(0,r.kt)("li",{parentName:"ul"},"Utiliser la commande ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/fe/page317.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"New process")),". La m\xe9thode pass\xe9e en tant que param\xe8tre \xe0 la commande ",(0,r.kt)("inlineCode",{parentName:"li"},"New process")," est la m\xe9thode process."),(0,r.kt)("li",{parentName:"ul"},"Utiliser la commande ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/en/page373.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Execute on server"))," afin de cr\xe9er une proc\xe9dure stock\xe9e sur le serveur. La m\xe9thode pass\xe9e en param\xe8tre \xe0 la commande est la m\xe9thode process."),(0,r.kt)("li",{parentName:"ul"},"Utiliser la commande ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/fe/page1389.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"CALL WORKER")),". Si le process du worker n'existe pas d\xe9j\xe0, il est cr\xe9\xe9.")),(0,r.kt)("admonition",n({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Dans les applications Desktop, des process peuvent \xeatre ex\xe9cut\xe9s lors de la s\xe9lection de commandes de menu. Dans l'",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/20-R4/Menus/creating"}),"\xc9diteur de barre de menus"),", s\xe9lectionnez la commande de menu et cliquez sur la case \xe0 cocher ",(0,r.kt)("strong",{parentName:"p"},"D\xe9marrer un nouveau process"),". La m\xe9thode associ\xe9e \xe0 la commande de menu est la m\xe9thode de process.")),(0,r.kt)("p",null,"Un process peut \xeatre effac\xe9 dans les conditions suivantes (les deux premi\xe8res sont automatiques) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lorsque l'ex\xe9cution de la m\xe9thode du process est termin\xe9e"),(0,r.kt)("li",{parentName:"ul"},"Lorsque l'utilisateur quitte l'application"),(0,r.kt)("li",{parentName:"ul"},"Si vous arr\xeatez le process de mani\xe8re proc\xe9durale ou si vous utilisez le bouton ",(0,r.kt)("strong",{parentName:"li"},"Abort")," dans le d\xe9bogueur ou dans l'Explorateur d'ex\xe9cution"),(0,r.kt)("li",{parentName:"ul"},"Si vous appelez la commande ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"KILL WORKER"))," (pour supprimer un process worker uniquement).")),(0,r.kt)("p",null,'Un process peut cr\xe9er un autre process. Les process ne sont pas organis\xe9s de mani\xe8re hi\xe9rarchique - tous les process sont \xe9gaux, quel que soit le process \xe0 partir duquel ils ont \xe9t\xe9 cr\xe9\xe9s. Une fois que le process "parent" a cr\xe9\xe9 un process "enfant", le process enfant se poursuit, que le process parent soit toujours en cours d\'ex\xe9cution ou non.'),(0,r.kt)("h2",n({},{id:"\xe9l\xe9ments-dun-process"}),"\xc9l\xe9ments d'un process"),(0,r.kt)("p",null,"Chaque process contient des \xe9l\xe9ments sp\xe9cifiques qu'il peut traiter ind\xe9pendamment des autres process."),(0,r.kt)("h3",n({},{id:"\xe9l\xe9ments-de-langage"}),"\xc9l\xe9ments de langage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variables : Chaque process poss\xe8de ses propres ","[variables process]"," (../Concepts/variables#variables-process). Les variables process ne sont reconnues que dans le cadre de leur process natif."),(0,r.kt)("li",{parentName:"ul"},"Ensembles process : Chaque process a ses propres ensembles process. ",(0,r.kt)("inlineCode",{parentName:"li"},"LockedSet")," est un ensemble process. Les ensembles process sont effac\xe9s d\xe8s que la m\xe9thode process est termin\xe9e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"../Concepts/error-handling#installing-an-error-handling-method"}),"M\xe9thode de gestion des erreurs")," : Chaque process peut avoir sa propre m\xe9thode de gestion des erreurs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"../Debugging/debugger#calling-the-debugger"}),"Fen\xeatre du d\xe9bogueur")," : Chaque process peut avoir sa propre fen\xeatre de d\xe9bogage.")),(0,r.kt)("h3",n({},{id:"\xe9l\xe9ments-dinterface"}),"\xc9l\xe9ments d'interface"),(0,r.kt)("p",null,"Les \xe9l\xe9ments d'interface sont utilis\xe9s dans les ","[Applications Desktop]"," (../category/desktop-applications). Il s'agit des \xe9l\xe9ments suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/20-R4/Menus/creating"}),"Barre de menus")," : Chaque process peut avoir sa propre barre de menus courante. La barre de menus du process au premier plan est la barre de menus courante de l'application."),(0,r.kt)("li",{parentName:"ul"},"Une ou plusieurs fen\xeatres : Chaque processus peut avoir plusieurs fen\xeatres ouvertes simultan\xe9ment. A l'inverse, des process peuvent n'avoir pas de fen\xeatre du tout."),(0,r.kt)("li",{parentName:"ul"},"Une fen\xeatre active (de premier plan) : Bien qu'un process puisse disposer de plusieurs fen\xeatres ouvertes simultan\xe9ment, chaque process n'a qu'une fen\xeatre active. Pour avoir plusieurs fen\xeatres actives \xe0 la fois, vous devez d\xe9marrer plusieurs process."),(0,r.kt)("li",{parentName:"ul"},"Formulaires d'entr\xe9e et de sortie : Les formulaires d'entr\xe9e et de sortie par d\xe9faut peuvent \xeatre d\xe9finis de mani\xe8re proc\xe9durale pour chaque table dans chaque process.")),(0,r.kt)("admonition",n({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Par d\xe9faut, les process ne comportent pas de barre de menus, ce qui signifie que les raccourcis standard du menu ",(0,r.kt)("strong",{parentName:"li"},"Edition")," (notamment couper / copier / coller) ne sont pas disponibles dans les fen\xeatres des process. Lorsque vous appelez les dialogues ou les \xe9diteurs de 4D (\xe9diteur de formules, \xe9diteur de recherches...) depuis un process, assurez-vous que l'\xe9quivalent d'un menu ",(0,r.kt)("strong",{parentName:"li"},"Edition")," est install\xe9 dans le process si vous souhaitez que l'utilisateur b\xe9n\xe9ficie des raccourcis clavier de type copier/coller."),(0,r.kt)("li",{parentName:"ul"},"Les process ex\xe9cut\xe9s sur le serveur (proc\xe9dures stock\xe9es) et les ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/fr/20-R4/Develop/preemptive-processes"}),"process pr\xe9emptifs")," ne doivent pas contenir d'\xe9l\xe9ments d'interface."))),(0,r.kt)("admonition",n({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Chaque process a \xe9galement une s\xe9lection courante et un enregistrement courant par table. Pour plus d'informations sur ces concepts, veuillez vous r\xe9f\xe9rer \xe0 ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.fr.html"}),"doc.4d.com"),".")),(0,r.kt)("h2",n({},{id:"process-globaux-et-locaux"}),"Process globaux et locaux"),(0,r.kt)("p",null,"Les process peuvent \xeatre globaux ou locaux dans leur port\xe9e. Par d\xe9faut, tous les process sont globaux."),(0,r.kt)("p",null,"S process globaux peuvent effectuer n'importe quelle op\xe9ration, y compris acc\xe9der aux donn\xe9es et les manipuler. Dans la plupart des cas, vous utiliserez des process globaux. Les process locaux ne doivent \xeatre utilis\xe9s que pour des op\xe9rations qui n'acc\xe8dent pas aux donn\xe9es. Par exemple, vous pouvez utiliser un process local pour contr\xf4ler les \xe9l\xe9ments d'interface comme les palettes flottantes ou ex\xe9cuter une m\xe9thode de gestion d'\xe9v\xe9nements."),(0,r.kt)("p",null,"Vous sp\xe9cifiez qu'un process est local via son nom. Le nom d'un process local doit commencer par le symbole dollar ($)."),(0,r.kt)("admonition",n({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"Si vous tentez d'acc\xe9der aux donn\xe9es \xe0 partir d'un process local, vous acc\xe9dez aux donn\xe9es par l'interm\xe9diaire du Process principal (process #1), et prenez donc le risque d'entrer en conflit avec les op\xe9rations effectu\xe9es dans ce process.")),(0,r.kt)("h3",n({},{id:"4d-server"}),"4D Server"),(0,r.kt)("p",null,"L'utilisation de process locaux c\xf4t\xe9 distant pour les op\xe9rations qui ne n\xe9cessitent pas d'acc\xe8s aux donn\xe9es permet de r\xe9server davantage de temps de traitement pour les t\xe2ches \xe0 forte intensit\xe9 sur le serveur. Lorsque vous cr\xe9ez un process local au client (\xe0 l'aide de ",(0,r.kt)("inlineCode",{parentName:"p"},"New process")," par exemple), il n'existe que sur le 4D distant."),(0,r.kt)("p",null,"Lorsque vous cr\xe9ez un process global sur le client, un process \"jumeau\" est cr\xe9\xe9 sur le serveur, consommant donc les ressources du serveur, pour g\xe9rer l'acc\xe8s aux donn\xe9es et le contexte de base de donn\xe9es. Toutefois, pour des raisons d'optimisation, le process jumeau n'est cr\xe9\xe9 qu'en cas de n\xe9cessit\xe9, c'est-\xe0-dire la premi\xe8re fois que le process global doit acc\xe9der \xe0 des donn\xe9es."),(0,r.kt)("h2",n({},{id:"process-workers"}),"Process Workers"),(0,r.kt)("p",null,"L'utilisation d'un process Worker est un moyen simple et puissant d'\xe9changer des informations entre les process. Cette fonctionnalit\xe9 est bas\xe9e sur un syst\xe8me de messagerie asynchrone qui permet d'appeler des process et des formulaires et de leur demander d'ex\xe9cuter des m\xe9thodes avec des param\xe8tres dans leur propre contexte."),(0,r.kt)("p",null,'Un process worker peut \xeatre "engag\xe9" par n\'importe quel process (en utilisant la commande ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"CALL WORKER")),") pour ex\xe9cuter des m\xe9thodes projet avec des param\xe8tres dans leur propre contexte, permettant ainsi l'acc\xe8s \xe0 des informations partag\xe9es."),(0,r.kt)("admonition",n({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Dans les applications Desktop, une m\xe9thode projet peut \xe9galement \xeatre ex\xe9cut\xe9e avec des param\xe8tres dans le contexte de n'importe quel formulaire en utilisant la commande ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/fr/page1391.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"CALL FORM")),".")),(0,r.kt)("p",null,"Cette fonctionnalit\xe9 r\xe9pond aux besoins suivants en mati\xe8re de communication interprocess de 4D :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc9tant donn\xe9 qu'ils sont pris en charge par les process coop\xe9ratifs et pr\xe9emptifs, ils constituent la solution id\xe9ale pour la communication interprocessus dans les ","[process pr\xe9emptifs]"," (preemptive.md) (","[les variables interprocess sont d\xe9pr\xe9ci\xe9es]"," (",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705"}),"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705"),") et ne sont pas autoris\xe9es dans les processus pr\xe9emptifs)."),(0,r.kt)("li",{parentName:"ul"},"Ils constituent une alternative simple aux s\xe9maphores, qui peuvent \xeatre lourds \xe0 mettre en place et complexes \xe0 utiliser")),(0,r.kt)("admonition",n({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Bien qu'ils aient \xe9t\xe9 con\xe7us principalement pour la communication interprocess dans le contexte des process pr\xe9emptifs, ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL FORM")," peuvent \xeatre utilis\xe9s avec des process coop\xe9ratifs.")),(0,r.kt)("h3",n({},{id:"utilisation-des-workers"}),"Utilisation des workers"),(0,r.kt)("p",null,"Un worker est utilis\xe9 pour demander \xe0 un process d'ex\xe9cuter des m\xe9thodes projet. Un worker est compos\xe9 de :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"un nom unique (",(0,r.kt)("em",{parentName:"li"},"attention : le nom est sensible \xe0 la casse"),"), \xe9galement utilis\xe9 pour nommer le process qui lui est associ\xe9"),(0,r.kt)("li",{parentName:"ul"},"un process associ\xe9, qui peut exister ou non \xe0 un moment donn\xe9"),(0,r.kt)("li",{parentName:"ul"},"une bo\xeete aux lettres"),(0,r.kt)("li",{parentName:"ul"},"une m\xe9thode de d\xe9marrage (facultatif)")),(0,r.kt)("p",null,"Vous demandez \xe0 un worker d'ex\xe9cuter une m\xe9thode projet en appelant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),". Le worker et sa bo\xeete aux lettres sont cr\xe9\xe9s lors de la premi\xe8re utilisation ; le process qui lui est associ\xe9 est \xe9galement lanc\xe9 automatiquement lors de la premi\xe8re utilisation. Si le process worker meurt par la suite, la bo\xeete aux lettres reste ouverte et tout nouveau message dans la bo\xeete lancera un nouveau process worker."),(0,r.kt)("p",null,"L'animation suivante illustre cette s\xe9quence :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:s(497788).Z,width:"1128",height:"684"})),(0,r.kt)("p",null,"Contrairement \xe0 un process cr\xe9\xe9 avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"New process"),", un process worker ",(0,r.kt)("strong",{parentName:"p"},"reste en vie apr\xe8s la fin de l'ex\xe9cution de la m\xe9thode process"),". Cela signifie que toutes les ex\xe9cutions de m\xe9thodes pour le m\xeame worker seront ex\xe9cut\xe9es dans le m\xeame process, qui conserve toutes les informations relatives \xe0 l'\xe9tat du process (variables process, enregistrement courant et s\xe9lection courante, etc.). Par cons\xe9quent, les m\xe9thodes ex\xe9cut\xe9es successivement acc\xe8dent aux m\xeames informations et les partagent, ce qui permet la communication entre les process. La bo\xeete aux lettres du worker traite les appels successifs de mani\xe8re asynchrone."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," encapsule \xe0 la fois le nom de la m\xe9thode et les arguments de la commande dans un message qui est post\xe9 dans la bo\xeete aux lettres du worker. Le process worker est alors lanc\xe9, s'il n'existe pas d\xe9j\xe0, et il lui est demand\xe9 d'ex\xe9cuter le message. Cela signifie que ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," retournera g\xe9n\xe9ralement avant que la m\xe9thode ne soit r\xe9ellement ex\xe9cut\xe9e (le traitement est asynchrone). C'est pourquoi ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," ne renvoie aucune valeur. Si vous avez besoin qu'un worker renvoie des informations au process qui l'a appel\xe9 (callback), vous devez utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," \xe0 nouveau pour transmettre les informations n\xe9cessaires \xe0 l'appelant. Bien entendu, dans ce cas, l'appelant lui-m\xeame doit \xeatre un worker."),(0,r.kt)("p",null,"Il n'est pas possible d'utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," pour ex\xe9cuter une m\xe9thode dans un process cr\xe9\xe9 par la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"New process"),". Seuls les process worker ont une bo\xeete aux lettres et peuvent donc \xeatre appel\xe9s par ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),". Notez qu'un process cr\xe9\xe9 par ",(0,r.kt)("inlineCode",{parentName:"p"},"New process")," peut appeler un worker, mais ne peut pas \xeatre rappel\xe9."),(0,r.kt)("p",null,"Les process Worker peuvent \xeatre cr\xe9\xe9s sur 4D Server par le biais de proc\xe9dures stock\xe9es : par exemple, vous pouvez utiliser la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute on server")," pour ex\xe9cuter une m\xe9thode qui appelle la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,r.kt)("p",null,"Un process worker est ferm\xe9 par un appel \xe0 la commande ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"KILL WORKER")),", qui vide la bo\xeete aux lettres du worker et demande au process associ\xe9 d'arr\xeater de traiter les messages et de terminer son ex\xe9cution d\xe8s que la t\xe2che en cours est termin\xe9e."),(0,r.kt)("p",null,"La m\xe9thode de d\xe9marrage d'un worker est la m\xe9thode utilis\xe9e pour cr\xe9er le worker (\xe0 la premi\xe8re utilisation). Si ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," est appel\xe9 avec un param\xe8tre ",(0,r.kt)("em",{parentName:"p"},"m\xe9thode")," vide, la m\xe9thode de d\xe9marrage est automatiquement r\xe9utilis\xe9e comme m\xe9thode \xe0 ex\xe9cuter."),(0,r.kt)("p",null,"Le process principal cr\xe9\xe9 par 4D lors de l'ouverture d'une base de donn\xe9es pour les modes utilisateur et application est un process worker et peut \xeatre appel\xe9 en utilisant ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),". Notez que le nom du process principal peut varier en fonction de la langue de localisation de 4D, mais il a toujours le num\xe9ro de process 1 ; par cons\xe9quent, il est plus pratique de le d\xe9signer par son num\xe9ro de process plut\xf4t que par son nom lors de l'appel \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,r.kt)("h3",n({},{id:"identifier-les-process-worker"}),"Identifier les process worker"),(0,r.kt)("p",null,"Tous les process worker, \xe0 l'exception du processus principal, ont le type de process ",(0,r.kt)("inlineCode",{parentName:"p"},"Worker process")," (5) renvoy\xe9 par la commande ","[",(0,r.kt)("inlineCode",{parentName:"p"},"PROCESS PROPERTIES"),"]"," (",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page336.html"}),"https://doc.4d.com/4dv20/help/command/en/page336.html"),")."),(0,r.kt)("p",null,"Des ",(0,r.kt)("a",n({parentName:"p"},{href:"../ServerWindow/processes#process-type"}),"ic\xf4nes sp\xe9cifiques")," identifient les process worker."),(0,r.kt)("h3",n({},{id:"voir-\xe9galement"}),"Voir \xe9galement"),(0,r.kt)("p",null,"Pour plus d'informations, veuillez consulter ","[cet article de blog]"," (",(0,r.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/"}),"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/"),") sur l'utilisation des workers."))}d.isMDXComponent=!0},497788:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/WorkerAnimation-1bf9fb3826432ab21e7c2bec57036409.gif"}}]);