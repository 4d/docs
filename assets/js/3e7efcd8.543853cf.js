/*! For license information please see 3e7efcd8.543853cf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51586],{55296:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(474848),t=r(28453);const i={id:"webAreaOverview",title:"Web Area"},o=void 0,a={id:"FormObjects/webAreaOverview",title:"Web Area",description:"Overview",source:"@site/versioned_docs/version-18/FormObjects/webArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/webAreaOverview",permalink:"/docs/18/FormObjects/webAreaOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"webAreaOverview",title:"Web Area"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/18/FormObjects/text"},next:{title:"4D View Pro area",permalink:"/docs/18/FormObjects/viewProAreaOverview"}},c={},d=[{value:"Overview",id:"Overview",level:2},{value:"Specific properties",id:"Specific-properties",level:2},{value:"Associated variables",id:"Associated-variables",level:3},{value:"Web rendering engine",id:"Web-rendering-engine",level:3},{value:"Access 4D methods",id:"Access-4D-methods",level:3},{value:"$4d object",id:"4d-object",level:3},{value:"Example 1",id:"Example-1",level:4},{value:"Example 2",id:"Example-2",level:4},{value:"Standard actions",id:"Standard-actions",level:2},{value:"Form events",id:"Form-events",level:2},{value:"Web area rules",id:"Web-area-rules",level:2},{value:"User interface",id:"User-interface",level:3},{value:"Subforms",id:"Subforms",level:3},{value:"Web Area and Web server conflict (Windows)",id:"Web-Area-and-Web-server-conflict-Windows",level:3},{value:"Web plugins and Java applets",id:"Web-plugins-and-Java-applets",level:3},{value:"Insertion of protocol (macOS)",id:"Insertion-of-protocol-macOS",level:3},{value:"Access to Web inspector",id:"Access-to-Web-inspector",level:2},{value:"Displaying the Web inspector",id:"Displaying-the-Web-inspector",level:3},{value:"Using the Web inspector",id:"Using-the-Web-inspector",level:3},{value:"Supported Properties",id:"Supported-Properties",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"Overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. The rendering engine of the Web area depends on the execution platform of the application and the selected ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"rendering engine option"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to create several Web areas in the same form. Note, however, that the use of Web areas must follow ",(0,s.jsx)(n.a,{href:"#web-areas-rules",children:"several rules"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Several dedicated ",(0,s.jsx)(n.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"language commands"})," as well as generic and specific ",(0,s.jsx)(n.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Specific-properties",children:"Specific properties"}),"\n",(0,s.jsx)(n.h3,{id:"Associated-variables",children:"Associated variables"}),"\n",(0,s.jsx)(n.p,{children:"Two specific variables can be associated with each Web area:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#url",children:(0,s.jsx)(n.code,{children:"URL"})})," --to control the URL displayed by the Web area"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#progression",children:(0,s.jsx)(n.code,{children:"Progression"})})," -- to control the loading percentage of the page displayed in the Web area."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Web-rendering-engine",children:"Web rendering engine"}),"\n",(0,s.jsxs)(n.p,{children:["You can choose between ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"two rendering engines"})," for the Web area, depending on the specifics of your application."]}),"\n",(0,s.jsx)(n.p,{children:"Selecting the embedded web rendering engine allows you to call 4D methods from the Web area."}),"\n",(0,s.jsx)(n.h3,{id:"Access-4D-methods",children:"Access 4D methods"}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," property is selected, you can call 4D methods from a Web area."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This property is only available if the Web area ",(0,s.jsx)(n.a,{href:"#use-embedded-web-rendering-engine",children:"uses the embedded Web rendering engine"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4d-object",children:"$4d object"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"#use-embedded-web-rendering-engine",children:"4D embedded Web rendering engine"}),' supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.']}),"\n",(0,s.jsxs)(n.p,{children:["For example, to call the ",(0,s.jsx)(n.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-codeJS",children:"$4d.HelloWorld();\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The syntax of calls to 4D methods is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-codeJS",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method.\nThese parameters can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function(result)"}),': Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the ',(0,s.jsx)(n.code,{children:"result"})," parameter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"result"}),': Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the ',(0,s.jsx)(n.code,{children:"C_OBJECT"})," command to return the objects."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding:\n",(0,s.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["Given a 4D project method named ",(0,s.jsx)(n.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,s.jsxs)(n.p,{children:["4D code of ",(0,s.jsx)(n.code,{children:"today"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the Web area, the 4D method can be called with the following syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area."}),"\n",(0,s.jsx)(n.p,{children:"Here is the code of the HTML page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The 4D project method ",(0,s.jsx)(n.code,{children:"calcSum"})," receives parameters (",(0,s.jsx)(n.code,{children:"$1...$n"}),") and returns their sum in ",(0,s.jsx)(n.code,{children:"$0"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["4D code of ",(0,s.jsx)(n.code,{children:"calcSum"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_REAL(${1}) // receives n REAL type parameters\n C_REAL($0) // returns a Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,s.jsx)(n.p,{children:"The JavaScript code run in the Web area is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // result is 262.5\n    });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Standard-actions",children:"Standard actions"}),"\n",(0,s.jsxs)(n.p,{children:["Four specific standard actions are available for managing Web areas automatically: ",(0,s.jsx)(n.code,{children:"Open Back URL"}),", ",(0,s.jsx)(n.code,{children:"Open Next URL"}),", ",(0,s.jsx)(n.code,{children:"Refresh Current URL"})," and ",(0,s.jsx)(n.code,{children:"Stop Loading URL"}),". These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"Standard actions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Form-events",children:"Form events"}),"\n",(0,s.jsx)(n.p,{children:"Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Begin URL Loading"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On URL Resource Loading"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On End URL Loading"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On URL Filtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Open External Link"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Window Opening Denied"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition, Web areas support the following generic form events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Load"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Unload"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Getting Focus"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"On Losing Focus"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Web-area-rules",children:"Web area rules"}),"\n",(0,s.jsx)(n.h3,{id:"User-interface",children:"User interface"}),"\n",(0,s.jsx)(n.p,{children:"When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Edit menu commands"}),": When the Web area has the focus, the ",(0,s.jsx)(n.strong,{children:"Edit"})," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Context menu"}),": It is possible to use the standard ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesEntry#context-menu",children:"context menu"})," of the system with the Web area. Display of the context menu can be controlled using the ",(0,s.jsx)(n.code,{children:"WA SET PREFERENCE"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Drag and drop"}),': The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties.\nFor security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the mouse cursor displays a "forbidden" icon ',(0,s.jsx)(n.img,{src:r(117035).A+"",width:"26",height:"28"}),". You have to use the ",(0,s.jsx)(n.code,{children:"WA SET PREFERENCE"})," command to explicitly allow the dropping of URLs or files in the area."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Subforms",children:"Subforms"}),"\n",(0,s.jsx)(n.p,{children:"For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The subform must not be able to scroll"}),"\n",(0,s.jsx)(n.li,{children:"The limits of the Web area must not exceed the size of the subform"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Superimposing a Web area on top of or beneath other form objects is not supported."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Web-Area-and-Web-server-conflict-Windows",children:"Web Area and Web server conflict (Windows)"}),"\n",(0,s.jsx)(n.p,{children:"Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server."}),"\n",(0,s.jsx)(n.h3,{id:"Web-plugins-and-Java-applets",children:"Web plugins and Java applets"}),"\n",(0,s.jsx)(n.p,{children:"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level."}),"\n",(0,s.jsx)(n.h3,{id:"Insertion-of-protocol-macOS",children:"Insertion of protocol (macOS)"}),"\n",(0,s.jsxs)(n.p,{children:['The URLs handled by programming in Web areas under macOS must begin with the protocol. For example, you need to pass the string "',(0,s.jsx)(n.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" and not just "',(0,s.jsx)(n.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,s.jsx)(n.h2,{id:"Access-to-Web-inspector",children:"Access to Web inspector"}),"\n",(0,s.jsx)(n.p,{children:"You can view and use a Web inspector within Web areas of your forms. The Web inspector is a debugger which is provided by the embedded Web engine. It allows to parse the code and the flow of information of the Web pages."}),"\n",(0,s.jsx)(n.h3,{id:"Displaying-the-Web-inspector",children:"Displaying the Web inspector"}),"\n",(0,s.jsx)(n.p,{children:"The following conditions must be met in order to view the Web inspector in a Web area:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You must ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"select the embedded Web rendering engine"})," for the area (the Web inspector is only available with this configuration)."]}),"\n",(0,s.jsxs)(n.li,{children:["You must enable the ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesEntry#context-menu",children:"context menu"})," for the area (this menu is used to call the inspector)"]}),"\n",(0,s.jsx)(n.li,{children:"You must expressly enable the use of the inspector in the area by means of the following statement:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-the-Web-inspector",children:"Using the Web inspector"}),"\n",(0,s.jsxs)(n.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,s.jsx)(n.strong,{children:"Inspect Element"})," in the context menu of the area. When you select this option, the Web inspector window is displayed."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The Web inspector is included in the embedded Web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Supported-Properties",children:"Supported Properties"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#url",children:"URL"})," -\n",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,s.jsx)(n.a,{href:"/docs/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,i={},d=null,l=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},117035:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(296540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);