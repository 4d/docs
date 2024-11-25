"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44567"],{69707:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>l});var r=JSON.parse('{"id":"Events/onAfterEdit","title":"On After Edit","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R7/Events/onAfterEdit.md","sourceDirName":"Events","slug":"/Events/onAfterEdit","permalink":"/docs/Events/onAfterEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onAfterEdit","title":"On After Edit"},"sidebar":"docs","previous":{"title":"On Activate","permalink":"/docs/Events/onActivate"},"next":{"title":"On After Keystroke","permalink":"/docs/Events/onAfterKeystroke"}}'),i=t("785893"),d=t("250065");let l={id:"onAfterEdit",title:"On After Edit"},s=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"General case",id:"general-case",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Example",id:"example",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Can be called by"}),(0,i.jsx)(n.th,{children:"Definition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"45"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/FormObjects/viewProAreaOverview",children:"4D View Pro area"})," - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,i.jsx)(n.td,{children:"The contents of the enterable object that has the focus has just been modified"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h3,{id:"general-case",children:"General case"}),"\n",(0,i.jsx)(n.p,{children:"This event can be used filter the data entry in keyboard enterable objects at the lowest level."}),"\n",(0,i.jsxs)(n.p,{children:["When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, ",(0,i.jsx)(n.em,{children:"i.e."}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Standard editing actions which modify content like paste, cut, delete or cancel;"}),"\n",(0,i.jsx)(n.li,{children:"Dropping a value (action similar to paste);"}),"\n",(0,i.jsxs)(n.li,{children:["Any keyboard entry made by the user; in this case, the ",(0,i.jsx)(n.code,{children:"On After Edit"})," event is generated after the ",(0,i.jsx)(n.a,{href:"/docs/Events/onBeforeKeystroke",children:(0,i.jsx)(n.code,{children:"On Before Keystroke"})})," and ",(0,i.jsx)(n.a,{href:"/docs/Events/onAfterKeystroke",children:(0,i.jsx)(n.code,{children:"On After Keystroke"})})," events, if they are used."]}),"\n",(0,i.jsxs)(n.li,{children:["Any modification made using a language command that simulates a user action (i.e., ",(0,i.jsx)(n.code,{children:"POST KEY"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Within the ",(0,i.jsx)(n.code,{children:"On After Edit"})," event, text data being entered is returned by the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page655.html",children:(0,i.jsx)(n.code,{children:"Get edited text"})})," command."]}),"\n",(0,i.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,i.jsxs)(n.p,{children:["The object returned by the ",(0,i.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsx)(n.td,{children:"On After Edit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"On After Edit"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheetName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Depending on the ",(0,i.jsx)(n.code,{children:"action"})," property value, the ",(0,i.jsx)(n.a,{href:"/docs/Events/overview#event-object",children:"event object"})," will contain additional properties."]}),"\n",(0,i.jsx)(n.h4,{id:"action--editchange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Cell range"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"editingText"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"The value from the current editor"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--valuechanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Cell range"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oldValue"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"Value of cell before change"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newValue"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"Value of cell after change"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--dragdropblock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Range of source cell range (being dragged)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"toRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Range of the destination cell range (drop location)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"copy"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Specifies if the source range is copied or not"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"insert"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Specifies if the source range is inserted or not"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--dragfillblock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fillRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Range used for fill"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoFillType"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsxs)(n.td,{children:["Value used for the fill.",(0,i.jsx)(n.li,{children:"0: Cells are filled with all data (values, formatting, and formulas)"}),(0,i.jsx)(n.li,{children:"1: Cells are filled with automatically sequential data"}),(0,i.jsx)(n.li,{children:"2: Cells are filled with formatting only"}),(0,i.jsx)(n.li,{children:"3: Cells are filled with values but not formatting"}),(0,i.jsx)(n.li,{children:"4: Values are removed from the cells"}),(0,i.jsx)(n.li,{children:"5: Cells are filled automatically"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fillDirection"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsxs)(n.td,{children:["Direction of the fill.",(0,i.jsx)(n.li,{children:"0: The cells to the left are filled"}),(0,i.jsx)(n.li,{children:"1: The cells to the right are filled"}),(0,i.jsx)(n.li,{children:"2: The cells above are filled"}),(0,i.jsx)(n.li,{children:"3: The cells below are filled"})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--formulachanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Cell range"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formula"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"The formula entered"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--clipboardpasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Cell range"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pasteOption"}),(0,i.jsx)(n.td,{children:"longint"}),(0,i.jsxs)(n.td,{children:["Specifies what is pasted from the clipboard:",(0,i.jsx)(n.li,{children:"0: Everything is pasted (values, formatting, and formulas)"}),(0,i.jsx)(n.li,{children:"1: Only values are pasted"}),(0,i.jsx)(n.li,{children:"2: Only the formatting is pasted"}),(0,i.jsx)(n.li,{children:"3: Only formulas are pasted"}),(0,i.jsx)(n.li,{children:"4: Values and formatting are pasted (not formulas)"}),(0,i.jsx)(n.li,{children:"5: Formulas and formatting are pasted (not values)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pasteData"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["The data from the clipboard to be pasted",(0,i.jsx)(n.li,{children:'"text" (text): The text from the clipboard'}),(0,i.jsx)(n.li,{children:'"html" (text): The HTML from the clipboard'})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example handling an ",(0,i.jsx)(n.code,{children:"On After Edit"})," event:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"The above example could generate an event object like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var r=t(667294);let i={},d=r.createContext(i);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);