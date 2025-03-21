"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60047"],{475508:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/array-to-list","title":"ARRAY TO LIST","description":"ARRAY TO LIST ( tableau ; liste {; r\xe9fEl\xe9ments} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-list","permalink":"/docs/fr/20-R7/commands/array-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-to-list","title":"ARRAY TO LIST","slug":"/commands/array-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TIME","permalink":"/docs/fr/20-R7/commands/array-time"},"next":{"title":"ARRAY TO SELECTION","permalink":"/docs/fr/20-R7/commands/array-to-selection"}}'),t=s("785893"),i=s("250065");let l={id:"array-to-list",title:"ARRAY TO LIST",slug:"/commands/array-to-list",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Exemple",id:"exemple-1",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," ( ",(0,t.jsx)(n.em,{children:"tableau"})," ; ",(0,t.jsx)(n.em,{children:"liste"})," {; ",(0,t.jsx)(n.em,{children:"r\xe9fEl\xe9ments"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau duquel copier les \xe9l\xe9ments"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"liste"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom ou r\xe9f\xe9rence de la liste dans laquelle copier les \xe9l\xe9ments du tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r\xe9fEl\xe9ments"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau num\xe9rique des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," cr\xe9e ou remplace la liste hi\xe9rarchique ou l'\xe9num\xe9ration ",(0,t.jsx)(n.em,{children:"liste"})," en utilisant les \xe9l\xe9ments du tableau ",(0,t.jsx)(n.em,{children:"tableau"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"liste"})," soit un nom d'\xe9num\xe9ration (une cha\xeene) soit une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,t.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"RefListe"}),"). Dans ce deuxi\xe8me cas, la liste doit d\xe9j\xe0 avoir \xe9t\xe9 cr\xe9\xe9e (par exemple via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/new-list",children:"New list"}),") pour que la commande fonctionne."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"r\xe9fEl\xe9ments"}),", s'il est pass\xe9, doit \xeatre un tableau de type num\xe9rique synchronis\xe9 avec le tableau ",(0,t.jsx)(n.em,{children:"tableau"}),". Chaque \xe9l\xe9ment de ce tableau indique le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment de la liste correspondant dans ",(0,t.jsx)(n.em,{children:"tableau"}),". Si ce param\xe8tre est omis, 4D affecte automatiquement aux \xe9l\xe9ments de la liste les num\xe9ros de r\xe9f\xe9rence 1, 2... N."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," La commande ",(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," doit \xeatre utilis\xe9e avec pr\xe9caution du fait des limitations suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cette commande permet de d\xe9finir seulement les \xe9l\xe9ments du premier niveau de la liste."}),"\n",(0,t.jsx)(n.li,{children:"lorsque vous l'utilisez avec une \xe9num\xe9ration, cette commande modifie la structure de l'application (les \xe9num\xe9rations sont stock\xe9es dans le fichier de structure), les modifications effectu\xe9es en local seront donc perdues lors de mise \xe0 jour du fichier de structure en production."}),"\n",(0,t.jsx)(n.li,{children:"cette commande ne peut pas \xeatre utilis\xe9e avec une \xe9num\xe9ration dans une structure charg\xe9e en lecture seule, telle qu'un projet .4dz ou un composant."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser ",(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," pour construire une liste bas\xe9e sur les \xe9l\xe9ments d'un tableau. Cependant, pour vous affranchir de ces contraintes et exploiter pleinement les listes de valeurs, il est conseill\xe9 d'utiliser les commandes du th\xe8me ",(0,t.jsx)(n.em,{children:"Listes hi\xe9rarchiques"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant copie le tableau ",(0,t.jsx)(n.em,{children:"tabR\xe9gions"}),' dans l\'\xe9num\xe9ration "R\xe9gions" :']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TO LIST(tabR\xe9gions;"R\xe9gions")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez placer les valeurs distinctes d\u2019un champ dans une liste, par exemple pour cr\xe9er un pop up menu hi\xe9rarchique. Vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Company])\n\xa0DISTINCT VALUES([Company]country;$tabPays)\n\xa0listePays:=New list\n\xa0ARRAY TO LIST($tabPays;listePays)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"ARRAY TO LIST"})," g\xe9n\xe8re l'erreur ",(0,t.jsx)(n.em,{children:"-9957"})," lorsqu'elle est appliqu\xe9e \xe0 une \xe9num\xe9ration en cours de modification en mode D\xe9veloppement. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode projet de gestion des erreurs install\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/list-to-array",children:"LIST TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/load-list",children:"Load list"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"287"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);