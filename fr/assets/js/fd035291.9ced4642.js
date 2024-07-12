/*! For license information please see fd035291.9ced4642.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55341],{973176:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=s(474848),t=s(28453);const i={id:"inputOverview",title:"Zone de saisie"},n=void 0,c={id:"FormObjects/inputOverview",title:"Zone de saisie",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/fr/18/FormObjects/inputOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Zone de saisie"},sidebar:"docs",previous:{title:"Zone de groupe",permalink:"/docs/fr/18/FormObjects/groupBox"},next:{title:"Liste hi\xe9rarchique",permalink:"/docs/fr/18/FormObjects/listOverview"}},a={},d=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Exemple JSON",id:"exemple-json",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"Alternatives",id:"alternatives",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,o.jsxs)(r.p,{children:["Les zones de saisie vous permettent d'ajouter des expressions saisissables ou non saisissables telles que des ",(0,o.jsx)(r.a,{href:"/docs/fr/18/Concepts/identifiers#fields",children:"champs"})," et des ",(0,o.jsx)(r.a,{href:"/docs/fr/18/Concepts/variables",children:"variables"})," de base de donn\xe9es \xe0 vos formulaires. Les zone de saisie peuvent g\xe9rer des donn\xe9es bas\xe9es sur des caract\xe8res (texte, dates, num\xe9riques, etc.) ou des images :"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(518969).A+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Les zones de saisie peuvent contenir ",(0,o.jsx)(r.a,{href:"/docs/fr/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"des expressions assignables ou non assignables"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["De plus, les zones de saisie peuvent \xeatre ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#enterable",children:"saisissables ou non saisissables"}),". Une zone de saisie saisissable accepte des donn\xe9es. Vous pouvez d\xe9finir des contr\xf4les de saisie de donn\xe9es pour l'objet. Une zone de saisie non saisissable peut uniquement afficher des valeurs mais ne peut pas \xeatre modifi\xe9e par l'utilisateur."]}),"\n",(0,o.jsxs)(r.p,{children:["Vous pouvez g\xe9rer les donn\xe9es avec des ",(0,o.jsx)(r.a,{href:"/docs/fr/18/Concepts/methods",children:"m\xe9thodes"})," objet ou formulaire."]}),"\n",(0,o.jsx)(r.h3,{id:"exemple-json",children:"Exemple JSON"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:' "myText": {\n  "type": "input", //define the type of object\n  "spellcheck": true, //enable spelling verification\n  "left": 60,   //left position on the form  \n  "top": 160,   //top position on the form\n  "width": 100,  //width of the object\n  "height": 20  //height of the object\n  }\n'})}),"\n",(0,o.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#alpha-format",children:"Format alpha "})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#auto-spellcheck",children:"Correction automatique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#bold",children:"Gras"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#boolean-format",children:"Format bool\xe9en"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Style de la bordure"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDataSource#choice-list",children:"Enum\xe9ration"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#context-menu",children:"Menu contextuel"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#date-format",children:"Format date"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesRangeOfValues#default-value",children:"Valeur par d\xe9faut"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAction#draggable",children:"Glissable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAction#droppable",children:"D\xe9posable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#enterable",children:"Saisissable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#entry-filter",children:"Filtre de saisie"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesRangeOfValues#excluded-list",children:"Exclusion"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#expression-type",children:"Type d'expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder#fill-color",children:"Couleur de remplissage"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#font",children:"Police"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#font-color",children:"Couleur de police"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#font-size",children:"Taille"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Cacher rectangle de focus"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#horizontal-alignment",children:"Alignement horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barre de d\xe9filement horizontal "})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#italic",children:"Italique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Largeur du trait"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#multiline",children:"Multilignes"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#multi-style",children:"Multistyle"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#number-format",children:"Format num\xe9rique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#picture-format",children:"Format image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#placeholder",children:"Texte exemple"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesPrint#print-frame",children:"Impression taille variable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesRangeOfValues#required-list",children:"Obligation"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDataSource#save-as",children:"Enregistrer comme"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesEntry#selection-always-visible",children:"S\xe9lection toujours visible"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#store-with-default-style-tags",children:"Stocker les balises par d\xe9faut"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#text-when-false-text-when-true",children:"Texte si Vrai/Texte si Faux"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#time-format",children:"Format heure"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#underline",children:"Soulign\xe9"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barre de d\xe9filement vert."})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#wordwrap",children:"Retour \xe0 la ligne"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,o.jsx)(r.p,{children:"Vous pouvez \xe9galement repr\xe9senter des expressions de champ et de variable dans vos formulaires \xe0 l'aide d'objets alternatifs, plus particuli\xe8rement :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Vous pouvez afficher et saisir des donn\xe9es \xe0 partir des champs de la base de donn\xe9es directement dans des colonnes ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/listboxOverview",children:"de type List box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter un champ de liste ou une variable directement dans un formulaire \xe0 l'aide d'objets ",(0,o.jsx)(r.a,{href:"popupMenuDropdownList_overview",children:"Pop-up menus/Listes d\xe9roulantes"})," et ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/comboBoxOverview",children:"Combo box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter une expression bool\xe9enne sous forme de ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/checkboxOverview",children:"case \xe0 cocher"})," ou de ",(0,o.jsx)(r.a,{href:"/docs/fr/18/FormObjects/radiobuttonOverview",children:"bouton radio"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var o=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var o,i={},d=null,l=null;for(o in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,o)&&!a.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:d,ref:l,props:i,_owner:c.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,s)=>{e.exports=s(221020)},518969:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var o=s(296540);const t={},i=o.createContext(t);function n(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);