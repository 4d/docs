"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9716],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(b,n(n({ref:t},u),{},{components:r})):o.createElement(b,n({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var p=2;p<a;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},314044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});r(667294);var o=r(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const n={id:"comboBoxOverview",title:"Combo Box"},s=void 0,l={unversionedId:"FormObjects/comboBoxOverview",id:"version-20-R3/FormObjects/comboBoxOverview",title:"Combo Box",description:"Une combo box est semblable \xe0 une liste d\xe9roulante, hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu'elle dispose d'options suppl\xe9mentaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/fr/20-R3/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Case \xe0 cocher",permalink:"/docs/fr/20-R3/FormObjects/checkboxOverview"},next:{title:"Liste d\xe9roulante",permalink:"/docs/fr/20-R3/FormObjects/dropdownListOverview"}},p={},u=[{value:"Gestion des combo boxes",id:"gestion-des-combo-boxes",level:2},{value:"Utilisation d&#39;un objet",id:"utilisation-dun-objet",level:3},{value:"Utiliser un tableau",id:"utiliser-un-tableau",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Options",id:"options",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],c={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Une combo box est semblable \xe0 une ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/dropdownListOverview#overview"}),"liste d\xe9roulante"),", hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu'elle dispose d'options suppl\xe9mentaires."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(125647).Z,width:"173",height:"106"})),(0,o.kt)("p",null,"Fondamentalement, vous devez consid\xe9rer l\u2019objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par d\xe9faut."),(0,o.kt)("h2",i({},{id:"gestion-des-combo-boxes"}),"Gestion des combo boxes"),(0,o.kt)("p",null,"Utilisez l\u2019\xe9v\xe9nement formulaire ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/Events/onDataChange"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Data Change"))," pour g\xe9rer les valeurs saisies, comme pour toute zone de saisie."),(0,o.kt)("p",null,"L'initialisation d'une combo box se fait exactement de la m\xeame mani\xe8re que celle d'une ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/dropdownListOverview#overview"}),"liste d\xe9roulante")," : en utilisant un objet, un tableau ou une liste de choix."),(0,o.kt)("h3",i({},{id:"utilisation-dun-objet"}),"Utilisation d'un objet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cette fonctionnalit\xe9 n'est disponible que dans les projets 4D.")),(0,o.kt)("p",null,"Un ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/object"}),"objet ")," encapsulant une ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/Concepts/collection"}),"collection ")," peut \xeatre utilis\xe9 comme source de donn\xe9es d'une combo box. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",i({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"Type"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"values")),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"Collection"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"Obligatoire - Collection de valeurs scalaires. Toutes les valeurs doivent \xeatre du m\xeame type. Types pris en charge :",(0,o.kt)("li",null,"cha\xeenes"),(0,o.kt)("li",null,"nombres"),(0,o.kt)("li",null,"dates"),(0,o.kt)("li",null,"heures"),"Si elle est vide ou non d\xe9finie, la combo box est vide")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"identique \xe0 Collection"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"Texte saisi par l'utilisateur")))),(0,o.kt)("p",null,"Si l'objet contient d'autres propri\xe9t\xe9s, elles sont ignor\xe9es."),(0,o.kt)("p",null,"Lorsque l'utilisateur saisit du texte dans la combo box, la propri\xe9t\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"currentValue")," de l'objet re\xe7oit le texte saisi."),(0,o.kt)("h3",i({},{id:"utiliser-un-tableau"}),"Utiliser un tableau"),(0,o.kt)("p",null,"Veuillez vous r\xe9f\xe9rer \xe0 ",(0,o.kt)("strong",{parentName:"p"},"Utiliser un tableau")," dans la ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/dropdownListOverview#using-an-array"}),"page liste d\xe9roulante")," pour obtenir des informations sur l'initialisation du tableau."),(0,o.kt)("p",null,"Lorsque l'utilisateur saisit du texte dans la combo box, l'\xe9l\xe9ment 0 du tableau re\xe7oit le texte saisi."),(0,o.kt)("h3",i({},{id:"utiliser-une-\xe9num\xe9ration"}),"Utiliser une \xe9num\xe9ration"),(0,o.kt)("p",null,"Si vous souhaitez utiliser une combo box pour g\xe9rer les valeurs d'une zone de saisie (champ ou variable \xe9num\xe9r\xe9(e)), 4D vous permet de r\xe9f\xe9rencer directement le champ ou la variable en tant que source de donn\xe9es de l'objet formulaire. Cette possibilit\xe9 facilite la gestion des champs/variables \xe9num\xe9r\xe9(e) s."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable.")),(0,o.kt)("p",null,"Pour associer une combo box \xe0 un champ ou \xe0 une variable, il suffit de saisir le nom du champ ou de la variable directement dans le champ ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#variable-or-expression"}),"Variable ou Expression")," de l'objet formulaire dans la liste des propri\xe9t\xe9s."),(0,o.kt)("p",null,"Lorsque le formulaire est ex\xe9cut\xe9, 4D g\xe8re automatiquement la combo box lors de la saisie ou de l'affichage : lorsque l'utilisateur choisit une valeur, celle-ci est enregistr\xe9e dans le champ ; cette valeur de champ est affich\xe9e dans la combo box lors de l'affichage du formulaire :"),(0,o.kt)("p",null,"Pour plus d'informations, veuillez consulter ",(0,o.kt)("strong",{parentName:"p"},"Utiliser une \xe9num\xe9ration")," dans la page ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/dropdownListOverview#using-a-choice-list"}),"liste d\xe9roulante"),"."),(0,o.kt)("h2",i({},{id:"options"}),"Options"),(0,o.kt)("p",null,"Les objets de type combo box acceptent deux options sp\xe9cifiques :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",i({parentName:"li"},{href:"/docs/fr/20-R3/FormObjects/propertiesDataSource#automatic-insertion"}),"Insertion automatique")," : permet d'ajouter automatiquement une valeur \xe0 la source de donn\xe9es lorsque l'utilisateur saisit une valeur qui ne se trouve pas dans la liste associ\xe9e \xe0 la combo box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",i({parentName:"li"},{href:"/docs/fr/20-R3/FormObjects/propertiesRangeOfValues#excluded-list"}),"Exclusion ")," (liste de valeurs exclues) : permet d'\xe9tablir une liste dont les valeurs ne peuvent pas \xeatre saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas accept\xe9e et un message d'erreur s'affiche.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"La possibilit\xe9 d\u2019associer ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesRangeOfValues#required-list"}),"une liste de valeurs obligatoires")," n\u2019est pas disponible pour les combo box. Dans une interface, si un objet doit proposer une liste finie de valeurs obligatoires, il faut utiliser un objet de type ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/dropdownListOverview#overview"}),"liste d\xe9roulante"),".")))),(0,o.kt)("h2",i({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesDisplay#alpha-format"}),"Format Alpha")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#bold"}),"Gras")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesDataSource#choice-list"}),"Liste de choix")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#css-class"}),"Classe")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesDisplay#date-format"}),"Format de date")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#expression-type"}),"Type d'expression")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#font"}),"Police")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#font-color"}),"Couleur de police")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#font-size"}),"Taille de police")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesHelp#help-tip"}),"Conseil d'aide")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dimensionnement horizontal")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#italic"}),"Italique")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#object-name"}),"Nom d'objet")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesDisplay#time-format"}),"Format de l'heure")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesText#underline"}),"Soulign\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesObject#variable-or-expression"}),"Variable ou expression")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensionnement vertical")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/20-R3/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")))}m.isMDXComponent=!0},125647:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);