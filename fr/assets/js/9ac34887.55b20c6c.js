"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24188"],{347088:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/set-process-variable","title":"SET PROCESS VARIABLE","description":"SET PROCESS VARIABLE ( process ; varDestination ; exprSource {; varDestination2 ; exprSource2 ; ... ; varDestinationN ; exprSourceN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/set-process-variable","permalink":"/docs/fr/20-R7/commands/set-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-process-variable","title":"SET PROCESS VARIABLE","slug":"/commands/set-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Semaphore","permalink":"/docs/fr/20-R7/commands/semaphore"},"next":{"title":"Test semaphore","permalink":"/docs/fr/20-R7/commands/test-semaphore"}}'),t=r("785893"),i=r("250065");let a={id:"set-process-variable",title:"SET PROCESS VARIABLE",slug:"/commands/set-process-variable",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Restrictions",id:"restrictions",level:3},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," ( ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"varDestination"})," ; ",(0,t.jsx)(s.em,{children:"exprSource"})," {; ",(0,t.jsx)(s.em,{children:"varDestination2"})," ; ",(0,t.jsx)(s.em,{children:"exprSource2"})," ; ... ; ",(0,t.jsx)(s.em,{children:"varDestinationN"})," ; ",(0,t.jsx)(s.em,{children:"exprSourceN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de process de destination"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"varDestination"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Variable de destination"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"exprSource"}),(0,t.jsx)(s.td,{children:"Variable"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Expression source (ou variable source)"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," \xe9crit la ou les valeur(s) de ",(0,t.jsx)(s.em,{children:"exprSource"})," (",(0,t.jsx)(s.em,{children:"exprSource2"}),", etc.) dans la ou les variable(s) process ",(0,t.jsx)(s.em,{children:"varDestination"})," (",(0,t.jsx)(s.em,{children:"varDestination2"}),", etc.) du process de destination dont le num\xe9ro est pass\xe9 dans ",(0,t.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Chaque variable de destination peut \xeatre une variable ou un \xe9l\xe9ment de tableau. Tenez cependant compte des restrictions \xe9voqu\xe9es ci-dessous."}),"\n",(0,t.jsxs)(s.p,{children:["Pour chaque association ",(0,t.jsx)(s.em,{children:"varDestination;exprSource"}),", le type de l'expression doit \xeatre compatible avec la variable de destination, sinon vous pourrez obtenir des variables avec des valeurs incorrectes. En mode interpr\xe9t\xe9, si la variable de destination n'existe pas, elle est cr\xe9\xe9e et re\xe7oit l'expression. En mode compil\xe9, si aucune variable n'est associ\xe9e au process de destination, une erreur est retourn\xe9e. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Lorsque le process courant \xe9crit les variables du process de destination, ce dernier n'est averti en aucune mani\xe8re de l'\xe9criture de l'instance de ses variables par un autre process."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"4D Server :"})," A partir d'un 4D Client, vous pouvez \xe9crire des variables dans un process de destination ex\xe9cut\xe9 sur le poste serveur (proc\xe9dure stock\xe9e). Pour cela, passez dans process le num\xe9ro du process serveur en n\xe9gatif, c'est-\xe0-dire pr\xe9c\xe9d\xe9 du signe - (moins).",(0,t.jsx)(s.br,{}),"\nAttention, la communication process \u201Cintermachine\u201D permise par les commandes ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/get-process-variable",children:"GET PROCESS VARIABLE"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})," n\u2019est possible que du client vers le serveur. C\u2019est toujours un process client qui lit ou \xe9crit les variables d\u2019une proc\xe9dure stock\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Astuce :"})," Si vous ne connaissez pas le num\xe9ro du process serveur de destination, vous pouvez tout de m\xeame \xe9crire dans les variables interprocess du serveur. Pour cela, il vous suffit de passer toute valeur n\xe9gative dans ",(0,t.jsx)(s.em,{children:"process"}),". En d'autres termes, il n'est pas n\xe9cessaire de conna\xeetre pr\xe9cis\xe9ment le num\xe9ro d'un process ex\xe9cut\xe9 sur le serveur pour utiliser ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," avec des variables interprocess du serveur.",(0,t.jsx)(s.br,{}),"\nCette possibilit\xe9 s'av\xe8re particuli\xe8rement utile dans le cas d'une proc\xe9dure stock\xe9e lanc\xe9e sur le serveur par l'interm\xe9diaire de la ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/on-server-startup-database-method",children:"On Server Startup database method"}),". Comme les postes clients ne connaissent pas automatiquement le num\xe9ro de ce process serveur, il vous suffit de passer une valeur n\xe9gative (n'importe laquelle) dans le param\xe8tre ",(0,t.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"restrictions",children:"Restrictions"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," n'accepte pas de variables locales comme variables de destination."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," accepte tout type de variable process ou interprocess de destination, \xe0 l'exception :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"des variables de type Pointeur."}),"\n",(0,t.jsxs)(s.li,{children:["des tableaux de tous types. Pour \xe9crire un tableau entier d'un process vers un autre, utilisez la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"}),". Notez cependant que ",(0,t.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," vous permet d'\xe9crire des \xe9l\xe9ments de tableaux."]}),"\n",(0,t.jsx)(s.li,{children:"des \xe9l\xe9ments de tableaux de pointeurs et des \xe9l\xe9ments de tableaux \xe0 deux dimensions."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Le process de destination doit \xeatre un process utilisateur, ce ne peut \xeatre un des process du moteur de 4D. Si le process de destination n'existe pas, la commande ne fait rien."}),"\n",(0,t.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.p,{children:["La ligne de code suivante affecte une cha\xeene vide \xe0 la variable Texte ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," du process dont le num\xe9ro est ",(0,t.jsx)(s.em,{children:"$vlProcess"})," :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;"")\n'})}),"\n",(0,t.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(s.p,{children:["La ligne de code suivante affecte la variable Texte ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," du process dont le num\xe9ro est ",(0,t.jsx)(s.em,{children:"$vlProcess"})," \xe0 la valeur de la variable ",(0,t.jsx)(s.em,{children:"$vtInfo"})," depuis la m\xe9thode en cours d'ex\xe9cution du process courant :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(s.p,{children:["La ligne de code suivante affecte la variable Texte ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," du process dont le num\xe9ro est ",(0,t.jsx)(s.em,{children:"$vlProcess"})," \xe0 la valeur de la m\xeame variable dans le process courant :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," La premi\xe8re ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," d\xe9signe l'instance de la variable dans le process de destination, la seconde ",(0,t.jsx)(s.em,{children:"vtCurStatus"})," d\xe9signe l'instance de la variable dans le process courant."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant place s\xe9quentiellement en majuscules les \xe9l\xe9ments d'un tableau process depuis le process d\xe9sign\xe9 par ",(0,t.jsx)(s.em,{children:"$vlProcess"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)\n\xa0For($vlElem;1;$vlSize)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0\xa0\xa0SET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};Uppercase($vtElem))\n\xa0End for\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Dans cet exemple, la variable process ",(0,t.jsx)(s.em,{children:"vl_IPCom_Array"})," doit \xeatre g\xe9r\xe9e par les process source/destination et contient la taille du tableau ",(0,t.jsx)(s.em,{children:"at_IPCom_Array"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant \xe9crit l'instance des variables ",(0,t.jsx)(s.em,{children:"v1"}),", ",(0,t.jsx)(s.em,{children:"v2"}),", ",(0,t.jsx)(s.em,{children:"v3"})," dans le process de destination \xe0 partir de l'instance de ces m\xeames variables dans le process courant :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Introduction aux process"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"370"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return a}});var n=r(667294);let t={},i=n.createContext(t);function a(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);