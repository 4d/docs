"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53945],{692443:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=n(474848),t=n(28453);const i={id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},a=void 0,r={id:"commands-legacy/font-style-list",title:"FONT STYLE LIST",description:"FONT STYLE LIST ( famillePolice ; listeStylesPolice ; listeNomsPolice )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/font-style-list.md",sourceDirName:"commands-legacy",slug:"/commands/font-style-list",permalink:"/docs/fr/commands/font-style-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-style-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"FONT LIST",permalink:"/docs/fr/commands/font-list"},next:{title:"GET SYSTEM FORMAT",permalink:"/docs/fr/commands/get-system-format"}},o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"FONT STYLE LIST"})," ( ",(0,l.jsx)(s.em,{children:"famillePolice"})," ; ",(0,l.jsx)(s.em,{children:"listeStylesPolice"})," ; ",(0,l.jsx)(s.em,{children:"listeNomsPolice"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"famillePolice"}),(0,l.jsx)(s.td,{children:"Text"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Nom de la famille de police"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"listeStylesPolice"}),(0,l.jsx)(s.td,{children:"Text array"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"Liste des styles pris en charge par la famille de police"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"listeNomsPolice"}),(0,l.jsx)(s.td,{children:"Text array"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"Liste des noms complets pris en charge par la famille de police"})]})]})]}),"\n",(0,l.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["La commande ",(0,l.jsx)(s.strong,{children:"FONT STYLE LIST"})," retourne la liste des styles et la liste des noms complets pris en charge par la famille de police d\xe9sign\xe9e par le param\xe8tre ",(0,l.jsx)(s.em,{children:"famillePolice"}),". Cette commande vous permet de concevoir des interfaces manipulant les familles de polices et les styles de police, en particulier dans le contexte des zones ",(0,l.jsx)(s.em,{children:"4D Write Pro"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Dans ",(0,l.jsx)(s.em,{children:"famillePolice"}),", passez le nom de la famille de police dont vous souhaitez conna\xeetre les styles et les noms complets."]}),"\n",(0,l.jsxs)(s.p,{children:["Dans ",(0,l.jsx)(s.em,{children:"listeStylesPolice"}),", passez un tableau texte qui sera rempli avec la liste des styles pris en charge par la ",(0,l.jsx)(s.em,{children:"famillePolice"}),'. Les styles sont retourn\xe9s avec leurs noms localis\xe9s (i.e. un \xe9l\xe9ment "Italique" sera "It\xe1lico" sur un syst\xe8me espagnol), ce qui vous permet par exemple de construire dynamiquement un pop-up menu "Styles" localis\xe9.']}),"\n",(0,l.jsxs)(s.p,{children:["Dans ",(0,l.jsx)(s.em,{children:"listeNomsPolice"}),", passez un tableau texte qui sera rempli avec la liste compl\xe8te des noms de police pris en charge par la ",(0,l.jsx)(s.em,{children:"famillePolice"}),". A la diff\xe9rence du tableau ",(0,l.jsx)(s.em,{children:"listeStylesPolice"}),", le tableau ",(0,l.jsx)(s.em,{children:"listeNomsPolice"})," retourne des valeurs non localis\xe9es, i.e. des noms de police bas\xe9s sur leur identifiant syst\xe8me. Ainsi, les noms de police seront ind\xe9pendants de la langue du syst\xe8me. Les \xe9l\xe9ments de ce tableau sont des cha\xeenes de caract\xe8res destin\xe9es \xe0 \xeatre utilis\xe9es avec l'attribut wk font de la commande 4D Write Pro ",(0,l.jsx)(s.em,{children:"WP SET ATTRIBUTES"}),". Gr\xe2ce \xe0 cette fonctionnalit\xe9, les documents 4D Write Pro stockent les noms de police et peuvent donc \xeatre ouverts sur diff\xe9rentes machines, quelle que soit la langue du syst\xe8me, sans probl\xe8mes de polices."]}),"\n",(0,l.jsxs)(s.p,{children:["Si la ",(0,l.jsx)(s.em,{children:"famillePolice"})," n'est pas trouv\xe9e sur la machine, les tableaux sont retourn\xe9s vides. Pour conna\xeetre la liste des familles de police disponibles sur la machine, utilisez la commande ",(0,l.jsx)(s.a,{href:"/docs/fr/commands/font-list",children:"FONT LIST"}),"."]}),"\n",(0,l.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(s.p,{children:'Vous voulez s\xe9lectionner les styles de la famille de police "Verdana" (si elle est disponible) :'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT($aTfonts;0)\n\xa0ARRAY TEXT($aTStyles;0)\n\xa0ARRAY TEXT($aTnames;0)\n\xa0var $numStyle : Integer\n\xa0\n\xa0FONT LIST($aTfonts)\n\xa0$numStyle:=Find in array($aTfonts;"Verdana")\n\xa0If($numStyle#0)\n\xa0\xa0\xa0\xa0FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)\n\xa0End if\n\xa0\n\xa0\xa0//Par exemple, les tableaux r\xe9sultants sont :\n\xa0\xa0//$aTStyles{1}="Normal"\n\xa0\xa0//$aTStyles{1}="Italique"\n\xa0\xa0//$aTStyles{1}="Gras"\n\xa0\xa0//$aTStyles{1}="Gras Italique"\n\xa0\n\xa0\xa0// $aTnames{1}="Verdana"\n\xa0\xa0// $aTnames{1}="Verdana Italic"\n\xa0\xa0// $aTnames{1}="Verdana Bold"\n\xa0\xa0// $aTnames{1}="Verdana Bold Italic"\n'})}),"\n",(0,l.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"/docs/fr/commands/font-list",children:"FONT LIST"})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var l=n(296540);const t={},i=l.createContext(t);function a(e){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);