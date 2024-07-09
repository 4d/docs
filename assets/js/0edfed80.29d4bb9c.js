/*! For license information please see 0edfed80.29d4bb9c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95435],{3259:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(474848),n=s(28453);const i={id:"propertiesHeaders",title:"Headers"},o=void 0,l={id:"FormObjects/propertiesHeaders",title:"Headers",description:"Display Headers",source:"@site/versioned_docs/version-20-R4/FormObjects/properties_Headers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHeaders",permalink:"/docs/20-R4/FormObjects/propertiesHeaders",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Headers.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"propertiesHeaders",title:"Headers"},sidebar:"docs",previous:{title:"Gridlines",permalink:"/docs/20-R4/FormObjects/propertiesGridlines"},next:{title:"Help",permalink:"/docs/20-R4/FormObjects/propertiesHelp"}},d={},a=[{value:"Display Headers",id:"Display-Headers",level:2},{value:"JSON Grammar",id:"JSON-Grammar",level:4},{value:"Objects Supported",id:"Objects-Supported",level:4},{value:"Height",id:"Height",level:2},{value:"JSON Example",id:"JSON-Example",level:4},{value:"JSON Grammar",id:"JSON-Grammar-1",level:4},{value:"Objects Supported",id:"Objects-Supported-1",level:4},{value:"See also",id:"See-also",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"Display-Headers",children:"Display Headers"}),"\n",(0,r.jsxs)(t.p,{children:["This property is used to display or hide ",(0,r.jsx)(t.a,{href:"/docs/20-R4/FormObjects/listboxOverview#list-box-headers",children:"list box column headers"}),". There is one header per column; each header is configured separately."]}),"\n",(0,r.jsx)(t.h4,{id:"JSON-Grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"showHeaders"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"Objects-Supported",children:"Objects Supported"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R4/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"Height",children:"Height"}),"\n",(0,r.jsxs)(t.p,{children:["This property is used to set the row height for a list box header in ",(0,r.jsx)(t.strong,{children:"pixels"})," or ",(0,r.jsx)(t.strong,{children:"text lines"})," (when displayed). Both types of units can be used in the same list box:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Pixel"})," - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. If a font is too big, the text is truncated. Moreover, pictures are truncated or resized according to their format."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Line"})," - the height is calculated while taking into account the font size of the row concerned."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.'}),"\n",(0,r.jsx)(t.li,{children:"This calculation does not take into account the size of pictures nor any styles applied to the fonts."}),"\n",(0,r.jsx)(t.li,{children:"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This property can also be set dynamically using the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html",children:"LISTBOX SET HEADERS HEIGHT"})," command."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'}),"\n",(0,r.jsx)(t.p,{children:"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"(font Arial 18)*: 52 pixels -> 2 lines -> 40 pixels"}),"\n",(0,r.jsx)(t.li,{children:"(font Arial 12)*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"JSON-Example",children:"JSON Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n'})}),"\n",(0,r.jsx)(t.h4,{id:"JSON-Grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Possible Values"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"headerHeight"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"positive decimal+px | em"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"Objects-Supported-1",children:"Objects Supported"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R4/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(t.h4,{id:"See-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R4/FormObjects/propertiesFooters",children:"Footers"})," - ",(0,r.jsx)(t.a,{href:"/docs/20-R4/FormObjects/listboxOverview#list-box-headers",children:"List box headers"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,s)=>{var r=s(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var r,i={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:a,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var r=s(296540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);