"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36286"],{847695:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-events","title":"OBJECT SET EVENTS","description":"OBJECT SET EVENTS ( { ;} objet ; tabEv\xe9nements ; mode* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-events.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-events","permalink":"/docs/fr/20-R8/commands/object-set-events","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-events.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-events","title":"OBJECT SET EVENTS","slug":"/commands/object-set-events","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ENTERABLE","permalink":"/docs/fr/20-R8/commands/object-set-enterable"},"next":{"title":"OBJECT SET FILTER","permalink":"/docs/fr/20-R8/commands/object-set-filter"}}'),r=s("785893"),d=s("250065");let i={id:"object-set-events",title:"OBJECT SET EVENTS",slug:"/commands/object-set-events",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," ; ",(0,r.jsx)(n.em,{children:"mode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:['Nom d\'objet ou "" pour d\xe9signer le formulaire (si * est sp\xe9cifi\xe9) ou ',(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabEv\xe9nements"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tableau d\u2019\xe9v\xe9nements \xe0 d\xe9finir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mode d\u2019activation des \xe9v\xe9nements d\xe9finis dans tabEv\xe9nements"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," vous permet de modifier, pour le process courant, la configuration des \xe9v\xe9nements formulaire du formulaire, de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement).",(0,r.jsx)(n.br,{}),"\nPour d\xe9finir la configuration des \xe9v\xe9nements du formulaire lui-m\xeame, passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),' et une cha\xeene vide "" dans ',(0,r.jsx)(n.em,{children:"objet"})," : dans ce cas, vous d\xe9signez le formulaire courant."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez modifier les \xe9v\xe9nements d\u2019un sous-formulaire li\xe9 \xe0 une table, seule la syntaxe bas\xe9e sur le nom d\u2019objet peut \xeatre utilis\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," un tableau Entier long contenant la liste des \xe9v\xe9nements formulaire pr\xe9d\xe9finis ou personnalis\xe9s que vous souhaitez modifier (le param\xe8tre ",(0,r.jsx)(n.em,{children:"mode"})," permet de pr\xe9ciser si la modification consiste \xe0 activer ou d\xe9sactiver les \xe9v\xe9nements). Pour d\xe9signer un \xe9v\xe9nement pr\xe9d\xe9fini \xe0 modifier, vous pouvez passer dans chaque \xe9l\xe9ment du tableau ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"}),' une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Ev\xe9nements formulaire"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Activate"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"La fen\xeatre du formulaire passe au premier plan"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Edit"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"45"}),(0,r.jsx)(n.td,{children:"Le contenu de l'objet saisissable qui a le focus vient d'\xeatre modifi\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Keystroke"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"28"}),(0,r.jsxs)(n.td,{children:["Un caract\xe8re vient d'\xeatre saisi dans l'objet qui a le focus. ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-edited-text",children:"Get edited text"})," retourne le contenu avec ce caract\xe8re."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Sort"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"30"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Un tri standard vient d'\xeatre effectu\xe9 dans une colonne de list box"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Arrow Click"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"38"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Boutons 3D uniquement"}),") La zone \u201Cfl\xe8che\u201D d'un bouton 3D re\xe7oit un clic"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Before Data Entry"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"41"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Une cellule de list box est sur le point de passer en mode \xe9dition"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Before Keystroke"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"17"}),(0,r.jsxs)(n.td,{children:["Un caract\xe8re vient d'\xeatre saisi dans l'objet qui a le focus. ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-edited-text",children:"Get edited text"})," retourne le contenu sans ce caract\xe8re"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Begin Drag Over"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"46"}),(0,r.jsx)(n.td,{children:"Un objet est en cours de glisser"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Begin URL Loading"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"47"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Un nouvel URL est charg\xe9 dans la zone Web"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On bound variable change"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"54"}),(0,r.jsx)(n.td,{children:"La variable li\xe9e \xe0 un sous-formulaire est modifi\xe9e."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Clicked"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Un clic est survenu sur un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Close Box"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"On a cliqu\xe9 sur la case de fermeture de la fen\xeatre"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Close Detail"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"26"}),(0,r.jsx)(n.td,{children:"Le formulaire d\xe9taill\xe9 se referme et on retourne au formulaire sortie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Collapse"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"44"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Listes hi\xe9rarchiques et list box hi\xe9rarchiques"}),") Un \xe9l\xe9ment de liste hi\xe9rarchique ou de list box hi\xe9rarchique a \xe9t\xe9 contract\xe9 via un clic ou une touche du clavier"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Column Moved"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"32"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Une colonne de list box est d\xe9plac\xe9e par l\u2019utilisateur via le glisser-d\xe9poser"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Column Resize"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"33"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") La largeur d\u2019une colonne de list box est modifi\xe9e par l\u2019utilisateur via la souris"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Data Change"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Les donn\xe9es d'un objet ont \xe9t\xe9 modifi\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Deactivate"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"La fen\xeatre du formulaire passe en arri\xe8re-plan"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Delete Action"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"58"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Listes hi\xe9rarchiques et List box"}),") L\u2019utilisateur a demand\xe9 \xe0 supprimer un \xe9l\xe9ment"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Display Detail"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"Un enregistrement va \xeatre affich\xe9 dans la liste ou une ligne va \xeatre affich\xe9e dans la list box"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Double Clicked"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"Un double-clic est survenu sur un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Drag Over"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"21"}),(0,r.jsx)(n.td,{children:"Des donn\xe9es sont gliss\xe9es sur un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Drop"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Des donn\xe9es sont d\xe9pos\xe9es sur un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On End URL Loading"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"49"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Toutes les ressources de l'URL ont \xe9t\xe9 charg\xe9es"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Expand"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"43"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Listes hi\xe9rarchiques et List box hi\xe9rarchiques"}),") Un \xe9l\xe9ment de liste hi\xe9rarchique ou de list box hi\xe9rarchique a \xe9t\xe9 d\xe9ploy\xe9 via un clic ou une touche du clavier"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Footer Click"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"57"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Un clic est survenu dans le pied d\u2019une list box ou d\u2019une colonne de list box"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Getting Focus"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"Un objet de formulaire prend le focus"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Header"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"L'en-t\xeate du formulaire va \xeatre imprim\xe9 ou affich\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Header Click"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"42"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Un clic est survenu dans l\u2019en-t\xeate d\u2019une colonne de list box"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Load Record"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"40"}),(0,r.jsx)(n.td,{children:"En mode saisie en liste, un enregistrement est charg\xe9 en modification (l\u2019utilisateur a cliqu\xe9 sur la ligne de l\u2019enregistrement et un champ passe en \xe9dition)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Long Click"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"39"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Boutons 3D uniquement"}),") Un bouton 3D re\xe7oit un clic et le bouton de la souris reste enfonc\xe9 pendant un certain laps de temps"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Losing Focus"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"Un objet de formulaire perd le focus"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mac toolbar button"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"55"}),(0,r.jsx)(n.td,{children:"L\u2019utilisateur a cliqu\xe9 sur le bouton de gestion de la barre d\u2019outils sous Mac OS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Menu Selected"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Une commande de menu a \xe9t\xe9 s\xe9lectionn\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Enter"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"35"}),(0,r.jsx)(n.td,{children:"Le curseur de la souris entre dans la zone graphique d\u2019un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Leave"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"36"}),(0,r.jsx)(n.td,{children:"Le curseur de la souris sort de la zone graphique d\u2019un objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Move"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"37"}),(0,r.jsx)(n.td,{children:"Le curseur de la souris a boug\xe9 d\u2019au moins un pixel OU une touche de modification (Ctrl, Alt, Verr Maj.) a \xe9t\xe9 enfonc\xe9e. Si l'\xe9v\xe9nement est coch\xe9 pour un objet uniquement, il n'est g\xe9n\xe9r\xe9 que lorsque le curseur se trouve dans la zone graphique de l'objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Open Detail"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"25"}),(0,r.jsx)(n.td,{children:"Le formulaire d\xe9taill\xe9 associ\xe9 au formulaire sortie ou \xe0 la listbox est sur le point d'\xeatre ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Open External Link"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"52"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Un URL externe a \xe9t\xe9 ouvert dans le navigateur"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Outside Call"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsxs)(n.td,{children:["Le formulaire a re\xe7u un appel de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/post-outside-call",children:"POST OUTSIDE CALL"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Picture Scroll"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"59"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Variables ou champs image et List Box"})," : L'utilisateur fait d\xe9filer le contenu du champ image, de la variable image ou de la list box \xe0 l'aide de la souris ou d'une touche du clavier."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Plug in Area"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"Un plug-in demande que sa m\xe9thode objet soit ex\xe9cut\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Break"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"Une rupture du formulaire va \xeatre imprim\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Detail"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"Le corps du formulaire va \xeatre imprim\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Footer"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"Le pied de page du formulaire va \xeatre imprim\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Resize"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"29"}),(0,r.jsx)(n.td,{children:"La fen\xeatre du formulaire est redimensionn\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Row Moved"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"34"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box uniquement"}),") Une ligne de list box est d\xe9plac\xe9e par l\u2019utilisateur via le glisser-d\xe9poser"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Selection Change"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"List box"})," : la s\xe9lection courante de lignes ou de colonnes est modifi\xe9e ",(0,r.jsx)(n.em,{children:"Enregistrements en liste"})," : l\u2019enregistrement courant ou la s\xe9lection courante de lignes est modifi\xe9(e) dans un formulaire en liste ou un sous-formulaire ",(0,r.jsx)(n.em,{children:"Liste hi\xe9rarchique"})," : la s\xe9lection dans la liste est modifi\xe9e \xe0 la suite d\u2019un clic ou de la frappe d\u2019une touche au clavier ",(0,r.jsx)(n.em,{children:"Variable ou champ saisissable"})," : la s\xe9lection de texte ou la position du curseur dans la zone est modifi\xe9e \xe0 la suite d\u2019un clic ou de la frappe d\u2019une touche au clavier"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Timer"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"27"}),(0,r.jsxs)(n.td,{children:["Le nombre de ticks d\xe9fini par ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-timer",children:"SET TIMER"})," est atteint"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Unload"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{children:"Le formulaire se referme et est d\xe9charg\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Filtering"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"51"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Un URL a \xe9t\xe9 bloqu\xe9 par la zone Web"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Loading Error"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"50"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Une erreur s'est produite durant le chargement de l'URL"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Resource Loading"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"48"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Une nouvelle ressource est charg\xe9e dans la zone Web"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Validate"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"La saisie des donn\xe9es dans l'enregistrement est valid\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Window Opening Denied"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"53"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Zones Web uniquement"}),") Une fen\xeatre pop up a \xe9t\xe9 bloqu\xe9e"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Il est important de noter que l\u2019\xe9v\xe9nement On Load est absent de cette liste : il ne peut pas \xeatre d\xe9fini, car lors de l\u2019ex\xe9cution de la commande il a d\xe9j\xe0 \xe9t\xe9 g\xe9n\xe9r\xe9."}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez \xe9galement passer dans ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," toute valeur correspondant \xe0 un \xe9v\xe9nement personnalis\xe9. Dans ce cas, il est recommand\xe9 d\u2019utiliser des valeurs n\xe9gatives (cf. commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"mode"}),' vous permet de d\xe9finir le traitement global \xe0 effectuer pour les \xe9l\xe9ments du tableau. Pour cela, vous pouvez passer une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disable events others unchanged"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Tous les \xe9v\xe9nements list\xe9s dans le tableau ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," sont d\xe9sactiv\xe9s, le statut des autres \xe9v\xe9nements est inchang\xe9"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enable events disable others"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Tous les \xe9v\xe9nements list\xe9s dans le tableau ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," sont activ\xe9s, tous les autres \xe9v\xe9nements sont d\xe9sactiv\xe9s"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enable events others unchanged"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Tous les \xe9v\xe9nements list\xe9s dans le tableau ",(0,r.jsx)(n.em,{children:"tabEv\xe9nements"})," sont activ\xe9s, le statut des autres \xe9v\xe9nements est inchang\xe9"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," peut entra\xeener l\u2019activation d\u2019\xe9v\xe9nements non pris en charge par l\u2019",(0,r.jsx)(n.em,{children:"objet"})," (en fonction de son type). Dans ce cas, les \xe9v\xe9nements seront simplement ignor\xe9s."]}),"\n",(0,r.jsxs)(n.p,{children:["Si un ",(0,r.jsx)(n.em,{children:"objet"})," est dupliqu\xe9 apr\xe8s l\u2019appel de la commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"}),", la configuration r\xe9sultante d\u2019activation/d\xe9sactivation de chaque \xe9v\xe9nement est \xe9galement dupliqu\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Activation de trois \xe9v\xe9nements formulaire pour un ensemble d\u2019objets list box, et d\xe9sactivation des autres \xe9v\xe9nements :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MesLB@";$MyEventsOnLB;Enable events disable others)\n\xa0\xa0\xa0\xa0\xa0\xa0// active 3 \xe9v\xe9nements et d\xe9sactive tous les autres\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"D\xe9sactivation de trois \xe9v\xe9nements formulaire pour un ensemble d\u2019objets list box, sans modifier les autres \xe9v\xe9nements :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MesLB@";$MyEventsOnLB;Disable events others unchanged)\n\xa0\xa0\xa0\xa0\xa0// d\xe9sactive uniquement les 3 \xe9v\xe9nements\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"Activation d\u2019un \xe9v\xe9nement formulaire pour un objet, sans modifier les autres \xe9v\xe9nements :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;1)\n\xa0$MyEventsOnLB {1}:=On Column Moved\n\xa0OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)\n\xa0\xa0\xa0\xa0\xa0// active uniquement l\u2019\xe9v\xe9nement\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(n.p,{children:"D\xe9sactivation de tous les \xe9v\xe9nements du formulaire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;0)\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)\n\xa0\xa0\xa0\xa0\xa0// d\xe9sactive tous les \xe9v\xe9nements\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,r.jsx)(n.p,{children:"D\xe9sactivation d\u2019un seul \xe9v\xe9nement du formulaire sans modifier les autres :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;1)\n\xa0$MyFormEvents{1}:=On Timer\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)\n\xa0\xa0\xa0\xa0\xa0// d\xe9sactive uniquement l\u2019\xe9v\xe9nement\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Ev\xe9nements formulaire"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-events",children:"OBJECT GET EVENTS"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1239"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);