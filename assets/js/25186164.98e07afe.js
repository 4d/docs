"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97306],{630588:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"WebFormClass",title:"WebForm"},d=void 0,l={id:"API/WebFormClass",title:"WebForm",description:"The WebForm class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the Qodly documentation.",source:"@site/versioned_docs/version-20-R5/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/20-R5/API/WebFormClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/20-R5/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/20-R5/API/WebFormItemClass"}},o={},c=[{value:"Commands and functions",id:"commands-and-functions",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Description",id:"description",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"Description",id:"description-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4},{value:".setError()",id:"seterror",level:3},{value:"Description",id:"description-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Description",id:"description-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Description",id:"description-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Description",id:"description-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Description",id:"description-7",level:4}];function h(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WebForm"})," class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass",children:"Qodly documentation"}),"."]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R6"}),(0,t.jsx)(n.td,{children:"Added enableState() and disableState()"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R2"}),(0,t.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"commands-and-functions",children:"Commands and functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:["[",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".componentName"})})," : ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebFormItemClass",children:"4D.WebFormItem"}),"](#componentname)",(0,t.jsx)(n.br,{}),"objects that are available directly as properties"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#disablestate",children:[(0,t.jsx)(n.strong,{children:".disableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string)"]}),(0,t.jsx)(n.br,{}),"disables the rendering of the ",(0,t.jsx)(n.em,{children:"state"})," in the current web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#enablestate",children:[(0,t.jsx)(n.strong,{children:".enableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string )"]}),(0,t.jsx)(n.br,{}),"enables the rendering of the ",(0,t.jsx)(n.em,{children:"state"})," in the current web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#seterror",children:[(0,t.jsx)(n.strong,{children:".setError"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"sends ",(0,t.jsx)(n.em,{children:"msg"})," as an error message to the web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#setmessage",children:[(0,t.jsx)(n.strong,{children:".setMessage"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"sends ",(0,t.jsx)(n.em,{children:"msg"})," as an information message to the web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#setwarning",children:[(0,t.jsx)(n.strong,{children:".setWarning"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),(0,t.jsx)(n.br,{}),"sends ",(0,t.jsx)(n.em,{children:"msg"})," as a warning message to the web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#web-form",children:[(0,t.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),(0,t.jsx)(n.br,{})," returns a ",(0,t.jsx)(n.code,{children:"4D.WebForm"})," proxy object that allows you to interact with the web form"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#web-event",children:[(0,t.jsx)(n.strong,{children:"Web Event"})," : object"]}),(0,t.jsx)(n.br,{}),"returns an object with information on a triggered event linked to a webform component"]})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"componentname",children:(0,t.jsx)(n.em,{children:".componentName"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:".componentName"})})," : ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebFormItemClass",children:"4D.WebFormItem"})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The components of webforms are objects that are available directly as properties of these webforms."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname",children:[(0,t.jsx)(n.code,{children:".componentName"})," description in the Qodly documentation"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"disablestate",children:".disableState()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".disableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"state"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Name of state to disable from the web form"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".disableState()"})," function disables the rendering of the ",(0,t.jsx)(n.em,{children:"state"})," in the current web form."]}),"\n",(0,t.jsx)(n.p,{children:"This function does nothing if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.em,{children:"state"})," is currently not enabled in the web form,"]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.em,{children:"state"})," does not exist for the web form."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you ",(0,t.jsx)(n.a,{href:"#enablestate",children:"enable"})," or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on web form states, please refer to ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"enablestate",children:".enableState()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".enableState"}),"( ",(0,t.jsx)(n.em,{children:"state"})," : string )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"state"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Name of state to enable on the web form"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".enableState()"})," function enables the rendering of the ",(0,t.jsx)(n.em,{children:"state"})," in the current web form."]}),"\n",(0,t.jsx)(n.p,{children:"This function does nothing if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.em,{children:"state"})," has already been enabled on the web form,"]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.em,{children:"state"})," does not exist for the web form."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you enable or ",(0,t.jsx)(n.a,{href:"#disablestate",children:"disable"})," several states within the same user function, all modifications are sent at the same time to the client once the function ends."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information on web form states, please refer to ",(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:'You enable a specific state named "wrongCredentials" in case of error in your login page:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Function authenticationError()\n\tIf (Session.info.type#"remote")\n\t\tWeb Form.enableState("wrongCredentials")\n\tEnd if\n'})}),"\n",(0,t.jsx)(n.h3,{id:"seterror",children:".setError()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setError"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Error message to display in the web form"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".setError()"})," function sends ",(0,t.jsx)(n.em,{children:"msg"})," as an error message to the web form."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror",children:[(0,t.jsx)(n.code,{children:".setError()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setmessage",children:".setMessage()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setMessage"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Information message to display in the web form"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".setMessage()"})," function sends ",(0,t.jsx)(n.em,{children:"msg"})," as an information message to the web form."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage",children:[(0,t.jsx)(n.code,{children:".setMessage()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"setwarning",children:".setWarning()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".setWarning"}),"( ",(0,t.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"msg"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Warning message to display in the web form"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".setWarning()"})," function  sends ",(0,t.jsx)(n.em,{children:"msg"})," as a warning message to the web form."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning",children:[(0,t.jsx)(n.code,{children:".setWarning()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"web-form",children:"Web Form"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.WebForm"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsxs)(n.td,{children:["New ",(0,t.jsx)(n.code,{children:"WebForm"})," proxy object"]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Web Form"})," command  returns a ",(0,t.jsx)(n.code,{children:"4D.WebForm"})," proxy object that allows you to interact with the web form."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webform",children:[(0,t.jsx)(n.code,{children:"webForm"})," command description in the Qodly documentation"]}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"web-event",children:"Web Event"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Web Event"})," : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"object"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Web Event"})," command returns an object with information on a triggered event linked to a webform component."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to the ",(0,t.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent",children:[(0,t.jsx)(n.code,{children:"webEvent"})," command description in the Qodly documentation"]}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);