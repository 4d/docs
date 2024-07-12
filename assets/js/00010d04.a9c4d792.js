/*! For license information please see 00010d04.a9c4d792.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12614],{543884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var i=r(474848),s=r(28453);const n={id:"splitters",title:"Splitter"},o=void 0,l={id:"FormObjects/splitters",title:"Splitter",description:"A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object\u2019s resizing properties, which means that you can completely customize your application's interface. A splitter may or may not be a \u201cpusher.\u201d",source:"@site/versioned_docs/version-20/FormObjects/splitters.md",sourceDirName:"FormObjects",slug:"/FormObjects/splitters",permalink:"/docs/20/FormObjects/splitters",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsplitters.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"splitters",title:"Splitter"},sidebar:"docs",previous:{title:"Spinner",permalink:"/docs/20/FormObjects/spinner"},next:{title:"Static picture",permalink:"/docs/20/FormObjects/staticPicture"}},c={},a=[{value:"JSON Example:",id:"json-example",level:4},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Interaction with the properties of neighboring objects",id:"interaction-with-the-properties-of-neighboring-objects",level:2},{value:"Managing splitters programmatically",id:"managing-splitters-programmatically",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object\u2019s resizing properties, which means that you can completely customize your application's interface. A splitter may or may not be a \u201cpusher.\u201d"}),"\n",(0,i.jsx)(t.p,{children:"Splitter are used for example in output forms so that columns can be resized:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:r(413160).A+"",width:"260",height:"121"})}),"\n",(0,i.jsx)(t.p,{children:"Some of the splitter\u2019s general characteristics:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can place as many splitters as you want in any type of form and use a mixture of horizontal and vertical splitters in the same form."}),"\n",(0,i.jsx)(t.li,{children:"A splitter can cross (overlap) an object. This object will be resized when the splitter is moved."}),"\n",(0,i.jsxs)(t.li,{children:["Splitter stops are calculated so that the objects moved remain entirely visible in the form or do not pass under/next to another splitter. When the ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesResizingOptions#pusher",children:"Pusher"})," property is associated with a splitter, its movement to the right or downward does not encounter any stops."]}),"\n",(0,i.jsx)(t.li,{children:"If you resize a form using a splitter, the new dimensions of the form are saved only while the form is being displayed. Once a form is closed, the initial dimensions are restored."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Once it is inserted, the splitter appears as a line. You can modify its ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesBackgroundAndBorder#border-line-style-dotted-line-type",children:"border style"})," to obtain a thinner line or ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesBackgroundAndBorder##font-color-line-color",children:"change its color"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"json-example",children:"JSON Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'"mySplitter": {\n\t"type": "splitter",\n\t"left": 60,  \n\t"top": 160,   \n\t"width": 100,  \n\t"height": 20,  \n\t"splitterMode": "move"  //pusher\n\t}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesBackgroundAndBorder##border-line-style-dotted-line-type",children:"Border Line Style"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesBackgroundAndBorder##font-color-line-color",children:"Line Color"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesResizingOptions#pusher",children:"Pusher"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," -  ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(t.h2,{id:"interaction-with-the-properties-of-neighboring-objects",children:"Interaction with the properties of neighboring objects"}),"\n",(0,i.jsx)(t.p,{children:"In a form, splitters interact with the objects that are around them according to these objects\u2019 resizing options:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Resizing options for the object(s)"}),(0,i.jsx)(t.th,{children:"Object(s) above an horizontal splitter or to the left of a vertical splitter (1)"}),(0,i.jsxs)(t.th,{children:["Object(s) below an horizontal ",(0,i.jsx)(t.em,{children:"non-Pusher"})," splitter or to the right of a vertical ",(0,i.jsx)(t.em,{children:"non-Pusher"})," splitter"]}),(0,i.jsxs)(t.th,{children:["Object(s) below an horizontal ",(0,i.jsx)(t.em,{children:"Pusher"})," splitter or to the right of a vertical ",(0,i.jsx)(t.em,{children:"Pusher"})," splitter"]})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"Remain as is"}),(0,i.jsx)(t.td,{children:"Are moved with the splitter (position relative to the splitter is not modified) until the next stop. The stop when moving to the bottom or right is either the window\u2019s border, or another splitter."}),(0,i.jsx)(t.td,{children:"Are moved with the splitter (position relative to the splitter is not modified) indefinitely. No stop is applied (see the next paragraph)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resize"}),(0,i.jsx)(t.td,{children:"Keep original position(s), but are resized according to the splitter\u2019s new position"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Move"}),(0,i.jsx)(t.td,{children:"Are moved with the splitter"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position."})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"An object completely contained in the rectangle that defines the splitter is moved at the same time as the splitter."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"managing-splitters-programmatically",children:"Managing splitters programmatically"}),"\n",(0,i.jsxs)(t.p,{children:["You can associate an object method with a splitter and it will be called with the ",(0,i.jsx)(t.code,{children:"On Clicked"})," event throughout the entire movement."]}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," of the ",(0,i.jsx)(t.em,{children:"Longint"})," type is associated with each splitter. This variable can be used in your object and/or form methods. Its value indicates the splitter\u2019s current position, in pixels, in relation to its initial position."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the value is negative: the splitter was moved toward the top or toward the left,"}),"\n",(0,i.jsx)(t.li,{children:"If the value is positive: the splitter was moved toward the bottom or toward the right,"}),"\n",(0,i.jsx)(t.li,{children:"If the value is 0: the splitter was moved to its original position."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named ",(0,i.jsx)(t.code,{children:"split1"}),", and if you execute the following statement: ",(0,i.jsx)(t.code,{children:"split1:=-10"}),", the splitter will be moved 10 pixels to the left \u2014 as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,t,r)=>{var i=r(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var i,n={},a=null,h=null;for(i in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:a,ref:h,props:n,_owner:l.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},413160:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var i=r(296540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);