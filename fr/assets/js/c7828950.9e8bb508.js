"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17356"],{904807:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/set-picture-to-library","title":"SET PICTURE TO LIBRARY","description":"SET PICTURE TO LIBRARY ( image ; refImage ; nomImage )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-picture-to-library.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-to-library","permalink":"/docs/fr/commands/set-picture-to-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-to-library.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-picture-to-library","title":"SET PICTURE TO LIBRARY","slug":"/commands/set-picture-to-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE METADATA","permalink":"/docs/fr/commands/set-picture-metadata"},"next":{"title":"TRANSFORM PICTURE","permalink":"/docs/fr/commands/transform-picture"}}'),i=r("785893"),l=r("250065");let t={id:"set-picture-to-library",title:"SET PICTURE TO LIBRARY",slug:"/commands/set-picture-to-library",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," ( ",(0,i.jsx)(n.em,{children:"image"})," ; ",(0,i.jsx)(n.em,{children:"refImage"})," ; ",(0,i.jsx)(n.em,{children:"nomImage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"image"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nouvelle image"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refImage"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de l'image dans la biblioth\xe8que d'images"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomImage"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nouveau nom de l\u2019image"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," cr\xe9e une nouvelle image ou remplace une image existante dans la biblioth\xe8que d\u2019images."]}),"\n",(0,i.jsx)(n.p,{children:"Avant l\u2019appel, vous passez :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["le num\xe9ro de r\xe9f\xe9rence de l\u2019image dans ",(0,i.jsx)(n.em,{children:"refImage"})," (compris entre 1 et 32767)"]}),"\n",(0,i.jsxs)(n.li,{children:["l\u2019image elle-m\xeame dans ",(0,i.jsx)(n.em,{children:"image"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Le nom de l\u2019image dans ",(0,i.jsx)(n.em,{children:"nomImage"})," (longueur maximale : 255 caract\xe8res)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["S\u2019il existe d\xe9j\xe0 dans la biblioth\xe8que une image poss\xe9dant le m\xeame num\xe9ro de r\xe9f\xe9rence, son contenu est remplac\xe9 et elle est renomm\xe9e avec les valeurs que vous avez pass\xe9es dans ",(0,i.jsx)(n.em,{children:"image"})," et ",(0,i.jsx)(n.em,{children:"nomImage"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si aucune image ne poss\xe8de le num\xe9ro de r\xe9f\xe9rence que vous avez pass\xe9 dans ",(0,i.jsx)(n.em,{children:"refImage"}),", une nouvelle image est cr\xe9\xe9e dans la biblioth\xe8que d\u2019images."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server :"})," ",(0,i.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," ne peut pas \xeatre utilis\xe9e dans une m\xe9thode ex\xe9cut\xe9e sur le poste serveur (proc\xe9dure stock\xe9e ou trigger). Si vous appelez ",(0,i.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," sur le serveur, la commande ne fait rien, l\u2019appel est ignor\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention :"})," Les objets de structure (\xe9l\xe9ments de listes hi\xe9rarchiques, lignes de menu, etc.) peuvent se r\xe9f\xe9rer \xe0 une image de la biblioth\xe8que. Soyez prudent lorsque vous modifiez par programmation une image de la biblioth\xe8que d\u2019images."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous passez une image vide dans ",(0,i.jsx)(n.em,{children:"image"}),", ou une valeur n\xe9gative ou nulle dans ",(0,i.jsx)(n.em,{children:"refImage"}),", la commande ne fait rien."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Quel que soit le contenu courant de la biblioth\xe8que d\u2019images, l\u2019exemple suivant ajoute une nouvelle image dans la biblioth\xe8que en cherchant d\u2019abord un num\xe9ro de r\xe9f\xe9rence d\u2019image unique :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImage;$asNomImage)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlRefImage:=1+Abs(Random)\n\xa0Until(Find in array($alRefImage;$vlRefImage)<0)\n\xa0SET PICTURE TO LIBRARY(vgImage;$vlRefImage;"Nouvelle Image")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["L\u2019exemple suivant importe dans la biblioth\xe8que des images stock\xe9es dans un document sur disque, cr\xe9\xe9 par le troisi\xe8me exemple de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/picture-library-list",children:"PICTURE LIBRARY LIST"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(10;"")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\n\xa0\xa0\xa0\xa0If($vsTag="4DV6BIBLIOTHEQUEIMAGEEXPORT")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbImages)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbImages>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlImage;1;$vlNbImages)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlRefImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsNomImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vgImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgImage;$vlRefImage;$vsNomImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlImage:=$vlNbImages+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ce fichier semble endommag\xe9.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ce fichier semble endommag\xe9.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le fichier \u201C"+Document+"\u201D n\u2019est pas un export de la biblioth\xe8que d\u2019images.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,i.jsx)(n.p,{children:"S'il n'y a pas assez de m\xe9moire pour retourner l\u2019image, l'erreur \u2013108 est g\xe9n\xe9r\xe9e. Notez que des erreurs d\u2019E/S peuvent \xe9galement \xeatre g\xe9n\xe9r\xe9es (si par exemple le fichier de structure est verrouill\xe9). Vous pouvez intercepter ces erreurs avec une m\xe9thode de gestion d'erreurs."}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"566"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"error"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,i.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let i={},l=s.createContext(i);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);