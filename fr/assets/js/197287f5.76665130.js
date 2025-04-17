"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56710"],{732670:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/find-in-array","title":"Find in array","description":"Find in array ( tableau ; valeur {; d\xe9part} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/find-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-array","permalink":"/docs/fr/20-R8/commands/find-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"find-in-array","title":"Find in array","slug":"/commands/find-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT VALUES","permalink":"/docs/fr/20-R8/commands/distinct-values"},"next":{"title":"Find in sorted array","permalink":"/docs/fr/20-R8/commands/find-in-sorted-array"}}'),t=r("785893"),a=r("250065");let i={id:"find-in-array",title:"Find in array",slug:"/commands/find-in-array",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Find in array"})," ( ",(0,t.jsx)(n.em,{children:"tableau"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; ",(0,t.jsx)(n.em,{children:"d\xe9part"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau dans lequel effectuer la recherche"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de m\xeame type \xe0 rechercher dans le tableau"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d\xe9part"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"El\xe9ment \xe0 partir duquel commencer la recherche"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro du premier \xe9l\xe9ment trouv\xe9 correspondant \xe0 valeur"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Find in array"})," retourne le num\xe9ro du premier \xe9l\xe9ment de ",(0,t.jsx)(n.em,{children:"tableau"})," qui correspond \xe0 ",(0,t.jsx)(n.em,{children:"valeur"}),".peut \xeatre utilis\xe9 avec des tableaux de type Texte, Num\xe9rique, Date, Pointeur, Objet et Bool\xe9en. Les param\xe8tres ",(0,t.jsx)(n.em,{children:"tableau"})," et ",(0,t.jsx)(n.em,{children:"valeur"})," doivent \xeatre du m\xeame type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valeur"})," doit correspondre exactement \xe0 l'\xe9l\xe9ment recherch\xe9 (les m\xeames r\xe8gles que pour l'op\xe9rateur d'\xe9galit\xe9 sont mises en oeuvre, voir ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/Concepts/operators#op%C3%A9rateurs-basiques",children:"Op\xe9rateurs basiques"}),"). Si aucun \xe9l\xe9ment n'est trouv\xe9, ",(0,t.jsx)(n.strong,{children:"Find in array"})," renvoie -1."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Avec les tableaux d'objets, vous ne pouvez utiliser que des r\xe9f\xe9rences d'objets dans le param\xe8tre valeur."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"d\xe9part"})," est sp\xe9cifi\xe9, ",(0,t.jsx)(n.strong,{children:"Find in array"})," commence la recherche \xe0 l'\xe9l\xe9ment sp\xe9cifi\xe9 par ",(0,t.jsx)(n.em,{children:"d\xe9part"}),". Si ",(0,t.jsx)(n.em,{children:"d\xe9part"})," n'est pas sp\xe9cifi\xe9, ",(0,t.jsx)(n.strong,{children:"Find in array"})," commence la recherche \xe0 l'\xe9l\xe9ment 1."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet suivante efface tous les \xe9l\xe9ments vides du tableau alpha ou texte pass\xe9 en param\xe8tre :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet NETTOYER TABLEAU\n\xa0\xa0// NETTOYER TABLEAU ( Pointeur )\n\xa0\xa0// NETTOYER TABLEAU ( -> Tableau Texte ou Alpha )\n\xa0\n\xa0#DECLARE ($arrPtr : Pointer) : Pointer\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlElem:=Find in array($arrPtr->;"")\n\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($arrPtr->;$vlElem)\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vlElem<0)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Une fois que cette m\xe9thode projet est impl\xe9ment\xe9e dans votre base, vous pouvez \xe9crire, par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(TabValeurs;...)\n\xa0\xa0// ...\n\xa0\xa0// Use le tableau comme vous voulez\n\xa0\xa0// ...\n\xa0\xa0// Eliminer les \xe9l\xe9ments cha\xeenes vides\n\xa0NETTOYER TABLEAU(->TabValeurs)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet suivante s\xe9lectionne le premier \xe9l\xe9ment d'un tableau dont le pointeur pass\xe9 comme premier param\xe8tre correspond \xe0 la valeur de la variable ou du champ dont le pointeur est pass\xe9 en second param\xe8tre :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet SELECTIONNER ELEMENT\n\xa0\xa0// SELECTIONNER ELEMENT ( Pointeur ; Pointeur)\n\xa0\xa0// SELECTIONNER ELEMENT ( -> Tableau Texte ou Alpha ; -> Champ ou variable de type Texte ou Alpha )\n\xa0\n\xa0#DECLARE($arrPtr : Pointer ; $varPtr : Pointer)\n$arrPtr->:=Find in array($arrPtr->; $varPtr->)\n\xa0If($tabPtr->=-1)\n\xa0\xa0\xa0\xa0$tabPtr->:=0\xa0// Si aucun \xe9l\xe9ment n'est trouv\xe9, fixer le tableau \xe0 aucun \xe9l\xe9ment s\xe9lectionn\xe9\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"Une fois que cette m\xe9thode projet est impl\xe9ment\xe9e dans la base, vous pouvez \xe9crire, par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet du pop-up menu TabTitres\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTIONNER ELEMENT(->TabTitres;->[Personnes]Titre)\n\xa0End case\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cet exemple utilise l'",(0,t.jsx)(n.strong,{children:"\xe9l\xe9ment s\xe9lectionn\xe9"})," du tableau. Gardez \xe0 l'esprit que l'\xe9l\xe9ment s\xe9lectionn\xe9 ne sera pas significatif si le tableau comporte plus de 32767 \xe9l\xe9ments (cf. section ",(0,t.jsx)(n.em,{children:"Tableaux et objets de formulaire"}),"). Il est dans ce cas n\xe9cessaire d'utiliser une variable entier long pour stocker le r\xe9sultat de ",(0,t.jsx)(n.strong,{children:"Find in array"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Vous voulez trouver une r\xe9f\xe9rence d'objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($objects;100)\n\xa0$o1:={a10;b"xyz"}\n\xa0$o2:={a10;b"xyz"}\n\xa0\n\xa0$objects{20}:=$o1\n\xa0var $p : Integer\n\xa0\n\xa0$p:=Find in array($objects;$o1)\xa0//$p = 20\xa0\n\xa0$p:=Find in array($objects;$o2)\xa0//$p = -1\xa0\n\xa0$p:=Find in array($objects;{a10;b"xyz"})\xa0//$p = -1\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/count-in-array",children:"Count in array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/find-in-sorted-array",children:"Find in sorted array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/insert-in-array",children:"INSERT IN ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/size-of-array",children:"Size of array"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"230"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);