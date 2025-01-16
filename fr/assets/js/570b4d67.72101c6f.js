"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["112"],{803191:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-get-objects","title":"LISTBOX GET OBJECTS","description":"LISTBOX GET OBJECTS ( { ;} objet ; tabNomsObj* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-objects.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-objects","permalink":"/docs/fr/20-R7/commands/listbox-get-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-objects.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-objects","title":"LISTBOX GET OBJECTS","slug":"/commands/listbox-get-objects","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get number of rows","permalink":"/docs/fr/20-R7/commands/listbox-get-number-of-rows"},"next":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/fr/20-R7/commands/listbox-get-print-information"}}'),r=s("785893"),i=s("250065");let o={id:"listbox-get-objects",title:"LISTBOX GET OBJECTS",slug:"/commands/listbox-get-objects",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX GET OBJECTS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"tabNomsObj"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabNomsObj"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Noms des sous-objets de la list box (en-t\xeates, colonnes, pieds)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LISTBOX GET OBJECTS"})," retourne un tableau contenant les noms de chaque objet composant la list box d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"tabNomsObj"})," un tableau texte qui sera automatiquement rempli par la commande. Les noms des objets sont retourn\xe9s dans leur ordre d\u2019affichage, avec la s\xe9quence suivante :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"nomCol1"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nomEnt\xeateCol1"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nomPiedCol1"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nomCol2"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nomEnt\xeateCol2"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"nomPiedCol2"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"..."})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Le tableau retourne les noms des objets de toutes les colonnes (y compris les pieds de colonnes), quel que soit leur statut visible/invisible."}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande est utile dans le contexte de l\u2019analyse d\u2019un formulaire via les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-load",children:"FORM LOAD"}),", ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-get-objects",children:"FORM GET OBJECTS"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-get-type",children:"OBJECT Get type"}),". Elle permet, si n\xe9cessaire, d\u2019obtenir les noms des sous-objets des list box."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez charger un formulaire et obtenir la liste de tous les objets des list box qu\u2019il contient."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MonFormulaire")\n\xa0ARRAY TEXT(tabObjets;0)\n\xa0FORM GET OBJECTS(tabObjets)\n\xa0ARRAY LONGINT(ar_type;Taille tableau(tabObjets))\n\xa0For($i;1;Size of array(tabObjets))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;tabObjets{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(tabObjetsLB;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;tabObjets{$i};tabObjetsLB)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-load",children:"FORM LOAD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-get-type",children:"OBJECT Get type"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1302"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);