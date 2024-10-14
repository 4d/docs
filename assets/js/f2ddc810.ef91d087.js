"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86089],{580633:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(474848),t=r(28453);const c={id:"vp-run-offscreen-area",title:"VP Run offscreen area"},d=void 0,i={id:"ViewPro/commands/vp-run-offscreen-area",title:"VP Run offscreen area",description:"VP Run offscreen area ( parameters Mixed",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-run-offscreen-area.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-run-offscreen-area",permalink:"/docs/20-R5/ViewPro/commands/vp-run-offscreen-area",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-run-offscreen-area.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-run-offscreen-area",title:"VP Run offscreen area"},sidebar:"docs",previous:{title:"VP ROW AUTOFIT",permalink:"/docs/20-R5/ViewPro/commands/vp-row-autofit"},next:{title:"S",permalink:"/docs/20-R5/commands/S"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Run offscreen area"})," ( ",(0,s.jsx)(n.em,{children:"parameters"})," : Object) : Mixed"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parameters"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Object containing the offscreen area's attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Mixed"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:".result"})," property of the ",(0,s.jsx)(n.code,{children:".onEvent"})," object, or Null if does not return a value"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"})," command creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"parameters"})," object, pass any of the following optional properties. These properties will be available through the ",(0,s.jsx)(n.code,{children:"This"})," command within the ",(0,s.jsx)(n.code,{children:"onEvent"})," method and reference the instance:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., "OffscreenArea1").'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onEvent"}),(0,s.jsx)(n.td,{children:"object (formula)"}),(0,s.jsxs)(n.td,{children:["A callback method that will be launched when the offscreen area is ready. It can be either:",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.code,{children:"onEvent"})," function of a class, or"]}),(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"Formula"})," object"]}),"By default, the callback method is called on the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onVpReady",children:(0,s.jsx)(n.code,{children:"On VP Ready"})}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onLoad",children:(0,s.jsx)(n.code,{children:"On Load"})}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onUnload",children:(0,s.jsx)(n.code,{children:"On Unload"})}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onVpRangeChanged",children:(0,s.jsx)(n.code,{children:"On VP Range Changed"})}),", or ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onTimer",children:(0,s.jsx)(n.code,{children:"On Timer"})})," events. The callback method can be used to access the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/ViewPro/configuring#4d-view-pro-form-object-variable",children:"4D View Pro form object variable"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autoQuit"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True (default value) if the command must stop the formula execution when the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})})," or ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})})," events occur. If false, you must use the ",(0,s.jsx)(n.code,{children:"CANCEL"})," or ",(0,s.jsx)(n.code,{children:"ACCEPT"})," commands in the ",(0,s.jsx)(n.em,{children:"onEvent"})," callback method."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result"}),(0,s.jsx)(n.td,{children:"mixed"}),(0,s.jsx)(n.td,{children:"Result of the processing (if any)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<customProperty>"})}),(0,s.jsx)(n.td,{children:"mixed"}),(0,s.jsxs)(n.td,{children:["Any custom attribute to be available in the ",(0,s.jsx)(n.em,{children:"onEvent"})," callback method."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The following property is automatically added by the command if necessary:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeoutReached"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Added with true value if timeout has been exceeded"})]})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The offscreen area is only available during the execution of the ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"})," command. It will automatically be destroyed once execution has ended."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following commands can be used in the callback method:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ACCEPT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"CANCEL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET TIMER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA Evaluate JavaScript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to create an offscreen 4D View Pro area and get the value of a cell:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// cs.OffscreenArea class declaration \nClass constructor ($path : Text)\n This.filePath:=$path\n \n// This function will be called on each event of the offscreen area \nFunction onEvent()\n Case of\n  :(FORM Event.code=On VP Ready)\n      VP IMPORT DOCUMENT(This.area;This.filePath)\n       This.result:=VP Get value(VP Cell(This.area;6;22))\n \n       ALERT("The G23 cell contains the value: "+String(This.result))\n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"OffscreenArea"})," callback method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//cs.OffscreenArea class declaration\nClass constructor($pdfPath : Text)\n This.pdfPath:=$pdfPath\n This.autoQuit:=False\n This.isWaiting:=False\n \nFunction onEvent()\n Case of\n     :(FORM Event.code=On VP Ready)\n // Document import\n   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)\n         This.isWaiting:=True\n \n // Start a timer to verify if all calculations are finished.\n // If during this period the "On VP Range Changed" is thrown, the timer will be restarted\n // The time must be defined according to the computer configuration.\n   SET TIMER(60)\n \n  :(FORM Event.code=On VP Range Changed)\n // End of calculation detected. Restarts the timer\n         If(This.isWaiting)\n           SET TIMER(60)\n         End if\n \n  :(FORM Event.code=On Timer)\n // To be sure to not restart the timer if you call others 4D View command after this point\n         This.isWaiting:=False\n \n\n\n // Stop the timer\n   SET TIMER(0)\n \n // Start the PDF export\n        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))\n \n     :(FORM Event.code=On URL Loading Error)\n\n         CANCEL \n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"OffscreenArea"})," callback method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n \n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-end-of-document-loading/",children:"Blog post: End of document loading"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);