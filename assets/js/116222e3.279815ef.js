"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79063"],{349650:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/filter-keystroke","title":"FILTER KEYSTROKE","description":"FILTER KEYSTROKE ( filteredChar )","source":"@site/versioned_docs/version-20-R8/commands-legacy/filter-keystroke.md","sourceDirName":"commands-legacy","slug":"/commands/filter-keystroke","permalink":"/docs/commands/filter-keystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffilter-keystroke.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"filter-keystroke","title":"FILTER KEYSTROKE","slug":"/commands/filter-keystroke","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT ITEM","permalink":"/docs/commands/edit-item"},"next":{"title":"Get edited text","permalink":"/docs/commands/get-edited-text"}}'),s=n("785893"),a=n("250065");let o={id:"filter-keystroke",title:"FILTER KEYSTROKE",slug:"/commands/filter-keystroke",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," ( ",(0,s.jsx)(t.em,{children:"filteredChar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filteredChar"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Filtered keystroke character or Empty string to cancel the keystroke"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," enables you to replace the character entered by the user into a field or an enterable area with the first character of the string ",(0,s.jsx)(t.em,{children:"filteredChar"})," you pass."]}),"\n",(0,s.jsx)(t.p,{children:"If you pass an empty string, the keystroke is cancelled and ignored."}),"\n",(0,s.jsxs)(t.p,{children:["Usually, you will call ",(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," within a form or object method while handling an On Before Keystroke form event. To detect keystroke events, use the command ",(0,s.jsx)(t.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),". To obtain the actual keystroke, use the commands ",(0,s.jsx)(t.a,{href:"/docs/commands/keystroke",children:"Keystroke"})," or ",(0,s.jsx)(t.a,{href:"/docs/commands/get-edited-text",children:"Get edited text"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"IMPORTANT NOTE:"})," The command ",(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," allows you to cancel or replace the character entered by the user with another character. On the other hand, if you want to insert more than one character for a specific keystroke, remember that the text you see on the screen is NOT YET the value of the data source field or variable for the area being edited. The data source field or variable is assigned the entered value after the data entry for the area is validated. It is therefore up to you to \u201Cshadow\u201D the data entry into a variable and then to work with this shadow value and reassign the enterable area (see the example in this section). You can also use the ",(0,s.jsx)(t.a,{href:"/docs/commands/get-edited-text",children:"Get edited text"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["You will use the command ",(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," for:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Filtering characters in a customized way"}),"\n",(0,s.jsx)(t.li,{children:"Filtering data entry in a way that you cannot produce using data entry filters"}),"\n",(0,s.jsx)(t.li,{children:"Implement dynamic lookup or autocomplete areas"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WARNING:"})," If you call the command ",(0,s.jsx)(t.a,{href:"/docs/commands/keystroke",children:"Keystroke"})," after calling ",(0,s.jsx)(t.strong,{children:"FILTER KEYSTROKE"}),", the character you pass to this command is returned instead of the character actually entered."]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"Using the following code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//myObject enterable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0myObject:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;"0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("*")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsxs)(t.p,{children:["All the digits entered in the area ",(0,s.jsx)(t.em,{children:"myObject"})," are transformed into star characters."]}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"This code implements the behavior of a Password enterable area in which all the entered characters are replaced (on the screen) by random characters:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//vsPassword enterable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsPassword:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsActualPassword:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Handle keystroke(->vsPassword;->vsActualPassword)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE(Char(65+(Random%26)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsxs)(t.p,{children:["After the data entry is validated, you retrieve the actual password entered by the user in the variable ",(0,s.jsx)(t.em,{children:"vsActualPassword"}),". Note: The method Handle keystroke is listed in the Example section for the command Keystroke."]}),"\n",(0,s.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(t.p,{children:["In your application, you have some text areas into which you can enter a few sentences. Your application also includes a dictionary table of terms commonly used throughout your database. While editing your text areas, you would like to be able to quickly retrieve and insert dictionary entries based on the selected characters in a text area. You have two ways to do this:",(0,s.jsx)(t.br,{}),"\n- Provide some buttons with associated keys, or",(0,s.jsx)(t.br,{}),"\n- Intercept special keystrokes during the editing of the text area"]}),"\n",(0,s.jsx)(t.p,{children:"This example implements the second solution, based on the Help key."}),"\n",(0,s.jsx)(t.p,{children:"As explained above, during the editing of the text area, the data source for this area will be assigned the entered value after you validate the data entry. In order to retrieve and insert dictionary entries into the text area while this area is being edited, you therefore need to shadow the data entry. You pass pointers to the enterable area and the shadow variable as the first two parameters, and you pass a string of the \u201Cforbidden\u201D characters as the third parameter. No matter how the keystroke will be treated, the method returns the original keystroke. The \u201Cforbidden\u201D characters are those that you do not want to be inserted into the enterable area and you want to treat as special characters."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// Shadow keystroke project method\n\xa0\xa0// Shadow keystroke ( Pointer ; Pointer ; String ) -> String\n\xa0\xa0// Shadow keystroke ( -> srcArea ; -> curValue ; Filter ) -> Old keystroke\n#DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text\n\xa0var $vtNewValue : Text\n\xa0\xa0// Return the original keystroke\n\xa0$old:=Keystroke\n\xa0\xa0// Get the text selection range within the enterable area\n\xa0GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)\n\xa0\xa0// Start working with the current value\n\xa0$vtNewValue:=$curVal->\n\xa0\xa0// Depending on the key pressed or the character entered,\n\xa0\xa0// Perform the appropriate actions\n\xa0Case of\n\xa0\xa0// The Backspace (Delete) key has been pressed\n\xa0\xa0\xa0\xa0:(Character code($old)=Backspace)\n\xa0\xa0// Delete the selected characters or the character at the left of the text cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNewValue:=Delete text($vtNewValue;$vlStart;$vlEnd)\n\xa0\xa0// An Arrow key has been pressed\n\xa0\xa0// Do nothing, but accept the keystroke\n\xa0\xa0\xa0\xa0:(Character code($old)=Left arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Right arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Up arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Down arrow key)\n\xa0\n\xa0\xa0// An acceptable character has been entered\n\xa0\xa0\xa0\xa0:(Position($old;$filter)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNewValue:=Insert text($vtNewValue;$vlStart;$vlEnd;$0)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// The character is not accepted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0End case\n\xa0\xa0// Return the value for the next keystroke handling\n\xa0$curVal->:=$vtNewValue\n'})}),"\n",(0,s.jsx)(t.p,{children:"This method uses the two following submethods:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Delete text project method\n\xa0\xa0// Delete text ( String ; Long ; Long ) -> String\n\xa0\xa0// Delete text ( -> Text ; SelStart ; SelEnd ) -> New text\n#DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text\xa0\n\xa0$new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Insert text project method\n\xa0\xa0// Insert text ( String ; Long ; Long ; String ) -> String\n\xa0\xa0// Insert text ( -> srcText ; SelStart ; SelEnd ; Text to insert ) -> New text\n#DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text\xa0\n\xa0$new:=$src\n\xa0If($start # $end)\n\xa0\xa0\xa0\xa0$new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)\n\xa0Else\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($start<=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=$toInsert+$new\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($start>Length($new))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=$new+$toInsert\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$start)\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n"})}),"\n",(0,s.jsx)(t.p,{children:"After you have added these project methods to your project, you can use them in this way:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// vsDescription enterable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsDescription:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsShadowDescription:=""\n\xa0\xa0// Establish the list of the \u201Cforbidden\u201D characters to be treated as special keys\n\xa0\xa0// ( here, in this example, only the Help Key is filtered)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsSpecialKeys:=Char(HelpKey)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsKey:=Shadow keystroke(->vsDescription;->vsShadowDescription;vsSpecialKeys)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Character code($vsKey)=Help key)\n\xa0\xa0// Do something when the Help key is pressed\n\xa0\xa0// Here, in this example, a Dictionary entry must be searched and inserted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0LOOKUP DICTIONARY(->vsDescription;->vsShadowDescription)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,s.jsx)(t.p,{children:"The LOOKUP DICTIONARY project method is listed below. Its purpose is to use the shadow variable for reassigning the enterable area being edited:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// LOOKUP DICTIONARY project method\n\xa0\xa0// LOOKUP DICTIONARY ( Pointer ; Pointer )\n\xa0\xa0// LOOKUP DICTIONARY ( -> Enterable Area ; ->ShadowVariable )\n\xa0\n#DECLARE ($area : Pointer ; $shadow : Pointer)\n\xa0var $vlStart;$vlEnd : Integer\n\xa0\n\xa0\xa0// Get the text selection range within the enterable area\n\xa0GET HIGHLIGHT($area->;$vlStart;$vlEnd)\n\xa0\xa0// Get the selected text or the word on the left of the text cursor\n\xa0$vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)\n\xa0\xa0// Is there something to look for?\n\xa0If($vtHighlightedText#"")\n\xa0\xa0// If the text selection was the text cursor,\n\xa0\xa0// the selection now starts at the word preceeding the text cursor\n\xa0\xa0\xa0\xa0If($vlStart=$vlEnd)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlStart:=$vlStart-Length($vtHighlightedText)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Look for the first available dictionary entry\n\xa0\xa0\xa0\xa0QUERY([Dictionary];[Dictionary]Entry=$vtHighlightedText+"@")\n\xa0\xa0// Is there one?\n\xa0\xa0\xa0\xa0If(Records in selection([Dictionary])>0)\n\xa0\xa0// If so, insert it in the shadow text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$shadow->:=Insert text($shadow->;$vlStart;$vlEnd;[Dictionary]Entry)\n\xa0\xa0// Copy the shadow text to the enterable being edited\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$area->:=$shadow->\n\xa0\xa0// Set the selection just after the insert dictionary entry\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlEnd:=$vlStart+Length([Dictionary]Entry)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(vsComments;$vlEnd;$vlEnd)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// There is no corresponding entry in the Dictionary\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0// There is no highlighted text\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.p,{children:"The Get highlighted text method is listed here:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// Get highlighted text project method\n\xa0\xa0// Get highlighted text ( String ; Long ; Long ) -> String\n\xa0\xa0// Get highlighted text ( Text ; SelStart ; SelEnd ) -> highlighted text\n#DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text\n\xa0If($start<$end)\n\xa0\xa0\xa0\xa0$highlight:=Substring($text;$start;$end-$start)\n\xa0Else\n\xa0\xa0\xa0\xa0$highlight:=""\n\xa0\xa0\xa0\xa0$start:=$start-1\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($start>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position($text[[$start]];" \xa0,.!?:;()-_\u2013\u2014")=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$highlight:=$text[[$start]]+$highlight\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$start:=$start-1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$start:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until($start=0)\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/get-edited-text",children:"Get edited text"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/is-editing-text",children:"Is editing text"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/keystroke",children:"Keystroke"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"389"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var r=n(667294);let s={},a=r.createContext(s);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);