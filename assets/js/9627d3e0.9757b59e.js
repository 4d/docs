"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41608"],{291539:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>h});var i=JSON.parse('{"id":"FormEditor/formSize","title":"Form Size","description":"4D lets you set the size of both the form and the window. These properties are interdependent and your application interface results from their interaction.","source":"@site/versioned_docs/version-20/FormEditor/properties_FormSize.md","sourceDirName":"FormEditor","slug":"/FormEditor/formSize","permalink":"/docs/20/FormEditor/formSize","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_FormSize.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"formSize","title":"Form Size"},"sidebar":"docs","previous":{"title":"Form Properties","permalink":"/docs/20/FormEditor/propertiesForm"},"next":{"title":"Markers","permalink":"/docs/20/FormEditor/markers"}}'),t=r("785893"),s=r("250065");let o={id:"formSize",title:"Form Size"},h=void 0,d={},l=[{value:"Size based on",id:"size-based-on",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Height",id:"height",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Hor. Margin",id:"hor-margin",level:2},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Vert. Margin",id:"vert-margin",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Width",id:"width",level:2},{value:"JSON Grammar",id:"json-grammar-4",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["4D lets you set the size of both the form and the ",(0,t.jsx)(n.a,{href:"/docs/20/FormEditor/windowSize",children:"window"}),". These properties are interdependent and your application interface results from their interaction."]}),"\n",(0,t.jsxs)(n.p,{children:["Size options depend on the value of the ",(0,t.jsx)(n.strong,{children:"Size based on"})," option."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"size-based-on",children:"Size based on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Automatic Size"}),": The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the ",(0,t.jsx)(n.a,{href:"#hor-margin",children:(0,t.jsx)(n.strong,{children:"Hor Margin"})})," and ",(0,t.jsx)(n.a,{href:"#vert-margin",children:(0,t.jsx)(n.strong,{children:"Vert Margin"})})," fields."]}),"\n",(0,t.jsxs)(n.p,{children:["You can choose this option when you want to use active objects placed in an offscreen area (",(0,t.jsx)(n.em,{children:"i.e."}),", outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Set Size"}),": The size of the form will be based on what you enter (in pixels) in the ",(0,t.jsx)(n.a,{href:"#width",children:(0,t.jsx)(n.strong,{children:"Width"})})," and ",(0,t.jsx)(n.a,{href:"#height",children:(0,t.jsx)(n.strong,{children:"Height"})})," fields."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<object name>"}),": The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For output forms, only the ",(0,t.jsx)(n.a,{href:"#hor-margin",children:(0,t.jsx)(n.strong,{children:"Hor margin"})})," or ",(0,t.jsx)(n.a,{href:"#width",children:(0,t.jsx)(n.strong,{children:"Width"})})," fields are available."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Possible Values"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formSizeAnchor"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Name of object to use to defined the size of the form"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"height",children:"Height"}),"\n",(0,t.jsxs)(n.p,{children:["Height of the form (in pixels) when the ",(0,t.jsx)(n.a,{href:"#size-based-on",children:"form size"})," is ",(0,t.jsx)(n.strong,{children:"Set size"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Possible Values"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"height"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"integer value"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"hor-margin",children:"Hor. Margin"}),"\n",(0,t.jsxs)(n.p,{children:["Value to add (in pixels) to the right margin of the form when the ",(0,t.jsx)(n.a,{href:"#size-based-on",children:"form size"})," is ",(0,t.jsx)(n.strong,{children:"Automatic size"})," or ",(0,t.jsx)(n.code,{children:"\\<object name>"})]}),"\n",(0,t.jsx)(n.p,{children:"This value also determines the right-hand margins of forms used in the Label editor."}),"\n",(0,t.jsx)(n.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Possible Values"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rightMargin"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"integer value"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"vert-margin",children:"Vert. Margin"}),"\n",(0,t.jsxs)(n.p,{children:["Value to add (in pixels) to the bottom margin of the form when the ",(0,t.jsx)(n.a,{href:"#size-based-on",children:"form size"})," is ",(0,t.jsx)(n.strong,{children:"Automatic size"})," or ",(0,t.jsx)(n.code,{children:"\\<object name>"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This value also determines the top margins of forms used in the Label editor."}),"\n",(0,t.jsx)(n.h4,{id:"json-grammar-3",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Possible Values"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bottomMargin"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"integer value"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"width",children:"Width"}),"\n",(0,t.jsxs)(n.p,{children:["Width of the form (in pixels) when the ",(0,t.jsx)(n.a,{href:"#size-based-on",children:"form size"})," is ",(0,t.jsx)(n.strong,{children:"Set size"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"json-grammar-4",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Data Type"}),(0,t.jsx)(n.th,{children:"Possible Values"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"width"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"integer value"})]})})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return h},a:function(){return o}});var i=r(667294);let t={},s=i.createContext(t);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);