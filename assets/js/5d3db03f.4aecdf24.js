"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93200],{997519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(474848),r=t(28453);const o={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/form-event",title:"FORM Event",description:"FORM Event -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/form-event.md",sourceDirName:"commands-legacy",slug:"/commands/form-event",permalink:"/docs/commands/form-event",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXECUTE METHOD IN SUBFORM",permalink:"/docs/commands/execute-method-in-subform"},next:{title:"Form event code",permalink:"/docs/commands/form-event-code"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Event object"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred. Usually, you will use ",(0,s.jsx)(n.strong,{children:"FORM Event"})," from within a form or object method."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returned object"})}),"\n",(0,s.jsx)(n.p,{children:"Each returned object includes the following main properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Name of the object triggering the event - Not included if the event is triggered by the form"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"longint"}),(0,s.jsxs)(n.td,{children:["Numeric value of the form event. See ",(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Name of the form event (",(0,s.jsx)(n.em,{children:"e.g."}),' "On After Edit").']})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"For example, in the case of a click on a button, the object contains the following properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The event object can contain additional properties, depending on the object for which the event occurs. For ",(0,s.jsx)(n.em,{children:"eventObj"})," objects generated on:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["List box or list box column objects, see the ",(0,s.jsx)(n.em,{children:"list box documentation on developer.4d.com"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["4D View Pro areas, see ",(0,s.jsx)(n.em,{children:"On VP Ready form event"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If there is no current event, ",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns a null object."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to handle the On Clicked event on a button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"If you set the column object name with a real attribute name of a dataclass like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(985069).A+"",width:"431",height:"268"})}),"\n",(0,s.jsx)(n.p,{children:"You can sort the column using the On Header Click event:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["You want to handle the On Display Details on a list box object with a method set in the ",(0,s.jsx)(n.em,{children:"Meta info expression"})," property:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(68972).A+"",width:"422",height:"84"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"setColor"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=FORM Event\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting list box when rows are selected:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(47939).A+"",width:"632",height:"368"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},47939:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},68972:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},985069:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(296540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);