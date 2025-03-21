"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18562"],{420012:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/form-get-objects","title":"FORM GET OBJECTS","description":"FORM GET OBJECTS ( tabObjets {; tabVariables {; tabPages}} {; optionPage | *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-objects.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-objects","permalink":"/docs/fr/20-R7/commands/form-get-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-objects.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-objects","title":"FORM GET OBJECTS","slug":"/commands/form-get-objects","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET HORIZONTAL RESIZING","permalink":"/docs/fr/20-R7/commands/form-get-horizontal-resizing"},"next":{"title":"FORM GET PROPERTIES","permalink":"/docs/fr/20-R7/commands/form-get-properties"}}'),r=n("785893"),a=n("250065");let l={id:"form-get-objects",title:"FORM GET OBJECTS",slug:"/commands/form-get-objects",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Exemple 6",id:"exemple-6",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"FORM GET OBJECTS"})," ( ",(0,r.jsx)(s.em,{children:"tabObjets"})," {; ",(0,r.jsx)(s.em,{children:"tabVariables"})," {; ",(0,r.jsx)(s.em,{children:"tabPages"}),"}} {; optionPage | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabObjets"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Noms des objets du formulaire"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabVariables"}),(0,r.jsx)(s.td,{children:"Pointer array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Pointeurs sur les variables ou champs associ\xe9s aux objets"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabPages"}),(0,r.jsx)(s.td,{children:"Array integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Num\xe9ro de page de chaque objet"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"optionPage | *"}),(0,r.jsx)(s.td,{children:"Entier long, Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsxs)(s.td,{children:["1=Page courante du formulaire, 2=Toutes les pages, 4=Pages h\xe9rit\xe9es",(0,r.jsx)(s.br,{}),"Si * pass\xe9 (obsol\xe8te) = page courante avec objets h\xe9rit\xe9s"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"FORM GET OBJECTS"})," retourne sous forme de tableau(x) la liste de tous les objets pr\xe9sents dans le formulaire courant. Cette liste peut \xeatre restreinte \xe0 la page courante du formulaire et peut exclure les objets des formulaires h\xe9rit\xe9s. La commande peut \xeatre utilis\xe9e avec les formulaires entr\xe9e et sortie."]}),"\n",(0,r.jsx)(s.p,{children:"Si un tableau pass\xe9 en param\xe8tre n\u2019est pas pr\xe9alablement d\xe9clar\xe9, la commande le cr\xe9e et le dimensionne automatiquement. Toutefois, dans la perspective de la compilation de l\u2019application, il est recommand\xe9 de d\xe9clarer explicitement chaque tableau."}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans ",(0,r.jsx)(s.em,{children:"tabObjets"})," le nom du tableau texte devant \xeatre rempli avec les noms des objets (chaque nom d\u2019objet est unique au sein d\u2019un formulaire). L\u2019ordre dans lequel les objets apparaissent dans le tableau n\u2019est pas significatif."]}),"\n",(0,r.jsx)(s.p,{children:"Les autres tableaux remplis facultativement par la commande sont synchronis\xe9s avec le premier."}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans le param\xe8tre facultatif ",(0,r.jsx)(s.em,{children:"tabVariables"})," le nom du tableau de pointeurs devant \xeatre rempli avec des pointeurs vers les variables ou champs associ\xe9s aux objets. Si un objet n\u2019a pas de variable associ\xe9e, le pointeur Nil est retourn\xe9. Dans le cas d\u2019un objet de type \u201Csous-formulaire\u201D, un pointeur sur la table du sous-formulaire est retourn\xe9."]}),"\n",(0,r.jsxs)(s.p,{children:["Le troisi\xe8me tableau (facultatif), ",(0,r.jsx)(s.em,{children:"tabPages"}),", est rempli avec les num\xe9ros de pages du formulaire. Chaque ligne de ce tableau contient le num\xe9ro de la page sur laquelle se trouve l\u2019objet correspondant."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"optionPage"})," vous permet de d\xe9signer la ou les partie(s) du formulaire dont vous souhaitez lire les objets. Par d\xe9faut, si le param\xe8tre ",(0,r.jsx)(s.em,{children:"optionPage"})," est omis (ainsi que le param\xe8tre ",(0,r.jsx)(s.em,{children:"*"}),'), les objets de toutes les pages, y compris les objets h\xe9rit\xe9s, sont retourn\xe9s. Pour d\xe9limiter la port\xe9e de la commande, vous pouvez passer une (ou une combinaison) des constantes suivantes du th\xe8me "',(0,r.jsx)(s.em,{children:"Objets de formulaire (Acc\xe8s)"}),'" dans le param\xe8tre ',(0,r.jsx)(s.em,{children:"optionPage"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Form all pages"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"Retourne tous les objets de toutes les pages, mais exclut les objets h\xe9rit\xe9s"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Form current page"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"Retourne tous les objets de la page courante, y compris ceux de la page 0, mais exclut les objets h\xe9rit\xe9s"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Form inherited"}),(0,r.jsx)(s.td,{children:"Entier long"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"Retourne uniquement les objets h\xe9rit\xe9s"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," Passer le param\xe8tre ",(0,r.jsx)(s.em,{children:"*"})," \xe9quivaut \xe0 passer Form current page+Form inherited. Cependant, la syntaxe utilisant le param\xe8tre ",(0,r.jsx)(s.em,{children:"*"})," est obsol\xe8te et ne doit plus \xeatre utilis\xe9e."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez obtenir les objets de toutes les pages, y compris ceux des formulaires h\xe9rit\xe9s (le cas \xe9ch\xe9ant):"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//Formulaire ouvert\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Ou :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Formulaire charg\xe9\n\xa0FORM LOAD([Table1];"MonForm")\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form all pages+Form inherited)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez obtenir les objets de la page courante du formulaire charg\xe9, incluant la page 0 de ce formulaire ainsi que les objets des formulaires h\xe9rit\xe9s (le cas \xe9ch\xe9ant) :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM LOAD("MonForm")\n\xa0FORM GOTO PAGE(2)\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form current page+Form inherited)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez obtenir les objets des formulaires h\xe9rit\xe9s. S'il n'y a pas de formulaire h\xe9rit\xe9, les tableaux seront retourn\xe9s vides."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM LOAD("MonForm")\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form inherited)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez obtenir les objets de la page 4, ainsi que ceux de la page 0, mais pas ceux des formulaires h\xe9rit\xe9s (le cas \xe9ch\xe9ant) :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM LOAD([Table1];"MyForm")\n\xa0FORM GOTO PAGE(4)\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form current page)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez obtenir les objets de toutes les pages, mais sans ceux des formulaires h\xe9rit\xe9s :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM LOAD([Table1];"MonForm")\n\xa0FORM GET OBJECTS(tabObjets;tabVariables;tabPages;Form all pages)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez charger un formulaire et obtenir la liste de tous les objets des list box qu\u2019il contient."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM LOAD("MonFormulaire")\n\xa0ARRAY TEXT(tabObjets;0)\n\xa0FORM GET OBJECTS(tabObjets)\n\xa0ARRAY LONGINT(ar_type;Taille tableau(tabObjets))\n\xa0For($i;1;Size of array(tabObjets))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;tabObjets{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(tabObjetsLB;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;tabObjets{$i};tabObjetsLB)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Objets (Formulaires)"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Objets de formulaire (Acc\xe8s)"})]}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"898"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return l}});var t=n(667294);let r={},a=t.createContext(r);function l(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);