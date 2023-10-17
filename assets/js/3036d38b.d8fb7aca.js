"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27469],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});a(667294);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"propertiesWebArea",title:"Web Area"},i=void 0,s={unversionedId:"FormObjects/propertiesWebArea",id:"version-20-R2/FormObjects/propertiesWebArea",title:"Web Area",description:"---",source:"@site/versioned_docs/version-20-R2/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/docs/20-R2/FormObjects/propertiesWebArea",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_WebArea.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"propertiesWebArea",title:"Web Area"},sidebar:"docs",previous:{title:"Text and Picture",permalink:"/docs/20-R2/FormObjects/propertiesTextAndPicture"},next:{title:"Form Events",permalink:"/docs/20-R2/Events/overview"}},d={},p=[{value:"Access 4D methods",id:"access-4d-methods",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Progression",id:"progression",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4},{value:"URL",id:"url",level:2},{value:"URL Variable and WA OPEN URL command",id:"url-variable-and-wa-open-url-command",level:3},{value:"JSON Grammar",id:"json-grammar-2",level:4},{value:"Objects Supported",id:"objects-supported-2",level:4},{value:"Use embedded Web rendering engine",id:"use-embedded-web-rendering-engine",level:2},{value:"JSON Grammar",id:"json-grammar-3",level:4},{value:"Objects Supported",id:"objects-supported-3",level:4}],m={toc:p};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"access-4d-methods"}),"Access 4D methods"),(0,r.kt)("p",null,'You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all"). '),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This property is only available if the Web area ",(0,r.kt)("a",n({parentName:"p"},{href:"#use-embedded-web-rendering-engine"}),"uses the embedded Web rendering engine"),".")),(0,r.kt)("p",null,"When this property is on, a special JavaScript object named ",(0,r.kt)("inlineCode",{parentName:"p"},"$4d")," is instantiated in the Web area, which you can ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview#4d-object"}),"use to manage calls to 4D project methods"),". "),(0,r.kt)("h4",n({},{id:"json-grammar"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodsAccessibility"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"none" (default), "all"')))),(0,r.kt)("h4",n({},{id:"objects-supported"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview"}),"Web Area")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"progression"}),"Progression"),(0,r.kt)("p",null,"Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As of 4D v19 R5, this variable is only updated on Windows if the Web area ",(0,r.kt)("a",n({parentName:"p"},{href:"#use-embedded-web-rendering-engine"}),"uses the embedded Web rendering engine"),".")),(0,r.kt)("h4",n({},{id:"json-grammar-1"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"progressSource"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Name of a Longint variable")))),(0,r.kt)("h4",n({},{id:"objects-supported-1"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview"}),"Web Area")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"url"}),"URL"),(0,r.kt)("p",null,"A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area."),(0,r.kt)("li",{parentName:"ul"},"Any browsing done within the Web area will automatically update the contents of the variable.")),(0,r.kt)("p",null,"Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area."),(0,r.kt)("h3",n({},{id:"url-variable-and-wa-open-url-command"}),"URL Variable and WA OPEN URL command"),(0,r.kt)("p",null,"The URL variable produces the same effects as the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," command. The following differences should nevertheless be noted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). The ',(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," command accepts both notations."),(0,r.kt)("li",{parentName:"ul"},"If the URL variable contains an empty string, the Web area does not attempt to load the URL. The ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," command generates an error in this case."),(0,r.kt)("li",{parentName:"ul"},'If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the ',(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," command."),(0,r.kt)("li",{parentName:"ul"},"When the Web area is not displayed in the form (when it is located on another page of the form), executing the ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.")),(0,r.kt)("h4",n({},{id:"json-grammar-2"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"urlSource"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A URL.")))),(0,r.kt)("h4",n({},{id:"objects-supported-2"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview"}),"Web Area")),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"use-embedded-web-rendering-engine"}),"Use embedded Web rendering engine"),(0,r.kt)("p",null,"This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"unchecked")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON value: system"),' (default): In this case, 4D uses the "best" engine corresponding to the system. This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between platforms. On Windows, 4D uses Microsoft Edge WebView2. On macOS, 4D uses the current version of WebKit (Safari).')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel. ')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"checked")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON value: embedded"),": In this case, 4D uses the Chromium Embedded Framework (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are regularly provided through 4D.")),(0,r.kt)("p",null,"The CEF engine has the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1037.html"}),"WA SET PAGE CONTENT"),": using this command requires that at least one page is already loaded in the area (through a call to ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"WA OPEN URL"))," or an assignment to the URL variable associated to the area)."),(0,r.kt)("li",{parentName:"ul"},"When URL drops are enabled by the ",(0,r.kt)("inlineCode",{parentName:"li"},"WA enable URL drop")," selector of the ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1041.html"}),"WA SET PREFERENCE")," command, the first drop must be preceded by at least one call to ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),"WA OPEN URL")," or one assignment to the URL variable associated to the area.")),(0,r.kt)("h4",n({},{id:"json-grammar-3"}),"JSON Grammar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Data Type"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Possible Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"webEngine"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"embedded", "system"')))),(0,r.kt)("h4",n({},{id:"objects-supported-3"}),"Objects Supported"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview"}),"Web Area")))}c.isMDXComponent=!0}}]);