"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84213"],{251228:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>a,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/create-index","title":"CREATE INDEX","description":"CREATE INDEX ( laTable ; tabChamps ; typeIndex ; nomIndex {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-index.md","sourceDirName":"commands-legacy","slug":"/commands/create-index","permalink":"/docs/fr/commands/create-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-index","title":"CREATE INDEX","slug":"/commands/create-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"D\xe9finition structure","permalink":"/docs/fr/commands/theme/Structure-Access"},"next":{"title":"DELETE INDEX","permalink":"/docs/fr/commands/delete-index"}}'),t=s("785893"),r=s("250065");let i={id:"create-index",title:"CREATE INDEX",slug:"/commands/create-index",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Note pour le d\xe9ploiement",id:"note-pour-le-d\xe9ploiement",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CREATE INDEX"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," ; ",(0,t.jsx)(n.em,{children:"tabChamps"})," ; ",(0,t.jsx)(n.em,{children:"typeIndex"})," ; ",(0,t.jsx)(n.em,{children:"nomIndex"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table pour laquelle cr\xe9er un index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabChamps"}),(0,t.jsx)(n.td,{children:"Pointer array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pointeur(s) vers le(s) champ(s) \xe0 indexer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeIndex"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type d\u2019index \xe0 cr\xe9er : -1 = Mots-cl\xe9s, 0 = par d\xe9faut, 1 = B-Tree standard, 3 = BTree cluster"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomIndex"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'index \xe0 cr\xe9er"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 = indexation asynchrone"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"CREATE INDEX"})," permet de cr\xe9er :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un index standard sur un ou plusieurs champs (index composite) ou"}),"\n",(0,t.jsx)(n.li,{children:"un index de mots-cl\xe9s sur un champ."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019index est cr\xe9\xe9 pour la table ",(0,t.jsx)(n.em,{children:"laTable"})," en utilisant le ou les champ(s) d\xe9sign\xe9(s) par le tableau de pointeurs ",(0,t.jsx)(n.em,{children:"tabChamps"}),". Ce tableau contient une seule ligne si vous souhaitez cr\xe9er un index simple et deux ou plusieurs lignes si vous souhaitez cr\xe9er un index composite (sauf index de mots-cl\xe9s). Dans le cas d\u2019index composites, l\u2019ordre des champs dans le tableau est important lors de la construction de l\u2019index."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeIndex"})," vous permet de d\xe9finir le type d\u2019index \xe0 cr\xe9er. Vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Type index"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cluster BTree index"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Index de type B-Tree utilisant des clusters. Ce type d\u2019index est optimis\xe9 lorsque l\u2019index contient peu de cl\xe9s, c\u2019est-\xe0-dire lorsque les m\xeames valeurs reviennent souvent dans les donn\xe9es."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default index type"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"4D d\xe9finit le type d\u2019index (hors index de mots-cl\xe9s) le plus optimis\xe9 en fonction du contenu du champ."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Keywords index"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"Permet l\u2019indexation mot \xe0 mot du contenu du champ. Ce type d\u2019index est utilisable avec les champs de type Texte, Alpha et Image. Attention, les index de mots-cl\xe9s ne peuvent pas \xeatre composites."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Standard BTree index"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Index de type B-Tree classique. Ce type d\u2019index polyvalent est utilis\xe9 dans les versions pr\xe9c\xe9dentes de 4D"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Un index B-Tree associ\xe9 \xe0 un champ de type texte stocke au maximum les 1024 premiers caract\xe8res du champ. Par cons\xe9quent dans ce contexte, les recherches sur des cha\xeenes contenant plus de 1024 caract\xe8res ne pourront aboutir."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"nomIndex"})," le nom de l\u2019index \xe0 cr\xe9er. Nommer les index est n\xe9cessaire si plusieurs index de types diff\xe9rents peuvent \xeatre associ\xe9s \xe0 un m\xeame champ et si vous souhaitez pouvoir les supprimer individuellement \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-index",children:"DELETE INDEX"}),". Si l\u2019index ",(0,t.jsx)(n.em,{children:"nomIndex"})," existe d\xe9j\xe0, la commande ne fait rien."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"*"}),", lorsqu\u2019il est pass\xe9, permet d\u2019effectuer l\u2019indexation en mode asynchrone. Dans ce mode, la m\xe9thode d\u2019origine poursuit son ex\xe9cution apr\xe8s l\u2019appel de la commande, que l\u2019indexation soit termin\xe9e ou non."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la commande ",(0,t.jsx)(n.strong,{children:"CREATE INDEX"})," rencontre des enregistrements verrouill\xe9s, elle ne les indexe pas et attend qu\u2019ils soient lib\xe9r\xe9s."]}),"\n",(0,t.jsx)(n.p,{children:"Si une erreur se produit durant l\u2019ex\xe9cution de la commande (champ non indexable, tentative de cr\xe9ation d\u2019index de mots-cl\xe9s sur plusieurs champs, etc.), une erreur est g\xe9n\xe9r\xe9e. Cette erreur peut \xeatre intercept\xe9e \xe0 l\u2019aide d\u2019une m\xe9thode d\u2019appel sur erreur."}),"\n",(0,t.jsx)(n.h2,{id:"note-pour-le-d\xe9ploiement",children:"Note pour le d\xe9ploiement"}),"\n",(0,t.jsx)(n.p,{children:"\xc9tant donn\xe9 que cette commande modifie la structure de la base de donn\xe9es, elle ne peut pas \xeatre utilis\xe9e dans une application packag\xe9e en lecture seule (fichier .4dc install\xe9 dans le dossier Program Files ou fichier .4dz)."}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ation de deux index standard sur les champs \u201CNom\u201D et \u201CT\xe9l\xe9phone\u201D de la table [Clients] :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(tabPtrChp;1)\n\xa0tabPtrChp{1}:=->[Clients]Nom\n\xa0CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"IdxCltNom")\n\xa0tabPtrChp{1}:=->[Clients]T\xe9l\xe9phone\n\xa0CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"IdxCltTel")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ation d\u2019un index de mots-cl\xe9s sur le champ \u201CObservations\u201D de la table [Clients] :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(tabPtrChp;1)\n\xa0tabPtrChp{1}:=->[Clients]Observations\n\xa0CREATE INDEX([Clients];tabPtrChp;Keywords Index;"IdxCltObs")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ation d\u2019un index composite sur les champs \u201CCodePostal\u201D et \u201CVille\u201D de la table [Clients] :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(tabPtrChp;2)\n\xa0tabPtrChp{1}:=->[Clients]CodePostal\n\xa0tabPtrChp{2}:=->[Clients]Ville\n\xa0CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"CPVille")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-index",children:"DELETE INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/resume-indexes",children:"RESUME INDEXES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-index",children:"SET INDEX"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"966"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);