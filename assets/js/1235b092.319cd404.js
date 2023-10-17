"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1405],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||i;return r?n.createElement(u,a(a({ref:t},c),{},{components:r})):n.createElement(u,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},590832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"splitters",title:"Splitter"},s=void 0,l={unversionedId:"FormObjects/splitters",id:"version-19/FormObjects/splitters",title:"Splitter",description:"A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object\u2019s resizing properties, which means that you can completely customize your application's interface. A splitter may or may not be a \u201cpusher.\u201d",source:"@site/versioned_docs/version-19/FormObjects/splitters.md",sourceDirName:"FormObjects",slug:"/FormObjects/splitters",permalink:"/docs/19/FormObjects/splitters",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsplitters.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"splitters",title:"Splitter"},sidebar:"docs",previous:{title:"Spinner",permalink:"/docs/19/FormObjects/spinner"},next:{title:"Static picture",permalink:"/docs/19/FormObjects/staticPicture"}},p={},c=[{value:"JSON Example",id:"json-example",level:4},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Interaction with the properties of neighboring objects",id:"interaction-with-the-properties-of-neighboring-objects",level:2},{value:"Managing splitters programmatically",id:"managing-splitters-programmatically",level:2}],h={toc:c};function m(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object\u2019s resizing properties, which means that you can completely customize your application's interface. A splitter may or may not be a \u201cpusher.\u201d"),(0,n.kt)("p",null,"Splitter are used for example in output forms so that columns can be resized:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(329719).Z,width:"260",height:"121"})),(0,n.kt)("p",null,"Some of the splitter\u2019s general characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can place as many splitters as you want in any type of form and use a mixture of horizontal and vertical splitters in the same form."),(0,n.kt)("li",{parentName:"ul"},"A splitter can cross (overlap) an object. This object will be resized when the splitter is moved."),(0,n.kt)("li",{parentName:"ul"},"Splitter stops are calculated so that the objects moved remain entirely visible in the form or do not pass under/next to another splitter. When the ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/19/FormObjects/propertiesResizingOptions#pusher"}),"Pusher")," property is associated with a splitter, its movement to the right or downward does not encounter any stops."),(0,n.kt)("li",{parentName:"ul"},"If you resize a form using a splitter, the new dimensions of the form are saved only while the form is being displayed. Once a form is closed, the initial dimensions are restored.")),(0,n.kt)("p",null,"Once it is inserted, the splitter appears as a line. You can modify its ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesBackgroundAndBorder#border-line-style-dotted-line-type"}),"border style")," to obtain a thinner line or ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesBackgroundAndBorder##font-color-line-color"}),"change its color"),"."),(0,n.kt)("h4",o({},{id:"json-example"}),"JSON Example"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'"mySplitter": {\n "type": "splitter",\n "left": 60,  \n "top": 160,   \n "width": 100,  \n "height": 20,  \n "splitterMode": "move"  //pusher\n }\n')),(0,n.kt)("h3",o({},{id:"supported-properties"}),"Supported Properties"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesBackgroundAndBorder##border-line-style-dotted-line-type"}),"Border Line Style")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesBackgroundAndBorder##font-color-line-color"}),"Line Color")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesResizingOptions#pusher"}),"Pusher")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," -  ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")),(0,n.kt)("h2",o({},{id:"interaction-with-the-properties-of-neighboring-objects"}),"Interaction with the properties of neighboring objects"),(0,n.kt)("p",null,"In a form, splitters interact with the objects that are around them according to these objects\u2019 resizing options:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Resizing options for the object(s)"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Object(s) above an horizontal splitter or to the left of a vertical splitter (1)"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Object(s) below an horizontal ",(0,n.kt)("em",{parentName:"th"},"non-Pusher")," splitter or to the right of a vertical ",(0,n.kt)("em",{parentName:"th"},"non-Pusher")," splitter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Object(s) below an horizontal ",(0,n.kt)("em",{parentName:"th"},"Pusher")," splitter or to the right of a vertical ",(0,n.kt)("em",{parentName:"th"},"Pusher")," splitter"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"None"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Remain as is"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Are moved with the splitter (position relative to the splitter is not modified) until the next stop. The stop when moving to the bottom or right is either the window\u2019s border, or another splitter."),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Are moved with the splitter (position relative to the splitter is not modified) indefinitely. No stop is applied (see the next paragraph)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Resize"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Keep original position(s), but are resized according to the splitter\u2019s new position"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Move"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Are moved with the splitter"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An object completely contained in the rectangle that defines the splitter is moved at the same time as the splitter.")),(0,n.kt)("h2",o({},{id:"managing-splitters-programmatically"}),"Managing splitters programmatically"),(0,n.kt)("p",null,"You can associate an object method with a splitter and it will be called with the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Clicked")," event throughout the entire movement."),(0,n.kt)("p",null,"A ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," of the ",(0,n.kt)("em",{parentName:"p"},"Longint")," type is associated with each splitter. This variable can be used in your object and/or form methods. Its value indicates the splitter\u2019s current position, in pixels, in relation to its initial position."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the value is negative: the splitter was moved toward the top or toward the left,"),(0,n.kt)("li",{parentName:"ul"},"If the value is positive: the splitter was moved toward the bottom or toward the right,"),(0,n.kt)("li",{parentName:"ul"},"If the value is 0: the splitter was moved to its original position.")),(0,n.kt)("p",null,"You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"split1"),", and if you execute the following statement: ",(0,n.kt)("inlineCode",{parentName:"p"},"split1:=-10"),", the splitter will be moved 10 pixels to the left \u2014 as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement."))}m.isMDXComponent=!0},329719:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);