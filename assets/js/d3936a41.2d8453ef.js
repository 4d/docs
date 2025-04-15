"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81079"],{434428:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/object-duplicate","title":"OBJECT DUPLICATE","description":"OBJECT DUPLICATE ( { ;} object {; newName {; newVar {; boundTo {; moveH {; moveV {; resizeH {; resizeV}}}}}}} {; } )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-duplicate.md","sourceDirName":"commands-legacy","slug":"/commands/object-duplicate","permalink":"/docs/20-R7/commands/object-duplicate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-duplicate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-duplicate","title":"OBJECT DUPLICATE","slug":"/commands/object-duplicate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST OF STYLE SHEETS","permalink":"/docs/20-R7/commands/list-of-style-sheets"},"next":{"title":"OBJECT Get action","permalink":"/docs/20-R7/commands/object-get-action"}}'),s=n("785893"),r=n("250065");let o={id:"object-duplicate",title:"OBJECT DUPLICATE",slug:"/commands/object-duplicate",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OBJECT DUPLICATE"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"object"})," {; ",(0,s.jsx)(t.em,{children:"newName"})," {; ",(0,s.jsx)(t.em,{children:"newVar"})," {; ",(0,s.jsx)(t.em,{children:"boundTo"})," {; ",(0,s.jsx)(t.em,{children:"moveH"})," {; ",(0,s.jsx)(t.em,{children:"moveV"})," {; ",(0,s.jsx)(t.em,{children:"resizeH"})," {; ",(0,s.jsx)(t.em,{children:"resizeV"}),"}}}}}}} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(t.br,{}),"Variable or field (if * is omitted)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"newName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name of new object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"newVar"}),(0,s.jsx)(t.td,{children:"Pointer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Pointer to variable of new object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"boundTo"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name of previous enterable object (or radio button)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"moveH"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Horizontal shift of new object (>0 = to the right, <0 = to the left)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"moveV"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Vertical shift of new object (>0 = downwards, <0 = upwards)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"resizeH"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Value of the horizontal resize of the object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"resizeV"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Value of the vertical resize of the object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["If specified= absolute coordinates",(0,s.jsx)(t.br,{}),"If omitted= relative coordinates"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"OBJECT DUPLICATE"})," command is used to create a copy of the object designated by the ",(0,s.jsx)(t.em,{children:"object"})," parameter in the context of the form being executed (Application mode). The source form, generated in Design mode, is not modified."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, all the options specified in the Property list for the source object are applied to the copy (size, resizing options, color, etc.), including any associated object method.",(0,s.jsx)(t.br,{}),"\nHowever, the following exceptions should be noted:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Default button: there can only be one default button in a form. When you duplicate a button having the "Default button" property, this property is assigned to the copy and is removed from the source object.'}),"\n",(0,s.jsx)(t.li,{children:"Keyboard equivalents: the keyboard shortcut associated with a source object is not duplicated. This property is left blank in the copy."}),"\n",(0,s.jsxs)(t.li,{children:["Object names: there cannot be several objects with the same name in a form. If you do not pass the ",(0,s.jsx)(t.em,{children:"newName"})," parameter, the name of the source object is automatically incremented in the new object (see below)."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string.",(0,s.jsx)(t.br,{}),"\nIf you pass a field or variable reference and if the form contains several objects that use the same reference, the first occurrence found will be used. In this case, in order to avoid any ambiguity, it is recommended to work with object names, that are unique."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the name assigned to the copy of the object in the ",(0,s.jsx)(t.em,{children:"newName"})," parameter. This name must be in keeping with the rules for naming objects and be unique in the form. If it is not valid or already used by another object, the command does nothing and the ",(0,s.jsx)(t.em,{children:"OK"})," variable returns 0.",(0,s.jsx)(t.br,{}),"\nIf you omit this parameter or pass an empty string, the new name is automatically generated by incrementing the source object name (if this name is not already used). For example:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Source name"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Name of copy"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Button"}),(0,s.jsx)(t.td,{children:"Button1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Button20"}),(0,s.jsx)(t.td,{children:"Button21"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Button21"}),(0,s.jsx)(t.td,{children:"Button23 if Button22 already exists"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Pass a pointer to the variable to be associated with the new object in ",(0,s.jsx)(t.em,{children:"newVar"}),'. As a rule, you must point to a variable of the same type as the that of the source object but certain kinds of "retyping" are possible. The command provides automatic functions to facilitate writing generic code:']}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Usually, all "enterable" variables can be retyped; for example, an object displaying a Date or Longint can be duplicated and used with a variable of the Text type. Any compatible properties will be kept. The command also permits changing types between Text objects and Picture objects. Note that a text object that is duplicated and associated with a Boolean variable or field will automatically appear as a check box.'}),"\n",(0,s.jsxs)(t.li,{children:["It is usually possible to dynamically transform a variable into a field and vice versa.",(0,s.jsx)(t.br,{}),"\nOn the other hand, graphic objects (buttons, check boxes, and so on) cannot be transformed into other types of controls."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If the variable type is not compatible with the object, the command does nothing and the ",(0,s.jsx)(t.em,{children:"OK"})," variable is set to 0. If you omit this parameter, the variable is ",(0,s.jsx)(t.a,{href:"/docs/20-R7/FormObjects/propertiesObject#dynamic-variables",children:"created dynamically"})," by 4D. If you duplicate a static object (lines, rectangle, static picture, etc.), this parameter is ignored. Pass a Nil (->[]) pointer if you want to be able to use the other parameters."]}),"\n",(0,s.jsxs)(t.p,{children:["You use the ",(0,s.jsx)(t.em,{children:"boundTo"})," parameter in two cases:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["update of entry order: in this case, in ",(0,s.jsx)(t.em,{children:"boundTo"}),", pass the name of the enterable object located just before the duplicated object. If you want for the new object to become the first object in the entry order of the page, pass the new Object First in entry order constant (see the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/object-get-pointer",children:"OBJECT Get pointer"})," command)."]}),"\n",(0,s.jsxs)(t.li,{children:["association with a group of radio buttons: radio buttons function in a coordinated fashion when they are grouped. If the duplicated object is a radio button, in ",(0,s.jsx)(t.em,{children:"boundTo"})," pass the name of a radio button of the group to which you want to attach the new object."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If you omit this parameter or pass an empty string, the new object becomes the last enterable object of the form page."}),"\n",(0,s.jsxs)(t.p,{children:["The new object can be moved and resized via the ",(0,s.jsx)(t.em,{children:"moveH"}),", ",(0,s.jsx)(t.em,{children:"moveV"}),", ",(0,s.jsx)(t.em,{children:"resizeH"})," and ",(0,s.jsx)(t.em,{children:"resizeV"})," parameters. As with the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/object-move",children:"OBJECT MOVE"})," command, the direction of the move or the resizing is specified by the sign of the values passed in the ",(0,s.jsx)(t.em,{children:"moveH"})," and ",(0,s.jsx)(t.em,{children:"moveV"})," parameters:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If the value is positive, the move or resizing is carried out, respectively, to the right or downwards."}),"\n",(0,s.jsx)(t.li,{children:"If the value is negative, the move or resizing is carried out, respectively, to the left or upwards."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the values of ",(0,s.jsx)(t.em,{children:"moveH"}),", ",(0,s.jsx)(t.em,{children:"moveV"}),", ",(0,s.jsx)(t.em,{children:"resizeH"})," and ",(0,s.jsx)(t.em,{children:"resizeV"})," modify the coordinates of the object in relation to its previous position. If you want for these parameters to specify absolute coordinates, pass the optional final ",(0,s.jsx)(t.em,{children:"*"})," parameter.",(0,s.jsx)(t.br,{}),"\nIf you omit these parameters, the new object is superimposed on top of the source object."]}),"\n",(0,s.jsx)(t.p,{children:"This command must be used in the context of the display of a form. It will generally be called in the On Load form event or following a user action (On Clicked event)."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," If the On Load form event is associated with the source object, it is generated for the duplicated object when the command is executed. This allows, for example, the value of the object to be initialized."]}),"\n",(0,s.jsxs)(t.p,{children:["For technical and logical reasons, ",(0,s.jsx)(t.strong,{children:"OBJECT DUPLICATE"})," cannot be called within the certain form events, in particular:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"On Load event generated in an object method"}),"\n",(0,s.jsx)(t.li,{children:"On Unload event"}),"\n",(0,s.jsxs)(t.li,{children:["Event related to printing context (On Header, On Printing Detail, etc.). To print an object several times, you must use the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/print-object",children:"Print object"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When the command is called in a context that is not supported,the object is not duplicated and the ",(0,s.jsx)(t.em,{children:"OK"})," variable is set to 0. If it is called in a printing context, the error -10601 is generated as well."]}),"\n",(0,s.jsxs)(t.p,{children:["If the command was executed correctly, the ",(0,s.jsx)(t.em,{children:"OK"})," variable is set to 1. Otherwise, it is set to 0."]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(t.p,{children:['Creation of a new button named "CancelButton" on top of the existing "OKButton" object and association with the ',(0,s.jsx)(t.em,{children:"vCancel"})," variable:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT DUPLICATE(*;"OKButton";"CancelButton";vCancel)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:'Creation of a new radio button "bRadio6" based on the existing radio button "bRadio5". This button will be associated with the variable <>r6, integrated with the group of the "bRadio5" button and placed 20 pixels above it:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT DUPLICATE(*;"bRadio5";"bRadio6";<>r6;"bRadio5";0;20)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Form Objects (Access)"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/object-get-pointer",children:"OBJECT Get pointer"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/object-move",children:"OBJECT MOVE"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1111"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(667294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);