/*! For license information please see 7ed26481.d9e6c247.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97278],{180357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(474848),r=n(28453);const i={id:"propertiesAnimation",title:"Animation"},o=void 0,c={id:"FormObjects/propertiesAnimation",title:"Animation",description:"Loop back to first frame",source:"@site/versioned_docs/version-20-R6/FormObjects/properties_Animation.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesAnimation",permalink:"/docs/FormObjects/propertiesAnimation",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Animation.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"propertiesAnimation",title:"Animation"},sidebar:"docs",previous:{title:"Action",permalink:"/docs/FormObjects/propertiesAction"},next:{title:"Appearance",permalink:"/docs/FormObjects/propertiesAppearance"}},l={},d=[{value:"Loop back to first frame",id:"loop-back-to-first-frame",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Switch back when released",id:"switch-back-when-released",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"Switch continuously on clicks",id:"switch-continuously-on-clicks",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Switch every x ticks",id:"switch-every-x-ticks",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4},{value:"Switch when roll over",id:"switch-when-roll-over",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4},{value:"Objects Supported",id:"objects-supported-4",level:4},{value:"Use Last frame as disabled",id:"use-last-frame-as-disabled",level:2},{value:"JSON Grammar",id:"json-grammar-5",level:4},{value:"Objects Supported",id:"objects-supported-5",level:4}];function a(e){const t={a:"a",h2:"h2",h4:"h4",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"loop-back-to-first-frame",children:"Loop back to first frame"}),"\n",(0,s.jsx)(t.p,{children:"Pictures are displayed in a continuous loop. When the user reaches the last picture and clicks again, the first picture appears, and so forth."}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"loopBackToFirstFrame"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"switch-back-when-released",children:"Switch back when released"}),"\n",(0,s.jsx)(t.p,{children:"Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button."}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"switchBackWhenReleased"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"switch-continuously-on-clicks",children:"Switch continuously on clicks"}),"\n",(0,s.jsx)(t.p,{children:"Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture."}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"switchContinuously"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported-2",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"switch-every-x-ticks",children:"Switch every x ticks"}),"\n",(0,s.jsx)(t.p,{children:"Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored."}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar-3",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frameDelay"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"minimum: 0"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported-3",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"switch-when-roll-over",children:"Switch when roll over"}),"\n",(0,s.jsx)(t.p,{children:"Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button\u2019s area."}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar-4",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"switchWhenRollover"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported-4",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"use-last-frame-as-disabled",children:"Use Last frame as disabled"}),"\n",(0,s.jsx)(t.p,{children:'Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.'}),"\n",(0,s.jsx)(t.h4,{id:"json-grammar-5",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{children:"Data Type"}),(0,s.jsx)(t.th,{children:"Possible Values"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"useLastFrameAsDisabled"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"objects-supported-5",children:"Objects Supported"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,i={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:a,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(296540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);