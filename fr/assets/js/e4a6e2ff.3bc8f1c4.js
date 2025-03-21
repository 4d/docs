"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80148"],{80884:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/modified","title":"Modified","description":"Modified ( leChamp ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modified.md","sourceDirName":"commands-legacy","slug":"/commands/modified","permalink":"/docs/fr/20-R7/commands/modified","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modified","title":"Modified","slug":"/commands/modified","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIALOG","permalink":"/docs/fr/20-R7/commands/dialog"},"next":{"title":"MODIFY RECORD","permalink":"/docs/fr/20-R7/commands/modify-record"}}'),d=s("785893"),r=s("250065");let t={id:"modified",title:"Modified",slug:"/commands/modified",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Modified"})," ( ",(0,d.jsx)(n.em,{children:"leChamp"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"leField"}),(0,d.jsx)(n.td,{children:"Field"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Champ dont vous voulez tester la modification"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Vrai si une nouvelle valeur a \xe9t\xe9 assign\xe9e au champ, sinon Faux"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Modified"})," retourne ",(0,d.jsx)(n.strong,{children:"Vrai"})," si une valeur a \xe9t\xe9 assign\xe9e par programmation au champ ",(0,d.jsx)(n.em,{children:"leChamp"})," ou s'il a \xe9t\xe9 modifi\xe9 lors de la saisie de donn\xe9es. La commande ",(0,d.jsx)(n.strong,{children:"Modified"})," ne fonctionne que lorsqu'elle est appel\xe9e dans le cadre d'une m\xe9thode formulaire (ou d'une sous-m\xe9thode appel\xe9e par la m\xe9thode formulaire)."]}),"\n",(0,d.jsxs)(n.p,{children:["Attention, cette commande ne retourne une valeur significative qu'\xe0 l'int\xe9rieur d'un m\xeame cycle d'ex\xe9cution. Elle est notamment remise \xe0 ",(0,d.jsx)(n.strong,{children:"Faux"})," pour tous les \xe9v\xe9nements formulaires correspondant \xe0 l'ancien cycle d'ex\xe9cution ",(0,d.jsx)(n.em,{children:"_o_During"})," (On Clicked, On After Keystroke...)."]}),"\n",(0,d.jsxs)(n.p,{children:["Dans le cas de la saisie de donn\xe9es, un champ est consid\xe9r\xe9 comme modifi\xe9 \xe0 partir du moment o\xf9 un utilisateur l'\xe9dite (et change ou non sa valeur originale) puis le quitte pour un autre champ ou pour cliquer sur un objet de formulaire. Notez que le fait qu'un utilisateur active puis quitte un champ \xe0 l'aide de la touche Tabulation ne suffit pas en soi \xe0 ce que ",(0,d.jsx)(n.strong,{children:"Modified"})," retourne ",(0,d.jsx)(n.strong,{children:"Vrai"}),". Le champ doit avoir \xe9t\xe9 r\xe9ellement modifi\xe9 pour que ",(0,d.jsx)(n.strong,{children:"Modified"})," retourne ",(0,d.jsx)(n.strong,{children:"Vrai"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Dans le cas de l'ex\xe9cution d'une m\xe9thode, un champ est consid\xe9r\xe9 comme modifi\xe9 si une valeur lui a \xe9t\xe9 assign\xe9e (diff\xe9rente ou non de sa valeur pr\xe9c\xe9dente)."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," La commande ",(0,d.jsx)(n.strong,{children:"Modified"})," retourne toujours ",(0,d.jsx)(n.strong,{children:"Vrai"})," apr\xe8s l'ex\xe9cution des commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/push-record",children:"PUSH RECORD"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/pop-record",children:"POP RECORD"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Dans tous les cas, pour savoir si la valeur d'un champ a \xe9t\xe9 effectivement modifi\xe9e, utilisez la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/old",children:"Old"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Bien que la fonction ",(0,d.jsx)(n.strong,{children:"Modified"})," puisse \xeatre appliqu\xe9e \xe0 tout type de champ, si vous l'utilisez conjointement avec la fonction ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/old",children:"Old"}),", vous devez dans ce cas tenir compte des restrictions li\xe9es \xe0 cette fonction. Reportez-vous \xe0 la description de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/old",children:"Old"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pendant la saisie de donn\xe9es, il est g\xe9n\xe9ralement plus pratique d'effectuer des op\xe9rations dans des m\xe9thodes objet \xe0 l'aide de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"})," que d'utiliser la fonction ",(0,d.jsx)(n.strong,{children:"Modified"})," dans des m\xe9thodes formulaires. Comme une m\xe9thode objet re\xe7oit l'\xe9v\xe9nement On Data Change \xe0 chaque fois qu'un champ est modifi\xe9, utiliser une telle m\xe9thode \xe9quivaut \xe0 appeler ",(0,d.jsx)(n.strong,{children:"Modified"})," dans une m\xe9thode formulaire."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsxs)(n.p,{children:["L'exemple suivant teste si le champ ",(0,d.jsx)(n.em,{children:"[Commandes]Quantit\xe9"})," ou le champ ",(0,d.jsx)(n.em,{children:"[Commandes]Prix"})," a \xe9t\xe9 modifi\xe9. Si c'est le cas, le champ ",(0,d.jsx)(n.em,{children:"[Commandes]Total"})," est recalcul\xe9 :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If((Modified([Commandes]Quantit\xe9)|(Modified([Commandes]Prix))\n\xa0\xa0\xa0\xa0[Commandes]Total:=[Commandes]Quantit\xe9*[Commandes]Prix\n\xa0End if\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Notez que le m\xeame r\xe9sultat aurait pu \xeatre obtenu en utilisant la seconde ligne de cette m\xe9thode en tant que m\xe9thode objet des champs ",(0,d.jsx)(n.em,{children:"[Commandes]Quantit\xe9"})," et ",(0,d.jsx)(n.em,{children:"[Commandes]Prix"})," dans le cadre de l'\xe9v\xe9nement formulaire On Data Change."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsxs)(n.p,{children:["Vous s\xe9lectionnez un enregistrement de la table ",(0,d.jsx)(n.em,{children:"[uneTable]"}),", puis vous appelez plusieurs sous-routines qui sont susceptibles de modifier le champ ",(0,d.jsx)(n.em,{children:"[uneTable]Champ important"})," mais sans provoquer de sauvegarde de l'enregistrement. A la fin de la m\xe9thode principale, vous pouvez utiliser la commande ",(0,d.jsx)(n.strong,{children:"Modified"})," pour d\xe9terminer si vous devez stocker l'enregistrement :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// L'enregistrement a \xe9t\xe9 s\xe9lectionn\xe9 comme enregistrement courant\n\xa0\xa0// Puis vous effectuez des actions \xe0 l'aide des sous-routines\n\xa0FAIRE QUELQUE CHOSE\n\xa0FAIRE AUTRE CHOSE\n\xa0NE PAS OUBLIER DE FAIRE CA\n\xa0\xa0// ...\n\xa0\xa0// Enfin, vous testez le champ pour d\xe9terminer s'il faut stocker l'enregistrement\n\xa0If(Modified([uneTable]Champ important))\n\xa0\xa0\xa0\xa0SAVE RECORD([uneTable])\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/old",children:"Old"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"32"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var i=s(667294);let d={},r=i.createContext(d);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);