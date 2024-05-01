"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24973],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(b,s(s({ref:t},l),{},{components:r})):a.createElement(b,s({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},578121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});r(667294);var a=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"inputOverview",title:"Input"},p=void 0,i={unversionedId:"FormObjects/inputOverview",id:"version-20-R5/FormObjects/inputOverview",title:"Input",description:"Inputs allow you to add enterable or non-enterable expressions such as database fields and variables to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:",source:"@site/versioned_docs/version-20-R5/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/FormObjects/inputOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"inputOverview",title:"Input"},sidebar:"docs",previous:{title:"Group Box",permalink:"/docs/FormObjects/groupBox"},next:{title:"Hierarchical List",permalink:"/docs/FormObjects/listOverview"}},c={},l=[{value:"JSON Example:",id:"json-example",level:3},{value:"Supported Properties",id:"supported-properties",level:2},{value:"Input alternatives",id:"input-alternatives",level:2}],m={toc:l};function d(e){var{components:t}=e,s=n(e,["components"]);return(0,a.kt)("wrapper",o({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inputs allow you to add enterable or non-enterable expressions such as database ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/identifiers#fields"}),"fields")," and ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/variables"}),"variables")," to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(883701).Z,width:"279",height:"175"})),(0,a.kt)("p",null,"Inputs can contain ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable or non-assignable expressions"),"."),(0,a.kt)("p",null,"In addition, inputs can be ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"enterable or non-enterable"),". An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user."),(0,a.kt)("p",null,"You can manage the data with object or form ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/Concepts/methods"}),"methods"),"."),(0,a.kt)("h3",o({},{id:"json-example"}),"JSON Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'    "myText": {\n        "type": "input",    //define the type of object\n        "spellcheck": true, //enable spelling verification\n        "left": 60,         //left position on the form  \n        "top": 160,         //top position on the form \n        "width": 100,       //width of the object\n        "height": 20        //height of the object\n        }\n')),(0,a.kt)("h2",o({},{id:"supported-properties"}),"Supported Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Release"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"19 R7"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Support of Corner radius property"))))),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#allow-font-color-picker"}),"Allow font/color picker")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#auto-spellcheck"}),"Auto Spellcheck")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Test when False/Text when True")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#context-menu"}),"Context Menu")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#corner-radius"}),"Corner radius")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesRangeOfValues#default-value"}),"Default value")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#draggable"}),"Draggable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesAction#droppable"}),"Droppable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#entry-filter"}),"Entry Filter")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#expression-type"}),"Expression type")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesBackgroundAndBorder#fill-color"}),"Fill Color")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font"}),"Font")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#horizontal-alignment"}),"Horizontal Alignment")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#multiline"}),"Multiline")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#multi-style"}),"Multi-style")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#number-format"}),"Number Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#orientation"}),"Orientation")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#picture-format"}),"Picture Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#placeholder"}),"Placeholder")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesPrint#print-frame"}),"Print Frame")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesRangeOfValues#required-list"}),"Required List")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesEntry#selection-always-visible"}),"Selection always visible")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#store-with-default-style-tags"}),"Store with default style tags")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Text when False/Text when True")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#type"}),"Type")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#wordwrap"}),"Wordwrap")," "),(0,a.kt)("hr",null),(0,a.kt)("h2",o({},{id:"input-alternatives"}),"Input alternatives"),(0,a.kt)("p",null,"You can also represent field and variable expressions in your forms using alternative objects, more particularly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can display and enter data from database fields directly in columns of ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/FormObjects/listboxOverview"}),"selection type List boxes"),"."),(0,a.kt)("li",{parentName:"ul"},"You can represent a list field or variable directly in a form using ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/FormObjects/dropdownListOverview"}),"Pop-up Menus/Drop-down Lists")," and ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/FormObjects/comboBoxOverview"}),"Combo Boxes")," objects."),(0,a.kt)("li",{parentName:"ul"},"You can represent a boolean expression as a ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/FormObjects/checkboxOverview"}),"check box")," or as a ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/FormObjects/radiobuttonOverview"}),"radio button")," object.")))}d.isMDXComponent=!0},883701:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);