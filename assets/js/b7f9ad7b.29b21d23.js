"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69603"],{190366:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>n,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"FormObjects/inputOverview","title":"Input","description":"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:","source":"@site/versioned_docs/version-20-R6/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/20-R6/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"inputOverview","title":"Input"},"sidebar":"docs","previous":{"title":"Group Box","permalink":"/docs/20-R6/FormObjects/groupBox"},"next":{"title":"Hierarchical List","permalink":"/docs/20-R6/FormObjects/listOverview"}}'),o=t("785893"),i=t("250065");let n={id:"inputOverview",title:"Input"},c=void 0,a={},l=[{value:"JSON Example:",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}];function d(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Inputs allow you to add enterable or non-enterable expressions such as database ",(0,o.jsx)(r.a,{href:"/docs/20-R6/Concepts/identifiers#fields",children:"fields"})," and ",(0,o.jsx)(r.a,{href:"/docs/20-R6/Concepts/variables",children:"variables"})," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:t(996757).Z+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Inputs can contain ",(0,o.jsx)(r.a,{href:"/docs/20-R6/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"assignable or non-assignable expressions"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["In addition, inputs can be ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#enterable",children:"enterable or non-enterable"}),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."]}),"\n",(0,o.jsxs)(r.p,{children:["You can manage the data with object or form ",(0,o.jsx)(r.a,{href:"/docs/20-R6/Concepts/methods",children:"methods"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"json-example",children:"JSON Example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'	"myText": {\n		"type": "input",	//define the type of object\n		"spellcheck": true,	//enable spelling verification\n		"left": 60,			//left position on the form  \n		"top": 160,			//top position on the form \n		"width": 100,		//width of the object\n		"height": 20		//height of the object\n		}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Changes"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R7"}),(0,o.jsx)(r.td,{children:"Support of Corner radius property"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#allow-fontcolor-picker",children:"Allow font/color picker"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#auto-spellcheck",children:"Auto Spellcheck"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Background Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Boolean format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesRangeOfValues#default-value",children:"Default value"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#expression-type",children:"Expression type"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#font",children:"Font"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#multi-style",children:"Multi-style"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#picture-format",children:"Picture Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#placeholder",children:"Placeholder"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesRangeOfValues#required-list",children:"Required List"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesEntry#selection-always-visible",children:"Selection always visible"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#store-with-default-style-tags",children:"Store with default style tags"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Text when False/Text when True"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"input-alternatives",children:"Input alternatives"}),"\n",(0,o.jsx)(r.p,{children:"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["You can display and enter data from database fields directly in columns of ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"selection type List boxes"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["You can represent a list field or variable directly in a form using ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/dropdownListOverview",children:"Pop-up Menus/Drop-down Lists"})," and ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/comboBoxOverview",children:"Combo Boxes"})," objects."]}),"\n",(0,o.jsxs)(r.li,{children:["You can represent a boolean expression as a ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/checkboxOverview",children:"check box"})," or as a ",(0,o.jsx)(r.a,{href:"/docs/20-R6/FormObjects/radiobuttonOverview",children:"radio button"})," object."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},996757:function(e,r,t){t.d(r,{Z:function(){return s}});let s=t.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return n}});var s=t(667294);let o={},i=s.createContext(o);function n(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);