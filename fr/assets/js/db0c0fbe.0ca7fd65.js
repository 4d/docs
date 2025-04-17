"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87084"],{847951:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"FormObjects/dropdownListOverview","title":"Liste d\xe9roulante","description":"Les listes d\xe9roulantes sont des objets de formulaire qui permettent \xe0 l\'utilisateur de s\xe9lectionner un \xe9l\xe9ment dans une liste. Vous g\xe9rez les \xe9l\xe9ments qui apparaissent dans les listes d\xe9roulantes \xe0 l\u2019aide d\'un objet, d\'un tableau, d\u2019une \xe9num\xe9ration ou d\'une action standard.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/FormObjects/dropdownList_Overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/dropdownListOverview","permalink":"/docs/fr/FormObjects/dropdownListOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dropdownListOverview","title":"Liste d\xe9roulante"},"sidebar":"docs","previous":{"title":"Combo Box","permalink":"/docs/fr/FormObjects/comboBoxOverview"},"next":{"title":"Zone de groupe","permalink":"/docs/fr/FormObjects/groupBox"}}'),s=t("785893"),i=t("250065");let o={id:"dropdownListOverview",title:"Liste d\xe9roulante"},l=void 0,a={},d=[{value:"Types de listes d\xe9roulantes",id:"types-de-listes-d\xe9roulantes",level:2},{value:"Gestion des listes d\xe9roulantes",id:"gestion-des-listes-d\xe9roulantes",level:2},{value:"Utiliser un objet",id:"utiliser-un-objet",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration-1",level:3},{value:"Valeur de l&#39;\xe9l\xe9ment s\xe9lectionn\xe9 ou R\xe9f\xe9rence de l&#39;\xe9l\xe9ment s\xe9lectionn\xe9",id:"valeur-de-l\xe9l\xe9ment-s\xe9lectionn\xe9-ou-r\xe9f\xe9rence-de-l\xe9l\xe9ment-s\xe9lectionn\xe9",level:4},{value:"Utiliser une \xe9num\xe9ration hi\xe9rarchique",id:"utiliser-une-\xe9num\xe9ration-hi\xe9rarchique",level:3},{value:"Utiliser une action standard",id:"utiliser-une-action-standard",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Les listes d\xe9roulantes sont des objets de formulaire qui permettent \xe0 l'utilisateur de s\xe9lectionner un \xe9l\xe9ment dans une liste. Vous g\xe9rez les \xe9l\xe9ments qui apparaissent dans les listes d\xe9roulantes \xe0 l\u2019aide d'un objet, d'un tableau, d\u2019une \xe9num\xe9ration ou d'une action standard."}),"\n",(0,s.jsx)(r.p,{children:"Sous macOS, les listes d\xe9roulantes sont aussi parfois appel\xe9es \"pop-up menu\". Les deux noms font r\xe9f\xe9rence aux m\xeames objets. Comme le montre l'exemple suivant, l'apparence de ces objets peut diff\xe9rer l\xe9g\xe8rement selon la plateforme :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(242596).Z+"",width:"458",height:"158"})}),"\n",(0,s.jsx)(r.h2,{id:"types-de-listes-d\xe9roulantes",children:"Types de listes d\xe9roulantes"}),"\n",(0,s.jsxs)(r.p,{children:["Vous pouvez cr\xe9er diff\xe9rents types de listes d\xe9roulantes avec diff\xe9rentes fonctionnalit\xe9s. To define a type, select the appropriate ",(0,s.jsx)(r.strong,{children:"Expression Type"})," and ",(0,s.jsx)(r.strong,{children:"Data Type"})," values in the Property list, or use their JSON equivalent."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Fonctionnalit\xe9s"}),(0,s.jsx)(r.th,{children:"Type d\u2019expression"}),(0,s.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,s.jsx)(r.th,{children:"D\xe9finition JSON"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"Construit sur une collection"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"Num\xe9rique, texte, date ou heure"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"dataSourceTypeHint: object"})," + ",(0,s.jsx)(r.code,{children:"numberFormat: <format>"})," or ",(0,s.jsx)(r.code,{children:"textFormat: <format>"})," or ",(0,s.jsx)(r.code,{children:"dateFormat: <format>"})," or ",(0,s.jsx)(r.code,{children:"timeFormat: <format>"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Tableau"}),(0,s.jsx)(r.td,{children:"Construit sur un tableau"}),(0,s.jsx)(r.td,{children:"Tableau"}),(0,s.jsx)(r.td,{children:"Num\xe9rique, texte, date ou heure"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"dataSourceTypeHint: arrayNumber"})," or ",(0,s.jsx)(r.code,{children:"arrayText"})," or ",(0,s.jsx)(r.code,{children:"arrayDate"})," or ",(0,s.jsx)(r.code,{children:"arrayTime"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enum\xe9ration enregistr\xe9e en tant que valeur"}),(0,s.jsx)(r.td,{children:"Construit sur une liste de choix (standard)"}),(0,s.jsx)(r.td,{children:"Liste"}),(0,s.jsx)(r.td,{children:"Valeur de l'\xe9l\xe9ment s\xe9lectionn\xe9"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"dataSourceTypeHint: text"})," + ",(0,s.jsx)(r.code,{children:"saveAs: value"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enum\xe9ration enregistr\xe9e en tant que r\xe9f\xe9rence"}),(0,s.jsx)(r.td,{children:"Construit sur une liste de choix. La position de l'\xe9l\xe9ment est sauvegard\xe9e"}),(0,s.jsx)(r.td,{children:"Liste"}),(0,s.jsx)(r.td,{children:"R\xe9f\xe9rence de l'\xe9l\xe9ment s\xe9lectionn\xe9"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"dataSourceTypeHint: integer"})," + ",(0,s.jsx)(r.code,{children:"saveAs: reference"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enum\xe9ration hi\xe9rarchique"}),(0,s.jsx)(r.td,{children:"Peut afficher un contenu hi\xe9rarchique"}),(0,s.jsx)(r.td,{children:"Liste"}),(0,s.jsx)(r.td,{children:"R\xe9f\xe9rence de liste"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"dataSourceTypeHint: integer"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Action standard"}),(0,s.jsx)(r.td,{children:"Construit automatiquement par l'action"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"any"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.em,{children:"any except List reference"})}),(0,s.jsxs)(r.td,{children:["any definition + ",(0,s.jsx)(r.code,{children:"action: <action>"})," (+ ",(0,s.jsx)(r.code,{children:"focusable: false"})," for actions applying to other areas)"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"gestion-des-listes-d\xe9roulantes",children:"Gestion des listes d\xe9roulantes"}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-un-objet",children:"Utiliser un objet"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Cette fonctionnalit\xe9 n'est disponible que dans les projets 4D."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["An ",(0,s.jsx)(r.a,{href:"/docs/fr/Concepts/object",children:"object"})," encapsulating a ",(0,s.jsx)(r.a,{href:"/docs/fr/Concepts/collection",children:"collection"})," can be used as the data source of a drop-down list. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"valeurs"})}),(0,s.jsx)(r.td,{children:"Collection"}),(0,s.jsxs)(r.td,{children:["Obligatoire - Collection de valeurs scalaires. Toutes les valeurs doivent \xeatre du m\xeame type. Supported types:",(0,s.jsx)(r.li,{children:"strings"}),(0,s.jsx)(r.li,{children:"numbers"}),(0,s.jsx)(r.li,{children:"dates"}),(0,s.jsx)(r.li,{children:"times"}),"If empty or not defined, the drop-down list is empty"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"index"})}),(0,s.jsx)(r.td,{children:"number"}),(0,s.jsxs)(r.td,{children:["Index of the currently selected item (value between 0 and ",(0,s.jsx)(r.code,{children:"collection.length-1"}),"). If you set -1, ",(0,s.jsx)(r.code,{children:"currentValue"})," is displayed as a placeholder string"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"currentValue"})}),(0,s.jsx)(r.td,{children:"identique \xe0 Collection"}),(0,s.jsx)(r.td,{children:"\xc9l\xe9ment actuellement s\xe9lectionn\xe9 (utilis\xe9 comme texte exemple si pass\xe9 par code)"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Si l'objet contient d'autres propri\xe9t\xe9s, elles sont ignor\xe9es."}),"\n",(0,s.jsx)(r.p,{children:"Pour initialiser l'objet associ\xe9 \xe0 la liste d\xe9roulante, vous pouvez :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Enter a list of default values in the object properties by selecting ",(0,s.jsx)(r.code,{children:"\\<Static List>"})," in the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource",children:"Data Source"})," theme of the Property List. Les valeurs par d\xe9faut sont charg\xe9es automatiquement dans un objet."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:['Ex\xe9cuter le code qui cr\xe9e l\'objet et ses propri\xe9t\xe9s. For example, if "myList" is the ',(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," associated to the drop-down list, you can write in the ",(0,s.jsx)(r.a,{href:"/docs/fr/Events/onLoad",children:"On Load"})," form event:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'// Form.myDrop is the datasource of the form object\n \nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1  //currentValue is a placeholder\nForm.myDrop.currentValue:="Select a fruit" \n'})}),"\n",(0,s.jsx)(r.p,{children:"La liste d\xe9roulante est affich\xe9e avec le texte d'exemple :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(652488).Z+"",width:"230",height:"33"})}),"\n",(0,s.jsx)(r.p,{children:"Apr\xe8s que l'utilisateur s\xe9lectionne une valeur :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(139405).Z+"",width:"234",height:"116"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges"\nForm.myDrop.index //3\n'})}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-une-\xe9num\xe9ration",children:"Utiliser une \xe9num\xe9ration"}),"\n",(0,s.jsxs)(r.p,{children:["Un ",(0,s.jsx)(r.a,{href:"/docs/fr/Concepts/arrays",children:"tableau"})," est une liste de valeurs gard\xe9es en m\xe9moire qui sont r\xe9f\xe9renc\xe9es par le nom du tableau. Une liste d\xe9roulante peut afficher un tableau comme une liste de valeurs lorsque vous cliquez dessus."]}),"\n",(0,s.jsx)(r.p,{children:"Pour initialiser le tableau associ\xe9 \xe0 la liste d\xe9roulante, vous pouvez :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Enter a list of default values in the object properties by selecting ",(0,s.jsx)(r.code,{children:"\\<Static List>"})," in the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource",children:"Data Source"})," theme of the Property List. Les valeurs par d\xe9faut sont automatiquement charg\xe9es dans un tableau. Vous pouvez faire r\xe9f\xe9rence \xe0 ce tableau par l\u2019interm\xe9diaire du nom de la variable associ\xe9e \xe0 l\u2019objet."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Avant que l\u2019objet ne soit affich\xe9, ex\xe9cutez une m\xe9thode qui affecte des valeurs au tableau. Par exemple :"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'  ARRAY TEXT(aCities;6) \n  aCities{1}:="Philadelphia" \n  aCities{2}:="Pittsburg" \n  aCities{3}:="Grand Blanc" \n  aCities{4}:="Bad Axe" \n  aCities{5}:="Frostbite Falls" \n  aCities{6}:="Green Bay" \n'})}),"\n",(0,s.jsxs)(r.p,{children:["In this case, the name of the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," associated with the object in the form must be ",(0,s.jsx)(r.code,{children:"aCities"}),". Ce code peut \xeatre plac\xe9 dans la m\xe9thode formulaire et \xeatre ex\xe9cut\xe9 lorsque l\u2019\xe9v\xe9nement formulaire ",(0,s.jsx)(r.code,{children:"Sur chargement"})," se produit."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Before the object is displayed, load the values of a list into the array using the ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/list-to-array",children:(0,s.jsx)(r.code,{children:"LIST TO ARRAY"})})," command. Par exemple :"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'   LIST TO ARRAY("Cities";aCities)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["In this case also, the name of the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," associated with the object in the form must be ",(0,s.jsx)(r.code,{children:"aCities"}),". Ce code peut \xeatre ex\xe9cut\xe9 \xe0 la place de celui propos\xe9 plus haut."]}),"\n",(0,s.jsx)(r.p,{children:"Si vous voulez stocker dans un champ le choix de l\u2019utilisateur, il est n\xe9cessaire d\u2019\xe9crire du code pour affecter les valeurs et de l\u2019ex\xe9cuter apr\xe8s la validation de l\u2019enregistrement. Ce code pourrait \xeatre le suivant :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) //new record\n          aCities:=3 //display a default value\n       Else //existing record, display stored value\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) //user modified selection\n       City:=aCities{aCities} //field gets new value\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n'})}),"\n",(0,s.jsx)(r.p,{children:"Vous devez s\xe9lectionner chaque \xe9v\xe9nement que vous testez dans votre Au cas o\xf9. Les tableaux contiennent toujours un nombre fini d\u2019\xe9l\xe9ments. La liste des \xe9l\xe9ments est dynamique et peut \xeatre modifi\xe9e par programmation. Les \xe9l\xe9ments d\u2019un tableau peuvent \xeatre modifi\xe9s et tri\xe9s."}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-une-\xe9num\xe9ration-1",children:"Utiliser une \xe9num\xe9ration"}),"\n",(0,s.jsxs)(r.p,{children:["If you want to use a drop-down list to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the drop-down list's ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"data source"}),". Cette possibilit\xe9 facilite la gestion des champs/variables \xe9num\xe9r\xe9(e) s."]}),"\n",(0,s.jsx)(r.p,{children:'Par exemple, dans le cas d\'un champ "Couleur" qui ne peut contenir que les valeurs "Blanc", "Bleu", "Vert" ou "Rouge", il est possible de cr\xe9er une liste contenant ces valeurs et de l\'associer \xe0 une liste d\xe9roulante qui fait r\xe9f\xe9rence au champ "Couleur" 4D. 4D se charge alors de g\xe9rer automatiquement la saisie et l\u2019affichage de la valeur courante dans le formulaire.'}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable. Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," field of the drop-down list in the Property List."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Il n'est pas possible d'utiliser cette fonctionnalit\xe9 avec un objet ou une liste d\xe9roulante de tableaux. Si vous entrez un nom de champ dans la zone \"Variable ou Expression\", vous devez utiliser une \xe9num\xe9ration."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Lorsque le formulaire est ex\xe9cut\xe9, 4D g\xe8re automatiquement la liste d\xe9roulante lors de la saisie ou de l'affichage : lorsque l'utilisateur choisit une valeur, celle-ci est enregistr\xe9e dans le champ ; cette valeur de champ est affich\xe9e dans la liste d\xe9roulante lors de l'affichage du formulaire :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(214034).Z+"",width:"755",height:"171"})}),"\n",(0,s.jsx)(r.h4,{id:"valeur-de-l\xe9l\xe9ment-s\xe9lectionn\xe9-ou-r\xe9f\xe9rence-de-l\xe9l\xe9ment-s\xe9lectionn\xe9",children:"Valeur de l'\xe9l\xe9ment s\xe9lectionn\xe9 ou R\xe9f\xe9rence de l'\xe9l\xe9ment s\xe9lectionn\xe9"}),"\n",(0,s.jsxs)(r.p,{children:["When you have associated a drop-down list with a choice list and with a field or a variable, you can set the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#data-type-list",children:(0,s.jsx)(r.strong,{children:"Data Type"})})," property to ",(0,s.jsx)(r.strong,{children:"Selected item value"})," or ",(0,s.jsx)(r.strong,{children:"Selected item reference"}),". Cette option permet d'optimiser la taille des donn\xe9es stock\xe9es."]}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-une-\xe9num\xe9ration-hi\xe9rarchique",children:"Utiliser une \xe9num\xe9ration hi\xe9rarchique"}),"\n",(0,s.jsx)(r.p,{children:"Une liste d\xe9roulante hi\xe9rarchique a une sous-liste associ\xe9e \xe0 chaque \xe9l\xe9ment de la liste. Voici un exemple de liste d\xe9roulante hi\xe9rarchique :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:t(930590).Z+"",width:"248",height:"177"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Dans les formulaires, les listes d\xe9roulantes hi\xe9rarchiques sont limit\xe9es \xe0 deux niveaux."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["You can assign the hierarchical choice list to the drop-down list object using the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," field of the Property List."]}),"\n",(0,s.jsxs)(r.p,{children:["You manage hierarchical drop-down lists using the ",(0,s.jsx)(r.strong,{children:"Hierarchical Lists"})," commands of the 4D Language. All commands that support the ",(0,s.jsx)(r.code,{children:'(*; "name")'})," syntax can be used with hierarchical  drop-down lists, e.g. ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/list-item-parent",children:(0,s.jsx)(r.code,{children:"List item parent"})}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"utiliser-une-action-standard",children:"Utiliser une action standard"}),"\n",(0,s.jsxs)(r.p,{children:["You can build automatically a drop-down list using a ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAction#standard-action",children:"standard action"}),". Cette fonctionnalit\xe9 est prise en charge dans les contextes suivants :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Use of the ",(0,s.jsx)(r.code,{children:"gotoPage"})," standard action. In this case, 4D will automatically display the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormEditor/forms#form-pages",children:"page of the form"})," that corresponds to the number of the item that is selected. Par exemple, si l\u2019utilisateur clique sur le 3e \xe9l\xe9ment, 4D affichera la page 3 du formulaire courant (si elle existe). Au moment de l'ex\xe9cution, la liste d\xe9roulante affiche par d\xe9faut les num\xe9ros de page (1, 2...)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Use of a standard action that displays a sublist of items, for example ",(0,s.jsx)(r.code,{children:"backgroundColor"}),". Cette fonctionnalit\xe9 n\xe9cessite que :"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["a styled text area (",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," or ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"input"})," with ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#multi-style",children:"multistyle"})," property) is present in the form as the standard action target."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["the ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#focusable",children:"focusable"})," property is not set to the drop-down list.\nLors de l'ex\xe9cution, la liste d\xe9roulante affichera une liste automatique de valeurs, par exemple les couleurs d'arri\xe8re-plan. Vous pouvez remplacer cette liste automatique par une liste personnalis\xe9e en associant \xe0 l'objet une \xe9num\xe9ration dans laquelle chaque \xe9l\xe9ment a lui-m\xeame \xe9t\xe9 assign\xe9 \xe0 une action standard."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Cette fonctionnalit\xe9 ne peut pas \xeatre utilis\xe9e avec une liste d\xe9roulante hi\xe9rarchique."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesTextAndPicture#button-style",children:"Button Style"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#data-type-expression-type",children:"Data Type (expression type)"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#data-type-list",children:"Data Type (list)"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#not-rendered",children:"Not rendered"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAction#standard-action",children:"Standard action"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#save-value",children:"Save value"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},652488:function(e,r,t){t.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},139405:function(e,r,t){t.d(r,{Z:function(){return n}});let n="data:image/png;base64,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"},242596:function(e,r,t){t.d(r,{Z:function(){return n}});let n=t.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},214034:function(e,r,t){t.d(r,{Z:function(){return n}});let n=t.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},930590:function(e,r,t){t.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAACxCAYAAADphnCvAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAD7NJREFUeF7tnT9v3MgZh7dInQ+Q6j6A21Xhwt9BlVtCjTvhysDAtabgytkgSBNcbAFBIGmDXJAmiIAUhyC4AwSpOegAt1a8AhRLPjcpUkz4zsxLvjM75JJcLr078yseaMn5w7V/fGaGqyU1+fjxowIAxAkEByBiIDgAEQPBAYgYCA5AxAjBz1Q2mahJyZ7KL93K/aB+h+qr4DJXe0P2R5xl4t+dqTPat4njADAynuDVCX2Z76nJXq4uy/K+rCv4wAOEjxbZSm238zNRrtnwewBgQ9QKPtxJveWC0+y9ciCD4GA3aSm4eZ1lxazuLGGrJX0mZz1RtpfnS/2Ej0FcqnxP9knl1fYkO1tuU/s+bL28Wn7v5Ze2TGKOsVzGxwm9h6LcOa79P2k1WAAwHi2X6L4EZruUSZ/s3NYt0/04ZdUx3G0jd71ooW33WKH3UQqpr7PFUtyhGliWBoiyr7r3UFD0rd83BAdbRsOHbFIG74TWIrmynGVWDipzTvKWogT6XG7vbTe9j6Z2or6D7i/U3mtr61X/VwU8kACwRTQs0SWhEzxCwQv0imPpUsBrW/teAdgu+gmut1mkAueEd8vcJbpZCpft9LLZLVt/iS7fR107wVku9sn34B/H7yvwXrFEB1tGT8ELtEy8RPXKtLimzP2QzS2bZFlQHC5ncWlWNvVXfcjm99W0Lfdzez7Gcn33PRT7nOPa/RAcbBlCcABAbEBwACIGggMQMRAcgIiB4ABEDAQHIGIgOAARUwo++eWPAGwcefKBzeMI/u+f/gfAxoDg4wPBwWhA8PGpFfwXP/8ZfuLnoEDw8QkKvolwwe4x9HkAwccHS3QwGhB8fDCDg1owg+8+mMHBaEDw8cEMDmrBDL77YAYHowHBxwczOKhl1XlQPs0mQLA+BB8dzOBgLdrKTUDw8cEMDmppex60kZuA4OODGRwMwiq5CQg+PpjBQS1DnwcQfHwwg4PRgODjgxkc1IIZfPfBDA5GA4KPD2ZwUAtm8N0HMzgYDQg+Po0zOH7iJ/0cCgg+PpjBwWhA8PGB4GA0IPj4OIIDsGnkyQc2Tyn469evQeTI4EEaOILLAhAXyDdNIHgiIN80CQr+6dMnEAmhfEE6QPDICeUL0gGCR47M9+bmRt3e3qq7uzt1f3+vHh4eynIQJxA8cmS+FxcX6vr6Wr17905LDsHjp5vgV7maisfzTKa5ugrVA1uDzPfk5ESdn59ryReLhZ7FuRzESXvBtdxTlV9V++ZZpuayDtg6ZL6z2UxLTjM5LdchePy0FPxK5dOJyub+fjAWl5eX6unTp+r9+/fB8jpkvkdHR+r4+Fh99913epn+4cOHshzESTvB9ey9YrZ2lu9cd66yYtbPsqndZ7bzeVWXBo2rnMrN9jS/KvucZ9xfQTa3+20feea1CQxC86JORJcRz58/7yy5zPfFixfqzZs3EDwh2gsuRKmE5CW7lY6X74VYRjraL6U126V0JKAs19uhgUT2b/tg4WUbel0OBGaAiG3V0VVymS8ET481ZnAhnTN7W7RoUkyvTZttOwAYeH9TG3otVg+Rfgh4cHCgDg8Pg2U+Ml8Inh4tr8F9qbx9tUt4v12HbadPWn5zveY+aHVBKwL+aerEw+npqXry5Im+Jg+V+8h8IXh6tBScl+VSYikWvXavn5frdNym2ZtnYC27PFZDH1R3mhWzt6wTB13lJmS+EDw9WguucZbMntD+Mn3tJbr50Ez35Qi7qg/74Zy4Fo8Bkrqr3ITMF4KnRzfBd4QYP1wj3r59G9zfhMwXgqdHfILrJXqcH671QeYLwdMjIsF5Se8u11NH5gvB0yPKJTqokPlC8PSA4JEj84Xg6QHBI0fmC8HTA4JHjswXgqcHBI8cmS8ETw8IHjkyXwieHhA8cmS+EDw9IHjkyHwheHq0FJy+722/F26J8U6tGJH5QvD06CA4viG2i8h8IXh6QPAdYYhnskHw9FhTcLO/euZa1+eocT/i1tCC8k4w5xbU0AMl0gLPZANd6X0NbiQ0+8PX43JQsO1ZePkcNSv3yodFFG1w3Y9nsoFuDDKDO/u7PkdNz9KB2dl/gAQR2UMc+oJnsoG2DCu4I2vL56g1Co5luQ+eyQa6MKzgvZ6j1rREx6/jJHgmG+jKwEt08WFZp+eoGZl5KR7+kK0g4SU6nskG+tBScLAN4JlsoCsQPHJkvhA8PSB45Mh8IXh6QPDIkflC8PSA4BFCWYJ0YG9DQPAIWRU6iAcIniAQPB16Cf6r7/8LdhgM1vHD+ULwBIHg8cP5QvAEgeDxw/lS1jc3N+r29lbd3d2p+/t79fDwUJZD8AiB4PHD+VLWFxcX6vr6Wv/qkyTvIfg36vFkT+3PG/a9Oqi+Mz45UM/KeoZn+8X+/W+cfWAzNAtuv/e/9L1+//6A9aGHfyzdLEQ3JHW6p2D49xUDnC9lfXJyos7Pz7Xki8VCz+JcPozg85fqCyl1sb3/iuvZ8kcH6vEjvw+wCVYLPlXTqf831Dcg0tItv/IW4rZA8BCcL2U9m8205DST03J9eMFp9n70Un3ltKn46ss99cWXP5Q/Q3VAM7/5dqFen/5Vzf71U7Bc0kbwfF7I5/wd9c2I5MzinWdvAoKH4Hwp66OjI3V8fBz8huJAS3R6PamR9we1zzO3nsnrBwLQzO/+8m0ryVsJXgjjLqE9kZxbdc0sTPWrWT9QPyQv7dcDibmVuO5WYL/f6jl/8jj0OnR5kR6cL2Xd9BXk4a7BtcgmrMdLy3OWWsjO5aATbSRvK3i71wX8PDw5A9O+YrnNA8RVXr320QNDLlcMRlRXdlfi5YHHGyASh/MdUXCLvh6vJPeX5bSND9vW4/d/+pv6+s//CJYR7QUvKKUV+73ZVUN1ytmYpC3qlsv8FdfWdIyiD1do93Fc1erAe392mz4zqBtAUoTzHUjwwMyrRV7+tJyoJDZLd+dE0YTbgdX89u8/qjd/+KO+Jg+VE50EL5fOvuCh5+GxyEXdUuyinhDfrc94x+wseCF3cVwszSs434EEt7/mEtfPzq+9Xr1cWqrrWTv44Zspd5bxoBVt5Ca6CV6ghaOBl/dbqQIzpl6Ke0vzLFv1SOuwtOEZPVTXbLufGaQN5zuY4PIaW+OI683UVnwaBEIfvGGZ3h2Suo3cRGfBC0jUSvCCUnoLz556v19vuT+XwDGd/mVZveDlM/8aVwtpwPkOKDj43Pz6n/8J7vdpFhzEAOcLwRMEgscP5wvBEwSCxw/nC8ETBILHD+cLwRMEgscP5wvBEwSCxw/nC8ETBILHD+fbS/BQh2B3QJbxw/lC8ARBlvHD+ULwBEGW8cP5QvAEQZbxw/kOJ7i95c8QutOoJa2+uwzWYbQslwh/zx0MD+c7jOBaSnEiFNs5brzfWj5flhB8LDjfYQSnER938HxWLi8v1dOnT9X79++D5ZLPlyUEHwvOdxjBdXChe3FtoPRkD7vkk3Xo/t1yKVjerC9PAvs6r5aMuN+3nufPn7eSvF+WK/JqlZHMtkCvFqo+q8ct2ds+/f1O/SEvHeKD8x1IcKIKpQrKnCzljKADEgGXyOD910V7Ppn0tSGCbaKN5P2ylPTNaLmdK68toz7KAYSRbU0dDPb1cL4DCm6xo6wJzguloHr0ToE+GcyJ5D4tJPQ6tA1CHBwcqMPDw2AZ0S/LgpV5hbYlokz37Q4E5blhj+sIbPdVxy9YGgQAw/kOL3iBfvqH/s/3wzYzQxUiB0z7QydMl5MHEKenp+rJkyf6mjxUTvTKslVeoW2JKGsS3G6bp8iEzhewCs53GMGLa+wqUCOxGX0pUDESy5BoNggu3eUJ0uXkAW3kJnpl2Sqv0LZA9qHrCaFrBCbJg+cSaITzHUZw+5+/vHQyYZuH1JuyaoQ2J4/eP81Uhhl8LUjqNnIT/bJsk1dom/dRW2+/ltr2KcucSwEhvVO/AEv0WjjfgQSvA0KOydu3b4P7ffplCXYJzheCJwgEjx/OF4InCASPH853w4KDbQRZxg/nC8ETBFnGD+cLwRMEWcYP5wvBEwRZxg/n20twsNvILEMPZQS7j8wagicGBI8fmXVrwUE8cK6hkwPsPtLbVoKHuLm5URcXF+rk5ETNZjN1dHSkOwPbDQSPH853LcFvb2/V9fW1Oj8/15IfHx/rjsB20yy497fcC0J/w31Q5i/VF5M9tT8PlIFecL5rCX53d6cbkOQ0k1MHYPtZLbiUzQq//42oE8Jv15eh+kkbznctwe/v77Xki8VCL9epMdh+ugleoGfYA/XMqecDwbcJznctwR8eHjQkOkENwfbTWfDvf1D7jybq8Su7rYXnJTyJT22qJb2Z7U0/j/f3bB2/neivPGaoH64DusD5riU42E3WE9wrf3Vgr9H9dkbW6vrdbLuDBNeXbf1+QB9k1hA8MfoJbvd5s3A10/rtvO3AMv/ZfmjQgOBDILOG4InRWXApZ0DUcDsI/jmRWUPwxOgmOG3718uhX52F2jX04wgv6/rtQB9k1hA8MVYLLpfgAdm0nKKO/TCMZuT6Jbvfzpe/2nb74TqgCzJrCJ4YzYKDGJBZQ/DEgODxI7OG4IkBweNHZg3BEwOCx4/MGoInBgSPH5k1BE8MCB4/MmsInhgQPH5k1hA8MaTgoQf2gd1HZg3BEwOCx4/MGoInBgSPH5k1BE8MCB4/MmsInhitBHf+RveqP7w/9B+ZxB+tXBeZNQRPjJWCa7mlYOaP/9dLDsG3DZk1BE+MZsGNzNnc23+Vq+kkU3O5rwSCbxsyawieGI2C14pM4rN0RsAsmxYzPdV1hZxn1dJ+ks1te1snr5b+zopAH5f3567gooxYGnzAEjJrCJ4YKwWf5urK3+/M7CSrFLRuxpX7TZtSeH0ZwAOJKWNxr3IaONx2pdRa9tCxgERmDcETY6gZvJLM23Y+oGvRZmlQ8cq890MrBMzizcisIXhiNAre6hp8haxlvZaDAgQfHJk1BE+MZsELnOUzQcI1LcnFNrVlWbWcXK+hje2//RLdFR4sI7OG4ImxUnDCWWb7M2aTrGYFoNtNM5X1WNY3f8gm+wB1yKwheGK0EhzsNDJrCJ4YEDx+ZNYQPDEgePzIrCF4YkDw+JFZQ/DEgODxI7OG4IkBweNHZg3BEwOCx4/MGoInhhQcxA0ETxAIng4QPEEodJAOEByom5sbdXFxoU5OTtRsNlNHR0f6xAC7D+VJuVK+lPP9/X2ZOwRPhNvbW3V9fa3Oz8/1yXB8fKxHfbD7UJ6UK+W7WCwgeIrc3d3p5RudBDTS03IOxAHlSblSvpTzw8NDmTsETwQa1Sl8GuFpGUcnA4gDypNWaJQv5QzBE4RCJ+gEIOiDGBAHnClnLHOH4ABEy0f1f6A0tu/N1n2zAAAAAElFTkSuQmCC"},250065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return o}});var n=t(667294);let s={},i=n.createContext(s);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);