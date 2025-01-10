"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12771"],{282151:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/get-process-variable","title":"GET PROCESS VARIABLE","description":"GET PROCESS VARIABLE ( process ; varSource ; varDestination {; varSource2 ; varDestination2 ; ... ; varSourceN ; varDestinationN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/get-process-variable","permalink":"/docs/fr/commands/get-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-process-variable","title":"GET PROCESS VARIABLE","slug":"/commands/get-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SEMAPHORE","permalink":"/docs/fr/commands/clear-semaphore"},"next":{"title":"KILL WORKER","permalink":"/docs/fr/commands/kill-worker"}}'),l=r("785893"),a=r("250065");let i={id:"get-process-variable",title:"GET PROCESS VARIABLE",slug:"/commands/get-process-variable",displayed_sidebar:"docs"},t=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Restrictions",id:"restrictions",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," ( ",(0,l.jsx)(s.em,{children:"process"})," ; ",(0,l.jsx)(s.em,{children:"varSource"})," ; ",(0,l.jsx)(s.em,{children:"varDestination"})," {; ",(0,l.jsx)(s.em,{children:"varSource2"})," ; ",(0,l.jsx)(s.em,{children:"varDestination2"})," ; ... ; ",(0,l.jsx)(s.em,{children:"varSourceN"})," ; ",(0,l.jsx)(s.em,{children:"varDestinationN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"process"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Num\xe9ro de process source"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"varSource"}),(0,l.jsx)(s.td,{children:"Variable"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Variable source"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"varDestination"}),(0,l.jsx)(s.td,{children:"Variable"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"Variable de destination"})]})]})]}),"\n",(0,l.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La commande ",(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," lit la valeur de la ou des variable(s) process ",(0,l.jsx)(s.em,{children:"varSource"})," (",(0,l.jsx)(s.em,{children:"varSource2"}),", etc.) depuis le process source dont le num\xe9ro est pass\xe9 dans ",(0,l.jsx)(s.em,{children:"process"})," et la retourne dans la ou les variables(s) ",(0,l.jsx)(s.em,{children:"varDestination"})," ( ",(0,l.jsx)(s.em,{children:"varDestination2"}),", etc.) du process courant."]}),"\n",(0,l.jsx)(s.p,{children:"Chaque variable source peut \xeatre une variable, un tableau ou un \xe9l\xe9ment de tableau. Tenez cependant compte des restrictions \xe9voqu\xe9es plus bas."}),"\n",(0,l.jsxs)(s.p,{children:["Pour chaque association ",(0,l.jsx)(s.em,{children:"varSource;varDestination"})," les types des deux variables doivent \xeatre compatibles, sinon vous pourrez obtenir des valeurs non significatives."]}),"\n",(0,l.jsx)(s.p,{children:"Le process courant \"pille\" les variables du process de destination : ce dernier n'est averti en aucune mani\xe8re de la lecture de l'instance de ses variables par un autre process."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"4D Server :"})," A partir d'un 4D Client, vous pouvez lire des variables dans un process de destination ex\xe9cut\xe9 sur le poste serveur (proc\xe9dure stock\xe9e). Pour cela, passez dans ",(0,l.jsx)(s.em,{children:"process"})," le num\xe9ro du process serveur en n\xe9gatif, c'est-\xe0-dire pr\xe9c\xe9d\xe9 du signe - (moins).",(0,l.jsx)(s.br,{}),"\nAttention, la communication process \u201Cintermachine\u201D permise par les commandes ",(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"}),", ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," et ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})," n\u2019est possible que du client vers le serveur. C\u2019est toujours un process client qui lit ou \xe9crit les variables d\u2019une proc\xe9dure stock\xe9e."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Astuce :"})," Si vous ne connaissez pas le num\xe9ro du process serveur source, vous pouvez tout de m\xeame lire les variables interprocess du serveur. Pour cela, il vous suffit de passer toute valeur n\xe9gative dans ",(0,l.jsx)(s.em,{children:"process"}),". En d'autres termes, il n'est pas n\xe9cessaire de conna\xeetre pr\xe9cis\xe9ment le num\xe9ro d'un process ex\xe9cut\xe9 sur le serveur pour utiliser ",(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," avec les variables interprocess du serveur.",(0,l.jsx)(s.br,{}),"\nCette possibilit\xe9 s'av\xe8re particuli\xe8rement utile dans le cas d'une proc\xe9dure stock\xe9e lanc\xe9e sur le serveur par l'interm\xe9diaire de la ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/on-server-startup-database-method",children:"On Server Startup database method"}),". Comme, par d\xe9faut, les postes clients ne connaissent pas le num\xe9ro de ce process serveur, il vous suffit de passer une valeur n\xe9gative (n'importe laquelle) dans le param\xe8tre ",(0,l.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,l.jsx)(s.h5,{id:"restrictions",children:"Restrictions"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," n'accepte pas de variables locales comme variables sources.",(0,l.jsx)(s.br,{}),'\nEn revanche, les variables de destination peuvent \xeatre interprocess, process ou locales. Vous pouvez "recevoir" les valeurs uniquement dans des variables, pas dans des champs.']}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," accepte tout type de variable source, process ou interprocess, \xe0 l'exception des variables de type :"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Pointeur"}),"\n",(0,l.jsx)(s.li,{children:"Tableau de pointeurs"}),"\n",(0,l.jsx)(s.li,{children:"Tableau \xe0 deux dimensions"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Le process source doit \xeatre un process utilisateur, ce ne peut \xeatre un des process du moteur de 4D. Si le process source n'existe pas, la commande ne fait rien."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note :"})," En mode interpr\xe9t\xe9, si une variable source n'existe pas, la valeur ind\xe9finie est retourn\xe9e. Vous pouvez le d\xe9tecter en testant la variable de destination correspondante \xe0 l'aide de la fonction ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/type",children:"Type"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(s.p,{children:["La ligne de code suivante lit la valeur de la variable Texte ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," dans le process dont le num\xe9ro est ",(0,l.jsx)(s.em,{children:"$vlProcess"})," et retourne le r\xe9sultat dans la variable process ",(0,l.jsx)(s.em,{children:"vtInfo"})," du process courant :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtInfo)\n"})}),"\n",(0,l.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsxs)(s.p,{children:["La ligne de code suivante fait la m\xeame chose mais retourne la valeur dans la variable locale ",(0,l.jsx)(s.em,{children:"$vtInfo"})," de la m\xe9thode s'ex\xe9cutant dans le process courant :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;$vtInfo)\n"})}),"\n",(0,l.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsxs)(s.p,{children:["La ligne de code suivante fait la m\xeame chose mais retourne la valeur dans la m\xeame variable ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," du process courant :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vtCurStatus;vtCurStatus)\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note :"})," La premi\xe8re ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," d\xe9signe l'instance de la variable dans le process source, la seconde ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," d\xe9signe l'instance de la variable dans le process courant."]}),"\n",(0,l.jsx)(s.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsxs)(s.p,{children:["L'exemple suivant lit s\xe9quentiellement les \xe9l\xe9ments d'un tableau process depuis le process indiqu\xe9 par ",(0,l.jsx)(s.em,{children:"$vlProcess"})," :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;vl_IPCom_Array;$vlSize)\n\xa0For($vlElem;1;$vlSize)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0// Faire quelque chose avec $vtElem\n\xa0End for\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Note :"})," Dans cet exemple, la variable process ",(0,l.jsx)(s.em,{children:"vl_IPCom_Array"})," doit \xeatre g\xe9r\xe9e par le process source et contient la taille du tableau ",(0,l.jsx)(s.em,{children:"at_IPCom_Array"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,l.jsx)(s.p,{children:"L'exemple suivant fait la m\xeame chose que le pr\xe9c\xe9dent mais lit le tableau dans son int\xe9gralit\xe9 au lieu de le faire \xe9l\xe9ment par \xe9l\xe9ment :"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0// Faire quelque chose avec $anArray{$vlElem}\n\xa0End for\n"})}),"\n",(0,l.jsx)(s.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,l.jsxs)(s.p,{children:["L'exemple suivant lit l'instance des variables ",(0,l.jsx)(s.em,{children:"v1"}),",",(0,l.jsx)(s.em,{children:"v2"}),",",(0,l.jsx)(s.em,{children:"v3"})," dans le process source et retourne leurs valeurs dans l'instance des m\xeames variables du process courant :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcess;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,l.jsx)(s.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,l.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,l.jsx)(s.em,{children:"_o_DRAG AND DROP PROPERTIES"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"Introduction aux process"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.em,{children:"Pr\xe9sentation du Glisser-D\xe9poser"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]}),"\n",(0,l.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(s.td,{children:"371"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Thread safe"}),(0,l.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return t},a:function(){return i}});var n=r(667294);let l={},a=n.createContext(l);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);