/*! For license information please see ed11d3da.7b04124e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61252],{403277:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var s=t(474848),r=t(28453);const n={id:"pictures",title:"Pictures"},c=void 0,o={id:"FormEditor/pictures",title:"Pictures",description:"4D includes specific support for pictures used in your forms.",source:"@site/versioned_docs/version-20-R4/FormEditor/pictures.md",sourceDirName:"FormEditor",slug:"/FormEditor/pictures",permalink:"/docs/20-R4/FormEditor/pictures",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fpictures.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"pictures",title:"Pictures"},sidebar:"docs",previous:{title:"Style sheets",permalink:"/docs/20-R4/FormEditor/stylesheets"},next:{title:"Form Editor",permalink:"/docs/20-R4/FormEditor/"}},d={},a=[{value:"Native Formats Supported",id:"Native-Formats-Supported",level:2},{value:"Unavailable picture format",id:"Unavailable-picture-format",level:3},{value:"High Resolution Pictures",id:"High-Resolution-Pictures",level:2},{value:"Scale factor",id:"Scale-factor",level:3},{value:"DPI",id:"DPI",level:3},{value:"Dark mode pictures (macOS only)",id:"Dark-mode-pictures-macOS-only",level:2},{value:"Mouse Coordinates in a Picture",id:"Mouse-Coordinates-in-a-Picture",level:2}];function l(e){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"4D includes specific support for pictures used in your forms."}),"\n",(0,s.jsx)(i.h2,{id:"Native-Formats-Supported",children:"Native Formats Supported"}),"\n",(0,s.jsxs)(i.p,{children:["4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: ",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/staticPicture",children:"static pictures"})," pasted in Design mode, pictures pasted into ",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/inputOverview",children:"inputs objects"})," at runtime, etc."]}),"\n",(0,s.jsx)(i.p,{children:"The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the ",(0,s.jsx)(i.code,{children:"PICTURE CODEC LIST"})," command (see also the ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Concepts/picture",children:"picture data type"})," description)."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"Unavailable-picture-format",children:"Unavailable picture format"}),"\n",(0,s.jsx)(i.p,{children:"A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(577257).A+"",width:"136",height:"67"})}),"\n",(0,s.jsx)(i.p,{children:"The icon is automatically used wherever the picture is meant to be displayed:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(786271).A+"",width:"392",height:"221"})}),"\n",(0,s.jsx)(i.p,{children:"This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures."}),"\n",(0,s.jsx)(i.h2,{id:"High-Resolution-Pictures",children:"High Resolution Pictures"}),"\n",(0,s.jsx)(i.p,{children:"4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi."}),"\n",(0,s.jsx)(i.h3,{id:"Scale-factor",children:"Scale factor"}),"\n",(0,s.jsxs)(i.p,{children:["High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the ",(0,s.jsx)(i.em,{children:"scale factor"})," (",(0,s.jsx)(i.em,{children:"i.e."}),", two times larger, three times larger, etc.)."]}),"\n",(0,s.jsxs)(i.p,{children:['When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture\'s name (where ',(0,s.jsx)(i.em,{children:"n"})," designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})," and ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Display Type"}),(0,s.jsx)(i.th,{children:"Scale Factor"}),(0,s.jsx)(i.th,{children:"Example"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Standard Resolution"}),(0,s.jsx)(i.td,{children:"1:1 pixel density."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.strong,{children:"1x"}),(0,s.jsx)(i.br,{}),(0,s.jsx)(i.img,{src:t(39536).A+"",width:"152",height:"155"})," ",(0,s.jsx)(i.em,{children:"circle.png"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"High Resolution"}),(0,s.jsx)(i.td,{children:"Pixel density increased by a factor of 2 or 3."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.table,{children:(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"2x"}),(0,s.jsx)(i.th,{children:"3x"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.img,{src:t(309387).A+"",width:"156",height:"152"}),(0,s.jsx)(i.em,{children:(0,s.jsx)(i.a,{href:"mailto:circle@2x.png",children:"circle@2x.png"})})]}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.img,{src:t(571906).A+"",width:"156",height:"152"}),(0,s.jsx)(i.br,{}),(0,s.jsx)(i.em,{children:(0,s.jsx)(i.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})]})]})]})})})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"High resolution pictures with the @nx convention can be used in the following objects:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/staticPicture",children:"Static pictures"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/buttonOverview",children:"Buttons"}),"/",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/radiobuttonOverview",children:"radio"}),"/",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/checkboxOverview",children:"check boxes"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/pictureButtonOverview",children:"Picture buttons"}),"/",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/picturePopupMenuOverview",children:"Picture pop-ups"})]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/tabControl",children:"Tab controls"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/listboxOverview#list-box-headers",children:"List box headers"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/20-R4/Menus/properties#item-icon",children:"Menu icons"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["4D automatically prioritizes pictures with the highest resolution. For example, when using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D automatically renders the highest possible resolution of the picture. Even if a command or property specifies ",(0,s.jsx)(i.em,{children:"circle.png"}),", ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.a,{href:"mailto:circle@3x.png",children:"circle@3x.png"})})," will be used (if it exists)."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"DPI",children:"DPI"}),"\n",(0,s.jsx)(i.p,{children:"While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(*)*, and picture format:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Operation"}),(0,s.jsx)(i.th,{children:"Behavior"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Drop or Paste"}),(0,s.jsxs)(i.td,{children:["If the picture has:",(0,s.jsxs)(i.ul,{children:[(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"72dpi or 96dpi"}),' - The picture is "',(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/propertiesPicture#center--truncated-non-centered",children:"Center"}),'" formatted and the object containing the picture has the same number of pixels.']}),(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Other dpi"}),' - The picture is "',(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),"\" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)"]})," ",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"No dpi"}),' - The picture is "',(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled to fit"}),'" formatted.']})]})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.a,{href:"https://doc.4d.com/4Dv19/4D/19/Setting-object-display-properties.300-5416671.en.html#148057",children:"Automatic Size"})," (Form Editor context menu)"]}),(0,s.jsxs)(i.td,{children:["If the picture's display format  is:",(0,s.jsxs)(i.ul,{children:[(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/propertiesPicture#scaled-to-fit",children:"Scaled"})})," - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) "]})," ",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Not scaled"})," - The object containing the picture has the same number of pixels as the picture."]})]})]})]})]})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.em,{children:"(*) Typically,  macOS = 72dpi, Windows = 96dpi"})}),"\n",(0,s.jsx)(i.h2,{id:"Dark-mode-pictures-macOS-only",children:"Dark mode pictures (macOS only)"}),"\n",(0,s.jsxs)(i.p,{children:["You can define specific pictures and icons to be used instead of standard pictures when ",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormEditor/propertiesForm#color-scheme",children:"forms use the dark scheme"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"A dark mode picture is defined in the following way:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['dark mode picture has the same name as the standard (light scheme) version with the suffix "',(0,s.jsx)(i.code,{children:"_dark"}),'"']}),"\n",(0,s.jsx)(i.li,{children:"dark mode picture is stored next to the standard version."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["At runtime, 4D will automatically load the light or dark image according to the ",(0,s.jsx)(i.a,{href:"https://doc.4d.com/4dv19/help/command/en/1761.html",children:"current form color scheme"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(203674).A+"",width:"758",height:"246"})}),"\n",(0,s.jsx)(i.h2,{id:"Mouse-Coordinates-in-a-Picture",children:"Mouse Coordinates in a Picture"}),"\n",(0,s.jsxs)(i.p,{children:["4D lets you retrieve the local coordinates of the mouse in an ",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/inputOverview",children:"input object"})," associated with a ",(0,s.jsx)(i.a,{href:"/docs/20-R4/FormObjects/propertiesObject#expression-type",children:"picture expression"}),", in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software."]}),"\n",(0,s.jsxs)(i.p,{children:["The coordinates are returned in the ",(0,s.jsx)(i.em,{children:"MouseX"})," and ",(0,s.jsx)(i.em,{children:"MouseY"})," ",(0,s.jsx)(i.a,{href:"https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html",children:"System Variables"}),". The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in ",(0,s.jsx)(i.em,{children:"MouseX"})," and ",(0,s.jsx)(i.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["You can get the value of these variables as part of the ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Events/onClicked",children:(0,s.jsx)(i.code,{children:"On Clicked"})}),", ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Events/onDoubleClicked",children:(0,s.jsx)(i.code,{children:"On Double Clicked"})}),", ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Events/onMouseUp",children:(0,s.jsx)(i.code,{children:"On Mouse up"})}),", ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Events/onMouseEnter",children:(0,s.jsx)(i.code,{children:"On Mouse Enter"})}),", or ",(0,s.jsx)(i.a,{href:"/docs/20-R4/Events/onMouseMove",children:(0,s.jsx)(i.code,{children:"On Mouse Move"})})," form events."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,i,t)=>{var s=t(296540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,i,t){var s,n={},a=null,l=null;for(s in void 0!==t&&(a=""+t),void 0!==i.key&&(a=""+i.key),void 0!==i.ref&&(l=i.ref),i)c.call(i,s)&&!d.hasOwnProperty(s)&&(n[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===n[s]&&(n[s]=i[s]);return{$$typeof:r,type:e,key:a,ref:l,props:n,_owner:o.current}}i.Fragment=n,i.jsx=a,i.jsxs=a},474848:(e,i,t)=>{e.exports=t(221020)},203674:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png"},577257:(e,i,t)=>{t.d(i,{A:()=>s});const s="data:image/png;base64,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"},786271:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png"},39536:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png"},309387:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png"},571906:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/pictureScale3-cf162d1062562b17012494226b938198.png"},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>o});var s=t(296540);const r={},n=s.createContext(r);function c(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);