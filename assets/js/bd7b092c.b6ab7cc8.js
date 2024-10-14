"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41638],{218136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(474848),l=n(28453);const i={id:"stylesheets",title:"Style sheets"},r=void 0,c={id:"FormEditor/stylesheets",title:"Style sheets",description:"A style sheet groups together a combination of attributes for form objects \u2014  from text attributes to nearly any available object attribute.",source:"@site/versioned_docs/version-20-R6/FormEditor/createStylesheet.md",sourceDirName:"FormEditor",slug:"/FormEditor/stylesheets",permalink:"/docs/FormEditor/stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2FcreateStylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"stylesheets",title:"Style sheets"},sidebar:"docs",previous:{title:"Forms",permalink:"/docs/FormEditor/forms"},next:{title:"Pictures",permalink:"/docs/FormEditor/pictures"}},d={},o=[{value:"Creating or Editing Style Sheets",id:"creating-or-editing-style-sheets",level:2},{value:"Style Sheet Files",id:"style-sheet-files",level:2},{value:"Style Sheet Architecture",id:"style-sheet-architecture",level:2},{value:"Style Sheet Selectors",id:"style-sheet-selectors",level:2},{value:"Object Type",id:"object-type",level:3},{value:"Object Name",id:"object-name",level:3},{value:"Class",id:"class",level:3},{value:"All Objects",id:"all-objects",level:3},{value:"Specific Attribute",id:"specific-attribute",level:3},{value:"Supported syntaxes",id:"supported-syntaxes",level:4},{value:"Examples",id:"examples",level:4},{value:"Style Sheet Declarations",id:"style-sheet-declarations",level:2},{value:"Media Queries",id:"media-queries",level:3},{value:"Example",id:"example",level:5},{value:"Object Attributes",id:"object-attributes",level:3},{value:"Attribute Mapping",id:"attribute-mapping",level:4},{value:"Specific Attribute Values",id:"specific-attribute-values",level:4},{value:"Priority Order",id:"priority-order",level:2},{value:"JSON vs Style Sheet",id:"json-vs-style-sheet",level:3},{value:"Multiple Style Sheets",id:"multiple-style-sheets",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A style sheet groups together a combination of attributes for form objects \u2014  from text attributes to nearly any available object attribute."}),"\n",(0,s.jsx)(t.p,{children:"In addition to harmonizing an application's interface, style sheets provide three major advantages:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Saves time during development: Each object has specific group of settings within a single operation."}),"\n",(0,s.jsx)(t.li,{children:"Facilitates maintenance: Style sheets modify the appearance of any objects that uses them, so changing the font size in a style sheet will change the font size for all of the objects that use this same style sheet."}),"\n",(0,s.jsx)(t.li,{children:"Controls multi-platform development: You can have a style sheets that apply to both macOS and Windows platforms, only macOS, or only Windows. When a style sheet is applied, 4D automatically uses the appropriate style sheet."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-or-editing-style-sheets",children:"Creating or Editing Style Sheets"}),"\n",(0,s.jsx)(t.p,{children:'You can create style sheets using your preferred text editor and saving the file with a ".css" extension in the project\'s "/SOURCES" folder.'}),"\n",(0,s.jsxs)(t.p,{children:["The 4D Tool Box provides a ",(0,s.jsx)(t.strong,{children:"Style Sheets"})," page as a shortcut option to create and edit one of three platform-specific named style sheets."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.strong,{children:"Style Sheets"})," page by choosing the ",(0,s.jsx)(t.strong,{children:"Tool Box > Style Sheet"})," from the Design menu or click on the ",(0,s.jsx)(t.strong,{children:"Tool Box"})," icon in the Form Editor toolbar."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(468700).A+"",width:"787",height:"582"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the type of style sheet to create and click on the ",(0,s.jsx)(t.strong,{children:"Create"})," or ",(0,s.jsx)(t.strong,{children:"Edit"})," button: ",(0,s.jsx)(t.img,{src:n(270303).A+"",width:"116",height:"23"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The style sheet will open in your default text editor."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"style-sheet-files",children:"Style Sheet Files"}),"\n",(0,s.jsx)(t.p,{children:"4D accepts three, specific style sheet files:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Style Sheet"}),(0,s.jsx)(t.th,{children:"Platform"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleSheets.css"}),(0,s.jsx)(t.td,{children:"Default global style sheet for both macOS and Windows"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleSheets_mac.css"}),(0,s.jsx)(t.td,{children:"For defining macOS only specific attribute styles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleSheets_windows.css"}),(0,s.jsx)(t.td,{children:"For defining Windows only specific attribute styles"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:['These files are stored in the project\'s "/SOURCES" folder. They can also be accessed directly via the ',(0,s.jsx)(t.a,{href:"/docs/FormEditor/overview#css-preview",children:"CSS Preview"})," in the Form editor toobar."]}),"\n",(0,s.jsx)(t.h2,{id:"style-sheet-architecture",children:"Style Sheet Architecture"}),"\n",(0,s.jsx)(t.p,{children:"While adapted to meet the specific needs of 4D forms, style sheets for application projects generally follow CSS2 syntax and grammar."}),"\n",(0,s.jsx)(t.p,{children:"Every style rule in a style sheet contains two parts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["a ",(0,s.jsx)(t.em,{children:"Selector"}),' - A selector defines where to apply the style. 4D supports "object type", "object name", "class", "all objects", as well as "attribute value" selectors.']}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["a ",(0,s.jsx)(t.em,{children:"Declaration"})," - The declaration defines the actual style to apply. Multiple declaration lines can be grouped together to form a declaration block. Each line in a CSS declaration block must end with a semicolon, and the entire block must be surrounded by curly braces."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"style-sheet-selectors",children:"Style Sheet Selectors"}),"\n",(0,s.jsx)(t.h3,{id:"object-type",children:"Object Type"}),"\n",(0,s.jsx)(t.p,{children:"Corresponding to the CSS element selector, the object type defines the type of object to style."}),"\n",(0,s.jsx)(t.p,{children:"Specify the object type, then in curly braces, declare the style(s) to apply."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The object type corresponds to the JSON ",(0,s.jsx)(t.a,{href:"/docs/FormObjects/propertiesObject#type",children:"type"})," property of form objects."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In the following example, all objects of the ",(0,s.jsx)(t.em,{children:"button"})," type will display text in the Helvetica Neue font, with a size of 20 pixels:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'To apply the same style to multiple types of objects, specify the object types separated by a "," then in curly braces, declare the style(s) to apply:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"text, input {\n  text-align: left;\n  stroke: grey;\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"object-name",children:"Object Name"}),"\n",(0,s.jsxs)(t.p,{children:["Corresponding to the CSS ",(0,s.jsx)(t.strong,{children:"ID selector"}),", the object name defines a specific object to style since the object's name is unique within the form."]}),"\n",(0,s.jsx)(t.p,{children:'Designate the object with a "#" character before the object\'s name, then in curly braces, declare the style(s) to apply.'}),"\n",(0,s.jsx)(t.p,{children:'In the following example, the text of the object with the name "okButton" will be displayed in Helvetica Neue font, with a size of 20 pixels:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"class",children:"Class"}),"\n",(0,s.jsxs)(t.p,{children:["Corresponding to the CSS ",(0,s.jsx)(t.strong,{children:"class selector"}),", the class defines the style for all form objects with the ",(0,s.jsx)(t.code,{children:"class"})," attribute."]}),"\n",(0,s.jsx)(t.p,{children:'You can specify the classes to use with a "." character followed by the name of the class, and in curly braces, declare the style(s) to apply.'}),"\n",(0,s.jsxs)(t.p,{children:["In the following example, the text of all objects with the ",(0,s.jsx)(t.code,{children:"okButtons"})," class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'To designate that a style should be applied only to objects of a distinct type, specify the type followed by "." and the name of the class, then in curly braces, declare the style(s) to apply.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"text.center {\n  text-align: center;\n  stroke: red;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the 4D form description, you associate a class name to an object using the ",(0,s.jsx)(t.code,{children:"class"})," attribute. This attribute contains one or several class names, separated by a space character:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'class: "okButtons important"       \n'})}),"\n",(0,s.jsx)(t.h3,{id:"all-objects",children:"All Objects"}),"\n",(0,s.jsxs)(t.p,{children:["Corresponding to the CSS ",(0,s.jsx)(t.strong,{children:"universal selector"}),', the "*" character indicates that the following style will be applied to all objects on the form.']}),"\n",(0,s.jsx)(t.p,{children:'Designate that a style should apply to all form objects with the "*" character, then in curly braces, declare the style(s) to apply.'}),"\n",(0,s.jsx)(t.p,{children:"In the following example, all objects will have a gray fill:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"* {\n  fill: gray;\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"specific-attribute",children:"Specific Attribute"}),"\n",(0,s.jsxs)(t.p,{children:["Corresponding to the CSS ",(0,s.jsx)(t.strong,{children:"attribute selectors"}),", styles can be applied to all form objects with a specific attribute."]}),"\n",(0,s.jsx)(t.p,{children:"Specify the attribute within brackets, then in curly braces, declare the style(s) to apply."}),"\n",(0,s.jsx)(t.h4,{id:"supported-syntaxes",children:"Supported syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Syntax"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[attribute]"}),(0,s.jsxs)(t.td,{children:["matches objects with the ",(0,s.jsx)(t.code,{children:"attribute"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:'[attribute="value"]'}),(0,s.jsxs)(t.td,{children:["matches objects with the ",(0,s.jsx)(t.code,{children:"attribute"}),' value containing exactly the specified "value"']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:'[attribute~="value"]'}),(0,s.jsxs)(t.td,{children:["matches objects with the ",(0,s.jsx)(t.code,{children:"attribute"}),' value containing the "value" among a space-separated list of words']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:'[attribute|="value"]'}),(0,s.jsxs)(t.td,{children:["matches objects with an ",(0,s.jsx)(t.code,{children:"attribute"}),' whose value starts with "value"']})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["All objects with the ",(0,s.jsx)(t.code,{children:"borderStyle"})," attribute will have purple lines:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[borderStyle]\n{\n     stroke: purple;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'All objects of the text type with a text attribute whose value is "Hello" will have blue letters:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"text[text=Hello]\n{\n     stroke: blue;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:'All objects with a text attribute whose value contains "Hello" will have blue lines:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[text~=Hello]\n{\n     stroke: blue;\n}\n\n"})}),"\n",(0,s.jsx)(t.p,{children:'All objects of the text type with a text attribute whose value starts with "Hello" will have yellow letters:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"text[text|=Hello]\n{\n     stroke: yellow;\n\n\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"style-sheet-declarations",children:"Style Sheet Declarations"}),"\n",(0,s.jsx)(t.h3,{id:"media-queries",children:"Media Queries"}),"\n",(0,s.jsx)(t.p,{children:"Media queries are used to apply color schemes to an application."}),"\n",(0,s.jsxs)(t.p,{children:["A media query is composed of a media feature and a value (e.g., ",(0,s.jsx)(t.code,{children:"\\<media feature>:\\<value>"})," )."]}),"\n",(0,s.jsx)(t.p,{children:"Available media features:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"prefers-color-scheme"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Available media feature expressions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"light"}),(0,s.jsx)(t.br,{}),"For using a light scheme"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"dark"}),(0,s.jsx)(t.br,{}),"For using a dark scheme"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Color schemes are only supported on macOS."}),"\n"]}),"\n",(0,s.jsx)(t.h5,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"This CSS defines a color combination for text and text background in the light scheme (default) and another combination when the dark scheme is selected:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"@media (prefers-color-scheme: light) {\n .textScheme {\n   fill: LightGrey;\n   stroke: Black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .textScheme {\n    fill: DarkSlateGray;\n    stroke: LightGrey;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"object-attributes",children:"Object Attributes"}),"\n",(0,s.jsx)(t.p,{children:"The majority of form object attributes can be defined within a style sheet, except the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"method"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"type"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"class"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"event"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"choiceList"}),", ",(0,s.jsx)(t.code,{children:"excludedList"}),", ",(0,s.jsx)(t.code,{children:"labels"}),", ",(0,s.jsx)(t.code,{children:"list"}),", ",(0,s.jsx)(t.code,{children:"requiredList"})," (list type)"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Form object attributes can be declared with their ",(0,s.jsx)(t.a,{href:"/docs/FormObjects/propertiesReference",children:"JSON name"})," as CSS attributes (not including object types, methods, events, and lists)."]}),"\n",(0,s.jsx)(t.h4,{id:"attribute-mapping",children:"Attribute Mapping"}),"\n",(0,s.jsx)(t.p,{children:"The attributes listed below are able to accept either the 4D name or the CSS name."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"4D"}),(0,s.jsx)(t.th,{children:"CSS"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"borderStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"border-style"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fill"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"background-color"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fontFamily"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"font-family"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fontSize"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"font-size"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fontStyle"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"font-style"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fontWeight"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"font-weight"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stroke"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"color"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"textAlign"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text-align"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"textDecoration"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text-decoration"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"verticalAlign"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"vertical-align"})})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["4D-specific values (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:"sunken"}),") are not supported when using CSS attribute names."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"specific-attribute-values",children:"Specific Attribute Values"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.code,{children:"icon"}),", ",(0,s.jsx)(t.code,{children:"picture"}),", and ",(0,s.jsx)(t.code,{children:"customBackgroundPicture"})," attributes that support a path to an image, the syntax is:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* absolute path */\nicon: url("edit.png"); /* relative path to the form file */\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.code,{children:"fill"}),", ",(0,s.jsx)(t.code,{children:"stroke"})," , ",(0,s.jsx)(t.code,{children:"alternateFill"})," , ",(0,s.jsx)(t.code,{children:"horizontalLineStroke"})," and ",(0,s.jsx)(t.code,{children:"verticalLineStroke"}),", three syntaxes are supported:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["CSS color name: ",(0,s.jsx)(t.code,{children:"fill: red;"})]}),"\n",(0,s.jsxs)(t.li,{children:["Hexa value: ",(0,s.jsx)(t.code,{children:"fill: #FF0000;"})]}),"\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.code,{children:"rgb()"})," function: ",(0,s.jsx)(t.code,{children:"fill:rgb(255,0,0)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If a string uses forbidden characters in CSS, you can surround the string with simple or double quotes. For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["a xliff reference: ",(0,s.jsx)(t.code,{children:'tooltip: ":xliff:CommonMenuFile";'})]}),"\n",(0,s.jsxs)(t.li,{children:["a datasource with a field expression: ",(0,s.jsx)(t.code,{children:'dataSource: "[Table_1:1]ID:1";'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"priority-order",children:"Priority Order"}),"\n",(0,s.jsx)(t.p,{children:"4D projects prioritizes conflicting style definitions first by the form definition, then by the style sheets."}),"\n",(0,s.jsx)(t.h3,{id:"json-vs-style-sheet",children:"JSON vs Style Sheet"}),"\n",(0,s.jsx)(t.p,{children:"If an attribute is defined in the JSON form description and a style sheet, 4D will use the value in the JSON file."}),"\n",(0,s.jsxs)(t.p,{children:["To override this behavior, the style value must be followed with an ",(0,s.jsx)(t.code,{children:"!important"})," declaration."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"JSON form description"}),(0,s.jsx)(t.th,{children:"Style Sheet"}),(0,s.jsx)(t.th,{children:"4D displays"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"text": "Button",'})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text: Edit;"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"Button"'})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"JSON form description"}),(0,s.jsx)(t.th,{children:"Style Sheet"}),(0,s.jsx)(t.th,{children:"4D displays"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"text": "Button",'})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text: Edit !important;"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"Edit"'})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"multiple-style-sheets",children:"Multiple Style Sheets"}),"\n",(0,s.jsx)(t.p,{children:"At runtime, 4D automatically prioritizes style sheets in the following order:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The 4D form will first load the default CSS file ",(0,s.jsx)(t.code,{children:"/SOURCES/styleSheets.css"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["It will then load the CSS file for the current platform ",(0,s.jsx)(t.code,{children:"/SOURCES/styleSheets_mac.css"})," or ",(0,s.jsx)(t.code,{children:"/SOURCES/styleSheets_windows.css"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"If it exists, it will then load a specific CSS file defined in the JSON form:"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a file for both platforms:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'"css": "<path>" \n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"or a list of files for both platforms:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'"css": [\n     "<path1>",\n     "<path2>" \n      ],\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"or a list of files per platform:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Filepaths can be relative or absolute."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Relative paths are resolved relative to the JSON form description file."}),"\n",(0,s.jsxs)(t.li,{children:["For security reasons, only filesystem paths are accepted for absolute paths. (",(0,s.jsx)(t.em,{children:"e.g."}),', "/RESOURCES", "/DATA")']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=3Hk4FUQENyQ",children:(0,s.jsx)(t.strong,{children:"CSS for 4D Forms"})})," video presentation."]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},270303:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},468700:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(296540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);