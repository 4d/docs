"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98398"],{638237:function(e,r,o){o.r(r),o.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"FormEditor/forms","title":"Forms","description":"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window.","source":"@site/versioned_docs/version-20-R7/FormEditor/forms.md","sourceDirName":"FormEditor","slug":"/FormEditor/forms","permalink":"/docs/20-R7/FormEditor/forms","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"forms","title":"Forms"},"sidebar":"docs","previous":{"title":"Managing 4D users and groups","permalink":"/docs/20-R7/Users/editing"},"next":{"title":"Style sheets","permalink":"/docs/20-R7/FormEditor/stylesheets"}}'),t=o("785893"),i=o("250065");let s={id:"forms",title:"Forms"},a=void 0,d={},l=[{value:"Creating forms",id:"creating-forms",level:2},{value:"Project form and Table form",id:"project-form-and-table-form",level:2},{value:"Form pages",id:"form-pages",level:2},{value:"Inherited Forms",id:"inherited-forms",level:2},{value:"Supported Properties",id:"supported-properties",level:2}];function h(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Forms provide the interface through which information is entered, modified, and printed in a desktop application. Users interact with the data in a database using forms and print reports using forms. Forms can be used to create custom dialog boxes, palettes, or any featured custom window."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:o(258493).Z+"",width:"1114",height:"896"})}),"\n",(0,t.jsx)(r.p,{children:"Forms can also contain other forms through the following features:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/20-R7/FormObjects/subformOverview",children:"subform objects"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"inherited forms"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"creating-forms",children:"Creating forms"}),"\n",(0,t.jsx)(r.p,{children:"You can add or modify 4D forms using the following elements:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"4D Developer interface:"})," Create new forms from the ",(0,t.jsx)(r.strong,{children:"File"})," menu or the ",(0,t.jsx)(r.strong,{children:"Explorer"})," window."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Form Editor"}),": Modify your forms using the ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/overview",children:"Form Editor"})}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"JSON code:"})," Create and design your forms using JSON and save the form files at the ",(0,t.jsx)(r.a,{href:"Project/architecture#sources",children:"appropriate location"}),". Example:"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"project-form-and-table-form",children:"Project form and Table form"}),"\n",(0,t.jsx)(r.p,{children:"There are two categories of forms:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Project forms"})," - Independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components. Project forms can be used to create interfaces that easily comply with OS standards."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Table forms"})," - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Typically, a table has separate input and output forms."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Typically, you select the form category when you create the form, but you can change it afterwards."}),"\n",(0,t.jsx)(r.h2,{id:"form-pages",children:"Form pages"}),"\n",(0,t.jsx)(r.p,{children:"Each form has is made of at least two pages:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"a page 1: a main page, displayed by default"}),"\n",(0,t.jsx)(r.li,{children:"a page 0: a background page, whose contents is displayed on every other page."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"You can create multiple pages for an input form. If you have more fields or variables than will fit on one screen, you may want to create additional pages to display them. Multiple pages allow you to do the following:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Place the most important information on the first page and less important information on other pages."}),"\n",(0,t.jsx)(r.li,{children:"Organize each topic on its own page."}),"\n",(0,t.jsxs)(r.li,{children:["Reduce or eliminate scrolling during data entry by setting the ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/overview#data-entry-order",children:"entry order"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Provide space around the form elements for an attractive screen design."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Multiple pages are a convenience used for input forms only. They are not for printed output. When a multi-page form is printed, only the first page is printed."}),"\n",(0,t.jsx)(r.p,{children:"There are no restrictions on the number of pages a form can have. The same field can appear any number of times in a form and on as many pages as you want. However, the more pages you have in a form, the longer it will take to display it."}),"\n",(0,t.jsx)(r.p,{children:"A multi-page form has both a background page and several display pages. Objects that are placed on the background page may be visible on all display pages, but can be selected and edited only on the background page. In multi-page forms, you should put your button palette on the background page. You also need to include one or more objects on the background page that provide page navigation tools for the user."}),"\n",(0,t.jsx)(r.h2,{id:"inherited-forms",children:"Inherited Forms"}),"\n",(0,t.jsxs)(r.p,{children:['4D forms can use and be used as "inherited forms," meaning that all of the objects from ',(0,t.jsx)(r.em,{children:"Form A"})," can be used in ",(0,t.jsx)(r.em,{children:"Form B"}),". In this case, ",(0,t.jsx)(r.em,{children:"Form B"}),' "inherits" the objects from ',(0,t.jsx)(r.em,{children:"Form A"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"References to an inherited form are always active: if an element of an inherited form is modified (button styles, for example), all forms using this element will automatically be modified."}),"\n",(0,t.jsx)(r.p,{children:"All forms (table forms and project forms) can be designated as an inherited form. However, the elements they contain must be compatible with use in different database tables."}),"\n",(0,t.jsx)(r.p,{children:"When a form is executed, the objects are loaded and combined in the following order:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Page zero of the inherited form"}),"\n",(0,t.jsx)(r.li,{children:"Page 1 of the inherited form"}),"\n",(0,t.jsx)(r.li,{children:"Page zero of the open form"}),"\n",(0,t.jsx)(r.li,{children:"Current page of the open form."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["This order determines the default ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/overview#data-entry-order",children:"entry order"})," of objects in the form."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Only pages 0 and 1 of an inherited form can appear in other forms."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"The properties and method of a form are not considered when that form is used as an inherited form. On the other hand, the methods of objects that it contains are called."}),"\n",(0,t.jsxs)(r.p,{children:["To define an inherited form, the ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," and ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," (for table form) properties must be defined in the form that will inherit something from another form."]}),"\n",(0,t.jsxs)(r.p,{children:["A form can inherit from a project form, by setting the ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," property to ",(0,t.jsx)(r.code,{children:"\\<None>"}),' in the Property List (or " " in JSON).']}),"\n",(0,t.jsxs)(r.p,{children:["To stop inheriting a form, select ",(0,t.jsx)(r.code,{children:"\\<None>"}),' in the Property List (or " " in JSON) for the ',(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," property."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"It is possible to define an inherited form in a form that will eventually be used as an inherited form for a third form. The combining of objects takes place in a recursive manner. 4D detects recursive loops (for example, if form [table1]form1 is defined as the inherited form of [table1]form1, in other words, itself) and interrupts the form chain."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/menu#associated-menu-bar",children:"Associated Menu Bar"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#fixed-height",children:"Fixed Height"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#fixed-width",children:"Fixed Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/markers#form-break",children:"Form Break"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/markers#form-detail",children:"Form Detail"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/markers#form-footer",children:"Form Footer"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/markers#form-header",children:"Form Header"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#form-name",children:"Form Name"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#form-type",children:"Form Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#maximum-height-minimum-height",children:"Maximum Height"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#maximum-width-minimum-width",children:"Maximum Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/action#method",children:"Method"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#maximum-height-minimum-height",children:"Minimum Height"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/windowSize#maximum-width-minimum-width",children:"Minimum Width"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#pages",children:"Pages"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/print#settings",children:"Print Settings"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#published-as-subform",children:"Published as Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#save-geometry",children:"Save Geometry"})," - ",(0,t.jsx)(r.a,{href:"/docs/20-R7/FormEditor/propertiesForm#window-title",children:"Window Title"})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},258493:function(e,r,o){o.d(r,{Z:function(){return n}});let n=o.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},250065:function(e,r,o){o.d(r,{Z:function(){return a},a:function(){return s}});var n=o(667294);let t={},i=n.createContext(t);function s(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);