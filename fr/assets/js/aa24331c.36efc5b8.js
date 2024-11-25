"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62546"],{36176:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"FormEditor/markers","title":"Markers","description":"These properties let you specify the precise location of markers on the vertical ruler of a table form. Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/FormEditor/properties_Markers.md","sourceDirName":"FormEditor","slug":"/FormEditor/markers","permalink":"/docs/fr/FormEditor/markers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Markers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"markers","title":"Markers"},"sidebar":"docs","previous":{"title":"Taille du formulaire","permalink":"/docs/fr/FormEditor/formSize"},"next":{"title":"Menu","permalink":"/docs/fr/FormEditor/menu"}}'),a=n("785893"),i=n("250065");let s={id:"markers",title:"Markers"},o=void 0,d={},l=[{value:"Form Break",id:"form-break",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Form Detail",id:"form-detail",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Form Footer",id:"form-footer",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Form Header",id:"form-header",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4},{value:"Additional areas",id:"additional-areas",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["These properties let you specify the precise location of markers on the vertical ruler of a ",(0,a.jsx)(r.strong,{children:"table form"}),". Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location."]}),"\n",(0,a.jsx)(r.p,{children:"Whenever any form is used for output, either for screen display or printing, the output marker lines take effect and the areas display or print at designated locations. The markers also take effect when a form is used as the List form in a subform area. However, they have no effect when a form is used for input."}),"\n",(0,a.jsxs)(r.p,{children:["Methods that are associated with objects in these areas are executed when the areas are printed or displayed as long as the appropriate events have been activated. For example, a object method placed in the Header area is executed when the ",(0,a.jsx)(r.code,{children:"On Header"})," event takes place."]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"form-break",children:"Form Break"}),"\n",(0,a.jsx)(r.p,{children:"Form Break areas are displayed once at the end of the list of records and are printed once after the records have been printed in a report."}),"\n",(0,a.jsxs)(r.p,{children:["The Break area is defined as the area between the Detail control line and the Break control line. There can be ",(0,a.jsx)(r.a,{href:"#additional-areas",children:"several Break areas"})," in your report."]}),"\n",(0,a.jsx)(r.p,{children:"You can make Break areas smaller or larger. You can use a Break area to display information that is not part of the records (instructions, current date, current time, etc.), or to display a line or other graphic element that concludes the screen display. In a printed report, you can use a Break area for calculating and printing subtotals and other summary calculations."}),"\n",(0,a.jsx)(r.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Nom"}),(0,a.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,a.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"markerBreak"}),(0,a.jsx)(r.td,{children:"integer | integer collection"}),(0,a.jsxs)(r.td,{children:["Break marker position or collection of break marker positions in pixels.",(0,a.jsx)(r.br,{}),"Minimum value: 0"]})]})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"form-detail",children:"Form Detail"}),"\n",(0,a.jsx)(r.p,{children:"The form Detail area is displayed on the screen and printed once for each record in a report. The Detail area is defined as the area between the Header control line and the Detail control line."}),"\n",(0,a.jsx)(r.p,{children:"You can make the Detail area smaller or larger. Whatever you place in the Detail area is displayed or printed once for each record. Most often you place fields or variables in the Detail area so that the information in each record is displayed or printed, but you can place other elements in the Detail area as well."}),"\n",(0,a.jsx)(r.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Nom"}),(0,a.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,a.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"markerBody"}),(0,a.jsx)(r.td,{children:"integer"}),(0,a.jsx)(r.td,{children:"Position du marqueur de d\xe9tail. Minimum: 0"})]})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"form-footer",children:"Form Footer"}),"\n",(0,a.jsx)(r.p,{children:"The Form Footer area is displayed on screen under the list of records. It is always printed at the bottom of every page of a report. The Footer area is defined as the area between the Break control line and the Footer control line."}),"\n",(0,a.jsx)(r.p,{children:"You make the Footer area smaller or larger."}),"\n",(0,a.jsx)(r.p,{children:"You can use the Footer area to print graphics, page numbers, the current date, or any text you want at the bottom of each page of a report. For output forms designed for use on screen, the Footer area typically contains buttons that give the user options such as doing a search or sort, printing records, or putting away the current report. Active objects are accepted."}),"\n",(0,a.jsx)(r.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Nom"}),(0,a.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,a.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"markerFooter"}),(0,a.jsx)(r.td,{children:"integer"}),(0,a.jsx)(r.td,{children:"minimum : 0"})]})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"form-header",children:"Form Header"}),"\n",(0,a.jsx)(r.p,{children:"The form Header area is displayed at the top of each screen and is printed at the top of each page of a report. The Header area is defined as the area above the Header control line."}),"\n",(0,a.jsx)(r.p,{children:"You can make the Header area smaller or larger. You can use the Header area for column names, for instructions, additional information, or even a graphic such as a company logo or a decorative pattern."}),"\n",(0,a.jsxs)(r.p,{children:["You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the ",(0,a.jsx)(r.code,{children:"DISPLAY SELECTION"})," and ",(0,a.jsx)(r.code,{children:"MODIFY SELECTION"})," commands. The following active objects can be inserted:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Buttons, picture buttons,"}),"\n",(0,a.jsx)(r.li,{children:"Combo boxes, drop-down lists,  picture pop-up menus,"}),"\n",(0,a.jsx)(r.li,{children:"hierarchical lists, list boxes"}),"\n",(0,a.jsx)(r.li,{children:"Radio buttons, check boxes, 3D check boxes,"}),"\n",(0,a.jsx)(r.li,{children:"Progress indicators, rulers, steppers, spinners."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Standard actions such as ",(0,a.jsx)(r.code,{children:"Add Subrecord"}),", ",(0,a.jsx)(r.code,{children:"Cancel"})," (lists displayed using ",(0,a.jsx)(r.code,{children:"DISPLAY SELECTION"})," and ",(0,a.jsx)(r.code,{children:"MODIFY SELECTION"}),") or ",(0,a.jsx)(r.code,{children:"Automatic splitter"})," can be assigned to the inserted buttons. The following events apply to the active objects you insert in the Header area: ",(0,a.jsx)(r.code,{children:"On Load"}),", ",(0,a.jsx)(r.code,{children:"On Clicked"}),", ",(0,a.jsx)(r.code,{children:"On Header"}),", ",(0,a.jsx)(r.code,{children:"On Printing Footer"}),", ",(0,a.jsx)(r.code,{children:"On Double Clicked"}),", ",(0,a.jsx)(r.code,{children:"On Drop"}),", ",(0,a.jsx)(r.code,{children:"On Drag Over"}),", ",(0,a.jsx)(r.code,{children:"On Unload"}),". Keep in mind that the form method is called with the ",(0,a.jsx)(r.code,{children:"On Header"})," event after calling the object methods of the area."]}),"\n",(0,a.jsxs)(r.p,{children:["The form can contains ",(0,a.jsx)(r.a,{href:"#additional-areas",children:"additional header areas"})," to be associated with additional breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed."]}),"\n",(0,a.jsx)(r.h4,{id:"grammaire-json-3",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Nom"}),(0,a.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,a.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"markerHeader"}),(0,a.jsx)(r.td,{children:"integer | integer collection"}),(0,a.jsxs)(r.td,{children:["Header marker position or collection of header marker positions in pixels.",(0,a.jsx)(r.br,{}),"Minimum value: 0"]})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"additional-areas",children:"Additional areas"}),"\n",(0,a.jsx)(r.p,{children:"You can create additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively."}),"\n",(0,a.jsxs)(r.p,{children:["Additional areas are defined when you use a collection of positions in the ",(0,a.jsx)(r.a,{href:"#form-break",children:"Form Break"})," and ",(0,a.jsx)(r.a,{href:"#form-header",children:"Form Header"})," properties."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["In the 4D Form editor, you create additional control lines by holding down the ",(0,a.jsx)(r.strong,{children:"Alt"})," key while clicking the appropriate control marker."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"A form always starts with a Header, Detail, Break level 0, and Footer areas."}),"\n",(0,a.jsx)(r.p,{children:"Break at level 0 zero takes in all the records; it occurs after all the records are printed. Additional Break areas can be added, i.e. a Break level 1, Break level 2, etc."}),"\n",(0,a.jsx)(r.p,{children:"A Break level 1 occurs after the records grouped by the first sorted field are printed."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Label"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Prints after groups created by"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Break 1"}),(0,a.jsx)(r.td,{children:"Break at level 1"}),(0,a.jsx)(r.td,{children:"First sorted field"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Break 2"}),(0,a.jsx)(r.td,{children:"Break at level 2"}),(0,a.jsx)(r.td,{children:"Second sorted field"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Break 3"}),(0,a.jsx)(r.td,{children:"Break at level 3"}),(0,a.jsx)(r.td,{children:"Third sorted field"})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Additional Header areas are associated with Breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Label"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Prints after groups created by"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Header 1"}),(0,a.jsx)(r.td,{children:"Header at level 1"}),(0,a.jsx)(r.td,{children:"First sorted field"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Header 2"}),(0,a.jsx)(r.td,{children:"Header at level 2"}),(0,a.jsx)(r.td,{children:"Second sorted field"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Form Header 3"}),(0,a.jsx)(r.td,{children:"Header at level 3"}),(0,a.jsx)(r.td,{children:"Third sorted field"})]})]})]}),"\n",(0,a.jsxs)(r.p,{children:["If you use the ",(0,a.jsx)(r.code,{children:"Subtotal"})," function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. If you do not need anything printed in one of the Break areas, you can reduce its size to nothing by placing its marker on top of another control line. If you have more sort levels than Break areas, the last Break area will be repeated during printing."]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return s}});var t=n(667294);let a={},i=t.createContext(a);function s(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);