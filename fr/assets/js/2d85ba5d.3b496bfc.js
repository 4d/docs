"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3599"],{846625:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/select-folder","title":"Select folder","description":"Select folder ( {message }{;}{ r\xe9pertoire {; options}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-folder.md","sourceDirName":"commands-legacy","slug":"/commands/select-folder","permalink":"/docs/fr/commands/select-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-folder","title":"Select folder","slug":"/commands/select-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select document","permalink":"/docs/fr/commands/select-document"},"next":{"title":"SET DOCUMENT POSITION","permalink":"/docs/fr/commands/set-document-position"}}'),i=n("785893"),r=n("250065");let o={id:"select-folder",title:"Select folder",slug:"/commands/select-folder",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Select folder"})," ( {",(0,i.jsx)(s.em,{children:"message"})," }{;}{ ",(0,i.jsx)(s.em,{children:"r\xe9pertoire"})," {; ",(0,i.jsx)(s.em,{children:"options"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"message"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Titre de la fen\xeatre de s\xe9lection"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"r\xe9pertoire"}),(0,i.jsx)(s.td,{children:"Text, Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Chemin d\u2019acc\xe8s du r\xe9pertoire par d\xe9fautou Cha\xeene vide pour afficher le dossier d\u2019utilisateur par d\xe9faut (\u201CMes documents\u201D sous Windows, \u201CDocuments\u201D sous Mac OS),ou Num\xe9ro de chemin d\u2019acc\xe8s m\xe9moris\xe9"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"options"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Option(s) de s\xe9lection sous Mac OS"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Chemin d\u2019acc\xe8s au dossier s\xe9lectionn\xe9"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"Select folder"})," affiche une bo\xeete de dialogue permettant de d\xe9signer manuellement un dossier, et de r\xe9cup\xe9rer en retour de fonction le chemin d\u2019acc\xe8s complet au dossier s\xe9lectionn\xe9. Le param\xe8tre facultatif ",(0,i.jsx)(s.em,{children:"r\xe9pertoire"})," vous permet de d\xe9signer un emplacement de dossier qui sera affich\xe9 initialement dans la bo\xeete de dialogue de s\xe9lection de dossier."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Cette commande ne modifie pas le dossier courant de l\u2019application 4D."]}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"Select folder"})," affiche une bo\xeete de dialogue standard de navigation \xe0 travers les volumes et les dossiers du poste.",(0,i.jsx)(s.br,{}),"\nLe param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"message"})," permet d\u2019afficher une ligne d\u2019information dans la bo\xeete de dialogue (dans notre exemple, ",(0,i.jsx)(s.em,{children:"message"}),' a pour valeur "Dossier de destination ?").']}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Windows :"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(267476).Z+"",width:"737",height:"512"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"macOS :"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(760349).Z+"",width:"762",height:"496"})}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez utiliser le param\xe8tre ",(0,i.jsx)(s.em,{children:"r\xe9pertoire"})," pour proposer un emplacement de dossier par d\xe9faut dans la bo\xeete de dialogue de s\xe9lection de dossier. Vous pouvez passer dans ce param\xe8tre trois types de valeurs :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"un chemin d\u2019acc\xe8s de dossier valide utilisant la syntaxe de la plate-forme courante."}),"\n",(0,i.jsx)(s.li,{children:"une cha\xeene vide (\u201C\u201D) pour afficher le dossier d\u2019utilisateur par d\xe9faut du syst\xe8me (\u201CMes documents\u201D sous Windows, \u201CDocuments\u201D sous macOS)."}),"\n",(0,i.jsxs)(s.li,{children:["un num\xe9ro de chemin d\u2019acc\xe8s m\xe9moris\xe9 (de 1 \xe0 32000) pour afficher le dossier associ\xe9. Avec ce principe, vous pouvez conserver en m\xe9moire le chemin d\u2019acc\xe8s du dossier ouvert au moment o\xf9 l\u2019utilisateur a cliqu\xe9 sur le bouton de s\xe9lection, c\u2019est-\xe0-dire le dossier choisi par l\u2019utilisateur. Lors du premier appel d\u2019un num\xe9ro arbitraire (par exemple 5), la commande affiche le dossier d\u2019utilisateur par d\xe9faut du syst\xe8me (\xe9quivaut \xe0 passer une cha\xeene vide). L\u2019utilisateur peut alors \xe9ventuellement naviguer parmi les dossiers de son disque dur. Au moment o\xf9 il clique sur le bouton de s\xe9lection, le chemin d\u2019acc\xe8s est m\xe9moris\xe9 et associ\xe9 au num\xe9ro 5. Lors des appels suivants du num\xe9ro 5, le chemin d\u2019acc\xe8s m\xe9moris\xe9 sera utilis\xe9 par d\xe9faut. En cas de s\xe9lection d\u2019un nouvel emplacement, le chemin num\xe9ro 5 sera mis \xe0 jour, et ainsi de suite.",(0,i.jsx)(s.br,{}),"\nCe m\xe9canisme vous permet de m\xe9moriser jusqu\u2019\xe0 32000 chemins d\u2019acc\xe8s. Sous Windows, chaque chemin est conserv\xe9 durant la session uniquement. Sous macOS, les chemins restent m\xe9moris\xe9s d\u2019une session \xe0 l\u2019autre. Si le chemin d\u2019acc\xe8s est incorrect, le param\xe8tre ",(0,i.jsx)(s.em,{children:"cheminD\xe9faut"})," est ignor\xe9."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Ce m\xe9canisme est identique \xe0 celui utilis\xe9 par la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/select-document",children:"Select document"}),". Les num\xe9ros de chemins d\u2019acc\xe8s m\xe9moris\xe9s sont partag\xe9s entre les deux commandes."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre ",(0,i.jsx)(s.em,{children:"options"})," vous permet de b\xe9n\xe9ficier de fonctions suppl\xe9mentaires sous macOS. Vous pouvez passer dans ce param\xe8tre les constantes suivantes, plac\xe9es dans le th\xe8me ",(0,i.jsx)(s.em,{children:"Documents syst\xe8me"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constante"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Valeur"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Package open"}),(0,i.jsx)(s.td,{children:"Entier long"}),(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:"(Mac OS uniquement) Autorise l\u2019ouverture des progiciels (packages) en tant que dossiers et donc la visualisation/s\xe9lection de leur contenu. Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande n\u2019autorise pas l\u2019ouverture des progiciels."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Use sheet window"}),(0,i.jsx)(s.td,{children:"Entier long"}),(0,i.jsx)(s.td,{children:"16"}),(0,i.jsxs)(s.td,{children:["(Mac OS uniquement) Affiche la bo\xeete de dialogue de s\xe9lection sous forme de fen\xeatre feuille (cette option est ignor\xe9e sous Windows). ",(0,i.jsx)(s.br,{}),"Les fen\xeatres feuilles sont des fen\xeatres sp\xe9cifiques de l\u2019interface Mac OS X, b\xe9n\xe9ficiant notamment d\u2019une animation graphique (pour plus d\u2019informations, reportez-vous \xe0 la section ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),"). Par d\xe9faut, si cette constante n\u2019est pas utilis\xe9e, la commande affiche une bo\xeete de dialogue standard."]})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez passer une constante ou la combinaison des deux. Ces options sont prises en compte sous macOS uniquement. Sous Windows, le param\xe8tre ",(0,i.jsx)(s.em,{children:"options"})," est ignor\xe9 s\u2019il est pass\xe9."]}),"\n",(0,i.jsxs)(s.p,{children:["L'utilisateur s\xe9lectionne un dossier en cliquant sur le bouton ",(0,i.jsx)(s.strong,{children:"OK"})," (Windows) ou ",(0,i.jsx)(s.strong,{children:"S\xe9lectionner"})," (macOS). Le chemin d\u2019acc\xe8s au dossier choisi est alors retourn\xe9 par la fonction."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Sous Windows, la cha\xeene retourn\xe9e est du type \u201CC:\\Dossier1\\Dossier2\\DossierS\xe9lectionn\xe9\\\u201D"}),"\n",(0,i.jsx)(s.li,{children:"Sous macOS, la cha\xeene retourn\xe9e est du type \u201CDisque:Dossier1:Dossier2:DossierS\xe9lectionn\xe9:\u201D"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Sous macOS, selon que le nom du dossier est s\xe9lectionn\xe9 ou non dans la bo\xeete de dialogue, le chemin retourn\xe9 est diff\xe9rent."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(399662).Z+"",width:"947",height:"289"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"4D Server :"})," Cette fonction permet de visualiser les volumes connect\xe9s aux postes clients. Il n\u2019est pas possible de l\u2019appeler depuis une proc\xe9dure stock\xe9e."]}),"\n",(0,i.jsx)(s.p,{children:"Si l\u2019utilisateur clique sur le bouton de s\xe9lection, la variable syst\xe8me OK prend la valeur 1. Si l\u2019utilisateur clique sur le bouton d\u2019annulation, OK prend la valeur 0 et la fonction retourne une cha\xeene vide."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Sous Windows, si l\u2019utilisateur a s\xe9lectionn\xe9 certains \xe9l\xe9ments incorrects tels que \u201CPoste de travail\u201D, \u201CCorbeille\u201D, etc., la variable syst\xe8me OK prend la valeur 0, m\xeame si la bo\xeete de dialogue est valid\xe9e."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"L\u2019exemple suivant permet de s\xe9lectionner le dossier dans lequel toutes les images de la biblioth\xe8que d\u2019images seront enregistr\xe9es :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0$DossierImages:=Select folder("S\xe9lectionnez un dossier pour vos images.")\n\xa0PICTURE LIBRARY LIST(pictRefs;pictNoms)\n\xa0For($n;1;Size of array(pictNoms))\n\xa0\xa0\xa0\xa0GET PICTURE FROM LIBRARY(pictRefs{$n};$vPictSauvegarde)\n\xa0\xa0\xa0\xa0WRITE PICTURE FILE($DossierImages+pictNoms{$n};$vPictSauvegarde)\n\xa0End for\n'})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/create-folder",children:"CREATE FOLDER"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/folder-list",children:"FOLDER LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/select-document",children:"Select document"})]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},399662:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict34878.fr-5c26d9f3febdbd0d1ee4c018785e951f.png"},267476:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict3881936.fr-80cb60b458a774f1aa11e45943a425e4.png"},760349:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict3881985.fr-7fe6c0b2c6cf7b7d3a0b8152145fc32a.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);