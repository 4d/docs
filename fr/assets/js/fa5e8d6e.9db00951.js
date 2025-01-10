"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27800"],{672590:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/font-list","title":"FONT LIST","description":"FONT LIST ( polices {; typeListe | *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/font-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-list","permalink":"/docs/fr/commands/font-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"font-list","title":"FONT LIST","slug":"/commands/font-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Font file","permalink":"/docs/fr/commands/font-file"},"next":{"title":"FONT STYLE LIST","permalink":"/docs/fr/commands/font-style-list"}}'),i=n("785893"),l=n("250065");let r={id:"font-list",title:"FONT LIST",slug:"/commands/font-list",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"A propos des polices vectorielles",id:"a-propos-des-polices-vectorielles",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"FONT LIST"})," ( ",(0,i.jsx)(s.em,{children:"polices"})," {; typeListe | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"polices"}),(0,i.jsx)(s.td,{children:"Text array"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Tableau des noms des polices vectorielles disponibles"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"typeListe | *"}),(0,i.jsx)(s.td,{children:"Entier long, Op\xe9rateur"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Type de liste de police \xe0 retourner ou * pour retourner des noms de police sous OS X"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande   ",(0,i.jsx)(s.strong,{children:"FONT LIST"})," remplit le tableau Texte ",(0,i.jsx)(s.em,{children:"polices"})," avec les noms des polices vectorielles disponibles dans votre syst\xe8me."]}),"\n",(0,i.jsxs)(s.p,{children:["Le param\xe8tre ",(0,i.jsx)(s.em,{children:"typeListe"})," vous permet de d\xe9signer le type de liste de police \xe0 obtenir. Pour cela, vous pouvez passer dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"typeListe"}),' l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,i.jsx)(s.em,{children:"Type de liste des polices"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constante"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Valeur"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Favorite fonts"}),(0,i.jsx)(s.td,{children:"Entier long"}),(0,i.jsx)(s.td,{children:"1"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.em,{children:"polices"})," contient la liste des polices favorites.",(0,i.jsx)(s.br,{}),"- Sous Windows : liste des noms de famille des polices actives.",(0,i.jsx)(s.br,{}),'- Sous OS X : liste des noms de famille des polices pr\xe9sente dans le panneau de configuration nomm\xe9 "Favorites" en anglais, "Favoris" en fran\xe7ais", "Favoriten" en allemand, etc. Cette collection peut \xeatre vide si l\u2019utilisateur n\u2019a ajout\xe9 aucune police favorite.']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Recent fonts"}),(0,i.jsx)(s.td,{children:"Entier long"}),(0,i.jsx)(s.td,{children:"2"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.em,{children:"polices"})," contient la liste des polices r\xe9centes (liste des polices utilis\xe9es lors de la session 4D). Cette liste est notamment utilis\xe9e par les zones de texte multistyle."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"System fonts"}),(0,i.jsx)(s.td,{children:"Entier long"}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.em,{children:"polices"})," contient la liste de toutes les polices syst\xe8me. Option par d\xe9faut si ",(0,i.jsx)(s.em,{children:"typeListe"})," est omis."]})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"*"}),", sous OS X la commande remplira le tableau ",(0,i.jsx)(s.em,{children:"polices"})," avec les noms des polices elles-m\xeames et non avec les noms des famillesde police. Le fonctionnement par d\xe9faut simplifie la gestion programm\xe9e des zones de texte multistyle, qui utilisent des familles de police. Si vous passez le param\xe8tre ",(0,i.jsx)(s.em,{children:"*"}),', les noms de police, par exemple "Arial bold", "Arial italic", "Arial narrow italic", seront retourn\xe9s au lieu des familles "Arial", "Arial black" ou "Arial narrow".',(0,i.jsx)(s.br,{}),"\nSous Windows, le param\xe8tre ",(0,i.jsx)(s.em,{children:"*"})," n\u2019a aucun effet. La commande retourne toujours les familles de police."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Sous OS X, si vous utilisez le r\xe9sultat de cette commande avec la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})," dans une zone de texte multistyle, il est imp\xe9ratif de ne pas passer le param\xe8tre ",(0,i.jsx)(s.em,{children:"*"})," (seuls les noms de familles sont accept\xe9s comme Attribute font name). Cette limitation ne s'applique pas aux zones 4D Write Pro, qui acceptent des noms de polices ou des noms de familles."]}),"\n",(0,i.jsx)(s.h5,{id:"a-propos-des-polices-vectorielles",children:"A propos des polices vectorielles"}),"\n",(0,i.jsx)(s.p,{children:"Cette commande ne retourne que les polices vectorielles. En effet, l'utilisation de polices non vectorielles (i.e. polices bitmap) pour dessiner des interfaces est d\xe9conseill\xe9 car elles sont bas\xe9es sur une technologie d\xe9pass\xe9e et souffrent de limitations quant aux variations de taille. Elles ne sont pas prises en charge dans les fonctionnalit\xe9s les plus r\xe9centes de 4D telles que les zones 4D Write Pro."}),"\n",(0,i.jsxs)(s.p,{children:["Sous OS X, ce principe est appliqu\xe9 depuis OS X 10.4 (les polices bitmap ",(0,i.jsx)(s.em,{children:"QuickDraw"})," sont obsol\xe8tes \xe0 compter de cette version)."]}),"\n",(0,i.jsx)(s.p,{children:'Sous Windows, ce principe est appliqu\xe9 \xe0 compter de 4D v15 R4 afin d\'aider les d\xe9veloppeurs 4D \xe0 ne s\xe9lectionner que des polices modernes pour leurs interfaces. Seules les polices vectorielles "trueType" ou "openType" sont list\xe9es. Par exemple, "ASI_Mono", "MS Sans Serif" ou encore "System" ne sont pas propos\xe9es. De plus, les noms GDI sont \xe9galement ignor\xe9s ; seuls les noms de familles de police DirectWrite sont pris en charge. Par exemple, les familles "Arial Black" ou "Segoe UI Black" ne sont pas dans la liste ; seuls "Arial" et "Segoe" sont retourn\xe9s.'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes de compatibilit\xe9 Windows :"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Les polices bitmap peuvent toujours \xeatre utilis\xe9es dans vos formulaires 4D (\xe0 l'exception des zones 4D Write Pro). Elles sont uniquement supprim\xe9es de la liste retourn\xe9e par cette commande. Cependant, pour assurer la compatibilit\xe9 de vos applications avec les versions futures de 4D et de Windows, nous recommandons d\xe8s \xe0 pr\xe9sent d'utiliser uniquement les familles de police DirectWrite."}),"\n",(0,i.jsxs)(s.li,{children:["Comme les polices bitmap sont filtr\xe9es dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"polices"})," sous Windows, la liste r\xe9sultante est diff\xe9rente dans les applications 4D v15 R4 et suivantes par rapport aux versions pr\xe9c\xe9dentes. Pensez \xe0 adapter votre code si vous utilisiez cette commande pour s\xe9lectionner une police non vectorielle."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(s.p,{children:"Dans un formulaire, vous voulez obtenir une liste d\xe9roulante qui affiche les polices disponibles dans le syst\xe8me. Ecrivez la m\xe9thode suivante pour votre objet liste d\xe9roulante :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(taPolices;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FONT LIST(taPolices)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,i.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(s.p,{children:"Vous souhaitez obtenir la liste des polices r\xe9centes :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0FONT LIST($tabPolices;Recent fonts)\n"})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/font-style-list",children:"FONT STYLE LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-recent-fonts",children:"SET RECENT FONTS"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.em,{children:"Type de liste des polices"})]}),"\n",(0,i.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"460"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return r}});var t=n(667294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);