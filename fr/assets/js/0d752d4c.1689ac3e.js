"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65135"],{645683:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>c,assets:()=>d,toc:()=>m,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/picture-library-list","title":"PICTURE LIBRARY LIST","description":"PICTURE LIBRARY LIST ( refsImages ; nomsImages )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/picture-library-list.md","sourceDirName":"commands-legacy","slug":"/commands/picture-library-list","permalink":"/docs/fr/commands/picture-library-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpicture-library-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"picture-library-list","title":"PICTURE LIBRARY LIST","slug":"/commands/picture-library-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PICTURE CODEC LIST","permalink":"/docs/fr/commands/picture-codec-list"},"next":{"title":"PICTURE PROPERTIES","permalink":"/docs/fr/commands/picture-properties"}}'),a=s("785893"),i=s("250065");let l={id:"picture-library-list",title:"PICTURE LIBRARY LIST",slug:"/commands/picture-library-list",displayed_sidebar:"docs"},t=void 0,d={},m=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"PICTURE LIBRARY LIST"})," ( ",(0,a.jsx)(n.em,{children:"refsImages"})," ; ",(0,a.jsx)(n.em,{children:"nomsImages"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refsImages"}),(0,a.jsx)(n.td,{children:"Integer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Num\xe9ros de r\xe9f\xe9rence des images stock\xe9es dans la biblioth\xe8que d'images"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomsImages"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Noms des images stock\xe9es dans la biblioth\xe8que d'images"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"PICTURE LIBRARY LIST"})," retourne les num\xe9ros de r\xe9f\xe9rence et le nom des images stock\xe9es dans la biblioth\xe8que d\u2019images de la base de donn\xe9es."]}),"\n",(0,a.jsxs)(n.p,{children:["Apr\xe8s l\u2019appel, vous r\xe9cup\xe9rez les num\xe9ros de r\xe9f\xe9rence des images dans le tableau ",(0,a.jsx)(n.em,{children:"refsImages"})," et leurs noms dans le tableau ",(0,a.jsx)(n.em,{children:"nomsImages"}),". Les deux tableaux sont synchronis\xe9s : le ni\xe8me \xe9l\xe9ment de ",(0,a.jsx)(n.em,{children:"refsImages"})," est le num\xe9ro de r\xe9f\xe9rence de l'image de la biblioth\xe8que dont le nom est retourn\xe9 dans le ni\xe8me \xe9l\xe9ment de ",(0,a.jsx)(n.em,{children:"nomsImages"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si n\xe9cessaire, la commande cr\xe9e et dimensionne automatiquement les tableaux ",(0,a.jsx)(n.em,{children:"refsImages"})," et ",(0,a.jsx)(n.em,{children:"nomsImages"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"La longueur maximale du nom d\u2019une image de la biblioth\xe8que est de 255 caract\xe8res."}),"\n",(0,a.jsx)(n.p,{children:"Si la biblioth\xe8que d\u2019images est vide, les deux tableaux retourn\xe9s seront vides."}),"\n",(0,a.jsxs)(n.p,{children:["Pour obtenir le nombre d\u2019images contenues dans la biblioth\xe8que, il vous suffit de tester la taille d\u2019un des deux tableaux \xe0 l'aide de la fonction ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/size-of-array",children:"Size of array"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsxs)(n.p,{children:["Le code suivant retourne le contenu de la biblioth\xe8que d'images dans les tableaux ",(0,a.jsx)(n.em,{children:"telRefImage"})," et ",(0,a.jsx)(n.em,{children:"taNomImage"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0PICTURE LIBRARY LIST(telRefImage;taNomImage)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"L\u2019exemple suivant teste si la biblioth\xe8que d\u2019images est vide ou non :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST(telRefImage;taNomImage)\n\xa0If(Size of array(telRefImage)=0)\n\xa0\xa0\xa0\xa0ALERT("La biblioth\xe8que d\u2019images est vide.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("La biblioth\xe8que d\u2019images contient "+String(Taille tableau(tlRefImage))+" images.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant exporte la Biblioth\xe8que d\u2019Images vers un document stock\xe9 sur disque :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImage;$asNomImage)\n\xa0$vlNbImages:=Size of array($alRefImage)\n\xa0If($vlNbImages>0)\n\xa0\xa0\xa0\xa0SET CHANNEL(12;"")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTag:="4DV6PICTURELIBRARYEXPORT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbImages)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlImage;1;$vlNbImages)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlRefImage:=$alRefImage{$vlImage}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsNomImage:=$asNomImage{$vlImage}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PICTURE FROM LIBRARY($alRefImage{$vlImage};$vgImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlRefImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vsNomImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vgImage)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlImage:=$vlImage+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=-108\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gError#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("La biblioth\xe8que d\'images n\'a pas pu \xeatre export\xe9e, recommencez avec davantage de m\xe9moire.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT(Document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("La biblioth\xe8que d\'images est vide.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let a={},i=r.createContext(a);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);