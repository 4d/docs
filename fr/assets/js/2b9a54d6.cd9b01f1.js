"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56640"],{675032:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/execute-formula","title":"EXECUTE FORMULA","description":"EXECUTE FORMULA ( instruction )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-formula.md","sourceDirName":"commands-legacy","slug":"/commands/execute-formula","permalink":"/docs/fr/commands/execute-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-formula","title":"EXECUTE FORMULA","slug":"/commands/execute-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT FORMULA","permalink":"/docs/fr/commands/edit-formula"},"next":{"title":"Formula","permalink":"/docs/fr/commands/formula"}}'),t=s("785893"),i=s("250065");let c={id:"execute-formula",title:"EXECUTE FORMULA",slug:"/commands/execute-formula",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Cache de formules en mode compil\xe9",id:"cache-de-formules-en-mode-compil\xe9",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ( ",(0,t.jsx)(n.em,{children:"instruction"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"instruction"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Code \xe0 ex\xe9cuter"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ex\xe9cute ",(0,t.jsx)(n.em,{children:"instruction"})," comme une ligne de code. Cette commande est destin\xe9e \xe0 \xeatre utilis\xe9e lorsque vous devez \xe9valuer des expressions qui peuvent \xeatre construites ou modifi\xe9es par l'utilisateur."]}),"\n",(0,t.jsxs)(n.p,{children:["La cha\xeene d'instructions doit comporter une seule ligne. Si ",(0,t.jsx)(n.em,{children:"instruction"})," est une cha\xeene vide, ",(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ne fait rien. Le principe est que si ",(0,t.jsx)(n.em,{children:"instruction"})," peut \xeatre ex\xe9cut\xe9e comme une m\xe9thode d'une seule ligne, alors elle s'ex\xe9cutera correctement. La commande ",(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," doit \xeatre utilis\xe9e avec pr\xe9cautions, car elle ralentit la vitesse d'ex\xe9cution. Dans une base compil\xe9e, le code d'",(0,t.jsx)(n.em,{children:"instruction"})," n'est pas compil\xe9. Cela signifie que l'",(0,t.jsx)(n.em,{children:"instruction"})," sera bien ex\xe9cut\xe9e, mais ne sera pas v\xe9rifi\xe9e par le compilateur au moment de la compilation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," L'ex\xe9cution de formules en mode compil\xe9 peut \xeatre optimis\xe9e \xe0 l'aide d'un cache (cf. paragraphe \"Cache de formules en mode compil\xe9\" ci-dessous)."]}),"\n",(0,t.jsxs)(n.p,{children:["L'",(0,t.jsx)(n.em,{children:"instruction"})," peut notamment contenir les \xe9l\xe9ments suivants :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un appel \xe0 une fonction (m\xe9thode projet qui retourne une valeur),"}),"\n",(0,t.jsx)(n.li,{children:"un appel \xe0 une commande 4D,"}),"\n",(0,t.jsx)(n.li,{children:"une assignation."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"instruction"})," est une m\xe9thode projet, il est recommand\xe9 d'utiliser ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/execute-method",children:"EXECUTE METHOD"})," qui permet de passer des param\xe8tres."]}),"\n",(0,t.jsxs)(n.li,{children:["Il est d\xe9conseill\xe9 d'appeler des commandes de d\xe9claration de variables telles que ",(0,t.jsx)(n.a,{href:"c-date.md",children:"C_DATE"})," dans ",(0,t.jsx)(n.em,{children:"instruction"})," afin d'\xe9viter tout risque de conflit de type."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La formule peut utiliser des variables process et interprocess. En revanche, ",(0,t.jsx)(n.em,{children:"instruction"}),' ne doit pas contenir d\'instructions de contr\xf4le de flux (Si, Tant que...) car le code doit "tenir" sur une seule ligne.']}),"\n",(0,t.jsxs)(n.p,{children:["Pour assurer une \xe9valuation correcte de l'",(0,t.jsx)(n.em,{children:"instruction"})," quelle que soit la langue ou la version de 4D, il est recommand\xe9 d'utiliser la syntaxe ",(0,t.jsx)(n.em,{children:"tokenis\xe9e"})," pour les \xe9l\xe9ments dont le nom peut varier au fil des versions (commandes, tables, champs, constantes). Par exemple, pour ins\xe9rer la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/current-time",children:"Current time"}),", saisissez '",(0,t.jsx)(n.strong,{children:"Current time:C178"}),"'. Pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Utiliser des tokens dans les formules"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"cache-de-formules-en-mode-compil\xe9",children:"Cache de formules en mode compil\xe9"}),"\n",(0,t.jsxs)(n.p,{children:["A des fins d'optimisation, chaque formule ex\xe9cut\xe9e via ",(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," en mode compil\xe9 peut \xeatre conserv\xe9e en m\xe9moire dans un cache d\xe9di\xe9. La formule est stock\xe9e sous forme de r\xe9f\xe9rences (",(0,t.jsx)(n.em,{children:"tokens"}),"). Une fois plac\xe9e dans le cache, une formule s'ex\xe9cutera de mani\xe8re beaucoup plus rapide par la suite car la phase de ",(0,t.jsx)(n.em,{children:"tokenisation"})," sera \xe9vit\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["La taille du cache est de z\xe9ro par d\xe9faut (pas de cache) ; vous devez le cr\xe9er et l'ajuster \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),". Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(Number of formulas in cache;0)\xa0//pas de cache de formules\n\xa0SET DATABASE PARAMETER(Number of formulas in cache;3)\xa0//jusqu'\xe0 trois formules peuvent \xeatre en cache pour chaque process\n"})}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"EXECUTE FORMULA"})," utilise le cache uniquement lorsqu'elle est appel\xe9e depuis une base ou un composant ex\xe9cut\xe9(e) en mode compil\xe9."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Vous voulez ex\xe9cuter une formule incluant des appels \xe0 des commandes et des tables 4D. Comme ces \xe9l\xe9ments peuvent potentiellement \xeatre renomm\xe9s, vous voulez vous assurer de l'ex\xe9cution correcte de l'instruction dans les versions futures de votre application en utilisant la syntaxe avec ",(0,t.jsx)(n.em,{children:"tokens"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE FORMULA("Annee de:C25 ([Products:5]Creation_Date:2])+$add")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/command-name",children:"Command name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/edit-formula",children:"EDIT FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"63"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let t={},i=r.createContext(t);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);