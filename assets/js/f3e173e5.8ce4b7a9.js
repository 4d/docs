/*! For license information please see f3e173e5.8ce4b7a9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93408],{974905:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=o(474848),s=o(28453);const r={id:"pictures",title:"Pictures"},n=void 0,a={id:"FormEditor/pictures",title:"Pictures",description:"Native Formats Supported",source:"@site/versioned_docs/version-18/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/18/FormEditor/pictures",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"pictures",title:"Pictures"},sidebar:"docs",previous:{title:"Style sheets",permalink:"/docs/18/FormEditor/stylesheets"},next:{title:"About 4D Form Objects",permalink:"/docs/18/FormObjects/formObjectsOverview"}},c={},d=[{value:"Native Formats Supported",id:"Native-Formats-Supported",level:2},{value:"Unavailable picture format",id:"Unavailable-picture-format",level:3},{value:"Mouse Coordinates in a Picture",id:"Mouse-Coordinates-in-a-Picture",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"Native-Formats-Supported",children:"Native Formats Supported"}),"\n",(0,i.jsxs)(t.p,{children:["4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/staticPicture",children:"static pictures"})," pasted in Design mode, pictures pasted into ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/inputOverview",children:"inputs objects"})," at runtime, etc."]}),"\n",(0,i.jsx)(t.p,{children:"The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the ",(0,i.jsx)(t.code,{children:"PICTURE CODEC LIST"})," command (see also the ",(0,i.jsx)(t.a,{href:"/docs/18/Concepts/picture",children:"picture data type"})," description)."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"Unavailable-picture-format",children:"Unavailable picture format"}),"\n",(0,i.jsx)(t.p,{children:"A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(860119).A+"",width:"136",height:"67"})}),"\n",(0,i.jsx)(t.p,{children:"The icon is automatically used wherever the picture is meant to be displayed:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(372549).A+"",width:"399",height:"223"})}),"\n",(0,i.jsx)(t.p,{children:"This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures."}),"\n",(0,i.jsx)(t.h2,{id:"Mouse-Coordinates-in-a-Picture",children:"Mouse Coordinates in a Picture"}),"\n",(0,i.jsxs)(t.p,{children:["4D lets you retrieve the local coordinates of the mouse in an ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/inputOverview",children:"input object"})," associated with a ",(0,i.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"picture expression"}),", in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software."]}),"\n",(0,i.jsxs)(t.p,{children:["The coordinates are returned in the ",(0,i.jsx)(t.em,{children:"MouseX"})," and ",(0,i.jsx)(t.em,{children:"MouseY"})," ",(0,i.jsx)(t.a,{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html",children:"System Variables"}),". The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in ",(0,i.jsx)(t.em,{children:"MouseX"})," and ",(0,i.jsx)(t.em,{children:"MouseY"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can get the value of these variables as part of the ",(0,i.jsx)(t.code,{children:"On Clicked"}),", ",(0,i.jsx)(t.code,{children:"On Double Clicked"}),", ",(0,i.jsx)(t.code,{children:"On Mouse up"}),", ",(0,i.jsx)(t.code,{children:"On Mouse Enter"}),", or ",(0,i.jsx)(t.code,{children:"On Mouse Move"})," form events."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var i=o(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var i,r={},d=null,l=null;for(i in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,o)=>{e.exports=o(221020)},860119:(e,t,o)=>{o.d(t,{A:()=>i});const i="data:image/png;base64,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"},372549:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/picNoFormat2-297da65e134cd8d87329a06b22e84434.png"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>a});var i=o(296540);const s={},r=i.createContext(s);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);