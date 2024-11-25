"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73695"],{327867:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-custom-functions","title":"VP SET CUSTOM FUNCTIONS","description":"VP SET CUSTOM FUNCTIONS ( vpAreaName Object  )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-set-custom-functions.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-custom-functions","permalink":"/docs/ViewPro/commands/vp-set-custom-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-custom-functions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-custom-functions","title":"VP SET CUSTOM FUNCTIONS"},"sidebar":"docs","previous":{"title":"VP SET CURRENT SHEET","permalink":"/docs/ViewPro/commands/vp-set-current-sheet"},"next":{"title":"VP SET DATA CONTEXT","permalink":"/docs/ViewPro/commands/vp-set-data-context"}}'),r=t("785893"),o=t("250065");let a={id:"vp-set-custom-functions",title:"VP SET CUSTOM FUNCTIONS"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET CUSTOM FUNCTIONS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"formulaObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formulaObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Formula object"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," command designates the 4D formulas that can be called directly from 4D View Pro formulas. Because custom functions are not stored in the document,",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," must be executed in the ",(0,r.jsx)(n.code,{children:"On Load"})," form event."]}),"\n",(0,r.jsxs)(n.p,{children:["The formulas specified by ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," appear in a pop-up menu when the first letter of their name is entered. See the ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/formulas",children:"Formulas and Functions"})," page."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called multiple times for the same area, in the same session, only the last call is taken into account."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the name of the 4D View Pro area in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"formulaObj"})," parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each ",(0,r.jsx)(n.code,{children:"customFunction"})," property passed in ",(0,r.jsx)(n.em,{children:"formulaObj"})," becomes the name of a function in the 4D View Pro area."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<customFunction>"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Custom function definition. ",(0,r.jsx)(n.code,{children:"<customFunction>"})," defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["4D formula object (mandatory). See the ",(0,r.jsx)(n.code,{children:"Formula"})," command."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"parameters"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Collection of objects"}),(0,r.jsxs)(n.td,{children:["Collection of parameters (in the order they are defined in the formula). For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/formulas#parameters",children:"Parameters"})," section."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].name"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Name of parameter to display in 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].type"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["Type of the parameter. Supported types:",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is Boolean"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is collection"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is date"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is Integer"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is object"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is real"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is text"})}),(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Is time"})}),(0,r.jsx)(n.em,{children:"type"})," can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). ",(0,r.jsx)(n.br,{})," If ",(0,r.jsx)(n.em,{children:"type"})," is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. If ",(0,r.jsx)(n.em,{children:"type"})," is ",(0,r.jsx)(n.code,{children:"Is object"}),", the object is sent in a ",(0,r.jsx)(n.code,{children:".value"})," property. See ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/formulas#parameters",children:"Parameters"})," section."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"summary"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Formula description to display in 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"minParams"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"Minimum number of parameters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"maxParams"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsxs)(n.td,{children:["Maximum number of parameters. Passing a number higher than the length of ",(0,r.jsx)(n.em,{children:"parameters"}),' allows declaring "optional" parameters with default type']})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"WARNING"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As soon as ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called, the methods allowed by the ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"})," command (if any) are ignored in the 4D View Pro area."]}),"\n",(0,r.jsxs)(n.li,{children:["As soon as ",(0,r.jsx)(n.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called, the functions based upon ",(0,r.jsx)(n.code,{children:"SET TABLE TITLES"})," and ",(0,r.jsx)(n.code,{children:"SET FIELD TITLES"})," commands are ignored in the 4D View Pro area."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender and the company's peak month:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Case of\n    :(FORM Event.code=On Load)\n \n       var $o : Object\n       $o:=New object\n \n// Define "addnum" function from a method named "addnum"\n       $o.addnum:=New object\n       $o.addnum.formula:=Formula(addnum)\n       $o.addnum.parameters:=New collection\n       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))\n       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))\n \n// Define "ClientLastName" function from a database field\n       $o.ClientLastName:=New object\n       $o.ClientLastName.formula:=Formula([Customers]lastname)\n       $o.ClientLastName.summary:="Lastname of the current client"\n \n// Define "label" function from a 4D expression with one parameter\n       $o.label:=New object\n       $o.label.formula:=Formula(ds.Customers.get($1).label)\n       $o.label.parameters:=New collection\n       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))\n \n// Define "AverageValues" function from a method named "AverageValues"\n       $o.AverageValues:=New object\n       $o.AverageValues.formula:=Formula(AverageValues)\n       $o.AverageValues.parameters:=New collection\n       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))\n        \n// Define "Title" function from a variable named "Title"\n       $o.Title:=New object\n       $o.Title.formula:=Formula(Title)\n \n       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)\n \nEnd case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/formulas#4d-functions",children:"4D functions"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-allowed-methods",children:"VP SET ALLOWED METHODS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions",children:"4D View Pro: enhancement of custom functions (blog post)"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},o=s.createContext(r);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);