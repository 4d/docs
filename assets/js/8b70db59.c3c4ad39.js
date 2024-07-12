/*! For license information please see 8b70db59.c3c4ad39.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22044],{387862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var l=n(474848),i=n(28453);const s={id:"writeprointerface",title:"4D Write Pro Interface"},r=void 0,d={id:"WritePro/writeprointerface",title:"4D Write Pro Interface",description:"4D WritePro Interface offers a set of palettes, which allow end users to easily customize a 4D Write Pro document.",source:"@site/versioned_docs/version-20-R6/WritePro/writeprointerface.md",sourceDirName:"WritePro",slug:"/WritePro/writeprointerface",permalink:"/docs/WritePro/writeprointerface",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fwriteprointerface.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"writeprointerface",title:"4D Write Pro Interface"},sidebar:"docs",previous:{title:"VP SUSPEND COMPUTING",permalink:"/docs/ViewPro/commands/vp-suspend-computing"},next:{title:"Developing Components",permalink:"/docs/Extensions/develop-components"}},a={},o=[{value:"Table Wizard",id:"table-wizard",level:2},{value:"WP Table Wizard interface",id:"wp-table-wizard-interface",level:3},{value:"In Columns:",id:"in-columns",level:5},{value:"In Rows:",id:"in-rows",level:5},{value:"In Display:",id:"in-display",level:5},{value:"WP Table Wizard template configuration",id:"wp-table-wizard-template-configuration",level:3},{value:"Template files",id:"template-files",level:4},{value:"Example",id:"example",level:5},{value:"Translation files",id:"translation-files",level:4},{value:"Example",id:"example-1",level:5},{value:"Theme files",id:"theme-files",level:4},{value:"Example",id:"example-2",level:5},{value:"See also",id:"see-also",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"4D WritePro Interface offers a set of palettes, which allow end users to easily customize a 4D Write Pro document."}),"\n",(0,l.jsx)(t.p,{children:"A 4D developer can easily implement these palettes in their application. Thus, end users can manage all 4D Write Pro properties, such as fonts, text alignment, bookmarks, table layout, and frames."}),"\n",(0,l.jsxs)(t.p,{children:["The main ",(0,l.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20/Entry-areas.300-6263967.en.html",children:"4D Write Pro Interface documentation"})," can be found in the ",(0,l.jsx)(t.em,{children:"4D Design Reference manual"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"You will find below the Table Wizard configuration documentation."}),"\n",(0,l.jsx)(t.h2,{id:"table-wizard",children:"Table Wizard"}),"\n",(0,l.jsx)(t.p,{children:"The Table Wizard is here to further simplify table creation based on database data using contexts, data sources, and formulas."}),"\n",(0,l.jsx)(t.p,{children:"The Table Wizard, accessible to end-users, loads templates provided and configured by 4D developers. This enables developers to customize the template according to the specific use cases and business requirements of the users."}),"\n",(0,l.jsx)(t.p,{children:"The Table Wizard comes with default templates and themes, which developers can configure to adapt its content to match the specific requirements of the application."}),"\n",(0,l.jsx)(t.p,{children:"To implement the Table Wizard in your application, the developers are able to create and configure template files."}),"\n",(0,l.jsx)(t.h3,{id:"wp-table-wizard-interface",children:"WP Table Wizard interface"}),"\n",(0,l.jsx)(t.p,{children:'The user opens the Table Wizard dialog from the "Insert table"  menu item in 4D Write Pro interface toolbar and sidebar.'}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(620477).A+"",width:"2544",height:"1640"})}),"\n",(0,l.jsx)(t.p,{children:"From this interface, the user can select a template or a table from the first drop-down list and a theme from the second."}),"\n",(0,l.jsx)(t.h5,{id:"in-columns",children:"In Columns:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(970435).A+"",width:"271",height:"254"})}),"\n",(0,l.jsx)(t.p,{children:"Depending on the user's selection of a template or a table, the user can view the list of fields stored in the template (Blob and object types are automatically excluded). They can then select columns to display in the table by checking the box in front of the field name and order them by moving and dragging the fields list."}),"\n",(0,l.jsx)(t.h5,{id:"in-rows",children:"In Rows:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(685704).A+"",width:"343",height:"358"})}),"\n",(0,l.jsxs)(t.p,{children:["In the Table Wizard, the user can also define the number of header rows and extra rows (0 to 5 each), set ",(0,l.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.en.html#6233076",children:"break rows"})," (summary rows) above or below the data row, and choose to show/hide ",(0,l.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.en.html#6236686",children:"carry-over rows"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"In addition, the user has the possibility to choose the table's behavior when its datasource is empty with the following options: Show data row, Hide date row, Hide table, Show placeholder row."}),"\n",(0,l.jsx)(t.h5,{id:"in-display",children:"In Display:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(508966).A+"",width:"325",height:"206"})}),"\n",(0,l.jsx)(t.p,{children:"The user adjusts the zoom level according to their preference by selecting the desired option from a drop-down list, uses radio buttons to display formulas or data for clear presentation, and chooses to display a horizontal ruler using a checkbox."}),"\n",(0,l.jsxs)(t.p,{children:["After finalizing the table creation and customization, the user can click on the ",(0,l.jsx)(t.strong,{children:"Insert"})," button to add the table to their WP document."]}),"\n",(0,l.jsx)(t.p,{children:"Once the table has been integrated into the document, the user can customize its style. The formatting tools of the toolbar and sidebar are still available."}),"\n",(0,l.jsx)(t.h3,{id:"wp-table-wizard-template-configuration",children:"WP Table Wizard template configuration"}),"\n",(0,l.jsx)(t.p,{children:"The templates configuration includes:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Defining tables and fields as well as preparing formulas adapted to the application from the ",(0,l.jsx)(t.a,{href:"#template-files",children:"template file"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["Translating table, field, and formula names from the ",(0,l.jsx)(t.a,{href:"#translation-files",children:"translation file"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["Designing graphic styles and customized  themes from the ",(0,l.jsx)(t.a,{href:"#theme-files",children:"theme file"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"These three types of files contribute to the configuration of the Table Wizard, and while each serves a distinct purpose, none of them are considered essential components."}),"\n",(0,l.jsx)(t.h4,{id:"template-files",children:"Template files"}),"\n",(0,l.jsx)(t.p,{children:"The template file allows you to define the following:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"the formula that returns an entity selection used as the table's data source,"}),"\n",(0,l.jsx)(t.li,{children:"the break formulas (if any break row can be inserted)"}),"\n",(0,l.jsx)(t.li,{children:"the dataclass attributes that can be used as table columns,"}),"\n",(0,l.jsx)(t.li,{children:"the formulas available as contextual menus inside break rows, carry-over row, placeholder row or extra rows."}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:['The template file must be stored in a "',(0,l.jsx)(t.a,{href:"/docs/Project/architecture#resources",children:(0,l.jsx)(t.code,{children:"Resources"})}),'/4DWP_Wizard/Templates" folder within your project.']}),"\n",(0,l.jsx)(t.p,{children:"The template file in JSON format contains the following attributes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"tableDataSource"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula of table data source"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"columns"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of table columns"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"columns.check"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True when the column is already checked in the template editor. False when the column is unchecked in the template editor."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"columns.header"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Label shown to the user"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"columns.source"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breaks"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of break objects. The order of the breaks is important. It corresponds to the order in the document when the breaks are above the data lines."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breaks.label"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Label shown to the user"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breaks.source"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breakFormulas"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of formula objects applicable to break rows"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breakFormulas.label"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Label shown to the user"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breakFormulas.source"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bcorFormulas"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of formula objects applicable to bottom carry over rows"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bcorFormulas.label"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Label shown to the user"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bcorFormulas.source"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"extraFormulas"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of formula objects applicable to extra rows"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"extraFormulas.label"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Label shown to the user"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"extraFormulas.source"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Formula"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"placeholderFormulas"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of formula objects that are inserted in the placeholder row"})]})]})]}),"\n",(0,l.jsx)(t.admonition,{title:"French language",type:"note",children:(0,l.jsxs)(t.p,{children:["If your application is likely to be run on a 4D with language set to French, make sure that you use ",(0,l.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20/Using-tokens-in-formulas.300-6237731.en.html",children:"tokens"})," in your formulas so that they are correctly interpreted no matter the user's language configuration."]})}),"\n",(0,l.jsx)(t.h5,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.p,{children:"Here's a brief example of what your JSON file might look like:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n    "tableDataSource": "ds.People.all().orderBy(\\"toCompany.name asc, continent asc, country asc, city asc\\")",\n    "columns": [{\n            "check": true,\n            "header": "Firstname",\n            "source": "This.item.firstname"\n        }, {\n            "check": true,\n            "header": "Lastname",\n            "source": "This.item.lastname"\n        }, {\n            "check": true,\n            "header": "Salary",\n            "source": "String(This.item.salary;\\"###,###.00\\")"\n        }\n    ],\n    "breaks": [{\n            "label": "Company",\n            "source": "This.item.toCompany.name"\n        }\n    ],\n    "breakFormulas": [{\n            "label": "Company",\n            "source": "This.item.toCompany.name"\n\t}, {\n            "label": "Sum of salaries",\n            "source": "String(This.breakItems.sum(\\"salary\\"); \\"###,###.00\\")"\n        }\n    ],\n    "bcorFormulas": [{\n            "label": "Sum of salaries",\n            "source": "String(This.tableData.sum(\\"salary\\"); \\"###,###.00\\")"\n        }\n    ],\n    "extraFormulas": [{\n            "label": "Sum of salaries",\n            "source": "String(This.tableData.sum(\\"salary\\"); \\"###,###.00\\")"\n        }\n    ]\n}\n\n'})}),"\n",(0,l.jsx)(t.h4,{id:"translation-files",children:"Translation files"}),"\n",(0,l.jsxs)(t.p,{children:['Translation files translate the names of templates, themes, tables, fields, and formulas. These files are added to the "',(0,l.jsx)(t.a,{href:"/docs/Project/architecture#resources",children:(0,l.jsx)(t.code,{children:"Resources"})}),'/4DWP_Wizard/Translations" folder in your project.']}),"\n",(0,l.jsx)(t.p,{children:'Each translation file must be named with the corresponding language code (for example "en" for English or "fr" for French).'}),"\n",(0,l.jsx)(t.p,{children:"The translation file in JSON format contains the following attributes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"tables"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of translated table objects"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fields"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of translated field objects"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"formulas"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of translated formula objects"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fileNames"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Collection of translated fileName objects (applicable to the theme and template name)"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Whitin each one of these attribute, the translation object includes the following attributes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"original"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Original text intended for translation"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"translation"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Translated version of the original text"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Defining these attributes within the translation object ensures proper organization and alignment between the source and translated content."}),"\n",(0,l.jsx)(t.p,{children:"If the template name or the formula (break, carry-over row, or extra) exists in the translated file, its translation is applied in the Table Wizard. In addition, only the table defined within the translation file is displayed and translated."}),"\n",(0,l.jsxs)(t.p,{children:["The translation file serves an additional role when a user selects a table in the interface. It can filter the tables and fields proposed to the user. For example, to hide table IDs, this behavior is similar to the ",(0,l.jsx)(t.code,{children:"SET TABLE TITLES"})," and ",(0,l.jsx)(t.code,{children:"SET FIELD TITLES"})," commands."]}),"\n",(0,l.jsx)(t.h5,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n    "tables": [{\n            "original": "People",\n            "translation": "Personne"\n        }\n    ],\n    "fields": [{\n            "original": "lastname",\n            "translation": "Nom"\n        }, {\n            "original": "firstname",\n            "translation": "Pr\xe9nom"\n        }, {\n            "original": "salary",\n            "translation": "Salaire"\n        }, {\n            "original": "company",\n            "translation": "Soci\xe9t\xe9"\n        }\n    ],\n    "formulas": [{\n            "original": "Sum of salary",\n            "translation": "Somme des salaires"\n        }\n    ]\n}\n    \n'})}),"\n",(0,l.jsx)(t.h4,{id:"theme-files",children:"Theme files"}),"\n",(0,l.jsxs)(t.p,{children:['A list of themes is provided by default in the 4D Write Pro Interface component, such as "Arial", "CourierNew" and "YuGothic", available in multiple variations like "Blue" and "Green". However, you can create your own theme by placing it in the "',(0,l.jsx)(t.a,{href:"/docs/Project/architecture#resources",children:(0,l.jsx)(t.code,{children:"Resources"})}),'/4DWP_Wizard/Themes" folder within your project.']}),"\n",(0,l.jsx)(t.p,{children:"The theme file in JSON format contains the following attributes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Attribute"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"default"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the default style applicable to all rows."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"table"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the table."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"rows"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to all rows."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"cells"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to all cells."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"header1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the first header row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"header2"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the second header row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"header3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the third header row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"header4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the fourth header row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"header5"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the fifth header row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"headers"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the header rows, if a specific header (like header1, header2...) is not defined."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"data"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the repeated data row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"break1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the first break row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"break2"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the second break row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"break3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the third break row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"break4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the fourth break row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"break5"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the fifth break row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"breaks"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the break rows, if a specific break (like break1, break2...) is not defined."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bcor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the style definition applicable to the bottom carry-over row."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"placeholder"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Object containing the default style applicable to the placeholder row."})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["For every attribute used in your JSON file (header, data, carry-over, summary, and extra rows), you can define the following WP attributes, mentionned with their ",(0,l.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Attributes.300-6229528.en.html",children:"corresponding WP constant"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"WP attributes"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Corresponding WP constant"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"textAlign"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk text align"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"backgroundColor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk background color"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"borderColor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk border color"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"borderStyle"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk border style"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"borderWidth"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk border width"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"font"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk font"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"color"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk font color"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fontFamily"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk font family"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fontSize"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk font size"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"padding"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"wk padding"})]})]})]}),"\n",(0,l.jsx)(t.h5,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n    "default": {\n           "backgroundColor": "#F0F0F0",\n           "borderColor": "#101010",\n           "borderStyle": 1,\n           "borderWidth": "0.5pt",\n           "font": "Times New Roman",\n           "color": "#101010",\n           "fontFamily": "Times New Roman",\n           "fontSize": "7pt",\n           "padding": "2pt"\n    },\n    "table": {\n           "backgroundColor": "#E1EAF3"\n    },\n    "header1": {\n           "textAlign": 2,\n           "borderColor": "#41548F",\n           "borderWidth": "1.5pt",\n           "backgroundColor": "#979BA9",\n           "color": "#F4F4FF",\n           "font": "Times New Roman Bold"\n    },\n    "data": {\n           "fontSize": "13pt",\n           "textAlign": 0\n    },\n    "break1": {\n           "textAlign": 2,\n           "fontSize": "15pt"\n    }\n}\n    \n'})}),"\n",(0,l.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://www.youtube.com/watch?v=2ChlTju-mtM",children:"4D Write Pro - Table Wizard (tutorial video)"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var l=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var l,s={},o=null,c=null;for(l in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,l)&&!a.hasOwnProperty(l)&&(s[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===s[l]&&(s[l]=t[l]);return{$$typeof:i,type:e,key:o,ref:c,props:s,_owner:d.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},474848:(e,t,n)=>{e.exports=n(221020)},970435:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/columns2-947b37c0e54b7d6eea9de002e9c95f96.PNG"},508966:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/display2-d6d239b5ffc25ca3abac1ff2155bb798.PNG"},685704:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/rows1-3af70e7b9df3702032ef8516a15e743f.PNG"},620477:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/tablewizard-interface2-50eb9503c09694c2036dd0f6f6eaef46.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(296540);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);