"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63287"],{878290:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/choose","title":"Choose","description":"Choose ( crit\xe8re ; valeur {; valeur2 ; ... ; valeurN} )  : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/choose.md","sourceDirName":"commands-legacy","slug":"/commands/choose","permalink":"/docs/fr/commands/choose","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchoose.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"choose","title":"Choose","slug":"/commands/choose","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 ENCODE","permalink":"/docs/fr/commands/base64-encode"},"next":{"title":"Generate digest","permalink":"/docs/fr/commands/generate-digest"}}'),t=r("785893"),l=r("250065");let i={id:"choose",title:"Choose",slug:"/commands/choose",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Choose"})," ( ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; ",(0,t.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"valeurN"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"crit\xe8re"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur \xe0 tester"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeurs possibles"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur de crit\xe8re"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Choose"})," retourne l\u2019une des valeurs pass\xe9es dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"valeur"}),", ",(0,t.jsx)(n.em,{children:"valeur2"}),", etc. en fonction de la valeur du param\xe8tre ",(0,t.jsx)(n.em,{children:"crit\xe8re"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer un param\xe8tre ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," de type bool\xe9en ou num\xe9rique :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," est un bool\xe9en, ",(0,t.jsx)(n.strong,{children:"Choose"})," retourne ",(0,t.jsx)(n.em,{children:"valeur"})," si le bool\xe9en vaut Vrai et ",(0,t.jsx)(n.em,{children:"valeur2"})," si le bool\xe9en vaut Faux. Dans ce cas, la commande attend exactement trois param\xe8tres : ",(0,t.jsx)(n.em,{children:"crit\xe8re"}),", ",(0,t.jsx)(n.em,{children:"valeur"})," et ",(0,t.jsx)(n.em,{children:"valeur2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," est un entier, ",(0,t.jsx)(n.strong,{children:"Choose"})," retourne la valeur dont la position correspond \xe0 ",(0,t.jsx)(n.em,{children:"crit\xe8re"}),". Attention, la num\xe9rotation des valeurs d\xe9bute \xe0 0 (la position de ",(0,t.jsx)(n.em,{children:"valeur"})," est 0). Dans ce cas, la commande attend au minimum deux param\xe8tres : ",(0,t.jsx)(n.em,{children:"crit\xe8re"})," et ",(0,t.jsx)(n.em,{children:"valeur"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La commande accepte tous les types de donn\xe9es pour le(s) param\xe8tre(s) ",(0,t.jsx)(n.em,{children:"valeur"}),", hormis les images, pointeurs, BLOBS et tableaux. Veillez cependant \xe0 ce que toutes les valeurs pass\xe9es soient du m\xeame type, 4D n\u2019effectue pas de v\xe9rification sur ce point."]}),"\n",(0,t.jsxs)(n.p,{children:["Si aucune ",(0,t.jsx)(n.em,{children:"valeur"})," ne correspond \xe0 ",(0,t.jsx)(n.em,{children:"crit\xe8re"}),", ",(0,t.jsx)(n.strong,{children:"Choose"})," retourne une valeur \u201Cnulle\u201D en rapport avec le type du param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," (par exemple 0 pour le type num\xe9rique, \u201C\u201D pour le type cha\xeene, etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande permet de g\xe9n\xe9rer du code concis en remplacement des tests du type \u201CAu cas ou\u201D sur plusieurs lignes (cf. exemple 2). Elle est \xe9galement tr\xe8s utile dans les emplacements o\xf9 des formules peuvent \xeatre ex\xe9cut\xe9es : \xe9diteur de recherches, appliquer une formule, \xe9diteur d\u2019\xe9tats rapides, colonne calcul\xe9e de list box, etc."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Avant d'\xeatre ex\xe9cut\xe9e, la commande ",(0,t.jsx)(n.strong,{children:"Choose"})," \xe9value chaque param\xe8tre valeur. Cela signifie que :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si valeur est une expression dynamique qui entra\xeene des effets secondaires (mise \xe0 jour d'un compteur, modifications en tous genres), ces effets se produiront dans tous les cas ;"}),"\n",(0,t.jsxs)(n.li,{children:["Si un param\xe8tre valeur n'est pas une expression valide, ",(0,t.jsx)(n.strong,{children:"Choose"})," retournera une erreur dans tous les cas. Par exemple, le code suivant retournera une erreur :"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$res:=Choose(True;"red1";"blue"+2)\xa0//erreur  \n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Voici une utilisation type de la commande avec un crit\xe8re bool\xe9en :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vTitre:=Choose([Personne]Masculin;"Mr";"Madame")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ce code est strictement \xe9quivalent \xe0 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0If([Personne]Masculin)\n\xa0\xa0\xa0\xa0vTitre:="Mr"\n\xa0Else\n\xa0\xa0\xa0\xa0vTitre:="Madame"\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Voici une utilisation type de la commande avec un crit\xe8re num\xe9rique :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vStatut:=Choose([Personne]Statut;"C\xe9libataire";"Mari\xe9";"Veuf";"Divorc\xe9")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ce code est strictement \xe9quivalent \xe0 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:([Personne]Statut=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vStatut:="C\xe9libataire"\n\xa0\xa0\xa0\xa0:([Personne]Statut=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vStatut:="Mari\xe9"\n\xa0\xa0\xa0\xa0:([Personne]Statut=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vStatut:="Veuf"\n\xa0\xa0\xa0\xa0:([Personne]Statut=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vStatut:="Divorc\xe9"\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"955"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);