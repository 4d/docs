"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36890],{603905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>b});var r=o(667294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(o),b=a,u=d["".concat(s,".").concat(b)]||d[b]||l[b]||n;return o?r.createElement(u,i(i({ref:t},m),{},{components:o})):r.createElement(u,i({ref:t},m))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},941798:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});o(667294);var r=o(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={id:"comboBoxOverview",title:"Combo Box"},p=void 0,s={unversionedId:"FormObjects/comboBoxOverview",id:"version-18/FormObjects/comboBoxOverview",title:"Combo Box",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/pt/18/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Caixa de selec\xe7\xe3o",permalink:"/docs/pt/18/FormObjects/checkboxOverview"},next:{title:"Lista suspensa ou drop down",permalink:"/docs/pt/18/FormObjects/dropdownListOverview"}},c={},m=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Op\xe7\xf5es para combo boxes",id:"op\xe7\xf5es-para-combo-boxes",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}],l={toc:m};function d(e){var{components:t}=e,i=n(e,["components"]);return(0,r.kt)("wrapper",a({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,r.kt)("p",null,"Um combo box \xe9 parecido com uma lista ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/dropdownListOverview#overview"}),"drop-down"),", exceto que aceita texto digitado do teclado e tem op\xe7\xf5es adicionais."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(248869).Z,width:"173",height:"106"})),(0,r.kt)("p",null,"Voc\xea inicializa um combo box da mesma forma que uma lista suspensa. If the user enters text into the combo box, it fills the 0th element of the array. In other respects, you treat a combo box as an enterable area that uses its array or a choice list as the set of default values."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Data Change")," event to manage entries into the enterable area, as you would for any enterable area object. For more information, refer to the description of the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html"}),"Form event")," command in the ",(0,r.kt)("em",{parentName:"p"},"4D Language Reference")," manual."),(0,r.kt)("h2",a({},{id:"op\xe7\xf5es-para-combo-boxes"}),"Op\xe7\xf5es para combo boxes"),(0,r.kt)("p",null,"Combo box type objects accept two specific options concerning choice lists associated with them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/propertiesDataSource#automatic-insertion"}),"Automatic insertion"),": enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the combo box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/pt/18/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," (lista de valores exclu\xeddos): permite estabelecer uma lista cujos valores n\xe3o podem ser digitados na combo box. Se um valor exclu\xeddo for digitado, n\xe3o ser\xe1 aceito e uma mensagem de erro \xe9 exibido.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Associating a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/dropdownListOverview#overview"}),"Pop-up menu type")," object.")))))),(0,r.kt)("h2",a({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesTextAndPicture#button-style"}),"Button Style")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font"}),"Font")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#not-rendered"}),"Not rendered")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},248869:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);