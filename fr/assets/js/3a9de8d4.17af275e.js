"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25337"],{556709:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/transform-picture","title":"TRANSFORM PICTURE","description":"TRANSFORM PICTURE ( image ; op\xe9rateur {; param1 {; param2 {; param3 {; param4}}}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/transform-picture.md","sourceDirName":"commands-legacy","slug":"/commands/transform-picture","permalink":"/docs/fr/commands/transform-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftransform-picture.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"transform-picture","title":"TRANSFORM PICTURE","slug":"/commands/transform-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/fr/commands/set-picture-to-library"},"next":{"title":"WRITE PICTURE FILE","permalink":"/docs/fr/commands/write-picture-file"}}'),t=r("785893"),i=r("250065");let a={id:"transform-picture",title:"TRANSFORM PICTURE",slug:"/commands/transform-picture",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TRANSFORM PICTURE"})," ( ",(0,t.jsx)(n.em,{children:"image"})," ; ",(0,t.jsx)(n.em,{children:"op\xe9rateur"})," {; ",(0,t.jsx)(n.em,{children:"param1"})," {; ",(0,t.jsx)(n.em,{children:"param2"})," {; ",(0,t.jsx)(n.em,{children:"param3"})," {; ",(0,t.jsx)(n.em,{children:"param4"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Image source \xe0 transformer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Image r\xe9sultant de la transformation"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"op\xe9rateur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type de transformation \xe0 effectuer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param1"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Param\xe8tre de la transformation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param2"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Param\xe8tre de la transformation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param3"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Param\xe8tre de la transformation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param4"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Param\xe8tre de la transformation"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"TRANSFORM PICTURE"})," permet d\u2019appliquer une transformation de type ",(0,t.jsx)(n.em,{children:"op\xe9rateur"})," \xe0 l\u2019image pass\xe9e dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"image"}),".Cette commande reprend et \xe9tend les fonctionnalit\xe9s propos\xe9es par les op\xe9rateurs \u201Cclassiques\u201D de transformation d\u2019images (+/, etc., cf. section ",(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/picture",children:"Picture"}),"). Ces op\xe9rateurs restent parfaitement utilisables dans 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019",(0,t.jsx)(n.em,{children:"image"})," source est modifi\xe9e directement \xe0 l\u2019issue de l\u2019ex\xe9cution de la commande. A noter cependant que certaines op\xe9rations ne sont pas destructives et peuvent \xeatre annul\xe9es via l\u2019op\xe9ration inverse ou l\u2019op\xe9ration \u201CR\xe9initialisation\u201D. Par exemple, une image r\xe9duite \xe0 1 % retrouvera sa taille originale sans alt\xe9ration si elle est agrandie 100 fois par la suite. Les transformations ne modifient pas le type d\u2019origine de l\u2019image : par exemple, une image vectorielle restera vectorielle \xe0 l\u2019issue de la transformation."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"op\xe9rateur"})," le num\xe9ro de l\u2019op\xe9ration \xe0 effectuer et dans ",(0,t.jsx)(n.em,{children:"param1"})," \xe0 ",(0,t.jsx)(n.em,{children:"param4"})," le ou les param\xe8tre(s) n\xe9cessaire(s) \xe0 cette op\xe9ration (le nombre de param\xe8tres d\xe9pend de l\u2019op\xe9ration). Vous pouvez utiliser dans ",(0,t.jsx)(n.em,{children:"op\xe9rateur"})," l\u2019une des constantes du th\xe8me \u201C",(0,t.jsx)(n.em,{children:"Transformation des images"}),"\u201D. Ces op\xe9rateurs et leurs param\xe8tres sont d\xe9crits dans le tableau suivant :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"op\xe9rateur (valeur)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"param1"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"param2"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"param3"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"param4"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Valeurs"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Annulable"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Reset (0)"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Scale (1)"}),(0,t.jsx)(n.td,{children:"Largeur"}),(0,t.jsx)(n.td,{children:"Hauteur"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Facteurs"}),(0,t.jsx)(n.td,{children:"oui"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Translate (2)"}),(0,t.jsx)(n.td,{children:"Axe X"}),(0,t.jsx)(n.td,{children:"Axe Y"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Pixels"}),(0,t.jsx)(n.td,{children:"oui"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flip horizontally (3)"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"oui"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flip vertically (4)"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"oui"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Crop (100)"}),(0,t.jsx)(n.td,{children:"Orig. X"}),(0,t.jsx)(n.td,{children:"Orig. Y"}),(0,t.jsx)(n.td,{children:"Largeur"}),(0,t.jsx)(n.td,{children:"Hauteur"}),(0,t.jsx)(n.td,{children:"Pixels"}),(0,t.jsx)(n.td,{children:"non"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fade to grey scale (101)"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"non"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Transparency (102)"}),(0,t.jsx)(n.td,{children:"Couleur RVB"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Hexad\xe9cimal"}),(0,t.jsx)(n.td,{children:"non"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reset : toutes les op\xe9rations matricielles effectu\xe9es sur l\u2019image (redimensionnement, miroir...) sont annul\xe9es."}),"\n",(0,t.jsxs)(n.li,{children:["Scale : l\u2019image est redimensionn\xe9e horizontalement et verticalement en fonction des valeurs pass\xe9es respectivement dans ",(0,t.jsx)(n.em,{children:"param1"})," et ",(0,t.jsx)(n.em,{children:"param2"}),". Ces valeurs sont des facteurs : par exemple, pour agrandir la largeur de 50 %, passez 1,5 dans ",(0,t.jsx)(n.em,{children:"param1"})," et pour r\xe9duire la hauteur de 50 %, passez 0,5 dans ",(0,t.jsx)(n.em,{children:"param2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Translate : l\u2019image est d\xe9plac\xe9e de ",(0,t.jsx)(n.em,{children:"param1"})," pixels horizontalement et de ",(0,t.jsx)(n.em,{children:"param2"})," pixels verticalement. Passez une valeur positive pour un d\xe9placement vers la droite ou vers le bas et une valeur n\xe9gative pour un d\xe9placement vers la gauche ou vers le haut."]}),"\n",(0,t.jsx)(n.li,{children:"Flip horizontally et Flip vertically : l\u2019effet miroir est appliqu\xe9 \xe0 l\u2019image d\u2019origine. Tout d\xe9placement \xe9ventuel effectu\xe9 auparavant ne sera pas pris en compte."}),"\n",(0,t.jsxs)(n.li,{children:["Crop : l\u2019image est recadr\xe9e \xe0 partir du point de coordonn\xe9es ",(0,t.jsx)(n.em,{children:"param1"})," et ",(0,t.jsx)(n.em,{children:"param2"})," (exprim\xe9 en pixels). La largeur et la hauteur de la nouvelle image sont d\xe9termin\xe9es par les param\xe8tres ",(0,t.jsx)(n.em,{children:"param3"})," et ",(0,t.jsx)(n.em,{children:"param4"}),". Cette transformation ne peut pas \xeatre annul\xe9e."]}),"\n",(0,t.jsx)(n.li,{children:"Fade to grey scale : l\u2019image est pass\xe9e en niveaux de gris (aucun param\xe8tre n\u2019est requis). Cette transformation ne peut pas \xeatre annul\xe9e."}),"\n",(0,t.jsxs)(n.li,{children:["Transparency : Un masque de transparence est appliqu\xe9 \xe0 l'image sur la base de la couleur pass\xe9e dans ",(0,t.jsx)(n.em,{children:"param1"}),". Par exemple, si vous passez 0x00FFFFFF (blanc) dans ",(0,t.jsx)(n.em,{children:"param1"}),", tous les pixels blancs de l'image originale seront transparents dans l'image transform\xe9e. Cette op\xe9ration peut \xeatre appliqu\xe9e aux images bitmap ou vectorielles. Par d\xe9faut, si le param\xe8tre ",(0,t.jsx)(n.em,{children:"param1"})," est omis, le blanc (0x00FFFFFF) sera utilis\xe9 comme couleur cible. Cette fonction est plus particuli\xe8rement destin\xe9e \xe0 g\xe9rer la transparence dans les images converties depuis le format obsol\xe8te PICT, mais peut \xeatre utilis\xe9e avec des images de tout type. Cette transformation ne peut pas \xeatre annul\xe9e."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez transformer les parties blanches d'une image en parties transparentes. Pour cela, vous pouvez utiliser le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE(Pict1;Transparency;0x00FFFFFF)\xa0//0x00FFFFFF est le blanc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Vous obtenez le r\xe9sultat suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(987346).Z+"",width:"633",height:"301"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple de recadrage (l\u2019image est affich\xe9e dans le formulaire avec le format \u201CImage tronqu\xe9e (non centr\xe9e)\u201D) :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE($vpRouages;Crop;50;50;100;100)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(767203).Z+"",width:"731",height:"275"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/combine-pictures",children:"COMBINE PICTURES"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"988"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},987346:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict1359750.en-d8ebc0e4ecc7e27cf14ef2eb6ec1c568.png"},767203:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict28288.fr-68c11fea87fa95b3ac0c1a318b70fe26.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);