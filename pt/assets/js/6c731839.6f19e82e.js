"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52379"],{787561:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>i,frontMatter:()=>d});var t=JSON.parse('{"id":"commands/form-event-code","title":"Form event code","description":"Form event code  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/form-event-code.md","sourceDirName":"commands","slug":"/commands/form-event-code","permalink":"/docs/pt/commands/form-event-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-event-code","title":"Form event code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Event","permalink":"/docs/pt/commands/form-event"},"next":{"title":"In break","permalink":"/docs/pt/commands/in-break"}}'),s=o("785893"),r=o("250065");let d={id:"form-event-code",title:"Form event code",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Exemplo 2",id:"exemplo-2-1",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 3",id:"exemplo-3-1",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Exemplo 9",id:"exemplo-9",level:4},{value:"Exemplo 10",id:"exemplo-10",level:4},{value:"Exemplo 11",id:"exemplo-11",level:4},{value:"Exemplo 12",id:"exemplo-12",level:4},{value:"Exemplo 13",id:"exemplo-13",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Form event code"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de evento do formul\xe1rio"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 thread-safe, n\xe3o pode ser usado em c\xf3digo preventivo."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Form event code"})," returns a numeric value identifying the type of form event that has just occurred. Usually, you will use ",(0,s.jsx)(n.strong,{children:"Form event code"})," from within a form or object method."]}),"\n",(0,s.jsxs)(n.p,{children:["4D provides predefined constants (found in the ",(0,s.jsx)(n.em,{children:"Form Events"})," theme) in order to compare the values returned by the ",(0,s.jsx)(n.strong,{children:"Form event code"})," command. Certain events are generic (generated for any type of object) and others are specific to a particular type of object."]}),"\n",(0,s.jsxs)(n.p,{children:["Para obter uma descri\xe7\xe3o dos eventos, consulte a se\xe7\xe3o ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/overview",children:(0,s.jsx)(n.strong,{children:"Eventos formul\xe1rio"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"This example shows the On Validate event being used to automatically assign (to a field) the date that the record is modified:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Method of a form\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Validate)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[aTable]Last Modified On:=Current date\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"In this example, the complete handling of a drop-down list (initialization, user clicks, and object release) is encapsulated in the method of the object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//asBurgerSize Drop-down list Object Method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asBurgerSize;3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Small"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Medium"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Large"\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asBurgerSize#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("You chose a "+asBurgerSize{asBurgerSize}+" burger.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asBurgerSize)\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"This example is a template for a form method. It shows each of the possible events that can occur when a summary report uses a form as an output form:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Method of a form being used as output form for a summary report\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0//A header area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0//Code for the first break header goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0//Code for a break header level 1 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0//Code for a break header level 2 goes here\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Detail)\n\xa0\xa0//A record is about to be printed\n\xa0\xa0//Code for each record goes here\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Break)\n\xa0\xa0//A break area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0//Code for a break level 0 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0//Code for a break level 1 goes here\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0//Code for the last footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//Code for a footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["This example shows the template of a form method that handles the events that can occur for a form displayed using the ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"})," or ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})," commands. For didactic purposes, it displays the nature of the event in the title bar of the form window."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//A form method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The form is about to be displayed"\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The output form has been exited and is about to disappear from the screen"\n\xa0\xa0\xa0\xa0:(Form event code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="Displaying record #"+String(Selected record number([TheTable]))\n\xa0\xa0\xa0\xa0:(Form event code=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="A menu item has been selected"\n\xa0\xa0\xa0\xa0:(Form event code=On Header")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The header area is about to be drawn"\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="A record has been clicked"\n\xa0\xa0\xa0\xa0:(Form event code=On Double Clicked")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="A record has been double clicked"\n\xa0\xa0\xa0\xa0:(Form event code=On Open Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The record #"+String(Selected record number([TheTable]))+" is double-clicked"\n\xa0\xa0\xa0\xa0:(Form event code=On Close Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="Going back to the output form"\n\xa0\xa0\xa0\xa0:(Form event code=On Activate)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The form\'s window has just become the frontmost window"\n\xa0\xa0\xa0\xa0:(Form event code=On Deactivate)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="The form\'s window is no longer the frontmost window"\n\xa0\xa0\xa0\xa0:(Form event code=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="A menu item has been chosen"\n\xa0\xa0\xa0\xa0:(Form event code=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="A call from another has been received"\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsTheEvent:="What\'s going on? Event #"+String(Form event)\n\xa0End case\n\xa0SET WINDOW TITLE($vsTheEvent)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["For examples on how to handle ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:(0,s.jsx)(n.code,{children:"On Before Keystroke"})})," and ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onAfterKeystroke",children:(0,s.jsx)(n.code,{children:"On After Keystroke"})})," events, see examples for the ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-edited-text",children:"Get edited text"}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/keystroke",children:"Keystroke"})," and ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"})," commands."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to treat clicks and double clicks in the same way in a scrollable area:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//asChoices scrollable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asChoices;...)\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=0\n\xa0\xa0\xa0\xa0:((Form event code=On Clicked)|(Form event code=On Double Clicked))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0//An item has been clicked, do something here\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3-1",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to treat clicks and double clicks using a different response. Note the use of the element zero for keeping track of the selected element:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//asChoices scrollable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asChoices;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices{0}:="0"\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#Num(asChoices))\n\xa0\xa0//A new item has been clicked, do something here\n\xa0\xa0//...\n\xa0\xa0//Save the new selected element for the next time\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices{0}:=String(asChoices)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=Num(asChoices{0})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Double Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0//An item has been double clicked, do something different here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,s.jsxs)(n.p,{children:["This example shows how to maintain a status text information area from within a form method, using the ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onGettingFocus",children:(0,s.jsx)(n.code,{children:"On Getting Focus"})})," and ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onLosingFocus",children:(0,s.jsx)(n.code,{children:"On Losing Focus"})})," events:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//[Contacts];"Data Entry" form method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var vtStatusArea : Text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:=""\n\xa0\xa0\xa0\xa0:(Form event code=On Getting Focus)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($vlTableNum#0)&($vlFieldNum#0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldNum=1)\xa0//Last name field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:="Enter the Last name of the Contact; it will be capitalized automatically"\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldNum=10)\xa0//Zip Code field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:="Enter a 5-digit zip code; it will be checked and validated automatically"\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Losing Focus)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:=""\n\xa0\xa0//...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-9",children:"Exemplo 9"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo mostra como responder a um evento de fecho de janela com um formul\xe1rio utilizado para a introdu\xe7\xe3o de dados de registo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method for an input form\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Close Box)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Modified record($vpFormTable->))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("This record has been modified. Save Changes?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ACCEPT\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CANCEL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CANCEL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-10",children:"Exemplo 10"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to capitalize a text or alphanumeric field each time its data source value is modified:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//[Contacts]First Name Object method\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-11",children:"Exemplo 11"}),"\n",(0,s.jsx)(n.p,{children:"The following example illustrates how to manage a deletion action in a hierarchical list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0...\xa0//method of hierarchical list\n:(Form event code=On Delete Action)\n\xa0ARRAY LONGINT($itemsArray;0)\n\xa0$Ref:=Selected list items(<>HL;$itemsArray;*)\n\xa0$n:=Size of array($itemsArray)\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($n=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("No item selected")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OK:=0\n\xa0\xa0\xa0\xa0:($n=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Do you want to delete this item?")\n\xa0\xa0\xa0\xa0:($n>1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Do you want to delete these items?")\n\xa0End case\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM LIST(<>HL;$itemsArray{$i};*)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-12",children:"Exemplo 12"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onScroll",children:(0,s.jsx)(n.code,{children:"On Scroll"})}),' form event allows us to synchronize the display of two pictures in a form. The following code is added in the "satellite" object method (picture field or variable):']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Scroll)\n\xa0\xa0// we take the position of the left picture\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)\n\xa0\xa0// and we apply it to the right picture\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)\n\xa0End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Result: ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YIRfsW1BmHE",children:"https://www.youtube.com/watch?v=YIRfsW1BmHE"})]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-13",children:"Exemplo 13"}),"\n",(0,s.jsx)(n.p,{children:"You want to draw a red rectangle around the selected cell of a list box, and you want the rectangle to move along with the list box if it is scrolled vertically by the user. In the list box object method, you can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";True)\xa0//initialize a red rectangle\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Scroll)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$toAdd:=LISTBOX Get headers height(*;"LB1")\xa0//height of the header so as not to overlap it\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($ylb1+$toAdd<$y1)&($ylb2>$y2)\xa0//if we are inside the list box\n\xa0\xa0//to keep it simple, we only handle headers\n\xa0\xa0//but we should handle horizontal clipping\n\xa0\xa0//as well as scroll bars\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"As a result, the red rectangle follows the scrolling of the list box:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(403621).Z+"",width:"1053",height:"253"})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/Events/overview",children:"Form Events"}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/current-form-table",children:"Current form table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/form-event",children:"FORM Event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-edited-text",children:"Get edited text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/keystroke",children:"Keystroke"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-timer",children:"SET TIMER"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},403621:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict1900395.en-569763c683cf0898d7abbac68fb6d734.png"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var t=o(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);