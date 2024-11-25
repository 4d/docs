"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38989"],{304717:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/spell-check-text","title":"SPELL CHECK TEXT","description":"SPELL CHECK TEXT ( leTexte ; posErr ; longErr ; posV\xe9rif ; tabSuggest )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-check-text.md","sourceDirName":"commands-legacy","slug":"/commands/spell-check-text","permalink":"/docs/fr/commands/spell-check-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-check-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"spell-check-text","title":"SPELL CHECK TEXT","slug":"/commands/spell-check-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL ADD TO USER DICTIONARY","permalink":"/docs/fr/commands/spell-add-to-user-dictionary"},"next":{"title":"SPELL CHECKING","permalink":"/docs/fr/commands/spell-checking"}}'),s=r("785893"),i=r("250065");let d={id:"spell-check-text",title:"SPELL CHECK TEXT",slug:"/commands/spell-check-text",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SPELL CHECK TEXT"})," ( ",(0,s.jsx)(n.em,{children:"leTexte"})," ; ",(0,s.jsx)(n.em,{children:"posErr"})," ; ",(0,s.jsx)(n.em,{children:"longErr"})," ; ",(0,s.jsx)(n.em,{children:"posV\xe9rif"})," ; ",(0,s.jsx)(n.em,{children:"tabSuggest"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"leText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Texte \xe0 v\xe9rifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"posErr"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Position du premier caract\xe8re du mot inconnu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"longErr"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Longueur du mot inconnu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"posV\xe9rif"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position de d\xe9part de la v\xe9rification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabSuggest"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Liste des suggestions"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SPELL CHECK TEXT"})," v\xe9rifie le contenu du param\xe8tre ",(0,s.jsx)(n.em,{children:"leTexte"})," \xe0 partir du caract\xe8re ",(0,s.jsx)(n.em,{children:"posV\xe9rif"})," et retourne la position du premier mot inconnu rencontr\xe9 (le cas \xe9ch\xe9ant)."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande retourne la position du premier caract\xe8re de ce mot dans ",(0,s.jsx)(n.em,{children:"posErr"})," et sa longueur dans ",(0,s.jsx)(n.em,{children:"longErr"}),". Le tableau ",(0,s.jsx)(n.em,{children:"tabSuggest"})," re\xe7oit la ou les suggestion(s) de correction propos\xe9e(s) par le correcteur orthographique."]}),"\n",(0,s.jsx)(n.p,{children:"Si la v\xe9rification d\xe9marre sans erreur et qu\u2019un mot inconnu est rencontr\xe9, la variable syst\xe8me OK prend la valeur 0. Si une erreur d\u2019initialisation se produit lors de la v\xe9rification ou si aucun mot n\u2019est inconnu, OK prend la valeur 1."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note OS X :"})," Sous OS X lorsque le correcteur natif est activ\xe9, cette commande ne prend pas en charge la correction grammaticale."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"On souhaite compter le nombre de fautes potentielles dans un texte :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$pos:=1\n\xa0$errCount:=0\n\xa0ARRAY TEXT($tErrors;0)\n\xa0ARRAY TEXT($tSuggestions;0)\n\xa0Repeat\n\xa0\xa0\xa0\xa0SPELL CHECK TEXT($myText;$errPos;$errLong;$pos;$tSuggestions)\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$errCount:=$errCount+1\xa0// compteur de fautes\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$errorWord:=Substring($myText;$errPos;$errLong)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($tErrors;$errorWord)\xa0// tableau des fautes\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pos:=$errPos+$errLong \xa0//poursuite de la v\xe9rification\n\xa0\xa0\xa0\xa0End if\n\xa0Until(OK=1)\n\xa0\xa0// Au final $errCount=Size of array($tErrors)\n\xa0\xa0// fr: $errCount=Taille tableau($tErrors)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/spell-add-to-user-dictionary",children:"SPELL ADD TO USER DICTIONARY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/spell-checking",children:"SPELL CHECKING"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);