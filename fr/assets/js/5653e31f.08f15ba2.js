"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21426"],{678740:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"FormEditor/markers","title":"Taquets","description":"Ces propri\xe9t\xe9s vous permettent de sp\xe9cifier l\'emplacement pr\xe9cis des taquets sur la r\xe8gle verticale d\'un formulaire table. Les taquets sont principalement utilis\xe9s dans les formulaires de sortie. Ils contr\xf4lent les informations list\xe9es et d\xe9finissent les zones d\'en-t\xeate, de ruptures, de d\xe9tail et de pied de page du formulaire. Tout objet plac\xe9 dans ces zones est affich\xe9 ou imprim\xe9 \xe0 l\'endroit appropri\xe9.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormEditor/properties_Markers.md","sourceDirName":"FormEditor","slug":"/FormEditor/markers","permalink":"/docs/fr/20/FormEditor/markers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Markers.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"markers","title":"Taquets"},"sidebar":"docs","previous":{"title":"Taille du formulaire","permalink":"/docs/fr/20/FormEditor/formSize"},"next":{"title":"Menu","permalink":"/docs/fr/20/FormEditor/menu"}}'),t=s("785893"),i=s("250065");let d={id:"markers",title:"Taquets"},o=void 0,a={},l=[{value:"Zone de rupture",id:"zone-de-rupture",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Zone de corps",id:"zone-de-corps",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Zone de pied de page",id:"zone-de-pied-de-page",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Zone d\u2019en-t\xeate",id:"zone-den-t\xeate",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4},{value:"Zones suppl\xe9mentaires",id:"zones-suppl\xe9mentaires",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Ces propri\xe9t\xe9s vous permettent de sp\xe9cifier l'emplacement pr\xe9cis des taquets sur la r\xe8gle verticale d'un ",(0,t.jsx)(n.strong,{children:"formulaire table"}),". Les taquets sont principalement utilis\xe9s dans les formulaires de sortie. Ils contr\xf4lent les informations list\xe9es et d\xe9finissent les zones d'en-t\xeate, de ruptures, de d\xe9tail et de pied de page du formulaire. Tout objet plac\xe9 dans ces zones est affich\xe9 ou imprim\xe9 \xe0 l'endroit appropri\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Chaque fois qu'un formulaire est utilis\xe9 pour la sortie, que ce soit pour l'affichage ou l'impression, les lignes de taquet de sortie prennent effet et les zones sont affich\xe9es ou imprim\xe9es aux endroits d\xe9sign\xe9s. Les taquets prennent \xe9galement effet lorsqu'un formulaire est utilis\xe9 comme formulaire liste dans une zone de sous-formulaire. Ils n'ont aucun effet quand un formulaire est utilis\xe9 pour la saisie."}),"\n",(0,t.jsxs)(n.p,{children:["Les m\xe9thodes qui sont associ\xe9es \xe0 des objets dans ces zones sont ex\xe9cut\xe9es lorsque les zones sont imprim\xe9es ou affich\xe9es tant que les \xe9v\xe9nements appropri\xe9s ont \xe9t\xe9 activ\xe9s. Par exemple, une m\xe9thode objet plac\xe9e dans la zone d'en-t\xeate est ex\xe9cut\xe9e lorsque l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Header"})," a lieu."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"zone-de-rupture",children:"Zone de rupture"}),"\n",(0,t.jsx)(n.p,{children:"Les zones de rupture sont affich\xe9es une fois \xe0 la fin de la liste des enregistrements et sont imprim\xe9es une fois apr\xe8s que les enregistrements ont \xe9t\xe9 imprim\xe9s dans un \xe9tat."}),"\n",(0,t.jsxs)(n.p,{children:["La zone de rupture est situ\xe9e entre la ligne du taquet du corps et la ligne du taquet de la zone de rupture. Il peut y avoir ",(0,t.jsx)(n.a,{href:"#additional-areas",children:"plusieurs zones de rupture"})," dans un \xe9tat."]}),"\n",(0,t.jsx)(n.p,{children:"Vous agrandissez ou r\xe9duisez la zone de rupture en faisant glisser le taquet vers le bas ou vers le haut. Vous pouvez utiliser une zone de rupture pour afficher des informations qui ne font pas partie des enregistrements (instructions, date courante, heure courante, etc.) ou pour afficher un trait ou un autre \xe9l\xe9ment graphique qui marque la fin de l\u2019affichage \xe9cran. Dans un \xe9tat imprim\xe9, vous pouvez utiliser une zone de rupture pour calculer et imprimer des sous-totaux et des calculs globaux."}),"\n",(0,t.jsx)(n.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"markerBreak"}),(0,t.jsx)(n.td,{children:"integer | integer collection"}),(0,t.jsxs)(n.td,{children:["Position du taquet de rupture ou collection des positions de taquets de rupture en pixels.",(0,t.jsx)(n.br,{}),"Valeur minimale : 0"]})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"zone-de-corps",children:"Zone de corps"}),"\n",(0,t.jsx)(n.p,{children:"La zone de corps (ou de d\xe9tail) du formulaire est affich\xe9e \xe0 l'\xe9cran et imprim\xe9e une fois pour chacun des enregistrements d\u2019un \xe9tat. La zone de corps est d\xe9finie comme \xe9tant la zone comprise entre le taquet de la zone d\u2019en-t\xeate et le taquet de la zone de corps."}),"\n",(0,t.jsx)(n.p,{children:"Vous agrandissez ou r\xe9duisez la taille de cette zone en faisant glisser le taquet C vers le bas ou vers le haut. Tout \xe9l\xe9ment plac\xe9 dans cette zone est affich\xe9 ou imprim\xe9 une fois pour chacun des enregistrements. La plupart du temps, vous placez des champs ou des variables dans cette zone afin que les donn\xe9es de chaque enregistrement soient imprim\xe9es ou affich\xe9es, mais il est aussi possible d\u2019y placer d\u2019autres \xe9l\xe9ments."}),"\n",(0,t.jsx)(n.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"markerBody"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Position du taquet de corps. Minimum: 0"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"zone-de-pied-de-page",children:"Zone de pied de page"}),"\n",(0,t.jsx)(n.p,{children:"La zone de pied de page est affich\xe9e \xe0 l\u2019\xe9cran sous la liste des enregistrements. Elle est toujours imprim\xe9e en bas de chaque page d\u2019un \xe9tat. La zone pied de page est d\xe9finie comme \xe9tant la zone situ\xe9e entre le taquet de la zone de rupture (R) et le taquet de pied de page (P)."}),"\n",(0,t.jsx)(n.p,{children:"Pour agrandir ou r\xe9duire la taille de cette zone, faites glisser le taquet vers le bas ou vers le haut."}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser la zone de pied de page pour imprimer la date courante, le num\xe9ro de page, des \xe9l\xe9ments graphiques ou tout texte que vous souhaitez voir appara\xeetre en bas de chaque page de votre \xe9tat. Pour les formulaires de sortie con\xe7us pour \xeatre utilis\xe9s \xe0 l\u2019\xe9cran, la zone de pied de page peut contenir des boutons permettant de lancer une recherche ou un tri, d\u2019imprimer des enregistrements ou de quitter le formulaire courant. Tous les objets actifs sont accept\xe9s."}),"\n",(0,t.jsx)(n.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"markerFooter"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"minimum : 0"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"zone-den-t\xeate",children:"Zone d\u2019en-t\xeate"}),"\n",(0,t.jsx)(n.p,{children:"La zone d\u2019en-t\xeate est affich\xe9e en haut de chaque \xe9cran et est imprim\xe9e en haut de chaque page de l\u2019\xe9tat. C\u2019est la zone situ\xe9e au dessus du taquet E."}),"\n",(0,t.jsx)(n.p,{children:"Vous agrandissez ou r\xe9duisez sa taille en d\xe9pla\xe7ant ce taquet vers le bas ou vers le haut. Vous pouvez utiliser la zone d\u2019en-t\xeate pour les noms de colonnes, les instructions, des informations suppl\xe9mentaires ou des images telles qu\u2019un logo ou un motif de d\xe9coration."}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez \xe9galement placer et utiliser des objets actifs dans les en-t\xeates des formulaires sortie affich\xe9s comme sous-formulaires, dans la fen\xeatre d\u2019affichage des enregistrements ou par les commandes ",(0,t.jsx)(n.code,{children:"DISPLAY SELECTION"})," et ",(0,t.jsx)(n.code,{children:"MODIFY SELECTION"}),". Les objets actifs suivants sont accept\xe9s :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Boutons, boutons image,"}),"\n",(0,t.jsx)(n.li,{children:"Combo boxes, drop-down lists, picture pop-up menus,"}),"\n",(0,t.jsx)(n.li,{children:"listes hi\xe9rarchiques, list boxes"}),"\n",(0,t.jsx)(n.li,{children:"Boutons radio, cases \xe0 cocher, cases \xe0 cocher 3D,"}),"\n",(0,t.jsx)(n.li,{children:"Indicateurs de progression, r\xe8gles, steppers, spinners."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Des actions standard telles que ",(0,t.jsx)(n.code,{children:"Add Subrecord"}),", ",(0,t.jsx)(n.code,{children:"Cancel"})," (listes affich\xe9es \xe0 l'aide de ",(0,t.jsx)(n.code,{children:"DISPLAY SELECTION"})," et ",(0,t.jsx)(n.code,{children:"MODIFY SELECTION"}),") ou ",(0,t.jsx)(n.code,{children:"Automatic splitter"})," peuvent \xeatre assign\xe9es aux boutons ins\xe9r\xe9s. En outre, tous ces objets acceptent les \xe9v\xe9nements formulaire suivants : ",(0,t.jsx)(n.code,{children:"On Load"}),", ",(0,t.jsx)(n.code,{children:"On Clicked"}),", ",(0,t.jsx)(n.code,{children:"On Header"}),", ",(0,t.jsx)(n.code,{children:"On Printing Footer"}),", ",(0,t.jsx)(n.code,{children:"On Double Clicked"}),", ",(0,t.jsx)(n.code,{children:"On Drop"}),", ",(0,t.jsx)(n.code,{children:"On Drag Over"}),", ",(0,t.jsx)(n.code,{children:"On Unload"}),". A noter que la m\xe9thode formulaire est appel\xe9e avec l\u2019\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Header"})," apr\xe8s l\u2019appel des m\xe9thodes de tous les objets de la zone."]}),"\n",(0,t.jsxs)(n.p,{children:["Le formulaire peut contenir des ",(0,t.jsx)(n.a,{href:"#additional-areas",children:"zones d'en-t\xeate suppl\xe9mentaires"})," \xe0 associer \xe0 des ruptures suppl\xe9mentaires. Un en-t\xeate de niveau 1 est imprim\xe9 juste avant que les enregistrements regroup\xe9s par le premier champ tri\xe9 soient imprim\xe9s."]}),"\n",(0,t.jsx)(n.h4,{id:"grammaire-json-3",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"markerHeader"}),(0,t.jsx)(n.td,{children:"integer | integer collection"}),(0,t.jsxs)(n.td,{children:["Position du taquet d'en-t\xeate ou collection des positions de taquets d'en-t\xeate en pixels.",(0,t.jsx)(n.br,{}),"Valeur minimale : 0"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"zones-suppl\xe9mentaires",children:"Zones suppl\xe9mentaires"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez cr\xe9er des zones de rupture et d'en-t\xeate suppl\xe9mentaires pour un rapport. Ces zones suppl\xe9mentaires vous permettent d'imprimer des sous-totaux et d'autres calculs dans un rapport et d'afficher efficacement d'autres informations."}),"\n",(0,t.jsxs)(n.p,{children:["Les zones suppl\xe9mentaires sont d\xe9finies lorsque vous utilisez une collection de positions dans les propri\xe9t\xe9s ",(0,t.jsx)(n.a,{href:"#form-break",children:"Zone de rupture"})," et ",(0,t.jsx)(n.a,{href:"#form-header",children:"Zone d'en-t\xeate"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Dans l'\xe9diteur de formulaires 4D, vous cr\xe9ez des lignes de contr\xf4le suppl\xe9mentaires en maintenant enfonc\xe9e la touche ",(0,t.jsx)(n.strong,{children:"Alt"})," tout en cliquant sur le taquet de contr\xf4le appropri\xe9."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Un formulaire commence toujours par les zones ent\xeate, corps, niveau de rupture 0, et pied de page."}),"\n",(0,t.jsx)(n.p,{children:'Le niveau de rupture 0 englobe tous les enregistrements ; il prend place une fois que tous les enregistrements ont \xe9t\xe9 imprim\xe9s. Les taquets de rupture suppl\xe9mentaires sont d\xe9sign\xe9s par des nombres, un taquet libell\xe9 R1 a pour signification "Rupture de niveau 1", etc.'}),"\n",(0,t.jsx)(n.p,{children:"Une rupture de niveau 1 prend place apr\xe8s l\u2019impression des enregistrements group\xe9s par le premier argument du tri."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Libell\xe9"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"S\u2019imprime apr\xe8s les groupes cr\xe9\xe9s par"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R1"}),(0,t.jsx)(n.td,{children:"Rupture de niveau 1"}),(0,t.jsx)(n.td,{children:"Premier argument de tri"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R2"}),(0,t.jsx)(n.td,{children:"Rupture de niveau 2"}),(0,t.jsx)(n.td,{children:"Deuxi\xe8me argument de tri"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R3"}),(0,t.jsx)(n.td,{children:"Rupture de niveau 3"}),(0,t.jsx)(n.td,{children:"Troisi\xe8me argument de tri"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Des taquets de contr\xf4le suppl\xe9mentaires des en-t\xeates sont associ\xe9s aux ruptures. Un en-t\xeate de niveau 1 est imprim\xe9 juste avant que les enregistrements regroup\xe9s par le premier champ tri\xe9 soient imprim\xe9s."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Libell\xe9"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"S\u2019imprime apr\xe8s les groupes cr\xe9\xe9s par"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E1"}),(0,t.jsx)(n.td,{children:"En-t\xeate de niveau 1"}),(0,t.jsx)(n.td,{children:"Premier argument de tri"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E2"}),(0,t.jsx)(n.td,{children:"En-t\xeate de niveau 2"}),(0,t.jsx)(n.td,{children:"Deuxi\xe8me argument de tri"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E3"}),(0,t.jsx)(n.td,{children:"En-t\xeate de niveau 3"}),(0,t.jsx)(n.td,{children:"Troisi\xe8me argument de tri"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous utilisez la fonction ",(0,t.jsx)(n.code,{children:"Subtotal"})," pour initialiser le traitement des ruptures, vous devez cr\xe9er autant de zones de ruptures que de niveaux de ruptures g\xe9n\xe9r\xe9s par le tri, moins une. Si vous n\u2019avez pas besoin d\u2019une zone de rupture, vous pouvez r\xe9duire sa taille en faisant co\xefncider son taquet de contr\xf4le avec celui d\u2019une autre zone. S\u2019il y a davantage de niveaux de tri que de zones de rupture, la derni\xe8re zone de rupture sera r\xe9p\xe9t\xe9e lors de l\u2019impression."]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);