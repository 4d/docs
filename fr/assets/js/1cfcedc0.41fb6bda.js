"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50309"],{34513:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"FormObjects/propertiesAction","title":"Action","description":"---","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/FormObjects/properties_Action.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesAction","permalink":"/docs/fr/FormObjects/propertiesAction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Action.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"propertiesAction","title":"Action"},"sidebar":"docs","previous":{"title":"Liste des propri\xe9t\xe9s JSON","permalink":"/docs/fr/FormObjects/propertiesReference"},"next":{"title":"Animation","permalink":"/docs/fr/FormObjects/propertiesAnimation"}}'),t=s("785893"),i=s("250065");let o={id:"propertiesAction",title:"Action"},d=void 0,l={},c=[{value:"Glissable",id:"glissable",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4},{value:"D\xe9posable",id:"d\xe9posable",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-1",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement-1",level:4},{value:"Ex\xe9cuter m\xe9thode objet",id:"ex\xe9cuter-m\xe9thode-objet",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-2",level:4},{value:"M\xe9thode",id:"m\xe9thode",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-3",level:4},{value:"Lignes d\xe9pla\xe7ables",id:"lignes-d\xe9pla\xe7ables",level:2},{value:"Grammaire JSON",id:"grammaire-json-4",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-4",level:4},{value:"Multi-s\xe9lectionnable",id:"multi-s\xe9lectionnable",level:2},{value:"Grammaire JSON",id:"grammaire-json-5",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-5",level:4},{value:"Triable",id:"triable",level:2},{value:"Grammaire JSON",id:"grammaire-json-6",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-6",level:4},{value:"Action standard",id:"action-standard",level:2},{value:"Grammaire JSON",id:"grammaire-json-7",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-7",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"glissable",children:"Glissable"}),"\n",(0,t.jsx)(r.p,{children:"Contr\xf4lez si l'utilisateur peut faire glisser l'objet et comment il peut le faire. Par d\xe9faut, aucune op\xe9ration de glisser n'est autoris\xe9e."}),"\n",(0,t.jsx)(r.p,{children:"Deux modes de glisser-d\xe9poser sont propos\xe9s dans 4D :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Un mode ",(0,t.jsx)(r.strong,{children:"personnalis\xe9"}),", dans lequel le glisser d\xe9clenche l'\xe9v\xe9nement formulaire ",(0,t.jsx)(r.code,{children:"Sur d\xe9but glisser"})," dans le contexte de l'objet. ",(0,t.jsx)(r.strong,{"x-id":"1",children:"Custom"}),": In this mode, any drag operation performed on the object triggers the ",(0,t.jsx)(r.code,{children:"On Begin Drag"})," form event in the context of the object.",(0,t.jsx)(r.br,{}),"\nYou then manage the drag action using a method. Ce mode vous permet de mettre en place des interfaces bas\xe9es sur le glisser-d\xe9poser, y compris des interfaces qui ne d\xe9placent pas n\xe9cessairement des donn\xe9es mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. Ce mode est bas\xe9 sur un ensemble de propri\xe9t\xe9s, d'\xe9v\xe9nements et de commandes sp\xe9cifiques \xe0 partir du th\xe8me ",(0,t.jsx)(r.code,{children:"Conteneur de donn\xe9es"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Un mode ",(0,t.jsx)(r.strong,{children:"automatique"}),", dans lequel 4D ",(0,t.jsx)(r.strong,{children:"copie"})," du texte ou des images directement \xe0 partir de l'objet formulaire. Il peut alors \xeatre utilis\xe9 dans la m\xeame zone 4D, entre deux zones 4D, ou entre 4D et une autre application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.img,{src:s(550405).Z+"",width:"421",height:"63"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.img,{src:s(138806).Z+"",width:"421",height:"27"}),"\nIn this mode, the ",(0,t.jsx)(r.code,{children:"On Begin Drag"}),' form event is NOT generated. Si vous souhaitez "forcer" l\'utilisation du glissement personnalis\xe9 alors que le glissement automatique est activ\xe9, maintenez la touche ',(0,t.jsx)(r.strong,{children:"Alt"})," (Windows) ou ",(0,t.jsx)(r.strong,{children:"Option"})," (macOS) enfonc\xe9e pendant l'action. Cette option n'est pas disponible pour les images."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Pour plus d'informations, reportez-vous \xe0 ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv20/4D/20.6/Drag-and-Drop.300-7487471.en.html",children:"Glisser-d\xe9poser"})," dans le manuel ",(0,t.jsx)(r.em,{children:"Langage 4D"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dragging"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:'"none" (par d\xe9faut), "custom", "automatic" (hors list box)'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"Zones 4D Write Pro"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Liste hi\xe9rarchique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview",children:"Zone de plug-in"})]}),"\n",(0,t.jsx)(r.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"#droppable",children:"Droppable"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"d\xe9posable",children:"D\xe9posable"}),"\n",(0,t.jsx)(r.p,{children:"Contr\xf4lez si et comment l'objet peut \xeatre la destination d'une op\xe9ration de glisser-d\xe9poser."}),"\n",(0,t.jsx)(r.p,{children:"Deux modes de glisser-d\xe9poser sont propos\xe9s dans 4D :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Un mode ",(0,t.jsx)(r.strong,{children:"personnalis\xe9"}),", dans lequel le d\xe9poser d\xe9clenche les \xe9v\xe9nements formulaire ",(0,t.jsx)(r.code,{children:"Sur glisser"})," et ",(0,t.jsx)(r.code,{children:"Sur d\xe9poser"})," dans le contexte de l'objet. Un mode ",(0,t.jsx)(r.strong,{"x-id":"1",children:"personnalis\xe9"}),", dans lequel le d\xe9poser d\xe9clenche les \xe9v\xe9nements formulaire ",(0,t.jsx)(r.code,{children:"Sur glisser"})," et ",(0,t.jsx)(r.code,{children:"Sur d\xe9poser"})," dans le contexte de l'objet.",(0,t.jsx)(r.br,{}),"\nYou then manage the drag action using a method. Ce mode vous permet de mettre en place des interfaces bas\xe9es sur le glisser-d\xe9poser, y compris des interfaces qui ne d\xe9placent pas n\xe9cessairement des donn\xe9es mais qui peuvent effectuer tout type d'action, telle que l'ouverture de fichiers ou le lancement d'un calcul. Ce mode est bas\xe9 sur un ensemble de propri\xe9t\xe9s, d'\xe9v\xe9nements et de commandes sp\xe9cifiques \xe0 partir du th\xe8me ",(0,t.jsx)(r.code,{children:"Conteneur de donn\xe9es"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Un mode ",(0,t.jsx)(r.strong,{children:"automatique"}),", dans lequel 4D g\xe8re automatiquement \u2014 si possible \u2014 l\u2019insertion des donn\xe9es gliss\xe9es de type texte ou image et d\xe9pos\xe9es sur l\u2019objet (les donn\xe9es sont coll\xe9es dans l\u2019objet). Les \xe9v\xe9nements ",(0,t.jsx)(r.code,{children:"Sur glisser"})," et ",(0,t.jsx)(r.code,{children:"Sur d\xe9poser"})," ne sont pas g\xe9n\xe9r\xe9s. En revanche, les \xe9v\xe9nements ",(0,t.jsx)(r.code,{children:"Sur apr\xe8s modification"})," (lors du d\xe9poser) et ",(0,t.jsx)(r.code,{children:"Sur donn\xe9es modifi\xe9es"})," (lorsque l'objet perd le focus) sont g\xe9n\xe9r\xe9s."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Pour plus d'informations, reportez-vous \xe0 ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv20/4D/20.6/Drag-and-Drop.300-7487471.en.html",children:"Glisser-d\xe9poser"})," dans le manuel ",(0,t.jsx)(r.em,{children:"Langage 4D"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"dropping"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:'"none" (par d\xe9faut), "custom", "automatic" (hors list box)'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro areas"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview",children:"Plug-in Area"})]}),"\n",(0,t.jsx)(r.h4,{id:"voir-\xe9galement-1",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"#draggable",children:"Draggable"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"ex\xe9cuter-m\xe9thode-objet",children:"Ex\xe9cuter m\xe9thode objet"}),"\n",(0,t.jsxs)(r.p,{children:["Lorsque cette option est activ\xe9e, la m\xe9thode objet est ex\xe9cut\xe9e avec l'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"Sur donn\xe9es modifi\xe9es"})," ",(0,t.jsx)(r.em,{children:"au m\xeame moment"})," o\xf9 l'utilisateur change la valeur de l'indicateur. Lorsque l'option est d\xe9sactiv\xe9e, la m\xe9thode est ex\xe9cut\xe9e ",(0,t.jsx)(r.em,{children:"apr\xe8s"})," la modification."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"continuousExecution"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-2",children:"Objets pris en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"R\xe8gle"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"m\xe9thode",children:"M\xe9thode"}),"\n",(0,t.jsx)(r.p,{children:"R\xe9f\xe9rence d'une m\xe9thode attach\xe9e \xe0 l'objet. Les m\xe9thodes d'objet \"g\xe8rent\" g\xe9n\xe9ralement l'objet pendant que le formulaire est affich\xe9 ou imprim\xe9. Vous n'appelez pas de m\xe9thode objet - 4D l'appelle automatiquement lorsqu'un \xe9v\xe9nement implique l'objet auquel la m\xe9thode objet est rattach\xe9e."}),"\n",(0,t.jsx)(r.p,{children:"Plusieurs types de r\xe9f\xe9rences de m\xe9thode sont pris en charge :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["a standard object method file path, i.e. that uses the following pattern:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:"ObjectMethods/objectName.4dm"}),(0,t.jsx)(r.br,{}),"\n... where ",(0,t.jsx)(r.code,{children:"objectName"})," is the actual ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#object-name",children:"object name"}),". Ce type de r\xe9f\xe9rence indique que le fichier de m\xe9thode se trouve \xe0 l'emplacement par d\xe9faut (\"sources/forms/",(0,t.jsx)(r.em,{children:"formName"}),"/ObjectMethods/\"). Dans ce cas, 4D g\xe8re automatiquement la m\xe9thode objet lorsque des op\xe9rations sont ex\xe9cut\xe9es sur l'objet formulaire (renommage, duplication, copier/coller, etc.)"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,t.jsx)(r.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:"../../CustomMethods/myMethod.4dm"}),"\nYou can also use a filesystem:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:"/RESOURCES/Buttons/bOK.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-3",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"method"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:"Chemin de fichier standard ou personnalis\xe9 de la m\xe9thode objet ou nom de la m\xe9thode projet"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-3",children:"Objets pris en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormEditor/forms",children:"Forms"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"lignes-d\xe9pla\xe7ables",children:"Lignes d\xe9pla\xe7ables"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"Array type list boxes"})}),"\n",(0,t.jsxs)(r.p,{children:["Autorise le d\xe9placement des lignes pendant l'ex\xe9cution. Cette option est s\xe9lectionn\xe9e par d\xe9faut. Il n'est pas disponible pour les ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview#selection-list-boxes",children:"list box de type s\xe9lection"})," ni pour les ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesHierarchy#hierarchical-list-box",children:"list box en mode hi\xe9rarchique"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-4",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"movableRows"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-4",children:"Objets pris en charge"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"multi-s\xe9lectionnable",children:"Multi-s\xe9lectionnable"}),"\n",(0,t.jsxs)(r.p,{children:["Allows the selection of multiple records/options in a ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"hierarchical list"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-5",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"selectionMode"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsx)(r.td,{children:'"multiple", "single", "none"'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-5",children:"Objets pris en charge"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"triable",children:"Triable"}),"\n",(0,t.jsxs)(r.p,{children:["Permet de trier les donn\xe9es de colonne en cliquant sur un en-t\xeate de ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"Listbox"}),". Cette option est s\xe9lectionn\xe9e par d\xe9faut. Les tableaux de types d'image (colonnes) ne peuvent pas \xeatre tri\xe9s \xe0 l'aide de cette fonction."]}),"\n",(0,t.jsx)(r.p,{children:"Dans les list box bas\xe9es sur une s\xe9lection d'enregistrements, la fonction de tri standard est disponible uniquement :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Lorsque la source de donn\xe9es est ",(0,t.jsx)(r.em,{children:"S\xe9lection courante"}),","]}),"\n",(0,t.jsx)(r.li,{children:"Avec des colonnes associ\xe9es \xe0 des champs (de type Alpha, Num\xe9rique, Date, Heure ou Bool\xe9en)."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Dans d'autres cas (list box bas\xe9es sur des s\xe9lections nomm\xe9es, colonnes associ\xe9es \xe0 des expressions), la fonction de tri standard n'est pas disponible. Un tri de list box standard modifie l'ordre de la s\xe9lection courante dans la base de donn\xe9es. Cependant, les enregistrements en surbrillance et l'enregistrement courant ne sont pas modifi\xe9s. Un tri standard synchronise toutes les colonnes de la list box, y compris les colonnes calcul\xe9es."}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-6",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sortable"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsx)(r.td,{children:"true, false"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-6",children:"Objets pris en charge"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"action-standard",children:"Action standard"}),"\n",(0,t.jsxs)(r.p,{children:["Typical activities to be performed by active objects (",(0,t.jsx)(r.em,{children:"e.g."}),", letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. Elles sont d\xe9crites en d\xe9tail dans la section ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html",children:"Actions standard"})," du ",(0,t.jsx)(r.em,{children:"manuel de d\xe9veloppement"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez associer \xe0 la fois une action standard et la m\xe9thode projet d'un objet. Dans ce cas, l'action standard est g\xe9n\xe9ralement ex\xe9cut\xe9e apr\xe8s la m\xe9thode et 4D utilise cette action pour activer/d\xe9sactiver l'objet en fonction du contexte courant. Lorsqu\u2019un objet est d\xe9sactiv\xe9, la m\xe9thode projet associ\xe9e ne peut \xeatre ex\xe9cut\xe9e."}),"\n",(0,t.jsxs)(r.p,{children:["Vous pouvez \xe9galement d\xe9finir cette propri\xe9t\xe9 \xe0 l'aide de la commande ",(0,t.jsx)(r.code,{children:"OBJECT SET ACTION"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"grammaire-json-7",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nom"}),(0,t.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,t.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"action"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsxs)(r.td,{children:["Le nom d'une ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html",children:"action standard valide"}),"."]})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objets-pris-en-charge-7",children:"Objets pris en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Drop-down List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Picture Pop-up Menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab control"})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},550405:function(e,r,s){s.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAA/CAIAAADPOkBoAAADZElEQVR42u3csW7TQBwH4BjxBiCYmGHuyGt06Bt06TtUWVgRCxMPQxkoAxIzXelE1YrSFwhGFpY520ma5u6c3PepipKLk1wq99f/+eyrrn9+nwEU4FHuDgAkIu+AUsg7oBTyDiiFvANK8Th3B1Y4+/gpdxdI4fDo+ObqIncvQna/PdDdtaaed7XPX77m7gJxzeenubswyu6304Jdawfyrvb23YeDk/OUn/jt/evcX7ogd7eXubuwTL375e4CGwp2LcfvgFI8KO+ePn+1ZmNKSjO2rqqq3F1gC8K8q9Oq+zN7cH5tK/76Kbb1XBOUsN8Gjt9d/39F7fWmF9hmL/TWJ+mgBKvnK+rYaiKvm19BCA5GW/9VY++8joOT8zqV2lmL4H67Tbt9d4Puw260tRv0nwL2z7rzs0E2dR/2n0r8HQZDcNBYCAIlGMi7JXXcdkV9c4DA6uN3rezH49ohbb9MW/9NDFqhWPc433ia5djggbwlDGChWBuefzdW692rBkxWMI7loFoPirJufVcXd2PH9bpPde8Hd7ZSHvYHs03L2JbB/WDjfmHYbhbnt00pqqpaLBa5e0EozLt+KrUtaz61ZPuVn7WOfhgFLcFZJksal7wnPJDImyDXz0IUddi5Cm1qdmB9lPn89O728uzNi5QfOvEVO0hss0qtiTxV3nRMPe8Oj45zd4GiNf9uN355E3m/f/3I/T34q5rmWSYwBU+evdzshUFZp8rLa5fWN4ZctrXEfFPlqS2yM18BKdSRl/0KJeQdJCLyspN3kI7Iy0veQQrVP7MJLL1RLPMVEFF3ZtZ8RXbqO4ilmZNtajoj2SmQdxCFE1AmSN5BFN2FM5R4EyHvYPtUdtNkvgJiqau5dsmA5rZdNKXbLhyTUd9BLN1QG2t3XW1K6juIpYmzm6uLpoJrU69pqW/Vd4nJO4gliLN+rrWBmLunpZB3EMtYnHVnaQfXQFbxReL4HcSyZEn3xbjcvd5n8g5iMR0xNcazEEswDzs4VzsTiwmp7yCWwbATbRmZC4fUmvOQZ73JirbRX2UkxrOQTRtwir40jGeBUsg7yExxl4y8A0rh+B1kMHYeMlGZCQJKYTwLlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1Qij9Ru9BheP253gAAAABJRU5ErkJggg=="},138806:function(e,r,s){s.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAAbCAIAAABTBwdIAAAB/ElEQVR42u3cwU3DMBSAYYLYAAQjwD49dIOOUWUCxJ1hgAPiwALlzKmoSBULlEiVrPQ5dt008bPj/zsljhMe6OnZTkKqzXp1AQAFuNQOAAAiod4BKAX1DkAprrQD8Hl9edMOATHM5ovfny/tKCTSbwJEaiVd7xrvH5/aIWBcdb3UDsGJ9MuanVqp17vG49OzdggY0d/2WzsEH9IvX3Zqcf8OQCn617ubu4fAxpiqqtINACUj/RJ3sJ4V1WqzXjUtmzNeSD7zdKNJo91u528Z/EcAe6TfZMj7d6I89a5W6hO9cIzJUET6xXTkeYWZoLXrlyiCnaXNPst15RDN0NceAMW26WP6i9HS7LZzy3SwDwFtpN9kBD2fFbWpvWsfivwLdGZhJ1cWAr2RfnmR9c4zjxvWqBcHANuR+3eG+v04s6awx8nwi7BqQD+k3zSEvm+c5nSs806KBysIDIj0y06f9+9cc72T5oDRJoyuRGSwRQSkX1KC5nf7F/Hau52H2ttiY5Dpob2a2Le4eopt0dkemU230f7ayBjpNwEH9c6uSqYl8JCnv+v0k9jZIFrEY35Po+eaQCfSL3f8/yyAUqT+fZS6Xib+/QwAuUi63s3mC+0QUDSG24mp0nzRBFB3fXuvHQIGkNP3jQEtCX5iHmfieQWAUlDvAJSCegegFP8tyFk+nAzT1QAAAABJRU5ErkJggg=="},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return o}});var n=s(667294);let t={},i=n.createContext(t);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);