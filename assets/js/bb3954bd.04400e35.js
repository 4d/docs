"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77026"],{135961:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>i});var d=JSON.parse('{"id":"Events/overview","title":"Form Events","description":"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.","source":"@site/versioned_docs/version-20-R6/Events/overview.md","sourceDirName":"Events","slug":"/Events/overview","permalink":"/docs/20-R6/Events/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"overview","title":"Form Events"},"sidebar":"docs","previous":{"title":"Web Area","permalink":"/docs/20-R6/FormObjects/propertiesWebArea"},"next":{"title":"On Activate","permalink":"/docs/20-R6/Events/onActivate"}}'),s=t("785893"),r=t("250065");let l={id:"overview",title:"Form Events"},i=void 0,c={},o=[{value:"Event object",id:"event-object",level:2},{value:"Events and Methods",id:"events-and-methods",level:2},{value:"Call Table",id:"call-table",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs."}),"\n",(0,s.jsxs)(n.p,{children:["In your code, you control the events using the ",(0,s.jsx)(n.code,{children:"FORM Event"})," command, that returns the triggered event. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//code of a button\nIf(FORM Event.code=On Clicked) \n// do something when the button is clicked\nEnd if\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"event-object",children:"Event object"}),"\n",(0,s.jsxs)(n.p,{children:["Each event is returned as an object by the ",(0,s.jsx)(n.code,{children:"FORM Event"})," command. By default, it contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Name of the object triggering the event - Not included if the event is triggered by the form"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"longint"}),(0,s.jsxs)(n.td,{children:["Numeric value of the form event. Also returned by the ",(0,s.jsx)(n.code,{children:"Form event code"})," command"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'Name of the form event (e.g. "On After Edit")'})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Additional properties are returned when the event occurs on specific objects. In particular:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R6/FormObjects/listboxOverview#supported-form-events",children:"list boxes"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R6/FormObjects/listboxOverview#supported-form-events-1",children:"list box columns"})," return ",(0,s.jsx)(n.a,{href:"/docs/20-R6/FormObjects/listboxOverview#additional-properties",children:"additional properties"})," such as ",(0,s.jsx)(n.code,{children:"columnName"})," or ",(0,s.jsx)(n.code,{children:"isRowSelected"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R6/FormObjects/viewProAreaOverview",children:"4D View Pro areas"})," return for example ",(0,s.jsx)(n.code,{children:"sheetName"})," or ",(0,s.jsx)(n.code,{children:"action"})," properties in the ",(0,s.jsx)(n.a,{href:"/docs/20-R6/Events/onAfterEdit",children:"On After Edit"})," event object."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"events-and-methods",children:"Events and Methods"}),"\n",(0,s.jsx)(n.p,{children:"When a form event occurs, 4D performs the following actions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected."}),"\n",(0,s.jsx)(n.li,{children:"Second, it calls the form method if the corresponding form event property has been selected."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform\u2019s list form are called, then the form method of the list form is called. 4D then continues to call the object methods of the parent form. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object."}),"\n",(0,s.jsxs)(n.p,{children:["Except for the ",(0,s.jsx)(n.a,{href:"/docs/20-R6/Events/onLoad",children:"On Load"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R6/Events/onUnload",children:"On Unload"})," events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties."]}),"\n",(0,s.jsx)(n.p,{children:"The number of objects involved in an event depends on the nature of the event."}),"\n",(0,s.jsx)(n.h2,{id:"call-table",children:"Call Table"}),"\n",(0,s.jsx)(n.p,{children:"The following table summarizes how object and form methods are called for each event type:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Event"}),(0,s.jsx)(n.th,{children:"Object Methods"}),(0,s.jsx)(n.th,{children:"Form Method"}),(0,s.jsx)(n.th,{children:"Which Objects"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Load"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Unload"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Validate"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Clicked"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Double Clicked"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Keystroke"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Keystroke"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Edit"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Getting Focus"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Losing Focus"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Activate"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deactivate"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Outside Call"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Page Change"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin Drag Over"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drop"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Drag Over"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Enter"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Move"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Leave"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Mouse Up"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Menu Selected"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Bound variable change"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Data Change"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Plug in Area"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Detail"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Break"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Printing Footer"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Box"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Display Detail"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"All objects"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open Detail"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None except List boxes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Close Detail"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None except List boxes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Resize"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Selection Change"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Load Record"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Timer"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Scroll"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Before Data Entry"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Moved"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Moved"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Column Resize"}),(0,s.jsx)(n.td,{children:"Yes (List box and 4D View Pro Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Header Click"}),(0,s.jsx)(n.td,{children:"Yes (List box and 4D View Pro Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Footer Click"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On After Sort"}),(0,s.jsx)(n.td,{children:"Yes (List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Long Click"}),(0,s.jsx)(n.td,{children:"Yes (Button)"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Alternative Click"}),(0,s.jsx)(n.td,{children:"Yes (Button and List box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Expand"}),(0,s.jsx)(n.td,{children:"Yes (Hier. list and list box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Collapse"}),(0,s.jsx)(n.td,{children:"Yes (Hier. list and list box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Delete Action"}),(0,s.jsx)(n.td,{children:"Yes (Hier. list and list box)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Resource Loading"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Begin URL Loading"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Loading Error"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On URL Filtering"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On End URL Loading"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Open External Link"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Window Opening Denied"}),(0,s.jsx)(n.td,{children:"Yes (Web Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On VP Range Changed"}),(0,s.jsx)(n.td,{children:"Yes (4D View Pro Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On VP Ready"}),(0,s.jsx)(n.td,{children:"Yes (4D View Pro Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Row Resize"}),(0,s.jsx)(n.td,{children:"Yes (4D View Pro Area)"}),(0,s.jsx)(n.td,{children:"Never"}),(0,s.jsx)(n.td,{children:"Involved object only"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["WARNING: The ",(0,s.jsx)(n.a,{href:"/docs/20-R6/Events/onLoad",children:"On Load"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R6/Events/onUnload",children:"On Unload"})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var d=t(667294);let s={},r=d.createContext(s);function l(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);