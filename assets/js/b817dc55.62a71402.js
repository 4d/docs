"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22310"],{106728:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>n,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"FormObjects/staticPicture","title":"Static picture","description":"Static pictures are static objects that can be used for various purposes in 4D forms, including decoration, background, or user interface:","source":"@site/versioned_docs/version-19/FormObjects/staticPicture.md","sourceDirName":"FormObjects","slug":"/FormObjects/staticPicture","permalink":"/docs/19/FormObjects/staticPicture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FstaticPicture.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"staticPicture","title":"Static picture"},"sidebar":"docs","previous":{"title":"Splitter","permalink":"/docs/19/FormObjects/splitters"},"next":{"title":"Stepper","permalink":"/docs/19/FormObjects/stepper"}}'),o=r("785893"),s=r("250065");let n={id:"staticPicture",title:"Static picture"},c=void 0,a={},d=[{value:"Format and location",id:"format-and-location",level:2},{value:"Supported Properties",id:"supported-properties",level:2}];function p(e){let t={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Static pictures are ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/formObjectsOverview#active-and-static-objects",children:"static objects"})," that can be used for various purposes in 4D forms, including decoration, background, or user interface:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:r(689169).Z+"",width:"312",height:"332"})}),"\n",(0,o.jsx)(t.p,{children:"Static pictures are stored outside the forms and inserted by reference. In the form editor, static picture objects are created by copy/paste or drag and drop operations."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. Either way, your application will run faster than if the picture was pasted into each page."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"format-and-location",children:"Format and location"}),"\n",(0,o.jsx)(t.p,{children:"The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.)."}),"\n",(0,o.jsx)(t.p,{children:"Two main locations can be used for static picture path:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["in the ",(0,o.jsx)(t.strong,{children:"Resources"}),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/<picture path>".']}),"\n",(0,o.jsxs)(t.li,{children:["in an image folder (e.g. named ",(0,o.jsx)(t.strong,{children:"Images"}),') within the form folder. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\\picture path>" and is resolved from the root of the form folder.']}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#css-class",children:"CSS Class"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesPicture#display",children:"Display"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesPicture#pathname",children:"Pathname"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesDisplay#visibility",children:"Visibility"}),"  - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},689169:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return n}});var i=r(667294);let o={},s=i.createContext(o);function n(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);