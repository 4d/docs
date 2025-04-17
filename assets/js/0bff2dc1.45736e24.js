"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78130"],{250444:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-set-events","title":"OBJECT SET EVENTS","description":"OBJECT SET EVENTS ( { ;} object ; arrEvents ; mode* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-events.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-events","permalink":"/docs/20-R8/commands/object-set-events","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-events.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-events","title":"OBJECT SET EVENTS","slug":"/commands/object-set-events","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ENTERABLE","permalink":"/docs/20-R8/commands/object-set-enterable"},"next":{"title":"OBJECT SET FILTER","permalink":"/docs/20-R8/commands/object-set-filter"}}'),r=t("785893"),d=t("250065");let i={id:"object-set-events",title:"OBJECT SET EVENTS",slug:"/commands/object-set-events",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"arrEvents"})," ; ",(0,r.jsx)(n.em,{children:"mode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:['Object name or "" to designate the form (if * is specified) or',(0,r.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrEvents"}),(0,r.jsx)(n.td,{children:"Array integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Array of events to set"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Activation mode for events defined in arrEvents"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," command modifies, for the current process, the configuration of the form events of the form or object(s) designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).",(0,r.jsx)(n.br,{}),"\nTo define the configuration of events for the form itself, pass the optional ",(0,r.jsx)(n.em,{children:"*"}),' parameter and an empty string "" in ',(0,r.jsx)(n.em,{children:"object"}),": in this case, you designate the current form."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you want to modify the events of a subform related to a table, you can only use the syntax based on the object name."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"arrEvents"})," parameter, pass a Longint array containing the list of predefined or custom form events that you want to modify (you can use the ",(0,r.jsx)(n.em,{children:"mode"})," parameter to specify whether the modification consists of enabling or disabling the events). To designate a predefined event to modify, you can pass, in each element of the ",(0,r.jsx)(n.em,{children:"arrEvents"}),' array, one of the following constants, found in the "',(0,r.jsx)(n.em,{children:"Form Events"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Activate"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"The form\u2019s window becomes the frontmost window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Edit"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"45"}),(0,r.jsx)(n.td,{children:"The contents of the enterable object that has the focus has just been modified"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Keystroke"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"28"}),(0,r.jsxs)(n.td,{children:["A character is about to be entered in the object that has the focus. ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/get-edited-text",children:"Get edited text"})," returns the object's text including this character."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On After Sort"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"30"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box only"}),") A standard sort has just been carried out in a list box column"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Arrow Click"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"38"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"3D buttons only"}),") The \u201Carrow\u201D area of a 3D button is clicked"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Before Data Entry"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"41"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box only"}),") A list box cell is about to change to editing mode"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Before Keystroke"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"17"}),(0,r.jsxs)(n.td,{children:["A character is about to be entered in the object that has the focus. ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/get-edited-text",children:"Get edited text"})," returns the object's text without this character."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Begin Drag Over"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"46"}),(0,r.jsx)(n.td,{children:"An object is being dragged"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Begin URL Loading"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"47"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") A new URL is loaded in the Web area"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On bound variable change"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"54"}),(0,r.jsx)(n.td,{children:"The variable bound to a subform is modified."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Clicked"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"A click occurred on an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Close Box"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"The window\u2019s close box has been clicked"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Close Detail"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"26"}),(0,r.jsx)(n.td,{children:"You left the detail form and are going back to the output form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Collapse"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"44"}),(0,r.jsx)(n.td,{children:"(Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been collapsed using a click or a keystroke"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Column Moved"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"32"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box only"}),") A list box column is moved by the user via drag and drop"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Column Resize"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"33"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box and 4D View Pro"}),") The width of a column is modified by a user with the mouse"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Data Change"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Object data has been modified"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Deactivate"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"The form\u2019s window ceases to be the frontmost window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Delete Action"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"58"}),(0,r.jsx)(n.td,{children:"(Hierarchical lists and List boxes) The user attempts to delete an item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Display Detail"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"A record is about to be displayed in a list or a row is about to be displayed in a list box."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Double Clicked"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"A double click occurred on an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Drag Over"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"21"}),(0,r.jsx)(n.td,{children:"Data could be dropped onto an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Drop"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Data has been dropped onto an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On End URL Loading"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"49"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") All the resources of the URL have been loaded"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Expand"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"43"}),(0,r.jsx)(n.td,{children:"(Hierarchical lists and hierarchical list boxes) An element of the hierarchical list or hierarchical list box has been expanded using a click or a keystroke"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Footer Click"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"57"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List boxes only"}),") A click occurs in the footer of a list box or a list box column"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Getting Focus"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"A form object is getting the focus"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Header"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"The form\u2019s header area is about to be printed or displayed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Header Click"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"42"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box and 4D View Pro"}),") A click occurs in a column header"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Load Record"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"40"}),(0,r.jsx)(n.td,{children:"During entry in list, a record is loaded during modification (the user clicks on a record line and a field changes to editing mode)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Long Click"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"39"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"3D buttons only"}),") A 3D button is clicked and the mouse button remains pushed for a certain lapse of time"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Losing Focus"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"A form object is losing the focus"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mac toolbar button"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"55"}),(0,r.jsx)(n.td,{children:"The user clicks on the tool bar management button under Mac OS."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Menu Selected"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"A menu item has been chosen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Enter"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"35"}),(0,r.jsx)(n.td,{children:"The mouse cursor enters the graphic area of an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Leave"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"36"}),(0,r.jsx)(n.td,{children:"The mouse cursor leaves the graphic area of an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Mouse Move"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"37"}),(0,r.jsx)(n.td,{children:"The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt, Shift Lock) was pressed. If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Open Detail"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"25"}),(0,r.jsx)(n.td,{children:"The detail form associated with the output form or with the listbox is about to be opened"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Open External Link"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"52"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") An external URL has been opened in the browser"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Outside Call"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsxs)(n.td,{children:["The form received a ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/post-outside-call",children:"POST OUTSIDE CALL"})," call"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Picture Scroll"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"59"}),(0,r.jsx)(n.td,{children:"The user scrolls the contents of a picture field or variable using the mouse or keyboard."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Plug in Area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"An external object requested its object method to be executed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Break"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"One of the form\u2019s break areas is about to be printed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Detail"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"The form\u2019s detail area is about to be printed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Printing Footer"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"The form\u2019s footer area is about to be printed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Resize"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"29"}),(0,r.jsx)(n.td,{children:"The form window is resized"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Row Moved"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"34"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"List box only"}),") A list box row is moved by the user via drag and drop"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Row Resize"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"60"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"(4D View Pro only)"})," The height of a row is modified by a user with the mouse"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Selection Change"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"List box & 4D View Pro"}),": The current selection of rows or columns is modified ",(0,r.jsx)(n.em,{children:"Records in list"}),": The current record or the current selection of rows is modified in a list form or subform ",(0,r.jsx)(n.em,{children:"Hierarchical list"}),": The selection in the list is modified following a click or a keystroke ",(0,r.jsx)(n.em,{children:"Enterable field or variable"}),": The text selection or the position of the cursor in the area is modified following a click or a keystroke"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Timer"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"27"}),(0,r.jsxs)(n.td,{children:["The number of ticks defined by the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/set-timer",children:"SET TIMER"})," command has passed"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Unload"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{children:"The form is about to be exited and released"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Filtering"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"51"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") A URL was blocked by the Web area"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Loading Error"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"50"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") An error occurred when the URL was loading"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On URL Resource Loading"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"48"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") A new resource is loaded in the Web area"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Validate"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"The record data entry has been validated"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On VP Range Changed"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"61"}),(0,r.jsx)(n.td,{children:"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On Window Opening Denied"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"53"}),(0,r.jsxs)(n.td,{children:["(",(0,r.jsx)(n.em,{children:"Web areas only"}),") A pop-up window has been blocked"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"It is important to note that the On Load event is not included in this list: this event cannot be defined because it has already been generated during the execution of the command."}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"arrEvents"}),", you can also pass any value corresponding to a custom event. In this case, we recommend using negative values (see the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"})," command)."]}),"\n",(0,r.jsxs)(n.p,{children:["You use the ",(0,r.jsx)(n.em,{children:"mode"}),' parameter to set the overall processing to be carried out for the array elements. To do this, you can pass one of the following constants, found in the "',(0,r.jsx)(n.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disable events others unchanged"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["All the events listed in the ",(0,r.jsx)(n.em,{children:"arrEvents"})," array are disabled; the status of other events remain unchanged"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enable events disable others"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["All the events listed in the ",(0,r.jsx)(n.em,{children:"arrEvents"})," array are enabled; all the other events are disabled"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enable events others unchanged"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["All the events listed in the ",(0,r.jsx)(n.em,{children:"arrEvents"})," array are enabled; the status of other events remain unchanged"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," command can lead to the enabling of events that are not supported by the ",(0,r.jsx)(n.em,{children:"object"})," (depending on its type). In this case, the events will simply be ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["If an ",(0,r.jsx)(n.em,{children:"object"})," is duplicated after a call to the ",(0,r.jsx)(n.strong,{children:"OBJECT SET EVENTS"})," command, the resulting enabled/disabled configuration is also duplicated."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Enabling three form events for a set of list box objects and disabling other events:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)\n\xa0\xa0// enables 3 events and disables all others\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Disabling three form events for a set of list box objects, without modifying the other events:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;3)\n\xa0$MyEventsOnLB {1}:=On After Sort\n\xa0$MyEventsOnLB {2}:=On Column Moved\n\xa0$MyEventsOnLB {3}:=On Column Resize\n\xa0OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)\n\xa0\xa0// disables only these 3 events\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"Enabling a form event for an object, without modifying the other events:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyEventsOnLB;1)\n\xa0$MyEventsOnLB {1}:=On Column Moved\n\xa0OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)\n\xa0\xa0// only enables this event\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.p,{children:"Disabling all events of the form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;0)\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)\n\xa0\xa0// disables all events\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,r.jsx)(n.p,{children:"Disables a single event of the form without modifying the others:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($MyFormEvents;1)\n\xa0$MyFormEvents{1}:=On Timer\n\xa0OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)\n\xa0\xa0// only disables this event\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Form Events"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/object-get-events",children:"OBJECT GET EVENTS"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1239"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);