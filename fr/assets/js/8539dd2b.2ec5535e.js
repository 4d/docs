"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95203"],{820449:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/reject","title":"REJECT","description":"REJECT {( leChamp )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/reject.md","sourceDirName":"commands-legacy","slug":"/commands/reject","permalink":"/docs/fr/commands/reject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"reject","title":"REJECT","slug":"/commands/reject","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Old","permalink":"/docs/fr/commands/old"},"next":{"title":"Data Security","permalink":"/docs/fr/category/data-security"}}'),t=s("785893"),i=s("250065");let a={id:"reject",title:"REJECT",slug:"/commands/reject",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REJECT"})," {( ",(0,t.jsx)(n.em,{children:"leChamp"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Champ dont la saisie doit \xeatre refus\xe9e"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"REJECT"})," accepte deux syntaxes. Dans la premi\xe8re syntaxe, ",(0,t.jsx)(n.strong,{children:"REJECT"})," n'a pas de param\xe8tre. Dans ce cas, la commande rejette la totalit\xe9 de la saisie et force l'utilisateur \xe0 rester dans le formulaire. La seconde syntaxe permet de ne refuser que ",(0,t.jsx)(n.em,{children:"leChamp"})," et force l'utilisateur \xe0 rester dans le champ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Nous vous conseillons d'utiliser en priorit\xe9 les outils int\xe9gr\xe9s de validation de saisie de 4D, avant de faire appel \xe0 cette commande."]}),"\n",(0,t.jsxs)(n.p,{children:["La premi\xe8re syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"})," est utilis\xe9e pour emp\xeacher l'utilisateur de valider un enregistrement incomplet. Vous pouvez parvenir au m\xeame r\xe9sultat sans utiliser ",(0,t.jsx)(n.strong,{children:"REJECT"})," : associez la touche ",(0,t.jsx)(n.strong,{children:"Entr\xe9e"})," \xe0 un bouton n'effectuant \"Pas d'action\" et utilisez les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})," pour valider ou annuler l'enregistrement, une fois que les champs ont \xe9t\xe9 correctement remplis. Il est recommand\xe9 d'employer cette seconde technique plut\xf4t que d'utiliser la premi\xe8re syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En g\xe9n\xe9ral, vous employez la premi\xe8re syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"})," pour emp\xeacher l'utilisateur de valider un enregistrement incomplet ou comportant des valeurs incorrectes. Si l'utilisateur tente de valider l'enregistrement, l'ex\xe9cution de ",(0,t.jsx)(n.strong,{children:"REJECT"})," provoque l'annulation de cette commande et l'enregistrement reste affich\xe9 dans le formulaire. L'utilisateur doit alors recommencer la saisie jusqu'\xe0 ce que les valeurs soient consid\xe9r\xe9es comme correctes ou annuler l'enregistrement."]}),"\n",(0,t.jsxs)(n.p,{children:["Le meilleur emplacement pour la commande ",(0,t.jsx)(n.strong,{children:"REJECT"}),", lorsque vous utilisez cette syntaxe, est la m\xe9thode objet d'un bouton de type Valider associ\xe9 \xe0 la touche de validation. De cette mani\xe8re, la validation n'est possible que lorsque l'enregistrement est accept\xe9, et l'utilisateur ne peut pas \"forcer\" la validation en appuyant sur la touche ",(0,t.jsx)(n.strong,{children:"Entr\xe9e"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La seconde syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"})," utilise le param\xe8tre ",(0,t.jsx)(n.em,{children:"leChamp"}),". Dans ce cas, le curseur reste dans la zone de saisie du champ, ce qui oblige l'utilisateur \xe0 saisir une valeur correcte.",(0,t.jsx)(n.br,{}),"\nAvec cette syntaxe, la commande ",(0,t.jsx)(n.strong,{children:"REJECT"})," doit imp\xe9rativement \xeatre appel\xe9e dans l'\xe9v\xe9nement formulaire On Data Change.Vous devez placer cette syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"})," soit dans la m\xe9thode formulaire, soit dans la m\xe9thode objet de la zone de saisie. Si vous utilisez ",(0,t.jsx)(n.strong,{children:"REJECT"}),' avec le formulaire "pleine page" d\'un sous-formulaire, placez-la dans la m\xe9thode formulaire ou une m\xe9thode objet du formulaire "pleine page". Lorsqu\'elle est utilis\xe9e avec des champs de sous-formulaires, cette commande ne fait rien.']}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/highlight-text",children:"HIGHLIGHT TEXT"})," pour s\xe9lectionner, \xe0 l'int\xe9rieur du champ, les valeurs qui ont \xe9t\xe9 refus\xe9es."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant illustre la premi\xe8re syntaxe de ",(0,t.jsx)(n.strong,{children:"REJECT"}),", plac\xe9e dans la m\xe9thode objet d'un bouton Valider. La touche ",(0,t.jsx)(n.strong,{children:"Entr\xe9e"})," a \xe9t\xe9 d\xe9finie comme \xe9quivalent clavier pour ce bouton. Cela signifie que m\xeame si l'utilisateur appuie sur cette touche pour valider l'enregistrement, la m\xe9thode objet du bouton sera ex\xe9cut\xe9e. L'enregistrement est une transaction bancaire. Si la transaction est un ch\xe8que, un num\xe9ro de ch\xe8que doit \xeatre saisi. S'il n'y a pas de num\xe9ro, la validation est refus\xe9e :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(([Op\xe9ration]Trans="Ch\xe8que")\xa0&\xa0([Op\xe9ration]Num\xe9ro=""))\xa0// Si c\'est un ch\xe8que sans num\xe9ro...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Veuillez saisir le num\xe9ro du ch\xe8que.")\xa0// Alerter l\'utilisateur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT\xa0// Refuser la saisie\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO OBJECT([Op\xe9ration]Num\xe9ro)\xa0// Placer le curseur dans le champ "num\xe9ro de ch\xe8que"\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant est une partie de la m\xe9thode objet d'un champ ",(0,t.jsx)(n.em,{children:"[Employ\xe9s]Salaire"}),". La m\xe9thode objet teste si la valeur de ce champ est inf\xe9rieure \xe0 10 000 Euros et la refuse si c'est le cas. Vous pourriez effectuer le m\xeame contr\xf4le en sp\xe9cifiant une valeur minimum pour le champ, dans l'\xe9diteur de formulaires du mode D\xe9veloppement :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Data Change)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Employ\xe9s]Salaire<10000)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le salaire annuel doit \xeatre sup\xe9rieur \xe0 10 000 Euros.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT([Employ\xe9s]Salaire)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/goto-object",children:"GOTO OBJECT"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"38"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);