"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56049],{630100:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(474848),r=s(28453);const o={id:"propertiesFooters",title:"Footers"},i=void 0,l={id:"FormObjects/propertiesFooters",title:"Footers",description:"Display Footers",source:"@site/versioned_docs/version-20/FormObjects/properties_Footers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesFooters",permalink:"/docs/20/FormObjects/propertiesFooters",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Footers.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"propertiesFooters",title:"Footers"},sidebar:"docs",previous:{title:"Entry",permalink:"/docs/20/FormObjects/propertiesEntry"},next:{title:"Gridlines",permalink:"/docs/20/FormObjects/propertiesGridlines"}},d={},c=[{value:"Display Footers",id:"display-footers",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Height",id:"height",level:2},{value:"JSON Example",id:"json-example",level:4},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"display-footers",children:"Display Footers"}),"\n",(0,n.jsxs)(t.p,{children:["This property is used to display or hide ",(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-footers",children:"list box column footers"}),". There is one footer per column; each footer is configured separately."]}),"\n",(0,n.jsx)(t.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Possible Values"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"showFooters"}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"true, false"})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"height",children:"Height"}),"\n",(0,n.jsxs)(t.p,{children:["This property is used to set the row height for a list box footer in ",(0,n.jsx)(t.strong,{children:"pixels"})," or ",(0,n.jsx)(t.strong,{children:"text lines"})," (when displayed). Both types of units can be used in the same list box:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Pixel"})," - the height value is applied directly to the row concerned, regardless of the font size contained in the columns. If a font is too big, the text is truncated. Moreover, pictures are truncated or resized according to their format."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Line"})," - the height is calculated while taking into account the font size of the row concerned."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.'}),"\n",(0,n.jsx)(t.li,{children:"This calculation does not take into account the size of pictures nor any styles applied to the fonts."}),"\n",(0,n.jsx)(t.li,{children:"In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This property can also be set dynamically using the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html",children:"LISTBOX SET FOOTERS HEIGHT"})," command."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".'}),"\n",(0,n.jsx)(t.p,{children:"Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(font Arial 18)"}),": 52 pixels -> 2 lines -> 40 pixels\n",(0,n.jsx)(t.em,{children:"(font Arial 12)"}),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"]}),"\n",(0,n.jsx)(t.h4,{id:"json-example",children:"JSON Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n'})}),"\n",(0,n.jsx)(t.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Possible Values"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"footerHeight"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"positive decimal+px | em"})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,n.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesHeaders",children:"Headers"})," - ",(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-footers",children:"List box footers"})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(296540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);