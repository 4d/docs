"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58256"],{335780:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>n,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"FormObjects/inputOverview","title":"Zone de saisie","description":"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Les zone de saisie peuvent g\xe9rer des donn\xe9es bas\xe9es sur des caract\xe8res (texte, dates, num\xe9riques, etc.) ou des images :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/fr/20/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"inputOverview","title":"Zone de saisie"},"sidebar":"docs","previous":{"title":"Zone de groupe","permalink":"/docs/fr/20/FormObjects/groupBox"},"next":{"title":"Liste hi\xe9rarchique","permalink":"/docs/fr/20/FormObjects/listOverview"}}'),t=s("785893"),i=s("250065");let n={id:"inputOverview",title:"Zone de saisie"},c=void 0,a={},d=[{value:"Exemple JSON :",id:"exemple-json-",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"Alternatives",id:"alternatives",level:2}];function l(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Inputs allow you to add enterable or non-enterable expressions such as database fields and ",(0,t.jsx)(r.a,{href:"/docs/fr/20/Concepts/variables",children:"variables"})," to your forms. Les zone de saisie peuvent g\xe9rer des donn\xe9es bas\xe9es sur des caract\xe8res (texte, dates, num\xe9riques, etc.) ou des images :"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(504453).Z+"",width:"279",height:"175"})}),"\n",(0,t.jsxs)(r.p,{children:["Les zones de saisie peuvent contenir ",(0,t.jsx)(r.a,{href:"/docs/fr/20/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"des expressions assignables ou non assignables"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["De plus, les zones de saisie peuvent \xeatre ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#enterable",children:"saisissables ou non saisissables"}),". Une zone de saisie saisissable accepte des donn\xe9es. Vous pouvez d\xe9finir des contr\xf4les de saisie de donn\xe9es pour l'objet. Une zone de saisie non saisissable peut uniquement afficher des valeurs mais ne peut pas \xeatre modifi\xe9e par l'utilisateur."]}),"\n",(0,t.jsxs)(r.p,{children:["Vous pouvez g\xe9rer les donn\xe9es avec des ",(0,t.jsx)(r.a,{href:"/docs/fr/20/Concepts/methods",children:"m\xe9thodes"})," objet ou formulaire."]}),"\n",(0,t.jsx)(r.h3,{id:"exemple-json-",children:"Exemple JSON :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'    "myText": {\n        "type": "input",    //d\xe9finir le type d\'objet\n        "spellcheck": true, //autoriser la correction orthographique\n        "left": 60,         //position gauche dans le formulaire  \n        "top": 160,         //position haute dans le formulaire \n        "width": 100,       //largeur de l\'objet\n        "height": 20        //hauteur de l\'objet\n        }\n'})}),"\n",(0,t.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Release"}),(0,t.jsx)(r.th,{children:"Modifications"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"19 R7"}),(0,t.jsx)(r.td,{children:"Prise en charge de la propri\xe9t\xe9 Rayon d'angle"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#allow-fontcolor-picker",children:"Allow font/color picker"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#auto-spellcheck",children:"Auto Spellcheck"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Background Color"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Boolean format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesRangeOfValues#default-value",children:"Default value"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#expression-type",children:"Expression type"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#font",children:"Font"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#multi-style",children:"Multi-style"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#picture-format",children:"Picture Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#placeholder",children:"Placeholder"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesRangeOfValues#required-list",children:"Required List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#selection-always-visible",children:"Selection always visible"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#store-with-default-style-tags",children:"Store with default style tags"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Text when False/Text when True"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez \xe9galement repr\xe9senter des expressions de champ et de variable dans vos formulaires \xe0 l'aide d'objets alternatifs, plus particuli\xe8rement :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Vous pouvez afficher et saisir des donn\xe9es \xe0 partir des champs de la base de donn\xe9es directement dans des colonnes ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"de type List box"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter un champ ou une variable liste directement dans un formulaire \xe0 l'aide des objets ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/dropdownListOverview",children:"Pop-up Menus/Listes d\xe9roulantes"})," et ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Boxes"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter une expression bool\xe9enne sous forme de ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"case \xe0 cocher"})," ou de ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"bouton radio"}),"."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},504453:function(e,r,s){s.d(r,{Z:function(){return o}});let o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return n}});var o=s(667294);let t={},i=o.createContext(t);function n(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);