"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78895"],{302924:function(e,t,o){o.r(t),o.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"FormObjects/tabControl","title":"Tab Controls","description":"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab.","source":"@site/versioned_docs/version-18/FormObjects/tabControl.md","sourceDirName":"FormObjects","slug":"/FormObjects/tabControl","permalink":"/docs/18/FormObjects/tabControl","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"tabControl","title":"Tab Controls"},"sidebar":"docs","previous":{"title":"Subform","permalink":"/docs/18/FormObjects/subformOverview"},"next":{"title":"Text","permalink":"/docs/18/FormObjects/text"}}'),r=o("785893"),n=o("250065");let a={id:"tabControl",title:"Tab Controls"},i=void 0,c={},l=[{value:"JSON Example",id:"json-example",level:3},{value:"Adding labels to a tab control",id:"adding-labels-to-a-tab-control",level:2},{value:"Managing tabs programmatically",id:"managing-tabs-programmatically",level:2},{value:"FORM GOTO PAGE command",id:"form-goto-page-command",level:3},{value:"Goto Page action",id:"goto-page-action",level:3},{value:"Supported Properties",id:"supported-properties",level:2}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab."}),"\n",(0,r.jsx)(t.p,{children:"The following multi-page form uses a tab control object:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(723953).Z+"",width:"600",height:"534"})}),"\n",(0,r.jsx)(t.p,{children:"To navigate from screen to screen, the user simply clicks the desired tab."}),"\n",(0,r.jsxs)(t.p,{children:["The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command or the ",(0,r.jsx)(t.code,{children:"gotoPage"})," standard action would be used when a user clicks a tab."]}),"\n",(0,r.jsx)(t.p,{children:"Another use of the tab control is to control the data that is displayed in a subform. For example, a Rolodex could be implemented using a tab control. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."}),"\n",(0,r.jsx)(t.p,{children:"Each tab can display labels or labels and a small icon. If you include icons, they appear to the left of each label. Here is an example of a tab control that uses icons:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(320869).Z+"",width:"599",height:"510"})}),"\n",(0,r.jsx)(t.p,{children:"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."}),"\n",(0,r.jsx)(t.p,{children:"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. The scroll arrows allow the user to scroll the icons to the left or right."}),"\n",(0,r.jsx)(t.p,{children:"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."}),"\n",(0,r.jsx)(t.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n'})}),"\n",(0,r.jsx)(t.h2,{id:"adding-labels-to-a-tab-control",children:"Adding labels to a tab control"}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to supply the labels for a tab control:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You can assign a ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"choice list"}),' to the tab control, either through a collection (static list) or a JSON pointer ("$ref") to a json list. Icons associated with list items in the Lists editor will be displayed in the tob control.']}),"\n",(0,r.jsxs)(t.li,{children:["You can create a Text array that contains the names of each page of the form. This code must be executed before the form is presented to the user. For example, you could place the code in the object method of the tab control and execute it when the ",(0,r.jsx)(t.code,{children:"On Load"})," event occurs."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["You can also store the names of the pages in a hierarchical list and use the ",(0,r.jsx)(t.code,{children:"Load list"})," command to load the values into the array."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"managing-tabs-programmatically",children:"Managing tabs programmatically"}),"\n",(0,r.jsx)(t.h3,{id:"form-goto-page-command",children:"FORM GOTO PAGE command"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command in the tab control\u2019s method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The command is executed when the ",(0,r.jsx)(t.code,{children:"On Clicked"})," event occurs. You should then clear the array when the ",(0,r.jsx)(t.code,{children:"On Unload"})," event occurs."]}),"\n",(0,r.jsx)(t.p,{children:"Here is an example object method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,r.jsx)(t.h3,{id:"goto-page-action",children:"Goto Page action"}),"\n",(0,r.jsxs)(t.p,{children:["When you assign the ",(0,r.jsx)(t.code,{children:"gotoPage"})," ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesAction#standard-action",children:"standard action"})," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."}),"\n",(0,r.jsx)(t.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"Choice List"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#font",children:"Font"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#font-size",children:"Font Size"}),"  - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesAction#standard-action",children:"Standard action"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesAppearance#tab-control-direction",children:"Tab Control Direction"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,r.jsx)(t.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},723953:function(e,t,o){o.d(t,{Z:function(){return s}});let s=o.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},320869:function(e,t,o){o.d(t,{Z:function(){return s}});let s=o.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return a}});var s=o(667294);let r={},n=s.createContext(r);function a(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);