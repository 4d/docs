"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43277"],{955852:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"FormObjects/propertiesResizingOptions","title":"Options de redimensionnement","description":"Redimensionnement colonnes auto","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/properties_ResizingOptions.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesResizingOptions","permalink":"/docs/fr/19/FormObjects/propertiesResizingOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_ResizingOptions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"propertiesResizingOptions","title":"Options de redimensionnement"},"sidebar":"docs","previous":{"title":"Plage de valeurs","permalink":"/docs/fr/19/FormObjects/propertiesRangeOfValues"},"next":{"title":"Graduation","permalink":"/docs/fr/19/FormObjects/propertiesScale"}}'),i=r("785893"),t=r("250065");let o={id:"propertiesResizingOptions",title:"Options de redimensionnement"},l=void 0,d={},c=[{value:"Redimensionnement colonnes auto",id:"redimensionnement-colonnes-auto",level:2},{value:"Le redimensionnement automatique des colonnes",id:"le-redimensionnement-automatique-des-colonnes",level:3},{value:"\xc0 propos de la fausse colonne (vide)",id:"\xe0-propos-de-la-fausse-colonne-vide",level:4},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4},{value:"Dimensionnement horizontal",id:"dimensionnement-horizontal",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-1",level:4},{value:"Dimensionnement vertical",id:"dimensionnement-vertical",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-2",level:4},{value:"Pousseur",id:"pousseur",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-3",level:4},{value:"Redimensionnable",id:"redimensionnable",level:2},{value:"Grammaire JSON",id:"grammaire-json-4",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-4",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"redimensionnement-colonnes-auto",children:"Redimensionnement colonnes auto"}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque cette propri\xe9t\xe9 est activ\xe9e (valeur ",(0,i.jsx)(n.code,{children:"rightToLeft"})," dans JSON), les colonnes de listbox sont automatiquement redimensionn\xe9es en m\xeame temps que la listbox, dans les limites des largeurs ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"minimum"})," et ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"maximum"})," d\xe9finies."]}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque cette propri\xe9t\xe9 est d\xe9sactiv\xe9e (valeur ",(0,i.jsx)(n.code,{children:"legacy"})," dans JSON), seule la colonne la plus \xe0 droite de la listbox est redimensionn\xe9e, m\xeame si sa largeur d\xe9passe la valeur maximale d\xe9finie."]}),"\n",(0,i.jsx)(n.h3,{id:"le-redimensionnement-automatique-des-colonnes",children:"Le redimensionnement automatique des colonnes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\xc0 mesure que la largeur de la listbox augmente, ses colonnes sont agrandies une par une, en partant de la droite vers la gauche, jusqu'\xe0 ce que chacune atteigne sa ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"largeur maximale"}),". Seules les colonnes dont la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"#resizable",children:"Resizable"})," est s\xe9lectionn\xe9e sont redimensionn\xe9es."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Le m\xeame principe s'applique lorsque la largeur de la listbox diminue, mais dans l'ordre inverse (c'est-\xe0-dire que les colonnes sont redimensionn\xe9es de gauche \xe0 droite). Lorsque chaque colonne a atteint sa ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"largeur minimale"}),", la barre de d\xe9filement horizontale redevient active."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Les colonnes sont redimensionn\xe9es uniquement lorsque la barre de d\xe9filement horizontale n'est pas \"active\", c'est-\xe0-dire lorsque toutes les colonnes sont enti\xe8rement visibles dans la listbox \xe0 sa taille courante. ",(0,i.jsx)(n.strong,{children:"Note"}),": Si la barre de d\xe9filement horizontale est masqu\xe9e, cela ne modifie pas son \xe9tat : une barre de d\xe9filement peut toujours \xeatre active, m\xeame si elle n'est pas visible."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Lorsque toutes les colonnes ont atteint leur taille maximale, elles ne sont plus agrandies et une colonne vide (fausse) est ajout\xe9e \xe0 droite pour remplir l'espace suppl\xe9mentaire. Si une fausse colonne (vide) est pr\xe9sente, lorsque la largeur de la listbox diminue, c'est la premi\xe8re zone \xe0 \xeatre r\xe9duite."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(881143).Z+"",width:"454",height:"403"})}),"\n",(0,i.jsx)(n.h4,{id:"\xe0-propos-de-la-fausse-colonne-vide",children:"\xc0 propos de la fausse colonne (vide)"}),"\n",(0,i.jsx)(n.p,{children:"L'apparence de la fausse colonne correspond \xe0 celle des colonnes existantes ; elle aura un faux en-t\xeate et/ou un faux pied de page si ces \xe9l\xe9ments sont pr\xe9sents dans les colonnes de la listbox existante et elle aura la m\xeame couleur d'arri\xe8re-plan."}),"\n",(0,i.jsxs)(n.p,{children:["Il est possible de cliquer sur le faux en-t\xeate et/ou le faux pied de page, mais cela n'a aucun effet sur les autres colonnes (par exemple : aucun tri n'est effectu\xe9) ; n\xe9anmoins, les \xe9v\xe9nements ",(0,i.jsx)(n.code,{children:"On Clicked"}),", ",(0,i.jsx)(n.code,{children:"On Header Click"})," et ",(0,i.jsx)(n.code,{children:"On Footer Click"})," sont g\xe9n\xe9r\xe9s en cons\xe9quence."]}),"\n",(0,i.jsxs)(n.p,{children:["Si une cellule de la fausse colonne est cliqu\xe9e, la commande ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html",children:"LISTBOX GET CELL POSITION"}),' renvoie "X+1" pour son num\xe9ro de colonne (o\xf9 X est le nombre de colonnes existantes).']}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resizingMode"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"rightToLeft", "legacy"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"dimensionnement-horizontal",children:"Dimensionnement horizontal"}),"\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 indique si un objet doit \xeatre d\xe9plac\xe9 ou redimensionn\xe9 horizontalement lorsque l'utilisateur redimensionne le formulaire. Elle peut \xe9galement \xeatre d\xe9finie dynamiquement par la commande de langage ",(0,i.jsx)(n.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Trois options sont disponibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Valeur JSON"}),(0,i.jsx)(n.th,{children:"R\xe9sultat"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Agrandir"}),(0,i.jsx)(n.td,{children:'"grow"'}),(0,i.jsx)(n.td,{children:"Le m\xeame pourcentage est appliqu\xe9 \xe0 la largeur de l'objet lorsque l'utilisateur redimensionne la largeur de la fen\xeatre,"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"D\xe9placement"}),(0,i.jsx)(n.td,{children:'"move"'}),(0,i.jsx)(n.td,{children:"L'objet est d\xe9plac\xe9 vers la gauche ou vers la droite selon l'augmentation de la largeur lorsque l'utilisateur redimensionne la largeur de la fen\xeatre,"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Aucun"}),(0,i.jsx)(n.td,{children:'"fixed"'}),(0,i.jsx)(n.td,{children:"L'objet reste stationnaire lorsque le formulaire est redimensionn\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 fonctionne avec la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"#vertical-sizing",children:"Dimensionnement vertical"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sizingX"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/writeProAreaOverview",children:"Zone 4D Write Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/groupBox",children:"Group Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#line",children:"Ligne"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#oval",children:"Ovale"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/ruler",children:"R\xe8gle"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#rectangle",children:" Rectangle"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/spinner",children:"Spinner"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/splitters",children:"Splitter"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/staticPicture",children:"Image statique"})," ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/stepper",children:"Stepper"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/tabControl",children:"Onglet"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/text",children:"Zone de texte"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"dimensionnement-vertical",children:"Dimensionnement vertical"}),"\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 indique si un objet doit \xeatre d\xe9plac\xe9 ou redimensionn\xe9 verticalement lorsque l'utilisateur redimensionne le formulaire. Elle peut \xe9galement \xeatre d\xe9finie dynamiquement par la commande de langage ",(0,i.jsx)(n.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Trois options sont disponibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Valeur JSON"}),(0,i.jsx)(n.th,{children:"R\xe9sultat"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Agrandir"}),(0,i.jsx)(n.td,{children:'"grow"'}),(0,i.jsx)(n.td,{children:"Le m\xeame pourcentage est appliqu\xe9 \xe0 la hauteur de l'objet lorsque l'utilisateur redimensionne la largeur de la fen\xeatre,"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"D\xe9placement"}),(0,i.jsx)(n.td,{children:'"move"'}),(0,i.jsx)(n.td,{children:"L'objet est d\xe9plac\xe9 vers le haut ou vers le bas selon l'augmentation de la hauteur lorsque l'utilisateur redimensionne la largeur de la fen\xeatre,"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Aucun"}),(0,i.jsx)(n.td,{children:'"fixed"'}),(0,i.jsx)(n.td,{children:"L'objet reste stationnaire lorsque le formulaire est redimensionn\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Cette propri\xe9t\xe9 fonctionne avec la propri\xe9t\xe9 ",(0,i.jsx)(n.a,{href:"#horizontal-sizing",children:"Dimensionnement horizontal"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sizingY"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"objets-pris-en-charge-2",children:"Objets pris en charge"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/writeProAreaOverview",children:"Zone 4D Write Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/groupBox",children:"Group Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#line",children:"Ligne"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#oval",children:"Ovale"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/ruler",children:"R\xe8gle"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/shapesOverview#rectangle",children:" Rectangle"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/spinner",children:"Spinner"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/splitters",children:"Splitter"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/staticPicture",children:"Image statique"})," ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/stepper",children:"Stepper"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/tabControl",children:"Onglet"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/text",children:"Zone de texte"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"pousseur",children:"Pousseur"}),"\n",(0,i.jsx)(n.p,{children:"Lorsqu'un objet splitter a cette propri\xe9t\xe9, les autres objets \xe0 sa droite (splitter vertical) ou en dessous (splitter horizontal) sont pouss\xe9s en m\xeame temps que le splitter, sans arr\xeat."}),"\n",(0,i.jsxs)(n.p,{children:["Here is the result of a \u201Cpusher\u201D splitter being moved: ",(0,i.jsx)(n.img,{src:r(786489).Z+"",width:"405",height:"69"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(124401).Z+"",width:"407",height:"67"})}),"\n",(0,i.jsx)(n.p,{children:"Lorsque cette propri\xe9t\xe9 n'est pas appliqu\xe9e au splitter, le r\xe9sultat est le suivant :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(474367).Z+"",width:"407",height:"67"})}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json-3",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Nom"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Valeurs possibles"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"splitterMode"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:'"move" (pusher), "resize" (standard)'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"objets-pris-en-charge-3",children:"Objets pris en charge"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/splitters",children:"S\xe9parateur"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"redimensionnable",children:"Redimensionnable"}),"\n",(0,i.jsx)(n.p,{children:"Indique si la taille de la colonne peut \xeatre modifi\xe9e par l'utilisateur."}),"\n",(0,i.jsx)(n.h4,{id:"grammaire-json-4",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Nom"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type de donn\xe9es"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Valeurs possibles"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"resizable"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"boolean"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:'"true", "false"'})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"objets-pris-en-charge-4",children:"Objets pris en charge"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"[Colonne de list box](listbox_overview.md#list-box-columns)"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},881143:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/property_columnAutoResizing-b171a9fdb74d2540bee74495db5f0519.png"},786489:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},474367:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},124401:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var s=r(667294);let i={},t=s.createContext(i);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);