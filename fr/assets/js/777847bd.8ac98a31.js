"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61221"],{91659:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/order-by-formula","title":"ORDER BY FORMULA","description":"ORDER BY FORMULA ( laTable ; formule {; >\xa0ou\xa0\xa0ou\xa0\xa0ou\xa0<N} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/order-by-formula.md","sourceDirName":"commands-legacy","slug":"/commands/order-by-formula","permalink":"/docs/fr/20-R7/commands/order-by-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"order-by-formula","title":"ORDER BY FORMULA","slug":"/commands/order-by-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY ATTRIBUTE","permalink":"/docs/fr/20-R7/commands/order-by-attribute"},"next":{"title":"QUERY","permalink":"/docs/fr/20-R7/commands/query"}}'),t=n("785893"),l=n("250065");let i={id:"order-by-formula",title:"ORDER BY FORMULA",slug:"/commands/order-by-formula",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ORDER BY FORMULA"})," ( ",(0,t.jsx)(r.em,{children:"laTable"})," ; ",(0,t.jsx)(r.em,{children:"formule"})," {; >\xa0ou\xa0<}{; ",(0,t.jsx)(r.em,{children:"formule2"})," ; >\xa0ou\xa0<2 ; ... ; ",(0,t.jsx)(r.em,{children:"formuleN"})," ; >\xa0ou\xa0<N} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"laTable"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Table de laquelle trier la s\xe9lection d'enregistrements"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"formule"}),(0,t.jsx)(r.td,{children:"Expression"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Formule de tri des enregistrements (peut \xeatre de type Alphanum\xe9rique, R\xe9el, Entier, Entier long, Date, Heure ou Bool\xe9en)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:">\xa0ou\xa0<"}),(0,t.jsx)(r.td,{children:"Op\xe9rateur"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Ordre de tri pour chaque niveau : > ordre croissant ou < ordre d\xe9croissant"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ORDER BY FORMULA"})," trie (r\xe9ordonne) les enregistrements de la s\xe9lection courante de ",(0,t.jsx)(r.em,{children:"laTable"})," pour le process courant sur le crit\xe8re de tri d\xe9fini par ",(0,t.jsx)(r.em,{children:"formule"}),". Une fois le tri effectu\xe9, le premier enregistrement de la s\xe9lection courante devient le nouvel enregistrement courant."]}),"\n",(0,t.jsxs)(r.p,{children:["Notez que vous devez sp\xe9cifier ",(0,t.jsx)(r.em,{children:"laTable"}),". Vous ne pouvez pas utiliser une table par d\xe9faut."]}),"\n",(0,t.jsxs)(r.p,{children:["Vous pouvez trier la s\xe9lection sur un ou plusieurs niveaux. Pour chaque niveau, vous passez une expression dans ",(0,t.jsx)(r.em,{children:"expression"})," et un ordre de tri dans ",(0,t.jsx)(r.em,{children:"> ou <"}),". Si vous passez le symbole \u201Csup\xe9rieur \xe0\u201D (",(0,t.jsx)(r.em,{children:">"}),"), l'ordre est croissant. Si vous passez le symbole \u201Cinf\xe9rieur \xe0\u201D (",(0,t.jsx)(r.em,{children:"<"}),"), l'ordre est d\xe9croissant. Si vous ne passez pas ce param\xe8tre, l'ordre est par d\xe9faut croissant."]}),"\n",(0,t.jsxs)(r.p,{children:["Le param\xe8tre ",(0,t.jsx)(r.em,{children:"formule"})," peut \xeatre de type Alpha, R\xe9el, Entier, Entier long, Date, Heure ou Bool\xe9en."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Attention :"})," Les param\xe8tres ($1...$n) ne sont pas pris en charge par ",(0,t.jsx)(r.em,{children:"formule"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si ",(0,t.jsx)(r.strong,{children:"ORDER BY FORMULA"})," est utilis\xe9 avec ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/break-level",children:"BREAK LEVEL"})," et une variable locale, les trois commandes doivent \xeatre ex\xe9cut\xe9es ",(0,t.jsx)(r.em,{children:"depuis la m\xeame m\xe9thode"}),", sinon une erreur sera g\xe9n\xe9r\xe9e. En effet, ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"})," doit r\xe9\xe9valuer la formule pour calculer les valeurs de rupture. Par exemple, si vous ex\xe9cutez ",(0,t.jsx)(r.strong,{children:"ORDER BY FORMULA"}),"( [T1] ; [T1]f1 > $value) \xe0 partir d'une m\xe9thode, le tri est effectu\xe9 et la m\xe9thode se termine. Tout appel ult\xe9rieur \xe0 ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"})," et ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/break-level",children:"BREAK LEVEL"})," \xe9chouera car ",(0,t.jsx)(r.em,{children:"$value"})," n'existe plus et la formule ne peut pas \xeatre \xe9valu\xe9e."]}),"\n",(0,t.jsxs)(r.p,{children:["Quelle que soit la mani\xe8re dont le tri est d\xe9fini, si l'op\xe9ration risque de prendre un certain temps, 4D affiche automatiquement un message contenant un thermom\xe8tre de progression. Vous pouvez d\xe9cider d'afficher ou de ne pas afficher ce message pour le process \xe0 l'aide des commandes ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/messages-on",children:"MESSAGES ON"})," et ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/messages-off",children:"MESSAGES OFF"}),". Si le thermom\xe8tre de progression est affich\xe9, l'utilisateur peut cliquer sur le bouton ",(0,t.jsx)(r.strong,{children:"Stop"})," pour interrompre l'op\xe9ration. Si le tri s'est correctement d\xe9roul\xe9, la variable syst\xe8me OK prend la valeur 1. Sinon, si le tri est interrompu, OK prend la valeur 0 (z\xe9ro)."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"4D Server :"})," Cette commande est ex\xe9cut\xe9e sur le serveur, ce qui optimise son ex\xe9cution. A noter qu\u2019en cas d\u2019appel direct de variables dans la ",(0,t.jsx)(r.em,{children:"formule"}),", la requ\xeate est calcul\xe9e avec la valeur de la variable sur le poste client. Par exemple, l\u2019instruction ",(0,t.jsx)(r.strong,{children:"ORDER BY FORMULA([matable];[matable]monchamp*mavariable)"})," sera ex\xe9cut\xe9e sur le serveur mais avec le contenu de la variable ",(0,t.jsx)(r.em,{children:"mavariable"})," du client.",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Note de compatibilit\xe9 :"})," Jusqu'\xe0 4D Server v11, cette commande \xe9tait ex\xe9cut\xe9e sur le poste client. Par compatibilit\xe9, ce fonctionnement est maintenu dans les bases de donn\xe9es converties. Toutefois, une propri\xe9t\xe9 de compatibilit\xe9 et un s\xe9lecteur de la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," permettent d'adopter l'ex\xe9cution sur serveur dans les bases de donn\xe9es converties."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.p,{children:"L'exemple suivant trie les enregistrements de la table [Personnes] dans l'ordre d\xe9croissant par rapport \xe0 la longueur du nom de famille de chaque personne. L'enregistrement de la personne qui a le nom le plus long sera le premier enregistrement de la s\xe9lection courante :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0ORDER BY FORMULA([Personnes];Length([Personnes]Nom);<)\n"})}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/commands/order-by",children:"ORDER BY"})}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"300"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modifie les variables"}),(0,t.jsx)(r.td,{children:"OK"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(r.td,{})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var s=n(667294);let t={},l=s.createContext(t);function i(e){let r=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);