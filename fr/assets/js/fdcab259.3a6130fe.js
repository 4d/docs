"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88864"],{246081:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>n,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"FormObjects/inputOverview","title":"Zone de saisie","description":"Les zones de saisie vous permettent d\'ajouter des expressions saisissables ou non saisissables telles que des champs et des variables de base de donn\xe9es \xe0 vos formulaires. Inputs can handle character-based data (text, dates, numbers...) or pictures:","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/fr/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"inputOverview","title":"Zone de saisie"},"sidebar":"docs","previous":{"title":"Zone de groupe","permalink":"/docs/fr/FormObjects/groupBox"},"next":{"title":"Liste hi\xe9rarchique","permalink":"/docs/fr/FormObjects/listOverview"}}'),o=s("785893"),i=s("250065");let n={id:"inputOverview",title:"Zone de saisie"},c=void 0,a={},d=[{value:"Exemple JSON :",id:"exemple-json-",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"Alternatives",id:"alternatives",level:2}];function l(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Les zones de saisie vous permettent d'ajouter des expressions saisissables ou non saisissables telles que des ",(0,o.jsx)(r.a,{href:"/docs/fr/Concepts/identifiers#fields",children:"champs"})," et des ",(0,o.jsx)(r.a,{href:"/docs/fr/Concepts/variables",children:"variables"})," de base de donn\xe9es \xe0 vos formulaires. Inputs can handle character-based data (text, dates, numbers...) or pictures:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(762390).Z+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Les zones de saisie peuvent contenir ",(0,o.jsx)(r.a,{href:"/docs/fr/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"des expressions assignables ou non assignables"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["De plus, les zones de saisie peuvent \xeatre ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#enterable",children:"saisissables ou non saisissables"}),". Une zone de saisie saisissable accepte des donn\xe9es. Vous pouvez d\xe9finir des contr\xf4les de saisie de donn\xe9es pour l'objet. Une zone de saisie non saisissable peut uniquement afficher des valeurs mais ne peut pas \xeatre modifi\xe9e par l'utilisateur."]}),"\n",(0,o.jsxs)(r.p,{children:["Vous pouvez g\xe9rer les donn\xe9es avec des ",(0,o.jsx)(r.a,{href:"/docs/fr/Concepts/methods",children:"m\xe9thodes"})," objet ou formulaire."]}),"\n",(0,o.jsx)(r.h3,{id:"exemple-json-",children:"Exemple JSON :"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'	"myText": {\n		"type": "input",	//define the type of object\n		"spellcheck": true,	//enable spelling verification\n		"left": 60,			//left position on the form  \n		"top": 160,			//top position on the form \n		"width": 100,		//width of the object\n		"height": 20		//height of the object\n		}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Modifications"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R7"}),(0,o.jsx)(r.td,{children:"Prise en charge de la propri\xe9t\xe9 Rayon d'angle"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#allow-fontcolor-picker",children:"Allow font/color picker"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#auto-spellcheck",children:"Auto Spellcheck"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Background Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Boolean format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesRangeOfValues#default-value",children:"Default value"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#expression-type",children:"Expression type"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font",children:"Font"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#multi-style",children:"Multi-style"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#picture-format",children:"Picture Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#placeholder",children:"Placeholder"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesRangeOfValues#required-list",children:"Required List"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#selection-always-visible",children:"Selection always visible"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#store-with-default-style-tags",children:"Store with default style tags"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Text when False/Text when True"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,o.jsx)(r.p,{children:"Vous pouvez \xe9galement repr\xe9senter des expressions de champ et de variable dans vos formulaires \xe0 l'aide d'objets alternatifs, plus particuli\xe8rement :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Vous pouvez afficher et saisir des donn\xe9es \xe0 partir des champs de la base de donn\xe9es directement dans des colonnes ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"de type List box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter un champ ou une variable liste directement dans un formulaire \xe0 l'aide des objets ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Pop-up Menus/Listes d\xe9roulantes"})," et ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Boxes"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Vous pouvez repr\xe9senter une expression bool\xe9enne sous forme de ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"case \xe0 cocher"})," ou de ",(0,o.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"bouton radio"}),"."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},762390:function(e,r,s){s.d(r,{Z:function(){return t}});let t=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return n}});var t=s(667294);let o={},i=t.createContext(o);function n(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);