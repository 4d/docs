/*! For license information please see e1571330.2982fda1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93896],{309331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(474848),s=t(28453);const a={id:"propertiesWebArea",title:"Web Area"},i=void 0,o={id:"FormObjects/propertiesWebArea",title:"Web Area",description:"---",source:"@site/versioned_docs/version-19/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/docs/19/FormObjects/propertiesWebArea",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_WebArea.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"propertiesWebArea",title:"Web Area"},sidebar:"docs",previous:{title:"Text and Picture",permalink:"/docs/19/FormObjects/propertiesTextAndPicture"},next:{title:"Overview",permalink:"/docs/19/Events/overview"}},d={},l=[{value:"Access 4D methods",id:"access-4d-methods",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Progression",id:"progression",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"URL",id:"url",level:2},{value:"URL Variable and WA OPEN URL command",id:"url-variable-and-wa-open-url-command",level:3},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Use embedded Web rendering engine",id:"use-embedded-web-rendering-engine",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"access-4d-methods",children:"Access 4D methods"}),"\n",(0,r.jsx)(n.p,{children:'You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This property is only available if the Web area ",(0,r.jsx)(n.a,{href:"#use-embedded-web-rendering-engine",children:"uses the embedded Web rendering engine"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When this property is on, a special JavaScript object named ",(0,r.jsx)(n.code,{children:"$4d"})," is instantiated in the Web area, which you can ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/webAreaOverview#4d-object",children:"use to manage calls to 4D project methods"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"json-grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodsAccessibility"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"none" (default), "all"'})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objects-supported",children:"Objects Supported"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"progression",children:"Progression"}),"\n",(0,r.jsx)(n.p,{children:"Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually."}),"\n",(0,r.jsx)(n.h4,{id:"json-grammar-1",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"progressSource"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Name of a Longint variable"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objects-supported-1",children:"Objects Supported"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:"A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area."}),"\n",(0,r.jsx)(n.li,{children:"Any browsing done within the Web area will automatically update the contents of the variable."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area."}),"\n",(0,r.jsx)(n.h3,{id:"url-variable-and-wa-open-url-command",children:"URL Variable and WA OPEN URL command"}),"\n",(0,r.jsxs)(n.p,{children:["The URL variable produces the same effects as the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," command. The following differences should nevertheless be noted:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). The ',(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," command accepts both notations."]}),"\n",(0,r.jsxs)(n.li,{children:["If the URL variable contains an empty string, the Web area does not attempt to load the URL. The ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," command generates an error in this case."]}),"\n",(0,r.jsxs)(n.li,{children:['If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the ',(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:["When the Web area is not displayed in the form (when it is located on another page of the form), executing the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," command has no effect, whereas assigning a value to the URL variable can be used to update the current URL."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"json-grammar-2",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"urlSource"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"A URL."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objects-supported-2",children:"Objects Supported"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"}),"\n",(0,r.jsx)(n.p,{children:"This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"unchecked"})," - ",(0,r.jsx)(n.code,{children:"JSON value: system"}),' (default): In this case, 4D uses the "best" engine corresponding to the system. On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari).\nThis means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and WebKit ones.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"checked"})," - ",(0,r.jsx)(n.code,{children:"JSON value: embedded"}),": In this case, 4D uses Blink engine from Google (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The Blink engine has the following limitations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html",children:"WA SET PAGE CONTENT"}),": using this command requires that at least one page is already loaded in the area (through a call to ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html",children:"WA OPEN URL"})," or an assignment to the URL variable associated to the area)."]}),"\n",(0,r.jsxs)(n.li,{children:["When URL drops are enabled by the ",(0,r.jsx)(n.code,{children:"WA enable URL drop"})," selector of the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html",children:"WA SET PREFERENCE"})," command, the first drop must be preceded by at least one call to ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html",children:"WA OPEN URL"})," or one assignment to the URL variable associated to the area."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"json-grammar-3",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"webEngine"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"embedded", "system"'})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objects-supported-3",children:"Objects Supported"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,a={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:c,props:a,_owner:o.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(296540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);