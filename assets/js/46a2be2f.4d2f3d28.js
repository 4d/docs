"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50533"],{523631:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"API/WebFormClass","title":"WebForm","description":"The WebForm class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the Qodly documentation.","source":"@site/versioned_docs/version-20-R6/API/WebFormClass.md","sourceDirName":"API","slug":"/API/WebFormClass","permalink":"/docs/20-R6/API/WebFormClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"WebFormClass","title":"WebForm"},"sidebar":"docs","previous":{"title":"SystemWorker","permalink":"/docs/20-R6/API/SystemWorkerClass"},"next":{"title":"WebFormItem","permalink":"/docs/20-R6/API/WebFormItemClass"}}'),r=s("785893"),i=s("250065");let d={id:"WebFormClass",title:"WebForm"},l=void 0,o={},c=[{value:"Commands and functions",id:"commands-and-functions",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Description",id:"description",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"Description",id:"description-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4},{value:".setError()",id:"seterror",level:3},{value:"Description",id:"description-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Description",id:"description-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Description",id:"description-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Description",id:"description-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Description",id:"description-7",level:4}];function h(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"WebForm"})," class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass",children:"Qodly documentation"}),"."]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"Added enableState() and disableState()"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"commands-and-functions",children:"Commands and functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/WebFormItemClass",children:"4D.WebFormItem"}),"](#componentname)",(0,r.jsx)(n.br,{}),"objects that are available directly as properties"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#disablestate",children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),(0,r.jsx)(n.br,{}),"disables the rendering of the ",(0,r.jsx)(n.em,{children:"state"})," in the current web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#enablestate",children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),(0,r.jsx)(n.br,{}),"enables the rendering of the ",(0,r.jsx)(n.em,{children:"state"})," in the current web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#seterror",children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"sends ",(0,r.jsx)(n.em,{children:"msg"})," as an error message to the web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setmessage",children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"sends ",(0,r.jsx)(n.em,{children:"msg"})," as an information message to the web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setwarning",children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"sends ",(0,r.jsx)(n.em,{children:"msg"})," as a warning message to the web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-form",children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),(0,r.jsx)(n.br,{})," returns a ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," proxy object that allows you to interact with the web form"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-event",children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),(0,r.jsx)(n.br,{}),"returns an object with information on a triggered event linked to a webform component"]})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"componentname",children:(0,r.jsx)(n.em,{children:".componentName"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/20-R6/API/WebFormItemClass",children:"4D.WebFormItem"})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The components of webforms are objects that are available directly as properties of these webforms."}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname",children:[(0,r.jsx)(n.code,{children:".componentName"})," description in the Qodly documentation"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"disablestate",children:".disableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Name of state to disable from the web form"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".disableState()"})," function disables the rendering of the ",(0,r.jsx)(n.em,{children:"state"})," in the current web form."]}),"\n",(0,r.jsx)(n.p,{children:"This function does nothing if:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"state"})," is currently not enabled in the web form,"]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"state"})," does not exist for the web form."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you ",(0,r.jsx)(n.a,{href:"#enablestate",children:"enable"})," or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on web form states, please refer to ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/pageLoaders/states",children:"developer.qodly.com"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"enablestate",children:".enableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Name of state to enable on the web form"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".enableState()"})," function enables the rendering of the ",(0,r.jsx)(n.em,{children:"state"})," in the current web form."]}),"\n",(0,r.jsx)(n.p,{children:"This function does nothing if:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"state"})," has already been enabled on the web form,"]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"state"})," does not exist for the web form."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you enable or ",(0,r.jsx)(n.a,{href:"#disablestate",children:"disable"})," several states within the same user function, all modifications are sent at the same time to the client once the function ends."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on web form states, please refer to ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/pageLoaders/states",children:"developer.qodly.com"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'You enable a specific state named "wrongCredentials" in case of error in your login page:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Function authenticationError()\n	If (Session.info.type#"remote")\n		Web Form.enableState("wrongCredentials")\n	End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"seterror",children:".setError()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Error message to display in the web form"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setError()"})," function sends ",(0,r.jsx)(n.em,{children:"msg"})," as an error message to the web form."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror",children:[(0,r.jsx)(n.code,{children:".setError()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setmessage",children:".setMessage()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Information message to display in the web form"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setMessage()"})," function sends ",(0,r.jsx)(n.em,{children:"msg"})," as an information message to the web form."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage",children:[(0,r.jsx)(n.code,{children:".setMessage()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setwarning",children:".setWarning()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Warning message to display in the web form"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setWarning()"})," function  sends ",(0,r.jsx)(n.em,{children:"msg"})," as a warning message to the web form."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning",children:[(0,r.jsx)(n.code,{children:".setWarning()"})," description in the Qodly documentation"]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"web-form",children:"Web Form"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"4D.WebForm"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["New ",(0,r.jsx)(n.code,{children:"WebForm"})," proxy object"]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Web Form"})," command  returns a ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," proxy object that allows you to interact with the web form."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webform",children:[(0,r.jsx)(n.code,{children:"webForm"})," command description in the Qodly documentation"]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"web-event",children:"Web Event"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"object"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Web Event"})," command returns an object with information on a triggered event linked to a webform component."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent",children:[(0,r.jsx)(n.code,{children:"webEvent"})," command description in the Qodly documentation"]}),"."]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);