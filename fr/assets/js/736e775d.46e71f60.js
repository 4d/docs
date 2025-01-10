"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72014"],{628791:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/ob-set-array","title":"OB SET ARRAY","description":"OB SET ARRAY ( objet ; propri\xe9t\xe9 ; tableau )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set-array.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-array","permalink":"/docs/fr/commands/ob-set-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set-array","title":"OB SET ARRAY","slug":"/commands/ob-set-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET","permalink":"/docs/fr/commands/ob-set"},"next":{"title":"OB SET NULL","permalink":"/docs/fr/commands/ob-set-null"}}'),t=r("785893"),a=r("250065");let i={id:"ob-set-array",title:"OB SET ARRAY",slug:"/commands/ob-set-array",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB SET ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,t.jsx)(n.em,{children:"tableau"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 d\xe9finir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array, Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau \xe0 stocker dans la propri\xe9t\xe9"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB SET ARRAY"})," permet de d\xe9finir le ",(0,t.jsx)(n.em,{children:"tableau"})," \xe0 associer \xe0 la ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," dans l\u2019objet de langage d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),".doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,t.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 \xe0 cr\xe9er ou \xe0 modifier. Si la propri\xe9t\xe9 existe d\xe9j\xe0 dans ",(0,t.jsx)(n.em,{children:"objet"}),", sa valeur sera mise \xe0 jour. Si elle n\u2019existe pas, elle est cr\xe9\xe9e. Attention, le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"tableau"})," le tableau devant \xeatre pass\xe9 comme valeur de la propri\xe9t\xe9. Plusieurs types de tableaux sont pris en charge : r\xe9el, entier long, texte, bool\xe9en, objet, pointeur ou image."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les variables simples sont prises en charge dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"tableau"}),", auquel cas un tableau \xe0 valeur unique est cr\xe9\xe9 et associ\xe9 \xe0 la propri\xe9t\xe9."]}),"\n",(0,t.jsx)(n.li,{children:"Il n\u2019est pas possible d\u2019utiliser de tableaux \xe0 deux dimensions."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d\u2019un tableau texte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children : Object\n\xa0ARRAY TEXT($tabChildren;3)\n\xa0$tabChildren{1}:="Richard"\n\xa0$tabChildren{2}:="Susan"\n\xa0$tabChildren{3}:="James"\n\xa0\n\xa0OB SET ARRAY($Children;"Children";$tabChildren)\n\xa0\xa0\xa0\xa0\xa0// Valeur de $Children = {"Children":["Richard","Susan","James"]}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Ajout d\u2019un \xe9l\xe9ment dans un tableau :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($tabText;2)\n\xa0$tabText{1}:="Smith"\n\xa0$tabText{2}:="White"\n\xa0var $Employees : Object\n\xa0OB SET ARRAY($Employees;"Employ\xe9s";$tabText)\n\xa0APPEND TO ARRAY($tabText;"Brown")\xa0//Ajout dans le tableau 4D\n\xa0\xa0\xa0\xa0\xa0// $Employees = {"Employ\xe9s":["Smith","White"]}\n\xa0\n\xa0OB SET ARRAY($Employees;"Employ\xe9s";$tabText)\n\xa0\xa0\xa0\xa0\xa0// $Employees = {"Employ\xe9s":["Smith","White","Brown"]}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d\u2019un tableau texte avec s\xe9lection d\u2019un \xe9l\xe9ment :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0//$Employees = {"Employ\xe9s":["Smith","White","Brown"]}\n\xa0OB SET ARRAY($Employees ;"Manager";$tabText{1})\n\xa0\xa0\xa0\xa0\xa0//$Employees = {"Employees":["Smith","White","Brown"],"Manager":["Smith"]}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d\u2019un tableau objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Enfants;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($tabEnfants;0)\n\xa0OB SET($ref_richard;"nom";"Richard";"age";7)\n\xa0APPEND TO ARRAY($tabEnfants;$ref_richard)\n\xa0OB SET($ref_susan;"nom";"Susan";"age";4)\n\xa0APPEND TO ARRAY($tabEnfants;$ref_susan)\n\xa0OB SET($ref_james;"nom";"James";"age";3)\n\xa0\n\xa0APPEND TO ARRAY($tabEnfants;$ref_james)\n\xa0\n\xa0\xa0\xa0\xa0\xa0//$tabEnfants {1} = {"nom":"Richard","age":7}\n\xa0\xa0\xa0\xa0\xa0//$tabEnfants {2} = {"nom":"Susan","age":4}\n\xa0\xa0\xa0\xa0\xa0//$tabEnfants {3} = {"nom":"James","age":3}\n\xa0\n\xa0OB SET ARRAY($Enfants;"Enfants";$tabEnfants)\n\xa0\n\xa0\xa0\xa0\xa0\xa0// $Enfants = {"Enfants":[{"nom":"Richard","age":7},{"nom":"Susan",\n\xa0\xa0\xa0\xa0\xa0// "age":4},{"nom":"James","age":3}]}\n'})}),"\n",(0,t.jsx)(n.p,{children:"L\u2019objet est repr\xe9sent\xe9 ainsi dans le d\xe9bogueur :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(723881).Z+"",width:"598",height:"136"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d'un champ objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrGirls;3)\n\xa0$arrGirls{1}:="Emma"\n\xa0$arrGirls{2}:="Susan"\n\xa0$arrGirls{3}:="Jamie"\n\xa0OB SET ARRAY([Personnes]Enfants;"Girls";$arrGirls)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(949488).Z+"",width:"307",height:"117"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Conversions de type entre les collections et les tableaux 4D"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-get-array",children:"OB GET ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-set",children:"OB SET"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1227"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},723881:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict1211436.fr-fc6d58870652302f7a845dc33f15171c.png"},949488:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);